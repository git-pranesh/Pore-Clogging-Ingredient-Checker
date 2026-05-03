import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SeoHead } from "../components/SeoHead";
import { RatingBadge } from "../components/RatingBadge";
import { Button } from "../components/ui/button";
import type { Ingredient } from "../data/comedogenicDatabase";
import { comedogenicDatabase } from "../data/comedogenicDatabase";
import {
  buildSeo,
  articleJsonLd,
  breadcrumbJsonLd,
} from "../lib/seo";

const verdict = (rating: number): string => {
  if (rating <= 1) return "is non-comedogenic and safe for acne-prone skin.";
  if (rating === 2) return "is low-risk for most users but warrants caution if you are very acne-prone.";
  if (rating === 3) return "is moderately comedogenic and may clog pores in acne-prone users.";
  if (rating === 4) return "is highly comedogenic and is best avoided on acne-prone facial skin.";
  return "is one of the most comedogenic ingredients on the Fulton scale and should be avoided on acne-prone skin.";
};

const pickRelated = (item: Ingredient, count = 5): Ingredient[] => {
  const seen = new Set<string>([item.slug]);
  const result: Ingredient[] = [];

  for (const slug of item.saferAlternatives ?? []) {
    if (result.length >= count) break;
    const found = comedogenicDatabase.find((d) => d.slug === slug);
    if (found && !seen.has(found.slug)) {
      result.push(found);
      seen.add(found.slug);
    }
  }

  if (result.length < count) {
    const sameCategory = comedogenicDatabase
      .filter(
        (d) =>
          !seen.has(d.slug) &&
          d.category === item.category &&
          d.rating <= 2,
      )
      .slice(0, count - result.length);
    for (const d of sameCategory) {
      result.push(d);
      seen.add(d.slug);
    }
  }

  if (result.length < count) {
    const fillers = comedogenicDatabase
      .filter((d) => !seen.has(d.slug))
      .sort((a, b) => Math.abs(a.rating - item.rating) - Math.abs(b.rating - item.rating))
      .slice(0, count - result.length);
    for (const d of fillers) {
      result.push(d);
      seen.add(d.slug);
    }
  }

  return result.slice(0, count);
};

export default function IngredientStub({ item }: { item: Ingredient }) {
  const path = `/is-${item.slug}-comedogenic`;
  const seo = buildSeo(
    `Is ${item.name} Comedogenic? Rating ${item.rating}/5`,
    `${item.name} has a comedogenic rating of ${item.rating} out of 5. Find out why and what to use instead on acne-prone skin.`,
    path,
  );

  const related = pickRelated(item, 5);

  const jsonLd = [
    articleJsonLd({ title: seo.title, description: seo.description, path }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Ingredients", path: "/comedogenic-ingredients-list" },
      { name: item.name, path },
    ]),
  ];

  return (
    <Layout>
      <SeoHead {...seo} ogType="article" jsonLd={jsonLd} />

      <div className="container mx-auto max-w-3xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-6">
            Is {item.name} Comedogenic?
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <RatingBadge rating={item.rating} className="text-lg px-4 py-1" />
          </div>
          <p className="text-xl leading-relaxed text-muted-foreground font-medium">
            {item.name} has a comedogenic rating of {item.rating} out of 5. It {verdict(item.rating)}
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2>Why It {item.rating >= 3 ? "Clogs Pores" : "Is Considered Safe"}</h2>
          <p>{item.whyItClogs}</p>

          {item.aliases.length > 0 && (
            <>
              <h2>Common Names on Labels</h2>
              <p>
                {item.name} also appears on ingredient lists as {" "}
                {item.aliases.slice(0, 6).join(", ")}. Learn to recognize all of
                these names so you do not miss it on a product label.
              </p>
            </>
          )}

          <h2>Category</h2>
          <p>
            {item.name} belongs to the <strong>{item.category ?? "general skincare"}</strong> family of cosmetic ingredients. Where it appears in an ingredient list matters: in the top five inactive ingredients of a leave-on product the concentration is high enough to drive the effects described above, while a position in the bottom third of the list typically means a fractional percent that most skin types tolerate.
          </p>

          <h2>Related Ingredients</h2>
          <p>Five ingredients commonly compared with {item.name}:</p>
          <ul>
            {related.map((alt) => (
              <li key={alt.slug}>
                <Link to={`/is-${alt.slug}-comedogenic`} className="text-primary hover:underline">
                  {alt.name}
                </Link>
                {" "}— rating {alt.rating} / 5
              </li>
            ))}
          </ul>

          <div className="my-10 p-6 bg-primary/5 rounded-lg border border-primary/20 text-center not-prose">
            <h3 className="text-lg font-serif font-bold mb-2">Check Your Product for {item.name}</h3>
            <p className="text-muted-foreground mb-4">Paste your ingredient list into our checker to see if it contains {item.name} or other pore-clogging ingredients.</p>
            <Button asChild>
              <Link to={`/?ings=${encodeURIComponent(item.name)}`}>Check Ingredients</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
