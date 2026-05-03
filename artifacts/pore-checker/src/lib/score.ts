import { Ingredient } from "../data/comedogenicDatabase";

export function computeSafetyScore(ingredients: (Ingredient | null)[]): number {
  let penalty = 0;
  
  for (const item of ingredients) {
    if (item) {
      switch (item.rating) {
        case 5: penalty += 25; break;
        case 4: penalty += 15; break;
        case 3: penalty += 8; break;
        case 2: penalty += 3; break;
        case 1: penalty += 1; break;
        case 0: break;
      }
    }
  }
  
  return Math.max(0, 100 - penalty);
}

export function getVerdict(score: number): { text: string; colorClass: string } {
  if (score >= 90) return { text: "Generally safe", colorClass: "text-emerald-600 dark:text-emerald-500" };
  if (score >= 70) return { text: "Low risk", colorClass: "text-amber-500 dark:text-amber-400" };
  if (score >= 50) return { text: "Some concerns", colorClass: "text-orange-500 dark:text-orange-400" };
  return { text: "High risk", colorClass: "text-red-600 dark:text-red-500" };
}