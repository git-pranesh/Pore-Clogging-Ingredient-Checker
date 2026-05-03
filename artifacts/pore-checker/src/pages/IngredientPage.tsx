import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SeoHead } from "../components/SeoHead";
import { RatingBadge } from "../components/RatingBadge";
import { ingredientPages, type IngredientPage as IngredientPageType } from "../data/ingredientPages";
import {
  buildSeo,
  articleJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "../lib/seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";

function pickRelated(page: IngredientPageType, count = 5): IngredientPageType[] {
  const related: IngredientPageType[] = [];
  const seen = new Set<string>([page.slug]);

  for (const slug of page.saferAlternatives) {
    if (related.length >= count) break;
    const found = ingredientPages.find((p) => p.slug === slug);
    if (found && !seen.has(found.slug)) {
      related.push(found);
      seen.add(found.slug);
    }
  }

  if (related.length < count) {
    const sameRating = ingredientPages
      .filter((p) => !seen.has(p.slug) && p.rating === page.rating)
      .slice(0, count - related.length);
    for (const p of sameRating) {
      related.push(p);
      seen.add(p.slug);
    }
  }

  if (related.length < count) {
    const fillers = ingredientPages
      .filter((p) => !seen.has(p.slug))
      .sort((a, b) => Math.abs(a.rating - page.rating) - Math.abs(b.rating - page.rating))
      .slice(0, count - related.length);
    for (const p of fillers) {
      related.push(p);
      seen.add(p.slug);
    }
  }

  return related.slice(0, count);
}

export default function IngredientPage({ page }: { page: IngredientPageType }) {
  const path = `/is-${page.slug}-comedogenic`;
  const seo = buildSeo(
    `Is ${page.displayName} Comedogenic? Rating & Alternatives`,
    `Find out if ${page.displayName} clogs pores. Comedogenic rating, alternatives, and what it means for acne-prone skin.`,
    path,
  );

  const related = pickRelated(page, 5);

  const jsonLd = [
    articleJsonLd({
      title: seo.title,
      description: seo.description,
      path,
    }),
    faqJsonLd(page.faqs),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Ingredients", path: "/comedogenic-ingredients-list" },
      { name: page.displayName, path },
    ]),
  ];

  return (
    <Layout>
      <SeoHead {...seo} ogType="article" jsonLd={jsonLd} />

      <div className="container mx-auto max-w-3xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-6">
            Is {page.displayName} Comedogenic?
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <RatingBadge rating={page.rating} className="text-lg px-4 py-1" />
          </div>
          <p className="text-xl leading-relaxed text-muted-foreground font-medium">
            {page.shortAnswer}
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2>What It Is</h2>
          <p>{page.whatItIs}</p>

          <h2>How It's Used in Skincare</h2>
          <p>{page.howItIsUsed}</p>

          <h2>Why It Does or Doesn't Clog Pores</h2>
          <p>{page.whyItDoesOrDoesntClog}</p>

          <h2>Practical Guidance for Acne-Prone Skin</h2>
          <p>{page.practicalGuidance}</p>

          <h2>Related Ingredients</h2>
          <p>Explore five ingredients commonly compared with {page.displayName}:</p>
          <ul>
            {related.map((alt) => (
              <li key={alt.slug}>
                <Link to={`/is-${alt.slug}-comedogenic`} className="text-primary hover:underline">
                  {alt.displayName}
                </Link>
                {" "}— rating {alt.rating} / 5
              </li>
            ))}
          </ul>

          <div className="my-10 p-6 bg-primary/5 rounded-lg border border-primary/20 text-center not-prose">
            <h3 className="text-lg font-serif font-bold mb-2">Check Your Product for {page.displayName}</h3>
            <p className="text-muted-foreground mb-4">Paste your ingredient list into our checker to see if it contains {page.displayName} or other pore-clogging ingredients.</p>
            <Button asChild>
              <Link to={`/?ings=${encodeURIComponent(page.displayName)}`}>Check Ingredients</Link>
            </Button>
          </div>

          <h2>Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {page.faqs.map((faq, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Layout>
  );
}
