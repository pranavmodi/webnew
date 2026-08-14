import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

const slug = "why-pi-firms-need-bespoke-ai-agents";
const pageTitle = "Your Legal AI Vendor Will Not Build the Last Mile";
const metaTitle = "Why PI Firms Need Bespoke AI Agents";
const pageDescription =
  "Legal AI vendors solve repeatable tasks. PI firms need bespoke agents for the workflows, data, handoffs, and controls unique to their operations.";
const pageUrl = `${SITE_URL}/blog/${slug}`;
const heroImage = `${SITE_URL}/images/blog/bespoke-ai-agents-pi-firms.webp`;

const sources = {
  cocounsel: "https://legal.thomsonreuters.com/en/legal/personal-injury-law",
  entegrata: "https://support.entegrata.com/",
  netdocuments: "https://www.netdocuments.com/en-gb/legal-context-graph/",
  deepjudge: "https://www.deepjudge.ai/product",
};

const contents = [
  { id: "smaller-problem", label: "AI writing solves the smaller problem" },
  { id: "vendor-incentives", label: "Why vendors stop at the product boundary" },
  { id: "bespoke-agent", label: "What a bespoke AI agent actually is" },
  { id: "pi-workflows", label: "Where PI firms need the last mile" },
  { id: "build-or-buy", label: "When to buy, configure, or build" },
  { id: "start", label: "How to start without overbuilding" },
];

const faqs = [
  {
    question: "What is a bespoke AI agent for a personal injury firm?",
    answer:
      "It is an AI-enabled workflow configured around the firm's systems, data, rules, permissions, and human handoffs. It uses existing models; it does not usually require training a new foundation model.",
  },
  {
    question: "Why cannot a legal AI vendor solve every workflow?",
    answer:
      "A product vendor must build features that work for many customers. A firm's hardest operating problems often depend on its particular systems, field conventions, staffing model, escalation rules, and historical data. Solving those details is implementation work, not merely another product feature.",
  },
  {
    question: "When should a PI firm build a bespoke agent instead of buying software?",
    answer:
      "Consider a bespoke agent when the workflow repeats often, crosses systems, has measurable economic value, and requires firm-specific rules or handoffs. Buy an established product when the task is common and the standard workflow already fits.",
  },
  {
    question: "Does bespoke AI replace legal judgment?",
    answer:
      "It should not. Case acceptance, legal advice, strategy, negotiation, deadline responsibility, and sensitive client conversations should remain with qualified people. The agent should organize, route, draft, and escalate within defined boundaries.",
  },
  {
    question: "How should a firm govern a bespoke AI agent?",
    answer:
      "Limit its data access and permitted actions, define human review gates, log what it did, test realistic exceptions, monitor outcomes, and assign a named owner who can pause or change the workflow.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "bespoke AI agents for law firms",
    "custom AI agents personal injury firms",
    "legal workflow automation",
    "AI agents for personal injury law firms",
    "law firm systems integration",
    "build vs buy legal AI",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-08-14",
    modifiedTime: "2026-08-14",
    authors: ["Pranav Modi"],
    images: [
      {
        url: heroImage,
        width: 1536,
        height: 1024,
        alt: "A PI firm operator overseeing an AI agent that coordinates work across several legal systems",
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
      datePublished: "2026-08-14",
      dateModified: "2026-08-14",
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
        "bespoke AI agents, personal injury firms, legal workflow automation, legal AI vendors, build versus buy",
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
      <ClickBeacon page="blog-why-pi-firms-need-bespoke-ai-agents" />
      <JsonLd data={structuredData} />

      <header className="relative min-h-[590px] overflow-hidden border-b border-primary/20 sm:min-h-[660px]">
        <Image
          src="/images/blog/bespoke-ai-agents-pi-firms.webp"
          alt="A PI firm operator overseeing an AI agent that coordinates work across several legal systems"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.9)_43%,rgba(0,0,0,0.2)_100%)]" />
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
              Why PI firms need bespoke AI agents
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Your Legal AI Vendor Will Not Build the Last Mile
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/85 sm:text-xl">
              The hardest operational problems are not generic. They live between
              your systems, your people, and the way your firm actually works.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/65">
              <span>{post.author}</span>
              <span aria-hidden="true">/</span>
              <time dateTime="2026-08-14">{post.date}</time>
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
            A legal AI vendor is built to sell one product to many firms. Your
            hardest operating problems are usually unique to the way your people,
            data, and systems interact. Off-the-shelf AI can supply the platform;
            a bespoke agent connects it to your workflow, permissions, handoffs,
            and review rules.
          </p>
        </div>
      </section>

      <BlogTableOfContents items={contents} faqHref="#faq" />

      <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
        <section className="space-y-6">
          <p className="text-xl leading-9 text-foreground/95">
            A drafting tool can make a demand letter faster. It cannot decide why
            the medical records are still missing, notice that the provider used a
            different patient name, update the case system, alert the paralegal,
            and keep following up under your firm&apos;s rules.
          </p>
          <p>
            That is not a criticism of the tool. It is a different kind of problem.
            The first is a product feature. The second is an operating system made
            from your data, your software, and your institutional judgment.
          </p>
        </section>

        <section className="mt-14 space-y-5">
          <h2
            id="smaller-problem"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            AI writing solves the smaller problem
          </h2>
          <p>
            Legal AI is already useful for research, drafting, document review,
            medical-record analysis, and chronology building. Thomson Reuters, for
            example, now markets CoCounsel to PI firms for demands, pleadings,
            discovery, timelines, and structured extraction from case records.
          </p>
          <p>
            But a PI firm loses time and money in places a prompt box cannot see:
            an intake record copied into a case-management system, an email that
            never becomes a task, a treatment gap noticed too late, a client update
            waiting on three people, or a report that no longer matches the source
            data.
          </p>
          <p>
            In a billable firm, that friction may appear as unrecorded time or a
            write-down. In a contingency firm, it appears as slower response,
            reduced staff capacity, stalled files, delayed demands, and cash arriving
            later than it should.
          </p>
          <p className="text-sm leading-7 text-foreground/60">
            Product scope reference: Thomson Reuters&apos; official overview of{` `}
            <a
              href={sources.cocounsel}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              CoCounsel for personal injury law
            </a>
            .
          </p>
        </section>

        <section className="mt-14 space-y-5">
          <h2
            id="vendor-incentives"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            Why vendors stop at the product boundary
          </h2>
          <p>
            Software vendors are rewarded for repeatability. The best feature is one
            they can build once, support consistently, and sell to hundreds of firms.
            That is how a software business scales.
          </p>
          <p>
            Your hardest workflow is often the opposite. It may depend on a custom
            field added years ago, a spreadsheet maintained by one case manager, a
            naming convention no one documented, two systems that disagree, and an
            escalation rule that lives in a partner&apos;s head.
          </p>
          <p>
            Cleaning that up requires discovery, mapping, implementation, testing,
            and change management. It creates more support responsibility and serves
            one firm at a time. A product vendor may expose APIs, integrations, or a
            workflow builder, but it is rarely incentivized to own every firm&apos;s
            bespoke operating logic.
          </p>
          <div className="border-y border-primary/30 py-7">
            <p className="text-2xl font-semibold leading-10 text-foreground">
              Vendors build the common layer. Your advantage lives in the last mile.
            </p>
          </div>
          <p>
            The industry is recognizing the underlying context problem. Entegrata
            describes a legal data lakehouse that collects and transforms data from
            multiple systems. NetDocuments is building a permission-aware context
            layer across matters, documents, people, and communications. DeepJudge
            connects AI workflows to firm-wide document repositories and supports
            custom workflows.
          </p>
          <p>
            Those are meaningful foundations. They make firm knowledge more usable.
            They still do not decide how your intake team should escalate a serious
            case, what your records workflow should do after a failed request, or
            which exceptions require your managing attorney.
          </p>
          <p className="text-sm leading-7 text-foreground/60">
            These descriptions come from the vendors&apos; own materials, not an
            independent outcome study: {` `}
            <a
              href={sources.entegrata}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              Entegrata
            </a>
            , {` `}
            <a
              href={sources.netdocuments}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              NetDocuments
            </a>
            , and {` `}
            <a
              href={sources.deepjudge}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              DeepJudge
            </a>
            .
          </p>
        </section>

        <section className="mt-14 space-y-5">
          <h2
            id="bespoke-agent"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            What a bespoke AI agent actually is
          </h2>
          <p>
            Bespoke does not mean training your own model. Most firms should not do
            that. It means taking capable general models and placing them inside a
            workflow designed for your firm.
          </p>
          <div className="grid gap-px border-y border-primary/25 bg-primary/20 sm:grid-cols-3">
            <div className="bg-black px-5 py-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                Context
              </p>
              <p className="mt-3 text-sm leading-6">
                The right matter, documents, status, history, and permissions.
              </p>
            </div>
            <div className="bg-black px-5 py-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                Action
              </p>
              <p className="mt-3 text-sm leading-6">
                The tools needed to update, route, draft, schedule, or follow up.
              </p>
            </div>
            <div className="bg-black px-5 py-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                Control
              </p>
              <p className="mt-3 text-sm leading-6">
                Firm rules, review gates, exception handling, logs, and ownership.
              </p>
            </div>
          </div>
          <p>
            The model is only one component. The valuable part is the system around
            it: triggers, integrations, matter context, approved actions, confidence
            thresholds, human handoffs, evaluation cases, and an audit trail.
          </p>
          <p>
            This is the distinction between an AI tool and an AI system. A tool waits
            for an individual user. A system can notice that work is due, assemble the
            context, complete bounded steps, and place the exception in front of the
            right person.
          </p>
          <p>
            For a deeper explanation, see our guide to{` `}
            <Link
              href="/blog/tools-vs-systems-pi-firms-ai"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              tools versus systems for PI firms
            </Link>
            .
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2
            id="pi-workflows"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            Where PI firms need the last mile
          </h2>
          <div className="divide-y divide-primary/20 border-y border-primary/20">
            <section className="grid gap-3 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <h3 className="text-lg font-semibold text-foreground">Intake</h3>
              <p>
                A standard chatbot can collect answers. A bespoke{` `}
                <Link
                  href="/personal-injury/intake-automation"
                  className="text-primary underline decoration-primary/35 underline-offset-4"
                >
                  AI intake workflow
                </Link>{` `}
                can acknowledge the lead, write cleanly into the intake system,
                preserve attribution, recognize the firm&apos;s priority signals, and
                alert the right human closer without pretending to be the lawyer.
              </p>
            </section>
            <section className="grid gap-3 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <h3 className="text-lg font-semibold text-foreground">Case development</h3>
              <p>
                A generic agent can draft an email. A firm-specific{` `}
                <Link
                  href="/personal-injury/records-chasing"
                  className="text-primary underline decoration-primary/35 underline-offset-4"
                >
                  records-chasing system
                </Link>{` `}
                knows the provider, authorization status, prior attempts, expected
                documents, matter stage, and when another failed request needs human
                attention.
              </p>
            </section>
            <section className="grid gap-3 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <h3 className="text-lg font-semibold text-foreground">Client updates</h3>
              <p>
                A writing assistant can make a message sound polished. A governed{` `}
                <Link
                  href="/personal-injury/client-communication"
                  className="text-primary underline decoration-primary/35 underline-offset-4"
                >
                  client communication system
                </Link>{` `}
                can distinguish a routine status request from frustration, a medical
                issue, a settlement question, or a message that should reach an
                attorney immediately.
              </p>
            </section>
            <section className="grid gap-3 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <h3 className="text-lg font-semibold text-foreground">Data migration</h3>
              <p>
                A destination vendor can explain its import format. A hands-on{` `}
                <Link
                  href="/services/case-management-migration"
                  className="text-primary underline decoration-primary/35 underline-offset-4"
                >
                  case-management migration
                </Link>{` `}
                must discover old conventions, clean records, map fields and users,
                test representative matters, reconcile exceptions, and verify that
                the new system reflects how the firm works.
              </p>
            </section>
          </div>
          <p>
            In each example, the reusable AI capability already exists. The economic
            value comes from fitting it to a repeated workflow and making the handoff
            reliable.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2
            id="build-or-buy"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            When to buy, configure, or build
          </h2>
          <p>
            Not every workflow deserves custom software. Bespoke work adds setup,
            testing, maintenance, security, and ownership. Use it where those costs
            are justified.
          </p>
          <div className="divide-y divide-primary/20 border-y border-primary/20">
            <section className="grid gap-3 py-7 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <h3 className="text-xl font-semibold text-foreground">Buy</h3>
              <p>
                The task is common, the standard workflow fits, and the vendor&apos;s
                product already handles the data and risk. Research and first-draft
                tools often belong here.
              </p>
            </section>
            <section className="grid gap-3 py-7 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <h3 className="text-xl font-semibold text-foreground">Configure</h3>
              <p>
                The platform is right, but fields, templates, routing rules,
                integrations, or permissions need to match the firm. Use the vendor&apos;s
                supported workflow layer where it is sufficient.
              </p>
            </section>
            <section className="grid gap-3 py-7 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <h3 className="text-xl font-semibold text-foreground">Build bespoke</h3>
              <p>
                The workflow repeats, crosses systems, carries measurable value, and
                depends on firm-specific context or handoffs. The agent should work
                around your systems, not create another isolated destination.
              </p>
            </section>
            <section className="grid gap-3 py-7 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <h3 className="text-xl font-semibold text-foreground">Do not automate</h3>
              <p>
                The work is rare, poorly understood, dominated by legal judgment, or
                based on unreliable data. Fix the process first or keep it human.
              </p>
            </section>
          </div>
        </section>

        <section className="mt-14 space-y-5">
          <h2
            id="start"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41]"
          >
            How to start without overbuilding
          </h2>
          <p>
            Pick one workflow that creates visible friction every week. Follow one
            real matter through it. Count the systems touched, repeated entries,
            waiting points, exceptions, and moments where only one experienced person
            knows what to do.
          </p>
          <p>
            Then define a narrow outcome: acknowledge every after-hours inquiry,
            reduce manual records follow-up, or eliminate duplicate entry between two
            systems. Establish a baseline before adding AI.
          </p>
          <p>
            Build the smallest agent that can improve that outcome while keeping
            legal judgment and sensitive communication with people. Test ordinary
            cases and ugly exceptions. Log what happens. Expand only after the
            workflow is reliable.
          </p>
          <p>
            The prerequisite is not a larger AI budget. It is{` `}
            <Link
              href="/blog/why-ai-readiness-matters-pi-firms"
              className="text-primary underline decoration-primary/35 underline-offset-4"
            >
              operational readiness
            </Link>
            : clear ownership, usable data, documented handoffs, and agreement about
            what the agent may do.
          </p>
          <p className="border-y border-primary/30 py-7 text-2xl font-semibold leading-10 text-foreground">
            The point of bespoke AI is not to own more software. It is to remove a
            costly piece of friction that no general product is designed to own.
          </p>
        </section>

        <section id="faq" className="mt-16 scroll-mt-24 border-t border-primary/30 pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            Common questions
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground">
            Bespoke AI agents for PI firms
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
            Find the workflow your vendors will not own
          </h2>
          <p className="mt-4 max-w-3xl">
            Possible Minds helps PI firms map the operating problem, decide what
            should remain human, and build a narrow agent around the systems the firm
            already uses.
          </p>
          <Link
            href="/consult"
            className="mt-6 inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Request a workflow diagnostic
          </Link>
        </section>
      </article>
    </div>
  );
}
