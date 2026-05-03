export const SITE_URL = "https://pore-checker.example.com";

export const getBaseHelmetProps = (title: string, description: string, path: string) => {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    canonical: url,
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      cardType: "summary_large_image",
      title,
      description,
    }
  };
};

export const generateBreadcrumbJsonLd = (items: { name: string; item?: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.item ? { "item": `${SITE_URL}${item.item}` } : {})
    }))
  };
};

export const generateFAQJsonLd = (faqs: { q: string; a: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
};

export const generateArticleJsonLd = (title: string, description: string, path: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": `${SITE_URL}${path}`,
    "author": {
      "@type": "Organization",
      "name": "Pore Clogging Ingredient Checker Editorial"
    }
  };
};