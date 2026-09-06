import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  FileCheck2,
  LockKeyhole,
} from "lucide-react";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "ai-governance-101-personal-injury-firms";
const pageTitle = "AI Governance 101 for Small Personal Injury Firms";
const metaTitle = `AI Governance for Small PI Firms | ${SITE_NAME}`;
const pageDescription =
  "A plain-English guide to AI information governance for solo and small PI firms: approved tools, client data, human review, vendors, and oversight.";
const pageUrl = `${SITE_URL}/blog/${slug}`;

const contents = [
  { id: "what-governance-means", label: "What AI governance means" },
  { id: "four-questions", label: "Four information questions" },
  { id: "seven-controls", label: "Seven controls a small firm needs" },
  { id: "traffic-light", label: "A simple information traffic light" },
  { id: "human-review", label: "Scale review to consequence" },
  { id: "vendor-review", label: "What to ask an AI vendor" },
  { id: "one-page-policy", label: "The one-page AI policy" },
  { id: "start-this-week", label: "How to begin this week" },
  { id: "research-basis", label: "Research basis" },
];

const controls = [
  {
    title: "Inventory",
    text: "List the AI products, accounts, browser extensions, meeting tools, and connected agents people actually use.",
  },
  {
    title: "Classify",
    text: "Decide which kinds of information can enter each workflow and which must stay out.",
  },
  {
    title: "Approve",
    text: "Approve the exact product, plan, account, and use case. A familiar vendor name is not enough.",
  },
  {
    title: "Limit",
    text: "Give every person and agent the least access needed for the assigned task.",
  },
  {
    title: "Verify",
    text: "Match human review to the harm an incorrect output or action could cause.",
  },
  {
    title: "Record",
    text: "Keep enough history to reconstruct the source, output, reviewer, approval, and material action.",
  },
  {
    title: "Revisit",
    text: "Review tools, permissions, incidents, and vendor terms as products and firm workflows change.",
  },
];

const faqs = [
  {
    question: "What is AI governance for a small personal injury law firm?",
    answer:
      "AI governance is the set of practical rules and controls that determines which AI tools the firm may use, what information they may receive, what they may do, who reviews their work, and how the firm monitors problems. It should be proportionate to the firm's size and the risk of each use case.",
  },
  {
    question: "Can a PI firm put client information into ChatGPT or Claude?",
    answer:
      "The answer depends on the exact product and account, its contract and data practices, the information involved, client expectations, applicable professional duties, and the firm's safeguards. A paid account alone does not answer those questions. The firm should approve specific products and workflows before confidential information is entered.",
  },
  {
    question: "Does an enterprise AI plan make a law firm compliant?",
    answer:
      "No. Enterprise terms and controls may help, but governance also requires appropriate permissions, information classification, human review, training, logging, incident handling, and compliance with the firm's jurisdiction-specific obligations.",
  },
  {
    question: "Does every PI firm need a HIPAA business associate agreement?",
    answer:
      "No. HIPAA applies to covered entities and business associates as defined by the rule. Whether a PI firm or vendor needs a business associate agreement depends on the parties' roles and the work being performed. Firms should not use a BAA as a substitute for determining whether HIPAA applies or for reviewing broader confidentiality and privacy duties.",
  },
  {
    question: "Who should own AI governance in a solo or small PI firm?",
    answer:
      "One named lawyer or senior operator should own the inventory, approvals, policy, vendor review, and incident path. Technical and ethics advisers can help, but responsibility should not disappear between the firm, its IT provider, and its software vendors.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "AI governance for personal injury law firms",
    "law firm AI policy",
    "AI information governance",
    "AI confidentiality for lawyers",
    "personal injury law firm AI",
    "legal AI vendor risk",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-09-06",
    modifiedTime: "2026-09-06",
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
      datePublished: "2026-09-06",
      dateModified: "2026-09-06",
      author: { "@type": "Person", name: post.author },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: pageUrl,
      articleSection: "AI Governance",
      keywords:
        "AI governance for personal injury law firms, law firm AI policy, AI information governance, legal AI vendor risk",
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
      <ClickBeacon page="blog-ai-governance-101-pi-firms" />
      <JsonLd data={structuredData} />

      <header className="border-b border-primary/20 bg-[#050807]">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24">
          <div className="flex items-center gap-3 text-xs text-foreground/65">
            <Link href="/blog" className="transition hover:text-primary">Blog</Link>
            <span aria-hidden="true" className="text-primary/50">/</span>
            <span>AI Governance</span>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase text-[#00ff41]">
            A plain-English guide for solo and small PI firms
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.7rem]">
            AI Governance 101 for Small Personal Injury Firms
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80 sm:text-xl">
            You do not need a committee or a 40-page manual. You need clear answers about what information AI can see, what it can do, and who remains responsible.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/60">
            <span>{post.author}</span><span aria-hidden="true">/</span>
            <time dateTime="2026-09-06">{post.date}</time><span aria-hidden="true">/</span>
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
              AI governance means deciding which tools are approved, what information may enter them, what actions they may take, and what a person must check. The rules should become stricter as the information grows more sensitive and the consequences of an error become greater. For a small PI firm, seven well-run controls are more useful than an impressive policy nobody follows.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
          <section className="space-y-6">
            <p className="text-xl leading-9 text-foreground/95">
              AI may already be inside your firm, even if nobody has formally adopted it. A lawyer asks a public chatbot to clean up an email. A paralegal tries a meeting transcription tool. An intake specialist pastes a difficult message into an assistant and asks for a calmer reply.
            </p>
            <p>
              A blanket ban rarely tells people what to do instead. Buying an enterprise plan does not settle every information question either. The owner needs a usable lane for experimentation and a firm boundary around client information, legal judgment, and actions that affect a case.
            </p>
            <p>
              To build that lane, I searched 795 transcribed episodes in the Possible Minds podcast corpus. The search produced 115 episodes with governance-related signals. I then reviewed the episodes most directly concerned with law-firm information, confidentiality, privilege, data quality, permissions, vendor terms, human review, and AI adoption. The principles below are the recurring lessons, adapted for a solo or small PI firm.
            </p>
          </section>

          <section id="what-governance-means" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Governance is control over information and decisions</h2>
            <p>
              The word <em>governance</em> can sound like work reserved for a national firm. At a five-person PI practice, it is much more concrete:
            </p>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {[
                ["Tools", "Which exact AI products and accounts may the team use?"],
                ["Information", "What may be entered, uploaded, recorded, or retrieved?"],
                ["Access", "Which matters, folders, inboxes, and systems may each tool reach?"],
                ["Actions", "May it draft, send, update, file, accept, reject, or only recommend?"],
                ["Responsibility", "Who checks the output, approves the action, and handles a failure?"],
              ].map(([title, text], index) => (
                <div key={title} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_9rem_1fr] sm:items-baseline">
                  <span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <p>
              The <a href="https://www.nist.gov/itl/ai-risk-management-framework/nist-ai-rmf-playbook" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">NIST AI Risk Management Framework</a> uses four functions: govern, map, measure, and manage. The useful lesson for a small firm is that governance is continuous. The firm identifies the use, tests the risk, manages it, and revisits the decision as the system changes.
            </p>
          </section>

          <section id="four-questions" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Do not collapse four information questions into one</h2>
            <p>
              Podcast discussions often use <em>secure</em>, <em>private</em>, <em>confidential</em>, <em>privileged</em>, and <em>HIPAA compliant</em> as though they mean the same thing. They do not.
            </p>
            <div className="overflow-x-auto border-y border-white/10">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 text-sm">
                    <th className="px-4 py-4 font-semibold text-primary">Question</th>
                    <th className="px-4 py-4 font-semibold text-white">What the owner is really asking</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Confidentiality", "May the firm disclose or expose this information while still meeting its professional duties?"],
                    ["Privilege", "Could this communication be protected from compelled disclosure, or has a third party changed that analysis?"],
                    ["Privacy and security", "How is the information collected, used, retained, accessed, transferred, deleted, and protected?"],
                    ["HIPAA", "Are the firm and vendor covered entities or business associates for this activity, and what does that role require?"],
                  ].map(([question, meaning]) => (
                    <tr key={question}>
                      <td className="px-4 py-4 font-semibold text-foreground/95">{question}</td>
                      <td className="px-4 py-4">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              The <a href="https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">ABA&apos;s Formal Opinion 512</a> directs lawyers using generative AI to consider competence, confidentiality, client communication, supervision, candor, meritorious claims, and reasonable fees. State guidance may add detail. California maintains <a href="https://www.calbar.ca.gov/es/node/6743" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">practical AI ethics resources</a>, while <a href="https://www-media.floridabar.org/uploads/2024/01/FL-Bar-Ethics-Op-24-1.pdf" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">Florida Opinion 24-1</a> specifically discusses retention, data sharing, self-learning, oversight, and chatbot disclosures.
            </p>
            <div className="flex gap-4 border-y border-amber-400/25 bg-amber-400/[0.04] py-6">
              <CircleAlert className="mt-1 size-6 shrink-0 text-amber-300" aria-hidden="true" />
              <p className="text-foreground/90">
                A paid subscription, an enterprise label, encryption, or a business associate agreement can be relevant. None answers every question by itself. HHS explains that HIPAA applies to <a href="https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html" target="_blank" rel="noreferrer" className="text-amber-200 underline decoration-amber-200/35 underline-offset-4">covered entities and business associates as defined by the rule</a>, not automatically to every organization handling medical information.
              </p>
            </div>
          </section>

          <section id="seven-controls" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Seven controls a small firm actually needs</h2>
            <p>
              The transcripts repeatedly return to the same foundation: know what you have, know who can reach it, keep the use case narrow, and preserve human accountability.
            </p>
            <ol className="divide-y divide-primary/20 border-y border-primary/25">
              {controls.map((control, index) => (
                <li key={control.title} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_9rem_1fr] sm:items-baseline">
                  <span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-semibold text-white">{control.title}</h3>
                  <p>{control.text}</p>
                </li>
              ))}
            </ol>
            <p>
              These controls can live in one spreadsheet, one short policy, and one recurring calendar review. What matters is that they describe reality. An approved-tools list that omits the extensions and transcription apps people use every day is paperwork, not governance.
            </p>
          </section>

          <section id="traffic-light" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Give the team a simple information traffic light</h2>
            <p>
              A solo or small firm needs rules people can remember during a busy day. This traffic light is a starting example, not a legal conclusion for every jurisdiction or matter.
            </p>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {[
                ["Green", "Public or synthetic", "General brainstorming, public-law summaries, blank templates, and made-up test matters in an approved tool."],
                ["Yellow", "Internal or minimized", "Firm procedures, de-identified examples, and low-consequence drafts using an approved account and defined review."],
                ["Red", "Client or consequential", "Identifiable client facts, medical records, settlement positions, credentials, filings, legal advice, or actions in a live system. Use only inside a specifically approved workflow with appropriate safeguards and qualified review."],
              ].map(([level, label, text], index) => (
                <div key={level} className="grid gap-3 py-6 sm:grid-cols-[7rem_11rem_1fr]">
                  <span className={`text-lg font-semibold ${index === 0 ? "text-emerald-300" : index === 1 ? "text-amber-300" : "text-rose-300"}`}>{level}</span>
                  <h3 className="font-semibold text-white">{label}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <p>
              Start experimentation in the green lane. The firm can learn how models behave without exposing client information. Move a use case into yellow or red only after the product, information, permissions, and review path have been examined together.
            </p>
          </section>

          <section id="human-review" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Scale human review to the consequence</h2>
            <p>
              &ldquo;A human is in the loop&rdquo; is too vague. A rushed click on an approval button is not meaningful supervision. The reviewer needs the source, enough context to detect an error, and authority to stop the action.
            </p>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {[
                ["Low consequence", "A generic agenda or internal formatting task", "Sample review and easy correction may be enough."],
                ["Moderate consequence", "A medical-record chronology or routine client-update draft", "A trained person compares material claims with the source before use."],
                ["High consequence", "Case acceptance, legal advice, a demand, filing, settlement communication, or deadline", "A qualified lawyer or designated professional verifies the substance and approves the action."],
              ].map(([risk, example, review]) => (
                <div key={risk} className="grid gap-3 py-6 sm:grid-cols-[10rem_1fr_1fr]">
                  <h3 className="font-semibold text-primary">{risk}</h3>
                  <p className="text-foreground/90">{example}</p>
                  <p>{review}</p>
                </div>
              ))}
            </div>
            <p>
              The <a href="https://mission.getpossibleminds.com/podcasts/7793?view=explained" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">Law of Code discussion on how lawyers use AI</a> calls the danger &ldquo;cognitive surrender&rdquo;: polished output makes it tempting to stop thinking. Governance should make verification easier by preserving citations, source passages, changes, and uncertainty, not merely by adding an approval box.
            </p>
          </section>

          <section id="vendor-review" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Review the workflow and the vendor together</h2>
            <p>
              A provider can have strong security and still be wrong for a particular use. Before client information or live-system access is involved, ask:
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Which exact product, plan, and features are covered by the contract?",
                "Is firm data used for training, evaluation, or product improvement?",
                "What is retained, for how long, and how is deletion verified?",
                "Which employees, subprocessors, and regions may handle the data?",
                "Can access be limited by user, matter, folder, field, and action?",
                "Are prompts, outputs, system actions, edits, and approvals logged?",
                "How quickly must the vendor report an incident or legal demand?",
                "Can the firm export its data, configuration, and history in usable form?",
                "What happens to connected access and stored data when the contract ends?",
                "Will the vendor document claims the firm is expected to rely on?",
              ].map((item) => (
                <li key={item} className="flex gap-3 border-b border-white/10 pb-3 text-foreground/90">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              The episodes also warn against long contracts and data lock-in while products are changing quickly. Firm information should remain portable, and critical workflows should have a fallback when a model, integration, or vendor is unavailable. This is the practical side of <Link href="/personal-injury/vendor-risk-governance" className="text-primary underline decoration-primary/35 underline-offset-4">AI vendor-risk governance</Link>.
            </p>
          </section>

          <section id="one-page-policy" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Begin with a one-page AI policy</h2>
            <p>
              The first policy does not need to predict every future model. It should answer the questions that arise today:
            </p>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {[
                ["Approved tools", "Name the exact products, plans, accounts, and owners."],
                ["Allowed information", "Define green, yellow, and red information for each use."],
                ["Allowed work", "State what the tool may prepare and what it may never decide or send."],
                ["Required review", "Name the reviewer for moderate- and high-consequence work."],
                ["Incident path", "Tell staff whom to contact after a mistaken upload, output, or action."],
                ["Review date", "Revisit the policy and tool inventory on a fixed schedule."],
              ].map(([title, text]) => (
                <div key={title} className="bg-black p-5">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6">{text}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4 border-y border-primary/25 py-6">
              <FileCheck2 className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-foreground/90">
                Pair the policy with an approved alternative. If staff are told not to paste client material into a public chatbot, give them a safe way to complete the legitimate task they were trying to solve.
              </p>
            </div>
          </section>

          <section id="start-this-week" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">How a small PI firm can begin this week</h2>
            <ol className="divide-y divide-primary/20 border-y border-primary/25">
              {[
                ["Name an owner", "One lawyer or senior operator owns the inventory, approvals, and incident path."],
                ["Ask without blame", "Find out which AI tools and extensions the team already uses and for what work."],
                ["Pause the riskiest use", "Stop unapproved client-data uploads and autonomous high-consequence actions while they are reviewed."],
                ["Open a safe lane", "Approve one green use case with synthetic or public information so the team can learn."],
                ["Choose one real workflow", "Map its information, permissions, review, logs, and vendor terms before a controlled pilot."],
              ].map(([title, text], index) => (
                <li key={title} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_12rem_1fr] sm:items-baseline">
                  <span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
            <p>
              Intake can be a useful first workflow because it is frequent and measurable, but the boundary matters. AI can acknowledge an inquiry, collect approved information, structure the record, and flag urgency. A person should own empathy, sensitive questions, case evaluation, and the relationship. The operating design is explained in our guide to <Link href="/personal-injury/intake-automation" className="text-primary underline decoration-primary/35 underline-offset-4">human-led AI intake</Link>.
            </p>
            <p className="text-xl leading-9 text-foreground/95">
              Good governance does not slow useful AI down. It gives the firm enough control to keep using it when the first difficult case, staff mistake, vendor change, or bad output arrives.
            </p>
          </section>

          <section id="research-basis" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Research basis</h2>
            <p>
              The article synthesizes recurring principles from the most relevant transcripts in the Mission Control corpus, including:
            </p>
            <ul className="space-y-3 border-y border-white/10 py-5">
              {[
                ["Stop Automating Broken Processes", "7805"],
                ["Law Firm Owners: Is Your Team Putting Client Data at Risk With AI?", "7784"],
                ["AI & Legal Privilege", "6720"],
                ["How Lawyers Are Using AI in 2026", "7793"],
                ["The Legal Industry Has a Data Problem AI Can't Fix", "7813"],
                ["From Information Governance to Governed Intelligence for Trustworthy AI", "7824"],
                ["Tony Forde on AI Governance, Dark Data, and ROT Disposal", "7838"],
                ["AI Governance and Defensible Disposal", "7834"],
                ["The Tech Stack That Was Costing TORKLAW Cases", "6301"],
                ["How AI Helps Law Firms Handle More Cases", "7212"],
                ["Is AI Intake Ready for Personal Injury Lawyers?", "3862"],
              ].map(([title, id]) => (
                <li key={id}>
                  <a href={`https://mission.getpossibleminds.com/podcasts/${id}?view=explained`} target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-6 text-foreground/60">
              This article provides an operating framework, not legal advice. A firm should apply the professional-conduct rules, court requirements, privacy laws, client commitments, and contractual duties relevant to its jurisdiction and work.
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
            <div className="flex items-start gap-4">
              <LockKeyhole className="mt-1 hidden size-7 shrink-0 text-primary sm:block" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase text-primary/80">Govern one workflow</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">Build the safe lane before scaling AI.</h2>
                <p className="mt-5 max-w-2xl">
                  Possible Minds helps PI firms map the information, permissions, review rules, and vendor risks around a real workflow, then test a narrow system under those controls.
                </p>
                <Link href="/consult" className="mt-7 inline-flex items-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#00ff41]/90">
                  Request an AI governance diagnostic <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
