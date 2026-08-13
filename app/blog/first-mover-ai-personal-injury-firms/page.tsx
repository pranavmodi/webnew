import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "first-mover-ai-personal-injury-firms";
const pageTitle = "The First-Mover Advantage in AI Is Real";
const metaTitle = `AI First-Mover Advantage for PI Firms | ${SITE_NAME}`;
const pageDescription =
  "Why PI firms should start one AI workflow now, how consolidation changes the market, and a practical 30-day plan for nontechnical owners.";
const pageUrl = `${SITE_URL}/blog/${slug}`;
const heroImage = `${SITE_URL}/images/blog/pi-first-mover-ai.webp`;

const sources = {
  catalystArticle:
    "https://natlawreview.com/article/why-corporate-legal-departments-will-become-primary-catalyst-disruption-legal",
  piPartnership:
    "https://www.hklaw.com/en/news/pressreleases/2026/05/holland-and-knight-advises-uplift-investors-orion-legal-mso",
  legalTechTransactions:
    "https://assets.ctfassets.net/xpbu77rkft4z/5gHc17PZ2N6h7F6ivFfqmt/b0be232926f99b8fff935b9b29398750/TECH_BS_Sector_Brief_Legal_Tech_1H_2025_FINAL__1_.pdf",
  aiIntakeTriage: "https://mission.getpossibleminds.com/podcasts/4349",
  aiWorkflowTrust: "https://mission.getpossibleminds.com/podcasts/4547",
  aiIntakeTesting: "https://mission.getpossibleminds.com/podcasts/3862",
  connectedFirmData: "https://mission.getpossibleminds.com/podcasts/6301",
  aiPrivacyAndReview: "https://mission.getpossibleminds.com/podcasts/7212",
  aiOwnership: "https://mission.getpossibleminds.com/podcasts/15",
};

const contents = [
  { id: "first-mover", label: "What first-mover advantage really means" },
  { id: "consolidation", label: "Consolidation is already starting" },
  { id: "why-intake", label: "Why start with AI intake" },
  { id: "thirty-days", label: "What to do in the next 30 days" },
  { id: "good-start", label: "What a good start looks like" },
];

const faqs = [
  {
    question: "Does a PI firm need to build its own AI model?",
    answer:
      "No. The first advantage comes from improving one firm-specific workflow, using existing models and systems where appropriate, and retaining control over the workflow rules, data, and measurements.",
  },
  {
    question: "Which AI workflow should a PI firm start with?",
    answer:
      "For most PI firms, intake is the strongest first workflow. It is repetitive, time-sensitive, economically important, and easy to measure. AI can acknowledge, collect, organize, and route an inquiry while people retain empathy, qualification, legal judgment, case acceptance, and the close.",
  },
  {
    question: "How should a PI firm measure an AI pilot?",
    answer:
      "Measure the operating result: response time, completion time, missed work, rework, exceptions, staff time, and downstream outcomes. Do not judge the pilot only by the quality of a demonstration.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "AI first mover advantage personal injury firms",
    "AI for personal injury law firms",
    "personal injury law firm consolidation",
    "PI firm AI strategy",
    "30 day AI plan for law firms",
    "personal injury workflow automation",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-08-13",
    modifiedTime: "2026-08-13",
    authors: ["Pranav Modi"],
    images: [
      {
        url: heroImage,
        width: 1536,
        height: 1024,
        alt: "A personal injury firm owner and operations lead beginning a focused four-week AI plan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [heroImage],
  },
};

export default function BlogPostPage() {
  const post = BLOG_POSTS_BY_SLUG[slug];
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: pageTitle,
      description: pageDescription,
      url: pageUrl,
      image: heroImage,
      datePublished: "2026-08-13",
      dateModified: "2026-08-13",
      author: {
        "@type": "Person",
        name: post.author,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: pageUrl,
      articleSection: "AI Strategy",
      keywords:
        "AI first-mover advantage, personal injury firms, law firm consolidation, PI firm AI strategy, workflow automation",
      citation: Object.values(sources),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE_URL}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: pageTitle,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <div className="bg-black pb-24">
      <ClickBeacon page="blog-first-mover-ai-personal-injury-firms" />
      <JsonLd data={structuredData} />

      <header className="relative min-h-[570px] overflow-hidden border-b border-primary/20 sm:min-h-[640px]">
        <Image
          src="/images/blog/pi-first-mover-ai.webp"
          alt="A personal injury firm owner and operations lead beginning a focused four-week AI plan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.88)_46%,rgba(0,0,0,0.25)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

        <div className="relative mx-auto flex min-h-[570px] max-w-4xl flex-col justify-end px-4 pb-14 pt-28 sm:min-h-[640px] sm:px-6 sm:pb-20">
          <div>
            <div className="flex items-center gap-3 text-xs text-foreground/70">
              <Link href="/blog" className="transition hover:text-primary">
                Blog
              </Link>
              <span className="text-primary/50">/</span>
              <span>AI Strategy</span>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#00ff41]">
              A 30-day plan for PI firm owners
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              The First-Mover Advantage in AI Is Real
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/85 sm:text-xl">
              Moving first does not mean buying the newest tool. It means starting
              the learning loop before your competitors do.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/65">
              <span>{post.author}</span>
              <span aria-hidden="true">/</span>
              <time dateTime="2026-08-13">{post.date}</time>
              <span aria-hidden="true">/</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
        <div className="border-y border-primary/30 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            The short answer
          </p>
          <p className="mt-4 text-xl leading-9 text-foreground/95 sm:text-2xl sm:leading-10">
            AI advantage compounds. The firm that improves one real workflow now
            begins collecting better examples, fixing edge cases, and training its
            people while others are still comparing tools.
          </p>
        </div>
      </section>

      <BlogTableOfContents items={contents} faqHref="#faq" />

      <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
        <section className="space-y-6">
          <p className="text-xl leading-9 text-foreground/95">
            Personal injury firms do not need another prediction about how AI will
            change everything. They need to know whether waiting carries a cost.
          </p>
          <p>
            It does. But the cost is not missing one clever feature. It is allowing
            another firm to begin learning how to respond faster, move files more
            consistently, and preserve its best people&apos;s judgment before you do.
          </p>
        </section>

        <section className="mt-14 space-y-5">
          <h2
            id="first-mover"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            What first-mover advantage really means
          </h2>
          <p>
            Buying software first is not an advantage. A competitor can buy the same
            software next month.
          </p>
          <p>
            The durable advantage is beginning the learning loop first. Your firm
            chooses one workflow, tests it on real situations, records where it fails,
            improves the rules, and teaches staff how to work with it. Each cycle
            produces better data and better judgment about what should remain human.
          </p>
          <p>
            Six months later, a competitor may have the same model. It will not have
            your six months of examples, corrections, measurements, and operating
            habits.
          </p>
        </section>

        <section className="mt-14 space-y-5">
          <h2
            id="consolidation"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            Consolidation is already starting
          </h2>
          <p>
            Better-capitalized firms and legal-service platforms are combining money,
            marketing, technology, and operations. In 2026, private-equity-owned
            Orion Legal MSO announced a partnership with plaintiff firm Hughes &amp;
            Coleman. Legal-tech companies have also continued acquiring specialized
            products to build broader platforms.
          </p>
          <p>
            This does not mean every independent PI firm will be absorbed. It means
            the operational standard will rise. Faster response, cleaner data, better
            client communication, and more predictable case movement will become
            normal expectations.
          </p>
          <p>
            A focused firm can still win. Local reputation, trial ability, referral
            trust, and case judgment remain difficult to buy. The opportunity is to
            give those strengths better systems before scale alone becomes the
            advantage.
          </p>
          <p className="text-sm text-foreground/60">
            Sources: the{" "}
            <a
              href={sources.catalystArticle}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              National Law Review&apos;s analysis of AI-driven legal disruption
            </a>{" "}
            and{" "}
            <a
              href={sources.piPartnership}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              Holland &amp; Knight&apos;s announcement of the Orion partnership
            </a>
            .
          </p>
        </section>

        <section className="mt-14 space-y-5">
          <h2
            id="why-intake"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            Why AI intake is the right first step
          </h2>
          <p>
            Intake sits where urgency, revenue, and repetitive work meet. A promising
            inquiry can arrive at night, while staff are busy, or while the caller is
            contacting several firms. Every minute before a useful response matters.
          </p>
          <p>
            It is also unusually measurable. You can track when an inquiry arrived,
            when it was acknowledged, when a person made contact, whether the firm
            wanted the case, and whether it signed. That gives an owner a clear
            baseline and a fast answer about whether the pilot helped.
          </p>
          <p>
            Most importantly, the boundary between AI and people can remain clear.
            AI handles availability, basic fact collection, intake-system entry,
            follow-up tasks, and routing. Your team handles empathy, ambiguity,
            qualification, legal judgment, case acceptance, and the close.
          </p>
          <div className="border-y border-primary/30 py-6">
            <p className="text-xl font-semibold leading-8 text-foreground sm:text-2xl sm:leading-9">
              Start where speed can create revenue, the work repeats, and a human can
              take over before judgment or trust is at risk.
            </p>
          </div>
        </section>

        <section className="mt-14 space-y-6">
          <h2
            id="thirty-days"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            What to do in the next 30 days
          </h2>
          <p>
            Do not spend the month comparing general AI tools. Use it to run one
            controlled AI intake pilot on after-hours or overflow inquiries.
          </p>
          <ol className="divide-y divide-primary/20 border-y border-primary/20">
            <li className="grid gap-3 py-6 sm:grid-cols-[5rem_1fr] sm:gap-6">
              <strong className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                Week 1
              </strong>
              <div>
                <h3 className="font-semibold text-foreground">
                  Name an owner and establish the baseline
                </h3>
                <p className="mt-2">
                  Give one person responsibility for the workflow, vendor, staff
                  adoption, and result. Pull 25 recent after-hours forms, chats, and
                  missed calls. Record when each arrived, when a person responded,
                  whether the firm wanted it, and whether it signed.
                </p>
              </div>
            </li>
            <li className="grid gap-3 py-6 sm:grid-cols-[5rem_1fr] sm:gap-6">
              <strong className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                Week 2
              </strong>
              <div>
                <h3 className="font-semibold text-foreground">
                  Map the handoff and set the rules
                </h3>
                <p className="mt-2">
                  Follow the inquiry from phone, form, or chat into the intake system
                  and on to the human closer. Decide what AI may collect, where data
                  is stored, when it must escalate, and what requires human review.
                  Fix missing connections before adding another isolated tool.
                </p>
              </div>
            </li>
            <li className="grid gap-3 py-6 sm:grid-cols-[5rem_1fr] sm:gap-6">
              <strong className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                Week 3
              </strong>
              <div>
                <h3 className="font-semibold text-foreground">
                  Test the intake agent on real PI calls
                </h3>
                <p className="mt-2">
                  Let it acknowledge the inquiry, collect essential facts, create the
                  lead, and alert the right person. Then try to break it with emotional
                  callers, contradictory facts, multiple incidents, urgent deadlines,
                  other languages, poor-fit matters, and people shopping for counsel.
                  Judge the live handoff, not the polished demo.
                </p>
              </div>
            </li>
            <li className="grid gap-3 py-6 sm:grid-cols-[5rem_1fr] sm:gap-6">
              <strong className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                Week 4
              </strong>
              <div>
                <h3 className="font-semibold text-foreground">
                  Run one channel, measure, and decide
                </h3>
                <p className="mt-2">
                  Use the system after hours or for overflow with one intake team.
                  Review every transcript and escalation. Compare time to acknowledgment,
                  time to human contact, wanted leads reached, signed cases, missed
                  escalations, corrections, and staff time with the Week 1 baseline.
                </p>
              </div>
            </li>
          </ol>

          <p className="text-sm leading-7 text-foreground/65">
            Introduce the pilot to staff as a capacity and response system, not a
            headcount exercise. Keep client data inside approved tools, avoid a long
            commitment before the workflow is proven, and do not expand until the
            intake system, phone, forms, and reporting share reliable data.
          </p>
          <p className="text-sm leading-7 text-foreground/60">
            This plan draws on PI operator discussions about{" "}
            <a
              href={sources.aiIntakeTriage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              beginning with intake triage
            </a>
            ,{" "}
            <a
              href={sources.aiIntakeTesting}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              testing real PI edge cases
            </a>
            ,{" "}
            <a
              href={sources.connectedFirmData}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              connecting firm data
            </a>
            , and{" "}
            <a
              href={sources.aiPrivacyAndReview}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              privacy, human review, and staff adoption
            </a>
            .
          </p>
        </section>

        <section className="mt-14 space-y-5">
          <h2
            id="good-start"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            What a good start looks like
          </h2>
          <p>
            After 30 days, you do not need an AI strategy deck or a firm-wide rollout.
            You need a named owner, one mapped intake workflow, a baseline, a set of
            difficult test calls, clear human-review rules, and evidence about whether
            qualified prospects reached the right person faster.
          </p>
          <p>
            That is enough to begin compounding. It also gives you something more
            valuable than enthusiasm: the ability to make the next AI decision from
            experience.
          </p>
          <p className="border-y border-primary/30 py-7 text-2xl font-semibold leading-10 text-foreground">
            Do not race to buy AI. Race to learn where it creates a real operating
            advantage in your firm.
          </p>
        </section>

        <section id="faq" className="mt-16 scroll-mt-24 border-t border-primary/30 pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            Common questions
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground">
            Starting without overbuilding
          </h2>
          <div className="mt-7 divide-y divide-primary/20 border-y border-primary/20">
            {faqs.map((faq) => (
              <section key={faq.question} className="py-6">
                <h3 className="text-xl font-semibold leading-8 text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-3">{faq.answer}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-primary/30 pt-10">
          <h2 className="text-3xl font-semibold leading-tight text-foreground">
            Find the first workflow
          </h2>
          <p className="mt-4 max-w-3xl">
            Possible Minds helps PI firms identify one operational leak, define what
            must remain human, and build a narrow system that can prove its value.
          </p>
          <Link
            href="/consult"
            className="mt-6 inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Request a workflow audit
          </Link>
        </section>
      </article>
    </div>
  );
}
