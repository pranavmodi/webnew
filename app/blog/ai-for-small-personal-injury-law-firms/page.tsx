import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

const slug = "ai-for-small-personal-injury-law-firms";
const pageTitle =
  "How a Small PI Firm Built Its Own AI Advantage Without Giving Up Control";
const metaTitle = "How a Small PI Firm Built Its Own AI Advantage";
const pageDescription =
  "How one PI lawyer used Claude skills and a protected medical-record system to save time, move cases faster, and keep lawyers in control.";
const pageUrl = `${SITE_URL}/blog/${slug}`;
const heroImage = `${SITE_URL}/images/blog/small-pi-firm-ai-workflows.webp`;

const sources = {
  anthropicBaa:
    "https://privacy.claude.com/en/articles/8114513-business-associate-agreements-baa-for-commercial-customers",
  awsHipaa: "https://aws.amazon.com/compliance/hipaa-eligible-services-reference/",
  vercelHipaa: "https://vercel.com/kb/guide/hipaa-compliance-guide-vercel",
  hhsDeidentification:
    "https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html",
};

const contents = [
  { id: "owner-appeal", label: "More work reaches lawyer review" },
  { id: "possible-workflows", label: "Hours of assembly collapse into minutes" },
  { id: "small-firm-advantage", label: "The firm's best work becomes reusable" },
  { id: "safe-boundary", label: "Medical records stay in a protected lane" },
  { id: "first-system", label: "Value arrives before a firm-wide rollout" },
  { id: "human-control", label: "Clients get speed without losing judgment" },
];

const faqs = [
  {
    question: "What is the best first AI workflow for a small PI firm?",
    answer:
      "Start with a frequent, repetitive document workflow that has clear inputs, a known good output, and mandatory lawyer review. A scheduling packet, standard motion, or structured demand section is usually easier to govern than an autonomous client-facing workflow.",
  },
  {
    question: "Can a small PI firm use AI to summarize medical records?",
    answer:
      "Yes, but identifiable medical records should be processed only inside an appropriately contracted and configured environment. The firm must control access, retention, logging, vendors, and human review rather than assuming that the model alone is HIPAA compliant.",
  },
  {
    question: "Can medical summaries be moved from Bedrock into Claude Cowork?",
    answer:
      "Only when the summary has been properly de-identified and the firm has approved that use. Removing a name or birth date alone may not be enough because treatment dates and distinctive facts can still identify the client.",
  },
  {
    question: "Does a small firm need to train its own AI model?",
    answer:
      "Usually not. Most firms need a reusable workflow around an existing model: approved source documents, clear instructions, a required output format, review gates, and a record of what the system did.",
  },
  {
    question: "What should a lawyer review before using AI-generated work?",
    answer:
      "The lawyer should verify facts, citations, dates, deadlines, calculations, omissions, strategic choices, confidentiality, and whether the document accurately reflects the record and the firm's professional judgment.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "AI for small personal injury law firms",
    "personal injury law firm AI",
    "AI legal document workflow",
    "AI medical record summaries",
    "AI demand letter workflow",
    "HIPAA compliant legal AI",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-08-25",
    modifiedTime: "2026-08-25",
    authors: ["Pranav Modi"],
    images: [
      {
        url: heroImage,
        width: 1536,
        height: 1024,
        alt: "A small personal injury law firm reviewing AI-assisted legal work",
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
      datePublished: "2026-08-25",
      dateModified: "2026-08-25",
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
        "AI for small personal injury law firms, legal AI workflows, medical record summaries, demand preparation, HIPAA compliant AI",
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
    <div className="-mt-4 bg-black pb-24">
      <ClickBeacon page="blog-ai-for-small-personal-injury-law-firms" />
      <JsonLd data={structuredData} />

      <header className="relative min-h-[590px] overflow-hidden border-b border-primary/20 sm:min-h-[660px]">
        <Image
          src="/images/blog/small-pi-firm-ai-workflows.webp"
          alt="A small personal injury law firm reviewing AI-assisted legal work"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.9)_43%,rgba(0,0,0,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black to-transparent" />

        <div className="relative mx-auto flex min-h-[590px] max-w-4xl flex-col justify-end px-4 pb-14 pt-28 sm:min-h-[660px] sm:px-6 sm:pb-20">
          <div>
            <div className="flex items-center gap-3 text-xs text-foreground/70">
              <Link href="/blog" className="transition hover:text-primary">
                Blog
              </Link>
              <span className="text-primary/50">/</span>
              <span>AI Strategy</span>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#00ff41]">
              A small firm case study
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              How a Small PI Firm Built Its Own AI Advantage Without Giving Up
              Control
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-xl">
              More review-ready documents. Faster demands. Deeper expert
              research. Protected medical data. The lawyer still decides what
              leaves the firm.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/65">
              <span>{post.author}</span>
              <span aria-hidden="true">/</span>
              <time dateTime="2026-08-25">{post.date}</time>
              <span aria-hidden="true">/</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
        <div className="border-y border-primary/30 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            In plain English
          </p>
          <p className="mt-4 text-xl leading-9 text-foreground/95 sm:text-2xl sm:leading-10">
            A San Antonio trial lawyer turned his firm&apos;s recurring work into
            reusable Claude workflows. Routine court documents reached review
            sooner, medical records became structured summaries, demands moved
            faster, and public expert statements became searchable. A separate
            protected application handled identifiable medical data, while the
            lawyer retained final control.
          </p>
        </div>
      </section>

      <BlogTableOfContents items={contents} faqHref="#faq" />

      <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
        <section className="space-y-6">
          <p className="text-xl leading-9 text-foreground/95">
            The most persuasive part of a recent AI walkthrough was not the
            model. It was how quickly the technology disappeared into the work.
          </p>
          <p>
            He runs a small personal injury litigation firm in San Antonio. He
            has a lean team, a trial practice, and four young children at home.
            His scarce resource is not access to legal intelligence. It is the
            time required to turn that intelligence into finished work across
            every file.
          </p>
          <p>
            His goal was straightforward: help the same team produce more
            review-ready work, move cases sooner, and preserve the judgment and
            client responsibility that belong with the lawyer.
          </p>
        </section>

        <section id="owner-appeal" className="mt-14 scroll-mt-24 space-y-5">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            More review-ready work from the same team
          </h2>
          <p>
            Large firms can assign an innovation team to experiment for a year.
            A small PI firm needs value to appear inside the work week. A motion
            should reach review sooner. A demand should stop waiting on a blank
            page. A paralegal should spend less time rebuilding a chronology the
            records already contain.
          </p>
          <p>
            The lawyer reported that his assistants previously produced roughly
            five to seven documents for review on a typical day. With the new
            workflows, he was seeing roughly 12 to 15. That is a self-reported
            result from one firm, not a universal benchmark. But it captures the
            value clearly: staff spend less time assembling, and the lawyer
            spends more time reviewing substance.
          </p>
          <p>
            That distinction matters. The small-firm opportunity is not to remove
            the lawyer. It is to stop making the lawyer and staff repeat work the
            firm has already learned how to do.
          </p>
        </section>

        <section id="possible-workflows" className="mt-14 scroll-mt-24 space-y-8">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
              Hours of assembly collapse into minutes
            </h2>
            <p>
              The firm did not build one giant autonomous agent. It built several
              bounded workflows, each with known inputs, a useful first output,
              and a clear human review point.
            </p>
          </div>

          <div className="divide-y divide-primary/20 border-y border-primary/25">
            {[
              {
                number: "01",
                title: "About 10 minutes to a first scheduling packet",
                body: "The firm supplies the petition, the defendant's answer, and trial-date availability. The lawyer said a saved Claude skill can prepare the proposed docket control order, agreed motion, and notice of hearing in about 10 minutes. He still checks every deadline before filing.",
              },
              {
                number: "02",
                title: "A medical chronology without rebuilding every record",
                body: "The custom portal can accept a multi-file record set, organize dates of service, diagnoses, procedures, complaints, and recommendations, and produce a reviewable treatment summary. In the demonstration, a small mock packet processed in about five minutes; larger files can take longer. Staff verify the result against the records.",
              },
              {
                number: "03",
                title: "Demand packages reach lawyer review sooner",
                body: "A reusable skill combines the crash report, petition, photographs, witness material, damages information, applicable rules, adjuster details, and an approved medical summary. Faster assembly can help the firm send demands and resolve appropriate cases sooner, while creating capacity for more clients and referral matters.",
              },
              {
                number: "04",
                title: "Expert preparation becomes broader and faster",
                body: "The system compares an opposing doctor's report and prior testimony with public videos and transcripts. It identifies possible inconsistencies and exact timestamps, giving the lawyer a practical research lead to verify before the deposition.",
              },
            ].map((workflow) => (
              <div
                key={workflow.number}
                className="grid gap-3 py-7 sm:grid-cols-[4rem_1fr] sm:gap-6"
              >
                <span className="text-sm font-semibold text-primary/65">
                  {workflow.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold leading-7 text-foreground">
                    {workflow.title}
                  </h3>
                  <p className="mt-3">{workflow.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="small-firm-advantage" className="mt-14 scroll-mt-24 space-y-5">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            The firm&apos;s best work becomes reusable
          </h2>
          <p>
            The model supplies general capability. The firm supplies the valuable
            part: the petition it trusts, the demand structure that has survived
            negotiation, the questions an attorney asks before filing, and the
            exceptions an experienced paralegal notices.
          </p>
          <p>
            A reusable AI skill is simply a way to preserve those instructions.
            It tells the system which sources to read, what order to follow, how
            the output should look, what it must never assume, and where it must
            stop for human review.
          </p>
          <p>
            This is why a narrow system can be more valuable than giving every
            employee an empty chat window. The firm is not buying another place
            to type. It is encoding one proven way of working. That is the same
            distinction we make in our essay on{` `}
            <Link
              href="/blog/why-pi-firms-need-bespoke-ai-agents"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              bespoke AI agents for PI firms
            </Link>
            .
          </p>
        </section>

        <section id="safe-boundary" className="mt-14 scroll-mt-24 space-y-7">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
              Medical records stay inside a protected lane
            </h2>
            <p>
              The firm&apos;s productivity gain would not be worth much if it exposed
              client medical information. The safer design separates ordinary
              drafting from protected data processing instead of making every
              tool eligible to receive every kind of information.
            </p>
          </div>

          <div className="grid border-y border-primary/25 md:grid-cols-2">
            <div className="py-7 md:pr-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/65">
                Open drafting lane
              </p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                Instructions and non-sensitive material
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Blank templates and formatting rules",
                  "Public statutes, rules, and expert content",
                  "Synthetic examples and approved test files",
                  "Properly de-identified summaries",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-primary/20 py-7 md:border-l md:border-t-0 md:pl-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/65">
                Protected processing lane
              </p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                Medical records and identifiable client data
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Approved vendors and executed agreements",
                  "Restricted access and encrypted storage",
                  "Controlled model and retention settings",
                  "Audit logs, deletion rules, and human review",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p>
            One possible protected architecture uses a private portal, AWS
            services covered by an executed BAA, and a Claude model accessed
            through Amazon Bedrock. Amazon lists Bedrock as HIPAA eligible. If
            Vercel receives or transmits PHI, the relevant Vercel deployment must
            also be covered and configured for that use.
          </p>
          <p>
            The boundary must continue through the output. Anthropic currently
            excludes Cowork from its BAA coverage. A medical chronology should
            therefore remain in the protected system unless it has been properly
            de-identified. HHS recognizes Safe Harbor and Expert Determination as
            the two de-identification methods; deleting a name and birth date is
            not, by itself, enough.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a
              href={sources.anthropicBaa}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              Anthropic BAA coverage
            </a>
            <a
              href={sources.awsHipaa}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              AWS HIPAA-eligible services
            </a>
            <a
              href={sources.vercelHipaa}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              Vercel HIPAA guidance
            </a>
            <a
              href={sources.hhsDeidentification}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              HHS de-identification guidance
            </a>
          </div>
        </section>

        <section id="first-system" className="mt-14 scroll-mt-24 space-y-7">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
              Value arrives before a firm-wide AI rollout
            </h2>
            <p>
              A small firm does not need to begin with a platform migration or an
              autonomous agent. Begin with a workflow your team performs every
              week and whose quality you already know how to judge.
            </p>
          </div>

          <ol className="divide-y divide-primary/20 border-y border-primary/25">
            {[
              ["Choose the recurring work", "Pick a document or research task that consumes real time and follows a recognizable pattern."],
              ["Collect good examples", "Use several completed matters to identify the stable structure and the exceptions that require judgment."],
              ["Define the contract", "Specify approved inputs, required sections, prohibited assumptions, output format, and the person who signs off."],
              ["Test ugly cases", "Use missing records, inconsistent dates, unusual facts, poor scans, and other conditions that expose false confidence."],
              ["Measure the handoff", "Track time to first draft, correction rate, omissions, staff effort, and whether the reviewer trusts the output."],
            ].map(([title, body], index) => (
              <li
                key={title}
                className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6"
              >
                <span className="text-sm font-semibold text-primary/65">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2">{body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p>
            The first success should be boring and observable. A trusted draft
            arriving sooner is more valuable than a dramatic demo nobody is
            willing to use. Our guide to{` `}
            <Link
              href="/blog/derisk-ai-adoption-legal-practice"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              derisking AI adoption in a legal practice
            </Link>{` `}
            explains how to set the review and escalation boundaries.
          </p>
        </section>

        <section id="human-control" className="mt-14 scroll-mt-24 space-y-5">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Clients get faster movement without losing lawyer judgment
          </h2>
          <p>
            In every useful example from the walkthrough, AI performs preparation
            and a person remains accountable. The lawyer changes scheduling
            deadlines, verifies the medical summary, edits the demand, checks the
            expert quotation, and decides what leaves the firm.
          </p>
          <p>
            Case selection, legal advice, strategy, settlement authority,
            deadline responsibility, and sensitive client conversations should
            not disappear behind automation. The system should make judgment less
            expensive to exercise, not pretend judgment is no longer required.
          </p>
          <p className="text-xl leading-9 text-foreground/95">
            For a small PI firm, that is the real promise: not fewer lawyers, but
            fewer hours spent reconstructing work the firm already knows how to do.
          </p>
        </section>

        <section id="faq" className="mt-16 scroll-mt-24 border-t border-primary/25 pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            Common questions
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#00ff41]">
            AI for small personal injury law firms
          </h2>
          <div className="mt-8 divide-y divide-primary/20 border-y border-primary/25">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-3">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border-y border-primary/30 py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            Start with one workflow
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-foreground">
            Find the work your firm should stop rebuilding by hand.
          </h2>
          <p className="mt-4 max-w-2xl">
            Possible Minds maps the workflow, data boundary, exceptions, review
            gate, and measurable outcome before recommending what to build.
          </p>
          <Link
            href="/consult"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-primary transition hover:text-[#00ff41]"
          >
            Discuss a PI workflow
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        <p className="mt-10 text-sm leading-7 text-foreground/55">
          This article discusses operational design, not legal advice. HIPAA
          applicability and professional obligations depend on the firm&apos;s role,
          jurisdiction, agreements, data, and implementation. Firms should obtain
          appropriate legal, privacy, and security review before processing client
          information with AI.
        </p>
      </article>
    </div>
  );
}
