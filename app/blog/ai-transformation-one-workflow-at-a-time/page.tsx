import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "ai-transformation-one-workflow-at-a-time";
const pageTitle =
  "How to Eat the AI Transformation Elephant? One Workflow at a Time";
const metaTitle = `AI Transformation: One Workflow at a Time | ${SITE_NAME}`;
const pageDescription =
  "AI transformation becomes manageable when PI firms improve one measurable workflow at a time. Learn how narrow systems compound into firm-wide advantage.";
const pageUrl = `${SITE_URL}/blog/${slug}`;
const heroImage = `${SITE_URL}/images/blog/ai-transformation-one-workflow-at-a-time.webp`;

const contents = [
  { id: "the-real-elephant", label: "The real elephant is the firm around the AI" },
  { id: "workflow-unit", label: "Why the workflow is the right unit" },
  { id: "choose-first", label: "How to choose the first workflow" },
  { id: "intake-example", label: "What this looks like in intake" },
  { id: "workflow-loop", label: "The seven-part transformation loop" },
  { id: "compounding", label: "How one workflow becomes a system" },
  { id: "human-boundary", label: "What should remain human" },
];

const faqs = [
  {
    question: "What does one workflow at a time mean for AI transformation?",
    answer:
      "It means choosing one bounded sequence of work, improving it from trigger to outcome, and measuring the result before expanding. The firm changes the process, technology, roles, review rules, and data flow together rather than deploying AI everywhere at once.",
  },
  {
    question: "Which AI workflow should a personal injury firm start with?",
    answer:
      "For many PI firms, intake is a strong first workflow because it is repetitive, time-sensitive, economically visible, and easy to measure. The right starting point is still the firm's clearest operational leak, not a universal checklist.",
  },
  {
    question: "How should a PI firm measure its first AI workflow?",
    answer:
      "Measure the operating outcome: response or cycle time, completion, rework, exceptions, staff time, errors, and the downstream business result. For intake, that includes contact, qualified, signed, and retained-case rates, not just response speed.",
  },
  {
    question: "Does one workflow at a time make AI transformation too slow?",
    answer:
      "Usually the opposite. A narrow workflow reaches real use faster and creates reusable permissions, integrations, review rules, evaluations, and staff habits. Those assets make the next workflow easier to launch.",
  },
  {
    question: "Does every workflow need bespoke AI software?",
    answer:
      "No. Firms should buy standard capabilities when they fit, configure existing systems where possible, and build bespoke agents only for firm-specific context, handoffs, controls, or economics that vendors are unlikely to own.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "AI transformation for personal injury firms",
    "law firm AI transformation",
    "AI workflow automation for law firms",
    "personal injury law firm operations",
    "legal AI implementation",
    "AI intake workflow",
    "AI change management for law firms",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-08-27",
    modifiedTime: "2026-08-27",
    authors: ["Pranav Modi"],
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "An elephant assembled from individual legal workflow pieces, with one piece under examination",
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
      datePublished: "2026-08-27",
      dateModified: "2026-08-27",
      author: { "@type": "Person", name: post.author },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: pageUrl,
      articleSection: "AI Strategy",
      keywords:
        "AI transformation, personal injury law firms, legal AI implementation, workflow automation, AI change management",
      isBasedOn: `${SITE_URL}/blog`,
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
      <ClickBeacon page="blog-ai-transformation-one-workflow-at-a-time" />
      <JsonLd data={structuredData} />

      <header className="relative min-h-[590px] overflow-hidden border-b border-primary/20 sm:min-h-[660px]">
        <Image
          src="/images/blog/ai-transformation-one-workflow-at-a-time.webp"
          alt="An elephant assembled from individual legal workflow pieces, with one piece under examination"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto flex min-h-[590px] max-w-4xl flex-col justify-end px-4 pb-14 pt-28 sm:min-h-[660px] sm:px-6 sm:pb-20">
          <div>
            <div className="flex items-center gap-3 text-xs text-foreground/70">
              <Link href="/blog" className="transition hover:text-primary">
                Blog
              </Link>
              <span aria-hidden="true" className="text-primary/50">/</span>
              <span>AI Strategy</span>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase text-[#00ff41]">
              A practical operating model for PI firms
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              How to Eat the AI Transformation Elephant?
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-medium leading-8 text-white sm:text-2xl">
              One workflow at a time.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-foreground/85 sm:text-lg">
              The workflow, not the model or the vendor, is the smallest useful
              unit of AI transformation.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/65">
              <span>{post.author}</span>
              <span aria-hidden="true">/</span>
              <time dateTime="2026-08-27">{post.date}</time>
              <span aria-hidden="true">/</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
        <div className="border-y border-primary/30 py-8">
          <p className="text-xs font-semibold uppercase text-primary/80">
            In plain English
          </p>
          <p className="mt-4 text-xl leading-9 text-foreground/95 sm:text-2xl sm:leading-10">
            Do not try to make the whole firm “AI-powered.” Choose one workflow
            with a visible cost, improve it from trigger to outcome, keep people at
            the consequential decisions, and measure what changed. Then carry the
            integrations, review rules, examples, and staff habits into the next
            workflow.
          </p>
        </div>
      </section>

      <BlogTableOfContents items={contents} faqHref="#faq" />

      <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
        <section className="space-y-6">
          <p className="text-xl leading-9 text-foreground/95">
            Ask a personal injury firm owner what AI transformation includes and
            the answer expands quickly: intake, onboarding, medical records,
            treatment monitoring, client updates, demands, liens, marketing,
            reporting, and every system connecting them.
          </p>
          <p>
            No wonder the work feels too large. The usual response is to buy a broad
            platform, form an AI committee, run a few demonstrations, and wait for
            the firm to transform. It rarely does. Staff keep the old process alive
            beside the new tool, ownership remains unclear, and nobody can show
            whether work improved.
          </p>
          <p>
            Across our writing on AI readiness, intake, attribution, change
            management, governance, bespoke agents, and firm-owned judgment, the
            same operating lesson keeps returning: transformation only becomes real
            when a specific workflow changes.
          </p>
        </section>

        <section id="the-real-elephant" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            The real elephant is the firm around the AI
          </h2>
          <p>
            The model is usually the most visible part of an AI initiative. It is
            rarely the largest part.
          </p>
          <p>
            The larger problem is the operating environment around it: information
            scattered across email and case-management systems, inconsistent fields,
            unwritten handoffs, unclear authority, weak vendor access, and no shared
            definition of success. An AI system makes those conditions more visible;
            it does not make them disappear.
          </p>
          <p>
            That is why an{` `}
            <Link
              href="/blog/why-ai-readiness-matters-pi-firms"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              AI-readiness review
            </Link>{` `}
            begins before vendor selection, and why{` `}
            <Link
              href="/blog/nobody-owns-ai-at-your-firm"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              someone must own the transformation
            </Link>.
            A capable model inserted into an unowned process produces a more
            sophisticated version of the same disorder.
          </p>
        </section>

        <section id="workflow-unit" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Why the workflow is the right unit
          </h2>
          <p>
            A prompt is too small. “AI strategy” is too large. A workflow sits at the
            level where a firm can change something real.
          </p>
          <p>
            A workflow has a trigger, inputs, steps, decisions, an output, exceptions,
            an owner, and a measurable result. “Use Claude” has none of those. “When
            an after-hours inquiry arrives, acknowledge it, collect the essential
            facts, create the lead, flag urgency, and prepare the intake team for a
            personal follow-up” does.
          </p>
          <div className="border-y border-white/10">
            <PrincipleRow label="Prompt" text="Helps one person complete a task." />
            <PrincipleRow label="Tool" text="Provides a reusable capability." />
            <PrincipleRow
              label="Workflow"
              text="Changes how work moves from trigger to accountable outcome."
            />
            <PrincipleRow
              label="System"
              text="Connects multiple governed workflows and learns across them."
            />
          </div>
          <p>
            This is the distinction between{` `}
            <Link
              href="/blog/tools-vs-systems-pi-firms-ai"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              using AI tools and building AI systems
            </Link>.
            The system is not purchased whole. It is assembled from workflows the
            firm has made reliable.
          </p>
        </section>

        <section id="choose-first" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            How to choose the first workflow
          </h2>
          <p>
            The best first workflow is not the most impressive demonstration. It is
            the smallest important process the firm can see from beginning to end.
          </p>
          <div className="divide-y divide-white/10 border-y border-white/10">
            <SelectionRow
              number="01"
              title="The cost is visible"
              text="Delay, rework, missed revenue, staff time, or client frustration can be observed."
            />
            <SelectionRow
              number="02"
              title="The work repeats"
              text="There are enough examples to define the normal path and important exceptions."
            />
            <SelectionRow
              number="03"
              title="The boundary is clear"
              text="The firm can state what AI may do, what requires review, and what remains human."
            />
            <SelectionRow
              number="04"
              title="The result is measurable"
              text="A before-and-after comparison is possible without inventing an ROI story."
            />
            <SelectionRow
              number="05"
              title="The team wants it fixed"
              text="The people doing the work feel the problem and will help redesign it."
            />
          </div>
          <p>
            This is why “start with the boring work” is often good advice. Incoming
            mail, records follow-up, routine status updates, and after-hours intake
            may not look transformative in a demo. They are frequent enough to
            change capacity, and concrete enough to expose what the firm must learn.
          </p>
        </section>

        <section id="intake-example" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            What this looks like in intake
          </h2>
          <p>
            Intake is a strong first candidate for many PI firms because it is
            economically important, time-sensitive, repetitive, and measurable. It
            also has a clean human boundary: AI can organize the opportunity, but a
            person should still earn the client&apos;s trust and decide whether the firm
            wants the case.
          </p>
          <div className="border-y border-primary/25 py-8">
            <p className="text-xs font-semibold uppercase text-primary/80">
              One bounded after-hours workflow
            </p>
            <div className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              <WorkflowMoment
                number="01"
                title="Inquiry arrives"
                text="A call, form, or website conversation reaches the firm after hours."
              />
              <WorkflowMoment
                number="02"
                title="AI acknowledges"
                text="The person receives an immediate, transparent response instead of silence."
              />
              <WorkflowMoment
                number="03"
                title="AI structures"
                text="Essential facts, contact details, urgency, and transcript are organized in the intake system."
              />
              <WorkflowMoment
                number="04"
                title="AI escalates"
                text="Serious, urgent, uncertain, or sensitive inquiries are routed to the right person."
              />
              <WorkflowMoment
                number="05"
                title="A person follows up"
                text="The intake specialist or lawyer reviews the context, calls promptly, and builds trust."
              />
              <WorkflowMoment
                number="06"
                title="The firm learns"
                text="Source, contact, qualification, signature, retained case, and exceptions remain connected."
              />
            </div>
          </div>
          <p>
            The goal is not to replace intake with a chatbot. It is to make human
            contact faster and better prepared. Our{` `}
            <Link
              href="/blog/personal-injury-intake-marketing-system"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              intake operating guide
            </Link>{` `}
            explains the full path, while the{` `}
            <Link
              href="/blog/personal-injury-marketing-attribution"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              attribution framework
            </Link>{` `}
            follows the opportunity beyond the first click to the signed and retained
            case.
          </p>
          <p>
            Measure response time, contact rate, information completeness, qualified
            inquiries, signed and retained cases, staff time, exceptions, and errors.
            Speed matters, but{` `}
            <Link
              href="/blog/speed-is-easy-to-graph-intake"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              a stable intake process matters more than a fast but inconsistent one
            </Link>.
          </p>
        </section>

        <section id="workflow-loop" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            The seven-part transformation loop
          </h2>
          <p>
            Every workflow should pass through the same loop. This is the operating
            discipline that turns a pilot into transformation.
          </p>
          <ol className="divide-y divide-white/10 border-y border-white/10">
            <LoopStep
              number="01"
              title="Diagnose the leak"
              text="Name the lost time, revenue, consistency, or trust. Do not begin with a feature." 
            />
            <LoopStep
              number="02"
              title="Map the work as it happens"
              text="Follow real examples, including handoffs, workarounds, exceptions, and duplicate entry."
            />
            <LoopStep
              number="03"
              title="Delete and simplify"
              text="Remove unnecessary steps before automating them. A faster bad process is still a bad process."
            />
            <LoopStep
              number="04"
              title="Draw the boundaries"
              text="Define approved data, AI authority, pause conditions, human review, and accountable ownership."
            />
            <LoopStep
              number="05"
              title="Build the narrow system"
              text="Use existing products where they fit and add firm-specific logic only where the workflow needs it."
            />
            <LoopStep
              number="06"
              title="Run it with the team"
              text="Co-design with the people doing the work, test real edge cases, and make escalation easy."
            />
            <LoopStep
              number="07"
              title="Measure, correct, and expand"
              text="Turn failures and overrides into evaluations, improve the workflow, then choose the adjacent one."
            />
          </ol>
          <p>
            This combines the lessons from{` `}
            <Link
              href="/blog/musk-algorithm-ai-pi-firm"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              redesigning before automating
            </Link>,{` `}
            <Link
              href="/blog/derisk-ai-adoption-legal-practice"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              defining handoffs and pause conditions
            </Link>, and{` `}
            <Link
              href="/blog/ai-change-management-personal-injury-firms"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              changing the human system with the technology system
            </Link>.
          </p>
        </section>

        <section id="compounding" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            How one workflow becomes a system
          </h2>
          <p>
            A narrow start is not a small ambition. The first workflow creates assets
            the second workflow can reuse: identity and access rules, integrations,
            logs, evaluation cases, escalation paths, staff habits, and a clearer map
            of the firm&apos;s data.
          </p>
          <div className="overflow-x-auto border-y border-white/10 py-7">
            <div className="flex min-w-[760px] items-center justify-between gap-3 text-sm">
              {[
                "Intake",
                "Onboarding",
                "Records",
                "Client updates",
                "Demand prep",
                "Liens",
              ].map((stage, index) => (
                <div key={stage} className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="min-w-0 flex-1 border-t border-primary/45 pt-3 text-center font-semibold text-white">
                    {stage}
                  </div>
                  {index < 5 ? <ArrowRight className="h-4 w-4 shrink-0 text-primary" /> : null}
                </div>
              ))}
            </div>
          </div>
          <p>
            The sequence is illustrative, not mandatory. A firm should move to the
            next measured constraint, not follow a software roadmap. Over time, the
            workflows form a governed operating system that can sense, act, measure,
            and learn.
          </p>
          <p>
            That learning loop is the real first-mover advantage. Competitors can buy
            the same model. They cannot instantly buy your examples, corrections,
            exception rules, and encoded judgment. This is why{` `}
            <Link
              href="/blog/the-real-reason-ai-evals-matter"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              evaluations become a learning asset
            </Link>{` `}
            and why{` `}
            <Link
              href="/blog/ai-pi-firm-judgment-workflows"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              the firm&apos;s judgment remains the moat
            </Link>.
          </p>
          <p>
            Standard software still matters. Buy what is truly standard. Configure
            what is close. Build only the{` `}
            <Link
              href="/blog/why-pi-firms-need-bespoke-ai-agents"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              bespoke last mile
            </Link>{` `}
            where the firm&apos;s context, handoffs, controls, or economics are unique.
          </p>
        </section>

        <section id="human-boundary" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            What should remain human
          </h2>
          <p>
            One workflow at a time is also a governance strategy. It forces the firm
            to decide where automation stops before risk is spread across the whole
            operation.
          </p>
          <p>
            AI can acknowledge, collect, organize, summarize, compare, draft, monitor,
            and route. People should retain legal advice, case acceptance, strategy,
            valuation, settlement authority, final deadline responsibility, sensitive
            client conversations, and approval of consequential work.
          </p>
          <p>
            The boundary is not fixed forever. As the workflow produces evidence,
            the firm can expand or narrow authority deliberately. What matters is that
            the boundary is visible, reviewable, and owned.
          </p>
          <div className="border-y border-primary/30 py-8 text-xl leading-9 text-white sm:text-2xl sm:leading-10">
            Do not ask how to make the firm AI-powered. Ask which workflow is costing
            the firm time, money, consistency, or trust, and whether it can be made
            visibly better.
          </div>
          <p>
            That is how the elephant gets smaller. Not through a grand rollout, but
            through a firm that learns how to improve one important workflow, then
            does it again.
          </p>
        </section>

        <section id="faq" className="mt-16 scroll-mt-28">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-base leading-7 text-foreground/75">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-primary/30 pt-10">
          <p className="text-xs font-semibold uppercase text-primary/80">
            Find the first workflow
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
            Start with the leak your firm can see.
          </h2>
          <p className="mt-4 max-w-2xl">
            Possible Minds helps PI firms diagnose one high-value workflow, define
            the human and data boundaries, and build a measurable system around the
            way the firm actually works.
          </p>
          <Link
            href="/consult"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Discuss your first workflow
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </article>
    </div>
  );
}

function PrincipleRow({ label, text }: { label: string; text: string }) {
  return (
    <div className="grid gap-2 py-5 sm:grid-cols-[140px_1fr] sm:gap-6">
      <div className="font-semibold text-white">{label}</div>
      <div className="text-sm leading-7 text-foreground/70">{text}</div>
    </div>
  );
}

function SelectionRow({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="grid gap-3 py-6 sm:grid-cols-[56px_190px_1fr] sm:items-start sm:gap-5">
      <span className="font-mono text-lg font-semibold text-primary">{number}</span>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-sm leading-7 text-foreground/70">{text}</p>
    </div>
  );
}

function WorkflowMoment({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="grid grid-cols-[44px_1fr] gap-4">
      <span className="font-mono text-lg font-semibold text-primary">{number}</span>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-foreground/70">{text}</p>
      </div>
    </div>
  );
}

function LoopStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <li className="grid gap-3 py-6 sm:grid-cols-[56px_210px_1fr] sm:items-start sm:gap-5">
      <span className="font-mono text-lg font-semibold text-primary">{number}</span>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-sm leading-7 text-foreground/70">{text}</p>
    </li>
  );
}
