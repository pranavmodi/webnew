import { FileText, Headphones } from "lucide-react";
import { CALENDLY_URL } from "./constants";

export const previewModules = [
  {
    title: "Inbox Triage",
    description: "Classify, tag, and route messages with OCR awareness.",
    tags: ["FrontApp sync", "Attachment OCR", "Auto-routing"],
    latency: "0.4s",
  },
  {
    title: "Document Intelligence",
    description: "Extract IDs, validate signatures, and flag modifications.",
    tags: ["Lien checks", "Barcode read", "Audit trail"],
    latency: "2-5s",
  },
  {
    title: "Voice + SMS Support",
    description: "Guide patients or clients across web, SMS, and voice.",
    tags: ["Twilio", "Live handoff", "History-aware"],
    latency: "Live",
  },
] as const;

export const outcomesBar = {
  label: "Deployment outcomes",
  metrics: [
    { value: "60% fewer manual tags", context: "EmailTag" },
    { value: "2× faster response times", context: "Support teams" },
    { value: "70% less document review", context: "Lien workflows" },
  ],
  audiences: ["Healthcare ops", "Legal intake"],
};

export const whatWeDoCards = [
  {
    title: "EmailTag",
    icon: FileText,
    value: "AI tagging, routing, and compliance automation for inbox-heavy teams.",
    outcomes: ["Triage fast", "Document-aware", "Audit ready"],
    href: "/#cta",
  },
  {
    title: "ProdBot",
    icon: Headphones,
    value: "Multichannel support across web chat, SMS, and voice with human handoff.",
    outcomes: ["24/7 coverage", "Voice + SMS", "Consistent answers"],
    href: "/#cta",
  },
] as const;

export const howItWorksSteps = [
  {
    title: "Connect",
    description:
      "Integrate inboxes, EMR/EHR, CRM, telephony, and document stores via secure APIs.",
  },
  {
    title: "Understand",
    description:
      "Classify intent, extract entities, and validate documents with OCR and rules.",
  },
  {
    title: "Act",
    description:
      "Route messages, draft compliant replies, and trigger updates across your stack.",
  },
  {
    title: "Learn",
    description:
      "Review QA signals, tune prompts, and expand automation with measurable results.",
  },
] as const;

export const integrationsLine =
  "Integrates with CRM, EMR/EHR, FrontApp, telephony, document stores, and data warehouses.";

export const industries = [
  {
    key: "healthcare",
    title: "Healthcare",
    description:
      "Purpose-built for patient access, imaging networks, and revenue cycle teams.",
    workflows: [
      "Appointment scheduling and status requests",
      "Medical records, reports, and imaging requests",
      "Billing and lien workflows with document validation",
      "Patient outreach across SMS and voice",
    ],
    outcomes: [
      "Reduce backlogs without risking PHI exposure",
      "Standardize responses with audited templates",
      "Improve turnarounds on document-heavy requests",
    ],
    example:
      "EmailTag routes records requests, verifies senders, and drafts compliant replies in minutes.",
  },
  {
    key: "legal",
    title: "Legal",
    description:
      "Built for intake, client communications, and document-heavy case operations.",
    workflows: [
      "Matter intake and lead qualification",
      "Case updates, document routing, and follow-ups",
      "Lien processing and verification",
      "Multi-channel client support with handoff",
    ],
    outcomes: [
      "Accelerate speed-to-lead",
      "Reduce time spent on document review",
      "Deliver consistent, defensible communications",
    ],
    example:
      "ProdBot answers FAQ queries and escalates complex matters to staff with full context.",
  },
] as const;

export const caseStudies = [
  {
    title: "Multi-site imaging provider",
    label: "Operational example",
    context: "High-volume inboxes for scheduling, records, and billing across 60 locations.",
    challenge:
      "Manual triage created backlogs and slow response times for time-sensitive requests.",
    solution:
      "EmailTag automated tagging, routing, and templated replies with document validation.",
    impact: [
      "Example: 60% fewer manual tags",
      "Example: 2× faster response time",
      "Example: Automated lien validation for every PDF",
    ],
    notes: "FrontApp + EMR integrations with audit trails.",
  },
  {
    title: "Regional law firm intake",
    label: "Operational example",
    context: "Multi-channel inquiries with frequent document follow-ups.",
    challenge:
      "Intake teams spent hours re-asking for missing information.",
    solution:
      "ProdBot guided clients over web and SMS, escalating complex cases to humans.",
    impact: [
      "Example: 40% faster speed-to-lead",
      "Example: Cleaner intake summaries",
      "Example: Consistent client updates",
    ],
    notes: "Twilio + CRM + document store integration.",
  },
  {
    title: "Healthcare billing operations",
    label: "Operational example",
    context: "AR team juggling lien updates, payment notices, and document checks.",
    challenge:
      "Document errors and conditional language slowed approvals.",
    solution:
      "EmailTag flagged modifications and routed exceptions to human review.",
    impact: [
      "Example: 70% fewer manual document checks",
      "Example: Faster approvals and escalations",
      "Example: Clear audit logs for compliance",
    ],
    notes: "OCR + lien validation with human-in-the-loop QA.",
  },
] as const;

export const solutions = [
  {
    id: "emailtag",
    title: "EmailTag",
    promise:
      "AI-powered email triage, tagging, routing, and compliance automation for inbox-heavy teams.",
    features: [
      "Intent detection with OCR-aware document analysis",
      "Automatic tagging, inbox routing, and template-based replies",
      "Lien validation with barcode, signature, and modification checks",
      "Sender verification before sharing PHI",
    ],
    outcomes: [
      "Reduce manual triage and routing work",
      "Improve document accuracy with automated checks",
      "Maintain audit-ready logs for every action",
    ],
    faqs: [
      {
        question: "Which inboxes can EmailTag support?",
        answer:
          "EmailTag integrates with FrontApp and similar CRMs, with configurable routing rules per department.",
      },
      {
        question: "How does it handle attachments?",
        answer:
          "Attachments are OCR-processed and analyzed for barcodes, signatures, and conditional language before any automation.",
      },
      {
        question: "Can we keep humans in the loop?",
        answer:
          "Yes. You can require review on specific tags, low-confidence scores, or sensitive workflows.",
      },
    ],
  },
  {
    id: "prodbot",
    title: "ProdBot",
    promise:
      "AI customer support and sales assistant for web chat, SMS, and voice with seamless human handoff.",
    features: [
      "Web chat widget plus dedicated chat page",
      "Twilio SMS workflows and live agent escalation",
      "Voice conversation support with resilient VAD handling",
      "Knowledge base retrieval with automated re-indexing",
    ],
    outcomes: [
      "24/7 support coverage across channels",
      "Consistent, knowledge-grounded answers",
      "Faster handoff for high-touch conversations",
    ],
    faqs: [
      {
        question: "How does ProdBot stay up to date?",
        answer:
          "The knowledge base refreshes via webhook updates and can be rebuilt on demand by admins.",
      },
      {
        question: "Can we deploy with our own LLM provider?",
        answer:
          "Yes. ProdBot supports OpenAI, Anthropic, and Google models with configurable tool usage.",
      },
      {
        question: "Does it support human handoff?",
        answer:
          "Conversations can be escalated to human agents with full context and transcript history.",
      },
    ],
  },
] as const;

export const compareRows = [
  { label: "Inbox triage and routing", emailtag: true, prodbot: false },
  { label: "Web chat + SMS conversations", emailtag: false, prodbot: true },
  { label: "Voice agent support", emailtag: false, prodbot: true },
  { label: "Document extraction + validation", emailtag: true, prodbot: true },
  { label: "Template-based auto responses", emailtag: true, prodbot: true },
  { label: "Audit logs and governance", emailtag: true, prodbot: true },
] as const;

export const securityPoints = [
  "Role-based access, scoped permissions, and encrypted data paths.",
  "Sender verification for PHI workflows and fail-closed behavior on errors.",
  "Audit trails on every routing, extraction, and response decision.",
] as const;

export const contactIndustries = ["Healthcare", "Legal", "Other"] as const;

export const ctaButtons = [
  { label: "Book a demo", href: CALENDLY_URL, variant: "default" as const },
  { label: "Email us", href: "mailto:hello@possibleminds.ai", variant: "outline" as const },
  { label: "Learn more", href: "/#cta", variant: "ghost" as const },
] as const;

export const valuesList = [
  {
    title: "Reliability",
    description:
      "Deterministic flows, clear safeguards, and measured automation you can trust.",
  },
  {
    title: "Compliance",
    description:
      "Verification, audit logs, and redaction capabilities designed for PHI and sensitive data.",
  },
  {
    title: "Speed",
    description:
      "Compress days of triage and document review into minutes with controlled automation.",
  },
  {
    title: "Partnership",
    description:
      "We tune workflows with your team weekly and expand only when outcomes are proven.",
  },
];

export const proofBadges = [
  { label: "SOC 2-ready", detail: "Controls and auditability" },
  { label: "HIPAA-aware", detail: "PHI-safe workflows" },
  { label: "FrontApp", detail: "Inbox automation" },
  { label: "Twilio", detail: "SMS + voice" },
] as const;
