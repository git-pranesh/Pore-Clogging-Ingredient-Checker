import { ingredientPages } from "../src/data/ingredientPages";
import { comedogenicDatabase } from "../src/data/comedogenicDatabase";

const wc = (s: string) => s.split(/\s+/).filter(Boolean).length;
const dbBySlug = new Map(comedogenicDatabase.map((d) => [d.slug, d]));

let failed = 0;
for (const p of ingredientPages) {
  const total =
    wc(p.shortAnswer) +
    wc(p.whatItIs) +
    wc(p.howItIsUsed) +
    wc(p.whyItDoesOrDoesntClog);
  if (total < 400) {
    console.error(`SHORT: ${p.slug} = ${total} words across the four main prose sections`);
    failed++;
  }
  const db = dbBySlug.get(p.slug);
  if (!db) {
    console.error(`MISSING DB ENTRY: ${p.slug} has a detail page but no database row`);
    failed++;
    continue;
  }
  if (db.rating !== p.rating) {
    console.error(`RATING MISMATCH: ${p.slug} page=${p.rating} db=${db.rating}`);
    failed++;
  }
}
if (failed > 0) {
  console.error(`Page validation failed: ${failed} issue(s)`);
  process.exit(1);
}
console.log(`Page validation OK: ${ingredientPages.length} detail pages, all >=400 main-section words, ratings match DB`);
