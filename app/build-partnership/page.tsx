import type { Metadata } from "next";
import {
  ArrowDown,
  Check,
  CircleGauge,
  GitBranch,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

import ClickBeacon from "@/components/analytics/click-beacon";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";

import { BuildPartnershipForm } from "./build-partnership-form";

const pageTitle = "PI AI Build Partnership";
const pageDescription =
  "A selective six-month build partnership for personal injury firm leaders ready to turn one measurable workflow into a governed production system.";
const pageUrl = `${SITE_URL}/build-partnership`;

const facts = [
  ["6 months", "From diagnosis to rollout"],
  ["4 firms", "A deliberately small cohort"],
  ["1 workflow", "Narrow enough to measure"],
  ["1:1 build", "Forward-deployed engineering"],
];

const stages = [
  {
    period: "Month 1",
    title: "Find the constraint",
    body:
      "Map one workflow end to end, establish its baseline, and identify where revenue, time, or trust is actually being lost.",
    output: "Workflow map, baseline, owner, and first-build decision.",
  },
  {
    period: "Month 2",
    title: "Design the operating system",
    body:
      "Turn firm knowledge into rules: data sources, handoffs, review gates, escalation paths, logs, and vendor boundaries.",
    output: "Implementation spec and governance plan.",
  },
  {
    period: "Months 3-4",
    title: "Build around the firm",
    body:
      "Integrate the workflow with the tools and people already doing the work. Staff see exceptions; AI handles repeatable execution.",
    output: "Working system, integrations, and human review surface.",
  },
  {
    period: "Month 5",
    title: "Pilot under real conditions",
    body:
      "Run with a limited lead source, user group, or case set. Measure performance, adoption, edge cases, and failure modes.",
    output: "Pilot results and a clear rollout decision.",
  },
  {
    period: "Month 6",
    title: "Roll out with ownership",
    body:
      "Train the team, document controls, assign ongoing ownership, and establish the rhythm for monitoring and improvement.",
    output: "Production workflow and operating playbook.",
  },
];

const outcomes = [
  {
    icon: GitBranch,
    title: "One production workflow",
    body:
      "A system your team can use in the flow of work, not a prototype that lives outside it.",
  },
  {
    icon: CircleGauge,
    title: "A measurable result",
    body:
      "A before-and-after view of response time, conversion, cycle time, staff load, or risk.",
  },
  {
    icon: ShieldCheck,
    title: "Controls the firm understands",
    body:
      "Documented data boundaries, human review gates, vendor responsibilities, and escalation rules.",
  },
  {
    icon: Users,
    title: "An accountable owner",
    body:
      "A leader and operating team equipped to run, review, and improve the workflow after launch.",
  },
];

const faqs = [
  {
    question: "Is this an AI course?",
    answer:
      "No. Working sessions support the build, but the output is a live, measured workflow inside your firm.",
  },
  {
    question: "Do we need to replace our current software?",
    answer:
      "Usually not. The work starts by understanding your current intake, case-management, phone, email, and reporting systems. We integrate where the vendor permits it and expose vendor risk where it does not.",
  },
  {
    question: "Does the first build have to be intake?",
    answer:
      "No, but intake is often the best first build because response time and signed-case conversion are visible and attributable. A different workflow can lead when its constraint and economics are clearer.",
  },
  {
    question: "Will AI replace intake staff or legal judgment?",
    answer:
      "No. AI handles repeatable monitoring, drafting, routing, and follow-up. Empathy, persuasion, legal judgment, and sensitive decisions remain with people.",
  },
  {
    question: "What does the firm need to commit?",
    answer:
      "An executive sponsor, a workflow owner, access to the people who do the work, representative examples, and the willingness to run a controlled pilot.",
  },
  {
    question: "What happens if the pilot does not perform?",
    answer:
      "The firm gets the evidence to improve, narrow, or stop. The programme is designed around decision gates, not pressure to scale a weak result.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "personal injury law firm AI",
    "PI law firm AI implementation",
    "law firm AI transformation",
    "AI systems for personal injury firms",
    "legal AI workflow implementation",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: pageUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function BuildPartnershipPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: pageTitle,
      description: pageDescription,
      url: pageUrl,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "United States",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Personal injury law firm leaders",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: pageTitle,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <div className="bg-black pb-24">
      <ClickBeacon page="build-partnership" />
      <JsonLd data={structuredData} />

      <section className="border-b border-primary/15 bg-[#03110b]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/75">
              For PI firm leaders ready to build
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              PI AI Build Partnership
            </h1>
            <p className="mt-6 max-w-4xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              You already know how cases move. Now build the system that moves
              them.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              A selective six-month partnership for personal injury firms ready
              to turn one revenue leak or operational bottleneck into a
              governed production system. Not an AI course. Not a software
              shortlist. A real build, measured inside the firm.
            </p>
            <Link
              href="#apply"
              className="mt-8 inline-flex min-h-11 items-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
            >
              Express interest
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid border-y border-primary/20 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map(([value, label]) => (
              <div
                key={value}
                className="border-b border-primary/15 px-0 py-5 sm:border-r sm:px-5 lg:border-b-0 first:pl-0 last:border-r-0"
              >
                <div className="text-xl font-semibold text-[#00ff41]">
                  {value}
                </div>
                <div className="mt-1 text-xs text-foreground/55">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
            Your head start
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            You know where the work breaks.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-foreground/75">
          <p>
            You have watched good leads go cold between a form fill and a phone
            call. You know which handoffs produce repeated work, which records
            requests stall, why clients call for updates, and where a settlement
            waits for one missing action.
          </p>
          <p>
            That operating knowledge is the hard part. What most firms lack is
            a way to turn it into an executable system: clear rules, connected
            data, human review, exception handling, measurement, and ownership.
          </p>
          <p className="font-medium text-foreground">
            The partnership closes that gap with your team, in your stack,
            against a result the firm can see.
          </p>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#04150d]/55">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
              The first build
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Start where the economics are visible.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/75">
              Intake is the recommended starting point. Response time,
              follow-up, human ownership, consultation booking, and signed-case
              conversion can be measured without replacing the firm&apos;s case
              management system.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-primary/20 bg-primary/20 md:grid-cols-3">
            <div className="bg-[#03110b] p-6 md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
                Default path
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#00ff41]">
                Intake revenue recovery
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/70">
                Monitor every new lead, trigger immediate human contact,
                maintain follow-up, escalate high-value or shopping prospects,
                and preserve the full journey from source to signed case.
              </p>
            </div>
            <div className="bg-[#03110b] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
                When evidence points elsewhere
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Case development, client communication, demand preparation,
                liens, or vendor governance can lead when the constraint is
                clearer and the outcome is measurable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
              Zero to production
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Six months. Five decisions.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-foreground/65">
              Each stage creates an operating asset and a decision gate. The
              firm can proceed, narrow, improve, or stop.
            </p>
          </div>
          <div className="border-t border-primary/20">
            {stages.map((stage, index) => (
              <article
                key={stage.title}
                className="grid gap-4 border-b border-primary/20 py-7 sm:grid-cols-[120px_1fr]"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
                    {stage.period}
                  </span>
                  <div className="mt-2 text-sm text-foreground/35">
                    0{index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00ff41]">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {stage.body}
                  </p>
                  <p className="mt-3 text-sm text-foreground/60">
                    <span className="font-semibold text-primary">Output:</span>{" "}
                    {stage.output}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#04150d]/55">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
              What remains
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              The firm leaves with a system, not dependence.
            </h2>
          </div>
          <div className="mt-10 grid gap-px border border-primary/20 bg-primary/20 sm:grid-cols-2">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon;
              return (
                <article key={outcome.title} className="bg-[#03110b] p-6">
                  <Icon
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-[#00ff41]">
                    {outcome.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                    {outcome.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
            The working model
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Small by design.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70">
            Four firms gives each build direct engineering attention while
            preserving the value of comparing operating patterns across firms.
            The schedule flexes around litigation and firm operations.
          </p>
        </div>
        <div className="space-y-4">
          {[
            "One executive sponsor and one workflow owner",
            "Biweekly leadership working sessions",
            "1:1 workflow design and forward-deployed engineering",
            "Staff sessions at the points where adoption is won or lost",
            "A controlled pilot before any broader rollout",
          ].map((item) => (
            <div
              key={item}
              className="flex gap-3 border-b border-primary/15 pb-4 text-sm text-foreground/75"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="apply"
        className="scroll-mt-24 border-y border-primary/15 bg-[#03110b]"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
              Expression of interest
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Tell us what should move.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/70">
              Places are limited because each firm gets direct build capacity.
              We&apos;ll review your workflow, current stack, and readiness, then
              respond within three working days.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-foreground/55">
              Selection is mutual. The first conversation is about whether one
              important workflow is ready to become a measurable system.
            </p>
          </div>
          <BuildPartnershipForm />
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
          Before applying
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
          Practical questions
        </h2>
        <div className="mt-8 divide-y divide-primary/15 border-y border-primary/15">
          {faqs.map((faq) => (
            <article key={faq.question} className="py-6">
              <h3 className="text-lg font-semibold text-[#00ff41]">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
