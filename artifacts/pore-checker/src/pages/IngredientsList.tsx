import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Layout } from "../components/Layout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { RatingBadge } from "../components/RatingBadge";
import { comedogenicDatabase } from "../data/comedogenicDatabase";
import { getBaseHelmetProps } from "../lib/seo";

export default function IngredientsList() {
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState<number | "all">("all");

  const filteredData = useMemo(() => {
    return comedogenicDatabase.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                           item.aliases.some(a => a.toLowerCase().includes(search.toLowerCase()));
      const matchesRating = ratingFilter === "all" || item.rating === ratingFilter;
      return matchesSearch && matchesRating;
    });
  }, [search, ratingFilter]);

  const helmetProps = getBaseHelmetProps(
    "List of Comedogenic Ingredients | Pore Checker",
    "Browse our complete database of skincare ingredients, their comedogenic ratings, and whether they are safe for acne-prone skin.",
    "/comedogenic-ingredients-list"
  );

  return (
    <Layout>
      <Helmet>
        <title>{helmetProps.title}</title>
        <meta name="description" content={helmetProps.description} />
        <link rel="canonical" href={helmetProps.canonical} />
      </Helmet>
      
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-6">Comedogenic Ingredients List</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Browse our database of {comedogenicDatabase.length} ingredients. Filter by rating or search by name.
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
            {[0, 1, 2, 3, 4, 5].map(r => (
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
                <TableHead className="w-[300px]">Ingredient</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Category</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map(item => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium">
                    <Link href={`/is-${item.slug}-comedogenic`} className="text-primary hover:underline">
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