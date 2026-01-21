import { Metadata } from "next";

import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description:
    "Possible Minds builds AI agents for regulated operations with measurable operational impact.",
};

export default function AboutPage() {
  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden border-b border-primary/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.15),_rgba(0,0,0,0)_55%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About us
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              Possible Minds
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              We build AI agents for regulated operations. Our focus is measurable outcomes: faster handling of high
              volume requests, higher accuracy on document heavy workflows, and clearer audit trails for compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-8 px-4 pt-12 sm:px-6">
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">What we build</h2>
          <ul className="mt-4 space-y-3 text-base text-foreground/80">
            <li>Email automation that tags, routes, and drafts compliant responses at scale.</li>
            <li>Support agents across web, SMS, and voice with grounded answers and fast handoff.</li>
            <li>Document intelligence for lien validation, signature placement, and fraud checks.</li>
            <li>Audit-first systems that keep humans in control of sensitive edge cases.</li>
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">How we work</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-base text-foreground/80">
              <li>Start with the workflow and the &quot;so what&quot; business outcome.</li>
              <li>Design guardrails, security checks, and escalation paths first.</li>
              <li>Automate the repetitive tasks and keep humans on judgment calls.</li>
              <li>Measure impact with routing speed, accuracy, and backlog reduction.</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Where we deliver</h2>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li>Healthcare operations with strict PHI controls and auditability.</li>
              <li>Legal and lien workflows that demand precise document handling.</li>
              <li>Multi stakeholder support teams with complex routing rules.</li>
              <li>High volume inboxes that need reliable automation.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Why it works</h2>
          <p className="mt-4 text-base text-foreground/80">
            We combine production grade engineering with domain specific automation. The result is a system that stays
            grounded in approved content, flags risk when confidence drops, and gives teams back the time to focus on
            higher value decisions.
          </p>
        </div>
      </section>
    </div>
  );
}
