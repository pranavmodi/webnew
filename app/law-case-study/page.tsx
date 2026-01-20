import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Law Firm Intake Case Study | ${SITE_NAME}`,
  description:
    "How a regional law firm accelerated intake with AI-driven triage and follow-ups.",
};

export default function LawCaseStudyPage() {
  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/blog/law-case-study.jpg"
            alt="Law firm intake case study hero"
            fill
            priority
            className="object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/75 to-black" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Case Study
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              How a Regional Law Firm Accelerated Client Intake with AI
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              Possible Minds deployed intake automation to help a multi-office law firm move faster on new matters,
              reduce back-and-forth, and keep attorneys focused on high-value work.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {[
                "January 12, 2024",
                "Case Study",
                "6 min read",
                "Author: Client Ops Team",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/20 bg-[#04150d] px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-12 px-4 pt-12 sm:px-6">
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">The challenge</h2>
          <p className="mt-4 text-base text-foreground/80">
            The firm handled inbound matters across multiple practice areas. Intake teams spent hours chasing missing
            documents, verifying details, and updating status across email and phone. This slowed time-to-assign and
            created inconsistent client experiences.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Objectives</h2>
          <ul className="mt-6 space-y-3 text-base text-foreground/80">
            {[
              "Speed up intake qualification and conflict checks",
              "Standardize follow-up requests for missing documents",
              "Provide attorneys with structured case summaries",
              "Maintain human review for high-risk matters",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00ff41]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Workflow highlights</h2>
          <div className="mt-6 space-y-4 text-base text-foreground/80">
            <div>
              <h3 className="text-lg font-semibold text-primary">Intake triage</h3>
              <p className="mt-2">
                AI analyzed inbound emails and forms, routed matters by practice area, and triggered follow-ups for
                missing fields.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">Structured summaries</h3>
              <p className="mt-2">
                Attorneys received standardized summaries with timelines, parties, and urgency indicators.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">Human-in-the-loop control</h3>
              <p className="mt-2">
                High-value or sensitive matters were automatically flagged for review before any response was sent.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Results</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                value: "40%",
                title: "Faster speed-to-lead",
                detail: "New matters reached attorneys faster with fewer manual steps.",
              },
              {
                value: "25%",
                title: "Higher conversion",
                detail: "Consistent follow-ups improved conversion and reduced drop-offs.",
              },
              {
                value: "60%",
                title: "Fewer manual tags",
                detail: "Automation handled routing and classification with audit logs.",
              },
              {
                value: "2x",
                title: "Cleaner case files",
                detail: "Standardized summaries reduced rework and clarifications.",
              },
            ].map((metric) => (
              <div
                key={metric.title}
                className="rounded-2xl border border-primary/20 bg-black/60 p-5"
              >
                <div className="text-4xl font-semibold text-[#00ff41]">
                  {metric.value}
                </div>
                <div className="mt-2 text-lg font-semibold text-primary">
                  {metric.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Next steps</h2>
          <p className="mt-4 text-base text-foreground/80">
            The firm is expanding automation to include status updates, document extraction, and proactive client
            outreach while maintaining strict review workflows.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="animate-glow">
              <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Book a demo
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="mailto:hello@possibleminds.ai">Email us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
