import { FeatureCards } from "@/components/feature-cards";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { IndustryTabs } from "@/components/industry-tabs";
import { OutcomesBar } from "@/components/outcomes-bar";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies, proofBadges } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20 bg-black pb-24">
      <Hero />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <OutcomesBar />
      </div>

      <section id="solutions" className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Solutions"
          title="Two products, one compliance-first platform"
          subtitle="EmailTag powers inbox automation. ProdBot delivers multi-channel support with human handoff."
        />
        <FeatureCards />
      </section>

      <section id="how" className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Connect workflows, automate decisions, keep control"
          subtitle="Built for healthcare and legal teams that need clear audit trails and reliable automation."
        />
        <HowItWorks />
      </section>

      <section id="industries" className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Industries"
          title="Focused on the most document-heavy operations"
          subtitle="Purpose-built for healthcare and legal workflows that demand precision."
        />
        <IndustryTabs />
      </section>

      <section id="security" className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Security"
          title="Trusted controls for regulated data"
          subtitle="Verification, encryption, and auditability are built into every workflow."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofBadges.map((badge) => (
            <div
              key={badge.label}
              className="rounded-2xl border border-primary/25 bg-[#04150d] p-4 text-sm"
            >
              <div className="text-base font-semibold text-foreground">
                {badge.label}
              </div>
              <p className="mt-2 text-muted-foreground">{badge.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cases" className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Case studies"
          title="Patterns we deploy across teams"
          subtitle="Illustrative examples that map to real-world workflows."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="rounded-2xl border border-primary/25 bg-[#04150d] p-5 text-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-tight text-primary">
                {study.label}
              </div>
              <div className="mt-2 text-lg font-semibold text-foreground">
                {study.title}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{study.context}</p>
              <div className="mt-4 space-y-2 text-muted-foreground">
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
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-primary/30 bg-[#04150d] p-8 text-center shadow-soft">
          <div className="mx-auto max-w-2xl space-y-4">
            <div className="text-sm font-semibold uppercase tracking-tight text-primary">
              Ready to deploy?
            </div>
            <h2 className="text-3xl font-semibold text-foreground">
              Bring matrix-green automation to your inbox and support workflows
            </h2>
            <p className="text-base text-muted-foreground">
              Book a demo to map your highest-volume workflows and define the guardrails that keep teams in control.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button asChild size="lg" className="animate-glow">
                <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
                  Book a demo
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="mailto:hello@possibleminds.ai">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
