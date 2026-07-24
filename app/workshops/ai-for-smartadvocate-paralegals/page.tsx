import { Metadata } from "next";

import { OperationalWorkshopPage } from "@/components/workshops/operational-workshop-page";
import { SITE_URL } from "@/lib/constants";

const slug = "ai-for-smartadvocate-paralegals";
const pageTitle =
  "AI for Personal Injury Paralegals Using SmartAdvocate: A Working Session, Not a Webinar";
const metaTitle =
  "AI for SmartAdvocate PI Paralegals - Free Working Session";
const pageDescription =
  "A hands-on AI workshop for PI paralegals using SmartAdvocate: case reviews, document exceptions, medical chronology checks, WorkPlan escalation, and attorney-ready reporting.";
const pageUrl = `${SITE_URL}/workshops/${slug}`;

const roles = [
  "Personal injury paralegal",
  "Senior paralegal",
  "Case manager",
  "Paralegal manager",
  "Attorney supervising case work",
  "Firm leadership / operations",
  "Other",
];

const sessionFormat = [
  {
    time: "0-10 min",
    title: "Set the review boundary",
    body: "Define what SmartIntelligence may organize or draft, what must trace back to the case record, and which decisions stay with an attorney.",
  },
  {
    time: "10-20 min",
    title: "Build the case-review instruction",
    body: "Turn a broad case-summary request into a source-linked review of medical records, documents, tasks, deadlines, and unresolved decisions.",
  },
  {
    time: "20-50 min",
    title: "Work the case packet",
    body: "Practice chronology checks, document exceptions, WorkPlan escalation, and attorney-ready reporting on sanitized PI materials.",
  },
  {
    time: "50-60 min",
    title: "Standardize the operating rules",
    body: "Compare results and turn the strongest verification, ownership, and escalation rules into a reusable SmartAdvocate playbook.",
  },
];

const exercises = [
  {
    title: "Case review brief",
    body: "Summarize what changed, what is missing, what is overdue, and which decisions need counsel, with a source for each material fact.",
  },
  {
    title: "Chronology check",
    body: "Compare the generated medical timeline with the supplied records and flag missing providers, dates, and unsupported conclusions.",
  },
  {
    title: "Document exceptions",
    body: "Find duplicate, misclassified, incomplete, or unmatched documents before they disappear into the case file.",
  },
  {
    title: "WorkPlan escalation",
    body: "Surface overdue or blocked work, identify the owner, and separate routine follow-up from attorney judgment.",
  },
  {
    title: "Attorney review memo",
    body: "Compress case status, conflicts, open evidence, and decisions into a short brief an attorney can verify quickly.",
  },
];

const systemMap = [
  {
    title: "SmartIntelligence case analysis",
    body: "Built-in AI can summarize cases and multiple documents, analyze records and photos, support case chat, and save insights inside the matter.",
  },
  {
    title: "Documents and medical records",
    body: "SmartAdvocate can classify documents, extract case data, generate medical chronologies, and link work to the case-management record.",
  },
  {
    title: "WorkPlans and visibility",
    body: "Automated procedures, tasks, deadlines, dashboards, and reports help teams see what should happen and what remains open.",
  },
  {
    title: "The control layer belongs to the firm",
    body: "The firm must define controlling sources, verification standards, permissions, exception ownership, and when a paralegal must escalate to counsel.",
  },
];

const faqs = [
  {
    question: "What is the participant experience like?",
    answer:
      "It is a working session, not a webinar. Participants work through a sanitized PI case packet, test review instructions and escalation rules, compare results, and leave with assets their SmartAdvocate team can reuse.",
  },
  {
    question: "Doesn't SmartAdvocate already include AI?",
    answer:
      "Yes. SmartIntelligence includes case chat, summaries, medical chronologies, document classification, data extraction, demand drafting, and other built-in capabilities. The workshop focuses on using those capabilities with source checks, firm rules, human ownership, and attorney escalation.",
  },
  {
    question: "Will participants use real client files?",
    answer:
      "No. Every exercise uses sanitized materials. Client information, protected health information, privileged material, and work product should remain inside systems the firm has approved.",
  },
  {
    question: "Can AI control deadlines or legal decisions?",
    answer:
      "No. AI can help surface supplied dates, conflicts, and missing work, but a qualified person must verify the governing deadline and calendar entry. Legal advice, strategy, valuation, and final approval remain with attorneys.",
  },
  {
    question: "Is there a certificate?",
    answer:
      "Yes. Participants who complete the working session receive a personalized certificate of completion. It documents participation but is not CLE credit.",
  },
  {
    question: "Is the workshop free? What's the catch?",
    answer:
      "The session is free and contains no product demo. If the work exposes a process the firm later wants implemented, leadership can separately ask Possible Minds for help. That conversation is optional.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "SmartAdvocate AI training",
    "AI for personal injury paralegals",
    "SmartIntelligence workshop",
    "SmartAdvocate medical chronology",
    "personal injury case review AI",
    "PI paralegal AI workshop",
    "SmartAdvocate WorkPlans",
    "personal injury case management automation",
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

export default function SmartAdvocateParalegalWorkshopPage() {
  return (
    <OperationalWorkshopPage
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      pageUrl={pageUrl}
      beaconPage="workshop-smartadvocate-paralegals"
      breadcrumbLabel="SmartAdvocate PI paralegals"
      cohortLabel="SmartAdvocate cohort"
      headline="Build five case-review workflows your SmartAdvocate team can use on its next file."
      introduction="Work through a sanitized PI case packet, turn case data into verifiable next actions, and leave with a control playbook your paralegal team can reuse."
      platformName="SmartAdvocate"
      preview={{
        buttonLabel: "Reveal the case-review instruction",
        description:
          "See how a SmartAdvocate paralegal can turn case data, documents, and open work into a source-linked brief for attorney review.",
        step: "smartadvocate_case_review_revealed",
        promptLead: 'Instead of "summarize this case":',
        promptBody:
          "Review this sanitized SmartAdvocate case packet. Return: 1) material facts with the source document, page, or case field; 2) changes since the prior review; 3) missing or conflicting medical records and documents; 4) overdue or blocked work with its current owner; and 5) decisions that require attorney review. Separate stated facts from inferences. Do not calculate deadlines, value the case, give legal advice, or invent missing information.",
      }}
      sessionFormat={sessionFormat}
      exercises={exercises}
      practicalHeading="Five SmartAdvocate workflows, built on one sanitized PI case packet"
      practicalDescription="Each exercise produces a reusable review asset with source requirements, exception ownership, and an explicit attorney boundary."
      valueHeading="Use built-in AI without outsourcing judgment."
      values={[
        {
          icon: "sparkles",
          title: "Faster case review",
          body: "Paralegals learn to compress a large file while preserving the path back to the document, page, or case field.",
        },
        {
          icon: "users",
          title: "Clearer work ownership",
          body: "WorkPlan and document exceptions become visible with a named owner and a defined escalation path.",
        },
        {
          icon: "file",
          title: "Better attorney handoffs",
          body: "Counsel receives a short, verifiable brief focused on conflicts, missing support, and decisions rather than raw case volume.",
        },
      ]}
      systemMapLabel="What SmartAdvocate can handle, and what your firm must define"
      systemMap={systemMap}
      systemMapNote="SmartAdvocate's SmartIntelligence feature set is evolving. We verify this map against current product documentation before each cohort."
      deliverablesHeading="A repeatable case-review system"
      deliverablesDescription="Participants leave with practical assets for day-to-day case control. The certificate records completion but does not represent CLE credit."
      deliverables={[
        "A source-linked case-review instruction",
        "A medical chronology verification checklist",
        "A document exception workflow",
        "A WorkPlan escalation map",
        "An attorney-ready review memo",
        "A personalized certificate of completion",
      ]}
      registration={{
        product: "workshop-smartadvocate-paralegals",
        roles,
        defaultSystem: "SmartAdvocate",
        systemLabel: "Case management system",
        audience:
          "For PI paralegals, case managers, paralegal managers, and supervising attorneys working inside SmartAdvocate.",
      }}
      faqs={faqs}
    />
  );
}
