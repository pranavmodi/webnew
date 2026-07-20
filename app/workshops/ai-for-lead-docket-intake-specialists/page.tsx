import { Metadata } from "next";
import Link from "next/link";

import ClickBeacon from "@/components/analytics/click-beacon";
import RevealPanel from "@/components/analytics/reveal-panel";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";

import { WorkshopRegisterForm } from "../workshop-register-form";

const slug = "ai-for-lead-docket-intake-specialists";
const pageTitle =
  "AI for Personal Injury Intake Teams Using Lead Docket: A Working Session, Not a Webinar";
const metaTitle = "AI for Lead Docket Intake Teams - Free Working Session";
const pageDescription =
  "A hands-on AI workshop for PI intake specialists using Lead Docket: prioritize serious leads, prepare fast human follow-up, recover stalled prospects, and improve signed-case conversion.";
const pageUrl = `${SITE_URL}/workshops/${slug}`;

const roles = [
  "Intake specialist",
  "Senior intake specialist",
  "Intake manager / director",
  "Intake paralegal",
  "Attorney handling intake",
  "Firm leadership / operations",
  "Other",
];

const exercises = [
  {
    title: "Find the lead that cannot wait",
    body: "Read a mixed intake queue and identify injury severity, urgency, shopping signals, and the missing facts that change who should respond first.",
  },
  {
    title: "Build the attorney-ready brief",
    body: "Turn scattered form answers and call notes into a six-line brief the right attorney can absorb before calling the prospect.",
  },
  {
    title: "Design the fast human handoff",
    body: "Set a response owner, deadline, channel, and escalation path so a serious lead reaches a person who can build trust, not just an automated acknowledgment.",
  },
  {
    title: "Recover the stalled prospect",
    body: "Create a persistent but humane follow-up sequence for missed calls, incomplete forms, unsigned retainers, and prospects who asked for time.",
  },
  {
    title: "Audit the path to a signed case",
    body: "Map source, first response, meaningful human contact, qualification, retainer, and acceptance to find exactly where qualified leads disappear.",
  },
];

const systemMap = [
  {
    native: true,
    title: "Capture and lead tracking",
    body: "Lead Docket can centralize inquiries, forms, communications, status, and lead-source data so the intake team works from one record.",
  },
  {
    native: true,
    title: "Workflow automation",
    body: "Automations can trigger follow-up, forms, e-signatures, status changes, tasks, and transfer into the case-management system.",
  },
  {
    native: true,
    title: "LeadsAI",
    body: "Lead summarization, sentiment analysis, and timelines can compress the reading work and make the record easier to understand.",
  },
  {
    native: false,
    title: "The operating decisions your firm must define",
    body: "Which lead needs an attorney now? What counts as meaningful contact? Who owns the next attempt? When does an unsigned retainer become an exception? Software can execute those rules only after the firm makes them explicit.",
  },
];

const faqs = [
  {
    question: "Do I need to use Lead Docket?",
    answer:
      "No. Lead Docket gives the session a shared vocabulary, but the methods apply to Lawmatics, Law Ruler, Captorra, Clio Grow, and similar intake systems. Tell us what your firm uses when you register so we can group compatible cohorts.",
  },
  {
    question: "Doesn't Lead Docket already have AI and automation?",
    answer:
      "Yes. Lead Docket includes workflow automation and LeadsAI capabilities such as summaries, sentiment analysis, and timelines. The session focuses on the operating layer around those tools: prioritization rules, human ownership, escalation, verification, and conversion measurement.",
  },
  {
    question: "Is this a workshop about replacing intake calls with an AI agent?",
    answer:
      "No. A serious prospective client should reach a capable human quickly. We use AI to organize the record, surface urgency, prepare the responder, and monitor follow-up. Empathy, legal judgment, case acceptance, and the high-value closing conversation stay with people.",
  },
  {
    question: "Will we use real prospective-client information?",
    answer:
      "No. Every exercise uses sanitized sample leads supplied for the session. Do not paste confidential prospective-client information into a public chatbot or any tool your firm has not approved.",
  },
  {
    question: "Will AI replace intake specialists?",
    answer:
      "AI can reduce reading, drafting, data-entry, and reminder work. It cannot earn trust from a frightened caller or make the firm's legal and business judgments. Intake specialists who can direct the system and recognize when a human must intervene become more valuable.",
  },
  {
    question: "Is the workshop free? What's the catch?",
    answer:
      "The session is free and contains no product demo. If the methods expose a workflow your firm wants implemented, leadership can separately ask Possible Minds for help. That conversation is optional and outside the workshop.",
  },
  {
    question: "What should AI never decide by itself?",
    answer:
      "Case merit, legal advice, conflicts, representation, final case acceptance, or the value of a claim. AI can organize reported facts and flag a rule for review; an authorized person must verify the record and make the decision.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "AI for personal injury intake specialists",
    "Lead Docket training",
    "Lead Docket AI",
    "personal injury intake workshop",
    "law firm intake conversion",
    "PI lead follow up",
    "legal intake automation",
    "personal injury intake training",
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

export default function IntakeWorkshopPage() {
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
      <ClickBeacon page="workshop-lead-docket-intake" />
      <JsonLd data={structuredData} />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#04150d] to-black">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link href="/workshops" className="transition hover:text-primary">
                Workshops
              </Link>
              <span className="text-primary/40">/</span>
              <span>For intake teams</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl">
              AI for Personal Injury Intake Teams Using Lead Docket: A Working
              Session, Not a Webinar
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              Sixty minutes, ten firms, and a queue of sanitized PI leads. Learn
              how to recognize the lead that cannot wait, prepare the right
              human to respond, recover stalled prospects, and move more
              qualified inquiries toward a signed case. No demo. No pitch.
              Nothing to install.
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
            This is a free, hands-on session for intake specialists and intake
            managers at personal injury firms. You will work through the part
            of intake most systems do not solve on their own: deciding which
            lead needs immediate human attention, giving that responder enough
            context to be credible, and making sure promising prospects do not
            disappear between the first inquiry and the signed retainer.
          </p>
        </section>

        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase text-primary">
            The moment that decides the case
          </p>
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            At 8:43 p.m., one injured person contacts three firms.
          </h2>
          <p>
            Every firm captures the name, phone number, and accident date. Two
            send an automatic confirmation. The third recognizes a serious
            injury, sees that the caller is comparing firms, prepares an
            attorney with the essential facts, and creates a human connection
            within minutes.
          </p>
          <p>
            The difference is not whether the form worked. It is whether the
            intake system understood urgency and moved the right person at the
            right time. That is the skill we practice.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What you&apos;ll actually do
          </h2>
          <p>
            Every exercise runs on sanitized sample leads we provide. You leave
            each one with a rule, instruction, or checklist your team can reuse.
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
            What Lead Docket can handle, and what your team must define
          </h2>
          <p>
            Lead Docket already gives firms substantial intake automation. The
            session maps the platform honestly, then focuses on the operating
            decisions that determine whether automation produces a signed case.
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
            Lead Docket&apos;s feature set changes. We verify this map against
            current Filevine documentation before every cohort.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The rule we teach first
          </h2>
          <p className="text-xl font-semibold text-white">
            The first response is not the first automated text. It is the first
            meaningful human connection.
          </p>
          <p>
            Automation should shorten the distance between a serious lead and
            the person best equipped to help. It can organize, prioritize,
            prepare, and monitor. It should not stand between a frightened
            prospect and the human judgment that earns trust.
          </p>
          <p>
            Here is the first instruction from the workshop. It uses sanitized
            notes only and is free to take without registering:
          </p>
          <RevealPanel
            buttonLabel="Show me the hot-lead triage instruction"
            step="intake_instruction_revealed"
          >
            <div
              id="instruction"
              className="rounded-xl border border-primary/25 bg-[#04150d] p-5 font-mono text-sm leading-relaxed text-foreground/80"
            >
              <p className="text-primary/70">
                # Instead of &quot;is this a good lead?&quot;:
              </p>
              <p className="mt-3">
                Review this sanitized personal injury intake record. Return: 1)
                facts the prospect reported, 2) material qualification facts
                that are still missing, 3) urgency, injury-severity, and
                shopping signals, 4) the recommended human owner and response
                deadline under the rules provided, and 5) a six-line call-ready
                brief. Do not decide case merit, give legal advice, or invent
                facts. Label every inference and every item that needs human
                verification.
              </p>
            </div>
          </RevealPanel>
          <p>
            The workshop turns that instruction into a complete operating
            sequence: what your team notices, who moves, what they receive, how
            the next attempt is scheduled, and what management measures.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What you leave with
          </h2>
          <p>
            The <strong>Intake Conversion Playbook</strong>: a hot-lead triage
            instruction, an attorney-ready brief template, a human escalation
            map, a stalled-lead recovery sequence, and a conversion audit
            scorecard. Each includes the human verification step before the
            workflow can act.
          </p>
          <p className="text-sm text-foreground/60">
            Want the operating context before the session? Read how our{" "}
            <Link
              href="/personal-injury/intake-automation"
              className="text-primary underline-offset-4 hover:underline"
            >
              human-led intake conversion system
            </Link>{" "}
            works and how we move from workflow diagnosis to implementation in
            our{" "}
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
            Intake specialists, senior intake specialists, intake managers,
            intake paralegals, and attorneys who personally handle serious-lead
            response at personal injury firms. Lead Docket users share the same
            examples; firms on Lawmatics, Law Ruler, Captorra, Clio Grow, or a
            comparable intake CRM are welcome and will be grouped by stack when
            possible.
          </p>
          <p>
            This is an operator session. There is no product demo, and the work
            stays close to the queue, handoff, follow-up, and signing decisions
            intake teams make every day.
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
            product="workshop-lead-docket-intake-specialists"
            roles={roles}
            defaultSystem="Lead Docket"
            systemLabel="Intake system"
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
            Responsible for the firm&apos;s intake performance? The leadership
            conversation starts with a conversion diagnostic, not a demo.
          </p>
          <Link
            href="/consult"
            className="mt-4 inline-flex items-center rounded-full bg-[#00ff41] px-8 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
          >
            Book an intake diagnostic
          </Link>
        </section>
      </div>
    </div>
  );
}
