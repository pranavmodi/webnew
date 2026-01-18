import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { whatWeDoCards } from "@/lib/content";

export function FeatureCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {whatWeDoCards.map((card) => (
        <Card
          key={card.title}
          className="group relative overflow-hidden border-border/80 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
          <CardHeader className="space-y-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <card.icon className="h-5 w-5" />
            </div>
            <CardTitle>{card.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{card.value}</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              {card.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-center gap-2 text-sm">
                  <Badge variant="secondary">{outcome}</Badge>
                </div>
              ))}
            </div>
            <Link
              href={card.href}
              className="inline-flex items-center text-sm font-semibold text-primary underline-offset-6 transition hover:underline"
            >
              Explore <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
