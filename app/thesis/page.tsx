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
              The legal industry is often described as resistant to technology.
              That is only partly true. Lawyers adopt technology when it makes
              their work meaningfully better. What they resist, reasonably, is
              software that adds another interface without taking responsibility
              for an outcome.
            </p>
            <p>
              Personal injury is an especially compelling place to build because
              the economic incentives are unusually clear. Firms work on
              contingency. They invest their own money and time into acquiring,
              developing, and resolving cases. They are paid when their clients
              are paid.
            </p>
            <p>
              Better operations are therefore not merely a way to reduce
              administrative cost. Faster response can win a case the firm would
              otherwise lose. Better follow-up can turn an expensive lead into a
              signed client. Cleaner case development can prevent avoidable
              delay. The value of better execution is visible in the economics
              of the firm.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              The gap in the market
            </h2>
            <p>
              Personal injury firms already use important systems to manage
              leads, matters, documents, tasks, calls, and communication. These
              products are valuable systems of record. But much of the work
              still happens between them.
            </p>
            <p>
              A lead arrives through a website, phone call, referral, police
              report, or marketing partner. Someone must respond, qualify the
              opportunity, follow up, route it to the right person, obtain a
              signature, and record what happened. The same coordination problem
              appears later with medical records, treatment updates, client
              communication, demands, liens, vendors, and settlement.
            </p>
            <p>
              Incumbent vendors are adding AI features to their products. That
              will improve individual tasks, but it does not necessarily solve
              the larger problem. Firms need a system that can act across the
              tools they already use while following the firm&apos;s own rules,
              escalation paths, and standards of judgment.
            </p>
            <p>
              The absence of documented APIs and programmable interfaces across
              much of legal technology is a symptom of this gap. The point is
              not that lawyers need a command line. The point is that firms have
              limited ability to make their software execute their own
              cross-vendor workflows.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              Our wedge: intake revenue recovery
            </h2>
            <p>
              We are starting at the beginning of the personal injury workflow:
              the moment a potential case reaches the firm.
            </p>
            <p>
              Firms spend heavily to generate demand, then lose some of that
              value through missed calls, slow first response, weak follow-up,
              inconsistent qualification, poor handoffs, unsigned retainers,
              and incomplete attribution. These failures are common, expensive,
              and measurable.
            </p>
            <p>
              Intake is also a practical entry point. A firm can improve
              after-hours coverage, response speed, persistence, and handoffs
              without replacing its case-management system or redesigning the
              entire operation. The system can begin at the edge of the existing
              stack and write qualified activity back into tools such as Lead
              Docket and Filevine.
            </p>
            <p>
              This creates a short path to proof. We can establish a baseline,
              make a narrow intervention, and measure what changed: response
              time, contact rate, qualified opportunities, signed cases, and
              leads recovered.
            </p>
          </section>

          <blockquote className="border-l-2 border-[#00ff41] pl-6 text-xl font-medium leading-9 text-foreground/90">
            Intake is the wedge, not the destination.
          </blockquote>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              From one workflow to an operating layer
            </h2>
            <p>
              Intake teaches the system how a firm defines a valuable case, how
              it allocates attention, where human judgment is required, and how
              exceptions should be handled. That operating knowledge becomes
              useful beyond intake.
            </p>
            <p>
              From there, the same model can extend into case opening, client
              communication, medical records and treatment, demand preparation,
              claims intelligence, lien resolution, disbursement, vendor
              governance, and firm-wide operational visibility.
            </p>
            <p>
              The long-term product is not a collection of unrelated AI tools.
              It is a firm-owned execution layer that connects systems, carries
              forward operating context, documents decisions, and keeps people
              in control of sensitive judgment.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              How we plan to earn distribution
            </h2>
            <p>
              We believe the most credible way to sell operational software is
              to begin by showing the firm something true about its own
              operation.
            </p>
            <p>
              Automated intake audits can reveal where calls, web leads,
              follow-up, handoffs, and attribution are leaking value. Focused
              free products can solve an adjacent problem, such as after-hours
              coverage, website and AI-search visibility, or review monitoring.
              These products are useful on their own, but they also reduce the
              distance between interest and experienced value.
            </p>
            <p>
              Integration with the systems firms already use keeps adoption
              practical. Forward-deployed engineers help translate the messy
              reality of a firm&apos;s workflow into a working production system.
              Their purpose is not to create a permanent consulting dependency.
              It is to shorten the learning cycle and turn repeated
              implementation lessons into reusable product capabilities.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              Why we believe we can win
            </h2>
            <p>
              Our advantage begins with focus. Personal injury is not a generic
              legal market. The business model, lead economics, case lifecycle,
              client expectations, medical ecosystem, vendor relationships, and
              risk profile create a distinct operating environment.
            </p>
            <p>
              Over time, that focus should compound into deeper integrations,
              better operational benchmarks, stronger deployment playbooks, and
              a growing understanding of how high-performing firms execute their
              work. Governance is part of the product: documented rules, human
              review, logs, vendor boundaries, and systems the firm can
              understand and control.
            </p>
            <p>
              Our approach is simple: find a valuable workflow leak, prove that
              it can be fixed, integrate with the real operation, and turn what
              works into a durable system owned by the firm.
            </p>
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
