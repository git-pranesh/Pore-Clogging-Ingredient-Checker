import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";

import Home from "@/pages/Home";
import IngredientPage from "@/pages/IngredientPage";
import IngredientsList from "@/pages/IngredientsList";
import RatingFilterPage from "@/pages/RatingFilterPage";
import NonComedogenicMoisturizer from "@/pages/guides/NonComedogenicMoisturizer";
import NonComedogenicSunscreen from "@/pages/guides/NonComedogenicSunscreen";
import BestForAcneProne from "@/pages/guides/BestForAcneProne";
import WorstForAcneProne from "@/pages/guides/WorstForAcneProne";
import HowToRead from "@/pages/guides/HowToRead";
import NotFound from "@/pages/not-found";
import { ingredientPages } from "@/data/ingredientPages";

const queryClient = new QueryClient();
const RATINGS = [0, 1, 2, 3, 4, 5] as const;

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/comedogenic-ingredients-list"
                element={<IngredientsList />}
              />
              {RATINGS.map((r) => (
                <Route
                  key={r}
                  path={`/comedogenic-rating-${r}`}
                  element={<RatingFilterPage rating={r} />}
                />
              ))}
              {ingredientPages.map((page) => (
                <Route
                  key={page.slug}
                  path={`/is-${page.slug}-comedogenic`}
                  element={<IngredientPage page={page} />}
                />
              ))}
              <Route
                path="/non-comedogenic-moisturizer-ingredients"
                element={<NonComedogenicMoisturizer />}
              />
              <Route
                path="/non-comedogenic-sunscreen-ingredients"
                element={<NonComedogenicSunscreen />}
              />
              <Route
                path="/best-ingredients-for-acne-prone-skin"
                element={<BestForAcneProne />}
              />
              <Route
                path="/worst-ingredients-for-acne-prone-skin"
                element={<WorstForAcneProne />}
              />
              <Route
                path="/how-to-read-skincare-ingredients-list"
                element={<HowToRead />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
