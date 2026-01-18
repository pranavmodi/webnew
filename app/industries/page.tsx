import { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/cta-section";
import { FlowDiagram } from "@/components/flow-diagram";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { industries, securityPoints } from "@/lib/content";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

const healthcare = industries.find((item) => item.key === "healthcare");
const legal = industries.find((item) => item.key === "legal");

export const metadata: Metadata = {
  title: `Industries | ${SITE_NAME}`,
  description:
    "Possible Minds focuses on healthcare and legal workflows: support, intake, automation, and compliance-minded operations.",
};

export default function IndustriesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-14 px-4 pb-16 sm:px-6">
      <PageHero
        eyebrow="Industries"
        title="Focused on healthcare and legal outcomes"
        description="AI that respects sensitive data, accelerates triage and intake, and keeps your teams in control."
        actions={
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Book a demo
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/solutions">View solutions</Link>
            </Button>
          </div>
        }
      />

      {healthcare && (
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Healthcare"
            title="Reduce backlogs without compromising safety"
            subtitle={healthcare.description}
          />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="border-border/80 shadow-sm">
              <CardHeader>
                <CardTitle>Workflows</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  {healthcare.workflows.slice(0, 2).map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm">
                      <Badge variant="secondary">Flow</Badge>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {healthcare.workflows.slice(2).map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm">
                      <Badge variant="secondary">Flow</Badge>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="col-span-2 rounded-xl border border-dashed border-border bg-accent/60 p-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Example automation:</span>{" "}
                  {healthcare.example}
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/80 shadow-sm">
              <CardHeader>
                <CardTitle>Outcomes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {healthcare.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary/80" />
                    <p>{outcome}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <FlowDiagram
            steps={[
              { title: "Connect", detail: "Securely connect patient portal, telephony, EMR, and knowledge bases." },
              { title: "Triage", detail: "Detect urgency, route to care vs. billing, and draft replies with citations." },
              { title: "Act", detail: "Schedule callbacks, update records, and log structured events with audit trails." },
            ]}
          />

          <Card className="border-border/80 shadow-sm">
            <CardHeader>
              <CardTitle>Security & privacy posture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {securityPoints.map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500/80" />
                  <p>{point}</p>
                </div>
              ))}
              <p className="text-xs text-muted-foreground">
                We do not claim compliance unless provided with exact language and evidence by your team.
              </p>
            </CardContent>
          </Card>
        </section>
      )}

      {legal && (
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Legal"
            title="Accelerate intake and client communication"
            subtitle={legal.description}
          />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="border-border/80 shadow-sm">
              <CardHeader>
                <CardTitle>Workflows</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  {legal.workflows.slice(0, 2).map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm">
                      <Badge variant="secondary">Flow</Badge>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {legal.workflows.slice(2).map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm">
                      <Badge variant="secondary">Flow</Badge>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="col-span-2 rounded-xl border border-dashed border-border bg-accent/60 p-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Example automation:</span>{" "}
                  {legal.example}
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/80 shadow-sm">
              <CardHeader>
                <CardTitle>Outcomes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {legal.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary/80" />
                    <p>{outcome}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <FlowDiagram
            steps={[
              { title: "Collect", detail: "Gather parties, timelines, and documents across web, email, or phone." },
              { title: "Qualify", detail: "Score and route by practice area, geography, and conflicts criteria." },
              { title: "Prepare", detail: "Generate intake summaries and next steps for attorneys with audit logs." },
            ]}
          />

          <Card className="border-border/80 shadow-sm">
            <CardHeader>
              <CardTitle>Security & privacy posture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {securityPoints.map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500/80" />
                  <p>{point}</p>
                </div>
              ))}
              <p className="text-xs text-muted-foreground">
                No implied compliance guarantees—controls and attestations are configured with your legal and security teams.
              </p>
            </CardContent>
          </Card>
        </section>
      )}

      <CTASection />
    </div>
  );
}
