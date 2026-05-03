import type { ReactNode } from "react";
import { Layout } from "../../components/Layout";
import { SeoHead } from "../../components/SeoHead";
import {
  buildSeo,
  articleJsonLd,
  breadcrumbJsonLd,
} from "../../lib/seo";

type Props = {
  title: string;
  description: string;
  path: string;
  content: ReactNode;
};

export default function GuideTemplate({ title, description, path, content }: Props) {
  const seo = buildSeo(title, description, path);
  const jsonLd = [
    articleJsonLd({ title, description, path }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/how-to-read-skincare-ingredients-list" },
      { name: title, path },
    ]),
  ];

  return (
    <Layout>
      <SeoHead {...seo} ogType="article" jsonLd={jsonLd} />
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <article className="prose prose-slate prose-lg max-w-none">
          <h1 className="font-serif">{title}</h1>
          {content}
        </article>
      </div>
    </Layout>
  );
}
