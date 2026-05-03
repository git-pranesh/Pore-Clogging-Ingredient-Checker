import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { comedogenicDatabase } from "../src/data/comedogenicDatabase";
import { ingredientPages } from "../src/data/ingredientPages";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const publicDir = resolve(root, "public");
mkdirSync(publicDir, { recursive: true });

const SITE = "https://pore-checker.example.com";

const guidePaths = [
  "/non-comedogenic-moisturizer-ingredients",
  "/non-comedogenic-sunscreen-ingredients",
  "/best-ingredients-for-acne-prone-skin",
  "/worst-ingredients-for-acne-prone-skin",
  "/how-to-read-skincare-ingredients-list",
];

const urls: Array<{ loc: string; priority: number }> = [
  { loc: "/", priority: 1.0 },
  { loc: "/comedogenic-ingredients-list", priority: 0.8 },
];
for (let n = 0; n <= 5; n++) urls.push({ loc: `/comedogenic-rating-${n}`, priority: 0.8 });
for (const p of guidePaths) urls.push({ loc: p, priority: 0.7 });
for (const page of ingredientPages) urls.push({ loc: `/is-${page.slug}-comedogenic`, priority: 0.8 });

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${SITE}${u.loc}</loc>\n    <priority>${u.priority.toFixed(1)}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;
writeFileSync(resolve(publicDir, "sitemap.xml"), sitemap);

const dbSorted = [...comedogenicDatabase].sort((a, b) => a.name.localeCompare(b.name));
const llms = `# Pore Clogging Ingredient Checker

A static React + Vite website that helps acne-prone skincare shoppers identify pore-clogging ingredients in product ingredient lists. Each ingredient is rated 0-5 on the comedogenic scale (Fulton/Kligman methodology).

## Rating Scale

- 0 = Will not clog pores (non-comedogenic)
- 1 = Very low chance of clogging
- 2 = Moderately low chance
- 3 = Moderate chance
- 4 = Fairly high chance
- 5 = Very high chance of clogging pores

## Comedogenic Database

${dbSorted.map((i) => `${i.name}: ${i.rating}`).join("\n")}

## Ingredient Detail Pages

${ingredientPages.map((p) => `- ${SITE}/is-${p.slug}-comedogenic`).join("\n")}

## Methodology Notes

Ratings are derived from published comedogenicity studies (rabbit ear assays and human use tests) and industry references such as the Cosmetics Info database. Individual reactions vary; ratings are guidance, not medical advice.
`;
writeFileSync(resolve(publicDir, "llms.txt"), llms);

console.log(`build-static: wrote sitemap.xml (${urls.length} urls) and llms.txt (${dbSorted.length} ingredients)`);
