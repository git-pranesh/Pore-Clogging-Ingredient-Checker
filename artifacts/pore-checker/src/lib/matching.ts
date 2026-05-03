import { comedogenicDatabase, Ingredient } from "../data/comedogenicDatabase";

export function parseIngredients(input: string): string[] {
  if (!input) return [];
  // Split on commas, handling newlines and some basic ANDs
  // This is a naive implementation for the sake of the example
  const splitByComma = input.split(/,|\n/);
  return splitByComma
    .map(i => i.trim().replace(/^\W+|\W+$/g, ""))
    .filter(i => i.length > 0);
}

export function matchIngredient(name: string): Ingredient | null {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  for (const item of comedogenicDatabase) {
    if (item.name.toLowerCase().replace(/[^a-z0-9]/g, "") === normalized) {
      return item;
    }
    for (const alias of item.aliases) {
      if (alias.toLowerCase().replace(/[^a-z0-9]/g, "") === normalized) {
        return item;
      }
    }
  }
  return null;
}