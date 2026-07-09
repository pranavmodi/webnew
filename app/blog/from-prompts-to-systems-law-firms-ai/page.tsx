import { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { CALENDLY_URL, SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "from-prompts-to-systems-law-firms-ai";
const pageTitle = "From Prompts to Systems: How Law Firms Should Absorb AI";
const metaTitle = `From Prompts to Systems: Law Firm AI | ${SITE_NAME}`;
const pageDescription =
  "Good AI prompting is good legal delegation. Learn the six-part instruction anatomy lawyers need and why firms must move from prompts to AI systems.";
const pageUrl = `${SITE_URL}/blog/${slug}`;

const instructionParts = [
  {
    title: "Task",
    body: "What do you want done? Not just the action, but the actual business purpose of the work.",
  },
  {
    title: "Background",
    body: "What does the model need to know about the client, file, audience, stage, and available source material?",
  },
  {
    title: "Judgment",
    body: "What matters, what does not, and why? This is where the lawyer or operator transfers the standard for a good answer.",
  },
  {
    title: "Constraints",
    body: "What must the answer not assume, not say, not decide, or not do without human review?",
  },
  {
    title: "Deliverable",
    body: "What should the finished work product look like: a memo, checklist, call summary, client update, ranked issue list, or draft email?",
  },
  {
    title: "Verification",
    body: "What needs to be checked before anyone relies on it: citations, medical-record references, case facts, dates, source documents, or attorney judgment?",
  },
];

const promptExamples = [
  {
    weak: "Summarize this intake transcript.",
    serious:
      "Review this intake transcript for a PI intake director. Flag case-fit facts, liability signals, injury severity, treatment status, missing facts, urgency, and anything that should be escalated to attorney review.",
    why: "It tells the model what the firm is trying to decide, not just what file to shorten.",
  },
  {
    weak: "Review these medical records.",
    serious:
      "Summarize the treatment timeline, identify gaps or uncertainty, separate documented facts from possible conclusions, and list questions a case manager should verify before demand preparation.",
    why: "It preserves uncertainty instead of turning the records into false confidence.",
  },
  {
    weak: "Write a client update.",
    serious:
      "Draft a plain-English status update for a client whose records are still pending. Explain what happened, what is next, what the client needs to do, and what should be escalated to staff if they ask for legal advice.",
    why: "It separates routine communication from attorney judgment.",
  },
  {
    weak: "Research this issue.",
    serious:
      "Give me a bottom-line-up-front memo that separates settled law from open questions, states confidence levels, and verifies every citation before listing practical next steps.",
    why: "It defines the standard of reliance instead of rewarding a confident-looking answer.",
  },
];

const systemExamples = [
  {
    title: "Intake qualification",
    body:
      "A workflow captures the facts that affect fit, urgency, source quality, language, injury severity, treatment status, and attorney review.",
    href: "/personal-injury/intake-automation",
    anchor: "AI intake automation",
  },
  {
    title: "After-hours lead capture",
    body:
      "A workflow responds when staff are unavailable, qualifies the caller, logs the source, and escalates high-value or urgent matters.",
    href: "/personal-injury/after-hours-intake",
    anchor: "after-hours intake workflows",
  },
  {
    title: "Records chasing",
    body:
      "A workflow tracks missing records, bills, imaging, authorizations, and provider follow-up without making staff rebuild status from inboxes.",
    href: "/personal-injury/records-chasing",
    anchor: "records chasing and case development",
  },
  {
    title: "Client communication",
    body:
      "A workflow sends routine status updates, routes sensitive questions to humans, and keeps communication from becoming a source of client dissatisfaction.",
    href: "/personal-injury/client-communication",
    anchor: "client communication systems",
  },
  {
    title: "Lien tracking",
    body:
      "A workflow tracks lienholders, balances, requests, responses, and reduction work so settlement does not stall at the finish line.",
    href: "/personal-injury/lien-reduction",
    anchor: "lien workflows",
  },
  {
    title: "Vendor-risk review",
    body:
      "A workflow checks where client data is going, who owns the tool, what gets logged, and which AI uses need supervision or escalation.",
    href: "/personal-injury/vendor-risk-governance",
    anchor: "AI governance and vendor-risk controls",
  },
];

const faqs = [
  {
    question: "What is a good AI prompt for a lawyer?",
    answer:
      "A good AI prompt for a lawyer is a serious instruction. It explains the task, background, judgment standard, constraints, deliverable, and verification steps before anyone relies on the output.",
  },
  {
    question: "Why do lawyers get generic AI answers?",
    answer:
      "Lawyers usually get generic AI answers because they give generic instructions. The model gets the task, but not the client context, audience, uncertainty standard, review rules, or business purpose.",
  },
  {
    question: "Is prompting AI a technical skill?",
    answer:
      "Mostly no. Good prompting is closer to good delegation than technical wizardry. The same lawyer who can brief a good associate can usually learn to brief an AI system well.",
  },
  {
    question: "What is the difference between an AI prompt and an AI system?",
    answer:
      "A prompt is a one-off instruction. An AI system is a repeatable workflow that uses approved context, runs by default, escalates uncertainty, logs what happened, and improves the operating model over time.",
  },
  {
    question: "Where should a personal injury firm start with AI?",
    answer:
      "A PI firm should start with one measurable workflow, such as intake, after-hours lead capture, records chasing, client updates, lien tracking, or vendor-risk review. The best first project is the workflow with a real leak and clear review rules.",
  },
  {
    question: "How should law firms manage AI risk?",
    answer:
      "Law firms should define approved tools, data rules, human-review gates, escalation paths, confidence thresholds, audit trails, and vendor-risk controls before expanding AI use across sensitive workflows.",
  },
  {
    question: "Can AI replace lawyers or paralegals?",
    answer:
      "AI can reduce repetitive drafting, summarization, follow-up, and routing work. It should not replace legal judgment, supervision, attorney-client responsibility, or human review in sensitive or low-confidence situations.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "AI prompts for law firms",
    "legal AI adoption",
    "AI for personal injury law firms",
    "AI systems for law firms",
    "law firm AI strategy",
    "legal AI workflows",
    "AI delegation for lawyers",
    "firm-owned AI systems",
    "AI governance for law firms",
    "legal workflow automation",
    "AI intake automation",
    "client communication automation",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
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
      datePublished: "2026-07-09",
      dateModified: "2026-07-09",
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
        "AI prompts for law firms, legal AI adoption, AI for personal injury law firms, AI systems for law firms, legal AI workflows, AI governance for law firms",
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
      <JsonLd data={structuredData} />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#04150d] to-black">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link href="/blog" className="transition hover:text-primary">
                Blog
              </Link>
              <span className="text-primary/40">/</span>
              <span>AI Strategy</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              From Prompts to Systems: How Law Firms Should Absorb AI
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              Most lawyers think AI quality depends on the model. In practice,
              the first bottleneck is often instruction quality. The firm-level
              opportunity is turning the best instructions into repeatable,
              governed workflows.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {[post.author, post.date, post.readTime].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/20 bg-[#04150d] px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl space-y-12 px-4 pt-12 text-foreground/85 sm:px-6">
        <section className="space-y-4">
          <p>
            A partner uploads a document, an intake transcript, or a set of
            medical records. He asks the model to summarize, review, research,
            or fix it. The answer comes back thin, generic, and vaguely useful.
          </p>
          <p>
            The wrong lesson is that the model is generic. The better lesson is
            that the instruction was generic.
          </p>
          <p>
            This is the first practical lesson in <strong>AI prompts for law firms</strong>:
            the model often gets the task but not the judgment. It gets the file,
            but not the client&apos;s worries. It gets the command, but not the
            standard for a usable answer. It gets &quot;summarize this&quot; when the
            lawyer really needed a client-ready explanation, a case-fit review,
            a risk-ranked issue list, or a memo that separates settled law from
            open questions.
          </p>
          <p>
            Prompting matters because it teaches lawyers how to give AI real
            context. But prompting is not the destination. The larger challenge
            is how a law firm absorbs AI into repeatable workflows, review rules,
            governance, client service, and operating systems.
          </p>
        </section>

        <section className="rounded-2xl border border-primary/25 bg-[#04150d] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            In plain English
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/75">
            A good AI prompt for a lawyer is a serious instruction, not a magic
            phrase. It gives the model the task, background, judgment,
            constraints, deliverable, and verification standard. Prompting is
            useful because it teaches lawyers how to delegate to AI. But firms
            create leverage only when repeated prompts become governed workflows
            and firm-owned AI systems.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Generic prompts create generic work
          </h2>
          <p>
            The model is not a mind reader. If a lawyer says, &quot;Review this,&quot;
            the model has to guess what kind of review matters. Is this about
            legal risk, client communication, negotiation posture, missing facts,
            medical causation, treatment gaps, or settlement value?
          </p>
          <p>
            A weak instruction asks for activity. A serious instruction names
            the decision the work is supposed to support.
          </p>
          <p>
            &quot;Summarize this redline&quot; is weaker than: &quot;Explain what changed in
            this redline for a client who cares most about control, timing, and
            downside risk.&quot; &quot;Research this&quot; is weaker than: &quot;Give me a
            bottom-line memo that separates settled law from open questions and
            verifies every citation.&quot;
          </p>
          <p>
            For a personal injury firm, the same pattern shows up everywhere.
            &quot;Review this intake transcript&quot; is weaker than: &quot;Flag the facts
            that affect case fit, urgency, treatment gaps, insurance coverage,
            and attorney review.&quot; &quot;Summarize these medical records&quot; is weaker
            than: &quot;Build a treatment timeline, preserve uncertainty, identify
            missing documentation, and list the items a case manager should
            verify before demand preparation.&quot;
          </p>
          <p>
            Better instructions do not make AI infallible. They make the output
            easier to review, easier to route, and less likely to hide uncertainty
            behind confident language.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The six-part anatomy of a serious legal AI instruction
          </h2>
          <p>
            A serious legal AI instruction has six parts. None of them require
            code, syntax, plugins, or special settings. They are the same pieces
            a strong partner would give a strong associate before expecting
            useful work.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {instructionParts.map((part, index) => (
              <section
                key={part.title}
                className="rounded-2xl border border-primary/20 bg-[#04150d]/60 p-5"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {index + 1}. {part.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {part.body}
                </p>
              </section>
            ))}
          </div>

          <div className="overflow-x-auto rounded-2xl border border-primary/20 bg-[#04150d]/60">
            <table className="min-w-[760px] border-collapse text-left text-sm">
              <thead className="border-b border-primary/20 text-primary">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Weak instruction
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Serious instruction
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Why it works better
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10 text-foreground/75">
                {promptExamples.map((example) => (
                  <tr key={example.weak}>
                    <td className="px-4 py-4 align-top">{example.weak}</td>
                    <td className="px-4 py-4 align-top">{example.serious}</td>
                    <td className="px-4 py-4 align-top">{example.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Good prompting is good delegation
          </h2>
          <p>
            The lawyers who learn this fastest are often not the most technical.
            They are the best delegators.
          </p>
          <p>
            Good delegation tells a person what matters, what does not, what the
            client is worried about, what the audience will notice, what the
            answer must not assume, and what needs verification before the work
            product leaves the building. Good prompting does the same thing.
          </p>
          <p>
            Treat the model like a brilliant new associate who has read
            everything and knows nothing about your client, your file, your
            tolerance for uncertainty, or your firm&apos;s standard of care. Brief it
            accordingly.
          </p>
          <p>
            That mindset is the first layer of <strong>legal AI adoption</strong>.
            It helps lawyers see that many bad outputs are not proof that AI is
            useless. They are proof that the firm has not yet learned how to
            transfer judgment into the instruction.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The prompt layer is useful, but it is not the firm-level answer
          </h2>
          <p>
            Good prompting proves that AI can do real work when it receives real
            instruction. That matters. It gives lawyers confidence. It helps
            teams discover where AI can assist with drafting, summarization,
            triage, translation, and review.
          </p>
          <p>
            But a firm cannot run on heroic individual prompts. If every useful
            AI output depends on one skilled person remembering the perfect
            instruction, the firm has not built leverage. It has created another
            personal productivity habit.
          </p>
          <p>
            Individual prompt quality does not automatically create institutional
            quality. A firm also needs approved context, repeatable workflows,
            review rules, escalation paths, data controls, audit trails, and
            measurement. That is where <strong>AI systems for law firms</strong>
            become different from casual AI use.
          </p>
          <p>
            This is especially important in plaintiff-side work because the file
            contains sensitive medical, financial, and personal information. A
            model may help summarize, draft, or route, but human review and
            attorney judgment still matter where advice, strategy, uncertainty,
            or client rights are involved.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            From prompts to systems
          </h2>
          <p>
            At Possible Minds, an AI system is a repeatable workflow that runs by
            default, uses approved context, escalates uncertainty, logs what
            happened, and improves the operating model over time.
          </p>
          <p>
            That is the difference between a staff member asking for help with a
            one-off summary and a firm-owned workflow that keeps cases moving.
            It is also why our work on <Link href="/personal-injury" className="text-primary underline-offset-4 hover:underline">AI systems for personal injury firms</Link>
            starts with the operational leak, not the demo.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {systemExamples.map((example) => (
              <section
                key={example.title}
                className="rounded-2xl border border-primary/20 bg-[#04150d]/60 p-5"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {example.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {example.body}
                </p>
                <Link
                  href={example.href}
                  className="mt-4 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  {example.anchor}
                </Link>
              </section>
            ))}
          </div>
          <p>
            This is where <strong>AI for personal injury law firms</strong> gets
            practical. The useful question is not &quot;Can AI do legal work?&quot; The
            useful question is: &quot;Which workflow has enough repetition, data,
            reviewability, and business impact to support a narrow system?&quot;
          </p>
          <p>
            For a deeper version of the same argument, see our piece on{" "}
            <Link
              href="/blog/tools-vs-systems-pi-firms-ai"
              className="text-primary underline-offset-4 hover:underline"
            >
              tools versus systems
            </Link>{" "}
            and our guide to{" "}
            <Link
              href="/blog/why-ai-readiness-matters-pi-firms"
              className="text-primary underline-offset-4 hover:underline"
            >
              AI readiness for PI firms
            </Link>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Where PI firms should start
          </h2>
          <p>
            Start where the leak is visible. For some firms, that is missed
            calls and after-hours forms. For others, it is records follow-up,
            client status communication, lien resolution, or shadow AI use by
            staff without governance.
          </p>
          <p>
            The best first workflow is rarely the flashiest. It is the one with
            a measurable baseline, a clear human-review path, and enough volume
            that improvement matters. A safe first system should reduce drag
            without pretending to replace attorney judgment.
          </p>
          <p>
            If the firm is not sure where to start, that is a diagnostic problem.
            Map the workflows. Find the stall points. Look at response time,
            cycle time, staff hours, conversion, client communication burden,
            vendor exposure, and risk. Then choose the narrow workflow where AI
            can create leverage safely.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What firm leaders should do next
          </h2>
          <ol className="list-decimal space-y-3 pl-6 text-foreground/75">
            <li>
              Pick one workflow, not the whole firm.
            </li>
            <li>
              Write the six-part instruction anatomy for that workflow.
            </li>
            <li>
              Decide where human judgment is required and where routine work can
              be safely drafted, summarized, routed, or queued.
            </li>
            <li>
              Define confidence thresholds, escalation rules, and what the system
              must never decide on its own.
            </li>
            <li>
              Measure one or two outcomes: response time, cycle time, staff
              hours, conversion, client-update volume, risk reduction, or vendor
              exposure.
            </li>
            <li>
              Turn the best repeated instruction into a workflow with logging,
              review, ownership, and improvement over time.
            </li>
          </ol>
          <p>
            The goal is not to make every lawyer a prompt engineer. The goal is
            to turn the firm&apos;s best judgment into repeatable operating patterns.
            That is a <strong>law firm AI strategy</strong> worth building around.
          </p>
          <p>
            For common adoption and governance questions, the{" "}
            <Link
              href="/personal-injury/faq"
              className="text-primary underline-offset-4 hover:underline"
            >
              PI AI FAQ
            </Link>{" "}
            is a useful companion.
          </p>
        </section>

        <section id="faq" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <section
                key={faq.question}
                className="rounded-2xl border border-primary/20 bg-[#04150d]/60 p-5"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {faq.answer}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <p>
            Prompting teaches the firm how to brief the machine. Systems teach
            the firm how to absorb it.
          </p>
          <p>
            The first layer is better instruction. The durable advantage is a
            workflow that runs with the firm&apos;s context, rules, review standards,
            and learning loop built in.
          </p>
        </section>

        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-[#00ff41]">
            Start with the workflow that is ready
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-foreground/70">
            If you want to know which workflow can safely create leverage first,
            start with a diagnostic. We look for the operational leak before
            recommending the system.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <a href={CALENDLY_URL}>Book a Diagnostic Call</a>
          </Button>
        </section>
      </article>
    </div>
  );
}
