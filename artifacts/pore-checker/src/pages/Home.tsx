import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import { Layout } from "../components/Layout";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { IngredientResultsTable } from "../components/IngredientResultsTable";
import { SafetyScoreCard } from "../components/SafetyScoreCard";
import { exampleProducts } from "../data/exampleProducts";
import { parseIngredients, matchIngredient } from "../lib/matching";
import { computeSafetyScore } from "../lib/score";
import { encodeIngredients, decodeIngredients } from "../lib/url-state";
import { getBaseHelmetProps, generateArticleJsonLd } from "../lib/seo";

export default function Home() {
  const [location, setLocation] = useLocation();
  const [input, setInput] = useState("");
  const [results, setResults] = useState<{originalName: string, match: any}[] | null>(null);
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ings = params.get("ings");
    if (ings) {
      const decoded = decodeIngredients(ings);
      setInput(decoded);
      runCheck(decoded);
    }
  }, []);

  const runCheck = (text: string) => {
    if (!text.trim()) {
      setResults(null);
      return;
    }
    const parsed = parseIngredients(text);
    const matches = parsed.map(name => ({
      originalName: name,
      match: matchIngredient(name)
    }));
    setResults(matches);
  };

  const handleCheck = () => {
    runCheck(input);
    setLocation(`/?ings=${encodeIngredients(input)}`, { replace: true });
  };

  const handleExample = (type: keyof typeof exampleProducts) => {
    const text = exampleProducts[type];
    setInput(text);
    runCheck(text);
    setLocation(`/?ings=${encodeIngredients(text)}`, { replace: true });
  };

  const score = results ? computeSafetyScore(results.map(r => r.match)) : 0;
  const helmetProps = getBaseHelmetProps(
    "Pore Clogging Ingredient Checker | Find Acne Triggers",
    "Paste your skincare ingredients list to instantly check for pore-clogging and comedogenic ingredients that trigger acne.",
    "/"
  );

  return (
    <Layout>
      <Helmet>
        <title>{helmetProps.title}</title>
        <meta name="description" content={helmetProps.description} />
        <link rel="canonical" href={helmetProps.canonical} />
      </Helmet>
      
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Pore Clogging Ingredient Checker
          </h1>
          <p className="text-xl text-muted-foreground">
            Paste an ingredient list below to see if your product might cause breakouts.
          </p>
        </div>

        <div className="space-y-4">
          <Textarea 
            placeholder="Paste your full ingredients list here (e.g. Water, Glycerin, Niacinamide...)" 
            className="min-h-[200px] text-base resize-y"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex gap-2">
              <span className="text-sm font-medium text-muted-foreground self-center mr-2">Try an example:</span>
              <Button variant="outline" size="sm" onClick={() => handleExample('moisturizer')}>Moisturizer</Button>
              <Button variant="outline" size="sm" onClick={() => handleExample('sunscreen')}>Sunscreen</Button>
              <Button variant="outline" size="sm" onClick={() => handleExample('foundation')}>Foundation</Button>
            </div>
            <Button size="lg" className="w-full sm:w-auto px-8" onClick={handleCheck}>
              Check Ingredients
            </Button>
          </div>
        </div>

        {results && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif font-bold text-center border-b pb-4">Analysis Results</h2>
            <SafetyScoreCard score={score} />
            <IngredientResultsTable results={results} />
          </div>
        )}
      </div>
    </Layout>
  );
}