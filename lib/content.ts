import { FileText, ShieldCheck, Send } from "lucide-react";
import { CALENDLY_URL } from "./constants";

export const heroHeadline = "Your inbox, handled.";

export const heroSubhead =
  "AI-powered email triage and replies for healthcare and legal teams.";

export const previewModules = [
  {
    title: "Inbox Triage",
    description: "Routes, prioritizes, logs.",
    tags: ["Sandbox on", "High priority", "Right team"],
    latency: "0.4s",
  },
  {
    title: "Suggested Reply",
    description: "Drafts with citations.",
    tags: ["Tone guardrails", "Audit trail"],
    latency: "Ready",
  },
  {
    title: "Intake Summary",
    description: "Fields + next steps to CRM/EMR.",
    tags: ["Score 8.7", "Next: Schedule"],
    latency: "Structured",
  },
] as const;

export const outcomesBar = {
  label: "Outcomes (example)",
  metrics: [
    { value: "40% faster response time", context: "Example" },
    { value: "2× lead qualification throughput", context: "Example" },
    { value: "60% fewer manual tags", context: "Example" },
  ],
  audiences: ["Healthcare ops", "Legal intake"],
};

export const whatWeDoCards = [
  {
    title: "Sandbox-first",
    icon: ShieldCheck,
    value: "Test tagging and replies safely before production.",
    outcomes: ["No live sends", "Flip live fast"],
    href: "/solutions#support",
  },
  {
    title: "Routing & Auto-reply",
    icon: Send,
    value: "Right team instantly with drafted replies that match your tone.",
    outcomes: ["Faster answers", "Consistent voice"],
    href: "/solutions#intake",
  },
  {
    title: "Document & Workflow Automation",
    icon: FileText,
    value: "Extract fields, summarize, and sync to your systems.",
    outcomes: ["No retyping", "Audit-ready"],
    href: "/solutions#automation",
  },
];

export const howItWorksSteps = [
  {
    title: "Connect",
    description:
      "Plug into EMR/EHR, CRM, inboxes, telephony, knowledge bases, and secure file stores via APIs.",
  },
  {
    title: "Understand",
    description:
      "Map intents, parties, urgency, and entities. Detect PHI/PII, redact where required, and keep provenance.",
  },
  {
    title: "Act",
    description:
      "Draft replies, route tickets, create tasks, log structured events, and push updates into your systems.",
  },
  {
    title: "Learn",
    description:
      "Capture feedback, score quality, and continuously improve prompts and guardrails with QA loops.",
  },
] as const;

export const integrationsLine =
  "Integrates with CRM, EHR/EMR, ticketing, telephony, email, document stores, and data warehouses (generic).";

export const industries = [
  {
    key: "healthcare",
    title: "Healthcare",
    description:
      "Purpose-built for patient access, care navigation, and billing support teams.",
    workflows: [
      "Scheduling and rescheduling requests",
      "Support inbox triage across billing, care, and benefits",
      "Pre-auth and documentation intake",
      "Member outreach, follow-ups, and reminders",
    ],
    outcomes: [
      "Reduce backlog and hold times",
      "Improve accuracy with cited knowledge",
      "Lower handle time with structured summaries",
    ],
    example:
      "AI triages patient portal messages, drafts compliant replies, and schedules callbacks for edge cases.",
  },
  {
    key: "legal",
    title: "Legal",
    description:
      "Built for intake teams, client success, and ops at law firms and legal service providers.",
    workflows: [
      "Lead qualification and conflicts intake",
      "Follow-ups with documents and deadlines",
      "Matter status updates and reminders",
      "Document extraction and structured summaries",
    ],
    outcomes: [
      "Accelerate speed-to-lead",
      "Improve response quality and consistency",
      "Keep attorneys focused on high-value work",
    ],
    example:
      "AI collects matter details, drafts conflict checks, and prepares a clean intake summary for review.",
  },
] as const;

export const caseStudies = [
  {
    title: "Regional health network support desk",
    label: "Illustrative example",
    context: "Multi-site provider supporting patient portal, billing, and benefits inquiries.",
    challenge:
      "Support queues spiked during enrollment and claims season; manual triage slowed responses.",
    solution:
      "Deployed AI triage and suggested replies with policy citations across email and portal messages.",
    impact: [
      "Example: 40% faster median response time",
      "Example: 35% fewer escalations to clinical staff",
      "Example: 1.9× more issues resolved in-channel",
    ],
    notes: "Generic integrations: EHR, telephony, CRM, shared knowledge base.",
  },
  {
    title: "Specialty clinic intake",
    label: "Illustrative example",
    context: "Small team handling referrals, pre-auth requests, and scheduling via phone and forms.",
    challenge:
      "Leads and referrals waited hours for follow-up; data entry into the EMR was inconsistent.",
    solution:
      "Used intake AI to qualify leads, collect required documents, and auto-populate structured records.",
    impact: [
      "Example: 2× faster speed-to-lead",
      "Example: 25% increase in booked consults",
      "Example: Cleaner data with required fields enforced",
    ],
    notes: "Generic integrations: EMR, CRM, secure file storage.",
  },
  {
    title: "Multi-office law firm client services",
    label: "Illustrative example",
    context: "Firm managing inbound matters, follow-ups, and document-heavy requests.",
    challenge:
      "Attorneys spent too much time clarifying intake details and digging for prior context.",
    solution:
      "Rolled out intake summaries, follow-up drafting, and document extraction with audit logs.",
    impact: [
      "Example: 60% fewer manual tags",
      "Example: Shorter time-to-assign for new matters",
      "Example: Better visibility with structured summaries",
    ],
    notes: "Generic integrations: CRM, DMS, telephony, email.",
  },
] as const;

export const solutions = [
  {
    id: "support",
    title: "Customer Support AI",
    promise: "Handle inbound tickets with AI triage, suggested replies, and structured logging.",
    features: [
      "Intent and urgency detection with routing rules",
      "Suggested replies with policy citations and tone controls",
      "Auto-tagging, summarization, and CRM/EMR sync",
    ],
    outcomes: [
      "Faster speed-to-response and resolution",
      "Reduced backlog and fewer manual tags",
      "Better visibility with clean, structured data",
    ],
    faqs: [
      {
        question: "How do you keep responses accurate?",
        answer:
          "We ground responses in your knowledge, require citations, and enforce tone/guardrails with review flows.",
      },
      {
        question: "Can we choose what is automated vs. suggested?",
        answer:
          "Yes. You can keep humans-in-the-loop on any flow and only auto-send for low-risk intents.",
      },
      {
        question: "How do you handle PHI or sensitive data?",
        answer:
          "We support redaction, scoped access, and data residency. Sensitive fields stay within your environment when required.",
      },
    ],
  },
  {
    id: "intake",
    title: "Sales / Intake AI",
    promise: "Qualify leads quickly and keep humans focused on high-intent conversations.",
    features: [
      "Lead scoring, routing, and appointment scheduling",
      "Intake checklists with required fields and follow-ups",
      "Conversational data capture across email, chat, or voice",
    ],
    outcomes: [
      "Better speed-to-lead and conversion",
      "Cleaner, consistent CRM records",
      "Lower no-show rates with smart reminders",
    ],
    faqs: [
      {
        question: "Do we have control over routing rules?",
        answer:
          "Yes. Routing is configurable by region, practice area, availability, and business priority.",
      },
      {
        question: "Can we keep teams in the loop?",
        answer:
          "Every action is logged with context. High-value leads can be flagged for human review before anything is sent.",
      },
      {
        question: "What channels are supported?",
        answer:
          "Email, web forms, chat, and telephony transcripts. We can also post updates to Slack or your CRM.",
      },
    ],
  },
  {
    id: "automation",
    title: "Document & Workflow Automation",
    promise: "Extract fields, summarize, and trigger workflows with auditability built in.",
    features: [
      "Document extraction with validation and confidence scoring",
      "Summaries with cited sources and structured fields",
      "Task creation and updates across your stack with logs",
    ],
    outcomes: [
      "Fewer manual touches on repetitive workflows",
      "Higher data quality for reporting and compliance",
      "Clear audit trails for every action",
    ],
    faqs: [
      {
        question: "Can we review before updates post to systems?",
        answer:
          "Yes. We support approval steps, thresholds, and detailed audit logs before pushing changes.",
      },
      {
        question: "How do you validate extracted data?",
        answer:
          "We combine model outputs with rules, regex, and human review where needed. Confidence scores flag edge cases.",
      },
      {
        question: "Which systems can you update?",
        answer:
          "CRMs, EMRs/EHRs, ticketing, data warehouses, and document stores via APIs or secure file drops.",
      },
    ],
  },
] as const;

export const compareRows = [
  { label: "Inbox triage and routing", support: true, intake: true, automation: true },
  { label: "Suggested replies with citations", support: true, intake: true, automation: false },
  { label: "Lead scoring and booking", support: false, intake: true, automation: false },
  { label: "Document extraction and summaries", support: true, intake: true, automation: true },
  { label: "Structured logging to CRM/EMR", support: true, intake: true, automation: true },
  { label: "Audit logs and controls", support: true, intake: true, automation: true },
] as const;

export const securityPoints = [
  "Data is encrypted in transit and at rest; access is scoped by role.",
  "Option to run certain steps in your VPC or behind your existing identity provider.",
  "Redaction and minimization for PHI/PII; audit trails for every action.",
] as const;

export const contactIndustries = ["Healthcare", "Legal", "Other"] as const;

export const ctaButtons = [
  { label: "Book a demo", href: CALENDLY_URL, variant: "default" as const },
  { label: "See solutions", href: "/solutions", variant: "outline" as const },
  { label: "View case studies", href: "/case-studies", variant: "ghost" as const },
] as const;

export const heroBullets = [
  "Sandbox safe—no live sends until you’re ready.",
  "Audit-ready logs for regulated teams.",
  "Live in days, refine weekly.",
];

export const valuesList = [
  {
    title: "Reliability",
    description: "Deterministic flows, strong guardrails, and clear fallbacks so ops teams can trust automation.",
  },
  {
    title: "Privacy",
    description: "Scoped access, redaction where needed, and transparent logs. No surprises with sensitive data.",
  },
  {
    title: "Measurable outcomes",
    description: "We ship with dashboards for speed-to-response, conversion, and quality so you can track value.",
  },
  {
    title: "Fast iteration",
    description: "Weekly tuning cycles with your team to ship improvements quickly without breaking processes.",
  },
];
