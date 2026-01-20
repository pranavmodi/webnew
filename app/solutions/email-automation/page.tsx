import { Metadata } from "next";

import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Email Automation | ${SITE_NAME}`,
  description:
    "EmailTag automates inbox triage, routing, and compliant responses for regulated operations.",
};

export default function EmailAutomationPage() {
  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden border-b border-primary/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.15),_rgba(0,0,0,0)_55%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              So what?
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              Email Automation
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              EmailTag cuts inbox cycle time and compliance risk by automating tagging, routing, and template-driven
              responses while keeping humans in control of edge cases.
            </p>
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-[#04150d] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              EmailTag
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-8 px-4 pt-12 sm:px-6">
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">What it is</h2>
          <p className="mt-4 text-base text-foreground/80">
            An AI-driven email triage and compliance system for FrontApp and similar CRMs. It classifies inbound
            messages, applies the right tags, and routes each conversation to the correct department. Attachments are
            treated as first-class signals through OCR and document analysis.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">How it works</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-base text-foreground/80">
            <li>Ingest inbound messages via FrontApp webhooks.</li>
            <li>Extract signals from body text, metadata, and attachments with OCR.</li>
            <li>Classify intent, apply tags, and route to the right inbox automatically.</li>
            <li>Draft compliant replies from approved templates or escalate to human review with full audit logs.</li>
          </ol>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Core capabilities</h2>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li>AI tagging and routing based on message content and OCR-extracted attachments.</li>
              <li>Department-level inbox routing with configurable tag-to-inbox mappings.</li>
              <li>Template-driven auto-responses with placeholders and structured fields.</li>
              <li>Human-in-the-loop controls for low-confidence or high-risk requests.</li>
              <li>End-to-end audit logs for classification, routing, and response decisions.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Document and lien intelligence</h2>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li>Barcode extraction to identify patient IDs, lien types, and referrer IDs.</li>
              <li>Signature detection and placement validation for PSL and ASL classification.</li>
              <li>Strikethrough and modification detection to flag altered lien documents.</li>
              <li>Conditional language detection in cover letters and email body text.</li>
              <li>Fraudulent or non-standard lien screening with automatic review tagging.</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Security and compliance</h2>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li>Sender verification before sharing PHI on appointment status requests.</li>
              <li>Fail-closed behavior when verification or MCP lookups fail.</li>
              <li>HIPAA-safe templated responses and strict redaction pathways.</li>
              <li>Configurable production vs. testing security toggles.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Operational impact</h2>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li>Faster routing and response times without manual tagging.</li>
              <li>Reduced backlogs across scheduling, records, and AR workflows.</li>
              <li>Higher accuracy on document-heavy cases with fewer escalations.</li>
              <li>Consistent outcomes and defensible audit trails for compliance teams.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Typical use cases</h2>
          <ul className="mt-4 grid gap-3 text-base text-foreground/80 sm:grid-cols-2">
            <li>Scheduling and appointment status requests.</li>
            <li>Medical records and imaging requests.</li>
            <li>Billing and lien processing with document validation.</li>
            <li>Case updates, negotiations, and collections routing.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
