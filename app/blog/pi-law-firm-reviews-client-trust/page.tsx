import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import corpus from "@/lib/data/pi-review-corpus-2026-09-01.json";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "pi-law-firm-reviews-client-trust";
const pageTitle = "What 7,383 PI Law Firm Reviews Reveal About Client Trust";
const pageDescription =
  "An analysis of 7,383 PI law firm reviews shows how communication, care, access, delays, and outcomes shape client trust.";
const pageUrl = `${SITE_URL}/blog/${slug}`;

const contents = [
  { id: "findings", label: "The findings in five minutes" },
  { id: "praise", label: "What clients praise" },
  { id: "complaints", label: "What breaks trust" },
  { id: "process-outcome", label: "Process versus outcome" },
  { id: "journey", label: "Where trust is won or lost" },
  { id: "playbook", label: "A 30/60/90-day operating playbook" },
  { id: "methodology", label: "Methodology and limitations" },
];

const faqs = [
  {
    question: "What do personal injury clients value most in a law firm?",
    answer:
      "In this review corpus, positive reviews most often described feeling cared for, a strong outcome, frequent updates, attorney access, staff ownership, and clear explanations. The pattern suggests that clients judge both the result and how the firm carries them through the case.",
  },
  {
    question: "What causes negative reviews of personal injury law firms?",
    answer:
      "Among negative or mixed reviews, attorney accessibility, case duration, communication technology, proactive updates, paperwork, settlement amount, empathy, and fees were the most frequently detected themes. These are associations in public reviews, not proof that a firm caused the underlying problem.",
  },
  {
    question: "Are good PI law firm reviews mainly about settlement outcomes?",
    answer:
      "No. Eighty-two percent of positive independent reviews in this snapshot did not mention an identifiable outcome. They were still positive about the process, which indicates that communication, care, explanations, and access can create trust even when the review does not discuss the settlement.",
  },
  {
    question: "How should a PI firm use this research?",
    answer:
      "Treat it as a diagnostic, not a scorecard. Audit callbacks, update cadence, case ownership, attorney escalation, expectations, and post-settlement payment. Then measure one workflow at a time against client complaints, response time, unresolved exceptions, and review themes.",
  },
];

type MetricRow = { key: string; label: string; count: number; percent: number };

function BarList({
  rows,
  tone = "green",
  limit = 6,
}: {
  rows: MetricRow[];
  tone?: "green" | "red" | "amber";
  limit?: number;
}) {
  const colors = {
    green: "bg-emerald-400",
    red: "bg-rose-400",
    amber: "bg-amber-300",
  };
  const visible = rows.slice(0, limit);
  const max = Math.max(...visible.map((row) => row.percent), 1);
  return (
    <div className="space-y-4">
      {visible.map((row) => (
        <div key={row.key}>
          <div className="mb-1.5 flex items-baseline justify-between gap-4 text-sm">
            <span className="text-foreground/85">{row.label}</span>
            <span className="shrink-0 font-semibold text-white">{row.percent}%</span>
          </div>
          <div className="h-2 bg-white/10">
            <div
              className={`h-full ${colors[tone]}`}
              style={{ width: `${Math.max(1.5, (row.percent / max) * 100)}%` }}
            />
          </div>
          <p className="mt-1 text-xs text-foreground/45">{row.count.toLocaleString()} reviews</p>
        </div>
      ))}
    </div>
  );
}

function Figure({
  number,
  title,
  note,
  children,
}: {
  number: string;
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-10 border-y border-white/15 py-7">
      <figcaption className="mb-7 grid gap-3 sm:grid-cols-[3rem_1fr]">
        <span className="text-xl font-semibold text-primary">{number}</span>
        <div>
          <h3 className="text-xl font-semibold text-white sm:text-2xl">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-foreground/55">{note}</p>
        </div>
      </figcaption>
      {children}
    </figure>
  );
}

export const metadata: Metadata = {
  title: `PI Law Firm Reviews and Client Trust | ${SITE_NAME}`,
  description: pageDescription,
  keywords: [
    "personal injury law firm reviews",
    "PI law firm client communication",
    "personal injury client satisfaction",
    "law firm client trust",
    "PI firm operations",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-09-01",
    modifiedTime: "2026-09-01",
    authors: ["Pranav Modi"],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription },
};

export default function Page() {
  const post = BLOG_POSTS_BY_SLUG[slug];
  const positiveNoOutcome = 5687;
  const negativeNoOutcome = 306;
  const positiveN = corpus.sentiment_band_denominators.positive_reviews;
  const negativeN = corpus.sentiment_band_denominators.negative_or_mixed_reviews;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: pageTitle,
      description: pageDescription,
      url: pageUrl,
      datePublished: "2026-09-01",
      dateModified: "2026-09-01",
      author: { "@type": "Person", name: post.author },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: pageUrl,
      articleSection: "Industry Analysis",
      keywords: "personal injury law firm reviews, client trust, client communication, PI firm operations",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: pageTitle, item: pageUrl },
      ],
    },
  ];

  const sourceRows = Object.entries(corpus.corpus.source_distribution)
    .map(([key, count]) => ({
      key,
      label: key.replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
      count,
      percent: Number(((count / corpus.corpus.included_distinct_reviews) * 100).toFixed(2)),
    }))
    .sort((a, b) => b.count - a.count);
  const sentimentRows = Object.entries(corpus.sentiment_distribution).map(([key, count]) => ({
    key,
    label: key.replace(/\b\w/g, (letter) => letter.toUpperCase()),
    count,
    percent: Number(((count / corpus.primary_denominator.reviews) * 100).toFixed(2)),
  }));
  const actionabilityRows = corpus.actionability as MetricRow[];
  const journeyRows = (corpus.journey_stages as MetricRow[]).filter((row) => row.key !== "unknown");

  return (
    <div className="bg-black pb-24">
      <ClickBeacon page="blog-pi-review-client-trust" />
      <JsonLd data={structuredData} />

      <header className="border-b border-primary/20 bg-[#050807]">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24">
          <div className="text-xs text-foreground/60">
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span className="mx-3 text-primary/40">/</span>
            Industry analysis
          </div>
          <p className="mt-8 text-xs font-semibold uppercase text-primary">A frozen analysis of public client reviews</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.75rem]">
            What 7,383 PI Law Firm Reviews Reveal About Client Trust
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/75 sm:text-xl">
            Clients notice outcomes. They also notice whether anyone calls back, explains what is happening, owns the next step, and treats them like a person.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/55">
            <span>{post.author}</span><span>/</span><time dateTime="2026-09-01">{post.date}</time><span>/</span><span>{post.readTime}</span>
          </div>

          <div className="mt-10 grid border-y border-white/15 sm:grid-cols-3">
            {[
              ["7,383", "Distinct reviews"],
              ["1,002", "PI law firms"],
              ["7,320", "Independent-source reviews"],
            ].map(([value, item], index) => (
              <div key={item} className={`py-6 sm:px-6 ${index < 2 ? "border-b border-white/10 sm:border-b-0 sm:border-r" : ""}`}>
                <p className="text-4xl font-semibold text-primary">{value}</p>
                <p className="mt-2 text-sm text-foreground/55">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
        <div className="border-y border-primary/30 py-8">
          <p className="text-xs font-semibold uppercase text-primary/80">The short answer</p>
          <p className="mt-4 text-xl leading-9 text-foreground/95 sm:text-2xl sm:leading-10">
            The strongest positive signal was not settlement alone. Feeling cared for appeared in 47.9% of positive independent reviews; frequent updates appeared in 31.5%. Among negative or mixed reviews, attorney access and case duration were the most common detected themes. Most strikingly, 82% of positive reviews and 80% of negative reviews did not mention an identifiable outcome. Clients were judging the experience of being represented.
          </p>
        </div>
      </section>

      <BlogTableOfContents items={contents} faqHref="#faq" />

      <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
        <section id="findings" className="scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">The findings in five minutes</h2>
          <p className="text-xl leading-9 text-foreground/95">
            A personal injury case can last months or years. During much of that time, the client cannot independently see whether the case is moving. Trust is built from the signals the firm makes visible: access, updates, explanations, ownership, and care.
          </p>
          <ul className="space-y-3">
            {[
              "Care was the leading praise driver: 3,316 of 6,920 positive independent reviews.",
              "Strong outcomes mattered, appearing in 2,477 positive reviews, but were not the whole story.",
              "Attorney accessibility was the most common negative theme: 172 of 383 negative or mixed reviews.",
              "Case duration and proactive updates were also prominent negative themes.",
              "Review patterns were similar after balancing firms so high-volume listings did not dominate.",
            ].map((item) => (
              <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" /><span>{item}</span></li>
            ))}
          </ul>

          <Figure number="01" title="The corpus is broad by firm, concentrated by source" note="Included n=7,383 distinct reviews across 1,002 PI firms. Source shares use the full included corpus.">
            <BarList rows={sourceRows} limit={6} />
            <p className="mt-6 text-sm leading-6 text-amber-200/75">Google supplied 97.5% of included reviews. The firm coverage is useful; cross-platform comparisons are not.</p>
          </Figure>

          <Figure number="02" title="Public reviews skew heavily positive" note={`Independent-source denominator: n=${corpus.primary_denominator.reviews.toLocaleString()} reviews across ${corpus.primary_denominator.firms} firms.`}>
            <BarList rows={sentimentRows} limit={4} />
          </Figure>
        </section>

        <section id="praise" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">What clients praise: care, outcomes, and communication</h2>
          <p>
            Positive reviews do not separate legal work from service. Clients describe whether they felt cared for, whether the firm achieved a result, whether updates arrived, and whether someone helped coordinate the medical side of the case.
          </p>
          <p>
            That matters operationally. A firm may not control the facts, insurance limits, court calendar, or ultimate outcome. It can control whether the client knows who owns the next step and what happens next.
          </p>
          <Figure number="03" title="Praise drivers versus failure modes" note={`Praise uses n=${positiveN.toLocaleString()} positive reviews. Failures use n=${negativeN.toLocaleString()} negative or mixed reviews. A review may contain more than one theme.`}>
            <div className="grid gap-10 md:grid-cols-2">
              <div><p className="mb-5 text-sm font-semibold uppercase text-emerald-300">Why clients praise</p><BarList rows={corpus.praise_drivers as MetricRow[]} limit={5} /></div>
              <div><p className="mb-5 text-sm font-semibold uppercase text-rose-300">Why trust breaks</p><BarList rows={corpus.failure_modes as MetricRow[]} tone="red" limit={5} /></div>
            </div>
          </Figure>

          <Figure number="04" title="The same service dimensions can create praise or criticism" note="Percentages are within their respective positive (n=6,920) and negative/mixed (n=383) sentiment bands.">
            <div className="grid gap-10 md:grid-cols-2">
              <div><p className="mb-5 text-sm font-semibold uppercase text-emerald-300">Positive themes</p><BarList rows={corpus.positive_themes as MetricRow[]} limit={7} /></div>
              <div><p className="mb-5 text-sm font-semibold uppercase text-rose-300">Negative themes</p><BarList rows={corpus.negative_themes as MetricRow[]} tone="red" limit={7} /></div>
            </div>
          </Figure>
        </section>

        <section id="complaints" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">What breaks trust: silence makes uncertainty feel like neglect</h2>
          <p>
            Attorney accessibility appeared in 44.9% of negative or mixed reviews. Case duration appeared in 40.2%; proactive updates in 31.3%. These labels can overlap. A long case with clear expectations may be accepted. A long case with no visible movement can feel abandoned.
          </p>
          <p>
            The operating response is not to promise constant lawyer availability. It is to design a reliable access system: a named case owner, a known update cadence, a clear attorney-escalation rule, and closed-loop callbacks. An <Link href="/personal-injury/client-communication" className="text-primary underline decoration-primary/35 underline-offset-4">AI-assisted client communication system</Link> can prepare routine updates and flag exceptions, but a person must own the relationship.
          </p>
        </section>

        <section id="process-outcome" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Most reviews judge the process without naming the outcome</h2>
          <p>
            The cleanest signal in the corpus is an absence. Of 6,920 positive reviews, 5,687 did not mention an identifiable outcome. Of 383 negative or mixed reviews, 306 did not mention one either.
          </p>
          <Figure number="05" title="Process sentiment often stands on its own" note="Outcome was marked unknown when the review did not explicitly support an outcome judgment.">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border-l-4 border-emerald-400 pl-5 py-2">
                <p className="text-5xl font-semibold text-white">{Math.round((positiveNoOutcome / positiveN) * 100)}%</p>
                <p className="mt-3 text-sm leading-6 text-foreground/60">of positive reviews were positive about the process without an identifiable outcome.</p>
              </div>
              <div className="border-l-4 border-rose-400 pl-5 py-2">
                <p className="text-5xl font-semibold text-white">{Math.round((negativeNoOutcome / negativeN) * 100)}%</p>
                <p className="mt-3 text-sm leading-6 text-foreground/60">of negative or mixed reviews were negative about the process without an identifiable outcome.</p>
              </div>
            </div>
          </Figure>
          <p>
            This does not prove process matters more than outcome. Public reviews are selective, and the classifier does not infer unspoken outcomes. It does show that clients form strong judgments from service behavior alone. A firm waiting for the settlement to create satisfaction is waiting too long.
          </p>
        </section>

        <section id="journey" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Where trust becomes visible</h2>
          <p>
            More than half the reviews did not name a journey stage, so stage findings should be read cautiously. Where a stage was explicit, settlement, case management, medical treatment, and negotiation appeared most often.
          </p>
          <Figure number="06" title="Explicit journey stages in client reviews" note={`Independent classified denominator: n=${corpus.primary_denominator.reviews.toLocaleString()}. A review may mention multiple stages; 52.5% did not support a stage label.`}>
            <BarList rows={journeyRows} tone="amber" limit={8} />
          </Figure>
          <p>
            Reviews named the attorney in 42.7% of cases and the firm or team generally in 55.2%. Case managers were explicitly named in only 2.9%. That does not measure their importance; it shows how often the role was visible in review language.
          </p>
          <Figure number="07" title="Most detected issues were tagged as operationally controllable" note="This rules-based actionability label is intentionally broad. Treat it as a triage view, not proof that the firm controlled a particular outcome.">
            <BarList rows={actionabilityRows} tone="amber" limit={4} />
          </Figure>
          <Figure number="08" title="Firm-balanced results tell the same story" note="Each firm rate was calculated first, then averaged, so firms with many reviews could not dominate. Praise uses positive reviews; failures use negative or mixed reviews.">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-l-2 border-emerald-400 pl-5"><p className="text-4xl font-semibold text-white">46.0%</p><p className="mt-2 text-sm text-foreground/60">average firm-level positive-review rate mentioning care</p></div>
              <div className="border-l-2 border-rose-400 pl-5"><p className="text-4xl font-semibold text-white">15.7%</p><p className="mt-2 text-sm text-foreground/60">average firm-level negative-review rate flagging unexpected delay</p></div>
              <div className="border-l-2 border-emerald-400 pl-5"><p className="text-4xl font-semibold text-white">29.5%</p><p className="mt-2 text-sm text-foreground/60">average firm-level positive-review rate mentioning frequent updates</p></div>
              <div className="border-l-2 border-rose-400 pl-5"><p className="text-4xl font-semibold text-white">11.8%</p><p className="mt-2 text-sm text-foreground/60">average firm-level negative-review rate flagging dismissive treatment</p></div>
            </div>
          </Figure>
        </section>

        <section id="playbook" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">A 30/60/90-day operating playbook</h2>
          <div className="divide-y divide-white/15 border-y border-white/15">
            {[
              ["30 days", "Find the trust leak", "Read recent one- to three-star reviews alongside active-client complaints. Measure callback closure, update age, unanswered messages, attorney escalations, and cases without a clearly assigned owner."],
              ["60 days", "Redesign one workflow", "Choose the highest-frequency leak. Define the trigger, owner, expected response, escalation rule, and evidence of completion. Start with callbacks or proactive case updates before adding more software."],
              ["90 days", "Instrument and expand", "Compare response time, overdue updates, repeat contacts, unresolved exceptions, complaints, and review themes. Keep the workflow if behavior improved; fix it before expanding to the next stage."],
            ].map(([period, title, body]) => (
              <div key={period} className="grid gap-3 py-7 sm:grid-cols-[7rem_12rem_1fr]">
                <p className="font-semibold text-primary">{period}</p>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <p>
            The point is not to automate empathy. It is to remove the operational failures that make empathy invisible. Possible Minds starts with a firm-specific diagnostic, then builds narrow systems around the workflow the firm can measure and govern. For many firms, that first workflow is <Link href="/personal-injury/intake-automation" className="text-primary underline decoration-primary/35 underline-offset-4">human-led intake with AI preparation and escalation</Link>.
          </p>
        </section>

        <section id="methodology" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Methodology and limitations</h2>
          <p>
            The frozen snapshot includes 7,383 distinct, complete review records from 1,002 directory-verified PI law firms as of September 1, 2026 at 07:28 UTC. We retained source and listing evidence, normalized whitespace and case, deduplicated within firm/source/listing/reviewer/date/text identity, and separated 7,320 independent-source reviews from 30 firm-curated testimonials and 33 aggregator records.
          </p>
          <p>
            Primary percentages use the 7,320 independent-source reviews classified on <code className="text-primary">pi_reviews_v1</code>. Review-weighted results count each review. Firm-balanced results calculate each firm&apos;s rate first and then average those rates. Every chart on this page is rendered from the frozen aggregate dataset used for publication.
          </p>
          <p>
            Important limitations: Google represents 97.5% of the corpus and Yelp contributes only seven reviews; public reviews are self-selected; the classification is primarily a deterministic rules baseline and may miss implicit meaning; and mentions are associations, not causal findings. The analysis does not infer firm size, staff role, case stage, or outcome when the review does not support it.
          </p>
        </section>

        <section id="faq" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Common questions</h2>
          <div className="divide-y divide-white/15 border-y border-white/15">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                <p className="mt-3">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border-y border-white/15 py-10">
          <p className="text-xs font-semibold uppercase text-primary">What this looks like in practice</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Communication systems built around the next response</h2>
          <p className="mt-5 max-w-3xl">
            For Precise Imaging, a medical-imaging operation handling more than 600 emails a day, we built email triage that reads, tags, routes, and prepares replies, along with automated status responses and proactive communication tools. Routine questions move quickly, while exceptions reach staff with the relevant context. The same principle applies inside a PI firm: make routine movement visible and bring human attention to the moments where trust is at risk.
          </p>
          <Link href="/healthcare-case-study" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary underline decoration-primary/35 underline-offset-4 hover:text-primary/80">
            Read the Precise Imaging case study <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        <section className="mt-16 border-y border-primary/30 py-10">
          <p className="text-xs font-semibold uppercase text-primary">Turn review signals into operating changes</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Find the workflow that is costing your firm trust.</h2>
          <p className="mt-4 max-w-2xl">We will map the leak, its evidence, the human decision points, and what a governed AI system should and should not do.</p>
          <Link href="/consult" className="mt-7 inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-black hover:bg-primary/90">
            Request a firm-specific diagnostic <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </article>
    </div>
  );
}
