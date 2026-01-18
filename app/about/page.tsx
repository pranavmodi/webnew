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
    "Possible Minds is a small senior team focused on reliable AI for support and intake in healthcare and legal.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 pb-16 sm:px-6">
      <PageHero
        eyebrow="About"
        title="A small senior team focused on reliable outcomes"
        description="We design and ship AI workflows that teams can trust—fast iteration, measurable results, and strong guardrails."
      />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border/80 shadow-sm">
          <CardHeader className="space-y-3">
            <Badge variant="secondary">Mission</Badge>
            <CardTitle>Make AI dependable for regulated workflows</CardTitle>
            <p className="text-muted-foreground">
              We help healthcare and legal teams respond faster, with higher accuracy, while keeping humans in control.
            </p>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>
              Every deployment ships with audit trails, controls, and a clear measurement plan. We work alongside your
              operators to tune weekly and avoid surprises.
            </p>
            <p>
              We stay intentionally small and senior so decisions are fast and owners stay close to the work.
            </p>
          </CardContent>
        </Card>
        <Card className="border-border/80 shadow-sm">
          <CardHeader>
            <CardTitle>Principles</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {valuesList.map((value) => (
              <div key={value.title} className="rounded-xl border border-border bg-accent/50 p-3">
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
            "Map your flows and rules, then configure intents and safeguards.",
            "Pilot with humans-in-the-loop, then graduate to automation with thresholds.",
            "Instrument everything: latency, quality, accuracy, and conversion.",
            "Weekly checkpoints: review logs, refine prompts, and expand coverage.",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-border bg-white p-3 text-sm text-muted-foreground shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
