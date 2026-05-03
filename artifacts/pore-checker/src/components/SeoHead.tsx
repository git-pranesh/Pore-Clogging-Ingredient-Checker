import { Helmet } from "react-helmet-async";
import { OG_IMAGE, SITE_NAME, type SeoBase } from "../lib/seo";

type JsonLdValue = Record<string, unknown>;

type Props = SeoBase & {
  ogType?: "website" | "article";
  jsonLd?: JsonLdValue[];
};

export function SeoHead({
  title,
  description,
  canonical,
  ogType = "website",
  jsonLd = [],
}: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {jsonLd.map((data, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
