import { comedogenicDatabase, type Ingredient } from "../data/comedogenicDatabase";

export function parseIngredients(input: string): string[] {
  if (!input) return [];
  return input
    .split(/[,\n;]/)
    .map((segment) => segment.trim().replace(/^[\s\W]+|[\s\W]+$/g, ""))
    .filter((segment) => segment.length > 0);
}

const normalize = (s: string): string =>
  s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const condense = (s: string): string => normalize(s).replace(/ /g, "");

const tokenize = (s: string): string[] =>
  normalize(s)
    .split(" ")
    .filter((t) => t.length > 1);

type CandidateIndex = {
  ingredient: Ingredient;
  candidates: { raw: string; condensed: string; tokens: string[] }[];
};

let cachedIndex: CandidateIndex[] | null = null;

const buildIndex = (): CandidateIndex[] => {
  if (cachedIndex) return cachedIndex;
  cachedIndex = comedogenicDatabase.map((ingredient) => ({
    ingredient,
    candidates: [ingredient.name, ...ingredient.aliases].map((raw) => ({
      raw,
      condensed: condense(raw),
      tokens: tokenize(raw),
    })),
  }));
  return cachedIndex;
};

export function matchIngredient(name: string): Ingredient | null {
  const queryCondensed = condense(name);
  if (!queryCondensed) return null;
  const queryTokens = tokenize(name);
  const querySet = new Set(queryTokens);
  const index = buildIndex();

  for (const entry of index) {
    for (const c of entry.candidates) {
      if (c.condensed && c.condensed === queryCondensed) {
        return entry.ingredient;
      }
    }
  }

  if (querySet.size > 0) {
    for (const entry of index) {
      for (const c of entry.candidates) {
        if (c.tokens.length === 0) continue;
        const candidateSet = new Set(c.tokens);
        const candidateInQuery = c.tokens.every((t) => querySet.has(t));
        const queryInCandidate = queryTokens.every((t) => candidateSet.has(t));
        if (candidateInQuery || queryInCandidate) {
          return entry.ingredient;
        }
      }
    }
  }

  for (const entry of index) {
    for (const c of entry.candidates) {
      if (c.condensed.length < 6) continue;
      if (
        queryCondensed.includes(c.condensed) ||
        c.condensed.includes(queryCondensed)
      ) {
        return entry.ingredient;
      }
    }
  }

  return null;
}
