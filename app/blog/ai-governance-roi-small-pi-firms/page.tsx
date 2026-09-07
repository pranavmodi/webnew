import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Archive, CircleAlert, Database, FileCheck2 } from "lucide-react";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "ai-governance-roi-small-pi-firms";
const pageTitle = "Information Governance: The First Step Before AI for a Small PI Firm";
const description =
  "A practical guide to finding, organizing, retaining, and safely disposing of PI firm information before connecting it to AI.";
const pageUrl = `${SITE_URL}/blog/${slug}`;

const contents = [
  { id: "why-governance", label: "Why AI needs governance" },
  { id: "what-information-governance-means", label: "What information governance means" },
  { id: "where-information-lives", label: "Where firm information lives" },
  { id: "rot-information", label: "Why ROT matters for AI" },
  { id: "know-what-you-have", label: "Start by knowing what you have" },
  { id: "ai-ready-information", label: "What makes information AI-ready" },
  { id: "defensible-disposal", label: "Keep and delete information carefully" },
  { id: "audit-trail", label: "A policy needs an audit trail" },
  { id: "business-return", label: "Where the business return comes from" },
  { id: "first-30-days", label: "A practical first 30 days" },
  { id: "research-basis", label: "Research basis" },
];

const faqs = [
  {
    question: "What is information governance in a personal injury law firm?",
    answer:
      "Information governance is the system for knowing what information the firm has, where it is stored, who owns it, who may access it, how long it should be kept, and how retention or disposal decisions are documented.",
  },
  {
    question: "Why does information governance matter for AI?",
    answer:
      "AI relies on the information it can reach. If that information is duplicated, outdated, misclassified, incomplete, or available to the wrong people, AI can amplify those problems. Governance creates a smaller and more trustworthy information base.",
  },
  {
    question: "What is ROT information in a law firm?",
    answer:
      "ROT means redundant, obsolete, and trivial information. In a PI firm, that can include duplicate medical records, superseded drafts and instructions, temporary downloads, test files, convenience copies, and other material that no longer has a business or legal purpose. Whether information is truly ROT must be determined under the firm's retention rules, legal holds, client obligations, and the context of the matter.",
  },
  {
    question: "Does AI-ready information mean connecting AI to every firm system?",
    answer:
      "No. AI should receive only the information and access required for an approved workflow. Sometimes a limited integration, export, or reference to where information is stored is safer and more economical than a connection to an entire repository.",
  },
  {
    question: "Can a PI firm delete old case files before adopting AI?",
    answer:
      "Not casually. The firm must consider applicable retention duties, legal holds, client commitments, court rules, insurance requirements, and other obligations. Disposal should follow an approved policy and leave evidence of the decision and action.",
  },
  {
    question: "What is defensible disposal?",
    answer:
      "Defensible disposal is the controlled deletion or destruction of information under documented rules. The firm can show what policy applied, who approved the action, what exceptions were checked, and when disposal occurred.",
  },
  {
    question: "How should a small PI firm begin information governance?",
    answer:
      "Begin with one repository or defined group of closed matters. Inventory it, assign ownership, identify retention rules and holds, resolve obvious classification problems, complete one approved cleanup, and record the result before expanding.",
  },
];

export const metadata: Metadata = {
  title: `Information Governance for Small PI Firms | ${SITE_NAME}`,
  description,
  keywords: [
    "information governance for law firms",
    "personal injury law firm data governance",
    "AI information governance",
    "law firm records management",
    "AI-ready law firm data",
    "defensible disposal law firm",
    "ROT data law firm",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-09-07",
    modifiedTime: "2026-09-07",
    authors: ["Pranav Modi"],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description },
};

export default function BlogPostPage() {
  const post = BLOG_POSTS_BY_SLUG[slug];
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: pageTitle,
      description,
      url: pageUrl,
      datePublished: "2026-09-07",
      dateModified: "2026-09-07",
      author: { "@type": "Person", name: post.author },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: pageUrl,
      articleSection: "Information Governance",
      keywords:
        "information governance for law firms, personal injury law firm data governance, AI-ready law firm data, defensible disposal",
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
      <ClickBeacon page="blog-information-governance-small-pi-firms" />
      <JsonLd data={structuredData} />

      <header className="border-b border-primary/20 bg-[#050807]">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24">
          <div className="flex items-center gap-3 text-xs text-foreground/65">
            <Link href="/blog" className="transition hover:text-primary">Blog</Link>
            <span aria-hidden="true" className="text-primary/50">/</span>
            <span>Information Governance</span>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase text-[#00ff41]">A practical guide for small PI firms</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.7rem]">{pageTitle}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80 sm:text-xl">
            Before AI can reliably use your firm&apos;s knowledge, the firm must know what information it has, where it lives, who owns it, and whether it should still be there.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/60">
            <span>{post.author}</span><span aria-hidden="true">/</span>
            <time dateTime="2026-09-07">{post.date}</time><span aria-hidden="true">/</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      <main>
        <BlogTableOfContents items={contents} faqHref="#faq" />

        <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
          <div className="border-y border-primary/30 py-8">
            <p className="text-xs font-semibold uppercase text-primary/80">In plain English</p>
            <p className="mt-4 text-xl leading-9 text-foreground/95 sm:text-2xl sm:leading-10">
              Information governance is knowing what the firm has, where it is stored, who is responsible for it, who may use it, how long it should be kept, and how it is disposed of. AI makes this work urgent because it can search and combine information at a scale no employee could. If the underlying information is chaotic, AI makes the chaos faster and more convincing.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
          <section className="space-y-6">
            <p className="text-xl leading-9 text-foreground/95">
              A small PI firm rarely thinks of itself as having an information-governance problem. It has cases, emails, medical records, photographs, demands, text messages, intake notes, bills, liens, and old files. Each item made sense when someone created or received it.
            </p>
            <p>
              Over time, the same matter acquires several versions of a document. Important information lives in an employee&apos;s inbox. A closed file remains in premium storage. Nobody knows whether a shared folder is authoritative. A former vendor still holds data. The firm keeps everything because deleting anything feels dangerous.
            </p>
            <p>
              That arrangement may remain tolerable while people search manually and rely on memory. It becomes a serious constraint when the firm wants AI to find a fact, summarize a matter, draft an update, identify a missing record, or act across systems.
            </p>
          </section>

          <section id="why-governance" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Why AI needs governance at all</h2>
            <p>
              AI governance is the broader system for deciding which AI tools the firm may use, what they may access, what they may do, who checks their work, and how the firm responds to failure. It protects client information and preserves human accountability. It also keeps spending and experimentation tied to useful work.
            </p>
            <p>
              Information governance is one part of that larger system, but it is often the first practical layer. Before choosing whether an AI assistant may search a repository, the owner needs to know what the repository contains, whether access is appropriate, and which version of the information should be trusted.
            </p>
            <div className="grid gap-px bg-white/10 sm:grid-cols-3">
              {[
                ["AI governance", "Controls the tool, use case, authority, review, and accountability."],
                ["Information governance", "Controls the information lifecycle, from creation and access through retention and disposal."],
                ["Why it comes first", "AI cannot be governed well when the firm cannot describe the information it will use."],
              ].map(([title, text]) => <div key={title} className="bg-[#050807] p-6"><h3 className="font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6">{text}</p></div>)}
            </div>
            <p>
              <a href="https://mission.getpossibleminds.com/podcasts/7824?view=explained" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">Chris Giles, founder and CEO of LegalRM</a>, puts the principle plainly: &ldquo;You can&apos;t really do AI well without good information governance first.&rdquo;
            </p>
            <p>
              The <a href="https://airc.nist.gov/airmf-resources/airmf/5-sec-core/" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">NIST AI Risk Management Framework</a> similarly begins with governance and asks organizations to map the context, measure performance and risk, and manage what they learn. The scale can be tailored. A solo or small firm does not need an enterprise committee to make its first useful decisions.
            </p>
          </section>

          <section id="what-information-governance-means" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Information governance is the lifecycle of a firm&apos;s memory</h2>
            <p>For every important category of information, a firm should eventually be able to answer seven questions:</p>
            <div className="divide-y divide-primary/20 border-y border-primary/25">
              {[
                ["What is it?", "A medical record, intake note, signed agreement, draft demand, client message, accounting record, or another defined type."],
                ["Where is it?", "The system or physical location where it can be found."],
                ["Who owns it?", "The person or role responsible for its accuracy and lifecycle."],
                ["Who may access it?", "The people, vendors, and software permitted to see or change it."],
                ["Which version controls?", "The authoritative record when duplicates or drafts exist."],
                ["How long is it kept?", "The policy, event, or obligation that determines retention."],
                ["How does it leave?", "Transfer, archive, return, deletion, or destruction with appropriate evidence."],
              ].map(([title, text], index) => <div key={title} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_12rem_1fr] sm:items-baseline"><span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span><h3 className="font-semibold text-white">{title}</h3><p>{text}</p></div>)}
            </div>
            <p>
              A firm will not answer every question for every file on day one. The point is to move from accidental retention and informal ownership toward repeatable decisions.
            </p>
          </section>

          <section id="where-information-lives" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">The case-management system is not the whole file</h2>
            <p>
              A small PI firm&apos;s information rarely lives in one repository. The case-management system may be the center of the matter, but it is seldom the whole record.
            </p>
            <div className="overflow-x-auto border-y border-white/10">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead><tr className="border-b border-white/10 text-sm"><th className="px-4 py-4 font-semibold text-primary">Location</th><th className="px-4 py-4 font-semibold text-white">What may be there</th><th className="px-4 py-4 font-semibold text-white">The owner&apos;s question</th></tr></thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Intake and case management", "Contacts, facts, statuses, notes, tasks, deadlines, and matter history", "Is this the authoritative record, and are permissions current?"],
                    ["Email, text, and chat", "Client instructions, negotiations, attachments, and decisions", "What should be captured in the matter, and what remains stranded?"],
                    ["Shared drives and document systems", "Records, drafts, demands, pleadings, photographs, and duplicate versions", "Which structure and version should people and AI trust?"],
                    ["Accounting and vendor portals", "Costs, bills, liens, payments, records requests, and external status information", "Who owns access, export, retention, and termination?"],
                    ["Paper and off-site storage", "Originals, legacy case files, and boxes retained under old practices", "What exists, what rule applies, and what is the continuing cost?"],
                  ].map(([place, data, question]) => <tr key={place}><td className="px-4 py-4 font-semibold text-foreground/95">{place}</td><td className="px-4 py-4">{data}</td><td className="px-4 py-4">{question}</td></tr>)}
                </tbody>
              </table>
            </div>
            <p>
              Full integration is not always necessary. Sometimes a pointer, ownership record, and review date create enough visibility. Building an expensive connection to every system can cost more than the problem warrants.
            </p>
            <p>
              The official document or case-management system may contain only part of the firm&apos;s working record. OneDrive, SharePoint, email, collaboration tools, personal folders, and AI products can become a hidden attic of drafts, copies, and client information nobody is actively managing.
            </p>
          </section>

          <section id="rot-information" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">ROT is expensive before it becomes risky</h2>
            <p>
              Records professionals use a useful term for this material: <strong className="font-semibold text-white">ROT</strong>, meaning redundant, obsolete, and trivial information. It is what a firm keeps because nobody has decided whether it still deserves to exist.
            </p>
            <div className="divide-y divide-primary/20 border-y border-primary/25">
              {[
                ["Redundant", "Duplicate medical records, repeated email attachments, copied matter folders, and multiple versions stored without a clear controlling record."],
                ["Obsolete", "Superseded drafts, expired instructions, old contact lists, former-vendor exports, and workflow documents that no longer describe how the firm works."],
                ["Trivial", "Temporary downloads, test files, transitory notices, and convenience copies that have no continuing legal or business value."],
              ].map(([title, text], index) => <div key={title} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_10rem_1fr] sm:items-baseline"><span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span><h3 className="font-semibold text-white">{title}</h3><p>{text}</p></div>)}
            </div>
            <p>
              ROT makes ordinary work slower. People search through more files, storage and migrations cost more, and sensitive information remains exposed longer than necessary. AI magnifies the problem: duplicates can give one fact artificial weight, obsolete instructions can produce the wrong answer, and trivial material consumes retrieval and review time without improving the work.
            </p>
            <div className="flex gap-4 border-y border-amber-400/25 bg-amber-400/[0.04] py-6">
              <CircleAlert className="mt-1 size-6 shrink-0 text-amber-300" aria-hidden="true" />
              <p className="text-foreground/90">
                ROT is a review category, not permission to delete. A duplicate may contain unique annotations, an old draft may matter to a dispute, and a seemingly trivial message may be subject to a hold. Identify candidates first; apply retention rules, exceptions, review, and approval before disposal.
              </p>
            </div>
          </section>

          <section id="know-what-you-have" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Start with visibility, not a perfect policy</h2>
            <p>
              The first step is simple: know what you have, where it is, and who is responsible. Without that visibility, governance is guesswork.
            </p>
            <p>
              Begin with one information map. It can be a spreadsheet with a row for each major repository and columns for the owner, information categories, active users, connected vendors, authoritative source, retention basis, known holds, export method, and next review date.
            </p>
            <div className="flex gap-4 border-y border-primary/25 py-6">
              <Database className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-foreground/90">
                Do not begin by cataloging every document. Begin by identifying the systems and places that contain important information, then choose one manageable body of records for deeper review.
              </p>
            </div>
            <p>
              A useful first target might be a group of older closed matters, one shared drive, one former employee&apos;s mailbox, or one off-site storage list. The target should be large enough to matter and small enough to finish.
            </p>
          </section>

          <section id="ai-ready-information" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">What makes information ready for AI</h2>
            <p>
              AI-ready does not mean uploading the whole firm into a model. It means the information used for an approved workflow is sufficiently trustworthy, understandable, and controlled.
            </p>
            <div className="divide-y divide-primary/20 border-y border-primary/25">
              {[
                ["Relevant", "The system receives the information needed for the task, not every file the firm possesses."],
                ["Authoritative", "The firm knows which record or version should control."],
                ["Classified", "Information is connected to the right client, matter, type, stage, sensitivity, and retention rule."],
                ["Current", "Superseded drafts and obsolete instructions do not silently compete with the latest record."],
                ["Permissioned", "A user or agent can reach only the matters and actions required for the workflow."],
                ["Traceable", "Material answers can be checked against their source, and important actions can be reconstructed."],
              ].map(([title, text], index) => <div key={title} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_11rem_1fr] sm:items-baseline"><span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span><h3 className="font-semibold text-white">{title}</h3><p>{text}</p></div>)}
            </div>
            <p>
              Poor information does not merely create compliance risk. It makes AI less useful. The system may retrieve an old demand, treat duplicates as corroboration, expose a restricted matter, or produce an answer that takes longer to verify than the original task.
            </p>
            <p>
              Classification also needs supervision. Software can identify predictable patterns such as phone numbers more easily than it can determine whether a document is authoritative, privileged, superseded, or connected to the right legal issue. Automated classification can produce both false positives and false negatives. A practical system begins with examples and rules supplied by people, uses the machine to assist, and samples the result before relying on it at scale.
            </p>
          </section>

          <section id="defensible-disposal" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Keeping everything is also a decision</h2>
            <p>
              Many firms retain information indefinitely because deletion feels risky. But over-retention has costs: storage, vendor overages, search noise, migration effort, security exposure, and a larger body of material for AI to search incorrectly.
            </p>
            <p>
              The alternative is defensible disposal: remove information only under established rules, proper review, documented approval, and any required waiting period.
            </p>
            <ol className="divide-y divide-white/10 border-y border-white/10">
              {[
                ["Apply the rule", "Identify the retention policy and the event that starts the period, such as matter closure."],
                ["Check exceptions", "Confirm legal holds, open disputes, client instructions, insurance requirements, and other reasons to preserve."],
                ["Obtain approval", "Record who reviewed the proposed group and who authorized the action."],
                ["Use a recovery window", "Where the system permits, move records to a controlled recycle or holding area before permanent destruction."],
                ["Complete disposal", "Delete, destroy, transfer, return, or archive the approved information through the defined process."],
                ["Keep the evidence", "Retain the policy, scope, approvals, exceptions, dates, and proof of the final action."],
              ].map(([title, text], index) => <li key={title} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_12rem_1fr] sm:items-baseline"><span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span><h3 className="font-semibold text-white">{title}</h3><p>{text}</p></li>)}
            </ol>
            <div className="flex gap-4 border-y border-amber-400/25 bg-amber-400/[0.04] py-6">
              <CircleAlert className="mt-1 size-6 shrink-0 text-amber-300" aria-hidden="true" />
              <p className="text-foreground/90">
                Do not infer a retention period or authorize deletion from this article. Requirements vary by jurisdiction, matter, client commitment, court rule, contract, and circumstance. The firm should establish its policy with qualified guidance.
              </p>
            </div>
          </section>

          <section id="audit-trail" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">A written policy is not proof that it was followed</h2>
            <p>
              A policy says what should happen. An audit trail shows what did happen. That distinction is central to defensibility.
            </p>
            <div className="flex gap-4 border-y border-primary/25 py-6">
              <FileCheck2 className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-foreground/90">For an important retention or disposal action, preserve the information group affected, policy and trigger applied, reviewer and approver, holds or overrides, action date, and evidence of completion.</p>
            </div>
            <p>
              This same principle matters once AI enters the workflow. For consequential work, the firm may need to reconstruct which sources were used, what the system produced, who reviewed it, what changed, and what was ultimately sent or entered into the case system.
            </p>
            <p>
              AI also creates information. Prompts, uploaded files, generated answers, downloaded work product, evaluations, and conversation histories can become a second unmanaged repository. The firm should decide which of those records it needs, where they belong, who may access them, and how long they should remain, instead of allowing every product to retain them by default.
            </p>
          </section>

          <section id="business-return" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Where the business return comes from</h2>
            <p>
              Information governance is often described as defensive work. It can also produce a measurable return.
            </p>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {[
                ["Direct costs", "Lower storage, physical-record, overage, migration, and duplicate-vendor costs."],
                ["Search effort", "Less staff time spent locating the right file or deciding which version controls."],
                ["AI quality", "Less irrelevant material to retrieve, summarize, compare, and verify."],
                ["Risk exposure", "Less unnecessary sensitive information available to users, vendors, attackers, or mistaken workflows."],
              ].map(([title, text]) => <div key={title} className="bg-[#050807] p-6"><h3 className="font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6">{text}</p></div>)}
            </div>
            <p>
              Measure the starting point. Record storage volume and cost, boxes held off-site, duplicate or obsolete material identified, time required to find representative documents, and correction effort for an AI-assisted task. Then measure the same things after the controlled cleanup.
            </p>
            <p>
              Include AI usage itself. Large document collections can generate substantial processing and model charges. A governed project limits the initial corpus, assigns a budget owner, monitors usage, and learns the cost per useful outcome before the firm connects another repository.
            </p>
            <p className="text-xl leading-9 text-foreground/95">
              The return is not simply that the firm deleted files. It is that people and systems can find the right information faster, with less noise and less unnecessary exposure.
            </p>
          </section>

          <section id="first-30-days" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">A practical first 30 days</h2>
            <div className="divide-y divide-primary/20 border-y border-primary/25">
              {[
                ["Week 1", "Map the repositories", "List where case and firm information lives, who owns each location, who can access it, and which vendors connect to it."],
                ["Week 2", "Find the ROT", "Select one closed-matter group, shared folder, mailbox, or storage list. Sample it for redundant, obsolete, and trivial material, then separate clear candidates from records that need legal or operational judgment."],
                ["Week 3", "Apply the rules", "Confirm the relevant retention policy, triggers, holds, approvals, and exceptions. Define what may be corrected, archived, transferred, or proposed for disposal."],
                ["Week 4", "Complete one controlled action", "Carry out an approved cleanup, preserve the audit record, measure the result, and decide what the next manageable group should be."],
              ].map(([week, title, text]) => <div key={week} className="grid gap-2 py-6 sm:grid-cols-[6rem_12rem_1fr] sm:items-baseline"><span className="text-sm font-semibold text-primary">{week}</span><h3 className="font-semibold text-white">{title}</h3><p>{text}</p></div>)}
            </div>
            <p>
              Do not let perfection prevent useful progress. Choose one overdue or clearly defined group, get the right approval, complete the work, and make the result visible. A finished, defensible improvement creates more confidence than an ambitious policy that changes nothing.
            </p>
            <p>
              For an initial pilot, one matter is not too small and one practice group is not too large. Start where people already work, show them what the information review found, and use a visible result to recruit the next internal champion.
            </p>
            <p className="text-xl leading-9 text-foreground/95">
              Your first AI-readiness project may not involve an AI model at all. It may be learning what your firm knows, where that knowledge lives, and which parts can be trusted.
            </p>
          </section>

          <section id="research-basis" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Research basis</h2>
            <p>
              This article is primarily based on two Global Information Governance Day discussions: <a href="https://mission.getpossibleminds.com/podcasts/7824?view=explained" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">From Information Governance to Governed Intelligence for Trustworthy AI</a>, with Chris Giles, and <a href="https://mission.getpossibleminds.com/podcasts/7838?view=explained" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">Tony Forde on AI Governance, Dark Data, and ROT Disposal</a>. Together, they cover visibility, AI-ready information, dark data, human-assisted classification, defensible disposal, cross-platform governance, auditability, usage costs, adoption, and practical first steps.
            </p>
            <p>
              The broader framing also draws on the <a href="https://airc.nist.gov/airmf-resources/playbook/" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">NIST AI RMF Playbook</a> and the UK Information Commissioner&apos;s <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/ai-and-data-protection-risk-toolkit/" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">AI and data-protection risk toolkit</a>. For the wider controls governing tools and workflows, see our <Link href="/blog/ai-governance-101-personal-injury-firms" className="text-primary underline decoration-primary/35 underline-offset-4">AI Governance 101 guide for small PI firms</Link>.
            </p>
            <p className="text-sm leading-6 text-foreground/60">The podcasts include vendor perspectives and product experience. Treat examples as illustrations, not independent benchmarks. This article provides an operating framework, not legal advice.</p>
          </section>

          <section id="faq" className="mt-16 scroll-mt-28 space-y-8">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Frequently asked questions</h2>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqs.map((faq) => <div key={faq.question} className="py-7"><h3 className="text-xl font-semibold text-white">{faq.question}</h3><p className="mt-3">{faq.answer}</p></div>)}
            </div>
          </section>

          <section className="mt-16 border-y border-primary/30 py-10">
            <div className="flex items-start gap-4">
              <Archive className="mt-1 hidden size-7 shrink-0 text-primary sm:block" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase text-primary/80">Start with visibility</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">Prepare one body of firm information for responsible AI use.</h2>
                <p className="mt-5 max-w-2xl">Possible Minds helps PI firms map information, ownership, permissions, workflow requirements, and practical controls before connecting AI to firm systems.</p>
                <Link href="/consult" className="mt-7 inline-flex items-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#00ff41]/90">Request an information-governance diagnostic <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
