import { Metadata } from "next";
import Link from "next/link";

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

const exercises = [
  {
    title: "Records to treatment timeline",
    body: "Turn a large sample record set into a treatment timeline that flags every gap in care over 30 days — the gaps an adjuster will find if you don't.",
  },
  {
    title: "Facts vs. conclusions",
    body: "Separate documented facts from provider conclusions, and generate the verification questions your attorney will ask anyway.",
  },
  {
    title: "Client status update",
    body: "Draft a plain-English update from case notes that never crosses into legal advice — and knows when to hand the question to a human.",
  },
  {
    title: "Records-chase follow-up",
    body: "Build the provider follow-up sequence from an outstanding-requests list, so the chase runs on a system instead of memory.",
  },
  {
    title: "Pre-lit to lit handoff memo",
    body: "Write the handoff summary with escalation flags, so the file moves without a week of clarification questions.",
  },
];

const filevineBoundaries = [
  {
    covered: true,
    title: "AIFields",
    body: "Prompt-driven extraction from uploaded documents into project fields. Good at pulling named facts out of a document you point it at.",
  },
  {
    covered: true,
    title: "MedChron",
    body: "AI medical chronologies and record summaries inside the case file — key events, dates, and providers formatted consistently.",
  },
  {
    covered: true,
    title: "DemandsAI",
    body: "Drafts demand letters from organized case material.",
  },
  {
    covered: false,
    title: "What nothing in the stack does",
    body: "Cross-check the chronology against the billing. Tell you what is absent from the file — the missing MRI, the unexplained treatment break. Verify its own output before your attorney relies on it. That judgment layer is the work, and it stays with you. The session teaches you to run it deliberately.",
  },
];

const faqs = [
  {
    question: "Does Filevine have AI built in?",
    answer:
      "Yes. Filevine offers AIFields for prompt-driven document extraction, MedChron for AI medical chronologies and record summaries, and DemandsAI for demand letter drafting. What the built-in tools do not do is cross-check a chronology against billing, flag what is missing from a file, or verify their own output — that review layer still belongs to the case manager and attorney.",
  },
  {
    question: "Can case managers put medical records into ChatGPT?",
    answer:
      "No. Medical records contain protected health information, and consumer AI tools are not an approved place for client PHI. The first thing this session teaches is the boundary: what stays inside firm-approved systems, and how to get AI leverage on records work without ever pasting client data into a public chatbot.",
  },
  {
    question: "Is the workshop free? What's the catch?",
    answer:
      "The session is free and there is no product demo in it. The honest catch: if the working methods are useful, some firms ask us to go deeper on making them firm-owned systems — that is a separate conversation with your firm's leadership, and it is optional.",
  },
  {
    question: "Will AI replace case managers?",
    answer:
      "No. AI can compress the mechanical parts of records review, drafting, and follow-up. It cannot negotiate, exercise judgment about a case, or reassure a frightened client — and it should not be trusted without verification. The case managers who learn to direct and verify AI output become more valuable, not less.",
  },
  {
    question: "Do I need my firm's permission to attend?",
    answer:
      "The session uses sanitized sample files only, so there is no client data involved. Most attendees simply clear the hour with their manager. Every attendee leaves with a one-page summary written for your managing partner, so it is easy to show the firm what you got out of it.",
  },
  {
    question: "What should a case manager never let AI decide alone?",
    answer:
      "Anything an attorney or client will rely on: case facts, medical causation, deadlines, settlement posture, and any communication that could be legal advice. The working rule taught in the session: AI drafts and organizes; humans verify facts, citations, and judgment before anything leaves the file.",
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

      <section className="relative overflow-hidden bg-gradient-to-b from-[#04150d] to-black">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link href="/workshops" className="transition hover:text-primary">
                Workshops
              </Link>
              <span className="text-primary/40">/</span>
              <span>For case managers</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl">
              AI for Personal Injury Case Managers on Filevine: A Working
              Session, Not a Webinar
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              Sixty minutes, ten firms, sanitized sample files. You do the work
              on real case-manager tasks — chronologies, gaps, updates, chases,
              handoffs — and leave with a playbook you can use the next
              morning. No demo. No pitch. Nothing to install.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-12 px-4 pt-12 text-foreground/85 sm:px-6">
        <section className="rounded-2xl border border-primary/25 bg-[#04150d] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            In plain English
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/75">
            This is a free, hands-on session for case managers and records
            staff at personal injury firms that run on Filevine. You&apos;ll
            build real AI instructions for the work you do every day — medical
            chronologies, treatment-gap checks, client updates, records
            chasing — and learn exactly where Filevine&apos;s built-in AI helps
            and where it stops. Ten firms per cohort, sample files provided,
            and the first rule taught is what never goes into a public
            chatbot.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What you&apos;ll actually do
          </h2>
          <p>
            Every exercise runs on a sanitized sample file we provide — no
            client data, nothing from your own cases needed. You leave each one
            with a written instruction you can reuse.
          </p>
          <div className="grid gap-4">
            {exercises.map((exercise, i) => (
              <div
                key={exercise.title}
                className="flex gap-4 rounded-xl border border-primary/20 bg-black/50 p-5"
              >
                <div className="text-2xl font-bold text-[#00ff41]">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {exercise.title}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/70">
                    {exercise.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What Filevine&apos;s AI does — and where it stops
          </h2>
          <p>
            If your firm runs on Filevine, you already have AI in the building.
            The session doesn&apos;t re-sell it to you; it maps it honestly.
          </p>
          <div className="grid gap-4">
            {filevineBoundaries.map((item) => (
              <div
                key={item.title}
                className={
                  item.covered
                    ? "rounded-xl border border-primary/20 bg-black/50 p-5"
                    : "rounded-xl border border-amber-500/30 bg-amber-950/10 p-5"
                }
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-foreground/70">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-foreground/60">
            Filevine&apos;s feature set changes; we verify this map against
            their current documentation before every cohort. If something here
            is out of date, tell us — that&apos;s the spirit of the session.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The rule we teach first
          </h2>
          <p>
            Medical records are protected health information. They never go
            into a public chatbot — not to save an hour, not once, not
            &quot;just this file.&quot; The session starts with the boundary
            and then shows how much leverage is available inside it: what runs
            in firm-approved tools, what a serious instruction looks like, and
            what a human verifies before anyone relies on the output.
          </p>
          <p>
            A serious instruction has six parts — task, background, judgment,
            constraints, deliverable, verification. That framework, applied to
            legal work, is laid out in{" "}
            <Link
              href="/blog/from-prompts-to-systems-law-firms-ai"
              className="text-primary underline-offset-4 hover:underline"
            >
              From Prompts to Systems
            </Link>
            . Here&apos;s instruction one of the five — the one we send case
            managers by email. Free, no registration required:
          </p>
          <RevealPanel buttonLabel="Show me instruction one">
            <div
              id="instruction"
              className="rounded-xl border border-primary/25 bg-[#04150d] p-5 font-mono text-sm leading-relaxed text-foreground/80"
            >
              <p className="text-primary/70">
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
          <p>
            The difference between that and &quot;summarize these records&quot;
            is the difference between a draft your attorney trusts and one
            they quietly redo. Instruction one is yours either way. The
            session is where you build the other four — client updates,
            records chases, gap sweeps, handoff memos — tuned to your own
            files, with the verification checklist for each.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What you leave with
          </h2>
          <p>
            The <strong>Case Manager Prompt Playbook</strong>: the five
            instructions you built, each with its verification checklist,
            formatted to reuse on your own files inside your firm&apos;s
            approved tools. Plus a one-page &quot;what our team could
            standardize&quot; memo — that page is written for your managing
            partner, so the hour you spent turns into credit, not just notes.
          </p>
          <p className="text-sm text-foreground/60">
            Related systems, if you want to go deeper before the session:{" "}
            <Link
              href="/personal-injury/records-chasing"
              className="text-primary underline-offset-4 hover:underline"
            >
              records chasing and case development
            </Link>
            ,{" "}
            <Link
              href="/personal-injury/client-communication"
              className="text-primary underline-offset-4 hover:underline"
            >
              client communication systems
            </Link>
            , and the broader{" "}
            <Link
              href="/personal-injury"
              className="text-primary underline-offset-4 hover:underline"
            >
              AI systems for personal injury firms
            </Link>{" "}
            overview.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Who this is for
          </h2>
          <p>
            Case managers, senior case managers, and records staff at personal
            injury firms on Filevine. It is deliberately not a leadership
            session — no owners in the room, so the questions stay honest —
            and there is no product demo, because the session is about your
            work, not our software. If you&apos;re on a different case
            management system, register anyway and say so; we group cohorts by
            stack when there&apos;s enough of one.
          </p>
        </section>

        <section className="space-y-5" id="register">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Reserve a seat
          </h2>
          <p className="text-sm text-foreground/60">
            Here from our email? Your details may already be filled in below —
            one click and you&apos;re done.
          </p>
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

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-primary/20 bg-black/50 p-5"
              >
                <h3 className="font-semibold text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-primary/25 bg-[#04150d] p-6 text-center sm:p-8">
          <p className="text-foreground/80">
            Running the firm, not the files? The leadership version of this
            conversation starts with a diagnostic, not a demo.
          </p>
          <Link
            href="/consult"
            className="mt-4 inline-flex items-center rounded-full bg-[#00ff41] px-8 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
          >
            Book a diagnostic call
          </Link>
        </section>
      </div>
    </div>
  );
}
