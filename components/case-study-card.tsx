import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type CaseStudy = {
  title: string;
  label: string;
  context: string;
  challenge: string;
  solution: string;
  impact: readonly string[];
  notes: string;
};

export function CaseStudyCard({
  study,
  compact = false,
}: {
  study: CaseStudy;
  compact?: boolean;
}) {
  return (
    <Card className="h-full border-border/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{study.label}</Badge>
        </div>
        <CardTitle>{study.title}</CardTitle>
        {!compact && (
          <CardDescription className="text-sm text-muted-foreground">
            {study.context}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-muted-foreground">
        <p>
          <span className="font-semibold text-foreground">Challenge: </span>
          {study.challenge}
        </p>
        <p>
          <span className="font-semibold text-foreground">Solution: </span>
          {study.solution}
        </p>
        <div>
          <span className="font-semibold text-foreground">Impact: </span>
          <ul className="mt-1 space-y-1">
            {study.impact.map((item) => (
              <li key={item} className="pl-4">
                • {item}
              </li>
            ))}
          </ul>
        </div>
        {!compact && (
          <p>
            <span className="font-semibold text-foreground">Notes: </span>
            {study.notes}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
