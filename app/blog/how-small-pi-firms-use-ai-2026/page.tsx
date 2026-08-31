import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "how-small-pi-firms-use-ai-2026";
const pageTitle =
  "How Lawyers Are Actually Using AI in 2026: A Small PI Firm Owner's Guide";
const metaTitle = `How Small PI Firms Can Use AI in 2026 | ${SITE_NAME}`;
const pageDescription =
  "How solo and small PI firms can use AI for intake, documents, research, monitoring, and client service without giving up control.";
const pageUrl = `${SITE_URL}/blog/${slug}`;

const contents = [
  { id: "what-changed", label: "What changed in legal AI" },
  { id: "useful-workflows", label: "Seven useful PI workflows" },
  { id: "start-with-intake", label: "Why intake is the right first workflow" },
  { id: "human-boundary", label: "What AI prepares and humans decide" },
  { id: "protect-information", label: "How to protect client information" },
  { id: "train-the-team", label: "How to train the team without weakening judgment" },
  { id: "thirty-day-plan", label: "A practical 30-day plan" },
];

const faqs = [
  {
    question: "What is the best first AI use case for a small personal injury firm?",
    answer:
      "Intake is often the strongest first candidate because it is frequent, time-sensitive, measurable, and easy to keep human-led. AI can acknowledge the inquiry, structure facts, identify missing information, and prepare the record while staff or a lawyer owns qualification, empathy, and the decision to sign the case.",
  },
  {
    question: "Can a solo PI lawyer use AI without hiring an engineer?",
    answer:
      "Yes, for bounded tasks such as summarizing approved documents, preparing drafts, and working from templates. Connected workflows that write into case-management systems, monitor inboxes, or handle client data usually require more careful configuration, permissions, testing, and technical support.",
  },
  {
    question: "Should AI be allowed to accept or reject personal injury cases?",
    answer:
      "AI can organize facts and apply clearly documented screening rules, but consequential case-acceptance decisions should remain with qualified people. Serious injuries, unclear liability, approaching deadlines, minors, unusual defendants, and other exceptions should be escalated rather than decided automatically.",
  },
  {
    question: "Can lawyers put confidential client information into any AI account?",
    answer:
      "No. A firm should evaluate the specific product, contract, retention terms, training policy, access controls, storage, logging, and applicable professional and privacy obligations before client information enters an AI system. Consumer access alone is not approval for confidential or regulated data.",
  },
  {
    question: "How should a PI firm measure whether an AI workflow is working?",
    answer:
      "Measure the complete workflow: elapsed time, repeated data entry, staff minutes, correction rate, unresolved exceptions, response time, and the client or case outcome the workflow is meant to improve. More drafts or prompts are activity metrics, not proof of value.",
  },
];

const maturity = [
  { label: "Ask", detail: "Draft or summarize" },
  { label: "Ground", detail: "Use firm examples" },
  { label: "Connect", detail: "Reach approved systems" },
  { label: "Run", detail: "Complete a governed workflow" },
];

const workflows = [
  {
    title: "Intake preparation",
    text: "Turn a call, form, referral, or chat into a structured lead, identify missing facts, send an acknowledgment, and brief the person who will call the prospect.",
  },
  {
    title: "Document assembly",
    text: "Prepare retainers, representation letters, authorizations, provider correspondence, and task lists from approved templates and verified matter data.",
  },
  {
    title: "Medical-record organization",
    text: "Index records, build a draft chronology, surface missing periods, and preserve citations back to the source pages for human verification.",
  },
  {
    title: "Client communication",
    text: "Draft routine status updates, translate case activity into plain language, and escalate questions involving legal advice, dissatisfaction, or material case decisions.",
  },
  {
    title: "Research support",
    text: "Frame research questions, search connected authoritative sources, organize potentially relevant decisions, and return citations for a lawyer to inspect.",
  },
  {
    title: "Case and deadline monitoring",
    text: "Watch approved matter data for missing tasks, stale files, outstanding records, and dates that require staff attention without treating AI as the authoritative calendar.",
  },
  {
    title: "Firm operations",
    text: "Triage email, prepare internal reports, monitor vendor or regulatory developments, and route work to the right person with a visible audit trail.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "AI for small personal injury law firms",
    "how lawyers use AI in 2026",
    "AI for solo lawyers",
    "personal injury law firm automation",
    "legal AI workflows",
    "AI intake for personal injury firms",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-08-31",
    modifiedTime: "2026-08-31",
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
      datePublished: "2026-08-31",
      dateModified: "2026-08-31",
      author: { "@type": "Person", name: post.author },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: pageUrl,
      articleSection: "AI Operations",
      keywords:
        "AI for small personal injury law firms, AI for solo lawyers, legal AI workflows, AI intake",
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
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: pageTitle, item: pageUrl },
      ],
    },
  ];

  return (
    <div className="bg-black pb-24">
      <ClickBeacon page="blog-small-pi-ai-2026" />
      <JsonLd data={structuredData} />

      <header className="border-b border-primary/20 bg-[#050807]">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24">
          <div className="flex items-center gap-3 text-xs text-foreground/65">
            <Link href="/blog" className="transition hover:text-primary">Blog</Link>
            <span aria-hidden="true" className="text-primary/50">/</span>
            <span>AI Operations</span>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase text-[#00ff41]">
            A field guide for solo and small PI firms
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.7rem]">
            How Lawyers Are Actually Using AI in 2026: A Small PI Firm Owner&apos;s Guide
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80 sm:text-xl">
            The useful shift is not from lawyers to machines. It is from repetitive preparation to governed workflows that give lawyers more time for clients and judgment.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/60">
            <span>{post.author}</span><span aria-hidden="true">/</span>
            <time dateTime="2026-08-31">{post.date}</time><span aria-hidden="true">/</span>
            <span>{post.readTime}</span>
          </div>

          <ol className="mt-10 grid border-y border-white/10 sm:grid-cols-4">
            {maturity.map((item, index) => (
              <li key={item.label} className="flex min-h-24 items-center gap-4 border-b border-white/10 py-4 last:border-b-0 sm:block sm:border-b-0 sm:border-r sm:px-5 sm:last:border-r-0">
                <span className="text-sm font-semibold text-primary">0{index + 1}</span>
                <div className="sm:mt-3">
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-xs text-foreground/55">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
        <div className="border-y border-primary/30 py-8">
          <p className="text-xs font-semibold uppercase text-primary/80">In plain English</p>
          <p className="mt-4 text-xl leading-9 text-foreground/95 sm:text-2xl sm:leading-10">
            Lawyers at the leading edge of AI are no longer using it only to draft paragraphs. They are giving it firm examples, connecting it to approved information, and letting it prepare multi-step work for human review. For a small PI firm, the practical opportunity is narrower: choose one repetitive workflow, teach the system how the firm handles it, and keep people responsible for every consequential decision.
          </p>
        </div>
      </section>

      <BlogTableOfContents items={contents} faqHref="#faq" />

      <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
        <section className="space-y-6">
          <p className="text-xl leading-9 text-foreground/95">
            A solo PI lawyer can finish a good intake call and still lose the next hour to administration: opening the matter, entering the same facts again, preparing the retainer, generating authorizations, drafting letters, and assigning follow-up.
          </p>
          <p>
            That is the part of legal work AI is beginning to change. Not the human conversation. Not case selection. Not the judgment that tells an experienced lawyer which fact feels wrong. The change is in everything required to carry verified information from one step to the next.
          </p>
          <p>
            This guide draws on the <a href="https://mission.getpossibleminds.com/podcasts/7793" className="text-primary underline decoration-primary/35 underline-offset-4" target="_blank" rel="noreferrer">Law of Code episode on how lawyers are using AI in 2026</a>. The episode profiles unusually advanced legal teams using agents for drafting, research, email, regulatory monitoring, and contract work. Those examples are the leading edge, not the average firm. The useful question for a small PI owner is what architecture can be borrowed without borrowing the complexity.
          </p>
        </section>

        <section id="what-changed" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">What changed in legal AI</h2>
          <p>
            The first wave of legal AI lived in a chat window. A lawyer pasted text, asked for a summary or draft, and carried the answer into the real workflow by hand. That can save time, but the model remains outside the operating system of the firm.
          </p>
          <p>More advanced legal teams now work through four levels:</p>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {maturity.map((item, index) => (
              <div key={item.label} className="grid gap-2 py-5 sm:grid-cols-[4rem_10rem_1fr] sm:items-baseline">
                <span className="text-sm font-semibold text-primary">0{index + 1}</span>
                <h3 className="text-xl font-semibold text-white">{item.label}</h3>
                <p>{item.detail}. Each level adds leverage, but also requires better permissions, testing, data controls, and review.</p>
              </div>
            ))}
          </div>
          <p>
            In the episode, Michael Showalter describes a practice in which Claude works with selected folders, email, a calendar, a browser, and legal-research connectors. Other teams describe agents built around company playbooks, regulatory monitoring, and structured case-law analysis. The common ingredient is not a magical model. It is a defined workflow supported by examples, sources, permissions, and human correction.
          </p>
          <p>
            This is the difference between using an AI tool and building an <Link href="/blog/tools-vs-systems-pi-firms-ai" className="text-primary underline decoration-primary/35 underline-offset-4">AI system around legal work</Link>.
          </p>
        </section>

        <section id="useful-workflows" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Seven useful workflows for a solo or small PI firm</h2>
          <p>
            A small firm does not need the technology stack of a global legal department. It needs relief where information is repeatedly copied, reconstructed, searched, or chased.
          </p>
          <div className="divide-y divide-primary/20 border-y border-primary/25">
            {workflows.map((workflow, index) => (
              <div key={workflow.title} className="grid gap-3 py-6 sm:grid-cols-[3.5rem_13rem_1fr]">
                <span className="text-2xl font-semibold text-primary/75">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-semibold leading-7 text-white">{workflow.title}</h3>
                <p>{workflow.text}</p>
              </div>
            ))}
          </div>
          <p>
            These are not seven projects to begin at once. They are a menu. The right first workflow is the one that happens often, has recognizable inputs and outputs, causes visible delay, and can pause cleanly when the facts do not fit.
          </p>
        </section>

        <section id="start-with-intake" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Why intake is often the right first workflow</h2>
          <p>
            Intake sits at the beginning of the revenue path. It is frequent, time-sensitive, and measurable. It also has a natural human boundary: AI can prepare the moment, while a person earns the trust and decides what the firm should do.
          </p>
          <ol className="divide-y divide-white/10 border-y border-white/10">
            {[
              ["Respond", "Acknowledge the inquiry immediately, including after hours."],
              ["Structure", "Turn the call, form, or chat into a consistent set of facts."],
              ["Clarify", "Identify missing information and ask approved follow-up questions."],
              ["Prepare", "Create the lead record, transcript, summary, and next-step tasks."],
              ["Escalate", "Send serious, competitive, sensitive, or uncertain matters to the right person."],
            ].map(([title, text], index) => (
              <li key={title} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_9rem_1fr] sm:items-baseline">
                <span className="text-sm font-semibold text-primary">0{index + 1}</span>
                <span className="font-semibold text-white">{title}</span>
                <span>{text}</span>
              </li>
            ))}
          </ol>
          <p>
            The workflow should not impersonate a lawyer, make promises, or quietly reject an unusual case. Its job is to prevent delay and prepare a better human response. That is the design behind <Link href="/solutions/intake-agent" className="text-primary underline decoration-primary/35 underline-offset-4">Intake Agent</Link> and the broader approach to <Link href="/personal-injury/intake-automation" className="text-primary underline decoration-primary/35 underline-offset-4">AI-assisted, human-led intake</Link>.
          </p>
        </section>

        <section id="human-boundary" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">AI prepares. People decide.</h2>
          <p>
            The danger is not simply that AI can be wrong. It is that the answer can look polished enough to discourage scrutiny. The episode calls this cognitive surrender: accepting fluent output without doing the professional work of understanding and checking it.
          </p>
          <div className="overflow-x-auto border-y border-white/10">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 text-sm">
                  <th className="px-4 py-4 font-semibold text-primary">AI can prepare</th>
                  <th className="px-4 py-4 font-semibold text-white">A qualified person should decide or verify</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  ["A structured intake summary", "Whether the firm wants the case and who should speak with the prospect"],
                  ["A draft chronology with source references", "What the medical history means and how it affects case strategy"],
                  ["A draft letter or pleading", "Every fact, authority, allegation, deadline, and filing decision"],
                  ["A list of apparent exceptions", "Whether an exception is material and what action to take"],
                  ["A routine client-update draft", "Legal advice, material case developments, complaints, and sensitive communication"],
                ].map(([prepares, decides]) => (
                  <tr key={prepares}>
                    <td className="px-4 py-4 text-foreground/90">{prepares}</td>
                    <td className="px-4 py-4">{decides}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-4 border-y border-amber-400/25 bg-amber-400/[0.04] py-6">
            <ShieldCheck className="mt-1 size-6 shrink-0 text-amber-300" aria-hidden="true" />
            <p className="text-foreground/90">AI can create leverage. It does not transfer the lawyer&apos;s responsibility for work that is sent, signed, filed, relied upon, or used to advise a client.</p>
          </div>
        </section>

        <section id="protect-information" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Protect client information before connecting the tools</h2>
          <p>
            A promise that a provider does not train on customer data is useful, but incomplete. The firm must also understand what is retained, where it is stored, who can access it, what is logged, which connected systems the agent can reach, and how permissions can be revoked.
          </p>
          <p>Before live client information enters a workflow, the owner should be able to answer:</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Which exact AI product and account are approved?",
              "What do the contract and retention terms permit?",
              "Is customer data used for training or evaluation?",
              "Which folders, matters, inboxes, and fields can the system access?",
              "Can sensitive matters be separated from ordinary work?",
              "Are inputs, outputs, edits, and approvals logged?",
              "Can identifying information be removed when it is unnecessary?",
              "Who reviews the firm's professional and privacy obligations?",
            ].map((item) => (
              <li key={item} className="flex gap-3 border-b border-white/10 pb-3 text-foreground/90">
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Use the least access required for the workflow. A records agent does not need the entire firm inbox. An intake agent does not need settlement authority. A drafting system does not need permission to send the document it creates. These boundaries are part of <Link href="/personal-injury/vendor-risk-governance" className="text-primary underline decoration-primary/35 underline-offset-4">AI governance and vendor-risk control</Link>, not optional cleanup after launch.
          </p>
        </section>

        <section id="train-the-team" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Use AI to teach the work, not hide it</h2>
          <p>
            Routine work has always been part of how junior lawyers and paralegals learn what to notice. If AI silently removes that work, the firm can gain speed while losing judgment.
          </p>
          <p>
            The episode describes a better training pattern. When a junior receives an unfamiliar assignment, AI first explains the doctrines, assumptions, and implied questions. The junior then prepares an independent outline. AI can help refine the final communication, but the junior must understand and own the analysis before it goes back to the assigning lawyer.
          </p>
          <p>
            Small PI firms can apply the same pattern operationally. Ask the intake specialist or paralegal to document how the workflow really works, define what a good output contains, collect representative examples, and identify the exceptions that require escalation. The people closest to the work often make the best agent designers because they know where the process breaks.
          </p>
          <p>
            AI adoption is therefore a management project as much as a technology project. The firm needs an owner, review habits, and a way to retain corrections. Installing another tool without changing the operating behavior is why <Link href="/blog/ai-change-management-personal-injury-firms" className="text-primary underline decoration-primary/35 underline-offset-4">AI transformation still moves at the speed of the firm</Link>.
          </p>
        </section>

        <section id="thirty-day-plan" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">A practical 30-day plan for the owner</h2>
          <div className="divide-y divide-primary/20 border-y border-primary/25">
            {[
              ["Week 1", "Choose one intake path", "Follow one inquiry from arrival to signed, declined, or referred. Record response time, repeated entry, staff minutes, handoffs, and failure points."],
              ["Week 2", "Show the system what good looks like", "Collect approved templates and 10-20 representative examples. Define required fields, pause conditions, escalation rules, and the person responsible for review."],
              ["Week 3", "Run in shadow mode", "Let AI prepare the work without sending messages or changing authoritative records automatically. Compare every output with what staff would have produced."],
              ["Week 4", "Measure and decide", "Review time saved, corrections, missed facts, unresolved exceptions, response speed, and staff experience. Expand only if quality holds under ordinary and difficult cases."],
            ].map(([week, title, text]) => (
              <div key={week} className="grid gap-3 py-6 sm:grid-cols-[6rem_13rem_1fr]">
                <span className="text-sm font-semibold uppercase text-primary">{week}</span>
                <h3 className="text-xl font-semibold leading-7 text-white">{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p>
            Do not measure success by the number of prompts, summaries, or generated documents. Measure whether the complete workflow becomes faster, more consistent, easier to audit, and better for the prospective client. The workflow is ready to expand only when the firm understands both its value and its failure modes.
          </p>
          <p className="text-xl leading-9 text-foreground/95">
            The small firm does not win by having the most AI. It wins by teaching AI one valuable part of the practice, governing it well, and carrying that learning into the next workflow.
          </p>
        </section>

        <section id="faq" className="mt-16 scroll-mt-28 space-y-8">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Frequently asked questions</h2>
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
          <p className="text-xs font-semibold uppercase text-primary/80">Begin with one workflow</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">Find the repetitive work that is stealing time from clients.</h2>
          <p className="mt-5 max-w-2xl">
            Possible Minds helps PI firm owners map one workflow, establish the human-review boundary, test it against real examples, and decide whether it is ready for production.
          </p>
          <Link href="/consult" className="mt-7 inline-flex items-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#00ff41]/90">
            Request a workflow diagnostic <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </section>
      </article>
    </div>
  );
}
