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
  "A selective build partnership for owner-led personal injury firms ready to recover signed cases or staff time by fixing one measurable workflow.";
const pageUrl = `${SITE_URL}/build-partnership`;

const facts = [
  ["Month 1", "Baseline and stop-or-build decision"],
  ["4 firms", "A deliberately small cohort"],
  ["1 workflow", "Narrow enough to measure"],
  ["Built for you", "We do the implementation"],
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
    title: "Set the rules and handoffs",
    body:
      "Write down what should happen, what information can be used, when a person steps in, and what each vendor can access.",
    output: "Plain-language build plan and safeguards.",
  },
  {
    period: "Months 3-4",
    title: "Build inside your current tools",
    body:
      "Connect the workflow to the tools and people already doing the work. You see exceptions; AI handles repeatable execution.",
    output: "Working workflow, integrations, and a clear review queue.",
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
    title: "Put it into daily use",
    body:
      "Document what to watch, train anyone whose work changes, and establish a simple rhythm for review and improvement.",
    output: "Live workflow and practical owner playbook.",
  },
];

const outcomes = [
  {
    icon: GitBranch,
    title: "One working workflow",
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
    title: "A clear view of what happens",
    body:
      "You know what the workflow does, where people step in, what to monitor, and how to improve it after launch.",
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
    question: "Will this consume my calendar?",
    answer:
      "No. We do the process mapping, implementation, integration, and testing. You join two short working sessions a month and make the decisions only the firm owner can make. If you have staff, we involve them only where their workflow changes.",
  },
  {
    question: "Do we commit to six months before seeing evidence?",
    answer:
      "No. Month one establishes the baseline and ends with a stop-or-build decision. Every later stage has the same proceed, narrow, or stop gate. Six months is the full path when the evidence supports continuing.",
  },
  {
    question: "How is the investment structured?",
    answer:
      "Month one is a bounded diagnostic with an agreed cost and deliverable. Only after the baseline and break-even logic are clear do we scope the build. There is no obligation to proceed into implementation.",
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
              For owner-led PI firms ready to build
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              PI AI Build Partnership
            </h1>
            <p className="mt-6 max-w-4xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              You already know how cases move. Now build the system that moves
              them.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              A selective six-month partnership for lean personal injury firms
              ready to recover signed cases or staff time by fixing one
              recurring breakdown. We map it, build around the tools you
              already use, test it on a small slice of real work, and measure
              whether it earns the right to continue.
            </p>
            <Link
              href="#apply"
              className="mt-8 inline-flex min-h-11 items-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
            >
              Express interest
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="mt-5 max-w-3xl border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-foreground/65">
              No six-month leap of faith. Month one is a bounded diagnostic with
              an agreed cost and a stop-or-build decision. If we cannot find a
              narrow workflow worth testing, we stop.
            </p>
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
            You already know what should happen. The gap is making it happen
            every time: the right person gets alerted, follow-up continues,
            exceptions are visible, and nothing depends on you remembering one
            more thing between cases.
          </p>
          <p className="font-medium text-foreground">
            We build that repeatability around the firm you actually have, then
            measure it against a result you can see.
          </p>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#04150d]/55">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
              Start with your numbers
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Every paid inquiry has a clock on it.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/75">
              An after-hours inquiry that sits until morning may already belong
              to the firm that answered first. Before we build anything, we
              trace what happens to a real lead: when it arrives, when a human
              responds, how many follow-ups occur, and whether anyone can connect
              the marketing source to the signed case.
            </p>
            <p className="mt-4 text-base font-medium leading-relaxed text-foreground">
              Your acquisition cost and case economics set the break-even point,
              not a generic AI benchmark.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-primary/20 bg-primary/20 md:grid-cols-3">
            <div className="bg-[#03110b] p-6 md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
                Default path
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#00ff41]">
                The Ghost Lead Test
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/70">
                Submit a controlled after-hours inquiry, timestamp every
                response and follow-up, then compare the real journey with the
                firm&apos;s intended process. That evidence tells us whether the
                first build should improve alerts, human response, follow-up, or
                attribution.
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

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
            Who this is for
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Lean firms move faster.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-foreground/75">
          <p>
            This partnership is built for owner-led PI firms, from solo
            practices to roughly 20 attorneys, where one bottleneck is visibly
            costing signed cases, staff time, or client trust.
          </p>
          <p>
            You do not need an innovation committee or a technical team. A
            founder who knows the workflow and can make a decision is often the
            fastest firm to pilot, learn, and see a result.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
              From problem to daily use
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Six months. Five decisions.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-foreground/65">
              Each stage gives you something concrete and a decision. The firm
              can proceed, narrow, improve, or stop.
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
              What you keep
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              You leave with a workflow you understand.
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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 border-y border-primary/20 py-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
              What we can prove today
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Under 90 seconds to start the response path.
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-foreground/75">
              For an anonymized Southern California PI firm, Possible Minds
              configured the first automated outbound attempt to begin within
              90 seconds of receiving a web inquiry. The system acknowledged
              the lead, prepared the facts, and escalated serious matters; a
              human still owned evaluation, trust, and case acceptance.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/55">
              This is a measured operating target, not a claim about signed-case
              conversion or revenue. We do not publish outcome claims without a
              reproducible baseline.
            </p>
            <Link
              href="/law-case-study"
              className="mt-5 inline-block text-sm font-semibold text-primary"
            >
              Read the evidence note →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
            The working model
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Built around the person running the firm.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70">
            You are the sponsor, the workflow owner, or both. That is fine. We
            work around your caseload, not the other way around, and do the
            implementation work between decisions.
          </p>
        </div>
        <div className="space-y-4">
          {[
            "Two short working sessions a month, scheduled around your calendar",
            "We map, build, integrate, and test; you make the calls only the owner can make",
            "If you have staff, we involve them only where their work changes",
            "If you do not have staff, we build for the firm you actually are",
            "One lead source or workflow is tested before anything expands",
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
              Solo owners and firms up to roughly 20 attorneys are welcome.
              We&apos;ll review your workflow, current stack, and readiness, then
              respond within three working days.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-foreground/55">
              Selection is mutual. The first conversation is about whether one
              important workflow is ready for a measurable build.
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
