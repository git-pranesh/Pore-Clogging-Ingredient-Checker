import { Switch, Route, Router as WouterRouter } from "wouter";
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

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path={/^\/is-(.+)-comedogenic$/} component={IngredientPage} />
      <Route path="/comedogenic-ingredients-list" component={IngredientsList} />
      <Route path={/^\/comedogenic-rating-([0-5])$/} component={RatingFilterPage} />
      
      <Route path="/non-comedogenic-moisturizer-ingredients" component={NonComedogenicMoisturizer} />
      <Route path="/non-comedogenic-sunscreen-ingredients" component={NonComedogenicSunscreen} />
      <Route path="/best-ingredients-for-acne-prone-skin" component={BestForAcneProne} />
      <Route path="/worst-ingredients-for-acne-prone-skin" component={WorstForAcneProne} />
      <Route path="/how-to-read-skincare-ingredients-list" component={HowToRead} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;