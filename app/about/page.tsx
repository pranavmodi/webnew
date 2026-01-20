import { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { valuesList } from "@/lib/content";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description:
    "Possible Minds builds AI agents for healthcare and legal organizations with compliance-first automation.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 pb-16 sm:px-6">
      <PageHero
        eyebrow="About"
        title="AI agents that take the admin weight off your teams"
        description="We build compliance-first automation for healthcare and legal organizations, focused on measurable outcomes."
      />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border/70 bg-card/80 shadow-soft">
          <CardHeader className="space-y-3">
            <Badge variant="outline" className="text-primary">Mission</Badge>
            <CardTitle>Make AI dependable for regulated workflows</CardTitle>
            <p className="text-muted-foreground">
              We help healthcare and legal teams cut operational load while keeping humans in control.
            </p>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>
              Every deployment ships with audit trails, verification, and a clear measurement plan. We work alongside
              your operators to tune weekly and avoid surprises.
            </p>
            <p>
              We stay intentionally focused so decisions are fast and owners stay close to the work.
            </p>
          </CardContent>
        </Card>
        <Card className="border-border/70 bg-card/80 shadow-soft">
          <CardHeader>
            <CardTitle>Principles</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {valuesList.map((value) => (
              <div key={value.title} className="rounded-xl border border-border/70 bg-muted/60 p-3">
                <div className="text-sm font-semibold text-foreground">{value.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="space-y-3">
        <SectionHeading
          eyebrow="How we work"
          title="Tight loops with your ops and compliance teams"
          subtitle="We start with critical workflows, ship quickly, and review quality weekly."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {[
            "Map workflows, rules, and escalation paths with your operators.",
            "Pilot with humans-in-the-loop before expanding automation.",
            "Instrument latency, accuracy, and outcomes with QA checkpoints.",
            "Review weekly, refine prompts, and expand coverage responsibly.",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-border/70 bg-card/80 p-3 text-sm text-muted-foreground shadow-soft">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
