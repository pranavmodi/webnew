import { Metadata } from "next";

import { OperationalWorkshopPage } from "@/components/workshops/operational-workshop-page";
import { SITE_URL } from "@/lib/constants";

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

const sessionFormat = [
  {
    time: "0-10 min",
    title: "Define the human-first boundary",
    body: "Identify what AI may organize and prioritize, what a capable person must own, and which decisions remain legal or business judgment.",
  },
  {
    time: "10-20 min",
    title: "Build the triage instruction",
    body: "Turn scattered form answers and call notes into urgency signals, missing facts, a response owner, and a call-ready brief.",
  },
  {
    time: "20-50 min",
    title: "Work the intake queue",
    body: "Practice serious-lead prioritization, attorney handoffs, stalled-prospect recovery, and follow-up exceptions on sanitized PI leads.",
  },
  {
    time: "50-60 min",
    title: "Standardize the path to a signed case",
    body: "Turn the strongest instructions, ownership rules, and measurements into a reusable Lead Docket intake playbook.",
  },
];

const exercises = [
  {
    title: "Urgent-lead triage",
    body: "Surface injury severity, urgency, shopping signals, and missing facts that change who should respond first.",
  },
  {
    title: "Attorney-ready brief",
    body: "Compress form answers and call notes into the facts an attorney needs before contacting the prospect.",
  },
  {
    title: "Fast human handoff",
    body: "Assign the owner, response deadline, channel, and escalation path for serious inquiries.",
  },
  {
    title: "Stalled-lead recovery",
    body: "Create humane follow-up for missed calls, incomplete forms, and unsigned retainers.",
  },
  {
    title: "Conversion audit",
    body: "Map first response, meaningful contact, qualification, retainer, and acceptance to find where good leads disappear.",
  },
];

const systemMap = [
  {
    title: "Capture and lead tracking",
    body: "Lead Docket centralizes inquiries, forms, communications, status, and source data so the intake team can work from one record.",
  },
  {
    title: "Workflow automation",
    body: "Automations can trigger follow-up, forms, e-signatures, status changes, tasks, and transfer into the case-management system.",
  },
  {
    title: "LeadsAI",
    body: "Summaries, sentiment analysis, and timelines can compress reading work and make the lead record easier to understand.",
  },
  {
    title: "The operating rules still belong to your firm",
    body: "The firm must define which lead needs an attorney now, what counts as meaningful contact, who owns the next attempt, and when an unsigned retainer becomes an exception.",
  },
];

const faqs = [
  {
    question: "What is the participant experience like?",
    answer:
      "It is a working session, not a webinar. Participants work through a sanitized PI lead queue, test instructions and ownership rules, compare results, and leave with finished assets their Lead Docket team can reuse.",
  },
  {
    question: "Doesn't Lead Docket already have AI and automation?",
    answer:
      "Yes. Lead Docket includes automation and LeadsAI capabilities such as summaries, sentiment analysis, and timelines. The workshop focuses on the operating layer around them: prioritization, human ownership, escalation, verification, and conversion measurement.",
  },
  {
    question: "Will participants use real prospective-client information?",
    answer:
      "No. Every exercise uses sanitized sample leads. Confidential prospective-client information should never enter a public chatbot or any system the firm has not approved.",
  },
  {
    question: "How does this help the firm, not just one intake specialist?",
    answer:
      "The exercises produce shared triage rules, human handoff standards, recovery sequences, and conversion measurements. Intake leaders can use them to make response quality more consistent across shifts and offices.",
  },
  {
    question: "Is there a certificate?",
    answer:
      "Yes. Participants who complete the working session receive a personalized certificate of completion. It documents participation but is not CLE credit.",
  },
  {
    question: "Is the workshop free? What's the catch?",
    answer:
      "The session is free and contains no product demo. If the methods expose a workflow the firm later wants implemented, leadership can separately ask Possible Minds for help. That conversation is optional.",
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

export default function IntakeWorkshopPage() {
  return (
    <OperationalWorkshopPage
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      pageUrl={pageUrl}
      beaconPage="workshop-lead-docket-intake"
      breadcrumbLabel="Lead Docket intake teams"
      cohortLabel="Lead Docket cohort"
      headline="Build five intake workflows your Lead Docket team can use on the next serious lead."
      introduction="Work through a sanitized PI lead queue, prepare faster human follow-up, and leave with an intake conversion playbook your team can reuse."
      platformName="Lead Docket"
      preview={{
        buttonLabel: "Reveal the hot-lead triage instruction",
        description:
          "See how a Lead Docket intake team can turn scattered inquiry details into urgency signals, missing facts, and a prepared human response.",
        step: "intake_instruction_revealed",
        promptLead: 'Instead of "is this a good lead?":',
        promptBody:
          "Review this sanitized personal injury intake record. Return: 1) facts the prospect reported, 2) material qualification facts that are still missing, 3) urgency, injury-severity, and shopping signals, 4) the recommended human owner and response deadline under the rules provided, and 5) a six-line call-ready brief. Do not decide case merit, give legal advice, or invent facts. Label every inference and every item that needs human verification.",
      }}
      sessionFormat={sessionFormat}
      exercises={exercises}
      practicalHeading="Five Lead Docket workflows, built on a sanitized PI lead queue"
      practicalDescription="No real prospect information is required. Each exercise ends with a reusable rule, instruction, or checklist and a clear human owner."
      valueHeading="Upskill intake. Strengthen the path to a signed case."
      values={[
        {
          icon: "sparkles",
          title: "Faster prioritization",
          body: "Intake specialists learn to recognize serious leads, surface missing facts, and distinguish urgency from ordinary queue volume.",
        },
        {
          icon: "users",
          title: "Better human handoffs",
          body: "The right attorney or intake owner receives a concise brief, a response deadline, and enough context to build trust quickly.",
        },
        {
          icon: "file",
          title: "Measurable conversion operations",
          body: "Leaders gain shared definitions for meaningful contact, follow-up ownership, stalled-lead exceptions, and conversion leakage.",
        },
      ]}
      systemMapLabel="What Lead Docket can handle, and what your team must define"
      systemMap={systemMap}
      systemMapNote="Lead Docket's feature set changes. We verify this map against current product documentation before each cohort."
      deliverablesHeading="A working intake system, not another page of notes"
      deliverablesDescription="Participants leave with practical assets for the queue and a concise standardization view for intake leadership. The certificate records completion but does not represent CLE credit."
      deliverables={[
        "A hot-lead triage instruction",
        "An attorney-ready brief template",
        "A human escalation and ownership map",
        "A stalled-lead recovery sequence",
        "A conversion audit scorecard",
        "A personalized certificate of completion",
      ]}
      registration={{
        product: "workshop-lead-docket-intake-specialists",
        roles,
        defaultSystem: "Lead Docket",
        systemLabel: "Intake system",
        audience:
          "For intake specialists, intake managers, intake paralegals, and attorneys working serious leads inside Lead Docket.",
      }}
      faqs={faqs}
    />
  );
}
