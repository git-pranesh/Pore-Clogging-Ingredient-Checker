import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built for acne-prone skincare shoppers.
        </p>
        <div className="flex gap-4">
          <Link to="/comedogenic-rating-0" className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4">Rating 0</Link>
          <Link to="/comedogenic-rating-5" className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4">Rating 5</Link>
        </div>
      </div>
    </footer>
  );
}
