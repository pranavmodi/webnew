import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquareText,
  RefreshCw,
  ShieldCheck,
  Tag,
} from "lucide-react";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "ai-learning-loop-precise-imaging";
const pageTitle = "How We Built a Learning Loop for Precise Imaging's AI System";
const metaTitle = `How to Build an AI Learning Loop | ${SITE_NAME}`;
const pageDescription =
  "How Precise Imaging turns staff corrections on 600+ daily emails into tested AI improvements using skills, feedback, and evals.";
const pageUrl = `${SITE_URL}/blog/${slug}`;
const publishedDate = "2026-09-22";

const contents = [
  { id: "what-learning-means", label: "What self-learning means here" },
  { id: "skills", label: "1. Separate business rules from code" },
  { id: "evals-first", label: "2. Build evals before changing rules" },
  { id: "human-feedback", label: "3. Capture feedback inside daily work" },
  { id: "learning-step", label: "4. Turn feedback into proposed changes" },
  { id: "regression-gate", label: "5. Re-run evals after every update" },
  { id: "profit", label: "6. Let the learning compound" },
  { id: "pi-firm-playbook", label: "How a PI firm can start" },
];

const faqs = [
  {
    question: "What is an AI learning loop?",
    answer:
      "An AI learning loop is a controlled process that captures human corrections, finds recurring error patterns, improves the system's instructions, and tests every change before release. The goal is to prevent the same operational mistake from recurring.",
  },
  {
    question: "Does a self-learning AI system retrain its model automatically?",
    answer:
      "Not necessarily, and ours does not depend on autonomous model retraining. The loop improves the business instructions, examples, evaluation cases, and workflow around the model. Humans still approve changes and production releases.",
  },
  {
    question: "Why keep AI business logic in SKILL.md files?",
    answer:
      "Separating operational instructions from application code makes the firm's rules easier to inspect, review, version, test, and move between models. Code runs the machinery; the skill describes how the business wants the work performed.",
  },
  {
    question: "How did Precise Imaging staff give the AI feedback?",
    answer:
      "Staff stayed inside Front, the CRM inbox they already used. They could apply an AI:Training tag to a conversation, correct the operational result, and add a comment explaining what should have happened. That created a reviewable feedback queue without requiring a separate reporting workflow.",
  },
  {
    question: "How can a PI firm build a similar learning loop?",
    answer:
      "Choose one bounded workflow, write down its rules, create reviewed examples with expected results, capture corrections in the system staff already use, review feedback on a regular cadence, and require the full eval set to pass before each update reaches production.",
  },
];

const loopSteps = [
  ["Run", "The AI handles a bounded production task"],
  ["Review", "Staff correct the work in Front"],
  ["Flag", "AI:Training captures the example"],
  ["Learn", "Recurring patterns suggest a skill change"],
  ["Test", "The full eval suite checks the update"],
  ["Release", "An approved version returns to production"],
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "AI learning loop",
    "AI evaluation framework",
    "human feedback AI system",
    "AI email automation",
    "law firm AI learning loop",
    "AI evals for legal operations",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    publishedTime: publishedDate,
    modifiedTime: publishedDate,
    authors: ["Pranav Modi"],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
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
      datePublished: publishedDate,
      dateModified: publishedDate,
      author: { "@type": "Person", name: post.author },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: pageUrl,
      articleSection: "AI Operations",
      keywords:
        "AI learning loop, AI evals, human feedback, email automation, legal operations",
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
        { "@type": "ListItem", position: 3, name: pageTitle, item: pageUrl },
      ],
    },
  ];

  return (
    <div className="bg-black pb-24">
      <ClickBeacon page="blog-ai-learning-loop-precise-imaging" />
      <JsonLd data={structuredData} />

      <header className="border-b border-primary/20 bg-[#050807]">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24">
          <div className="flex items-center gap-3 text-xs text-foreground/65">
            <Link href="/blog" className="transition hover:text-primary">
              Blog
            </Link>
            <span aria-hidden="true" className="text-primary/50">
              /
            </span>
            <span>AI Operations</span>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase text-[#00ff41]">
            Field notes from a production AI system
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.7rem]">
            {pageTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80 sm:text-xl">
            More than 600 emails arrive each day. Every staff correction should
            make the system less likely to repeat the same mistake. Here is the
            six-part loop we built to make that happen.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/60">
            <span>{post.author}</span>
            <span aria-hidden="true">/</span>
            <time dateTime={publishedDate}>{post.date}</time>
            <span aria-hidden="true">/</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      <main>
        <BlogTableOfContents items={contents} faqHref="#faq" />

        <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
          <div className="border-y border-primary/30 py-8">
            <p className="text-xs font-semibold uppercase text-primary/80">
              In plain English
            </p>
            <p className="mt-4 text-xl leading-9 text-foreground/95 sm:text-2xl sm:leading-10">
              A useful AI system should not make the same corrected mistake forever.
              At Precise Imaging, staff flag real conversations in Front, explain
              corrections, and feed those examples into a controlled improvement
              process. Business rules live in editable skill files. Proposed changes
              must pass evals before they reach production. People remain the teachers;
              the system makes their lessons reusable.
            </p>
          </div>

          <ol className="mt-10 grid border-y border-white/10 sm:grid-cols-3">
            {loopSteps.map(([label, detail], index) => (
              <li
                key={label}
                className="min-h-32 border-b border-white/10 p-5 sm:border-r sm:[&:nth-child(3n)]:border-r-0 sm:[&:nth-last-child(-n+3)]:border-b-0"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-lg font-semibold text-white">{label}</span>
                  <span className="font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-foreground/55">{detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
          <section className="space-y-6">
            <p className="text-xl leading-9 text-foreground/95">
              A staff member opens an email in Front. The AI has placed it in the
              wrong operational queue. She corrects the tag, moves the conversation,
              and gets on with her day.
            </p>
            <p>
              Ordinary software forgets that moment. The same edge case returns next
              week, and another employee makes the same repair. At small volume this is
              irritating. Across the more than 600 daily emails handled by Precise
              Imaging, repeated corrections become a real operating cost.
            </p>
            <p>
              Our <Link href="/healthcare-case-study" className="text-primary underline decoration-primary/35 underline-offset-4">work with Precise Imaging</Link> began with email triage: reading incoming messages, applying operational tags, routing work, handling documents, and preparing approved responses. The more interesting problem came next. How could the system retain what staff learned from real work without allowing it to change itself recklessly?
            </p>
            <p>
              The answer was not model training in the conventional sense. It was an
              operating loop connecting production usage, human judgment, editable
              instructions, and regression tests.
            </p>
          </section>

          <section id="what-learning-means" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              What &quot;self-learning&quot; means in a governed system
            </h2>
            <p>
              Self-learning is convenient shorthand, but it can create the wrong
              picture. The production model does not quietly rewrite its own rules
              after every correction. One person&apos;s preference should not become
              company policy merely because it was expressed last.
            </p>
            <p>
              In our design, the system learns through a controlled sequence. Staff
              identify an error in the tool they already use. The full conversation,
              original decision, correction, and explanation become evidence. At a
              regular cadence, that evidence is reviewed for recurring patterns. The
              smallest useful improvement is proposed, tested, reviewed, and only then
              released.
            </p>
            <div className="flex gap-4 border-y border-primary/25 py-6">
              <ShieldCheck className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-foreground/90">
                The loop is automated where repetition helps and deliberately human
                where judgment matters. That boundary is what makes learning safer than
                simply accumulating prompts or retraining on every correction.
              </p>
            </div>
          </section>

          <section id="skills" className="mt-16 scroll-mt-28 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <span className="font-mono text-sm">01</span>
              <span className="h-px flex-1 bg-primary/25" />
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Keep the business logic in SKILL.md files
            </h2>
            <p>
              The first design decision was to separate what the software does from
              what Precise Imaging knows.
            </p>
            <p>
              Application code handles the plumbing: receiving a Front webhook,
              reading a thread, calling a model, applying an approved action, recording
              a trace, and handling failures. A skill file contains the operational
              instructions: how to interpret a request, which facts matter, what a good
              result contains, and when the system must stop and send the work to a
              person.
            </p>
            <div className="overflow-x-auto border-y border-white/10">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 text-sm">
                    <th className="px-4 py-4 font-semibold text-primary">Code owns</th>
                    <th className="px-4 py-4 font-semibold text-white">The skill owns</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["APIs, queues, permissions, logging, and retries", "Firm terminology, policy, decision rules, and examples"],
                    ["How information moves safely", "What the information means operationally"],
                    ["Execution and observability", "Expected output, exceptions, and human handoffs"],
                  ].map(([code, skill]) => (
                    <tr key={code}>
                      <td className="px-4 py-4 text-foreground/90">{code}</td>
                      <td className="px-4 py-4">{skill}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              A Markdown skill is readable by an operator, reviewable in a code change,
              versioned over time, and portable across models. It turns the company&apos;s
              accumulated corrections into an asset the company can inspect and own.
              It also gives the learning step a bounded place to propose improvements.
            </p>
            <p>
              We do not expose Precise&apos;s actual skill files. They contain private
              operating logic, language, and exception handling. The reusable lesson is
              the boundary: keep proprietary business judgment outside the application
              plumbing.
            </p>
          </section>

          <section id="evals-first" className="mt-16 scroll-mt-28 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <span className="font-mono text-sm">02</span>
              <span className="h-px flex-1 bg-primary/25" />
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Build evals before you start improving the system
            </h2>
            <p>
              We learned this in the wrong order. Early in the project, we focused on
              getting the production workflow to work and treated systematic evals as
              something we could add later. That delay cost us.
            </p>
            <p>
              The cost was uncertainty. A rule change could fix the conversation in
              front of us while changing behavior somewhere else. Verifying releases
              required more manual checking, debugging took longer, and a convincing
              example could create more confidence than it deserved.
            </p>
            <p>
              An eval converts a reviewed example into a durable test. It includes a
              representative input, the human-approved result, and the conditions that
              determine whether the system passed. The Precise suite covers ordinary
              requests, ambiguous language, multi-step threads, document-driven work,
              dangerous edge cases, and situations where the correct action is to defer
              to staff.
            </p>
            <p>
              Production failures are especially valuable. Once reviewed and stripped
              of unnecessary identifying information, they can become regression cases.
              The mistake may happen once in live work, but it should remain in the test
              set for every future version.
            </p>
            <p>
              This is the practical meaning behind <Link href="/blog/the-real-reason-ai-evals-matter" className="text-primary underline decoration-primary/35 underline-offset-4">why AI evals matter</Link>: they create memory for the system&apos;s quality standard.
            </p>
          </section>

          <section id="human-feedback" className="mt-16 scroll-mt-28 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <span className="font-mono text-sm">03</span>
              <span className="h-px flex-1 bg-primary/25" />
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Capture feedback where humans already work
            </h2>
            <p>
              A learning loop fails when reporting an error requires a second system,
              a long form, or a meeting with the AI team. The people who see the most
              useful exceptions are usually busy resolving them.
            </p>
            <p>
              Precise&apos;s team works in Front, a shared CRM inbox. We used that existing
              interface as the feedback mechanism. When an AI-assisted result needs
              attention, a staff member can apply the <strong className="text-white">AI:Training</strong> tag to the conversation. They can correct the operational tag or output and add an internal comment explaining what was wrong or what should have happened.
            </p>
            <div className="grid gap-0 border-y border-primary/20 sm:grid-cols-2">
              <div className="border-b border-primary/15 p-6 sm:border-b-0 sm:border-r">
                <Tag className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-white">The tag says: review this</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/60">
                  It creates a visible queue of production examples without interrupting
                  the staff member&apos;s normal workflow.
                </p>
              </div>
              <div className="p-6">
                <MessageSquareText className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-white">The comment says: here is why</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/60">
                  The explanation preserves human reasoning that a corrected label alone
                  cannot capture.
                </p>
              </div>
            </div>
            <p>
              The training record can retain the original conversation, the AI&apos;s
              decision, the corrected outcome, the staff explanation, and the trace of
              how the system reached its result. A correction is evidence, however, not
              an automatic instruction. It enters a review queue first.
            </p>
          </section>

          <section id="learning-step" className="mt-16 scroll-mt-28 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <span className="font-mono text-sm">04</span>
              <span className="h-px flex-1 bg-primary/25" />
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Add a regular learning step
            </h2>
            <p>
              Collecting feedback is not learning. Someone, or something, has to turn
              examples into a better shared method.
            </p>
            <p>
              At a regular cadence, the Precise loop reviews newly flagged Front
              conversations together with their human comments and system traces. It
              looks for recurring patterns rather than treating every correction as a
              new universal rule. When a pattern is credible, the system proposes the
              smallest change to the relevant skill and identifies the eval cases that
              should be added or updated.
            </p>
            <p>
              A person reviews the proposal. They can reject it, narrow it, or approve
              it for testing. This protects the system from contradictory feedback,
              one-off preferences, malicious instructions inside an email, and the
              temptation to overfit a rule to the most recent failure.
            </p>
            <div className="flex gap-4 border-y border-white/10 py-6">
              <RefreshCw className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-foreground/90">
                The learning step produces a proposed, reviewable change. It does not
                grant the production agent permission to edit its own instructions.
              </p>
            </div>
          </section>

          <section id="regression-gate" className="mt-16 scroll-mt-28 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <span className="font-mono text-sm">05</span>
              <span className="h-px flex-1 bg-primary/25" />
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Re-run the eval suite after every update
            </h2>
            <p>
              The proposed change must solve the target problem and preserve behavior
              elsewhere. That second requirement is where intuition is least reliable.
            </p>
            <p>
              Every approved skill edit triggers the relevant eval suite. The tests
              replay reviewed examples and compare the new output with the expected
              result. A release can be stopped when it introduces a regression, weakens
              a human-review boundary, or improves one category by making another less
              reliable.
            </p>
            <ol className="divide-y divide-white/10 border-y border-white/10">
              {[
                ["Target", "Did the update fix the pattern that prompted it?"],
                ["Regression", "Did previously correct scenarios remain correct?"],
                ["Restraint", "Does the system still defer when evidence is incomplete?"],
                ["Trace", "Can a reviewer understand which version produced the result?"],
                ["Rollback", "Can the prior skill version be restored if production disagrees?"],
              ].map(([label, detail]) => (
                <li key={label} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr]">
                  <span className="font-semibold text-white">{label}</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ol>
            <p>
              Models will change. Vendors will change. The eval set remains the
              company&apos;s definition of acceptable behavior. That is why the durable
              asset is not a particular model; it is the combination of the firm&apos;s
              skill, feedback history, and tests.
            </p>
          </section>

          <section id="profit" className="mt-16 scroll-mt-28 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <span className="font-mono text-sm">06</span>
              <span className="h-px flex-1 bg-primary/25" />
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Profit from fewer repeated mistakes
            </h2>
            <p>
              &quot;Profit&quot; is the playful final step, but the economics are real.
              A single corrected email saves little. A correction that prevents a
              recurring error across a 600-plus-email day can save attention every day
              thereafter.
            </p>
            <p>
              The return appears as less manual sorting, fewer repeated corrections,
              faster handling of routine requests, more consistent responses, and more
              staff capacity for exceptions that require judgment. It also reduces
              dependence on the one experienced employee who remembers every unusual
              case.
            </p>
            <p>
              The loop does not guarantee that every version is better or that every AI
              project pays off. It gives the company a disciplined way to find out. Each
              correction can improve the shared system instead of disappearing into one
              person&apos;s working memory.
            </p>
            <p className="text-xl leading-9 text-foreground/95">
              That is the compounding advantage: production creates feedback, feedback
              improves the skill, evals protect the improvement, and the next day&apos;s work
              begins from a stronger baseline.
            </p>
          </section>

          <section id="pi-firm-playbook" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              How a PI firm can build the same kind of loop
            </h2>
            <p>
              The workflow does not need 600 daily emails to justify learning. A PI firm
              can begin with one repetitive, reviewable process such as after-hours
              intake, lead follow-up, routine client updates, or records chasing.
            </p>
            <ol className="divide-y divide-primary/20 border-y border-primary/25">
              {[
                ["Choose one workflow", "Pick work with repeated inputs, visible human corrections, and a measurable outcome."],
                ["Write the first skill", "Document the trigger, required facts, expected result, exceptions, and human handoff."],
                ["Create the eval set", "Start with reviewed ordinary cases, ambiguity, edge cases, and examples where the AI must stop."],
                ["Reuse the staff interface", "Add a feedback tag, status, or button inside the intake, case, or inbox system people already use."],
                ["Review on a cadence", "Group similar corrections, propose the smallest rule change, and have an accountable person approve it."],
                ["Gate every release", "Run the complete eval set, inspect failures, version the skill, and keep rollback available."],
              ].map(([title, detail], index) => (
                <li key={title} className="grid gap-2 py-5 sm:grid-cols-[3rem_12rem_1fr] sm:items-baseline">
                  <span className="font-mono text-sm text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-white">{title}</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ol>
            <p>
              For intake, staff might flag a conversation when the system missed a
              competitive-shopping signal, misunderstood case facts, or routed a
              serious matter too slowly. The correction becomes a reviewed example.
              The new rule is tested against ordinary inquiries, emotional callers,
              ambiguous facts, and cases that still require a lawyer&apos;s judgment.
            </p>
            <p>
              This is also why a learning loop should sit inside a <Link href="/personal-injury/vendor-risk-governance" className="text-primary underline decoration-primary/35 underline-offset-4">governed AI workflow</Link>. Access, retention, approval authority, audit history, and human review are part of the system, not paperwork added after deployment.
            </p>
          </section>

          <section id="faq" className="mt-16 scroll-mt-28 space-y-8">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Frequently asked questions
            </h2>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-7">
                  <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                  <p className="mt-3">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 border-y border-primary/30 py-10">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Start with a workflow your team can correct.
                </h2>
                <p className="mt-3">
                  Possible Minds builds governed AI systems around real operating work,
                  then gives the people doing that work a practical way to teach the
                  system over time.
                </p>
                <div className="mt-5 flex flex-wrap gap-5">
                  <Link href="/ai-readiness-assessment" className="inline-flex items-center gap-2 text-primary underline underline-offset-4">
                    Take the intake diagnostic
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                  <Link href="/healthcare-case-study" className="text-foreground/70 underline decoration-white/25 underline-offset-4 hover:text-white">
                    Read the Precise Imaging case study
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
