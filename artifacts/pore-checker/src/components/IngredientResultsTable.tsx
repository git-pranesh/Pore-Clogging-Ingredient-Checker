import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { RatingBadge } from "./RatingBadge";
import type { Ingredient } from "../data/comedogenicDatabase";
import { Link } from "react-router-dom";

export interface IngredientResult {
  originalName: string;
  match: Ingredient | null;
}

export function IngredientResultsTable({ results }: { results: IngredientResult[] }) {
  if (results.length === 0) return null;

  return (
    <div className="rounded-md border mt-6 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Ingredient</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Why It Clogs</TableHead>
            <TableHead>Alternatives</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result, i) => {
            if (!result.match) {
              return (
                <TableRow key={i} className="bg-muted/50">
                  <TableCell className="font-medium text-muted-foreground">{result.originalName}</TableCell>
                  <TableCell colSpan={3} className="text-muted-foreground text-sm">Not found in database</TableCell>
                </TableRow>
              );
            }

            const rating = result.match.rating;
            const bgClass =
              rating <= 1
                ? "bg-emerald-50/50"
                : rating === 2
                  ? "bg-yellow-50/60"
                  : rating === 3
                    ? "bg-orange-50/50"
                    : "bg-red-50/50";

            return (
              <TableRow key={i} className={bgClass}>
                <TableCell className="font-medium">
                  <Link to={`/is-${result.match.slug}-comedogenic`} className="hover:underline text-primary">
                    {result.match.name}
                  </Link>
                </TableCell>
                <TableCell>
                  <RatingBadge rating={result.match.rating} />
                </TableCell>
                <TableCell className="text-sm">{result.match.whyItClogs}</TableCell>
                <TableCell className="text-sm">
                  {result.match.saferAlternatives && result.match.saferAlternatives.length > 0 ? (
                    <ul className="list-disc list-inside pl-4">
                      {result.match.saferAlternatives.map(alt => <li key={alt}>{alt}</li>)}
                    </ul>
                  ) : "-"}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
