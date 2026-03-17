import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Google Just Put Gemini in Maps. Here's What PI Firms Need to Do Now. | ${SITE_NAME}`,
  description:
    "Google's biggest Maps update in 10 years puts Gemini AI between your firm and your next client. Here's what personal injury firms need to optimize — before they become invisible.",
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
              Google Just Put Gemini in Maps. Here&apos;s What PI Firms Need to Do Now.
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              Google&apos;s biggest Maps update in 10 years puts Gemini AI between your firm and your next client. If you&apos;re not optimized for conversational search, you&apos;re already invisible.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {["Pranav Modi", "March 17, 2026", "7 min read"].map((item) => (
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
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Biggest Maps Update in a Decade &mdash; and Why It Matters
          </h2>
          <p>
            Last week, Google rolled out what it&apos;s calling the biggest update to Google Maps in ten years. Two new features headline the release: &quot;Ask Maps&quot; &mdash; a Gemini AI-powered conversational search built directly into the Maps interface &mdash; and &quot;Immersive Navigation,&quot; a 3D driving experience. Both are live now on iOS, Android, CarPlay, and Android Auto.
          </p>
          <p>
            Immersive Navigation is flashy. Ask Maps is the one that should keep PI firm owners up at night.
          </p>
          <p>
            Here&apos;s how it works: instead of typing &quot;personal injury lawyer near me&quot; and scrolling through a list of pins, a user can now ask Maps a natural language question. Something like &quot;I was in a car accident near me, what should I do?&quot; or &quot;best lawyer for a truck accident claim in Houston.&quot; Gemini synthesizes information from Google&apos;s database of 300 million+ places, 500 million+ community contributors, reviews, business profiles, and web content &mdash; then delivers a conversational answer with specific recommendations.
          </p>
          <p>
            Not a list of ten blue pins. A curated, AI-generated response that tells the user exactly where to go and why.
          </p>
        </section>

        <div className="rounded-xl border border-primary/20 bg-[#04150d]/60 px-6 py-5">
          <p className="text-sm leading-relaxed text-foreground/75">
            Think of Ask Maps as AI Overviews &mdash; but for local search, inside the app 800 million people already use for directions. This isn&apos;t a feature people will opt into. It&apos;s the new default.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What Gemini Sees When Someone Asks for Help
          </h2>
          <p>
            When a user asks Maps a question about finding a lawyer after an accident, Gemini doesn&apos;t just pull up the nearest pins. It reads your Google Business Profile &mdash; every field, every photo, every review, every Q&amp;A response. It reads your competitors&apos; profiles the same way. Then it synthesizes all of that into a recommendation.
          </p>
          <p>
            The firms that show up in Gemini&apos;s answer will be the ones whose profiles give the AI the most complete, relevant, and trustworthy signal. The firms that don&apos;t? They won&apos;t show up at all. Not buried. Not below the fold. Simply absent from the conversation.
          </p>
          <p>
            This is the same dynamic we&apos;ve been tracking with AI Overviews in traditional search &mdash; but now it&apos;s inside Maps, where intent is even higher. Someone searching in Maps is looking for a place to go or a number to call. Right now. The conversion intent is as high as it gets.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            This Is GEO for Maps
          </h2>
          <p>
            If you&apos;ve been following the shift from SEO to GEO &mdash; Generative Engine Optimization &mdash; this is the same playbook applied to local search. The principles are identical: AI models don&apos;t rank pages the way traditional algorithms do. They synthesize information from multiple sources, weigh authority and completeness, and generate a response. Your job is no longer to rank. It&apos;s to be the source the AI cites.
          </p>
          <p>
            For Maps specifically, that means your Google Business Profile is now your most important digital asset. Not your website. Not your blog. Your GBP. Because that&apos;s the primary data source Gemini pulls from when answering local queries inside Maps.
          </p>
          <p>
            And unlike traditional Maps results &mdash; where proximity and review count got you a pin on the map &mdash; Ask Maps evaluates the quality and relevance of your entire profile. A half-filled GBP with generic descriptions and no Q&amp;A won&apos;t make the cut when Gemini is deciding which firms to recommend to someone who just got hit by a drunk driver.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Why PI Firms Are Uniquely Exposed
          </h2>
          <p>
            Personal injury is arguably the most vulnerable practice area to this shift. Three reasons:
          </p>
          <ul className="list-inside list-disc space-y-2 text-foreground/80">
            <li>
              <strong className="text-foreground">Crisis-driven search.</strong> Your clients search in moments of panic &mdash; from the side of the road, from an ER waiting room, from the back of an Uber leaving the scene. They want one answer, not ten options. Gemini gives them one answer.
            </li>
            <li>
              <strong className="text-foreground">High local intent.</strong> PI searches are inherently local. People want a lawyer in their city, near the accident, who handles their type of case. Maps is where local intent lives. This update makes Maps the front door.
            </li>
            <li>
              <strong className="text-foreground">Competitive density.</strong> In any metro area, there are dozens of PI firms competing for the same queries. When Gemini synthesizes all of them and picks two or three to recommend, the other thirty become invisible. Not outranked &mdash; invisible.
            </li>
          </ul>
        </section>

        <div className="rounded-xl border border-[#00ff41]/30 bg-[#04150d]/60 px-6 py-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#00ff41]">
            The GBP Optimization Checklist for Ask Maps
          </p>
          <p className="mb-4 text-sm leading-relaxed text-foreground/75">
            Do this today. Every item you skip is a signal Gemini doesn&apos;t have &mdash; and your competitor might.
          </p>
          <ol className="list-inside list-decimal space-y-3 text-sm leading-relaxed text-foreground/75">
            <li>
              <strong className="text-foreground">Complete every field.</strong> Business description, services, attributes, hours, service area &mdash; all of it. Gemini rewards completeness. Blank fields are invisible fields.
            </li>
            <li>
              <strong className="text-foreground">Use PI-specific language in your description.</strong> Don&apos;t say &quot;we handle personal injury cases.&quot; Say &quot;car accident attorney,&quot; &quot;truck accident lawyer,&quot; &quot;motorcycle crash injury claims,&quot; &quot;wrongful death representation.&quot; Match the language real people use when they&apos;re searching in crisis.
            </li>
            <li>
              <strong className="text-foreground">Add every practice area as a service.</strong> Google lets you list specific services. Add each case type individually: auto accidents, slip and fall, medical malpractice, dog bites, rideshare accidents. Each one is a signal.
            </li>
            <li>
              <strong className="text-foreground">Populate your Q&amp;A section.</strong> Seed it with the exact questions potential clients ask: &quot;How much does a car accident lawyer cost?&quot; &quot;What should I do after a hit and run?&quot; &quot;Can I sue if I was partially at fault?&quot; Answer them clearly and concisely. This is direct fuel for Gemini.
            </li>
            <li>
              <strong className="text-foreground">Drive and respond to reviews &mdash; with keywords.</strong> A review that says &quot;Great lawyer&quot; is fine. A review that says &quot;Helped me with my truck accident case in Dallas and got me a great settlement&quot; is a signal-rich data point that Gemini can use to match your firm to relevant queries. Respond to every review with specifics.
            </li>
            <li>
              <strong className="text-foreground">Post weekly Google Business updates.</strong> Use posts to highlight case types, verdicts, community involvement, and practice area expertise. Recency is a signal. A profile that hasn&apos;t posted in six months looks dormant to an AI.
            </li>
            <li>
              <strong className="text-foreground">Add photos with geo-tagged metadata.</strong> Office photos, team photos, and courtroom photos with proper EXIF data reinforce your location signal. AI models use visual and metadata signals you might not expect.
            </li>
            <li>
              <strong className="text-foreground">Ensure NAP consistency everywhere.</strong> Name, address, and phone number must be identical across your website, GBP, Avvo, Justia, FindLaw, Yelp, and every directory. Inconsistencies create noise that makes Gemini less confident in citing you.
            </li>
          </ol>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Window Is Open &mdash; For Now
          </h2>
          <p>
            Here&apos;s the good news: most firms don&apos;t know about this yet. Ask Maps just launched. The majority of PI firms are still running the same GBP they set up three years ago with a two-sentence description and whatever reviews trickled in organically. Their agencies are still sending them rank reports that don&apos;t account for AI-generated answers.
          </p>
          <p>
            That means there&apos;s a window. The firms that optimize their profiles now &mdash; thoroughly, with PI-specific language, complete service listings, active Q&amp;A, and a steady drumbeat of posts and reviews &mdash; will be the ones Gemini learns to recommend. The ones that wait will spend the next year wondering why their Maps presence stopped generating calls.
          </p>
          <p>
            We saw the same pattern with AI Overviews in traditional search. The firms that moved early locked in citation positions that became self-reinforcing. The firms that waited are still trying to catch up. Maps will follow the same curve &mdash; but faster, because the user intent is higher and the answer is more direct.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What This Means for Your Marketing Stack
          </h2>
          <p>
            If you&apos;re spending $10,000+ a month on SEO and paid search, you need to ask your agency one question today: &quot;What is our strategy for Ask Maps and Gemini-powered local search?&quot;
          </p>
          <p>
            If they don&apos;t have an answer, that tells you everything. This isn&apos;t a future problem. It&apos;s a today problem. Ask Maps is live. Your potential clients are already using it. The question is whether Gemini is recommending your firm &mdash; or someone else&apos;s.
          </p>
          <p>
            The firms that win the next three years of PI marketing will be the ones that treat their Google Business Profile like a living, breathing marketing asset &mdash; not a set-it-and-forget-it listing. They&apos;ll track AI citations the way they used to track rankings. They&apos;ll optimize for the questions real people ask, not the keywords their agency told them to target.
          </p>
          <p>
            The shift from rankings to recommendations has been coming for a year. Google just put it in the app your clients already have on their phones.
          </p>
        </section>

        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-[#00ff41]">
            Is Gemini Recommending Your Firm?
          </h2>
          <p className="mb-6 text-foreground/70">
            We audit your Google Business Profile, AI citation visibility, and local search presence across every query that matters to your practice. Find out where you stand before your competitors figure this out.
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
