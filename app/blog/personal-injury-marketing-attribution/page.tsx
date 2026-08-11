import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ClickBeacon from "@/components/analytics/click-beacon";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "personal-injury-marketing-attribution";
const pageTitle =
  "Marketing Attribution for PI Firms: Follow the Case, Not the Click";
const metaTitle = `PI Law Firm Marketing Attribution Guide | ${SITE_NAME}`;
const pageDescription =
  "Learn how PI firms can connect marketing sources to wanted, signed, and kept cases, then preserve attribution through intake with Lead Docket.";
const pageUrl = `${SITE_URL}/blog/${slug}`;
const heroImage = `${SITE_URL}/images/blog/pi-intake-marketing-system.png`;

const sources = {
  yaniEpisode: "https://mission.getpossibleminds.com/podcasts/6924",
  twoDashboards: "https://mission.getpossibleminds.com/podcasts/317",
  roiEpisode: "https://mission.getpossibleminds.com/podcasts/3746",
  keptCacEpisode: "https://mission.getpossibleminds.com/podcasts/4348",
  sourceRules:
    "https://support.leaddocket.com/hc/en-us/articles/4407176524443-Source-Rules",
  opportunitySources:
    "https://support.leaddocket.com/hc/en-us/articles/360045899851-Integrating-Opportunity-Sources",
  thirdParty:
    "https://support.leaddocket.com/hc/en-us/articles/360045902691-Integrating-Third-Party-Sources-With-Lead-Docket",
  glossary:
    "https://support.leaddocket.com/hc/en-us/articles/360045640191-Glossary",
  agencyReport:
    "https://support.leaddocket.com/hc/en-us/articles/360045905651-Agency-Report-Leads",
  revenueReport:
    "https://support.leaddocket.com/hc/en-us/articles/360045905551-Revenue-By-Marketing-Source-Contact-Source-Case-Type-and-Attorney-Reports",
  feesReport:
    "https://support.leaddocket.com/hc/en-us/articles/360045720051-Settlements-Report",
};

const faqs = [
  {
    question: "What is marketing attribution for a personal injury law firm?",
    answer:
      "Marketing attribution is the process of preserving evidence about how an inquiry found and contacted the firm, then connecting that record to qualification, signature, retention, and eventual fee outcomes.",
  },
  {
    question: "Can a PI firm achieve perfect marketing attribution?",
    answer:
      "Usually not. A prospect may encounter several channels before contacting the firm. The goal is useful attribution: retain first-party source evidence, ask the prospect what they remember, preserve both, and make decisions from patterns rather than false certainty.",
  },
  {
    question:
      "What is the difference between Marketing Source and Contact Source in Lead Docket?",
    answer:
      "Marketing Source describes how the prospect heard about the firm. Contact Source describes how the prospect made contact. Opportunity Source identifies the integration that delivered the inquiry. These fields may be different and should not be collapsed into one label.",
  },
  {
    question: "What happens when a prospect changes their callback number?",
    answer:
      "Update the preferred contact number without overwriting the original opportunity evidence. The source trail should remain attached to the inquiry through URLs, UTM parameters, timestamps, integration details, and original phone data where available.",
  },
  {
    question: "Can Lead Docket report revenue by marketing source?",
    answer:
      "Yes. Lead Docket documents reports for revenue and fees by Marketing Source and other criteria. Those reports are only as reliable as the source, status, and financial data maintained in the system.",
  },
  {
    question: "How can AI improve law firm marketing attribution?",
    answer:
      "AI can reconcile identifiers, detect missing source fields, flag conflicting classifications, and connect intake activity to later outcomes. It should preserve evidence and confidence levels rather than inventing a source when the record is incomplete.",
  },
];

const attributionStages = [
  { label: "Source", detail: "Campaign or referral" },
  { label: "Opportunity", detail: "Call, form, or chat" },
  { label: "Response", detail: "Human contact" },
  { label: "Wanted", detail: "Firm criteria" },
  { label: "Signed", detail: "Retainer" },
  { label: "Kept", detail: "Case retained" },
  { label: "Fee", detail: "Collected value" },
];

const contents = [
  { id: "why-attribution-matters", label: "Why attribution matters" },
  { id: "two-dashboards", label: "The two-dashboard problem" },
  { id: "useful-not-perfect", label: "Useful truth, not perfect certainty" },
  { id: "identity-problem", label: "Why changed contact details break reports" },
  { id: "lead-docket", label: "How to configure Lead Docket" },
  { id: "owner-dashboard", label: "What the owner should review" },
  { id: "ai-role", label: "Where AI helps" },
];

const leadDocketSteps = [
  {
    title: "Separate the three source fields",
    body:
      "Marketing Source is how the prospect heard about the firm. Contact Source is how the prospect reached the firm. Opportunity Source is the integration that delivered the inquiry. Preserve all three.",
  },
  {
    title: "Send every inquiry into Lead Docket",
    body:
      "Website forms, chat, after-hours services, lead providers, social forms, and phone workflows should create an Opportunity automatically. Manual entry should be the exception, not the normal path.",
  },
  {
    title: "Capture the raw source evidence",
    body:
      "Map the current URL, referral URL, landing page, UTM values, campaign identifiers, timestamps, and original phone details into standard or custom fields. Retain the original payload in notes when useful for troubleshooting.",
  },
  {
    title: "Create Source Rules",
    body:
      "Use URL fragments and UTM values to assign Marketing Source and Contact Source consistently. Test rule precedence and remember that edited rules apply to future records, not historical ones.",
  },
  {
    title: "Update identity without rewriting origin",
    body:
      "When intake learns a better callback number or email address, update the contact record. Do not replace the source evidence that arrived with the original Opportunity.",
  },
  {
    title: "Make outcome discipline non-negotiable",
    body:
      "Every inquiry needs a record, an owner, a wanted or unwanted decision, a signed or lost outcome, and a specific reason when it does not progress. Review exceptions instead of allowing records to disappear.",
  },
  {
    title: "Close the loop with reports",
    body:
      "Validate Opportunities by source, compare wanted and signed leads, then connect financial outcomes through revenue and fee reports. The result should move from volume to case economics.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "personal injury law firm marketing attribution",
    "PI law firm marketing ROI",
    "Lead Docket attribution",
    "Lead Docket marketing source",
    "law firm lead tracking",
    "cost per signed case",
    "personal injury intake analytics",
    "legal marketing attribution",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-08-11",
    modifiedTime: "2026-08-11",
    authors: ["Pranav Modi"],
    images: [
      {
        url: heroImage,
        width: 1536,
        height: 1024,
        alt: "A personal injury intake team reviewing lead sources and case outcomes",
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
      datePublished: "2026-08-11",
      dateModified: "2026-08-11",
      author: {
        "@type": "Person",
        name: post.author,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: pageUrl,
      articleSection: "Intake Operations",
      keywords:
        "personal injury marketing attribution, Lead Docket attribution, law firm marketing ROI, cost per signed case, intake analytics",
      citation: Object.values(sources),
      mentions: [
        {
          "@type": "Person",
          name: "Yani Smith",
          sameAs: "https://www.linkedin.com/in/yanismith",
        },
        {
          "@type": "Person",
          name: "Maria Monroy",
          sameAs: "https://www.linkedin.com/in/maria-monroy-1492ab356",
        },
        {
          "@type": "SoftwareApplication",
          name: "Lead Docket",
          url: "https://www.leaddocket.com",
        },
      ],
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

  const sourceLinkClass =
    "text-primary underline decoration-primary/35 underline-offset-4 transition hover:decoration-primary";

  return (
    <div className="bg-black pb-24">
      <ClickBeacon page="blog-pi-marketing-attribution" />
      <JsonLd data={structuredData} />

      <header className="relative min-h-[590px] overflow-hidden border-b border-primary/15 sm:min-h-[650px]">
        <Image
          src="/images/blog/pi-intake-marketing-system.png"
          alt="A personal injury intake team reviewing lead sources and case outcomes"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.87)_46%,rgba(0,0,0,0.28)_100%)]" />

        <div className="relative mx-auto flex min-h-[590px] max-w-4xl flex-col justify-end px-4 pb-14 pt-24 sm:min-h-[650px] sm:px-6 sm:pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs text-foreground/70">
              <Link href="/blog" className="transition hover:text-primary">
                Blog
              </Link>
              <span className="text-primary/50">/</span>
              <span>Intake Operations</span>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#00ff41]">
              A guide for PI firm owners
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Marketing Attribution for PI Firms: Follow the Case, Not the Click
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-xl">
              Connect first touch, intake, signed cases, and fees without pretending
              that one channel deserves all the credit.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/65">
              <span>{post.author}</span>
              <span aria-hidden="true">/</span>
              <time dateTime="2026-08-11">{post.date}</time>
              <span aria-hidden="true">/</span>
              <span>{post.readTime}</span>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-foreground/70">
              Drawn from PI intake and marketing podcast conversations, including
              guidance from{" "}
              <a
                href="https://www.linkedin.com/in/yanismith"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline decoration-primary/45 underline-offset-4 transition hover:text-primary"
              >
                Yani Smith
              </a>{" "}
              and{" "}
              <a
                href="https://www.linkedin.com/in/maria-monroy-1492ab356"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline decoration-primary/45 underline-offset-4 transition hover:text-primary"
              >
                Maria Monroy
              </a>
              .
            </p>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
        <section className="space-y-6">
          <p className="text-xl leading-9 text-foreground/95">
            Marketing attribution matters because the decisions built on it are
            expensive. A PI firm may spend heavily on a source that appears to
            generate cheap leads, then discover that few become wanted or signed
            cases. Another source may look costly at the top of the funnel while
            producing the firm&apos;s most valuable matters.
          </p>
          <p>
            Without attribution, both sources look like marketing questions. They
            may actually be intake questions, staffing questions, case-selection
            questions, or data-quality questions.
          </p>
          <p>
            The agency sees impressions, calls, and forms. Intake sees conversations
            and retainers. The case team sees files that survive. Finance sees fees
            years later. Each group can report its slice accurately while the owner
            still cannot answer the basic question: what did this source create for
            the firm?
          </p>
          <p>
            Attribution is the connective tissue. It lets a firm allocate budget,
            diagnose conversion failures, hold vendors and teams to the same
            definitions, and measure acquisition against case economics.
          </p>
        </section>

        <section className="my-12 border-y border-primary/25 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            In plain English
          </p>
          <p className="mt-4 text-lg leading-8 text-foreground/90">
            PI marketing attribution means preserving evidence from first touch to
            collected fee. It does not require pretending that one advertisement
            caused the hire. It should reliably show which sources produce wanted,
            signed, and kept cases, where good opportunities are lost, and what
            those cases eventually contribute.
          </p>
        </section>

        <nav
          aria-labelledby="article-contents"
          className="my-12 border-y border-primary/20 py-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            Contents
          </p>
          <h2
            id="article-contents"
            className="mt-3 text-2xl font-semibold leading-tight text-foreground"
          >
            Build a source-to-fee view
          </h2>
          <ol className="mt-6 grid gap-x-10 sm:grid-cols-2">
            {contents.map((item, index) => (
              <li key={item.id} className="border-t border-primary/15">
                <a
                  href={`#${item.id}`}
                  className="group flex min-h-14 items-center gap-4 py-3 text-base leading-6 text-foreground/80 transition hover:text-primary"
                >
                  <span className="w-6 shrink-0 text-xs font-semibold text-primary/60 group-hover:text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
          <a
            href="#faq"
            className="mt-5 inline-flex text-sm font-medium text-primary underline decoration-primary/35 underline-offset-4 transition hover:decoration-primary"
          >
            Jump to common questions
          </a>
        </nav>

        <section
          id="why-attribution-matters"
          className="scroll-mt-24 space-y-6"
        >
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Attribution tells you what to fix
          </h2>
          <p>
            Lead volume alone cannot distinguish four very different problems. A
            source may produce the wrong cases. The firm may respond too slowly.
            Intake may misclassify wanted matters. Or good signed cases may later
            fall out of the portfolio.
          </p>
          <div className="divide-y divide-primary/20 border-y border-primary/20">
            {[
              ["Budget", "Which sources deserve more, less, or different spend?"],
              ["Intake", "Where do qualified opportunities stop progressing?"],
              ["Accountability", "Are marketing and intake using the same definitions?"],
              ["Economics", "Which sources produce kept cases and collected fees?"],
            ].map(([label, question]) => (
              <div
                key={label}
                className="grid gap-1 py-4 sm:grid-cols-[140px_1fr] sm:gap-6"
              >
                <p className="font-semibold text-primary">{label}</p>
                <p className="text-base leading-7 text-foreground/75">{question}</p>
              </div>
            ))}
          </div>
          <p>
            This is why the right unit is not merely cost per lead. It is the path
            from source to wanted lead, signed case, kept case, and eventual fee.
          </p>
        </section>

        <section id="two-dashboards" className="mt-14 scroll-mt-24 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            The two-dashboard problem
          </h2>
          <p>
            A 2026 episode of Lunch Hour Legal Marketing offers a useful warning.
            In{" "}
            <a
              href={sources.twoDashboards}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              A Tale of Two Dashboards
            </a>
            , Conrad Saam and Gyi Tsakalakis described an $11,500 campaign that
            generated 64 leads. After reviewing the calls, the agency believed 27
            were qualified. The firm said the campaign produced no signed cases.
          </p>
          <p>
            The lesson is not that one side was right. The agency measured cost per
            lead. The owner cared about cost per client. There was no shared signal
            for what the firm considered wanted, what happened after intake, or how
            those outcomes returned to the marketing view.
          </p>
          <p>
            When those definitions and records are disconnected, good marketing can
            be cut because intake failed. Weak marketing can survive because it
            generates activity. And the firm can change agencies without repairing
            the operating problem that follows it.
          </p>
        </section>

        <section id="useful-not-perfect" className="mt-14 scroll-mt-24 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Aim for useful truth, not perfect certainty
          </h2>
          <p>
            A PI prospect may see a billboard, hear the firm&apos;s name from a friend,
            read reviews, search on Google, visit a location page, and call days
            later. Assigning all credit to the first or last recorded touch is tidy,
            but it is not the same as understanding the decision.
          </p>
          <p>
            In his episode on{" "}
            <a
              href={sources.roiEpisode}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              why law-firm marketing ROI is difficult to track
            </a>
            , Chris Dreyer recommends combining system evidence with an open-ended
            intake question: how did you hear about us? The structured trail shows
            what the system observed. The prospect&apos;s answer adds what they
            remembered. Neither should erase the other.
          </p>
          <p>
            Attribution becomes more reliable at volume. One disputed case should
            not move a budget. Repeated patterns across source evidence, prospect
            recall, wanted-case rate, signed cases, and fees can.
          </p>

          <div className="my-9 border-y border-primary/30 py-8 sm:py-10">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-7 left-7 top-7 w-px bg-primary/45 lg:bottom-auto lg:left-[7.142%] lg:right-[7.142%] lg:top-7 lg:h-px lg:w-auto"
              />
              <ol className="relative grid gap-5 lg:grid-cols-7 lg:gap-0">
                {attributionStages.map((stage, index) => (
                  <li
                    key={stage.label}
                    className="flex min-h-16 items-center gap-5 lg:min-h-0 lg:flex-col lg:gap-4 lg:px-1 lg:text-center"
                  >
                    <span className="relative z-10 flex size-14 shrink-0 items-center justify-center border-2 border-primary bg-black text-sm font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-base font-semibold leading-6 text-foreground">
                        {stage.label}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-foreground/65">
                        {stage.detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <p className="mt-8 border-t border-primary/15 pt-5 text-center text-sm font-medium text-primary sm:mt-10">
              One evidence trail from first touch to collected value
            </p>
          </div>
        </section>

        <section id="identity-problem" className="mt-14 scroll-mt-24 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            The source should survive a changed phone number
          </h2>
          <p>
            In a Tip the Scales conversation, Maria Monroy raised a common failure.
            A prospect may call from an office phone or a relative&apos;s device, then
            give the intake specialist a different number for future contact. If
            attribution depends on matching one phone field later, the trail breaks.
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/yanismith"
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              Yani Smith
            </a>{" "}
            explained that her team&apos;s Lead Docket setup preserves multiple data
            points: the referral and current URLs, UTM values, the page involved,
            the number used, and the contact information gathered by intake. The
            full conversation is available in her{" "}
            <a
              href={sources.yaniEpisode}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              intake optimization episode
            </a>
            .
          </p>
          <p>
            The operating principle is simple: source evidence belongs to the
            opportunity, not to one mutable identity field. Update the preferred
            callback number. Keep the original trail.
          </p>
        </section>

        <section id="lead-docket" className="mt-14 scroll-mt-24 space-y-7">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            How to use Lead Docket for attribution
          </h2>
          <p>
            Lead Docket can serve as the intake system of record, but installing it
            does not make attribution accurate. The configuration and the team&apos;s
            data discipline do that.
          </p>

          <div className="divide-y divide-primary/20 border-y border-primary/20">
            {leadDocketSteps.map((step, index) => (
              <section
                key={step.title}
                className="grid gap-3 py-6 sm:grid-cols-[52px_1fr] sm:gap-6"
              >
                <p className="text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-foreground/75">
                    {step.body}
                  </p>
                </div>
              </section>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-foreground">
            The Lead Docket mechanics behind the setup
          </h3>
          <p>
            Lead Docket&apos;s{" "}
            <a
              href={sources.glossary}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              official glossary
            </a>{" "}
            separates Marketing Source, Contact Source, and Opportunity Source.
            Its integration documentation supports creating Opportunities from
            sources such as website forms, web chat, answering services, lead
            providers, and social forms, with incoming values mapped to standard
            or custom fields.
          </p>
          <p>
            For digital attribution, Lead Docket&apos;s{" "}
            <a
              href={sources.sourceRules}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              Source Rules
            </a>{" "}
            can assign Marketing Source and Contact Source from matching URLs or
            UTM values. Test overlapping rules carefully: the documentation says
            the most recently added matching rule takes precedence, and edits
            affect future records rather than rewriting historical ones.
          </p>
          <p>
            When configuring an external source, enable enough raw detail to audit
            the mapping. Lead Docket&apos;s guide to{" "}
            <a
              href={sources.opportunitySources}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              integrating Opportunity sources
            </a>{" "}
            explains how incoming fields can be shown in Opportunity notes and
            mapped into existing or custom fields. Send a test from every real
            path, including mobile and after hours, before trusting the reports.
          </p>
        </section>

        <section id="owner-dashboard" className="mt-14 scroll-mt-24 space-y-7">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            What the owner should review
          </h2>
          <p>
            A useful attribution dashboard does not stop at leads, and it does not
            hide counts behind percentages. Review each source across the same
            operating and economic measures.
          </p>
          <div className="divide-y divide-primary/20 border-y border-primary/20">
            {[
              ["Opportunity", "How many inquiries arrived, and was the source complete?"],
              ["Response", "How quickly did a prepared person make contact?"],
              ["Wanted", "How many met the firm's documented criteria?"],
              ["Signed", "How many wanted matters completed a retainer?"],
              ["Kept", "How many remained viable after early case development?"],
              ["Economics", "What fees were collected, and how long did monetization take?"],
            ].map(([label, question]) => (
              <div
                key={label}
                className="grid gap-1 py-4 sm:grid-cols-[140px_1fr] sm:gap-6"
              >
                <p className="font-semibold text-primary">{label}</p>
                <p className="text-base leading-7 text-foreground/75">{question}</p>
              </div>
            ))}
          </div>
          <p>
            This is also where the idea of kept-case acquisition cost becomes
            useful. In a podcast discussion of{" "}
            <a
              href={sources.keptCacEpisode}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              PI firm unit economics
            </a>
            , Anthony Lopez emphasized that acquisition cost, case fallout, time on
            desk, and the labor required to resolve a case all affect profitability.
            A signed case is an important milestone, not the final economic answer.
          </p>
          <p>
            Lead Docket provides an{" "}
            <a
              href={sources.agencyReport}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              Agency Report
            </a>{" "}
            with leads, wanted leads, signed leads, and source breakdowns without
            financial information. Internally, the firm can use documented{" "}
            <a
              href={sources.revenueReport}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              revenue-by-source
            </a>{" "}
            and{" "}
            <a
              href={sources.feesReport}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              fee reports
            </a>
            . Those reports become decision-grade only when source, status, and
            financial data are complete.
          </p>
        </section>

        <section id="ai-role" className="mt-14 scroll-mt-24 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            AI should reconcile the evidence, not invent it
          </h2>
          <p>
            Attribution creates a useful role for AI. An agent can compare source
            payloads, UTM values, referral URLs, call metadata, contact updates,
            intake notes, statuses, and downstream outcomes. It can flag missing
            fields, likely duplicates, conflicting classifications, and records
            that stopped moving.
          </p>
          <p>
            It should not silently guess a source. The system should preserve the
            supporting evidence, state its confidence, and route uncertain matches
            for human review. That same boundary applies to the broader{" "}
            <Link
              href="/blog/personal-injury-intake-marketing-system"
              className={sourceLinkClass}
            >
              PI intake operating system
            </Link>
            : AI can detect, structure, route, remind, and measure. People own
            judgment, case acceptance, and the relationship.
          </p>
          <p>
            Start with a discrepancy audit. Compare the last 50 inquiries across
            the original source evidence, Lead Docket record, signed matter, and
            available fee data. The repeated gaps will tell you whether the first
            project is integration, taxonomy, staff workflow, identity matching,
            or outcome synchronization.
          </p>
        </section>

        <section id="faq" className="mt-16 scroll-mt-24">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Questions PI firm owners ask
          </h2>
          <div className="mt-8 divide-y divide-primary/20 border-y border-primary/20">
            {faqs.map((faq) => (
              <section key={faq.question} className="py-6">
                <h3 className="text-lg font-semibold text-primary">
                  {faq.question}
                </h3>
                <p className="mt-3 text-base leading-7 text-foreground/75">
                  {faq.answer}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-primary/20 pt-8 text-sm leading-7 text-foreground/60">
          <h2 className="text-base font-semibold text-primary">Source note</h2>
          <p className="mt-3">
            This article synthesizes public podcast conversations and Lead Docket&apos;s
            official product documentation. Podcast examples are presented as the
            speakers&apos; accounts and operating guidance, not universal benchmarks.
            Lead Docket capabilities and menu paths should be validated against the
            firm&apos;s current account and configuration.
          </p>
        </section>
      </article>

      <section className="mt-20 border-y border-primary/20 bg-[#03110b]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
            Audit the evidence trail
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#00ff41]">
            Find where source data and case outcomes stop agreeing.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-foreground/70">
            Possible Minds reconciles the path from first inquiry through Lead
            Docket, human response, signature, and case economics, then identifies
            the narrowest useful automation.
          </p>
          <Link
            href="/consult"
            className="mt-7 inline-flex min-h-11 items-center bg-[#00ff41] px-6 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
          >
            Discuss an attribution audit
          </Link>
        </div>
      </section>
    </div>
  );
}
