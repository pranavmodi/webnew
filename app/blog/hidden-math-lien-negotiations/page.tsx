import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

const pageTitle = "The Hidden Math of Lien Negotiations: What 563 Cases Reveal";
const pageDescription = "We analyzed 563 real medical lien negotiations between a diagnostic imaging provider and PI law firms. The data reveals striking patterns in reduction demands, settlement timing, and firm behavior that neither side is tracking.";

export const metadata: Metadata = {
  title: `${pageTitle} | ${SITE_NAME}`,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function BlogPostPage() {
  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#04150d] to-black">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link
                href="/blog"
                className="transition hover:text-primary"
              >
                Blog
              </Link>
              <span className="text-primary/40">/</span>
              <span>Industry Analysis</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              The Hidden Math of Lien Negotiations: What 563 Cases Reveal
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              We analyzed 563 real medical lien negotiations between a
              diagnostic imaging provider and PI law firms. The data reveals
              striking patterns in reduction demands, settlement timing, and
              firm behavior that neither side is tracking.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {["Pranav Modi", "April 2, 2026", "9 min read"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/20 bg-[#04150d] px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl space-y-12 px-4 pt-12 text-foreground/85 sm:px-6">
        {/* ── Opening Hook ── */}
        <section className="space-y-5">
          <p className="text-lg leading-relaxed">
            Ask a personal injury attorney how their lien negotiations compare
            to the market average and you&apos;ll get a blank stare. Not
            because they don&apos;t negotiate liens &mdash; they negotiate
            hundreds &mdash; but because there is no market average. No
            benchmark. No dataset. Just gut feel, a paralegal&apos;s memory of
            what worked last time, and whatever the firm across town whispered
            at the last PILMMA conference.
          </p>
          <p className="leading-relaxed">
            Chris Dreyer, host of the Personal Injury Mastermind podcast and
            founder of Rankings.io, often cites a striking benchmark from his
            intake research: 90% of firms say they want better conversion, yet
            most can&apos;t measure it. The same blind spot exists &mdash;
            arguably worse &mdash; in lien negotiations. Firms assume
            they&apos;re negotiating well. They have no way to know.
          </p>
          <p className="leading-relaxed">
            We decided to find out. Over the past several months, we partnered
            with a mid-size diagnostic imaging provider to analyze every lien
            negotiation they&apos;ve conducted with PI law firms. The result is
            a dataset of 563 anonymized negotiations &mdash; the first
            structured look, to our knowledge, at how this market actually
            behaves.
          </p>
        </section>

        {/* ── The Dataset ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Dataset
          </h2>
          <p className="leading-relaxed">
            The 563 negotiations span cases with an average billed amount of
            $6,770 (median $4,400) for diagnostic imaging services &mdash;
            MRIs, X-rays, CT scans &mdash; provided on lien to patients
            referred by PI attorneys. The corresponding case settlements
            averaged $63,000, with a median of $25,000. Every data point
            reflects a real negotiation between a real provider and a real law
            firm, anonymized and coded for analysis.
          </p>
          <p className="leading-relaxed">
            We tracked opening offers, counter-offers, number of rounds,
            resolution time, final outcome, and settlement size. This
            isn&apos;t a survey. It&apos;s transactional data.
          </p>
        </section>

        {/* ── What the Numbers Say ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What the Numbers Say
          </h2>
          <p className="leading-relaxed">
            The headline finding: law firms demand an average reduction of
            64.3% off the billed amount (median 68.2%). Their opening offer
            averages just 25.5% of the original bill &mdash; with a median of
            22.7%. In other words, the typical first move is to offer roughly a
            quarter of what was billed.
          </p>

          <div className="rounded-lg border border-primary/20 bg-[#04150d]/60 p-6 space-y-3">
            <p className="text-sm font-medium text-[#00ff41]">
              Key Findings at a Glance
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>
                Average reduction demanded: <strong>64.3%</strong> (median
                68.2%)
              </li>
              <li>
                Average first offer from attorneys: <strong>25.5%</strong> of
                billed amount (median 22.7%)
              </li>
              <li>
                Average resolution time: <strong>37 days</strong> (median 23
                days)
              </li>
              <li>
                Average rounds of back-and-forth: <strong>2.5</strong>
              </li>
              <li>
                Outcomes: <strong>59%</strong> settled, 39% still pending, 2%
                rejected
              </li>
              <li>
                76% of all reductions fall in the{" "}
                <strong>60&ndash;80% range</strong>
              </li>
            </ul>
          </div>

          <p className="leading-relaxed">
            That 76% clustering is worth pausing on. It means three out of four
            negotiations land in a surprisingly narrow band &mdash; yet neither
            side has visibility into that band. Providers accept or reject
            offers without knowing the distribution. Firms make demands without
            knowing where they fall relative to peers.
          </p>
          <p className="leading-relaxed">
            Tim Semelroth of RSH Legal in Iowa has spoken openly about his
            firm&apos;s evolution from attorney-centric intake to a
            systems-driven approach. He&apos;d probably recognize the pattern
            here: lien negotiation is stuck where intake was five years ago
            &mdash; dependent on individual judgment, devoid of data, and ripe
            for a structural rethink.
          </p>
        </section>

        {/* ── The Settlement Size Effect ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Settlement Size Effect
          </h2>
          <p className="leading-relaxed">
            One of the most revealing dimensions in the data is how case
            settlement size changes negotiation behavior. We segmented the
            dataset into three tiers:
          </p>

          <div className="rounded-lg border border-primary/20 bg-[#04150d]/60 p-6 space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium text-[#00ff41]">
                Small Settlements (&lt;$25k)
              </p>
              <p className="text-sm">
                Average first offer: <strong>20.3%</strong> of billed amount
                &nbsp;|&nbsp; Average rounds: <strong>3.3</strong>
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-[#00ff41]">
                Medium Settlements ($25k&ndash;$100k)
              </p>
              <p className="text-sm">
                Average first offer: <strong>26.9%</strong> of billed amount
                &nbsp;|&nbsp; Average rounds: <strong>2.7</strong>
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-[#00ff41]">
                Large Settlements ($100k+)
              </p>
              <p className="text-sm">
                Average first offer: <strong>25.7%</strong> of billed amount
                &nbsp;|&nbsp; Average rounds: <strong>2.6</strong>
              </p>
            </div>
          </div>

          <p className="leading-relaxed">
            The pattern is clear: the smaller the settlement, the more
            aggressively the firm negotiates and the more rounds it takes to
            resolve. Small-settlement cases open at just 20.3% of billed
            &mdash; nearly a third lower than medium cases &mdash; and require
            an additional half-round of negotiation on average.
          </p>
          <p className="leading-relaxed">
            This makes intuitive sense. When the total settlement pie is
            smaller, every dollar of lien reduction matters more to the
            firm&apos;s fee and the client&apos;s take-home. But for providers,
            the economics flip: small cases cost the same to service yet yield
            the most friction. Dr. Shaila Hearts, a chiropractor and host of
            the Staying Aligned podcast, has voiced the frustration that many
            providers feel &mdash; cases where months of treatment end with
            aggressive lien reduction demands, or worse, cases dropped
            entirely. Bad intake leads to bad liens, and bad liens fracture
            provider relationships. The data confirms her instinct.
          </p>
        </section>

        {/* ── The Firm Pattern Problem ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Firm Pattern Problem
          </h2>
          <p className="leading-relaxed">
            Not all firms negotiate alike, and the variance is dramatic. The
            fastest-resolving firms in our dataset average roughly 12 days from
            first offer to settlement. The slowest: 130 days. Some firms
            consistently open at reasonable positions and close quickly. Others
            open at extreme lowball &mdash; we observed first offers as low as
            2.5% of the billed amount &mdash; and drag through multiple rounds
            before landing in the same 60&ndash;80% reduction range where
            everyone else ends up anyway.
          </p>
          <p className="leading-relaxed">
            Steve Litner of Litner + Deganian in Atlanta has talked about how
            lien complexity multiplies at volume. The more cases a firm
            handles, the less equipped it is to see its own patterns. A
            paralegal managing 200 active liens doesn&apos;t have time to
            notice that their firm&apos;s average resolution time is three
            times the market median. Without aggregated data, every negotiation
            feels like an isolated event.
          </p>
          <p className="leading-relaxed">
            Bill Hauser of the SMB Team has pointed out that 80% of law firms
            can&apos;t articulate the ROI of their AI investments. If firms
            struggle to measure return on intake technology &mdash; the most
            visible, most-discussed part of their funnel &mdash; they are
            almost certainly not tracking negotiation outcomes. Lien resolution
            lives in a spreadsheet at best, an email thread at worst.
          </p>
        </section>

        {/* ── Can AI Close the Gap? ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Can Intelligence Close the Gap?
          </h2>
          <p className="leading-relaxed">
            Ethan Ostraff, founder of Intake 360, has made the provocative
            claim that AI now outperforms humans on intake conversion. Whether
            you fully accept that premise or not, the underlying logic applies
            here: where repeatable patterns exist, structured intelligence
            &mdash; human or algorithmic &mdash; will outperform ad hoc
            judgment.
          </p>
          <p className="leading-relaxed">
            Our dataset suggests those patterns absolutely exist in lien
            negotiations. The 60&ndash;80% reduction cluster. The settlement
            size effect. The firm-level behavioral signatures. These
            aren&apos;t noise. They&apos;re signal &mdash; signal that neither
            providers nor firms currently capture, structure, or act on.
          </p>
          <p className="leading-relaxed">
            This isn&apos;t about replacing negotiators with algorithms. It&apos;s
            about giving negotiators what every other business function already
            has: benchmarks, trend data, and the ability to see where you stand
            relative to the market.
          </p>
        </section>

        {/* ── What This Means ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What This Means for Providers and Firms
          </h2>
          <p className="leading-relaxed font-medium">For providers:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              You can identify which firms negotiate fairly and quickly versus
              those that consistently lowball and drag. That&apos;s not opinion
              &mdash; it&apos;s pattern recognition across hundreds of
              negotiations.
            </li>
            <li>
              You can set smarter counter-offer strategies based on settlement
              size tier, knowing that small cases will demand more rounds and
              steeper reductions.
            </li>
            <li>
              You can forecast revenue more accurately when you understand the
              real distribution of outcomes, not the anecdotal one.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed font-medium">For firms:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              You can see where your negotiation behavior falls relative to
              peers. Are you the firm that resolves in 12 days or 130? Are your
              opening offers in the reasonable range or the extreme tail?
            </li>
            <li>
              You can calibrate expectations for clients more precisely when you
              know the actual reduction distribution.
            </li>
            <li>
              You can build better provider relationships &mdash; and provider
              relationships directly affect patient access to care.
            </li>
          </ul>
        </section>

        {/* ── The Bigger Picture ── */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Bigger Picture
          </h2>
          <p className="leading-relaxed">
            Personal injury has undergone a quiet data revolution over the past
            decade. Intake got measured, optimized, and increasingly automated.
            Marketing ROI became trackable. Case management went digital. But
            the financial back end &mdash; the lien negotiations that
            determine how much providers actually collect and how much clients
            actually take home &mdash; remained a black box.
          </p>
          <p className="leading-relaxed">
            563 cases is a start, not a conclusion. But it&apos;s enough to
            demonstrate that the patterns are there, the variance is real, and
            the opportunity to negotiate smarter is significant. The firms and
            providers who figure this out first will have a structural
            advantage &mdash; not because they&apos;re tougher negotiators, but
            because they know the math.
          </p>
          <p className="leading-relaxed">
            At events like Ken Hardison&apos;s PILMMA Super Summit, the
            conversation around data-driven practice management keeps
            accelerating. Lien negotiation is the next frontier. The data
            already exists. The question is who will use it.
          </p>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-lg border border-primary/20 bg-[#04150d]/60 p-8 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Want to See How Your Firm&apos;s Negotiation Patterns Compare?
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/80">
            We&apos;re opening access to anonymized benchmarking insights from
            our dataset. Whether you&apos;re a provider trying to understand
            your negotiation landscape or a firm that wants to know where you
            stand, we&apos;d like to show you the data.
          </p>
          <div className="pt-2">
            <Button asChild size="lg">
              <Link href={CALENDLY_URL}>Book a Benchmarking Call</Link>
            </Button>
          </div>
        </section>
      </article>
    </div>
  );
}
