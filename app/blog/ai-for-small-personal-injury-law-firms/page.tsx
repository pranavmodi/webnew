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
  "How Jacob Cukjati's PI firm used Claude skills to move from roughly 5-7 documents per day to 12-15 while keeping lawyer review in place.";
const pageUrl = `${SITE_URL}/blog/${slug}`;
const heroImage = `${SITE_URL}/images/blog/small-pi-firm-ai-workflows.webp`;

const sources = {
  jacobCukjati: "https://www.linkedin.com/in/jacob-cukjati-630a7a8a",
  cowork:
    "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork",
  anthropicBaa:
    "https://privacy.claude.com/en/articles/8114513-business-associate-agreements-baa-for-commercial-customers",
  awsHipaa: "https://aws.amazon.com/compliance/hipaa-eligible-services-reference/",
  vercelHipaa: "https://vercel.com/kb/guide/hipaa-compliance-guide-vercel",
  hhsDeidentification:
    "https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html",
};

const contents = [
  { id: "owner-appeal", label: "From 5-7 documents a day to 12-15" },
  { id: "possible-workflows", label: "A scheduling packet in about 10 minutes" },
  { id: "small-firm-advantage", label: "The firm's own work became reusable" },
  { id: "safe-boundary", label: "A separate lane for medical records" },
  { id: "first-system", label: "The team changed its mind by using it" },
  { id: "human-control", label: "The faster workflow still ended with the lawyer" },
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
              His assistants went from roughly 5-7 documents a day to 12-15.
              Demands moved sooner, medical records stayed separate, and every
              consequential output still came back to the lawyer.
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
            Jacob Cukjati&apos;s assistants went from preparing roughly five to seven
            documents a day for his review to roughly 12 to 15. The same system
            assembled scheduling papers, helped build demands, and searched public
            expert statements. Medical records moved through a separate protected
            application. Jacob remained the final reviewer.
          </p>
        </div>
      </section>

      <BlogTableOfContents items={contents} />

      <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
        <section className="space-y-6">
          <p className="text-xl leading-9 text-foreground/95">
            In a recent video walkthrough, San Antonio personal injury trial
            lawyer{` `}
            <a
              href={sources.jacobCukjati}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              Jacob Cukjati
            </a>{` `}
            opened with a completed piece of work: a proposed docket control
            order, an agreed motion, and a notice of hearing.
          </p>
          <p>
            His assistants had supplied the petition, the defendant&apos;s answer,
            and the available trial dates. A{` `}
            <a
              href={sources.cowork}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              Claude Cowork
            </a>{` `}
            skill assembled the first packet in about 10 minutes. Cowork is
            Anthropic&apos;s agentic work interface for multi-step tasks; it is
            distinct from Claude Projects and is not a third-party product. Jacob
            then adjusted the deadlines and reviewed the documents before they
            went any further.
          </p>
          <p>
            Cukjati Law Firm is small: a couple of paralegals and several lawyers
            working of counsel. Jacob also has four children under three at home.
            The video is a close look at what happened when that firm applied AI
            to the work already passing through its desks.
          </p>
        </section>

        <section id="owner-appeal" className="mt-14 scroll-mt-24 space-y-5">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            From five to seven documents a day to 12 to 15
          </h2>
          <p>
            Before the new workflows, Jacob said his assistants would typically
            send him about five to seven documents to review in a day. After they
            began using the saved skills, the daily volume was roughly 12 to 15.
          </p>
          <blockquote className="border-l-2 border-primary pl-6 text-xl leading-9 text-foreground/95">
            &ldquo;Now I&apos;m getting 12 to 15 documents a day to review ...
            because they&apos;re able to just crush these tasks.&rdquo;
          </blockquote>
          <p>
            The figures are Jacob&apos;s account of his own firm, not a controlled
            benchmark. What changed is visible: the assistants assembled more
            work, while the documents still arrived at the lawyer&apos;s desk for
            review.
          </p>
        </section>

        <section id="possible-workflows" className="mt-14 scroll-mt-24 space-y-8">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
              A scheduling packet in about 10 minutes
            </h2>
            <p>
              The scheduling workflow was one of four examples shown in the
              walkthrough. Each began with material the firm already used and
              ended with something a lawyer or paralegal could inspect.
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
                className="grid grid-cols-[3.75rem_minmax(0,1fr)] gap-4 py-8 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-7"
              >
                <span
                  aria-hidden="true"
                  className="pt-0.5 text-3xl font-semibold leading-none text-[#00ff41] sm:text-4xl"
                >
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
            The firm&apos;s own work became reusable
          </h2>
          <p>
            Jacob began as a conventional chat user. After seeing another lawyer
            prepare bench-trial briefs with Cowork, he learned to turn recurring
            work into saved skills. With help on the first workflows, he began
            creating his own.
          </p>
          <p>
            The demand workflow drew from the firm&apos;s petition, crash report,
            photographs, damages checklist, witness material, Texas rules and
            transportation law, adjuster information, and its existing demand
            form. The output carried the firm&apos;s letterhead and familiar structure
            because those materials were already part of the workflow.
          </p>
          <p>
            The reusable asset was not a generic prompt. It was a working record
            of how this particular firm assembled a document. That is the same
            distinction explored in our essay on{` `}
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
              A separate lane handled medical records
            </h2>
            <p>
              The firm did not place identifiable medical records into its normal
              Cowork workflow. The walkthrough showed a separate portal that
              processed the record packet and produced a structured summary for
              review.
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
            The architecture described in the walkthrough used a private portal,
            AWS services covered by an executed BAA, and a Claude model accessed
            through Amazon Bedrock. Amazon lists Bedrock as HIPAA eligible. Any
            Vercel deployment that receives or transmits PHI would also need the
            appropriate agreement and configuration.
          </p>
          <p>
            In the demonstration, a synthetic record packet reached &ldquo;ready for
            review&rdquo; in about five minutes. Larger packets could take longer. The
            team could inspect the chronology, add notes, export it, and confirm
            the final document. Anthropic currently excludes Cowork from its BAA
            coverage, so moving an output into Cowork depends on proper
            de-identification. HHS recognizes Safe Harbor and Expert Determination
            as the two methods. Under Safe Harbor, identifiers can also include
            detailed dates, contact and account numbers, smaller-than-state
            geographic data, medical-record identifiers, full-face images, and
            other unique identifiers. The complete HHS standard, not this short
            list of examples, controls the analysis.
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
              The team changed its mind by using it
            </h2>
            <p>
              Jacob described some initial discomfort when Cowork first reached
              the rest of the team. The change did not come from a policy memo or
              a firm-wide transformation program. It came when staff saw familiar
              documents appear faster.
            </p>
          </div>
          <p>
            Once the assistants saw the output, Jacob said they began finding
            other uses within their paralegal work. Adoption followed the work:
            the skills reduced assembly time on tasks the team already understood,
            and the results were immediately visible in the review queue.
          </p>
          <p>
            The faster demands also changed the range of matters the firm could
            handle. Jacob said quicker medical summaries and demand preparation
            let the litigation-focused practice move cases sooner and created
            more capacity for pre-litigation and referral matters.
          </p>
        </section>

        <section id="human-control" className="mt-14 scroll-mt-24 space-y-5">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            The faster workflow still ended with the lawyer
          </h2>
          <p>
            Every example in the walkthrough stopped at a review point. Jacob
            changed scheduling deadlines, checked the medical chronology against
            the records, edited the demand, verified expert material, and decided
            what left the firm.
          </p>
          <p>
            His referral-heavy intake process remained deliberately human. He did
            not want AI sending messages without permission. The automation sat
            behind the client relationship, preparing the material on which legal
            judgment could operate.
          </p>
          <p className="text-xl leading-9 text-foreground/95">
            The result was not a lawyerless firm. It was the same small team
            putting more finished work in front of its lawyer each day.
          </p>
        </section>

        <section className="mt-16 border-y border-primary/30 py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            The Possible Minds approach
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-foreground">
            The work already happening becomes the system.
          </h2>
          <p className="mt-4 max-w-2xl">
            Jacob&apos;s system worked because it was not one undifferentiated AI
            tool. Routine document work and protected medical information
            followed different paths, with review points before anything
            consequential left the firm.
          </p>
          <p className="mt-4 max-w-2xl">
            Possible Minds helps PI firms map and build these firm-specific
            workflows, data boundaries, and review controls around the way their
            teams already work.
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
