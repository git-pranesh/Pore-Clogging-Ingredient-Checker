import { Badge } from "./ui/badge";

export function RatingBadge({ rating, className = "" }: { rating: 0 | 1 | 2 | 3 | 4 | 5; className?: string }) {
  const colors: Record<number, string> = {
    0: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
    1: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
    2: "bg-amber-100 text-amber-800 hover:bg-amber-100",
    3: "bg-orange-100 text-orange-800 hover:bg-orange-100",
    4: "bg-red-100 text-red-800 hover:bg-red-100",
    5: "bg-red-100 text-red-800 hover:bg-red-100",
  };

  return (
    <Badge variant="outline" className={`font-semibold ${colors[rating]} ${className}`}>
      {rating} / 5
    </Badge>
  );
}