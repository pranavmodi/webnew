import { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Check,
  Clock3,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import ClickBeacon from "@/components/analytics/click-beacon";
import RevealPanel from "@/components/analytics/reveal-panel";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";

import { WorkshopRegisterForm } from "../workshop-register-form";

const slug = "ai-for-filevine-case-managers";
const pageTitle =
  "AI for Personal Injury Case Managers on Filevine: A Working Session, Not a Webinar";
const metaTitle = "AI for Filevine Case Managers - Free Working Session";
const pageDescription =
  "A hands-on AI workshop for PI case managers on Filevine: medical chronologies, treatment gaps, and what Filevine's AI does and doesn't do. 10 firms per cohort.";
const pageUrl = `${SITE_URL}/workshops/${slug}`;

const sessionFormat = [
  {
    time: "0-10 min",
    title: "Set the safety boundary",
    body: "See what may run inside firm-approved tools, what never belongs in a public chatbot, and where human review remains mandatory.",
  },
  {
    time: "10-20 min",
    title: "Build a serious instruction",
    body: "Turn a vague request into a six-part instruction covering the task, context, judgment, constraints, deliverable, and verification.",
  },
  {
    time: "20-50 min",
    title: "Work the case-manager workflows",
    body: "Use sanitized PI files to build, test, and improve instructions for chronologies, gaps, updates, records follow-up, and handoffs.",
  },
  {
    time: "50-60 min",
    title: "Make it reusable inside the firm",
    body: "Compare results, identify failure points, and turn the strongest instructions into a repeatable Filevine-team playbook.",
  },
];

const exercises = [
  {
    title: "Treatment chronology",
    body: "Flag gaps in care, separate facts from conclusions, and identify missing records before an adjuster does.",
  },
  {
    title: "Verification questions",
    body: "Generate the factual questions a case manager should resolve before an attorney relies on the output.",
  },
  {
    title: "Client status update",
    body: "Draft a plain-English update that stays out of legal advice and escalates judgment calls to a human.",
  },
  {
    title: "Records follow-up",
    body: "Create a consistent provider follow-up sequence from an outstanding-requests list.",
  },
  {
    title: "Pre-litigation handoff",
    body: "Produce an attorney-ready handoff memo with open items, risks, and escalation flags.",
  },
];

const filevineBoundaries = [
  {
    title: "AIFields",
    body: "Prompt-driven extraction from uploaded documents into project fields. Useful for pulling named facts from a document you select.",
  },
  {
    title: "MedChron",
    body: "AI medical chronologies and record summaries inside the case file, including key events, dates, and providers.",
  },
  {
    title: "DemandsAI",
    body: "Demand-letter drafting from organized case material.",
  },
  {
    title: "The judgment layer still belongs to your team",
    body: "No feature should be trusted to cross-check billing, identify everything absent from the file, or verify its own output. The workshop teaches case managers to run that review deliberately.",
  },
];

const deliverables = [
  "Five reusable case-management instructions",
  "A verification checklist for every instruction",
  "A one-page team-standardization memo for firm leadership",
  "A client-data and human-review safety framework",
  "A personalized certificate of completion",
];

const faqs = [
  {
    question: "What is the participant experience like?",
    answer:
      "It is a working session, not a webinar. After a short safety and instruction-design briefing, participants work directly on sanitized PI case materials, compare results, improve their instructions, and leave with finished assets they can reuse inside approved tools.",
  },
  {
    question: "Does Filevine already have AI built in?",
    answer:
      "Yes. Filevine offers AIFields, MedChron, and DemandsAI. The workshop does not repeat a product demonstration. It focuses on the review and judgment layer around those tools: missing information, treatment gaps, verification, escalation, and repeatable team workflows.",
  },
  {
    question: "Do participants use real client files?",
    answer:
      "No. Every exercise uses sanitized sample materials supplied for the session. The first lesson is what must remain inside firm-approved systems and what should never be pasted into a public chatbot.",
  },
  {
    question: "How does this help the firm, not just one case manager?",
    answer:
      "Participants leave with reusable instructions, verification steps, and a one-page standardization memo. Team leads can use those materials to identify where a Filevine workflow can become more consistent across people, offices, and handoffs.",
  },
  {
    question: "Is there a certificate?",
    answer:
      "Yes. Participants who complete the working session receive a personalized certificate of completion. It documents participation but is not CLE credit.",
  },
  {
    question: "Is the workshop free? What's the catch?",
    answer:
      "The session is free and contains no product demo. If the methods prove useful, some firms later ask Possible Minds to help turn them into firm-owned systems. That is a separate and entirely optional conversation with firm leadership.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "AI for personal injury case managers",
    "Filevine AI",
    "AI workshop for law firm staff",
    "medical records AI summary personal injury",
    "treatment gap detection",
    "AIFields",
    "MedChron",
    "case manager AI training",
    "personal injury case management AI",
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

export default function WorkshopPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#page`,
      name: pageTitle,
      description: pageDescription,
      url: pageUrl,
      isPartOf: `${SITE_URL}/#website`,
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
          name: "Workshops",
          item: `${SITE_URL}/workshops`,
        },
        { "@type": "ListItem", position: 3, name: pageTitle, item: pageUrl },
      ],
    },
  ];

  return (
    <div className="bg-black pb-24">
      <ClickBeacon page="workshop-filevine-case-managers" />
      <JsonLd data={structuredData} />

      <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#04150d] via-[#020d08] to-black">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ff41]/60 to-transparent" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link href="/workshops" className="transition hover:text-primary">
                Workshops
              </Link>
              <span className="text-primary/40">/</span>
              <span>Filevine case managers</span>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#00ff41]">
              A working session, not a webinar
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              Build five AI workflows your Filevine team can use the next morning.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/75 sm:text-lg">
              Work on sanitized PI case files, learn where Filevine&apos;s AI helps
              and where human judgment takes over, then leave with a verified
              prompt playbook your team can reuse.
            </p>

            <div className="mt-7 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { icon: Clock3, label: "60 minutes" },
                { icon: Users, label: "10 firms max" },
                { icon: ShieldCheck, label: "Sanitized files" },
                { icon: Award, label: "Certificate" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-xs font-medium text-foreground/70"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#00ff41]" />
                  {label}
                </div>
              ))}
            </div>

            <a
              href="#format"
              className="mt-7 inline-flex items-center text-sm font-semibold text-foreground/65 underline decoration-white/20 underline-offset-4 transition hover:text-[#00ff41]"
            >
              See the 60-minute format ↓
            </a>
          </div>

          <RevealPanel
            buttonLabel="Reveal the chronology instruction"
            eyebrow="Workshop preview"
            description="See the difference between 'summarize these records' and an instruction a Filevine case manager can safely verify."
            helperText="No email or registration required"
            featured
            showCopyButton
            ctaHref="#register"
          >
            <div
              id="instruction"
              className="rounded-xl border border-white/10 bg-black/45 p-5 font-mono text-sm leading-relaxed text-foreground/80"
            >
              <p className="text-[#00ff41]">
                # Instead of &quot;summarize these records&quot;:
              </p>
              <p className="mt-3">
                Build a chronological treatment timeline from these records for
                a personal injury case manager preparing a file for demand. Flag
                every gap in treatment longer than 30 days. Separate documented
                facts from provider conclusions and label which is which. List
                every record, image, or bill that is referenced but not present.
                End with the questions a case manager should verify with the
                client or provider before anyone relies on this summary. Do not
                guess at dates or diagnoses; mark them as unverified instead.
              </p>
            </div>
          </RevealPanel>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 pt-14 text-foreground/85 sm:px-6">
        <section id="format" className="scroll-mt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00ff41]">
            The participant experience
          </p>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold text-foreground">
                What happens during the hour
              </h2>
              <p className="mt-3 max-w-2xl text-foreground/65">
                Participants do the work themselves. The session moves from safe
                use to tested instructions to a repeatable team standard.
              </p>
            </div>
            <span className="text-sm text-foreground/45">Live · small cohort · no product demo</span>
          </div>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {sessionFormat.map((item, index) => (
              <div
                key={item.time}
                className="grid grid-cols-[auto_1fr] gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00ff41]/10 text-sm font-bold text-[#00ff41]">
                  {index + 1}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#00ff41]/80">
                    {item.time}
                  </p>
                  <h3 className="mt-1 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00ff41]">
            The practical work
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">
            Five Filevine workflows, built on sanitized PI materials
          </h2>
          <p className="mt-3 max-w-3xl text-foreground/65">
            No client data and nothing from your own matters is required. Each
            exercise ends with a reusable instruction and an explicit human
            verification step.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {exercises.map((exercise, index) => (
              <div
                key={exercise.title}
                className="rounded-xl border border-white/10 bg-white/[0.025] p-5"
              >
                <span className="text-sm font-bold text-[#00ff41]">0{index + 1}</span>
                <h3 className="mt-3 font-semibold text-foreground">{exercise.title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/60">{exercise.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#04150d]/75 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00ff41]">
            Why this matters inside a Filevine firm
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">
            Upskill the case manager. Strengthen the operating system.
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Better individual work",
                body: "Case managers learn to direct AI precisely, catch weak output, and keep judgment with the people responsible for the file.",
              },
              {
                icon: Users,
                title: "More consistent teams",
                body: "Team leads can turn the strongest instructions and review checks into shared standards across case managers and offices.",
              },
              {
                icon: FileCheck2,
                title: "Clearer Filevine boundaries",
                body: "The firm sees which work belongs in native Filevine tools and where a human-owned verification layer is still required.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-white/10 bg-black/30 p-5">
                <Icon className="h-5 w-5 text-[#00ff41]" />
                <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/60">{body}</p>
              </div>
            ))}
          </div>

          <details className="group mt-6 rounded-xl border border-white/10 bg-black/25 p-5">
            <summary className="cursor-pointer list-none font-semibold text-foreground marker:hidden">
              <span className="flex items-center justify-between gap-4">
                What Filevine&apos;s AI does, and where it stops
                <span className="text-[#00ff41] transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {filevineBoundaries.map((item) => (
                <div key={item.title} className="rounded-lg border border-white/10 bg-black/25 p-4">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-foreground/45">
              Filevine&apos;s feature set changes. We verify this map against its
              current documentation before each cohort.
            </p>
          </details>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00ff41]">
              What participants leave with
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              Proof of learning, not another page of notes
            </h2>
            <p className="mt-4 leading-7 text-foreground/65">
              The session produces working assets for the participant and a
              concise standardization view for the firm. The certificate records
              completion but does not represent CLE credit.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <ul className="space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/75">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00ff41]/10">
                    <Check className="h-3.5 w-3.5 text-[#00ff41]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="register"
          className="scroll-mt-24 rounded-2xl border border-[#00ff41]/25 bg-[#04150d] p-6 sm:p-8"
        >
          <div className="mb-6 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00ff41]">
              Filevine cohort
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Reserve a seat</h2>
            <p className="mt-3 text-sm leading-6 text-foreground/60">
              For case managers, senior case managers, records staff, and team
              leads at personal injury firms using Filevine. Maximum ten firms
              per working session.
            </p>
          </div>
          <WorkshopRegisterForm
            product="workshop-filevine-case-managers"
            defaultSystem="Filevine"
            systemLabel="Case management system"
            roles={[
              "Case manager",
              "Senior case manager",
              "Records specialist",
              "Paralegal",
              "Intake",
              "Attorney",
              "Firm leadership / operations",
              "Other",
            ]}
          />
        </section>

        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00ff41]">
            Questions answered
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">
            What to know before reserving a seat
          </h2>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-white/10 bg-white/[0.025] p-5"
              >
                <summary className="cursor-pointer list-none font-semibold text-foreground marker:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="shrink-0 text-[#00ff41] transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-foreground/60">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
