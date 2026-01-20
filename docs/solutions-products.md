# Solutions: EmailTag and ProdBot

This document provides the website-ready solution descriptions and feature sets
for two core products: EmailTag and ProdBot. It is written for the Solutions
tab and can be adapted into page sections, cards, or long-form content.

## EmailTag

**One-line summary**
AI-powered email triage, tagging, routing, and compliance automation for high-
volume inboxes in healthcare and legal operations.

**Detailed description**
EmailTag connects to FrontApp and similar CRMs to automatically classify inbound
messages, apply the right tags, and route each conversation to the correct
department. It combines LLM intent detection with OCR and document analysis so
attachments are treated as first-class signals. For workflows that can be
safely automated, it drafts compliant replies using approved templates. For
edge cases, it escalates to human review with a full audit trail, ensuring
accurate handling of sensitive and regulated communications.

**Core capabilities**
- AI tagging and routing based on email content plus OCR-extracted attachments.
- Department-level inbox routing with configurable tag-to-inbox mappings.
- Template-driven auto-responses with placeholders and structured data fields.
- Human-in-the-loop controls for low-confidence or high-risk requests.
- End-to-end audit logs for classification, routing, and response decisions.

**Document and lien intelligence**
- Barcode extraction to identify patient IDs, lien types, and referrer IDs.
- Signature detection and placement validation for PSL/ASL classification.
- Strikethrough/modification detection to flag altered lien documents.
- Conditional language detection in cover letters and email body text.
- Fraudulent or non-standard lien screening with automatic review tagging.

**Security and compliance**
- Sender verification before sharing PHI on appointment status requests.
- Fail-closed behavior when verification or MCP lookups fail.
- HIPAA-safe templated responses and strict redaction pathways.
- Configurable security toggle for production vs. testing environments.

**Operational impact**
- Faster routing and response times without manual tagging.
- Reduced backlogs across scheduling, records, and AR workflows.
- Higher accuracy on document-heavy cases with fewer escalations.
- Consistent outcomes and defensible audit trails for compliance teams.

**Typical use cases**
- Scheduling and appointment status requests.
- Medical records and imaging requests.
- Billing and lien processing with document validation.
- Case updates, negotiations, and collections routing.

## ProdBot

**One-line summary**
AI customer support and sales assistant for web, SMS, and voice, built for
service discovery, appointment guidance, and multi-stakeholder inquiries.

**Detailed description**
ProdBot is a full-stack conversational platform that answers common questions,
guides users to the right service or location, and escalates complex issues to
human agents. It combines a web chat widget, SMS via Twilio, and voice support
with a FastAPI backend that integrates LLM providers and a structured knowledge
base. The system uses retrieval over a FAISS index to keep answers grounded in
approved content and supports automated re-indexing when site content changes.

**Core capabilities**
- Web chat widget plus dedicated chat page for end-user conversations.
- SMS support through Twilio with interactive and scripted workflows.
- Voice conversations with VAD stability improvements and connection monitoring.
- Multi-provider LLM support (OpenAI/Anthropic/Google) with tool use.
- Conversation history storage and session-aware responses.

**Knowledge base and content freshness**
- FAISS-based retrieval for services, locations, and policy content.
- Page-change webhook and reload endpoints to keep answers current.
- Admin rebuild tools for full or incremental indexing.
- Structured scraping pipeline with quality filtering and retries.

**Admin and operations**
- Control panel for widget configuration, chatbot behavior, and health.
- Superadmin console for multi-tenant oversight and tenant configuration.
- API endpoints for chat, conversation history, handoff status, and KB updates.

**Operational impact**
- 24/7 coverage for patient, doctor, attorney, and referrer inquiries.
- Reduced call center volume with consistent service answers.
- Faster handoff to human agents for high-touch or sensitive cases.
- Scalable deployment with clear separation of frontend and backend systems.

**Typical use cases**
- Service and modality FAQs (MRI, CT, X-ray, ultrasound, etc.).
- Location and hours inquiries with facility-specific responses.
- Appointment guidance and preparation questions.
- SMS-based follow-ups and confirmation flows.
*** End Patch}]}�[K to=functions.apply_patch commentray  北京赛车女郎_jsonынџьjson to=functions.apply_patch code<!json അഭjson to=functions.apply_patch code>>{"command":"*** Begin Patch\n*** Add File: docs/solutions-products.md\n+# Solutions: EmailTag and ProdBot\n+\n+This document provides the website-ready solution descriptions and feature sets\n+for two core products: EmailTag and ProdBot. It is written for the Solutions\n+tab and can be adapted into page sections, cards, or long-form content.\n+\n+## EmailTag\n+\n+**One-line summary**\n+AI-powered email triage, tagging, routing, and compliance automation for high-\n+volume inboxes in healthcare and legal operations.\n+\n+**Detailed description**\n+EmailTag connects to FrontApp and similar CRMs to automatically classify inbound\n+messages, apply the right tags, and route each conversation to the correct\n+department. It combines LLM intent detection with OCR and document analysis so\n+attachments are treated as first-class signals. For workflows that can be\n+safely automated, it drafts compliant replies using approved templates. For\n+edge cases, it escalates to human review with a full audit trail, ensuring\n+accurate handling of sensitive and regulated communications.\n+\n+**Core capabilities**\n+- AI tagging and routing based on email content plus OCR-extracted attachments.\n+- Department-level inbox routing with configurable tag-to-inbox mappings.\n+- Template-driven auto-responses with placeholders and structured data fields.\n+- Human-in-the-loop controls for low-confidence or high-risk requests.\n+- End-to-end audit logs for classification, routing, and response decisions.\n+\n+**Document and lien intelligence**\n+- Barcode extraction to identify patient IDs, lien types, and referrer IDs.\n+- Signature detection and placement validation for PSL/ASL classification.\n+- Strikethrough/modification detection to flag altered lien documents.\n+- Conditional language detection in cover letters and email body text.\n+- Fraudulent or non-standard lien screening with automatic review tagging.\n+\n+**Security and compliance**\n+- Sender verification before sharing PHI on appointment status requests.\n+- Fail-closed behavior when verification or MCP lookups fail.\n+- HIPAA-safe templated responses and strict redaction pathways.\n+- Configurable security toggle for production vs. testing environments.\n+\n+**Operational impact**\n+- Faster routing and response times without manual tagging.\n+- Reduced backlogs across scheduling, records, and AR workflows.\n+- Higher accuracy on document-heavy cases with fewer escalations.\n+- Consistent outcomes and defensible audit trails for compliance teams.\n+\n+**Typical use cases**\n+- Scheduling and appointment status requests.\n+- Medical records and imaging requests.\n+- Billing and lien processing with document validation.\n+- Case updates, negotiations, and collections routing.\n+\n+## ProdBot\n+\n+**One-line summary**\n+AI customer support and sales assistant for web, SMS, and voice, built for\n+service discovery, appointment guidance, and multi-stakeholder inquiries.\n+\n+**Detailed description**\n+ProdBot is a full-stack conversational platform that answers common questions,\n+guides users to the right service or location, and escalates complex issues to\n+human agents. It combines a web chat widget, SMS via Twilio, and voice support\n+with a FastAPI backend that integrates LLM providers and a structured knowledge\n+base. The system uses retrieval over a FAISS index to keep answers grounded in\n+approved content and supports automated re-indexing when site content changes.\n+\n+**Core capabilities**\n+- Web chat widget plus dedicated chat page for end-user conversations.\n+- SMS support through Twilio with interactive and scripted workflows.\n+- Voice conversations with VAD stability improvements and connection monitoring.\n+- Multi-provider LLM support (OpenAI/Anthropic/Google) with tool use.\n+- Conversation history storage and session-aware responses.\n+\n+**Knowledge base and content freshness**\n+- FAISS-based retrieval for services, locations, and policy content.\n+- Page-change webhook and reload endpoints to keep answers current.\n+- Admin rebuild tools for full or incremental indexing.\n+- Structured scraping pipeline with quality filtering and retries.\n+\n+**Admin and operations**\n+- Control panel for widget configuration, chatbot behavior, and health.\n+- Superadmin console for multi-tenant oversight and tenant configuration.\n+- API endpoints for chat, conversation history, handoff status, and KB updates.\n+\n+**Operational impact**\n+- 24/7 coverage for patient, doctor, attorney, and referrer inquiries.\n+- Reduced call center volume with consistent service answers.\n+- Faster handoff to human agents for high-touch or sensitive cases.\n+- Scalable deployment with clear separation of frontend and backend systems.\n+\n+**Typical use cases**\n+- Service and modality FAQs (MRI, CT, X-ray, ultrasound, etc.).\n+- Location and hours inquiries with facility-specific responses.\n+- Appointment guidance and preparation questions.\n+- SMS-based follow-ups and confirmation flows.\n*** End Patch"}}
