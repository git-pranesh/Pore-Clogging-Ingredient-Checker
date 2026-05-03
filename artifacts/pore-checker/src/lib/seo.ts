export const SITE_URL = "https://pore-checker.example.com";
export const SITE_NAME = "Pore Clogging Ingredient Checker";
export const SITE_DESCRIPTION =
  "Free tool to check skincare ingredient lists for pore-clogging, comedogenic ingredients that trigger acne.";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export type SeoBase = {
  title: string;
  description: string;
  canonical: string;
};

export const buildSeo = (
  title: string,
  description: string,
  path: string,
): SeoBase => ({
  title,
  description,
  canonical: `${SITE_URL}${path}`,
});

type JsonLd = Record<string, unknown>;

export const websiteJsonLd = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?ings={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
});

export const webApplicationJsonLd = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  applicationCategory: "HealthApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
});

export const breadcrumbJsonLd = (
  items: { name: string; path?: string }[],
): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    ...(item.path ? { item: `${SITE_URL}${item.path}` } : {}),
  })),
});

export const faqJsonLd = (faqs: { q: string; a: string }[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
});

export const articleJsonLd = (params: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: params.title,
  description: params.description,
  url: `${SITE_URL}${params.path}`,
  datePublished: params.datePublished ?? "2025-01-01",
  dateModified: params.dateModified ?? "2025-06-01",
  author: {
    "@type": "Organization",
    name: `${SITE_NAME} Editorial`,
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${params.path}`,
  },
});

export const itemListJsonLd = (
  name: string,
  items: { name: string; path: string }[],
): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  numberOfItems: items.length,
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: `${SITE_URL}${item.path}`,
  })),
});
