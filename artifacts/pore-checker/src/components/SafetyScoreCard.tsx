import { Card, CardContent } from "./ui/card";
import { getVerdict } from "../lib/score";

export function SafetyScoreCard({ score }: { score: number }) {
  const { text, colorClass } = getVerdict(score);
  
  return (
    <Card className="mt-8 border-primary/20 bg-primary/5">
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-widest">Overall Safety Score</h3>
        <div className={`text-6xl font-bold tracking-tight mb-2 ${colorClass}`}>
          {score}
        </div>
        <p className="text-lg font-medium text-foreground">{text}</p>
        <div className="w-full max-w-md h-2 bg-muted rounded-full mt-4 overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ease-out bg-current ${colorClass}`} 
            style={{ width: `${score}%` }} 
          />
        </div>
      </CardContent>
    </Card>
  );
}