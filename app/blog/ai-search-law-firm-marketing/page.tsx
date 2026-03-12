import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Your Rankings Held. Your Calls Didn't. | ${SITE_NAME}`,
  description:
    "Google's AI Overviews have quietly rewired how clients find personal injury attorneys. Most firms have no idea it's happening — and no tool to measure it.",
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
              Your Rankings Held. Your Calls Didn&apos;t.
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              Google&apos;s AI Overviews have quietly rewired how clients find personal injury attorneys. Most firms have no idea it&apos;s happening &mdash; and no tool to measure it.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {["Pranav Modi", "March 12, 2026", "8 min read"].map((item) => (
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

      <article className="mx-auto max-w-3xl space-y-12 px-4 py-16 text-foreground/85 sm:px-6">
        {/* Section: The Invisible Layer Nobody Is Measuring */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Invisible Layer Nobody Is Measuring
          </h2>
          <p>
            Something changed in the past eighteen months. Personal injury attorneys across the country noticed it first as a feeling &mdash; call volume a little softer than expected, consult bookings a little lighter &mdash; before anyone could name the cause.
          </p>
          <p>
            Their SEO vendor had nothing alarming to report. Rankings looked fine. Sometimes better than ever. Traffic was down slightly, but nothing catastrophic. The explanation, when it finally arrived, was both obvious in retrospect and completely invisible to every tool in the stack: Google had quietly placed an AI-generated answer between their firm and their next client.
          </p>
          <p>
            This is not a prediction about where search is heading. It has already arrived.
          </p>
          <p>
            Google AI Overviews &mdash; the synthesized answer boxes now appearing at the top of results for a significant share of high-intent queries &mdash; have fundamentally altered what happens when a potential client types &quot;car accident lawyer Houston&quot; into their phone. They receive a curated answer. That answer cites specific sources. It may mention an attorney&apos;s firm. More often, it doesn&apos;t. The user reads, absorbs, and either calls whoever the AI surfaced &mdash; or keeps scrolling without clicking anything at all.
          </p>
          <p>
            The firm that ranked #1 organically for that query for three years? It got no visit. No click. No call. No case.
          </p>
          <p>
            What makes this particularly difficult is that nothing in the existing analytics stack surfaces the problem. Search Console is built around clicks, impressions, CTR, and position. GA4 is built around sessions and conversions. Traditional rank trackers report position. None of them tell you whether an AI Overview appeared on a query, whether your domain was cited in that answer, or whether a competitor is now living at the top of the results page while you&apos;re buried below the fold.
          </p>
        </section>

        {/* Quote callout */}
        <div className="rounded-xl border border-primary/20 bg-[#04150d]/60 px-6 py-5">
          <p className="text-lg italic leading-relaxed text-foreground/75">
            &quot;Strong rankings no longer guarantee call volume. Users are getting answers from AI without ever clicking through to firm websites &mdash; and law firms have no way to track it.&quot;
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            &mdash; PI Firm Managing Partner, Texas
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-primary/20 bg-[#04150d]/60 px-6 py-5 text-center">
            <p className="text-4xl font-bold text-[#00ff41]">#1</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">
              Organic rank a firm can hold while an AI answer answers the question for them
            </p>
          </div>
          <div className="rounded-xl border border-primary/20 bg-[#04150d]/60 px-6 py-5 text-center">
            <p className="text-4xl font-bold text-[#00ff41]">0</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">
              Clicks generated when a prospective client gets their answer from AI and moves on
            </p>
          </div>
          <div className="rounded-xl border border-primary/20 bg-[#04150d]/60 px-6 py-5 text-center">
            <p className="text-4xl font-bold text-[#00ff41]">~1%</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">
              Of web traffic attributable to AI engine referrals &mdash; but AI presence affects far more queries
            </p>
          </div>
        </div>

        <section className="space-y-4">
          <p>
            That last number is important to understand correctly. AI engines aren&apos;t driving much direct referral traffic yet. But AI presence on a query changes the entire result page &mdash; pushing organic results down, inserting a synthesized answer with its own citations, and shaping user behavior before anyone clicks. The traffic impact is indirect but real. Measuring AI referrals alone vastly understates the problem.
          </p>
        </section>

        {/* Section: Why Personal Injury Firms Feel This Most */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Why Personal Injury Firms Feel This Most
          </h2>
          <p>
            Not every industry is equally exposed. Personal injury is particularly vulnerable for reasons specific to how people search for legal help when they need it most.
          </p>
          <p>
            PI queries are high-stakes and emotionally urgent. Someone who was just in a car accident isn&apos;t running a leisurely comparison search. They want a clear, confident answer immediately. They are exactly the user an AI Overview is designed to serve &mdash; and exactly the user who will act on whatever answer they receive without clicking six blue links first.
          </p>
        </section>

        {/* Scenario callout - amber warning style */}
        <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 px-6 py-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            Scenario
          </p>
          <p className="text-sm leading-relaxed text-foreground/75">
            A prospective client in Miami searches &quot;what to do after a car accident&quot; at 9pm from their phone. Google surfaces an AI Overview with four steps and two cited law firms. Your firm ranked organically for this query for five years. You are not in the AI answer. The client reads the AI summary. One of the cited firms has a click-to-call button. Your phone doesn&apos;t ring. Your rank tracker reports: Position 2. Your Search Console shows: Impressions up 8%, CTR down 19%. No tool explains the gap.
          </p>
        </div>

        <section className="space-y-4">
          <p>
            The practice area × city structure of PI competition compounds this further. A firm competing for &quot;motorcycle accident lawyer Tampa&quot; and &quot;slip and fall attorney Clearwater&quot; and &quot;wrongful death lawyer Orlando&quot; is essentially fighting three different battles simultaneously, each with different AI citation patterns and different competitor dynamics. Generic visibility tools weren&apos;t built for this dimensionality.
          </p>
        </section>

        {/* Section: The Competitor Hiding in Plain Sight */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Competitor Hiding in Plain Sight
          </h2>
          <p>
            Here is the part that should alarm every PI managing partner: AI answers don&apos;t cite randomly. They cite consistently. The same competitor page, the same directory, the same review platform &mdash; appearing again and again across variations of your most valuable queries. While you&apos;ve been focused on outranking that competitor in organic search, they&apos;ve been quietly accumulating AI citations in a way that most existing tools don&apos;t even track.
          </p>
        </section>

        {/* Agency question callout */}
        <div className="rounded-xl border border-primary/20 bg-[#04150d]/60 px-6 py-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#00ff41]">
            The real question to ask your agency
          </p>
          <p className="text-sm leading-relaxed text-foreground/75">
            It&apos;s not &quot;what&apos;s our ranking for car accident lawyer [city]?&quot; It&apos;s &quot;whose website does Google&apos;s AI cite when someone searches that query &mdash; and is it ours?&quot; Most agencies have no answer to the second question.
          </p>
        </div>

        <section className="space-y-4">
          <p>
            The firms gaining ground in AI citations right now aren&apos;t necessarily the ones with the best SEO fundamentals. They&apos;re the ones whose pages are structured in ways that AI systems find easy to parse and cite: clear FAQ sections, well-formed schema markup, consistent entity signals across directories and profiles, authoritative content that directly answers the specific question being asked. These are learnable, fixable signals. But you have to be able to see the problem before you can fix it.
          </p>
        </section>

        {/* Section: The Local Pack Is Changing Too */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Local Pack Is Changing Too
          </h2>
          <p>
            AI Overviews aren&apos;t the only surface where the game has shifted. The local pack &mdash; those three map-linked results that have always driven high-intent phone calls for local service businesses &mdash; is increasingly AI-adjacent and increasingly hard to measure.
          </p>
          <p>
            Google removed native call history from Business Profile in 2023, eliminating the simplest way for firms to tie local pack visibility to phone leads. At the same time, local results are subject to the same zero-click pressure as organic results: a prospective client who gets their question answered by an AI Overview may never scroll far enough to see the local pack at all.
          </p>
          <p>
            For PI firms that depend on phone calls &mdash; and nearly all of them do &mdash; losing visibility in both surfaces simultaneously while your analytics tools report nothing unusual is a quietly dangerous situation.
          </p>
        </section>

        {/* Section: What Good Measurement Actually Looks Like */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What Good Measurement Actually Looks Like
          </h2>
          <p>
            The analytics problem in legal AI search isn&apos;t that the data doesn&apos;t exist. It&apos;s that nobody has assembled it in a way that connects to how PI firms actually think about their business.
          </p>
          <p>
            A PI managing partner doesn&apos;t think in sessions and impressions. They think in practice areas, cities, case types, and calls. They need to know whether their car accident practice in Tampa is gaining or losing AI visibility relative to their top three competitors &mdash; not what their overall domain authority is. They need to see whether AI Overview presence on their best queries has risen over the past 90 days, and whether organic CTR has fallen in correlation. They need to know what to fix &mdash; not a list of 40 abstract SEO recommendations, but a ranked set of specific actions that address the specific gaps causing their visibility loss on their highest-value clusters.
          </p>
          <p>
            That&apos;s the measurement gap LexVisibility was built to close.
          </p>
          <p>
            The firms that will come out ahead in this transition are not necessarily the ones with the biggest SEO budgets. They&apos;re the ones that understand what&apos;s actually happening &mdash; which queries have shifted to AI-first results, which surfaces they&apos;re visible on and which they&apos;re not, which competitor is winning the citations they should be winning &mdash; and that move to fix it while most of the industry is still trying to figure out why their calls are softer than their rankings suggest.
          </p>
          <p>
            The shift has already happened. The question is who&apos;s paying attention.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-[#00ff41]">
            See Where You Stand in AI Search
          </h2>
          <p className="mb-6 text-foreground/70">
            LexVisibility shows PI firms exactly where they appear &mdash; and where they don&apos;t &mdash; across Google AI Overviews, organic results, and local pack. Book a free audit.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Strategy Call
            </a>
          </Button>
        </section>
      </article>
    </div>
  );
}
