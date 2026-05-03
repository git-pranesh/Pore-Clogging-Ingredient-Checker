import { Helmet } from "react-helmet-async";
import { Layout } from "../../components/Layout";
import { getBaseHelmetProps } from "../../lib/seo";

export default function GuideTemplate({ title, description, path, content }: any) {
  const helmetProps = getBaseHelmetProps(title, description, path);

  return (
    <Layout>
      <Helmet>
        <title>{helmetProps.title}</title>
        <meta name="description" content={helmetProps.description} />
        <link rel="canonical" href={helmetProps.canonical} />
      </Helmet>
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <article className="prose prose-slate prose-lg max-w-none">
          <h1 className="font-serif">{title}</h1>
          {content}
        </article>
      </div>
    </Layout>
  );
}