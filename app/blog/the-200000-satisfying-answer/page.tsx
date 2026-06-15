import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";
import WaitlistForm from "./waitlist-form";

export const metadata: Metadata = {
  title: `The $200,000 Answer Your Clients Never Called About | ${SITE_NAME}`,
  description:
    "A PI managing partner discovers why his calls dropped 30% while his rankings held — and what he found when he Googled himself from his phone.",
};

export default function BlogPostPage() {
  const post = BLOG_POSTS_BY_SLUG["the-200000-satisfying-answer"];

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
              <span>Field Notes</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              The $200,000 Answer Your Clients Never Called About
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              A PI managing partner discovers why his calls dropped 30% while his rankings held &mdash; and what he found when he Googled himself from his phone.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {[post.author, post.date, post.readTime].map((item) => (
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
        {/* Section: David's Thursday Afternoon */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            A Thursday Afternoon in April
          </h2>
          <p>
            David stared at the call log on his desk. Forty-seven intake calls in March. Last March it was sixty-eight. Same billboards. Same website. Same $15,000-a-month SEO retainer. He called his agency.
          </p>
          <p>
            &quot;Rankings look great,&quot; they told him. &quot;You&apos;re number two for &apos;car accident lawyer Jacksonville.&apos; Top five across the board. Traffic&apos;s down a little, but that&apos;s seasonal.&quot;
          </p>
          <p>
            David had been running a PI firm for fourteen years. He knew what seasonal looked like. This wasn&apos;t seasonal. Twenty-one missing calls isn&apos;t a blip. At his firm&apos;s average case value, that gap represented roughly $200,000 in lost revenue &mdash; cases that should have come through the door but didn&apos;t.
          </p>
          <p>
            His rankings were fine. His phone wasn&apos;t ringing. Something between those two facts had changed, and nobody in his entire marketing stack could tell him what it was.
          </p>
        </section>

        {/* Section: The Experiment */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What David Saw When He Googled Himself
          </h2>
          <p>
            That evening, David did something he hadn&apos;t done in months. He pulled out his phone, opened Google, and typed the exact words a potential client would type: <em>car accident lawyer Jacksonville</em>.
          </p>
          <p>
            He expected to see his firm near the top. Instead, the first thing he saw was a pale blue box &mdash; a block of text that took up most of his screen. Google had written an answer. Not a list of links. An answer. Three paragraphs explaining what to look for in a car accident attorney, what the typical timeline looks like, and what fees to expect. At the bottom of that answer, two law firms were cited as sources. Neither was his.
          </p>
          <p>
            He scrolled down. Past the AI-generated answer. Past the map pack. There, finally, was the list of websites. His firm sat in position two. Below the fold. Below the answer. Below everything a panicked accident victim would see before making a call.
          </p>
          <p>
            David sat in his car in the parking lot for ten minutes, searching query after query. <em>Truck accident attorney near me. Slip and fall lawyer Jacksonville. What to do after a car accident.</em> He checked ten of his firm&apos;s best keywords &mdash; the ones his agency sent him reports about every month.
          </p>
          <p>
            Seven out of ten had an AI-generated answer box sitting above everything else. His firm was cited in zero of them.
          </p>
        </section>

        {/* Quote callout */}
        <div className="rounded-xl border border-primary/20 bg-[#04150d]/60 px-6 py-5">
          <p className="text-lg italic leading-relaxed text-foreground/75">
            &quot;I was paying $15,000 a month to be the second result nobody scrolled down to see.&quot;
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            &mdash; David, PI Managing Partner
          </p>
        </div>

        {/* Section: The Invisible Layer */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Layer Between You and Your Next Client
          </h2>
          <p>
            Here&apos;s what happened while David&apos;s SEO agency was sending him ranking reports: Google inserted a new layer between his website and his clients. It&apos;s not a competitor. It&apos;s not an ad. It&apos;s Google itself, reading dozens of websites, synthesizing an answer, and presenting it in a blue box at the top of the screen &mdash; before the user ever sees a single link.
          </p>
          <p>
            When someone who just got rear-ended at a red light types <em>car accident lawyer near me</em> with a shaking hand, they don&apos;t see ten blue links anymore. They see an answer. Google wrote it. Google chose which firms to cite as sources. And most of the time, the person reads that answer, sees a phone number, and calls whoever Google chose for them.
          </p>
          <p>
            They never scroll down. They never visit your website. They never see your five-star reviews or your case results page or the headshot your marketing team spent two hours getting right. Your rank tracker still says &quot;Position 2.&quot; Your phone still doesn&apos;t ring.
          </p>
          <p>
            No tool in your analytics stack flags this. Google Search Console shows impressions, clicks, and position &mdash; but it doesn&apos;t tell you an AI answer appeared above your listing. Google Analytics shows your traffic is down, but it can&apos;t tell you why. Your rank tracker proudly reports you&apos;re on page one. It just doesn&apos;t mention that page one now starts below the fold.
          </p>
        </section>

        {/* Section: Why PI Gets Hit Hardest */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Why Personal Injury Firms Feel This First
          </h2>
          <p>
            Not every industry is getting hit equally. Personal injury is ground zero, and the reason is simple: your clients are searching in crisis.
          </p>
          <p>
            Someone who just got rear-ended isn&apos;t comparing five websites. They&apos;re not reading blog posts. They&apos;re sitting in a parking lot with their hands shaking, Googling for help. They want one answer and one phone number. Google&apos;s AI box gives them exactly that.
          </p>
          <p>
            That&apos;s the cruelty of it. The more urgent the search, the more likely Google is to generate an AI answer. And the more urgent the searcher, the more likely they are to act on that answer without scrolling further. The people you most want to reach &mdash; the ones in genuine distress, the ones who need a lawyer right now &mdash; are the ones most likely to never see your website.
          </p>
        </section>

        {/* Scenario callout - amber warning style */}
        <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 px-6 py-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            Scenario
          </p>
          <p className="text-sm leading-relaxed text-foreground/75">
            It&apos;s 9:14 PM on a Tuesday. A woman in Jacksonville gets hit by an uninsured driver. From the passenger seat, she types &quot;what to do after car accident no insurance&quot; into her phone. Google shows her a blue box with four steps and two cited law firms. She reads it. She taps the phone number of the first firm cited. Your firm has ranked #1 for that query for three years. You are not in the blue box. She never scrolled far enough to know you exist. Your rank tracker will report Position 1 in the morning. Your phone will not ring.
          </p>
        </div>

        <section className="space-y-4">
          <p>
            And it compounds. A PI firm competing for &quot;motorcycle accident lawyer Tampa&quot; and &quot;slip and fall attorney Clearwater&quot; and &quot;wrongful death lawyer Orlando&quot; is fighting on dozens of fronts simultaneously. Each query has different AI citation patterns. Different competitors show up in the blue box for different searches. Your SEO agency is tracking your rank on all of them. Nobody is tracking whether Google&apos;s AI is answering them for you &mdash; or for someone else.
          </p>
        </section>

        {/* Try This Yourself - Testable Credential */}
        <div className="rounded-xl border border-[#00ff41]/30 bg-[#04150d]/60 px-6 py-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#00ff41]">
            Try this right now &mdash; it takes 90 seconds
          </p>
          <p className="text-sm leading-relaxed text-foreground/75">
            Pick your firm&apos;s top three search queries &mdash; the ones your agency reports on every month. Open your phone. Google each one. For each search, answer two questions:
          </p>
          <ol className="mt-3 list-inside list-decimal space-y-2 text-sm leading-relaxed text-foreground/75">
            <li>Does a blue AI-generated answer box appear above the regular results?</li>
            <li>Is your firm cited as a source in that answer?</li>
          </ol>
          <p className="mt-3 text-sm leading-relaxed text-foreground/75">
            If you see AI answers on two out of three &mdash; and your firm isn&apos;t cited in any of them &mdash; you now know exactly what David discovered in that parking lot. Your rankings are fine. Your visibility isn&apos;t.
          </p>
        </div>

        {/* Section: What David Did Next */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What David Did Next
          </h2>
          <p>
            The next morning, David called his SEO agency with different questions than he&apos;d ever asked before. Not &quot;what&apos;s our rank?&quot; but &quot;which of our target queries have AI-generated answers, and are we cited in any of them?&quot;
          </p>
          <p>
            They didn&apos;t have an answer. No tool in their stack tracked it.
          </p>
          <p>
            So David started tracking it himself. He built a spreadsheet. Every week, he manually searched his top twenty queries from his phone and recorded which ones had AI answer boxes and which firms were cited. It was tedious. It took an hour every Monday morning. But within six weeks, he had a picture of his business that no analytics dashboard had ever shown him.
          </p>
          <p>
            He discovered that the two firms consistently cited in AI answers for his market had something in common: clear, structured FAQ pages that directly answered the exact questions people were typing into Google. Their content wasn&apos;t better written. It wasn&apos;t longer. It was formatted in a way that Google&apos;s AI could easily parse and cite.
          </p>
          <p>
            David started restructuring his own pages. Clear questions. Direct answers. Schema markup. Consistent information across his Google Business Profile, directory listings, and website. Within two months, his firm started appearing in AI citations for three of his top queries. Calls ticked up. Not back to where they were &mdash; but the bleeding stopped, and the trend reversed.
          </p>
        </section>

        {/* What smart firms are doing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What the Firms That Are Winning Do Differently
          </h2>
          <p>
            The firms gaining ground right now aren&apos;t the ones with the biggest SEO budgets. They&apos;re the ones who&apos;ve realized the game changed and adjusted. Here&apos;s what they have in common:
          </p>
          <ul className="list-inside list-disc space-y-2 text-foreground/80">
            <li>
              <strong className="text-foreground">They track AI visibility, not just rank.</strong> They know which queries trigger AI answers, whether they&apos;re cited, and who their real competitors are in that new layer.
            </li>
            <li>
              <strong className="text-foreground">They structure content for machines, not just readers.</strong> FAQ sections that mirror how people actually search. Direct answers in the first paragraph. Schema markup that tells Google exactly what the page is about.
            </li>
            <li>
              <strong className="text-foreground">They audit from the client&apos;s perspective.</strong> They regularly Google their own practice areas from a phone and see what a potential client actually sees &mdash; not what their rank tracker says.
            </li>
            <li>
              <strong className="text-foreground">They hold their agencies accountable to new metrics.</strong> Not &quot;are we ranking?&quot; but &quot;are we visible where it matters &mdash; and are we getting cited?&quot;
            </li>
          </ul>
          <p>
            None of this requires a massive budget. It requires seeing the problem clearly and acting on it before the rest of the market catches up.
          </p>
        </section>

        {/* Waitlist */}
        <WaitlistForm />

        {/* CTA */}
        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-[#00ff41]">
            Find Out What Your Clients Actually See
          </h2>
          <p className="mb-6 text-foreground/70">
            LexVisibility tracks AI answer citations, organic rank, and local pack visibility across every query that matters to your firm &mdash; so you never have to wonder why the phone stopped ringing. Book a free audit and see exactly where you stand.
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
