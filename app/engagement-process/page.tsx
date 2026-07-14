import { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_NAME, SITE_URL } from "@/lib/constants";

const pageTitle = "How AI Engagements Work for Personal Injury Firms";
const pageDescription =
  "A controlled engagement process for PI firms adopting AI: diagnose the workflow, manage risk, pilot safely, and build firm-owned systems.";
const pageUrl = `${SITE_URL}/engagement-process`;

const marketSignals = [
  {
    stat: "30%",
    label: "of lawyers using AI tools",
    detail:
      "ABA survey coverage reported adoption rising from 11% in 2023 to 30% in 2024.",
    href: "https://www.lawnext.com/2025/03/aba-tech-survey-finds-growing-adoption-of-ai-in-legal-practice-with-efficiency-gains-as-primary-driver.html",
  },
  {
    stat: "20%",
    label: "PI firm-level adoption",
    detail:
      "The 2025 Legal Industry Report summary placed personal injury firms at 20% firm-level AI adoption.",
    href: "https://www.fedbar.org/blog/the-legal-industry-report-2025/",
  },
  {
    stat: "3.9x",
    label: "more likely to see benefits",
    detail:
      "Thomson Reuters research coverage found law firms with an AI strategy are far more likely to report AI benefits.",
    href: "https://www.attorneyatwork.com/the-ai-adoption-divide-dominates-the-2025-future-of-professionals-report/",
  },
];

const buyerConcerns = [
  {
    question: "Will this expose client data?",
    answer:
      "We define sensitive-data boundaries, approved tools, vendor risk, retention, access, and review rules before any build touches real files.",
  },
  {
    question: "Will this become another abandoned pilot?",
    answer:
      "The engagement starts with one workflow, one baseline, one owner, and a pilot-to-production decision gate.",
  },
  {
    question: "Is our data too messy?",
    answer:
      "The diagnostic identifies whether the first step is automation, data cleanup, workflow standardization, or a narrower use case.",
  },
  {
    question: "Will this replace staff judgment?",
    answer:
      "Routine work can be drafted, summarized, routed, or monitored. Legal judgment and sensitive client decisions stay behind human review gates.",
  },
  {
    question: "Will this disrupt the team?",
    answer:
      "We map the current workflow first, then design around existing systems, staff handoffs, and the realities of daily PI operations.",
  },
  {
    question: "How do we know this is worth it?",
    answer:
      "Every scoped engagement gets a practical metric: response time, conversion, cycle time, staff hours, client-update load, risk reduction, or vendor exposure.",
  },
];

const stages = [
  {
    step: "01",
    title: "Diagnostic call",
    purpose:
      "Understand firm goals, case volume, lead flow, tech stack, staffing model, current AI use, and risk tolerance.",
    output: "Initial workflow hypothesis and a plain-English view of where AI may or may not fit.",
  },
  {
    step: "02",
    title: "Workflow audit",
    purpose:
      "Map who touches the workflow, where data lives, where work stalls, what is repeated, and what is too judgment-heavy to automate.",
    output: "Workflow map, readiness assessment, and risk notes.",
  },
  {
    step: "03",
    title: "Use-case selection",
    purpose:
      "Pick one workflow, not the whole firm. The best first project is narrow, measurable, and safe enough to pilot.",
    output: "Scoped use case, baseline metric, owner, and decision gate.",
  },
  {
    step: "04",
    title: "System design",
    purpose:
      "Define data sources, instructions, review gates, escalation rules, logs, vendor boundaries, and what the system must never decide.",
    output: "Implementation spec and governance plan.",
  },
  {
    step: "05",
    title: "Build and integrate",
    purpose:
      "Build around existing tools and operating rules so the workflow is useful in the firm, not just impressive in a demo.",
    output: "Working narrow system with test data, review surfaces, and integration path.",
  },
  {
    step: "06",
    title: "Pilot",
    purpose:
      "Run the system with limited users, files, or lead sources. Measure performance, adoption, edge cases, and failure modes.",
    output: "Pilot report, improvement list, and rollout recommendation.",
  },
  {
    step: "07",
    title: "Rollout and ownership",
    purpose:
      "Train staff, document rules, assign ownership, monitor usage, and improve the workflow over time.",
    output: "Firm-owned operating rhythm, not a vendor demo left on the shelf.",
  },
];

const stageGates = [
  {
    stage: "After diagnostic",
    need: "A candid discussion of pain points, current systems, and risk tolerance.",
    get: "A recommendation on whether there is a real workflow worth auditing.",
    gate: "Proceed to audit, narrow the question, or stop.",
  },
  {
    stage: "After audit",
    need: "Workflow access, stakeholder input, example files, and current metrics where available.",
    get: "A map of the workflow, bottlenecks, data readiness, and candidate use cases.",
    gate: "Choose the first build or fix prerequisites first.",
  },
  {
    stage: "After design",
    need: "Agreement on data boundaries, review rules, owner, and success metric.",
    get: "A build spec that the firm can understand before implementation starts.",
    gate: "Approve pilot scope, adjust scope, or pause.",
  },
  {
    stage: "After pilot",
    need: "Real usage feedback, edge-case review, and adoption data.",
    get: "A measured view of what worked, what failed, and whether rollout is justified.",
    gate: "Roll out, iterate, or retire the workflow.",
  },
];

const paths = [
  {
    title: "Intake and conversion",
    href: "/personal-injury/intake-automation",
    body:
      "For firms losing value through missed calls, after-hours leads, inconsistent qualification, or unclear source-to-signed-case reporting.",
  },
  {
    title: "Case development",
    href: "/personal-injury/records-chasing",
    body:
      "For firms where records, bills, treatment updates, authorizations, provider follow-up, or demand readiness keep cases from moving.",
  },
  {
    title: "Claims intelligence",
    href: "/blog/insurance-ai-claims-pi-firms",
    body:
      "For firms that need cleaner demand packages, carrier-response memory, medical-specials structure, and a counter-system to insurer AI.",
  },
  {
    title: "Client communication",
    href: "/personal-injury/client-communication",
    body:
      "For firms where routine status calls, client silence, unanswered questions, or inconsistent updates create avoidable staff drag.",
  },
  {
    title: "Lien and settlement workflows",
    href: "/personal-injury/lien-reduction",
    body:
      "For firms where lien follow-up, provider responses, balance tracking, reductions, and settlement-to-disbursement timing need a system.",
  },
  {
    title: "Vendor risk and governance",
    href: "/personal-injury/vendor-risk-governance",
    body:
      "For firms that know staff are already using AI and need rules for client data, vendor review, auditability, and human supervision.",
  },
];

const faqs = [
  {
    question: "Do we need clean data before starting?",
    answer:
      "No. The diagnostic is partly designed to find where the data is clean enough and where cleanup or workflow standardization must happen before automation.",
  },
  {
    question: "Can we start with one workflow?",
    answer:
      "Yes. That is the preferred path. One narrow workflow is easier to measure, govern, pilot, and improve than a broad AI transformation project.",
  },
  {
    question: "Will this replace staff?",
    answer:
      "The goal is to reduce repetitive work and make handoffs cleaner. Staff still handle empathy, persuasion, judgment, exceptions, and client-sensitive issues.",
  },
  {
    question: "What client data do you need?",
    answer:
      "It depends on the workflow. Early work can often use anonymized examples, workflow maps, sample fields, and redacted files before any sensitive-data decision is made.",
  },
  {
    question: "Who owns the system?",
    answer:
      "The engagement is designed around firm-owned workflows: documented rules, review gates, logs, and operating knowledge the firm can understand and improve.",
  },
  {
    question: "Can this work with Filevine, Lead Docket, CASEpeer, Clio, or our phone system?",
    answer:
      "Usually, yes, but the integration path varies. The audit identifies where the system can read, write, create tasks, summarize activity, and hand work back to staff.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We tie each workflow to a practical metric such as response time, lead conversion, cycle time, staff hours, client-update volume, demand readiness, or risk reduction.",
  },
  {
    question: "What happens after the pilot?",
    answer:
      "The firm reviews results and decides whether to roll out, iterate, or stop. A failed or inconclusive pilot is treated as useful information, not a sunk-cost trap.",
  },
];

export const metadata: Metadata = {
  title: `How AI Engagements Work for PI Firms | ${SITE_NAME}`,
  description: pageDescription,
  keywords: [
    "AI engagement process personal injury firms",
    "AI adoption for personal injury law firms",
    "law firm AI strategy",
    "AI systems for PI firms",
    "legal AI workflow audit",
    "AI governance for law firms",
  ],
  alternates: {
    canonical: pageUrl,
  },
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

export default function EngagementProcessPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: pageTitle,
      description: pageDescription,
      url: pageUrl,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Engagement Process",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <div className="bg-black pb-24">
      <JsonLd data={structuredData} />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#04150d] to-black">
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Engagement Process
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
                A controlled path from AI interest to firm-owned systems
              </h1>
              <p className="max-w-3xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                Personal injury firms are entering the second phase of AI
                adoption. The first phase was experimentation: prompts, demos,
                and scattered staff usage. The second phase is operational:
                deciding which workflows are safe, measurable, and worth turning
                into systems.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <Link href={CALENDLY_URL}>Book a Diagnostic Call</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link href="/personal-injury/vendor-risk-governance">
                    See Vendor Risk Controls
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-[#04150d]/70 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                What small PI firms are really asking
              </div>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/75">
                <p>
                  &quot;Where can AI help without exposing client data or breaking
                  the workflow?&quot;
                </p>
                <p>
                  &quot;Can we start with one useful system instead of a vague
                  transformation project?&quot;
                </p>
                <p>
                  &quot;Will this work with the people, phones, intake tools, case
                  management system, and habits we already have?&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
              The AI gap is becoming an operating gap
            </h2>
            <p className="text-base leading-relaxed text-foreground/75">
              Large firms are building AI programs. Mid-sized firms are
              integrating AI across workflows. Smaller and plaintiff-side firms
              are experimenting, often with fewer resources and less margin for
              failed projects.
            </p>
            <p className="text-base leading-relaxed text-foreground/75">
              A PI firm does not need an abstract AI transformation plan. It
              needs a controlled way to answer practical questions: which
              workflow is leaking value, which data is safe to use, where human
              judgment stays in control, what can be measured, and what can be
              owned by the firm.
            </p>
            <p className="text-base leading-relaxed text-foreground/75">
              That is why we start with diagnosis, not demos.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {marketSignals.map((signal) => (
              <a
                key={signal.label}
                href={signal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-primary/20 bg-[#04150d] p-5 transition hover:border-primary/40"
              >
                <div className="text-3xl font-semibold text-[#00ff41]">
                  {signal.stat}
                </div>
                <div className="mt-2 text-sm font-semibold text-primary">
                  {signal.label}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-foreground/65">
                  {signal.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#04150d]/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
              Built for the concerns legal buyers actually have
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              The best buyers are not anti-AI. They are appropriately cautious.
              They want one useful workflow, not a keynote about the future of
              law.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {buyerConcerns.map((concern) => (
              <section
                key={concern.question}
                className="rounded-2xl border border-primary/20 bg-black/45 p-5"
              >
                <h3 className="text-lg font-semibold text-[#00ff41]">
                  {concern.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {concern.answer}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
              The engagement path
            </h2>
            <p className="text-base leading-relaxed text-foreground/75">
              The process is stage-gated on purpose. Each stage produces a
              decision, not just another meeting.
            </p>
          </div>
          <div className="space-y-4">
            {stages.map((stage) => (
              <section
                key={stage.step}
                className="grid gap-4 rounded-2xl border border-primary/20 bg-[#04150d]/60 p-5 sm:grid-cols-[72px_1fr]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                  {stage.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00ff41]">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                    {stage.purpose}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                    <span className="font-semibold text-primary">Output:</span>{" "}
                    {stage.output}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            What you get at each decision gate
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-foreground/75">
            A controlled AI engagement should not drag a firm into an open-ended
            project. Each gate gives the firm a chance to proceed, narrow, pause,
            or stop.
          </p>
        </div>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-primary/20 bg-[#04150d]/60">
          <table className="min-w-[900px] border-collapse text-left text-sm">
            <thead className="border-b border-primary/20 text-primary">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Stage
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  What we need
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  What you get
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Decision gate
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10 text-foreground/75">
              {stageGates.map((gate) => (
                <tr key={gate.stage}>
                  <td className="px-4 py-4 align-top font-semibold text-foreground/90">
                    {gate.stage}
                  </td>
                  <td className="px-4 py-4 align-top">{gate.need}</td>
                  <td className="px-4 py-4 align-top">{gate.get}</td>
                  <td className="px-4 py-4 align-top text-primary">
                    {gate.gate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Common first engagement paths
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            The right first project depends on where the firm leaks value today.
            These are the paths we see most often.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="group rounded-2xl border border-primary/20 bg-[#04150d] p-5 transition hover:border-primary/40"
            >
              <h3 className="text-lg font-semibold text-[#00ff41] transition group-hover:text-primary">
                {path.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {path.body}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                Explore path →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#04150d]/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
              Why we do not start with a demo
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              Demos are useful after the workflow is understood. Before that,
              they often hide the hard parts: data quality, handoffs, adoption,
              review, and risk.
            </p>
          </div>
          <div className="grid gap-3 text-sm leading-relaxed text-foreground/75 sm:grid-cols-2">
            {[
              "Demos hide data quality problems.",
              "Generic tools do not know your case workflows.",
              "AI can amplify inconsistent intake or case management.",
              "Staff adoption fails when the workflow is not designed.",
              "Vendor risk matters when client medical data is involved.",
              "The right first project is usually narrow, not flashy.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-primary/15 bg-black/40 px-4 py-3"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
              Client data, human judgment, and vendor risk are designed in
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              AI adoption inside a PI firm is different from a generic business
              automation project. The workflow touches medical facts, client
              communications, liability, settlement posture, and legal judgment.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Approved tools only",
              "Sensitive-data boundaries",
              "Human review gates",
              "Audit logs",
              "Escalation for legal judgment",
              "Vendor-risk review",
              "No black-box legal advice automation",
              "Documented ownership and improvement rhythm",
            ].map((control) => (
              <div
                key={control}
                className="rounded-xl border border-primary/20 bg-[#04150d] px-4 py-3 text-sm font-medium text-foreground/80"
              >
                {control}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <section
              key={faq.question}
              className="rounded-2xl border border-primary/20 bg-[#04150d]/60 p-5"
            >
              <h3 className="text-lg font-semibold text-[#00ff41]">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                {faq.answer}
              </p>
            </section>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6">
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-8 sm:p-10">
          <h2 className="text-3xl font-semibold text-[#00ff41]">
            Start with the workflow where AI can safely create leverage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
            The first step is not buying AI. It is finding the workflow where a
            firm-owned system can reduce leakage, improve speed, or lower risk
            without removing human judgment.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href={CALENDLY_URL}>Book a Diagnostic Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
