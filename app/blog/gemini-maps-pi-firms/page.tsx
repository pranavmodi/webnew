import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";

const contents = [
  { id: "tuesday-night-on-i-95", label: "Tuesday Night on I-95" },
  { id: "what-just-happened-to-google-maps", label: "What Just Happened to Google Maps" },
  { id: "the-unstructured-data-shift", label: "The Unstructured Data Shift" },
  { id: "the-death-of-structured-seo-inside-maps", label: "The Death of Structured SEO Inside Maps" },
  { id: "why-pi-firms-have-the-richest-unstructured-data-potential-of-any-practice-area", label: "Why PI Firms Have the Richest Unstructured Data Potential of Any Practice Area" },
  { id: "reviews-as-the-new-content-strategy", label: "Reviews as the New Content Strategy" },
  { id: "q-a-your-faq-that-gemini-actually-reads", label: "Q&A: Your FAQ That Gemini Actually Reads" },
  { id: "the-freshness-decay-problem", label: "The Freshness Decay Problem" },
  { id: "multimodal-data-gemini-sees-your-photos-too", label: "Multimodal Data: Gemini Sees Your Photos Too" },
  { id: "this-is-geo-for-maps-and-the-stakes-are-higher", label: "This Is GEO for Maps - and the Stakes Are Higher" },
  { id: "what-this-means-for-the-pi-marketing-industry", label: "What This Means for the PI Marketing Industry" },
  { id: "the-window-that-won-t-stay-open", label: "The Window That Won't Stay Open" },
  { id: "one-question-for-your-agency-monday-morning", label: "One Question for Your Agency Monday Morning" },
];

export const metadata: Metadata = {
  title: `Google Just Put Gemini in Maps. Here's What PI Firms Need to Do Now. | ${SITE_NAME}`,
  description:
    "Google's biggest Maps update in 10 years puts Gemini AI between your firm and your next client. The new ranking signal isn't keywords — it's unstructured data. Here's what personal injury firms need to know.",
};

export default function BlogPostPage() {
  const post = BLOG_POSTS_BY_SLUG["gemini-maps-pi-firms"];

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
              The new ranking signal inside Google Maps isn&apos;t keywords, backlinks, or ad spend. It&apos;s unstructured data &mdash; reviews, Q&amp;A, photos, post narratives. PI firms sit on a goldmine of it. Most are wasting every ounce.
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

      <BlogTableOfContents items={contents} />


      <article className="mx-auto max-w-4xl space-y-12 px-4 pt-12 text-foreground/85 sm:px-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="tuesday-night-on-i-95">
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
          <p>
            The question is: why? The answer will reshape how every PI firm in America thinks about marketing. And it has almost nothing to do with SEO as you know it.
          </p>
        </section>

        <div className="rounded-xl border border-primary/20 bg-[#04150d]/60 px-6 py-5">
          <p className="text-lg italic leading-relaxed text-foreground/75">
            If Gemini can&apos;t find you, your next client won&apos;t either. And what Gemini looks for isn&apos;t what you&apos;ve been optimizing.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="what-just-happened-to-google-maps">
            What Just Happened to Google Maps
          </h2>
          <p>
            Last week, Google shipped what it&apos;s calling the biggest update to Maps in ten years. The headline feature is &quot;Ask Maps&quot; &mdash; a Gemini AI-powered conversational search built directly into the Maps app. Instead of typing keywords and scrolling through pins, users can now ask natural language questions and get synthesized, AI-generated answers with specific business recommendations.
          </p>
          <p>
            Ask Maps draws from Google&apos;s database of over 300 million places and contributions from more than 500 million community members. It&apos;s live now on iOS, Android, CarPlay, and Android Auto. That means it works on the phone in Elena&apos;s hand and in the dashboard of the car that just hit her.
          </p>
          <p>
            Think of it this way: if AI Overviews put a layer between your website and Google&apos;s search results, Ask Maps puts a layer between your firm and the 800 million people who already use Maps to find places. Except the intent inside Maps is even higher. Someone searching in Maps isn&apos;t researching. They&apos;re looking for a place to go or a number to call. Right now.
          </p>
          <p>
            But the real story isn&apos;t the feature. It&apos;s what powers it &mdash; and what that means for the kind of data that matters.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="the-unstructured-data-shift">
            The Unstructured Data Shift
          </h2>
          <p>
            For twenty years, local search optimization has been a structured data game. Fill in the right fields. Match the right keywords. Build backlinks to your domain. Tag your pages with the right headers. The algorithm matched structured queries to structured signals, and whoever structured their data best won.
          </p>
          <p>
            Gemini breaks this model completely.
          </p>
          <p>
            Gemini is a large language model. It doesn&apos;t match keywords &mdash; it <em>reads</em>. It processes natural language the way a human does: extracting meaning, understanding context, inferring intent. When Elena types &quot;I was in a car accident near me, who should I call?&quot; Gemini doesn&apos;t look for a business listing tagged with the keyword &quot;car accident.&quot; It reads every piece of text associated with every nearby firm &mdash; reviews, Q&amp;A responses, business descriptions, post content &mdash; and determines which firm is most likely to be a good answer to her specific, natural-language question.
          </p>
          <p>
            This is the shift that changes everything: <strong>the new ranking signal inside Maps is unstructured data.</strong>
          </p>
          <p>
            Think about what lives inside a Google Business Profile. There are some structured fields &mdash; business name, address, phone number, hours, categories. But the vast majority of the information is unstructured text generated by humans: review narratives written by clients, Q&amp;A threads, Google Posts, photo captions, business descriptions. This is the raw material Gemini reads. And unlike a traditional algorithm that needs structured tags to find information, Gemini can extract meaning from a sprawling, messy, deeply human review the same way you can.
          </p>
          <p>
            Consider two reviews:
          </p>
          <div className="rounded-xl border border-primary/20 bg-[#04150d]/60 px-6 py-5 space-y-4">
            <p className="text-sm leading-relaxed text-foreground/75">
              <strong className="text-foreground">Review A:</strong> &quot;Great lawyer. Highly recommend. 5 stars.&quot;
            </p>
            <p className="text-sm leading-relaxed text-foreground/75">
              <strong className="text-foreground">Review B:</strong> &quot;After my truck accident on I-35 near Austin, I didn&apos;t know what to do. My wife found Martinez Law on Google and they had someone on the phone with me within 20 minutes. They handled everything with the insurance company, got my medical bills covered, and settled my case in about 6 months. I had a herniated disc and couldn&apos;t work for 3 months &mdash; they made sure I was taken care of the whole time.&quot;
            </p>
          </div>
          <p>
            To a keyword-matching algorithm, both reviews contain the word &quot;lawyer&quot; or are associated with a law firm listing. They&apos;re roughly equivalent signals. To Gemini, they are radically different documents. Review B is a rich data point that can be matched to dozens of potential queries: &quot;truck accident lawyer Austin,&quot; &quot;attorney who handles insurance claims,&quot; &quot;lawyer near I-35,&quot; &quot;how long does a truck accident case take,&quot; &quot;lawyer for herniated disc injury.&quot; Review A is invisible noise. It tells Gemini nothing it can use.
          </p>
          <p>
            This distinction &mdash; between structured SEO signals and unstructured narrative data &mdash; is the fundamental shift PI firms need to understand. Your Google Business Profile is not a listing. It&apos;s a <em>corpus</em>. Gemini reads it like a document collection, and the richness of your unstructured data determines whether you show up in conversational answers or disappear entirely.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="the-death-of-structured-seo-inside-maps">
            The Death of Structured SEO Inside Maps
          </h2>
          <p>
            Here&apos;s what makes this so disorienting for firms that have invested heavily in traditional SEO: almost none of those signals exist inside Maps.
          </p>
          <p>
            Meta tags? Your GBP doesn&apos;t have them. H1 headers? No such thing. Backlink profiles? Irrelevant inside the Maps ecosystem. Keyword density? Gemini doesn&apos;t count keyword frequency &mdash; it understands semantic meaning. The entire toolkit that SEO agencies have spent a decade refining simply doesn&apos;t apply to the surface where your next client is actually searching.
          </p>
          <p>
            A firm spending $15,000 a month optimizing their website &mdash; perfecting page speed, building authoritative backlinks, crafting keyword-rich practice area pages &mdash; may be optimizing the wrong surface entirely. Their website lives in one ecosystem. Their Google Business Profile lives in another. And increasingly, the one that matters is the one where people search with intent to act <em>right now</em>.
          </p>
          <p>
            Your GBP is a collection of unstructured text, images, and community-generated content. It has no HTML. No schema markup. No robots.txt. It&apos;s not a website. It&apos;s a living document that grows every time a client leaves a review, every time someone asks a question, every time you publish a post. And Gemini reads all of it.
          </p>
          <p>
            The firms that will win in Maps are not the ones with the best websites. They&apos;re the ones with the richest, most detailed, most narratively dense Google Business Profiles. And that changes the entire game.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="why-pi-firms-have-the-richest-unstructured-data-potential-of-any-practice-area">
            Why PI Firms Have the Richest Unstructured Data Potential of Any Practice Area
          </h2>
          <p>
            Not every law firm is equally positioned in this shift. A corporate M&amp;A firm&apos;s clients don&apos;t leave reviews. An estate planning attorney&apos;s clients rarely have dramatic stories to tell. But personal injury? PI clients have been through the most intense, specific, emotionally charged experiences imaginable.
          </p>
          <p>
            Car accidents. Truck crashes. Motorcycle wrecks. Slip and falls in grocery stores. Medical malpractice that changed someone&apos;s life. Dog attacks. Rideshare accidents. Wrongful death. Every single one of these is a story &mdash; with a location, a timeline, specific injuries, an emotional arc, and an outcome. Every single one is a potential review that could be the richest unstructured data point on your entire profile.
          </p>
          <p>
            And most firms waste it completely.
          </p>
          <p>
            The typical PI firm sends a generic &quot;leave us a review&quot; email after a case settles. The client, grateful but busy, types &quot;Great attorney, very professional, would recommend&quot; and moves on with their life. Five stars. Zero signal. Gemini reads it and learns absolutely nothing about what your firm actually does, where you operate, or what kinds of cases you handle.
          </p>
          <p>
            This is the single biggest missed opportunity in PI marketing right now. Your clients have stories that Gemini <em>wants</em> to read. Stories full of the exact natural-language details that match the exact natural-language queries people type when they&apos;re scared and searching for help. And you&apos;re letting those stories evaporate into five-word reviews that say nothing.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="reviews-as-the-new-content-strategy">
            Reviews as the New Content Strategy
          </h2>
          <p>
            For years, the conventional wisdom in legal marketing has been: blog for SEO. Write practice area pages. Publish case results. Create content that ranks on Google. And that strategy worked &mdash; for traditional search. But inside Maps, your blog doesn&apos;t exist. Your website doesn&apos;t exist. The only &quot;content&quot; Gemini can read is the content that lives on your Google Business Profile.
          </p>
          <p>
            Which means reviews are your new content strategy.
          </p>
          <p>
            Not reviews as vanity metrics. Not &quot;we have 200 five-star reviews&quot; on your homepage. Reviews as <em>documents</em> &mdash; rich, detailed, narrative documents that Gemini processes as primary source material when deciding who to recommend.
          </p>
          <p>
            The highest-leverage marketing activity a PI firm can do right now is not writing another blog post. It&apos;s coaching clients to write detailed, specific reviews. Not scripting them &mdash; that&apos;s against Google&apos;s policies and Gemini will likely detect manufactured language anyway. Coaching them. Giving them a framework. Asking them the right questions before they sit down to write.
          </p>
          <p>
            What kind of accident were you in? Where did it happen? What was the experience of working with the firm like? How did the case resolve? How long did it take? What was the hardest part, and how did the firm help?
          </p>
          <p>
            A client who answers those questions naturally will produce a review that mentions case type, location, timeline, emotional experience, and outcome quality &mdash; exactly the unstructured data Gemini needs to match your firm to relevant queries. A client who gets a generic &quot;please leave us a review&quot; link will produce noise.
          </p>
          <p>
            The math is simple. Ten richly detailed reviews are worth more to Gemini than a hundred generic ones. Every review is a piece of content that lives on your profile permanently, gets read by an AI model processing every query in your market, and can match your firm to searches you never explicitly optimized for. That&apos;s not a review strategy. That&apos;s a content engine.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="q-a-your-faq-that-gemini-actually-reads">
            Q&amp;A: Your FAQ That Gemini Actually Reads
          </h2>
          <p>
            Every PI firm has an FAQ page on their website. &quot;How much does a car accident lawyer cost?&quot; &quot;What should I do after a hit and run?&quot; &quot;How long do I have to file a claim?&quot; These are useful. They&apos;re also invisible to Gemini inside Maps.
          </p>
          <p>
            But your Google Business Profile has its own Q&amp;A section &mdash; and almost nobody uses it. It sits there, empty, while your website FAQ collects organic traffic that increasingly gets intercepted by AI Overviews before anyone clicks through.
          </p>
          <p>
            GBP Q&amp;A is a structured-unstructured hybrid. The questions are in natural language &mdash; exactly the format people use when they ask Gemini for help. The answers are in natural language too. When someone asks Maps &quot;what should I do after a car accident in Dallas?&quot; and your Q&amp;A section contains a detailed answer to exactly that question, Gemini has a direct, citable source. It doesn&apos;t need to infer. It doesn&apos;t need to synthesize from fragments. It can pull from your answer directly.
          </p>
          <p>
            Seed your Q&amp;A with the twenty questions your intake team hears most often. Answer them thoroughly, in natural language, with specifics about your practice area and location. This is one of the fastest, most underutilized ways to feed Gemini exactly the kind of unstructured data it needs to cite you in conversational responses.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="the-freshness-decay-problem">
            The Freshness Decay Problem
          </h2>
          <p>
            Unstructured data isn&apos;t a one-time optimization. It decays.
          </p>
          <p>
            A Google Business Profile with 200 reviews but none in the last six months tells a story &mdash; just not the one you want. It says: this firm used to be active. It used to have clients. Something changed. To a human scanning reviews, recency matters. To an AI model evaluating which businesses to confidently recommend, recency almost certainly matters more.
          </p>
          <p>
            Google has never published the exact signals Gemini uses inside Maps. But we know from years of traditional local SEO research that review velocity &mdash; the rate of new reviews over time &mdash; has always been a ranking factor. It would be surprising if Gemini didn&apos;t weight it even more heavily, given that freshness is a core quality signal in every LLM-based system.
          </p>
          <p>
            The same applies to Google Posts. A firm that posts weekly updates about case types, community involvement, and practice area expertise signals ongoing activity. A firm that hasn&apos;t posted in eight months signals dormancy. Your unstructured data corpus needs constant feeding. It&apos;s not a profile you set up once and forget. It&apos;s a living document that Gemini re-reads every time someone in your market asks a question.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="multimodal-data-gemini-sees-your-photos-too">
            Multimodal Data: Gemini Sees Your Photos Too
          </h2>
          <p>
            Here&apos;s something most firms haven&apos;t considered: Gemini is multimodal. It doesn&apos;t just read text. It processes images. And your Google Business Profile is full of them &mdash; or it should be.
          </p>
          <p>
            Office photos with proper EXIF data tell Gemini where you are. Team photos showing real humans signal legitimacy in a way that stock photos never can. Images of your office, your conference rooms, your team in the community &mdash; these are unstructured visual data points that contribute to the overall picture Gemini builds of your firm.
          </p>
          <p>
            Think about what a prospective client sees when Gemini recommends a firm: a profile with twelve real photos of a professional office and named attorneys, versus a profile with two blurry images and a stock photo of a gavel. Which one does a scared person trust enough to call? And which one does Gemini trust enough to recommend?
          </p>
          <p>
            Visual data is unstructured data. EXIF metadata is structured data embedded in unstructured media. Geo-tagged photos confirm your location. Recent photos confirm your activity. Professional photos confirm your legitimacy. Gemini can read all of it, and it almost certainly does.
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
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="this-is-geo-for-maps-and-the-stakes-are-higher">
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
            The Unstructured Data Action Plan
          </p>
          <p className="mb-4 text-sm leading-relaxed text-foreground/75">
            Every item you skip is a signal Gemini doesn&apos;t have &mdash; and your competitor might. The goal is narrative richness, not checkbox completeness.
          </p>
          <ol className="list-inside list-decimal space-y-3 text-sm leading-relaxed text-foreground/75">
            <li>
              <strong className="text-foreground">Coach clients to write narrative reviews.</strong> Don&apos;t send a generic link. Before the review, ask: what happened, where, what the experience was like, how the case resolved. A review that mentions case type, location, timeline, and emotional experience is worth fifty &quot;great lawyer&quot; reviews to Gemini.
            </li>
            <li>
              <strong className="text-foreground">Respond to every review with specifics.</strong> Your responses are unstructured data too. &quot;Thank you for the kind words&quot; is wasted signal. &quot;We&apos;re glad we could help with your truck accident case in the Dallas area&quot; adds context Gemini can read and match.
            </li>
            <li>
              <strong className="text-foreground">Seed your Q&amp;A with your top 20 intake questions.</strong> &quot;How much does a car accident lawyer cost?&quot; &quot;What should I do after a hit and run?&quot; &quot;Can I sue if I was partially at fault?&quot; Answer them in natural language with location specifics. This is direct fuel for conversational responses.
            </li>
            <li>
              <strong className="text-foreground">Write your business description in crisis language.</strong> Not &quot;we handle personal injury cases.&quot; Instead: &quot;car accident attorney serving Fort Lauderdale and Broward County &mdash; truck accidents, motorcycle crashes, rideshare injuries, wrongful death.&quot; Match how people actually search when they&apos;re scared.
            </li>
            <li>
              <strong className="text-foreground">List every case type as a separate service.</strong> Auto accidents, slip and fall, medical malpractice, dog bites, rideshare accidents. Each one is a semantic signal Gemini can match to a specific natural-language query.
            </li>
            <li>
              <strong className="text-foreground">Post weekly with narrative substance.</strong> Not &quot;Happy holidays from our team!&quot; Posts about case types you handle, what clients should know after specific accidents, how your firm approaches different injury claims. Every post is a document Gemini reads.
            </li>
            <li>
              <strong className="text-foreground">Add geo-tagged, real photos regularly.</strong> Office, team, community involvement &mdash; with proper EXIF data. Gemini is multimodal. Recent, authentic photos signal legitimacy and activity. Stock photos signal nothing.
            </li>
            <li>
              <strong className="text-foreground">Maintain review velocity.</strong> 200 reviews with none in 6 months signals dormancy. A steady cadence of 3-5 detailed reviews per month signals an active, trusted practice. Freshness matters to LLMs.
            </li>
            <li>
              <strong className="text-foreground">Lock down NAP consistency.</strong> Name, address, phone number &mdash; identical across your GBP, website, Avvo, Justia, FindLaw, Yelp, everywhere. Inconsistencies create noise that makes Gemini less confident in citing you.
            </li>
            <li>
              <strong className="text-foreground">Audit your Gemini visibility, not your rankings.</strong> The new metric isn&apos;t &quot;where do we rank?&quot; It&apos;s &quot;does Gemini cite us?&quot; Test conversational queries in Maps for every case type you handle. If you&apos;re not in the answer, your unstructured data isn&apos;t rich enough.
            </li>
          </ol>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="what-this-means-for-the-pi-marketing-industry">
            What This Means for the PI Marketing Industry
          </h2>
          <p>
            Let&apos;s be direct about the implications. The SEO agency sending you monthly rank reports is measuring the wrong thing. Rankings still matter for traditional Google search &mdash; but the fastest-growing discovery channel for local services is now powered by an AI model that doesn&apos;t rank anything. It synthesizes, evaluates, and recommends. And the inputs it cares about are fundamentally different from the inputs your agency has been optimizing.
          </p>
          <p>
            Link building doesn&apos;t help you inside Maps. Page speed optimization doesn&apos;t help you inside Maps. Keyword density analysis doesn&apos;t help you inside Maps. What helps you inside Maps is the richness, specificity, recency, and volume of the unstructured data on your Google Business Profile.
          </p>
          <p>
            This requires a fundamentally different approach. Review coaching. Q&amp;A seeding. Narrative-rich posting. Photo strategy. Ongoing unstructured data generation. These aren&apos;t line items most SEO agencies even offer, because they&apos;re not traditional SEO activities. They&apos;re content strategy applied to a surface that most agencies still think of as a listing to be filled out once and forgotten.
          </p>
          <p>
            The firms that figure this out first will lock in citation positions that become self-reinforcing &mdash; more Gemini citations lead to more calls, which lead to more clients, which lead to more reviews, which lead to more citations. The firms that keep optimizing their website while their GBP collects dust will wonder why their call volume keeps dropping despite steady rankings.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="the-window-that-won-t-stay-open">
            The Window That Won&apos;t Stay Open
          </h2>
          <p>
            Here&apos;s the part that should make you move fast: most firms don&apos;t know about this yet. Ask Maps just launched. The majority of PI firms are running the same GBP they set up three years ago &mdash; a two-sentence description, whatever reviews trickled in organically, and an agency sending rank reports that don&apos;t account for AI-generated answers.
          </p>
          <p>
            We saw this exact pattern with AI Overviews in traditional search. The firms that moved early locked in citation positions that became self-reinforcing. The firms that waited are still trying to catch up six months later. Maps will follow the same curve, except faster. The intent is higher. The answer is more direct. The winner-take-all dynamic is more severe.
          </p>
          <p>
            Right now, the firm that Elena called on I-95 might not be the best PI firm in Fort Lauderdale. It might not have the most experience or the biggest verdicts. But it had a Google Business Profile overflowing with rich, detailed, narrative unstructured data &mdash; the kind of data that gave Gemini enough confidence to recommend it to a scared woman on the side of a highway.
          </p>
          <p>
            That&apos;s the new game. Not who ranks highest. Not who spends the most on ads. Not who has the best website. Who has the richest unstructured data. Who gives Gemini the most to read. Who turns their Google Business Profile from a static listing into a living, constantly-updated corpus of exactly the information people need when they&apos;re hurt, scared, and searching for help.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="one-question-for-your-agency-monday-morning">
            One Question for Your Agency Monday Morning
          </h2>
          <p>
            If you&apos;re spending $10,000 or more a month on SEO and local search, call your agency tomorrow and ask them one question: &quot;What is our unstructured data strategy for Gemini-powered Maps search?&quot;
          </p>
          <p>
            If they don&apos;t know what you mean by unstructured data, that tells you everything. If they tell you rankings still matter, they&apos;re not wrong &mdash; but they&apos;re answering last year&apos;s question. The question that matters now is the one Elena typed into her phone on I-95. And whether Gemini answers it with your name &mdash; or with the name of the firm down the street that took its reviews, Q&amp;A, and profile content seriously.
          </p>
        </section>

        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-[#00ff41]">
            Is Gemini Recommending Your Firm?
          </h2>
          <p className="mb-6 text-foreground/70">
            We audit your Google Business Profile, unstructured data richness, AI citation visibility, and Maps presence across every query that matters to your practice. Find out where you stand before the window closes.
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
