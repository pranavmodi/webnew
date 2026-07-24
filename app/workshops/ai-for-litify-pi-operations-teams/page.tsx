import { Metadata } from "next";

import { OperationalWorkshopPage } from "@/components/workshops/operational-workshop-page";
import { SITE_URL } from "@/lib/constants";

const slug = "ai-for-litify-pi-operations-teams";
const pageTitle =
  "AI for Personal Injury Operations Teams Using Litify: A Working Session, Not a Webinar";
const metaTitle = "AI for Litify PI Operations Teams - Free Working Session";
const pageDescription =
  "A hands-on AI workshop for PI operations leaders using Litify's Salesforce-based platform: agent workflows, data readiness, human approvals, matter exceptions, and reporting.";
const pageUrl = `${SITE_URL}/workshops/${slug}`;

const roles = [
  "Legal operations leader",
  "Litify administrator",
  "COO or firm administrator",
  "Practice operations manager",
  "Data or reporting leader",
  "Attorney sponsor",
  "Other",
];

const sessionFormat = [
  {
    time: "0-10 min",
    title: "Define the agent boundary",
    body: "Separate actions an agent may execute, recommendations a person must approve, and legal decisions that remain outside the workflow.",
  },
  {
    time: "10-20 min",
    title: "Map data to action",
    body: "Choose the Litify objects, fields, documents, and matter-plan events an agent needs, then identify missing or unreliable inputs.",
  },
  {
    time: "20-50 min",
    title: "Design the operating workflows",
    body: "Build and test intake routing, matter exceptions, document checks, approvals, and reporting on a sanitized PI operating model.",
  },
  {
    time: "50-60 min",
    title: "Set the control standard",
    body: "Define permissions, source requirements, logs, exception ownership, and the measures leadership will use before deployment.",
  },
];

const exercises = [
  {
    title: "Agent action map",
    body: "Define what the agent observes, recommends, executes, records, and escalates at each step of one PI workflow.",
  },
  {
    title: "Data-readiness check",
    body: "Identify the fields, documents, ownership data, and status definitions required for reliable action.",
  },
  {
    title: "Matter-plan exceptions",
    body: "Surface stalled tasks and slipping milestones, then route each exception to the correct human owner.",
  },
  {
    title: "Approval matrix",
    body: "Separate automatic actions from staff approval, attorney review, and decisions an agent must never make.",
  },
  {
    title: "Operations dashboard",
    body: "Specify the volume, exception, completion, override, and outcome measures leadership needs to govern the workflow.",
  },
];

const systemMap = [
  {
    title: "Salesforce foundation",
    body: "Litify applies Salesforce's enterprise platform, permissions, integration ecosystem, and no-code configuration to legal operations.",
  },
  {
    title: "Connected legal workflows",
    body: "Intake, matter plans, documents, activity, and reporting can operate from shared data instead of separate point solutions.",
  },
  {
    title: "LitifyAI and ACE",
    body: "Litify supports asking, drafting, summarizing, centralized prompts, recommendations, and packaged or custom agentic workflows.",
  },
  {
    title: "The operating model belongs to the firm",
    body: "The firm must define trusted data, action authority, approvals, exception owners, audit evidence, and measures of a safe result.",
  },
];

const faqs = [
  {
    question: "How is Litify different from the other workshop platforms?",
    answer:
      "Lead Docket centers on intake, while Filevine, CASEpeer, and SmartAdvocate package case-management workflows for legal teams. Litify's clearest structural difference is its Salesforce foundation: it is designed as a highly configurable enterprise platform spanning intake, matters, documents, analytics, integrations, and agentic workflows. That flexibility makes operating design, data quality, permissions, and governance especially important.",
  },
  {
    question: "Doesn't Litify already include AI agents?",
    answer:
      "Yes. Litify ACE and LitifyAI support agentic actions, recommendations, document and data analysis, drafting, summaries, and firm-wide prompts. The workshop does not recreate those features. It teaches the operating decisions required to deploy them responsibly: scope, data, authority, approval, escalation, logging, and measurement.",
  },
  {
    question: "Is this a Litify administrator certification?",
    answer:
      "No. It is an independent Possible Minds working session for PI operations teams. It does not replace official Litify or Salesforce product training, implementation services, or certification.",
  },
  {
    question: "Will participants use live firm or client data?",
    answer:
      "No. Every exercise uses a sanitized operating model. Real data should enter only after the firm approves the environment, permissions, retention, integrations, logging, and human-review controls.",
  },
  {
    question: "Can an agent make legal or case-acceptance decisions?",
    answer:
      "No. The workshop treats legal advice, case acceptance, strategy, valuation, settlement authority, and final deadline responsibility as human decisions. Agents may organize, recommend, or execute bounded administrative actions under firm-approved rules.",
  },
  {
    question: "Is the workshop free? What's the catch?",
    answer:
      "The session is free and contains no product demo. If the operating map exposes a workflow the firm later wants implemented, leadership can separately ask Possible Minds for help. That conversation is optional.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "Litify AI workshop",
    "Litify ACE training",
    "AI for legal operations",
    "Salesforce legal AI agents",
    "Litify personal injury",
    "PI law firm operations workshop",
    "legal agent governance",
    "Litify workflow automation",
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

export default function LitifyOperationsWorkshopPage() {
  return (
    <OperationalWorkshopPage
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      pageUrl={pageUrl}
      beaconPage="workshop-litify-pi-operations"
      breadcrumbLabel="Litify PI operations teams"
      cohortLabel="Litify cohort"
      headline="Design five governed AI workflows your Litify team can turn into action."
      introduction="Litify is a Salesforce-based legal operations platform, so the opportunity is broader than one packaged PI workflow. Work through a sanitized operating model and leave with the rules needed for a deployable agent."
      platformName="Litify"
      preview={{
        buttonLabel: "Reveal the agent workflow brief",
        description:
          "See how a Litify operations team can turn a vague automation idea into a bounded, testable agent workflow.",
        step: "litify_agent_workflow_revealed",
        promptLead: 'Instead of "automate stalled cases":',
        promptBody:
          "Design an agent workflow for stalled medical-record requests using this sanitized Litify data model. Specify: 1) triggering matter status and fields; 2) trusted source records; 3) missing-data checks; 4) actions the agent may execute; 5) recommendations requiring staff approval; 6) conditions requiring attorney escalation; 7) every update written back to Litify; and 8) exception, override, and outcome metrics. The agent must not infer legal deadlines, contact an unapproved recipient, or close an exception without evidence.",
      }}
      sessionFormat={sessionFormat}
      exercises={exercises}
      practicalHeading="Five Litify operating controls, built around one agent workflow"
      practicalDescription="The work begins before configuration. Each exercise turns firm policy into a testable specification for data, action, approval, escalation, and measurement."
      valueHeading="Treat AI as an operating model, not another feature."
      values={[
        {
          icon: "sparkles",
          title: "Action from connected data",
          body: "Teams learn to translate matter data and documents into bounded recommendations and actions instead of isolated AI outputs.",
        },
        {
          icon: "users",
          title: "Explicit human authority",
          body: "Every workflow names who approves, who owns an exception, and when the agent must stop for legal judgment.",
        },
        {
          icon: "file",
          title: "Governance leadership can inspect",
          body: "Permissions, logs, overrides, failure cases, and outcome measures become part of the design before deployment.",
        },
      ]}
      systemMapLabel="What Litify provides, and what your firm must design"
      systemMap={systemMap}
      systemMapNote="Litify's ACE and LitifyAI capabilities are evolving. We verify this map against current first-party product documentation before each cohort."
      deliverablesHeading="An agent workflow your technical team can evaluate"
      deliverablesDescription="Participants leave with a concise operating specification, not a generic list of AI ideas. The certificate records completion but does not represent CLE or vendor certification."
      deliverables={[
        "An agent action and authority map",
        "A Litify data-readiness checklist",
        "A matter-plan exception design",
        "A human approval and escalation matrix",
        "An operations dashboard specification",
        "A personalized certificate of completion",
      ]}
      registration={{
        product: "workshop-litify-pi-operations-teams",
        roles,
        defaultSystem: "Litify",
        systemLabel: "Legal operations platform",
        audience:
          "For PI legal-operations leaders, Litify administrators, COOs, reporting leaders, and attorney sponsors responsible for governed automation.",
      }}
      faqs={faqs}
    />
  );
}
