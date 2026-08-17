import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

const slug = "claude-ai-watermarks-law-firm-review";
const pageTitle = "Before a Claude-Assisted Draft Leaves Your Firm";
const metaTitle = "Claude AI Watermarks for Law Firms: The Real Risk";
const pageDescription =
  "Claude's watermark is not the main risk for law firms. Use this five-point preflight before any AI-assisted legal document leaves the firm.";
const pageUrl = `${SITE_URL}/blog/${slug}`;
const heroImage = `${SITE_URL}/images/blog/claude-ai-law-firm-preflight.webp`;

const sources = {
  claudeMarks:
    "https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content",
  claudeWord: "https://support.claude.com/en/articles/14465370-use-claude-for-word",
  claudeLegal:
    "https://support.claude.com/en/articles/15707726-using-claude-for-legal-work-privilege-confidentiality-and-how-to-think-about-configuration",
  xieShernKong: "https://uk.linkedin.com/in/xskong",
};

const contents = [
  { id: "what-watermark-means", label: "What Claude's watermark actually means" },
  { id: "already-visible", label: "How AI use is already visible" },
  { id: "real-risk", label: "The real risk is weak review" },
  { id: "preflight", label: "A five-point Claude preflight" },
  { id: "firm-workflow", label: "Turn personal usage into a firm workflow" },
];

const faqs = [
  {
    question: "Does a Claude watermark prove that AI wrote a legal document?",
    answer:
      "No. Anthropic says a detected mark indicates that content may have been processed by Claude. Claude may have drafted, proofread, translated, summarized, or reformatted material originally written by a person.",
  },
  {
    question: "Will every Claude-assisted document carry a detectable mark?",
    answer:
      "No. Marking applies to supported models and file types. Anthropic also says short passages, heavy editing, format conversion, and unsupported surfaces can prevent reliable detection.",
  },
  {
    question: "Should a law firm try to remove Claude watermarks?",
    answer:
      "That is the wrong operating objective. A firm should focus on approved use, substantive review, document integrity, clean metadata, and accountable lawyer sign-off rather than evading provenance signals.",
  },
  {
    question: "Should lawyers disclose that they used Claude?",
    answer:
      "That depends on applicable professional rules, court requirements, client instructions, engagement terms, and the nature of the use. Firms should establish a policy with their own ethics and risk advisers rather than relying on a universal answer.",
  },
  {
    question: "Can a law firm automate the review of Claude-assisted documents?",
    answer:
      "A firm can automate preflight checks for unresolved comments, metadata, defined terms, cross-references, playbook deviations, and unexpected changes. A qualified lawyer should still approve the substance and final work product.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "Claude AI watermarks law firms",
    "Claude for lawyers",
    "AI-assisted legal drafting review",
    "law firm AI governance",
    "Claude legal document review",
    "AI document preflight",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-08-17",
    modifiedTime: "2026-08-17",
    authors: ["Pranav Modi"],
    images: [
      {
        url: heroImage,
        width: 1536,
        height: 1024,
        alt: "A lawyer performing a final preflight review of an AI-assisted legal document",
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
      datePublished: "2026-08-17",
      dateModified: "2026-08-17",
      author: {
        "@type": "Person",
        name: post.author,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: pageUrl,
      articleSection: "AI Governance",
      keywords:
        "Claude AI watermarks, law firm AI governance, AI-assisted legal drafting, document preflight, lawyer review",
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
      <ClickBeacon page="blog-claude-ai-watermarks-law-firm-review" />
      <JsonLd data={structuredData} />

      <header className="relative min-h-[590px] overflow-hidden border-b border-primary/20 sm:min-h-[660px]">
        <Image
          src="/images/blog/claude-ai-law-firm-preflight.webp"
          alt="A lawyer performing a final preflight review of an AI-assisted legal document"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/42" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.91)_44%,rgba(0,0,0,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black to-transparent" />

        <div className="relative mx-auto flex min-h-[590px] max-w-4xl flex-col justify-end px-4 pb-14 pt-28 sm:min-h-[660px] sm:px-6 sm:pb-20">
          <div>
            <div className="flex items-center gap-3 text-xs text-foreground/70">
              <Link href="/blog" className="transition hover:text-primary">
                Blog
              </Link>
              <span className="text-primary/50">/</span>
              <span>AI Governance</span>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#00ff41]">
              A document preflight for firms using Claude
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Before a Claude-Assisted Draft Leaves Your Firm
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/85 sm:text-xl">
              The watermark is not the main risk. An AI-assisted document leaving
              without disciplined review is.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/65">
              <span>{post.author}</span>
              <span aria-hidden="true">/</span>
              <time dateTime="2026-08-17">{post.date}</time>
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
            A Claude mark can indicate that AI processed a document. It cannot tell
            you whether Claude wrote the substance, proofread a lawyer&apos;s work, or
            reformatted existing text. For law firms, the defensible question is not
            whether AI touched the document. It is whether a lawyer controlled and
            verified the final work.
          </p>
        </div>
      </section>

      <BlogTableOfContents items={contents} faqHref="#faq" />

      <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
        <section className="space-y-6">
          <p className="text-xl leading-9 text-foreground/95">
            Claude&apos;s new marking policy has prompted an understandable question
            inside legal teams: will clients and counterparties be able to tell that
            AI helped with a draft?
          </p>
          <p>
            They may not need a detector. AI use is already visible when a Word file
            arrives with an AI product listed as a comment author, internal review
            labels left unresolved, or an entire clause replaced to make one small
            substantive change.
          </p>
          <p>
            The uncomfortable issue is not that a lawyer used Claude. It is that the
            document can reveal whether anyone exercised legal judgment over what
            Claude did.
          </p>
        </section>

        <section className="mt-14 space-y-5">
          <h2
            id="what-watermark-means"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            What Claude&apos;s watermark actually means
          </h2>
          <p>
            Anthropic says supported Claude models use two forms of machine-readable
            marking: an imperceptible watermark embedded in generated text and signed
            provenance metadata attached to supported files. The text mark travels
            when text is copied and may survive some editing.
          </p>
          <p>
            The important limitation is in Anthropic&apos;s own documentation. A detected
            mark is a signal that Claude may have <em>processed</em> the content. It
            does not establish full provenance or prove that Claude originated the
            ideas. A person may have asked Claude to proofread, translate, summarize,
            or convert material they already wrote.
          </p>
          <p>
            The reverse is also true. No detected mark does not prove that AI was
            absent. Short passages, heavy editing, format changes, older models, and
            unsupported products or file types can weaken or remove the signal.
          </p>
          <p className="text-sm leading-7 text-foreground/60">
            Source: Anthropic&apos;s current explanation of{` `}
            <a
              href={sources.claudeMarks}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              how Claude marks AI-generated content
            </a>
            .
          </p>
          <div className="border-y border-primary/30 py-7">
            <p className="text-2xl font-semibold leading-10 text-foreground">
              A watermark can indicate contact with Claude. It cannot measure the
              lawyer&apos;s contribution, review, or judgment.
            </p>
          </div>
        </section>

        <section className="mt-14 space-y-5">
          <h2
            id="already-visible"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            How AI use is already visible
          </h2>
          <p>
            In a recent discussion, lawyer{` `}
            <a
              href={sources.xieShernKong}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              Xie Shern Kong
            </a>{` `}
            argued that lawyers are already revealing AI use through the mechanics of
            negotiation. His examples are more useful than trying to identify a
            particular writing style.
          </p>
          <div className="divide-y divide-primary/20 border-y border-primary/20">
            <div className="grid gap-2 py-5 sm:grid-cols-[2rem_1fr] sm:gap-5">
              <span className="text-sm font-semibold text-primary">01</span>
              <p>Comments identify an AI tool as the author.</p>
            </div>
            <div className="grid gap-2 py-5 sm:grid-cols-[2rem_1fr] sm:gap-5">
              <span className="text-sm font-semibold text-primary">02</span>
              <p>A whole clause is replaced even though the substantive change is minor.</p>
            </div>
            <div className="grid gap-2 py-5 sm:grid-cols-[2rem_1fr] sm:gap-5">
              <span className="text-sm font-semibold text-primary">03</span>
              <p>Internal labels such as proposed change or required fix remain in the file.</p>
            </div>
            <div className="grid gap-2 py-5 sm:grid-cols-[2rem_1fr] sm:gap-5">
              <span className="text-sm font-semibold text-primary">04</span>
              <p>Large groups of comments and edits carry the same timestamp.</p>
            </div>
          </div>
          <p>
            None of those artifacts proves that the legal conclusion is wrong. They
            do suggest that the workflow stopped between generation and professional
            review.
          </p>
        </section>

        <section className="mt-14 space-y-5">
          <h2
            id="real-risk"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            The real risk is weak review
          </h2>
          <p>
            A firm can use Claude responsibly and still produce excellent work. It
            can also use Claude casually and send a document that is polished on the
            surface but operationally careless.
          </p>
          <p>
            The distinction is supervision. Did someone confirm that the instruction
            was appropriate? Did a lawyer review the substantive change? Were defined
            terms, cross-references, citations, and knock-on effects checked? Did the
            document pass through an approved environment? Can the firm identify who
            approved the final version?
          </p>
          <p>
            Anthropic&apos;s guidance for Claude in Word similarly tells users to review
            tracked changes, verify the output against the firm&apos;s playbook, use
            appropriate permissions, and maintain human oversight for client-facing
            work. Those controls matter with or without a watermark.
          </p>
          <p className="text-sm leading-7 text-foreground/60">
            See Anthropic&apos;s{` `}
            <a
              href={sources.claudeWord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              Claude for Word guidance
            </a>{` `}
            and its discussion of{` `}
            <a
              href={sources.claudeLegal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              Claude configuration for legal work
            </a>
            . These are Anthropic&apos;s descriptions of its own products, not legal
            advice for a particular firm.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2
            id="preflight"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            A five-point Claude preflight
          </h2>
          <p>
            Before an AI-assisted legal document leaves the firm, require one short
            preflight. The goal is not to prove that no AI was used. It is to prove
            that the firm controlled the work.
          </p>
          <ol className="divide-y divide-primary/20 border-y border-primary/20">
            <li className="grid gap-3 py-7 sm:grid-cols-[3rem_1fr] sm:gap-7">
              <strong className="text-lg text-primary">01</strong>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Confirm the environment
                </h3>
                <p className="mt-2">
                  Check that the lawyer used an approved Claude account, data setting,
                  matter type, and source-document policy. Sensitive material should
                  not enter an unapproved personal or third-party tool.
                </p>
              </div>
            </li>
            <li className="grid gap-3 py-7 sm:grid-cols-[3rem_1fr] sm:gap-7">
              <strong className="text-lg text-primary">02</strong>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Compare the instruction with the result
                </h3>
                <p className="mt-2">
                  If the request was narrow, the redline should be narrow. Investigate
                  unnecessary clause replacement, changed commercial positions, or
                  edits outside the assigned scope.
                </p>
              </div>
            </li>
            <li className="grid gap-3 py-7 sm:grid-cols-[3rem_1fr] sm:gap-7">
              <strong className="text-lg text-primary">03</strong>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Check document integrity
                </h3>
                <p className="mt-2">
                  Review defined terms, cross-references, numbering, dates, parties,
                  citations, calculations, and conflicts with related provisions.
                  Fluent language can still contain structural mistakes.
                </p>
              </div>
            </li>
            <li className="grid gap-3 py-7 sm:grid-cols-[3rem_1fr] sm:gap-7">
              <strong className="text-lg text-primary">04</strong>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Remove operational debris
                </h3>
                <p className="mt-2">
                  Inspect comment authors, unresolved internal notes, tracked changes,
                  hidden text, document properties, timestamps, and attachments. The
                  final file should contain only what the recipient is meant to see.
                </p>
              </div>
            </li>
            <li className="grid gap-3 py-7 sm:grid-cols-[3rem_1fr] sm:gap-7">
              <strong className="text-lg text-primary">05</strong>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Record accountable approval
                </h3>
                <p className="mt-2">
                  A named lawyer should approve the substance and final version. The
                  firm should be able to explain the role Claude played and the human
                  review that followed.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="mt-14 space-y-5">
          <h2
            id="firm-workflow"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            Turn personal usage into a firm workflow
          </h2>
          <p>
            Most firms begin with individual lawyers using Claude well. The next step
            is not a longer prompt library. It is a repeatable review system.
          </p>
          <p>
            A firm-specific preflight agent can inspect the document, redline,
            metadata, and relevant playbook before transmission. It can flag an
            unexpected wholesale replacement, a broken cross-reference, an unresolved
            internal comment, or a deviation from the firm&apos;s standard position. It
            can route the exception to the right reviewer and preserve the approval
            record.
          </p>
          <p>
            The agent should not decide whether the advice is correct or whether the
            document should be sent. That remains the lawyer&apos;s responsibility. The
            system makes disciplined review easier to perform consistently.
          </p>
          <p>
            This is why the difference between{` `}
            <Link
              href="/blog/tools-vs-systems-pi-firms-ai"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              an AI tool and an AI system
            </Link>{` `}
            matters. Claude provides a capable model. The firm still needs the rules,
            integrations, review gates, and accountability around it. Our companion
            essay explains{` `}
            <Link
              href="/blog/why-pi-firms-need-bespoke-ai-agents"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              why bespoke AI agents handle that last mile
            </Link>
            .
          </p>
          <p className="border-y border-primary/30 py-7 text-2xl font-semibold leading-10 text-foreground">
            Do not build a system to hide AI use. Build one that makes the firm&apos;s
            supervision visible in the quality of the work.
          </p>
        </section>

        <section id="faq" className="mt-16 scroll-mt-24 border-t border-primary/30 pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            Common questions
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground">
            Claude watermarks and law firm review
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
            Make Claude use reviewable by design
          </h2>
          <p className="mt-4 max-w-3xl">
            Possible Minds helps law firms convert informal AI use into governed,
            firm-specific workflows with clear review gates and human ownership.
          </p>
          <Link
            href="/engagement-process"
            className="mt-6 inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            See how an AI engagement works
          </Link>
        </section>
      </article>
    </div>
  );
}
