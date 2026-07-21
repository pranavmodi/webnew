import { Metadata } from "next";

import { OperationalWorkshopPage } from "@/components/workshops/operational-workshop-page";
import { SITE_URL } from "@/lib/constants";

const slug = "ai-for-casepeer-litigation-paralegals";
const pageTitle =
  "AI for PI Litigation Paralegals Using CASEpeer: A Working Session, Not a Webinar";
const metaTitle =
  "AI for CASEpeer Litigation Paralegals - Free Working Session";
const pageDescription =
  "A hands-on AI workshop for PI litigation paralegals using CASEpeer: discovery control, deposition digests, deadline exceptions, evidence indexes, and attorney-ready reporting.";
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

const sessionFormat = [
  {
    time: "0-10 min",
    title: "Set the source-control boundary",
    body: "Define what may run inside approved tools, what requires attorney judgment, and why every material answer needs a path back to its source.",
  },
  {
    time: "10-20 min",
    title: "Build the discovery instruction",
    body: "Turn a vague request into a source-linked matrix with response status, support, missing items, ownership, and explicit review boundaries.",
  },
  {
    time: "20-50 min",
    title: "Work the litigation packet",
    body: "Practice deposition digests, deadline exception sweeps, evidence indexing, and attorney-ready reporting on sanitized materials.",
  },
  {
    time: "50-60 min",
    title: "Standardize litigation control",
    body: "Compare results, identify failure points, and turn the strongest instructions into a repeatable CASEpeer litigation playbook.",
  },
];

const exercises = [
  {
    title: "Discovery matrix",
    body: "Create one source-linked view of what is answered, supported, missing, or awaiting attorney judgment.",
  },
  {
    title: "Deposition digest",
    body: "Extract admissions, disputes, and open questions with page-and-line references instead of unsupported conclusions.",
  },
  {
    title: "Deadline exceptions",
    body: "Compare supplied deadlines, WorkPlan tasks, and source documents to surface conflicts requiring human confirmation.",
  },
  {
    title: "Evidence index",
    body: "Identify duplicates, inconsistent versions, absent attachments, and documents referenced elsewhere in the file.",
  },
  {
    title: "Attorney status memo",
    body: "Compress what changed, what is due, what is missing, and which decisions need counsel into a verifiable brief.",
  },
];

const systemMap = [
  {
    title: "Turnkey PI workflow",
    body: "CASEpeer organizes matters from intake through settlement with stages, treatment information, tasks, notes, and responsibility in one operating record.",
  },
  {
    title: "Tasks, calendars, and reporting",
    body: "Assignments, priorities, due dates, events, communications, and reporting make upcoming obligations and stalled work visible across the team.",
  },
  {
    title: "8am IQ Writing Assistant",
    body: "CASEpeer's built-in writing assistant can refine tone, simplify language, correct drafts, and translate communications inside daily workflow surfaces.",
  },
  {
    title: "The litigation intelligence layer belongs to your firm",
    body: "The firm must define which source controls, what requires privilege review, who confirms deadlines, how approved tools may handle documents, and when counsel must intervene.",
  },
];

const faqs = [
  {
    question: "What is the participant experience like?",
    answer:
      "It is a working session, not a webinar. Participants use one sanitized litigation packet to build and test source-linked instructions, compare results, and leave with finished assets their CASEpeer team can reuse.",
  },
  {
    question: "Doesn't CASEpeer already have built-in AI?",
    answer:
      "Yes. 8am IQ for CASEpeer can refine and translate writing, and CASEpeer can connect with specialist tools. The workshop focuses on the operating rules around them: source control, approved data paths, verification, authority, and attorney escalation.",
  },
  {
    question: "Will participants use real case files?",
    answer:
      "No. Every exercise uses a sanitized litigation packet. Confidential client information, protected health information, privileged material, and work product should never enter a public chatbot or unapproved system.",
  },
  {
    question: "Can AI calculate or calendar litigation deadlines?",
    answer:
      "AI can help compare a supplied deadline list against tasks and source documents, but it is not the final authority. A qualified person must verify the governing rule, trigger, jurisdiction, service method, extensions, and calendar entry.",
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
    "AI for litigation paralegals",
    "CASEpeer AI training",
    "personal injury paralegal workshop",
    "AI discovery document review",
    "deposition summary AI",
    "litigation deadline workflow",
    "personal injury litigation automation",
    "8am IQ CASEpeer training",
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

export default function LitigationParalegalWorkshopPage() {
  return (
    <OperationalWorkshopPage
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      pageUrl={pageUrl}
      beaconPage="workshop-casepeer-paralegals"
      breadcrumbLabel="CASEpeer litigation paralegals"
      cohortLabel="CASEpeer cohort"
      headline="Build five litigation-control workflows your CASEpeer team can use before the next deadline."
      introduction="Work through a sanitized PI litigation packet, produce source-linked work product, and leave with a verified control playbook your team can reuse."
      platformName="CASEpeer"
      preview={{
        buttonLabel: "Reveal the discovery-control instruction",
        description:
          "See how a CASEpeer litigation paralegal can turn scattered discovery materials into a source-linked, attorney-reviewable control matrix.",
        step: "litigation_instruction_revealed",
        promptLead: 'Instead of "summarize this discovery":',
        promptBody:
          "Build a discovery control matrix from this sanitized packet. For each request, list the request number, exact source page, current response status, supporting documents, missing items, and the person who must resolve the next step. Separate stated facts from inferences. Flag potential privilege or objection issues for attorney review without deciding them. Do not calculate deadlines, invent support, or treat a draft as final. End with every conflict or omission a human must verify.",
      }}
      sessionFormat={sessionFormat}
      exercises={exercises}
      practicalHeading="Five CASEpeer workflows, built on one sanitized litigation packet"
      practicalDescription="No real client file is required. Each exercise produces reusable work product with source requirements, verification checks, and an explicit attorney-escalation boundary."
      valueHeading="Upskill the paralegal. Strengthen litigation control."
      values={[
        {
          icon: "sparkles",
          title: "Faster source-linked review",
          body: "Paralegals learn to compress documents and testimony without losing the path back to the controlling page, line, or case entry.",
        },
        {
          icon: "users",
          title: "Fewer last-minute fire drills",
          body: "Shared exception checks make missing support, conflicting versions, open ownership, and attorney decisions visible earlier.",
        },
        {
          icon: "file",
          title: "Clear attorney escalation",
          body: "The workflow separates organization and drafting from privilege, objections, deadline authority, legal strategy, and final approval.",
        },
      ]}
      systemMapLabel="What CASEpeer can handle, and what your firm must define"
      systemMap={systemMap}
      systemMapNote="CASEpeer's feature set changes. We verify this map against current product documentation before each cohort."
      deliverablesHeading="A litigation control system, not another page of notes"
      deliverablesDescription="Participants leave with source-linked working assets and a concise standardization view for litigation leadership. The certificate records completion but does not represent CLE credit."
      deliverables={[
        "A discovery control matrix instruction",
        "A source-linked deposition digest template",
        "A deadline exception checklist",
        "An evidence and exhibit index",
        "An attorney-ready status memo",
        "A personalized certificate of completion",
      ]}
      registration={{
        product: "workshop-casepeer-litigation-paralegals",
        roles,
        defaultSystem: "CASEpeer",
        systemLabel: "Case management system",
        audience:
          "For litigation paralegals, litigation support specialists, paralegal managers, and supervising attorneys working inside CASEpeer.",
      }}
      faqs={faqs}
    />
  );
}
