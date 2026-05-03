import { Link } from "react-router-dom";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2 font-bold text-primary">
            PoreChecker
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/comedogenic-ingredients-list" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Ingredients List
            </Link>
            <Link to="/how-to-read-skincare-ingredients-list" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Guides
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
