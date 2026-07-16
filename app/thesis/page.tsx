import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Thesis",
  description:
    "Why Possible Minds is building an AI operating layer for personal injury firms, starting with intake.",
};

export default function ThesisPage() {
  return (
    <div className="bg-black pb-24">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <header className="border-b border-primary/20 pb-10">
          <p className="text-sm font-semibold text-primary">Our thesis</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#00ff41] sm:text-5xl">
            Why legal. Why personal injury.
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/75">
            Possible Minds is building an AI operating layer for contingency law
            firms, starting with personal injury intake.
          </p>
        </header>

        <div className="space-y-12 pt-12 text-base leading-8 text-foreground/75 sm:text-lg">
          <section className="space-y-5">
            <p>
              Legal has an incentive problem as much as a technology problem.
              Under the billable-hour model, AI reduces the time a firm can
              charge for. Efficiency may benefit the client while reducing firm
              revenue.
            </p>
            <p>
              Personal injury reverses that equation. Firms work on contingency,
              invest in cases, and get paid when clients get paid. Faster lead
              response, stronger follow-up, and fewer case delays can increase
              revenue.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              The gap in the market
            </h2>
            <p>
              Personal injury firms already have useful systems of record for:
            </p>
            <ul className="space-y-2 pl-6">
              {[
                "Leads and intake",
                "Matters and documents",
                "Tasks and deadlines",
                "Calls and client communication",
              ].map((item) => (
                <li key={item} className="list-disc pl-1 marker:text-primary">
                  {item}
                </li>
              ))}
            </ul>
            <p>What these systems do not execute is the work between them.</p>
            <p>
              Incumbents are adding AI features inside their products, but each
              feature remains confined to its product. Firms need an execution
              layer that works across their stack and follows firm-specific
              rules, escalation paths, and review standards.
            </p>
            <p>
              Weak APIs and limited programmable interfaces make that difficult.
              The issue is not that lawyers lack a command line. It is that
              firms cannot easily control workflows that cross vendor
              boundaries.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              Our wedge: intake revenue recovery
            </h2>
            <p>
              We start where demand either becomes a signed case or disappears:
              intake.
            </p>
            <p>
              Firms spend heavily on leads, then lose cases through:
            </p>
            <ul className="space-y-2 pl-6">
              {[
                "Missed calls and slow first response",
                "Weak or inconsistent follow-up",
                "Inconsistent qualification",
                "Broken handoffs",
                "Unsigned retainers",
              ].map((item) => (
                <li key={item} className="list-disc pl-1 marker:text-primary">
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Intake can be improved without replacing the firm&apos;s
              case-management system. The product can connect to tools such as
              Lead Docket and Filevine, while performance is measured through
              response time, contact rate, qualified leads, and signed cases.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              From one workflow to an operating layer
            </h2>
            <p>
              Intake teaches the system what the firm values: which cases it
              wants, where attention goes, when judgment is required, and how
              exceptions are handled.
            </p>
            <p>
              That operating knowledge supports expansion across the case
              lifecycle:
            </p>
            <ul className="space-y-2 pl-6">
              {[
                "Case opening and client communication",
                "Records and treatment coordination",
                "Demand preparation",
                "Settlement, liens, and disbursement",
                "Vendor governance",
              ].map((item) => (
                <li key={item} className="list-disc pl-1 marker:text-primary">
                  {item}
                </li>
              ))}
            </ul>
            <p>
              The long-term product is a firm-owned execution layer, not a
              bundle of disconnected AI features.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              How we plan to earn distribution
            </h2>
            <p>
              We plan to earn attention by showing firms where they are losing
              value. Automated intake audits identify failures in calls,
              follow-up, handoffs, and attribution.
            </p>
            <p>
              We plan to create immediate value before asking firms to replace
              behavior or make a large commitment:
            </p>
            <ul className="space-y-2 pl-6">
              {[
                "Automated intake audits",
                "Free after-hours coverage",
                "Website and AI-visibility tools",
                "Review monitoring",
                "Integrations with the systems firms already use",
              ].map((item) => (
                <li key={item} className="list-disc pl-1 marker:text-primary">
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Forward-deployed engineers handle early integration. Repeated
              implementation work becomes reusable product capability.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              Why we believe we can win
            </h2>
            <p>
              Personal injury requires specific knowledge of lead economics,
              case progression, medical workflows, vendors, and risk. A narrow
              market focus allows us to build deeper integrations and more
              useful operational benchmarks.
            </p>
            <p>
              Our deployment playbooks improve with each implementation. The
              resulting systems remain governed and owned by the firm through:
            </p>
            <ul className="space-y-2 pl-6">
              {[
                "Documented operating rules",
                "Human-review thresholds",
                "Complete audit logs",
                "Explicit vendor and data boundaries",
              ].map((item) => (
                <li key={item} className="list-disc pl-1 marker:text-primary">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="mt-14 border-t border-primary/20 pt-8">
          <p className="text-sm leading-7 text-foreground/60">
            Read how this philosophy translates into a practical{" "}
            <Link
              href="/engagement-process"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              engagement process
            </Link>
            .
          </p>
        </footer>
      </article>
    </div>
  );
}
