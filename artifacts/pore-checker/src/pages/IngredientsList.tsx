import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SeoHead } from "../components/SeoHead";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { RatingBadge } from "../components/RatingBadge";
import { comedogenicDatabase } from "../data/comedogenicDatabase";
import {
  buildSeo,
  itemListJsonLd,
  breadcrumbJsonLd,
} from "../lib/seo";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

type SortKey = "name" | "rating" | "category";
type SortDir = "asc" | "desc";

export default function IngredientsList() {
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState<number | "all">("all");
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const filteredData = useMemo(() => {
    const lower = search.toLowerCase();
    const filtered = comedogenicDatabase.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(lower) ||
        item.aliases.some((a) => a.toLowerCase().includes(lower));
      const matchesRating = ratingFilter === "all" || item.rating === ratingFilter;
      return matchesSearch && matchesRating;
    });

    const sorted = [...filtered].sort((a, b) => {
      let cmp = 0;
      if (sortKey === "name") {
        cmp = a.name.localeCompare(b.name);
      } else if (sortKey === "rating") {
        cmp = a.rating - b.rating;
      } else {
        cmp = (a.category ?? "").localeCompare(b.category ?? "");
      }
      return sortDir === "asc" ? cmp : -cmp;
    });

    return sorted;
  }, [search, ratingFilter, sortKey, sortDir]);

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

  const seo = buildSeo(
    "List of Comedogenic Ingredients | Pore Checker",
    "Browse our complete sortable database of skincare ingredients, their comedogenic ratings, and whether they are safe for acne-prone skin.",
    "/comedogenic-ingredients-list",
  );

  const jsonLd = [
    itemListJsonLd(
      "Comedogenic Ingredients",
      comedogenicDatabase.slice(0, 60).map((i) => ({
        name: i.name,
        path: `/is-${i.slug}-comedogenic`,
      })),
    ),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Ingredients List", path: "/comedogenic-ingredients-list" },
    ]),
  ];

  return (
    <Layout>
      <SeoHead {...seo} jsonLd={jsonLd} />

      <div className="container mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-6">Comedogenic Ingredients List</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Browse our database of {comedogenicDatabase.length} ingredients. Filter by rating, search by name, or click any column header to sort.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input
            placeholder="Search ingredients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="md:max-w-sm"
          />
          <div className="flex flex-wrap gap-2">
            <Button
              variant={ratingFilter === "all" ? "default" : "outline"}
              onClick={() => setRatingFilter("all")}
              size="sm"
            >
              All
            </Button>
            {[0, 1, 2, 3, 4, 5].map((r) => (
              <Button
                key={r}
                variant={ratingFilter === r ? "default" : "outline"}
                onClick={() => setRatingFilter(r)}
                size="sm"
              >
                Rating {r}
              </Button>
            ))}
          </div>
        </div>

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
                <TableHead>
                  <button
                    type="button"
                    onClick={() => toggleSort("rating")}
                    className="flex items-center font-medium hover:text-foreground"
                  >
                    Rating {sortIcon("rating")}
                  </button>
                </TableHead>
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
              {filteredData.map((item) => (
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
              {filteredData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                    No ingredients found matching your filters.
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
