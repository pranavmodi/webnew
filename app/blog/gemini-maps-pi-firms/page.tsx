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
              A firm ranked #1 on Google for &quot;car accident lawyer&quot; just discovered Gemini doesn&apos;t recommend them when someone asks Maps for help after a crash. Here&apos;s why &mdash; and what to do about it.
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
            Tuesday Night on I-95
          </h2>
          <p>
            It&apos;s 9:47 PM. A woman named Elena is sitting in the passenger seat of her crumpled Honda Civic on the shoulder of I-95 outside Fort Lauderdale. The airbag deployed. Her wrist is swelling. The other driver &mdash; no insurance, already talking to the cops &mdash; ran a red light doing fifty.
          </p>
          <p>
            Elena picks up her phone with her good hand. She doesn&apos;t Google &quot;personal injury lawyer Fort Lauderdale.&quot; She opens Maps. She&apos;s been hearing about the new Ask Maps feature. She taps the search bar and types what any scared person would type: <em>I was in a car accident near me, who should I call?</em>
          </p>
          <p>
            Gemini thinks for two seconds. Then it gives her an answer. Not ten blue pins. Not a list of ads. A conversational response: here&apos;s what to do, here are two firms that specialize in auto accidents near you, here&apos;s why they&apos;re recommended based on hundreds of reviews and detailed practice information. Elena taps the first phone number. Someone picks up. That firm just got a case.
          </p>
          <p>
            Three miles away, there&apos;s a PI firm that has ranked #1 on Google organic for &quot;car accident lawyer Fort Lauderdale&quot; for four straight years. They spend $18,000 a month on SEO. Their website is beautiful. Their case results are impressive. Gemini didn&apos;t mention them. Elena will never know they exist.
          </p>
        </section>

        <div className="rounded-xl border border-primary/20 bg-[#04150d]/60 px-6 py-5">
          <p className="text-lg italic leading-relaxed text-foreground/75">
            If Gemini can&apos;t find you, your next client won&apos;t either.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What Just Happened to Google Maps
          </h2>
          <p>
            Last week, Google shipped what it&apos;s calling the biggest update to Maps in ten years. The headline feature is &quot;Ask Maps&quot; &mdash; a Gemini AI-powered conversational search built directly into the Maps app. Instead of typing keywords and scrolling through pins, users can now ask natural language questions and get synthesized, AI-generated answers with specific business recommendations.
          </p>
          <p>
            The other headline is &quot;Immersive Navigation&quot; &mdash; a 3D driving experience that looks like a video game. It&apos;s impressive. It&apos;s not the one that should worry you.
          </p>
          <p>
            Ask Maps draws from Google&apos;s database of over 300 million places and contributions from more than 500 million community members. It&apos;s live now on iOS, Android, CarPlay, and Android Auto. That means it works on the phone in Elena&apos;s hand and in the dashboard of the car that just hit her.
          </p>
          <p>
            Think of it this way: if AI Overviews put a layer between your website and Google&apos;s search results, Ask Maps puts a layer between your firm and the 800 million people who already use Maps to find places. Except the intent inside Maps is even higher. Someone searching in Maps isn&apos;t researching. They&apos;re looking for a place to go or a number to call. Right now.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What Gemini Actually Reads About Your Firm
          </h2>
          <p>
            Here&apos;s what most PI firms don&apos;t realize: Google announced that Ask Maps draws from its database of over 300 million places and 500 million community contributors. That data lives in Google Business Profiles &mdash; your listing&apos;s fields, photos, reviews, and Q&amp;A responses. When Gemini synthesizes an answer, this structured profile data is the primary fuel. It reads your competitors&apos; profiles the same way. Then it picks who to recommend.
          </p>
          <p>
            Imagine two firms three blocks apart. Firm A has a GBP with a two-sentence description that says &quot;We handle personal injury cases. Call for a free consultation.&quot; No Q&amp;A. Twelve reviews, mostly generic. No posts in eight months. No service categories beyond &quot;lawyer.&quot;
          </p>
          <p>
            Firm B has a GBP with a detailed description using the exact language people search in crisis &mdash; &quot;car accident attorney,&quot; &quot;truck accident lawyer,&quot; &quot;wrongful death representation.&quot; They have sixty-seven reviews, many mentioning specific case types. Their Q&amp;A section has fifteen questions and answers, including &quot;What should I do after a hit and run?&quot; and &quot;How much does a car accident lawyer cost?&quot; They post weekly updates about verdicts and community involvement. Every service category is filled out individually: auto accidents, motorcycle crashes, rideshare accidents, slip and fall, medical malpractice.
          </p>
          <p>
            When Elena asks Maps for help, which firm do you think Gemini recommends?
          </p>
          <p>
            Firm A might rank higher on organic Google search. Firm A might have a better website. None of that matters inside Maps. Inside Maps, your GBP <em>is</em> your firm. And Firm A&apos;s GBP is functionally silent.
          </p>
        </section>

        <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 px-6 py-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            The Query That Changes Everything
          </p>
          <p className="text-sm leading-relaxed text-foreground/75">
            Open Google Maps on your phone right now. Tap the search bar. Type: <em>&quot;I was in a car accident near me, who should I call?&quot;</em> Look at what Gemini shows you. That&apos;s what your next potential client sees. Is your firm in that answer? If not, you now know exactly what Elena experienced on I-95 &mdash; except you&apos;re the firm that didn&apos;t show up.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            This Is GEO for Maps &mdash; and the Stakes Are Higher
          </h2>
          <p>
            If you&apos;ve been following the shift from SEO to GEO &mdash; Generative Engine Optimization &mdash; Ask Maps is the same playbook applied to local search. AI models don&apos;t rank pages. They synthesize information from multiple sources, weigh completeness and authority, and generate a response. Your job isn&apos;t to rank anymore. It&apos;s to be the source the AI cites.
          </p>
          <p>
            But Maps GEO is higher stakes than web GEO for one simple reason: the person searching in Maps is in crisis. Elena isn&apos;t comparing five firms. She&apos;s not reading blog posts. She&apos;s sitting on the side of a highway with a broken wrist and an adrenaline headache, asking her phone for help. She wants one answer. Gemini gives her one answer. Whoever that answer is gets the case.
          </p>
          <p>
            This is why PI firms are uniquely exposed. Your clients search in moments of panic &mdash; from the side of the road, from an ER waiting room, from the back of a rideshare leaving the scene. The more urgent the search, the more likely Gemini is to generate a direct answer. The more urgent the searcher, the more likely they are to act on it without looking further. The people you most need to reach are the ones most likely to never scroll past Gemini&apos;s recommendation.
          </p>
          <p>
            And in any metro area, there are dozens of PI firms competing for the same queries. When Gemini synthesizes all of them and recommends two or three, the other thirty don&apos;t get outranked. They get erased from the conversation entirely.
          </p>
        </section>

        <div className="rounded-xl border border-[#00ff41]/30 bg-[#04150d]/60 px-6 py-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#00ff41]">
            The GBP Optimization Checklist for Ask Maps
          </p>
          <p className="mb-4 text-sm leading-relaxed text-foreground/75">
            Every item you skip is a signal Gemini doesn&apos;t have &mdash; and your competitor might. Do this today.
          </p>
          <ol className="list-inside list-decimal space-y-3 text-sm leading-relaxed text-foreground/75">
            <li>
              <strong className="text-foreground">Complete every single field.</strong> Business description, services, attributes, hours, service area. Gemini rewards completeness. Blank fields are invisible fields.
            </li>
            <li>
              <strong className="text-foreground">Write your description in crisis language.</strong> Not &quot;we handle personal injury cases.&quot; Instead: &quot;car accident attorney,&quot; &quot;truck accident lawyer,&quot; &quot;motorcycle crash injury claims,&quot; &quot;wrongful death representation.&quot; Match how Elena actually types when she&apos;s scared.
            </li>
            <li>
              <strong className="text-foreground">List every case type as a separate service.</strong> Auto accidents, slip and fall, medical malpractice, dog bites, rideshare accidents. Each one is a signal Gemini can match to a specific query.
            </li>
            <li>
              <strong className="text-foreground">Seed your Q&amp;A section with real questions.</strong> &quot;How much does a car accident lawyer cost?&quot; &quot;What should I do after a hit and run?&quot; &quot;Can I sue if I was partially at fault?&quot; Answer them clearly. This is direct fuel for Gemini&apos;s conversational responses.
            </li>
            <li>
              <strong className="text-foreground">Get reviews that mention specifics.</strong> &quot;Great lawyer&quot; is noise. &quot;Helped me with my truck accident case in Dallas and got me a great settlement&quot; is a signal-rich data point Gemini can use to match your firm to relevant queries. Respond to every review with specifics.
            </li>
            <li>
              <strong className="text-foreground">Post weekly updates.</strong> Case types, verdicts, community involvement, practice area expertise. A profile that hasn&apos;t posted in six months looks dormant to an AI.
            </li>
            <li>
              <strong className="text-foreground">Add geo-tagged photos.</strong> Office, team, courthouse &mdash; with proper EXIF data. AI models use visual and metadata signals you might not expect.
            </li>
            <li>
              <strong className="text-foreground">Lock down NAP consistency.</strong> Name, address, phone number &mdash; identical across your website, GBP, Avvo, Justia, FindLaw, Yelp, everywhere. Inconsistencies create noise that makes Gemini less confident in citing you.
            </li>
          </ol>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Window That Won&apos;t Stay Open
          </h2>
          <p>
            Here&apos;s the part that should make you move fast: most firms don&apos;t know about this yet. Ask Maps just launched. The majority of PI firms are running the same GBP they set up three years ago &mdash; a two-sentence description, whatever reviews trickled in organically, and an agency sending rank reports that don&apos;t account for AI-generated answers.
          </p>
          <p>
            We saw this exact pattern with AI Overviews in traditional search. The firms that moved early locked in citation positions that became self-reinforcing &mdash; more citations led to more authority, which led to more citations. The firms that waited are still trying to catch up six months later. Maps will follow the same curve, except faster. The intent is higher. The answer is more direct. The winner-take-all dynamic is more severe.
          </p>
          <p>
            Right now, the firm that Elena called on I-95 might not be the best PI firm in Fort Lauderdale. It might not have the most experience or the biggest verdicts. But it had a complete, well-structured Google Business Profile with the right language, the right reviews, and the right signals for Gemini to confidently recommend it to a scared woman on the side of a highway.
          </p>
          <p>
            That&apos;s the new game. Not who ranks highest. Not who spends the most on ads. Who Gemini trusts enough to recommend when someone asks for help.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            One Question for Your Agency Monday Morning
          </h2>
          <p>
            If you&apos;re spending $10,000 or more a month on SEO and local search, call your agency tomorrow and ask them one question: &quot;What is our strategy for Ask Maps and Gemini-powered conversational search in Google Maps?&quot;
          </p>
          <p>
            If they don&apos;t know what Ask Maps is, that tells you everything you need to know. If they tell you rankings still matter, they&apos;re not wrong &mdash; but they&apos;re answering last year&apos;s question. The question that matters now is the one Elena typed into her phone on I-95. And whether Gemini answers it with your name or someone else&apos;s.
          </p>
        </section>

        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-[#00ff41]">
            Is Gemini Recommending Your Firm?
          </h2>
          <p className="mb-6 text-foreground/70">
            We audit your Google Business Profile, AI citation visibility, and Maps presence across every query that matters to your practice. Find out where you stand before the window closes.
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
