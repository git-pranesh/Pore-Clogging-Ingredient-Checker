import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Layout } from "../components/Layout";
import { RatingBadge } from "../components/RatingBadge";
import { ingredientPages } from "../data/ingredientPages";
import { getBaseHelmetProps, generateArticleJsonLd, generateFAQJsonLd, generateBreadcrumbJsonLd } from "../lib/seo";
import NotFound from "./not-found";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";

export default function IngredientPage() {
  const params = useParams<Record<string, string>>();
  const slug = (params as any)[0] ?? params.slug;
  const page = ingredientPages.find(p => p.slug === slug);

  if (!page) return <NotFound />;

  const helmetProps = getBaseHelmetProps(
    `Is ${page.displayName} Comedogenic? Rating & Alternatives`,
    `Find out if ${page.displayName} clogs pores. Comedogenic rating, alternatives, and what it means for acne-prone skin.`,
    `/is-${page.slug}-comedogenic`
  );

  return (
    <Layout>
      <Helmet>
        <title>{helmetProps.title}</title>
        <meta name="description" content={helmetProps.description} />
        <link rel="canonical" href={helmetProps.canonical} />
      </Helmet>
      
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

          {page.rating >= 3 && page.saferAlternatives.length > 0 && (
            <>
              <h2>Safer Alternatives</h2>
              <ul>
                {page.saferAlternatives.map(alt => (
                  <li key={alt}>
                    <Link href={`/is-${alt}-comedogenic`} className="text-primary hover:underline">
                      {alt.replace(/-/g, ' ')}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="my-10 p-6 bg-primary/5 rounded-lg border border-primary/20 text-center">
            <h3 className="mt-0">Check Your Product for {page.displayName}</h3>
            <p>Paste your ingredient list into our checker to see if it contains {page.displayName} or other pore-clogging ingredients.</p>
            <Button asChild className="mt-4">
              <Link href={`/?ings=${encodeURIComponent(page.displayName)}`}>Check Ingredients</Link>
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