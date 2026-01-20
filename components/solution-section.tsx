import { ChevronRight } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Solution = {
  id: string;
  title: string;
  promise: string;
  features: readonly string[];
  outcomes: readonly string[];
  faqs: readonly { question: string; answer: string }[];
};

export function SolutionSection({
  solution,
  className,
}: {
  solution: Solution;
  className?: string;
}) {
  return (
    <section id={solution.id} className={cn("grid gap-6 lg:grid-cols-2", className)}>
      <Card className="border-border/70 bg-card/80 shadow-soft">
        <CardHeader className="space-y-3">
          <Badge variant="outline" className="text-primary">{solution.title}</Badge>
          <CardTitle className="text-2xl">{solution.promise}</CardTitle>
          <p className="text-sm text-muted-foreground">
            Built for high-volume, regulated workflows with human-in-the-loop controls.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-tight text-muted-foreground">
              Features
            </h4>
            <ul className="space-y-2">
              {solution.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary/80" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-tight text-muted-foreground">
              Outcomes
            </h4>
            <ul className="space-y-2">
              {solution.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary/60" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button asChild>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
              Book a demo
              <ChevronRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
      <Card className="border-border/70 bg-card/80 shadow-soft">
        <CardHeader>
          <CardTitle className="text-lg">Common questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-1">
            {solution.faqs.map((faq, idx) => (
              <AccordionItem key={faq.question} value={`item-${idx}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
