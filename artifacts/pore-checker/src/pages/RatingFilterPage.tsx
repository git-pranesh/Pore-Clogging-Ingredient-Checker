import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SeoHead } from "../components/SeoHead";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { RatingBadge } from "../components/RatingBadge";
import { comedogenicDatabase } from "../data/comedogenicDatabase";
import {
  buildSeo,
  itemListJsonLd,
  breadcrumbJsonLd,
} from "../lib/seo";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

type Rating = 0 | 1 | 2 | 3 | 4 | 5;
type SortKey = "name" | "category";
type SortDir = "asc" | "desc";

const explanations: Record<Rating, string> = {
  0: "Rating 0 means the ingredient will not clog pores. It is considered non-comedogenic and safe for acne-prone skin.",
  1: "Rating 1 means there is a very low chance the ingredient will clog pores. Generally safe for most people.",
  2: "Rating 2 means there is a moderately low chance it will clog pores. Most people tolerate these fine.",
  3: "Rating 3 means there is a moderate chance it will clog pores. Use with caution if you are very acne-prone.",
  4: "Rating 4 means the ingredient is fairly highly comedogenic. It is likely to clog pores for many people.",
  5: "Rating 5 means the ingredient is highly comedogenic. It is very likely to clog pores and cause breakouts.",
};

export default function RatingFilterPage({ rating }: { rating: Rating }) {
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const items = useMemo(() => {
    const filtered = comedogenicDatabase.filter((item) => item.rating === rating);
    const sorted = [...filtered].sort((a, b) => {
      const cmp =
        sortKey === "name"
          ? a.name.localeCompare(b.name)
          : (a.category ?? "").localeCompare(b.category ?? "");
      return sortDir === "asc" ? cmp : -cmp;
    });
    return sorted;
  }, [rating, sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sortIcon = (key: SortKey) => {
    if (sortKey !== key) return <ArrowUpDown className="inline h-3.5 w-3.5 ml-1 opacity-50" />;
    return sortDir === "asc"
      ? <ArrowUp className="inline h-3.5 w-3.5 ml-1" />
      : <ArrowDown className="inline h-3.5 w-3.5 ml-1" />;
  };

  const path = `/comedogenic-rating-${rating}`;
  const seo = buildSeo(
    `Comedogenic Rating ${rating} Ingredients | Pore Checker`,
    explanations[rating],
    path,
  );

  const jsonLd = [
    itemListJsonLd(
      `Comedogenic rating ${rating} ingredients`,
      items.map((i) => ({ name: i.name, path: `/is-${i.slug}-comedogenic` })),
    ),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Ingredients List", path: "/comedogenic-ingredients-list" },
      { name: `Rating ${rating}`, path },
    ]),
  ];

  return (
    <Layout>
      <SeoHead {...seo} jsonLd={jsonLd} />

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
                <TableHead className="w-[300px]">
                  <button
                    type="button"
                    onClick={() => toggleSort("name")}
                    className="flex items-center font-medium hover:text-foreground"
                  >
                    Ingredient {sortIcon("name")}
                  </button>
                </TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>
                  <button
                    type="button"
                    onClick={() => toggleSort("category")}
                    className="flex items-center font-medium hover:text-foreground"
                  >
                    Category {sortIcon("category")}
                  </button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium">
                    <Link to={`/is-${item.slug}-comedogenic`} className="text-primary hover:underline">
                      {item.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <RatingBadge rating={item.rating} />
                  </TableCell>
                  <TableCell className="capitalize text-muted-foreground">
                    {item.category || "Unknown"}
                  </TableCell>
                </TableRow>
              ))}
              {items.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                    No ingredients found at this rating.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
}
