import { Metadata } from "next";
import Image from "next/image";

import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Lien Reduction | ${SITE_NAME}`,
  description:
    "LienClear automates medical lien negotiations for PI law firms, maximizing client recovery and accelerating disbursements.",
};

export default function LienReductionPage() {
  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden border-b border-primary/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.15),_rgba(0,0,0,0)_55%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              For PI Law Firms
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              $5,000+ More Per Case.<br />
              <span className="text-foreground/90">Zero Extra Staff Hours.</span>
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              LienClear is an autonomous AI agent that negotiates medical liens while you sleep. It plugs into your
              existing CMS, works every case without prompting, and delivers 50%+ lien reductions—up from the 30%
              industry average. No workflow changes. No new hires. Just more money in your clients&apos; pockets.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="rounded-lg border border-primary/30 bg-black/50 px-4 py-2">
                <span className="text-xl font-bold text-primary">50%+</span>
                <span className="ml-2 text-sm text-foreground/70">avg. lien reduction</span>
              </div>
              <div className="rounded-lg border border-primary/30 bg-black/50 px-4 py-2">
                <span className="text-xl font-bold text-primary">90%</span>
                <span className="ml-2 text-sm text-foreground/70">less staff time</span>
              </div>
              <div className="rounded-lg border border-primary/30 bg-black/50 px-4 py-2">
                <span className="text-xl font-bold text-primary">3x</span>
                <span className="ml-2 text-sm text-foreground/70">faster to disbursement</span>
              </div>
            </div>
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-[#04150d] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              LienClear
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-8 px-4 pt-12 sm:px-6">
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">What it is</h2>
          <p className="mt-4 text-base text-foreground/80">
            An autonomous AI system that sits on top of your case management system, detects when cases settle, and
            independently manages the entire lien reduction lifecycle. From identifying lienholders to negotiating
            reductions to documenting agreements—without requiring attorney or staff initiation.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">The economics</h2>
          <p className="mt-4 text-base text-foreground/80">
            On a typical $100K settlement, medical liens often consume $30-60K of proceeds. Current manual processes
            achieve ~30% reductions. LienClear&apos;s systematic approach delivers 50%+ reductions—an incremental $5,000+
            per case that flows directly to improved client recovery, firm profitability, or both.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-primary/20 bg-black/50 p-4 text-center">
              <div className="text-2xl font-bold text-primary">$5K+</div>
              <div className="mt-1 text-sm text-foreground/60">incremental savings per case</div>
            </div>
            <div className="rounded-xl border border-primary/20 bg-black/50 p-4 text-center">
              <div className="text-2xl font-bold text-primary">90%</div>
              <div className="mt-1 text-sm text-foreground/60">reduction in staff time</div>
            </div>
            <div className="rounded-xl border border-primary/20 bg-black/50 p-4 text-center">
              <div className="text-2xl font-bold text-primary">3x</div>
              <div className="mt-1 text-sm text-foreground/60">faster disbursement</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">How it works</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-base text-foreground/80">
            <li>Monitors your CMS for settlement events via API or lightweight RPA integration.</li>
            <li>Parses medical records, EOBs, and correspondence to build a complete lienholder inventory.</li>
            <li>Selects negotiation strategies based on historical success rates with each provider.</li>
            <li>Conducts multi-channel negotiations via email, fax, and AI voice calls.</li>
            <li>Produces signed reduction agreements and final settlement statements ready for review.</li>
          </ol>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">System architecture</h2>
          <p className="mt-2 text-sm text-foreground/60">
            LienClear integrates with your existing infrastructure—no disruption to current workflows.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-primary/20 bg-black/30">
            <Image
              src="/lienreduction.png"
              alt="LienClear technical architecture diagram showing integration with CMS, document intelligence, negotiation engine, and communication layers"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Core capabilities</h2>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li>Auto-detection of settlement events from Filevine, Litify, Clio, and other CMS platforms.</li>
              <li>Vision-language document parsing for bills, EOBs, and lien letters in any format.</li>
              <li>Provider knowledge graph with historical negotiation outcomes and optimal strategies.</li>
              <li>Multi-turn negotiation engine that adapts tactics based on provider responses.</li>
              <li>Human-in-the-loop escalation for impasses or high-value cases.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Negotiation intelligence</h2>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li>Cross-reference charges against Medicare fee schedules and usual/customary rates.</li>
              <li>Provider-specific strategy selection based on thousands of historical outcomes.</li>
              <li>Timing optimization for end-of-quarter and other high-leverage negotiation windows.</li>
              <li>Escalation scripts for hardship cases and supervisor-level negotiations.</li>
              <li>Continuous learning loop that improves firm-specific performance over time.</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Compliance and security</h2>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li>Medicare Secondary Payer (MSP) protocol compliance with automated MSPRC documentation.</li>
              <li>ERISA plan-specific requirement handling for employer-sponsored health plans.</li>
              <li>State-specific lien statute awareness across all jurisdictions.</li>
              <li>Complete audit trail for every negotiation, decision, and outcome.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Operational impact</h2>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li>Increase lien reductions from 30% average to 50%+ with systematic negotiation.</li>
              <li>Cut staff hours per case from 8-12 hours to under 30 minutes of review.</li>
              <li>Reduce time to disbursement from 45-90 days to 14-21 days.</li>
              <li>Eliminate cases falling through the cracks with autonomous monitoring.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Deployment approach</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-primary/20 bg-black/30 p-4">
              <div className="text-sm font-semibold uppercase tracking-wider text-primary/80">Week 1-2</div>
              <div className="mt-2 text-base font-medium text-foreground">Shadow Mode</div>
              <p className="mt-1 text-sm text-foreground/60">
                System observes settled cases and generates &quot;what I would have done&quot; reports. Zero firm action required.
              </p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-black/30 p-4">
              <div className="text-sm font-semibold uppercase tracking-wider text-primary/80">Week 3-4</div>
              <div className="mt-2 text-base font-medium text-foreground">Assisted Mode</div>
              <p className="mt-1 text-sm text-foreground/60">
                System prepares lien packages and drafts communications. Firm approves with one click.
              </p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-black/30 p-4">
              <div className="text-sm font-semibold uppercase tracking-wider text-primary/80">Week 5+</div>
              <div className="mt-2 text-base font-medium text-foreground">Autonomous Mode</div>
              <p className="mt-1 text-sm text-foreground/60">
                System operates independently. Firm receives digests and intervenes only on escalations.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Typical use cases</h2>
          <ul className="mt-4 grid gap-3 text-base text-foreground/80 sm:grid-cols-2">
            <li>High-volume PI firms settling 100+ cases per year.</li>
            <li>Multi-lienholder cases with 10-30 providers per settlement.</li>
            <li>Medicare and Medicaid conditional payment recovery.</li>
            <li>ERISA plan subrogation negotiations.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
