import { Metadata } from "next";

import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Support Agent | ${SITE_NAME}`,
  description:
    "ProdBot delivers 24/7 support across web, SMS, and voice with grounded answers and fast human handoff.",
};

export default function SupportAgentPage() {
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
              Support Agent
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              ProdBot delivers consistent, 24/7 answers across web, SMS, and voice, keeping knowledge current and
              escalating sensitive conversations to humans when needed.
            </p>
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-[#04150d] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              ProdBot
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-8 px-4 pt-12 sm:px-6">
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">What it is</h2>
          <p className="mt-4 text-base text-foreground/80">
            An AI customer support and sales assistant that guides patients, doctors, attorneys, and referrers to the
            right service, location, or next step. It pairs a multi-channel frontend with a FastAPI backend and
            retrieval-augmented knowledge base.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">How it works</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-base text-foreground/80">
            <li>Capture conversations through web chat, SMS, or voice.</li>
            <li>Retrieve grounded answers from a FAISS-backed knowledge base.</li>
            <li>Use LLM tools to resolve requests or collect follow-up details.</li>
            <li>Escalate high-touch issues to a human dashboard with full context.</li>
            <li>Store conversation history for analytics and continuous improvement.</li>
          </ol>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Channel coverage</h2>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li>Embeddable web chat widget plus a dedicated chat page.</li>
              <li>SMS support through Twilio with scripted and interactive flows.</li>
              <li>Voice conversations with modern audio processing and tuned VAD presets.</li>
              <li>Session-aware responses that preserve context across channels.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Knowledge base governance</h2>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li>FAISS retrieval over services, locations, and policy content.</li>
              <li>Reload index endpoint for incremental or full refreshes.</li>
              <li>Page-change webhook to keep answers aligned with site updates.</li>
              <li>Admin rebuild tools for scheduled refresh cycles.</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Operations and control</h2>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li>Support dashboard for escalations and human takeovers.</li>
              <li>Multi-tenant console for widget settings and behavior tuning.</li>
              <li>Conversation history, analytics, and health monitoring.</li>
              <li>Multi-provider LLM support with tool-based workflows.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Operational impact</h2>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li>24/7 coverage for patient, doctor, attorney, and referrer inquiries.</li>
              <li>Reduced call center volume with consistent service answers.</li>
              <li>Faster handoff to human agents for sensitive issues.</li>
              <li>Scalable deployment with clear separation of frontend and backend.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Typical use cases</h2>
          <ul className="mt-4 grid gap-3 text-base text-foreground/80 sm:grid-cols-2">
            <li>Service and modality FAQs (MRI, CT, X-ray, ultrasound).</li>
            <li>Location and hours inquiries with facility-specific responses.</li>
            <li>Appointment guidance and preparation questions.</li>
            <li>SMS-based follow-ups and confirmation flows.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
