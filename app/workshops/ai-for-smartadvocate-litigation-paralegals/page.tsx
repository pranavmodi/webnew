import { Metadata } from "next";
import Link from "next/link";

import ClickBeacon from "@/components/analytics/click-beacon";
import RevealPanel from "@/components/analytics/reveal-panel";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";

import { WorkshopRegisterForm } from "../workshop-register-form";

const slug = "ai-for-smartadvocate-litigation-paralegals";
const pageTitle =
  "AI for PI Litigation Paralegals Using SmartAdvocate: A Working Session, Not a Webinar";
const metaTitle =
  "AI for SmartAdvocate Litigation Paralegals - Free Working Session";
const pageDescription =
  "A hands-on AI workshop for PI litigation paralegals using SmartAdvocate: discovery control, deposition digests, deadline exceptions, evidence indexes, and attorney-ready reporting.";
const pageUrl = `${SITE_URL}/workshops/${slug}`;

const roles = [
  "Litigation paralegal",
  "Senior litigation paralegal",
  "Litigation support specialist",
  "Paralegal manager",
  "Attorney supervising litigation",
  "Firm leadership / operations",
  "Other",
];

const exercises = [
  {
    title: "Build the discovery control matrix",
    body: "Turn a sanitized request set, draft responses, and production log into one source-linked view of what is answered, supported, missing, or waiting on attorney judgment.",
  },
  {
    title: "Create the deposition issue digest",
    body: "Extract admissions, disputed facts, open questions, and referenced exhibits with page-and-line citations, without letting the model turn testimony into unsupported conclusions.",
  },
  {
    title: "Run the deadline exception sweep",
    body: "Compare a supplied deadline list, litigation WorkPlan, and source documents to surface conflicts, incomplete tasks, and dates that require human confirmation.",
  },
  {
    title: "Organize the evidence and exhibit index",
    body: "Identify duplicates, inconsistent versions, missing attachments, and documents referenced elsewhere in the file, while preserving a path back to every source.",
  },
  {
    title: "Prepare the attorney-ready status memo",
    body: "Compress the file into what changed, what is due, what is missing, and which decisions need counsel, with citations the attorney can verify instead of starting over.",
  },
];

const systemMap = [
  {
    native: true,
    title: "WorkPlans and automated procedures",
    body: "SmartAdvocate can standardize litigation stages, assign responsibility, trigger tasks and communications, and expose where work is waiting.",
  },
  {
    native: true,
    title: "Deadlines, dashboards, and document control",
    body: "Critical dates, staff activity, case data, documents, and reporting can live in the same operating view instead of separate calendars and private spreadsheets.",
  },
  {
    native: true,
    title: "SmartIntelligence",
    body: "Built-in AI can summarize cases, medical records, motions, briefs, and depositions; analyze multiple documents; transcribe recordings; and work with case information inside the platform.",
  },
  {
    native: false,
    title: "The review protocol your firm must define",
    body: "Which source controls? What requires privilege review? Who confirms a deadline? Which drafts need attorney approval? AI can accelerate the work only after the firm defines verification, authority, and escalation.",
  },
];

const faqs = [
  {
    question: "Do I need to use SmartAdvocate?",
    answer:
      "No. SmartAdvocate gives the group a shared litigation vocabulary, but the methods apply to Filevine, CASEpeer, Litify, CloudLex, and comparable case-management systems. Tell us your system when you register so we can group compatible cohorts.",
  },
  {
    question: "Doesn't SmartAdvocate already have built-in AI?",
    answer:
      "Yes. SmartIntelligence includes case and document summaries, multi-document analysis, case chat, transcription, drafting assistance, and other built-in capabilities. The session focuses on using those capabilities with source control, verification, clear authority, and attorney escalation.",
  },
  {
    question: "Will we use real case files?",
    answer:
      "No. Every exercise uses a sanitized litigation packet supplied for the session. Do not place confidential client information, protected health information, privileged material, or work product into a public chatbot or any system your firm has not approved.",
  },
  {
    question: "Can AI calculate and calendar litigation deadlines?",
    answer:
      "AI can help compare a supplied deadline list against tasks and source documents, but it should not be the final authority for calculating a deadline. A qualified person must verify the governing rule, trigger, jurisdiction, service method, extensions, and final calendar entry.",
  },
  {
    question: "Can AI draft discovery responses or pleadings?",
    answer:
      "It can organize source material and prepare a draft under firm-approved instructions. It should not choose objections, assert facts without support, waive privilege, make legal arguments, or send work without paralegal and attorney review.",
  },
  {
    question: "Will AI replace litigation paralegals?",
    answer:
      "AI can compress reading, comparison, indexing, drafting, and status-reporting work. It cannot own the record, recognize every procedural consequence, coordinate the team, or exercise legal judgment. The paralegal who directs and verifies the system becomes the person who can see the file most clearly.",
  },
  {
    question: "Is the workshop free? What's the catch?",
    answer:
      "The session is free and contains no product demo. If the methods expose a workflow your firm wants implemented, leadership can separately ask Possible Minds for help. That conversation is optional and outside the workshop.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "AI for litigation paralegals",
    "SmartAdvocate AI training",
    "personal injury paralegal workshop",
    "AI discovery document review",
    "deposition summary AI",
    "litigation deadline workflow",
    "personal injury litigation automation",
    "SmartIntelligence training",
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

export default function LitigationParalegalWorkshopPage() {
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
      <ClickBeacon page="workshop-smartadvocate-paralegals" />
      <JsonLd data={structuredData} />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#04150d] to-black">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link href="/workshops" className="transition hover:text-primary">
                Workshops
              </Link>
              <span className="text-primary/40">/</span>
              <span>For litigation paralegals</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl">
              AI for PI Litigation Paralegals Using SmartAdvocate: A Working
              Session, Not a Webinar
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              Sixty minutes, ten firms, and a sanitized litigation file. Build
              a discovery control matrix, a source-linked deposition digest, a
              deadline exception sweep, an evidence index, and an attorney-ready
              status memo. No demo. No pitch. Nothing to install.
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
            This is a free, hands-on session for litigation paralegals at
            personal injury firms. You will use AI on the work that consumes
            hours but still demands precision: comparing document sets,
            controlling discovery, finding what is missing, tracing statements
            to their sources, and telling the attorney exactly where the file
            needs judgment.
          </p>
        </section>

        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase text-primary">
            The question behind the fire drill
          </p>
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Friday, 4:47 p.m. The attorney asks: &quot;What are we still missing?&quot;
          </h2>
          <p>
            Discovery responses are due. The answer is spread across three
            draft versions, two deposition transcripts, a production folder,
            email attachments, and a WorkPlan that says the task is nearly
            complete. Some documents are duplicated. One exhibit is referenced
            but absent. Nobody wants a summary that sounds confident and cannot
            be checked.
          </p>
          <p>
            The value of AI here is not producing more words. It is giving the
            paralegal a faster, source-linked view of the file so the attorney
            can make the decisions only counsel should make.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What you&apos;ll actually do
          </h2>
          <p>
            Every exercise runs on the same sanitized litigation packet. You
            leave each one with a reusable instruction and verification check.
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
                  <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                    {exercise.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What SmartAdvocate can handle, and what your firm must define
          </h2>
          <p>
            SmartAdvocate already combines litigation workflows, document
            control, reporting, and built-in AI. The session maps those
            capabilities honestly, then concentrates on the review rules that
            make the output reliable enough to use.
          </p>
          <div className="grid gap-4">
            {systemMap.map((item) => (
              <div
                key={item.title}
                className={
                  item.native
                    ? "rounded-xl border border-primary/20 bg-black/50 p-5"
                    : "rounded-xl border border-amber-500/30 bg-amber-950/10 p-5"
                }
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-foreground/60">
            SmartAdvocate&apos;s feature set changes. We verify this map against
            current product documentation before every cohort.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The rule we teach first
          </h2>
          <p className="text-xl font-semibold text-white">
            If the reviewer cannot open the source, the answer is not finished.
          </p>
          <p>
            A polished summary without a reliable source path can create more
            work than it saves. Every material fact, inconsistency, date, and
            missing-item flag should lead the paralegal back to the controlling
            document, page, line, or case entry.
          </p>
          <p>
            Here is the first instruction from the workshop. It uses a
            sanitized packet and is free to take without registering:
          </p>
          <RevealPanel
            buttonLabel="Show me the discovery-control instruction"
            step="litigation_instruction_revealed"
          >
            <div
              id="instruction"
              className="rounded-xl border border-primary/25 bg-[#04150d] p-5 font-mono text-sm leading-relaxed text-foreground/80"
            >
              <p className="text-primary/70">
                # Instead of &quot;summarize this discovery&quot;:
              </p>
              <p className="mt-3">
                Build a discovery control matrix from this sanitized packet.
                For each request, list the request number, exact source page,
                current response status, supporting documents, missing items,
                and the person who must resolve the next step. Separate stated
                facts from inferences. Flag potential privilege or objection
                issues for attorney review without deciding them. Do not
                calculate deadlines, invent support, or treat a draft as final.
                End with every conflict or omission a human must verify.
              </p>
            </div>
          </RevealPanel>
          <p>
            The workshop applies the same discipline to transcripts, evidence,
            deadlines, and status reporting: source first, exception second,
            concise work product third.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What you leave with
          </h2>
          <p>
            The <strong>Litigation Control Playbook</strong>: a discovery matrix
            instruction, deposition digest template, deadline exception check,
            evidence index, and attorney status memo. Each includes its source
            requirements, verification checklist, and escalation boundary.
          </p>
          <p className="text-sm text-foreground/60">
            For the technical context, read our review of{" "}
            <Link
              href="/blog/headless-legal-software-pi-vendor-rankings"
              className="text-primary underline-offset-4 hover:underline"
            >
              PI software readiness for AI agents
            </Link>{" "}
            and how Possible Minds moves from workflow diagnosis to a governed
            implementation in our{" "}
            <Link
              href="/engagement-process"
              className="text-primary underline-offset-4 hover:underline"
            >
              engagement process
            </Link>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Who this is for
          </h2>
          <p>
            Litigation paralegals, senior litigation paralegals, litigation
            support specialists, paralegal managers, and attorneys who directly
            supervise PI litigation work. SmartAdvocate users share the same
            examples; firms on Filevine, CASEpeer, Litify, CloudLex, or a
            comparable case-management system are welcome.
          </p>
          <p>
            If most of your work is medical records, treatment tracking, and
            pre-litigation client updates, the{" "}
            <Link
              href="/workshops/ai-for-filevine-case-managers"
              className="text-primary underline-offset-4 hover:underline"
            >
              Filevine case-manager session
            </Link>{" "}
            is the better fit. This track begins where pleadings, discovery,
            depositions, and litigation deadlines take over.
          </p>
        </section>

        <section className="space-y-5" id="register">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Reserve a seat
          </h2>
          <p className="text-sm text-foreground/60">
            Here from our email? Your details may already be filled in below.
          </p>
          <WorkshopRegisterForm
            product="workshop-smartadvocate-litigation-paralegals"
            roles={roles}
            defaultSystem="SmartAdvocate"
            systemLabel="Case management system"
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
            Responsible for the firm&apos;s litigation operations? The leadership
            conversation starts with a workflow diagnostic, not a demo.
          </p>
          <Link
            href="/consult"
            className="mt-4 inline-flex items-center rounded-full bg-[#00ff41] px-8 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
          >
            Book a workflow diagnostic
          </Link>
        </section>
      </div>
    </div>
  );
}
