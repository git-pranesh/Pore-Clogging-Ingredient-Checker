import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Layout } from "../components/Layout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { RatingBadge } from "../components/RatingBadge";
import { comedogenicDatabase } from "../data/comedogenicDatabase";
import { getBaseHelmetProps } from "../lib/seo";
import NotFound from "./not-found";

export default function RatingFilterPage() {
  const params = useParams<Record<string, string>>();
  const ratingStr = (params as any)[0] ?? params.n;
  const rating = parseInt(ratingStr || "", 10);

  if (isNaN(rating) || rating < 0 || rating > 5) {
    return <NotFound />;
  }

  const items = comedogenicDatabase.filter(item => item.rating === rating);

  const explanations: Record<number, string> = {
    0: "Rating 0 means the ingredient will not clog pores. It is considered non-comedogenic and safe for acne-prone skin.",
    1: "Rating 1 means there is a very low chance the ingredient will clog pores. Generally safe for most people.",
    2: "Rating 2 means there is a moderately low chance it will clog pores. Most people tolerate these fine.",
    3: "Rating 3 means there is a moderate chance it will clog pores. Use with caution if you are very acne-prone.",
    4: "Rating 4 means the ingredient is fairly highly comedogenic. It is likely to clog pores for many people.",
    5: "Rating 5 means the ingredient is highly comedogenic. It is very likely to clog pores and cause breakouts."
  };

  const helmetProps = getBaseHelmetProps(
    `Comedogenic Rating ${rating} Ingredients | Pore Checker`,
    explanations[rating],
    `/comedogenic-rating-${rating}`
  );

  return (
    <Layout>
      <Helmet>
        <title>{helmetProps.title}</title>
        <meta name="description" content={helmetProps.description} />
        <link rel="canonical" href={helmetProps.canonical} />
      </Helmet>
      
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-6 text-foreground">
          Comedogenic Rating {rating} Ingredients
        </h1>
        <p className="text-xl leading-relaxed text-muted-foreground mb-8">
          {explanations[rating]}
        </p>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Ingredient</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Category</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map(item => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium">
                    <Link href={`/is-${item.slug}-comedogenic`} className="text-primary hover:underline">
                      {item.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <RatingBadge rating={item.rating as any} />
                  </TableCell>
                  <TableCell className="capitalize text-muted-foreground">
                    {item.category || "Unknown"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
}