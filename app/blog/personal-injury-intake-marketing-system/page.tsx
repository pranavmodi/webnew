import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ClickBeacon from "@/components/analytics/click-beacon";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "personal-injury-intake-marketing-system";
const pageTitle = "How to Build a Personal Injury Intake System That Converts";
const metaTitle = `PI Intake System: Step-by-Step Guide | ${SITE_NAME}`;
const pageDescription =
  "A step-by-step guide for PI firm owners to improve intake response, qualification, follow-up, attribution, and signed-case conversion.";
const pageUrl = `${SITE_URL}/blog/${slug}`;
const heroImage = `${SITE_URL}/images/blog/pi-intake-marketing-system.png`;

const sources = {
  intake:
    "https://www.cjadvertising.com/blog/industry-trends/the-dos-and-donts-of-intake/",
  afterHours:
    "https://www.cjadvertising.com/blog/industry-trends/how-to-get-the-most-out-of-an-answering-service-for-your-firm/",
  websites:
    "https://www.cjadvertising.com/blog/our-services/why-most-law-firm-websites-dont-convert/",
  metrics:
    "https://www.cjadvertising.com/blog/industry-trends/the-marketing-kpis-you-need-to-be-tracking/",
  piMarketing:
    "https://www.cjadvertising.com/blog/law-firm-operations/why-personal-injury-marketing-isnt-like-other-industries/",
  ai:
    "https://www.cjadvertising.com/blog/cj-news/what-we-learned-evaluating-50-ai-tools-for-legal-marketing/",
  privacy:
    "https://www.cjadvertising.com/blog/law-firm-operations/the-data-privacy-stakes-for-personal-injury-firms/",
  rejected:
    "https://www.cjadvertising.com/blog/industry-trends/how-to-build-a-relationship-with-rejected-leads/",
  caseManagement:
    "https://www.cjadvertising.com/blog/industry-trends/how-effective-case-management-and-marketing-work-together/",
};

const faqs = [
  {
    question: "Why is intake part of marketing for a personal injury firm?",
    answer:
      "Marketing creates the opportunity, but intake determines whether the firm contacts, qualifies, and signs the right prospect. Intake data also tells marketing which sources produce wanted cases and eventual fees, not merely leads.",
  },
  {
    question: "How quickly should a PI firm respond to a new lead?",
    answer:
      "The operating goal should be immediate acknowledgment followed by fast human contact. cj Advertising has published a two-minute outbound-call standard after a web inquiry and three-ring call answering as firm benchmarks, not universal legal requirements.",
  },
  {
    question: "What should after-hours intake do?",
    answer:
      "After-hours intake should do more than record a message. It should follow firm-specific criteria, capture decisive facts, identify urgent or serious matters, escalate to the right person, and support remote signature when the firm authorizes it.",
  },
  {
    question: "Which PI intake metrics matter most?",
    answer:
      "Track every inquiry by source, time to meaningful human response, contact rate, wanted-lead rate, wanted-lead conversion, pre-signature drop-off, signed cases, and eventual case value or fee. Review quality and escalation accuracy alongside speed.",
  },
  {
    question: "How should a PI firm use AI in intake?",
    answer:
      "Use AI to detect, structure, route, remind, monitor, and measure. Keep empathy, legal judgment, case acceptance, sensitive conversations, and consequential closing decisions with trained people.",
  },
  {
    question: "What does Possible Minds Intake Agent do?",
    answer:
      "Intake Agent responds to calls, website conversations, and forms around the clock; captures essential facts; flags urgent inquiries; and creates an organized lead with the transcript, recording, tasks, and review issues. It prepares the intake team to follow up personally rather than replacing staff or making legal decisions.",
  },
];

const scorecard = [
  {
    label: "Response",
    measure: "Time to meaningful human contact, by source and hour",
  },
  {
    label: "Reach",
    measure: "Contact rate and aging of every no-contact inquiry",
  },
  {
    label: "Fit",
    measure: "Wanted-lead rate by campaign, case type, and market",
  },
  {
    label: "Conversion",
    measure: "Wanted leads signed, with the reason for every loss",
  },
  {
    label: "Quality",
    measure: "Call review, escalation accuracy, and avoidable friction",
  },
  {
    label: "Economics",
    measure: "Source to signed case to eventual fee, not cost per lead alone",
  },
];

const guideSteps = [
  { id: "audit-inquiries", label: "Audit 25 recent inquiries" },
  { id: "map-source-to-fee", label: "Map every lead from source to fee" },
  { id: "set-response-standard", label: "Set a human response standard" },
  { id: "build-after-hours", label: "Build an after-hours workflow" },
  { id: "remove-signup-friction", label: "Remove friction before signature" },
  { id: "assign-ownership", label: "Assign ownership and measure it" },
  { id: "add-ai", label: "Add AI at the right boundaries" },
  { id: "protect-relationship", label: "Protect the relationship and its data" },
];

const acquisitionStages = [
  { label: "Source", detail: "Campaign or channel" },
  { label: "Inquiry", detail: "Call, form, or chat" },
  { label: "Contact", detail: "Human response" },
  { label: "Wanted", detail: "Fits firm criteria" },
  { label: "Signed", detail: "Retainer complete" },
  { label: "Fee", detail: "Case economics" },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "personal injury law firm intake",
    "PI intake conversion",
    "law firm intake marketing",
    "personal injury intake automation",
    "after-hours intake for PI firms",
    "law firm intake metrics",
    "AI intake for personal injury firms",
    "legal intake management",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    images: [
      {
        url: heroImage,
        width: 1536,
        height: 1024,
        alt: "A human intake specialist responding to a new personal injury inquiry after hours",
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
      datePublished: "2026-08-07",
      dateModified: "2026-08-07",
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
        "personal injury law firm intake, PI intake conversion, intake marketing system, after-hours intake, AI intake",
      citation: Object.values(sources),
      mentions: {
        "@type": "Organization",
        name: "cj Advertising",
        url: "https://www.cjadvertising.com",
      },
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
      <ClickBeacon page="blog-pi-intake-marketing-system" />
      <JsonLd data={structuredData} />

      <header className="relative min-h-[590px] overflow-hidden border-b border-primary/15 sm:min-h-[650px]">
        <Image
          src="/images/blog/pi-intake-marketing-system.png"
          alt="A human intake specialist responding to a new personal injury inquiry after hours"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.84)_42%,rgba(0,0,0,0.22)_100%)]" />

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
              How to Build a Personal Injury Intake System That Converts
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-xl">
              Eight practical steps to connect marketing, fast human response,
              qualification, follow-up, signature, and case economics.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/65">
              <span>{post.author}</span>
              <span aria-hidden="true">/</span>
              <time dateTime="2026-08-07">{post.date}</time>
              <span aria-hidden="true">/</span>
              <span>{post.readTime}</span>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-foreground/70">
              An operating analysis of intake guidance published by{" "}
              <a
                href="https://www.cjadvertising.com/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline decoration-primary/45 underline-offset-4 transition hover:text-primary"
              >
                cj Advertising
              </a>
              , including work by Micki Love and its legal-marketing team.
            </p>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
        <section className="space-y-6">
          <p className="text-xl leading-9 text-foreground/95">
            Imagine that your firm pays to put its name in front of an injured
            person for weeks. She sees a television spot, searches for you after
            a crash, reads your reviews, and finally submits a form at 9:14 p.m.
          </p>
          <p>
            The marketing platform records a conversion. The agency records a
            lead. An automatic email promises that someone will respond during
            business hours. The prospect keeps looking and signs another firm
            before breakfast.
          </p>
          <p>
            On paper, marketing worked and intake received the inquiry. In
            economic terms, the system failed. The firm bought attention but did
            not convert it into trust, a conversation, or a signed case.
          </p>
          <p>
            That is the clearest lesson running through cj Advertising&apos;s
            intake writing: marketing and intake are not adjacent departments.
            They are one acquisition system. This guide turns that body of work
            into a sequence a PI firm owner can use to diagnose the current
            intake path, fix the operating model, and then add automation.
          </p>
        </section>

        <section className="my-12 border-y border-primary/25 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            In plain English
          </p>
          <p className="mt-4 text-lg leading-8 text-foreground/90">
            Personal injury intake is part of marketing because it determines
            whether paid attention becomes a signed case. A good system connects
            the source of every inquiry to human response, qualification,
            signature, case outcome, and eventual fee. AI can make that system
            faster and more observable, but people should still own empathy,
            judgment, escalation, and the close.
          </p>
        </section>

        <nav
          aria-labelledby="guide-contents"
          className="my-12 border-y border-primary/20 py-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            Contents
          </p>
          <h2
            id="guide-contents"
            className="mt-3 text-2xl font-semibold leading-tight text-foreground"
          >
            Build the system in eight steps
          </h2>
          <ol className="mt-6 grid gap-x-10 sm:grid-cols-2">
            {guideSteps.map((step, index) => (
              <li key={step.id} className="border-t border-primary/15">
                <a
                  href={`#${step.id}`}
                  className="group flex min-h-14 items-center gap-4 py-3 text-base leading-6 text-foreground/80 transition hover:text-primary"
                >
                  <span className="w-6 shrink-0 text-xs font-semibold text-primary/60 group-hover:text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{step.label}</span>
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
          id="audit-inquiries"
          className="scroll-mt-24 space-y-5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
            Step 1
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Audit 25 recent inquiries
          </h2>
          <p>
            Do not start with a vendor. Pull inquiries from different sources,
            hours, and case types. For each one, record when it arrived, when a
            person responded, whether facts were repeated, whether urgency was
            escalated, why the lead did or did not sign, and whether it can be
            traced to its eventual economics.
          </p>
          <p>
            The repeated failure is your first project. It may be an unmonitored
            form, a slow attorney handoff, weak follow-up, or missing attribution.
          </p>
        </section>

        <section
          id="map-source-to-fee"
          className="mt-14 scroll-mt-24 space-y-5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
            Step 2
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Map every lead from source to fee
          </h2>
          <p>
            Marketing and intake are one acquisition system. A low-cost campaign
            may produce poor-fit inquiries; a costly campaign may produce the
            firm&apos;s best cases. You cannot know at the lead stage.
          </p>
          <div className="my-8 border-y border-primary/30 py-8 sm:py-10">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-7 left-7 top-7 w-px bg-primary/45 lg:bottom-auto lg:left-[8.333%] lg:right-[8.333%] lg:top-7 lg:h-px lg:w-auto"
              />
              <ol className="relative grid gap-5 lg:grid-cols-6 lg:gap-0">
                {acquisitionStages.map((stage, index) => (
                  <li
                    key={stage.label}
                    className="flex min-h-16 items-center gap-5 lg:min-h-0 lg:flex-col lg:gap-4 lg:px-2 lg:text-center"
                  >
                    <span className="relative z-10 flex size-14 shrink-0 items-center justify-center border-2 border-primary bg-black text-sm font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-lg font-semibold leading-6 text-foreground">
                        {stage.label}
                      </span>
                      <span className="mt-1 block text-sm leading-5 text-foreground/65">
                        {stage.detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <p className="mt-8 border-t border-primary/15 pt-5 text-center text-sm font-medium text-primary sm:mt-10">
              One record from first touch to case economics
            </p>
          </div>
          <p>
            Keep one record across all six moments. cj Advertising&apos;s{" "}
            <a
              href={sources.metrics}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              KPI guidance
            </a>{" "}
            similarly emphasizes wanted leads, signed cases, and case value over
            lead volume alone.
          </p>
        </section>

        <section
          id="set-response-standard"
          className="mt-14 scroll-mt-24 space-y-5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
            Step 3
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Set a human response standard
          </h2>
          <p>
            An automated text acknowledges the inquiry. It does not replace the
            reassurance of a prepared person. Micki Love has recommended three-ring
            call answering and outbound calls within two minutes of a web inquiry.
            Those are cj&apos;s benchmarks, not universal legal standards.
          </p>
          <p>
            Use{" "}
            <Link
              href="/personal-injury/intake-automation"
              className={sourceLinkClass}
            >
              human-led AI intake automation
            </Link>{" "}
            to recognize the inquiry, structure the facts, flag urgency, and
            prepare the right closer. The goal is faster human contact, not a
            longer chatbot conversation. That matters because, as cj&apos;s{" "}
            <a
              href={sources.piMarketing}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              analysis of PI buyers
            </a>{" "}
            explains, the prospect is often in pain and making a high-stakes
            decision for the first time.
          </p>
        </section>

        <section
          id="build-after-hours"
          className="mt-14 scroll-mt-24 space-y-5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
            Step 4
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Build an after-hours workflow
          </h2>
          <p>
            Answering the phone is not enough. The night workflow should capture
            decisive facts, apply firm criteria, escalate serious injuries, support
            approved e-signature, and tell the morning team exactly what happened.
            That is the standard in cj&apos;s{" "}
            <a
              href={sources.afterHours}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              after-hours guidance
            </a>
            .
          </p>
          <p>
            Define who receives urgent alerts, who may authorize a retainer, and
            which facts require human review. A provider or AI system should
            execute those rules, not invent them. Start with a documented{" "}
            <Link
              href="/personal-injury/after-hours-intake"
              className={sourceLinkClass}
            >
              after-hours intake workflow
            </Link>
            .
          </p>
        </section>

        <section
          id="remove-signup-friction"
          className="mt-14 scroll-mt-24 space-y-5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
            Step 5
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Remove friction before signature
          </h2>
          <p>
            Long forms, repeated questions, unclear next steps, and desktop-only
            retainers create places for a qualified prospect to leave. Ask only
            what is needed to begin, explain what happens next, enable remote
            signature, and move the signed file promptly.
          </p>
          <p>
            Test it yourself: submit a mobile inquiry after hours and count every
            delay and repeated question before a meaningful conversation. cj&apos;s{" "}
            <a
              href={sources.websites}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              website analysis
            </a>{" "}
            treats this experience as the first serious evaluation of the firm.
          </p>
        </section>

        <section
          id="assign-ownership"
          className="mt-14 scroll-mt-24 space-y-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
            Step 6
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Assign ownership and measure it
          </h2>
          <p>
            Name an owner for every inquiry, a backup for every shift, and an
            attorney for serious-case escalation. cj&apos;s{" "}
            <a
              href={sources.intake}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              intake operating guidance
            </a>{" "}
            recommends the same clear chain of command and regular call review.
          </p>
          <p>
            One owner scorecard is enough:
          </p>
          <div className="divide-y divide-primary/20 border-y border-primary/20">
            {scorecard.map((item) => (
              <div
                key={item.label}
                className="grid gap-1 py-4 sm:grid-cols-[130px_1fr] sm:gap-6"
              >
                <p className="font-semibold text-primary">{item.label}</p>
                <p className="text-base leading-7 text-foreground/75">
                  {item.measure}
                </p>
              </div>
            ))}
          </div>
          <p>
            Read the measures together. Speed is not a win if quality falls, and
            low cost per lead is not efficiency if the source produces weak cases.
          </p>
        </section>

        <section id="add-ai" className="mt-14 scroll-mt-24 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
            Step 7
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Add AI at the right boundaries
          </h2>
          <p>
            AI can detect inquiries, structure facts, identify missing information,
            flag urgency, assign response targets, maintain follow-up, and analyze
            calls. People should own empathy, case acceptance, legal judgment,
            consequential escalation, and the close.
          </p>
          <p>
            Follow the sequence in cj&apos;s{" "}
            <a
              href={sources.ai}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              AI evaluation guidance
            </a>
            : choose one failure, test narrowly, measure the operational result,
            and scale only after the behavior is reliable.
          </p>
          <div className="border-l-2 border-primary/50 pl-5 sm:pl-6">
            <h3 className="text-xl font-semibold text-foreground">
              Where Intake Agent fits
            </h3>
            <p className="mt-3 text-base leading-7 text-foreground/75">
              Possible Minds{" "}
              <Link
                href="/personal-injury/intake-automation"
                className={sourceLinkClass}
              >
                Intake Agent
              </Link>{" "}
              responds to calls, website conversations, and forms around the
              clock, especially after hours. It captures essential facts, flags
              urgent or promising inquiries, acknowledges the prospect, and
              creates an organized lead with the transcript, call recording,
              follow-up tasks, and issues requiring human attention.
            </p>
            <p className="mt-3 text-base leading-7 text-foreground/75">
              It does not accept cases or replace the intake team. It gives staff
              a prepared record so they can follow up personally and win the
              client.
            </p>
          </div>
        </section>

        <section
          id="protect-relationship"
          className="mt-14 scroll-mt-24 space-y-5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
            Step 8
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Protect the relationship and its data
          </h2>
          <p>
            Intake may collect injury, medical, insurance, and financial details
            before an attorney-client relationship exists. Treat that information
            as sensitive from the start, as cj&apos;s{" "}
            <a
              href={sources.privacy}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              privacy guidance for PI firms
            </a>{" "}
            recommends. Set access, retention, consent, and vendor controls with
            qualified counsel and a practical{" "}
            <Link
              href="/personal-injury/vendor-risk-governance"
              className={sourceLinkClass}
            >
              vendor-risk framework
            </Link>
            .
          </p>
          <p>
            Preserve trust when the firm declines a matter through clear
            non-engagement and careful referrals, consistent with cj&apos;s guidance on{" "}
            <a
              href={sources.rejected}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              rejected leads
            </a>
            . After signature, prompt onboarding and strong{" "}
            <a
              href={sources.caseManagement}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              case management
            </a>{" "}
            create the reviews and referrals that feed the next acquisition cycle.
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
            This essay synthesizes public intake, marketing, AI, and privacy
            guidance from cj Advertising. Its published benchmarks are
            identified as cj&apos;s recommendations rather than universal industry
            standards. Possible Minds is not affiliated with cj Advertising.
          </p>
        </section>
      </article>

      <section className="mt-20 border-y border-primary/20 bg-[#03110b]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
            Audit the system
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#00ff41]">
            Find where qualified inquiries lose momentum.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-foreground/70">
            We map the path from inquiry to human response and signature, then
            show where Intake Agent can recover missed opportunities without
            replacing the people who close them.
          </p>
          <Link
            href="/consult"
            className="mt-7 inline-flex min-h-11 items-center bg-[#00ff41] px-6 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
          >
            Discuss an intake audit
          </Link>
        </div>
      </section>
    </div>
  );
}
