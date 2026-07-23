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
  "A six-month working engagement for owner-led PI firms that want to fix slow intake response, incomplete follow-up, and unclear lead attribution.";
const pageUrl = `${SITE_URL}/build-partnership`;

const facts = [
  ["Up to 30 leads", "Reviewed in month one"],
  ["2 calls", "45 minutes each month"],
  ["1 lead source", "The first pilot, not the whole firm"],
  ["Your current tools", "No required software replacement"],
];

const stages = [
  {
    period: "Month 1",
    title: "Test the intake you have",
    body:
      "We submit one controlled after-hours inquiry and review up to 30 recent leads. For each lead, we compare arrival time, first call or text, follow-up attempts, consultation status, signed status, and marketing source.",
    output: "A response-time report, a list of missed handoffs, and a written stop-or-build recommendation.",
  },
  {
    period: "Month 2",
    title: "Agree exactly what should happen",
    body:
      "You choose who gets a hot-lead alert, which facts appear in the brief, when the owner is called, how follow-up continues, and what the AI says about itself.",
    output: "Approved messages, escalation rules, follow-up schedule, and a list of permitted data and vendors.",
  },
  {
    period: "Months 3-4",
    title: "Connect the tools you already use",
    body:
      "We connect web forms, missed calls, email, and text with Lead Docket, Filevine, CASEpeer, or the intake inbox you already use. We build alerts, call-ready briefs, tasks, follow-up, and activity logging.",
    output: "A tested intake flow and a daily list of leads that still need human attention.",
  },
  {
    period: "Month 5",
    title: "Turn it on for one lead source",
    body:
      "The new flow handles one source, such as after-hours website inquiries. Your team still owns the conversation and the close; we inspect every delay, failed handoff, and stopped follow-up.",
    output: "A 30-day dashboard showing response time, attempts, consultations, signed status, and failures.",
  },
  {
    period: "Month 6",
    title: "Keep it, expand it, or stop",
    body:
      "If the pilot improves the agreed numbers, we add the next lead source and train anyone whose work changes. If it does not, we fix the specific failure or retire the flow.",
    output: "The live configuration, written instructions, access list, and monthly review report.",
  },
];

const outcomes = [
  {
    icon: GitBranch,
    title: "One live intake path",
    body:
      "A web form or missed call becomes an alert, a call-ready brief, assigned follow-up, and a complete activity record.",
  },
  {
    icon: CircleGauge,
    title: "A before-and-after dashboard",
    body:
      "Response time, number of attempts, consultations, signed status, source attribution, and failed handoffs in one report.",
  },
  {
    icon: ShieldCheck,
    title: "Written messages and escalation rules",
    body:
      "The exact AI disclosure, approved questions, follow-up schedule, hot-lead criteria, and conditions that require a person.",
  },
  {
    icon: Users,
    title: "A vendor and data map",
    body:
      "A plain list of which systems receive client information, what each can do, who has access, and how to turn access off.",
  },
];

const faqs = [
  {
    question: "Is this an AI course?",
    answer:
      "No. There is no curriculum or software demo. We inspect recent leads, configure the workflow, connect the tools, and run the pilot.",
  },
  {
    question: "Do we need to replace our current software?",
    answer:
      "Usually not. The work starts by understanding your current intake, case-management, phone, email, and reporting systems. We integrate where the vendor permits it and expose vendor risk where it does not.",
  },
  {
    question: "Does the first build have to be intake?",
    answer:
      "This partnership defaults to intake because the timestamps, follow-up attempts, consultations, and signed cases can be compared. If the first review shows that records, client updates, demands, or liens are the more expensive problem, we recommend that path before quoting a build.",
  },
  {
    question: "Will AI replace intake staff or legal judgment?",
    answer:
      "No. AI handles repeatable monitoring, drafting, routing, and follow-up. Empathy, persuasion, legal judgment, and sensitive decisions remain with people.",
  },
  {
    question: "Will this consume my calendar?",
    answer:
      "Plan on two 45-minute working calls a month. You explain what qualifies as a good lead, choose who gets alerted, and approve messages and escalation rules. We handle the lead review, configuration, integrations, testing, and pilot monitoring.",
  },
  {
    question: "Do we commit to six months before seeing evidence?",
    answer:
      "No. Month one ends with the lead-by-lead timestamp report and a written stop-or-build recommendation. You decide whether to continue. The full path takes six months only when each stage justifies the next one.",
  },
  {
    question: "How is the investment structured?",
    answer:
      "Month one has a fixed scope and an agreed price: one controlled inquiry, review of up to 30 recent leads, a baseline report, and a written recommendation. We quote implementation only after you see that report. There is no obligation to continue.",
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
              A six-month working engagement for PI firms where website leads
              sit after hours, follow-up stops too soon, or nobody can connect
              the advertising source to the signed case. We inspect one lead
              source, connect the tools you already use, and run the new intake
              flow for 30 days before anything expands.
            </p>
            <Link
              href="#apply"
              className="mt-8 inline-flex min-h-11 items-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
            >
              Express interest
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="mt-5 max-w-3xl border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-foreground/65">
              Month one has a fixed scope and agreed price: one after-hours test
              inquiry, review of up to 30 recent leads, a baseline report, and a
              written recommendation. If the numbers do not justify a build, we
              stop.
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
            What we inspect
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            Three ordinary ways a paid lead disappears.
          </h2>
        </div>
        <div className="divide-y divide-primary/15 border-y border-primary/15">
          {[
            {
              time: "9:18 PM",
              text:
                "A website inquiry receives a form confirmation. The first human text goes out the next morning.",
            },
            {
              time: "Call 1",
              text:
                "The caller says they are speaking with two other firms. The note is saved, but the owner is never alerted.",
            },
            {
              time: "Day 3",
              text:
                "Two calls went unanswered. The lead is still marked “new,” but no person or task owns the next attempt.",
            },
          ].map((example) => (
            <div
              key={example.time}
              className="grid gap-2 py-5 sm:grid-cols-[96px_1fr] sm:gap-5"
            >
              <span className="font-mono text-sm font-semibold text-primary">
                {example.time}
              </span>
              <p className="text-sm leading-relaxed text-foreground/75">
                {example.text}
              </p>
            </div>
          ))}
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
              We export up to 30 recent inquiries from Lead Docket, Filevine,
              CASEpeer, a spreadsheet, or the inbox your firm uses today. We do
              not score the quality of your lawyers. We reconstruct what
              happened to each lead after it arrived.
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
                The month-one report
              </p>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/70">
                {[
                  "Arrival to first automated response",
                  "Arrival to first human call or text",
                  "Attempts during the first seven days",
                  "Consultation and signed-case status",
                  "Known or missing marketing source",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
            practices to roughly 20 attorneys, that receive enough phone or web
            inquiries to review 20 to 30 recent leads.
          </p>
          <p>
            You need one person who can explain what a good lead looks like,
            approve the messages, and answer when a serious lead is escalated.
            That person can be the owner. You do not need an innovation
            committee or a technical team.
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
            We do the setup. You make four decisions.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70">
            Plan on two 45-minute calls each month. Work happens between those
            calls, not on your calendar.
          </p>
        </div>
        <div className="grid gap-px border border-primary/20 bg-primary/20 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="bg-[#03110b] p-6">
            <h3 className="text-lg font-semibold text-[#00ff41]">
              Possible Minds
            </h3>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/70">
              {[
                "Run the after-hours inquiry test",
                "Review timestamps and outcomes for up to 30 leads",
                "Configure alerts, briefs, tasks, follow-up, and logging",
                "Connect the current intake, phone, email, and case systems",
                "Monitor every failure during the 30-day pilot",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#03110b] p-6">
            <h3 className="text-lg font-semibold text-[#00ff41]">
              Firm owner
            </h3>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/70">
              {[
                "Define what qualifies as a lead worth immediate attention",
                "Choose who receives the hot-lead alert",
                "Approve the disclosure, messages, and follow-up schedule",
                "Approve which systems and client fields can be used",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
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
              Tell us where new leads arrive.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/70">
              Solo owners and firms up to roughly 20 attorneys are welcome.
              Tell us which system receives new leads and whether the first
              problem is after-hours response, repeated follow-up, attorney
              escalation, or source attribution.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-foreground/55">
              We&apos;ll respond within three working days. The first call is to
              confirm that the lead volume and available timestamps are enough
              for a useful month-one review.
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
