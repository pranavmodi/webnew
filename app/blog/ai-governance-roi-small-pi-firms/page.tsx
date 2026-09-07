import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleAlert, Database, Gauge, ShieldCheck } from "lucide-react";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "ai-governance-roi-small-pi-firms";
const pageTitle = "The Business Case for AI Governance in a Small PI Firm";
const description =
  "How practical AI governance helps small PI firms protect clients, reduce waste, improve adoption, and turn AI experiments into measurable returns.";
const pageUrl = `${SITE_URL}/blog/${slug}`;

const contents = [
  { id: "why-governance", label: "Why governance improves AI returns" },
  { id: "two-jobs", label: "The two jobs of AI governance" },
  { id: "hidden-details", label: "What firm owners may not see" },
  { id: "operating-system", label: "A practical governance system" },
  { id: "information", label: "Prepare the information AI will use" },
  { id: "measure-roi", label: "Measure the return that matters" },
  { id: "first-30-days", label: "A manageable first 30 days" },
  { id: "research-basis", label: "Research basis" },
];

const faqs = [
  {
    question: "What is the business case for AI governance in a small PI firm?",
    answer:
      "Governance directs AI spending toward valuable workflows, improves adoption, reduces rework, protects client information, and makes successful uses easier to scale. It makes both the benefit and the full operating cost visible.",
  },
  {
    question: "Does AI governance reduce return on investment?",
    answer:
      "Poor bureaucracy can. Useful governance should improve returns by preventing duplicate tools, unsuitable workflows, bad data, excessive correction, weak adoption, and incidents that force a system to be withdrawn.",
  },
  {
    question: "What should a PI firm measure before adopting AI?",
    answer:
      "Measure the current workflow first: volume, elapsed time, staff effort, rework, response time, relevant business outcomes, and existing cost. Without a baseline, the firm can observe activity but cannot show improvement.",
  },
  {
    question: "Can staff put client information into ChatGPT or Claude?",
    answer:
      "That depends on the exact product and account, contractual terms, settings, integrations, information involved, applicable duties, and safeguards. A familiar vendor name or paid subscription is not enough.",
  },
  {
    question: "Does an enterprise plan or BAA make an AI workflow compliant?",
    answer:
      "No single contract or label settles every issue. The firm must still consider confidentiality, privilege, privacy, security, supervision, permissions, retention, applicable professional rules, and whether HIPAA applies.",
  },
  {
    question: "Where should a small PI firm begin?",
    answer:
      "Choose one frequent, measurable workflow. Map its information and risks, establish a baseline, approve the exact tool and account, assign meaningful human review, and compare the pilot with the old process before expanding it.",
  },
];

export const metadata: Metadata = {
  title: `AI Governance and ROI for Small PI Firms | ${SITE_NAME}`,
  description,
  keywords: [
    "AI governance ROI",
    "AI governance for personal injury law firms",
    "small law firm AI governance",
    "law firm AI policy",
    "AI information governance",
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
      articleSection: "AI Governance",
      keywords: "AI governance ROI, personal injury law firms, small law firm AI governance, information governance",
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
      <ClickBeacon page="blog-ai-governance-roi-small-pi-firms" />
      <JsonLd data={structuredData} />

      <header className="border-b border-primary/20 bg-[#050807]">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24">
          <div className="flex items-center gap-3 text-xs text-foreground/65">
            <Link href="/blog" className="transition hover:text-primary">Blog</Link>
            <span aria-hidden="true" className="text-primary/50">/</span>
            <span>AI Governance</span>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase text-[#00ff41]">A practical owner&apos;s guide</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.7rem]">
            {pageTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80 sm:text-xl">
            Governance is not paperwork added after the useful work. It is how a firm turns scattered AI experiments into dependable operating capacity.
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
              AI governance is how a firm chooses valuable workflows, gives AI appropriate information and authority, checks the result, and learns whether the investment is paying off. The same controls that protect clients also reduce waste, rework, failed pilots, and tools nobody trusts.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
          <section className="space-y-6">
            <p className="text-xl leading-9 text-foreground/95">
              Picture a small PI firm six months into AI adoption. One lawyer pays for an individual chatbot account. A paralegal uses another product to summarize records. Intake tests a transcription service. A browser extension can read email. Nobody intended to build an AI program, but one now exists.
            </p>
            <p>
              The firm cannot easily answer which tools contain client information, what each integration can reach, whether staff verify outputs consistently, or which subscriptions have produced a measurable benefit. That is operational uncertainty.
            </p>
            <p>
              Governance replaces that uncertainty with a few explicit decisions. Done well, it does not make a small firm behave like a bank. It lets the owner know what is working, what is allowed, what remains a human decision, and where the firm&apos;s money and information are going.
            </p>
          </section>

          <section id="why-governance" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Why governance improves AI returns</h2>
            <p>
              The usual argument begins with risk. For a law firm, that matters: confidentiality, competence, supervision, accurate work, and professional judgment do not disappear because software performed part of the task. But risk is only half the business case.
            </p>
            <p>AI produces value only when people use it for the right work, with usable information, inside a process the firm can repeat. Governance creates those conditions.</p>
            <div className="divide-y divide-primary/20 border-y border-primary/25">
              {[
                ["Less tool sprawl", "See duplicate subscriptions, unapproved accounts, unused products, and integrations that no longer justify their access."],
                ["Better selection", "A baseline and named outcome prevent the firm from buying AI first and searching for a problem afterward."],
                ["Less rework", "Source requirements, review rules, and escalation paths keep correction from consuming the time AI saved."],
                ["Higher adoption", "People rely on a system when they understand its purpose, limits, and owner."],
                ["Safer scaling", "A pilot can expand because its permissions, quality, costs, and exceptions have already been observed."],
              ].map(([title, text], index) => (
                <div key={title} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_11rem_1fr] sm:items-baseline">
                  <span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-semibold text-white">{title}</h3><p>{text}</p>
                </div>
              ))}
            </div>
            <p>
              The <a href="https://airc.nist.gov/airmf-resources/airmf/5-sec-core/" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">NIST AI Risk Management Framework</a> uses the same logic: govern the use, map its context and risks, measure performance, and manage what the evidence reveals. NIST allows organizations to tailor the framework to their resources.
            </p>
          </section>

          <section id="two-jobs" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">AI governance has two jobs</h2>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              <div className="bg-[#050807] p-6 sm:p-8">
                <ShieldCheck className="size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-white">Protect the practice</h3>
                <p className="mt-3">Protect client information, preserve lawyer judgment, supervise work, document important actions, and respond when something goes wrong.</p>
              </div>
              <div className="bg-[#050807] p-6 sm:p-8">
                <Gauge className="size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-white">Improve the business</h3>
                <p className="mt-3">Direct spending toward real bottlenecks, recover staff capacity, improve response and consistency, and stop weak pilots early.</p>
              </div>
            </div>
            <p>
              These jobs reinforce each other. If staff do not trust a system, they avoid it or duplicate its work. If its information is poor, its output requires more review. If nobody records failures, the same error repeats.
            </p>
            <p>
              <a href="https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">ABA Formal Opinion 512</a> addresses competence, confidentiality, communication, supervision, candor, meritorious claims, and fees. <a href="https://www.floridabar.org/etopinions/opinion-24-1/" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">Florida Opinion 24-1</a> similarly emphasizes confidentiality, oversight, accuracy, billing, and advertising. Firms must apply the rules relevant to their jurisdictions and work.
            </p>
          </section>

          <section id="hidden-details" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">What a nontechnical owner may not see</h2>
            <p>The product name is only the beginning. The account, settings, integrations, authority, and workflow determine much of the actual risk.</p>
            <div className="overflow-x-auto border-y border-white/10">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead><tr className="border-b border-white/10 text-sm"><th className="px-4 py-4 font-semibold text-primary">Hidden detail</th><th className="px-4 py-4 font-semibold text-white">Why it matters</th></tr></thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Account and plan", "Consumer, team, enterprise, API, and embedded versions may have different terms and controls."],
                    ["Connected access", "An email or case-system connection may expose far more than the document used for one prompt."],
                    ["Inputs and outputs", "Prompts, transcripts, files, logs, and feedback can all become records that require handling."],
                    ["Retention", "Information may be stored, routed, or logged outside the screen the user sees."],
                    ["Authority to act", "Drafting and sending a message create different consequences."],
                    ["Human review", "An approval click without the source, expertise, or time to test the answer is not a meaningful control."],
                  ].map(([detail, meaning]) => <tr key={detail}><td className="px-4 py-4 font-semibold text-foreground/95">{detail}</td><td className="px-4 py-4">{meaning}</td></tr>)}
                </tbody>
              </table>
            </div>
            <div className="flex gap-4 border-y border-amber-400/25 bg-amber-400/[0.04] py-6">
              <CircleAlert className="mt-1 size-6 shrink-0 text-amber-300" aria-hidden="true" />
              <p className="text-foreground/90">A paid plan, encryption, an enterprise label, or a business associate agreement may matter, but none makes every workflow compliant. Confidentiality, privilege, privacy, security, HIPAA applicability, and professional responsibility are separate questions.</p>
            </div>
          </section>

          <section id="operating-system" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">A practical governance system</h2>
            <p>The first version can live in a spreadsheet, a short policy, and a monthly owner review.</p>
            <ol className="divide-y divide-primary/20 border-y border-primary/25">
              {[
                ["Name an owner", "One lawyer or senior operator owns tools, use cases, incidents, and review."],
                ["Keep a register", "Record the product, account, purpose, information, integrations, reviewer, cost, and renewal date."],
                ["Classify the use", "Make controls stricter as client information, legal judgment, or authority increases."],
                ["Define the workflow", "State what starts the task, what AI does, what a person checks, and what complete means."],
                ["Preserve evidence", "Keep enough source, output, review, approval, and exception history to reconstruct important work."],
                ["Measure and revisit", "Compare with the old process, review failures and adoption, then expand, change, or stop."],
              ].map(([title, text], index) => <li key={title} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_12rem_1fr] sm:items-baseline"><span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span><h3 className="font-semibold text-white">{title}</h3><p>{text}</p></li>)}
            </ol>
            <p>
              Public information and synthetic test matters can have a light review path. Identifiable client facts, medical records, legal advice, deadlines, settlement positions, filings, credentials, and actions in live systems require stronger safeguards and qualified approval.
            </p>
            <p>
              Give staff an approved alternative. Telling a paralegal not to use a public chatbot does not remove the workload that led them there. The companion <Link href="/blog/ai-governance-101-personal-injury-firms" className="text-primary underline decoration-primary/35 underline-offset-4">AI Governance 101 guide</Link> explains these controls in more detail.
            </p>
          </section>

          <section id="information" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Govern the information before asking AI to use it</h2>
            <p>
              The most accessible lesson from <a href="https://mission.getpossibleminds.com/podcasts/7824?view=explained" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">Chris Giles&apos;s discussion of governed intelligence</a> is to first know what information you have, where it lives, and who is responsible for it. Otherwise, decisions about AI access are guesses.
            </p>
            <p>
              A PI firm&apos;s record may be split among intake software, case management, email, shared drives, text messages, document storage, accounting, paper files, and vendor portals. Connecting AI to everything does not create order. It can amplify duplicate, obsolete, misclassified, or inaccessible information.
            </p>
            <div className="flex gap-4 border-y border-primary/25 py-6">
              <Database className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-foreground/90">Start small: map one repository or closed-matter group, identify ownership and retention rules, check legal holds and client requirements, resolve obvious duplicates and outdated drafts, document approvals, and measure the result.</p>
            </div>
            <p>
              Deletion is not casual cleanup. A defensible process accounts for retention duties, holds, client commitments, and applicable rules, then records the policy, reviewer, approval, exceptions, and action.
            </p>
            <p>Better information can reduce storage costs and search time. More importantly, AI receives a smaller, more reliable body of material, reducing irrelevant answers and review effort.</p>
          </section>

          <section id="measure-roi" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Measure the return that matters</h2>
            <p>
              &ldquo;Hours saved&rdquo; is useful but incomplete. A saved hour creates value only if the firm uses the capacity: responding to leads, moving cases, communicating with clients, improving quality, handling more appropriate matters, or avoiding cost.
            </p>
            <p>
              One Mission Control discussion proposes <a href="https://mission.getpossibleminds.com/podcasts/7784?view=explained" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">return on labor</a> as an owner&apos;s lens: can the same team perform more valuable work? Treat it as an operating question, not a universal benchmark.
            </p>
            <div className="overflow-x-auto border-y border-white/10">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead><tr className="border-b border-white/10 text-sm"><th className="px-4 py-4 font-semibold text-primary">Dimension</th><th className="px-4 py-4 font-semibold text-white">Example measure</th><th className="px-4 py-4 font-semibold text-white">Governance question</th></tr></thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Capacity", "Staff effort per completed task", "Did correction consume the saving?"],
                    ["Speed", "Time to response or next case action", "Were urgent exceptions escalated?"],
                    ["Quality", "Error, omission, and rework rate", "Could the reviewer verify against the source?"],
                    ["Business", "Conversion, progression, or avoided cost", "Can the change be connected to this workflow?"],
                    ["Risk", "Incidents and near misses", "Are problems reported and used to improve controls?"],
                    ["Adoption", "Eligible work completed through the system", "Do staff trust and understand it?"],
                    ["Cost", "Licenses, usage, implementation, training, review, and maintenance", "Is the firm counting more than the subscription?"],
                  ].map(([dimension, measure, question]) => <tr key={dimension}><td className="px-4 py-4 font-semibold text-foreground/95">{dimension}</td><td className="px-4 py-4">{measure}</td><td className="px-4 py-4">{question}</td></tr>)}
                </tbody>
              </table>
            </div>
            <p className="text-xl leading-9 text-foreground/95">A credible return is the value of capacity used, revenue protected, and costs avoided, minus the full cost of the system and its supervision. Governance makes each part visible.</p>
          </section>

          <section id="first-30-days" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">A manageable first 30 days</h2>
            <div className="divide-y divide-primary/20 border-y border-primary/25">
              {[
                ["Week 1", "Find the real use", "Ask which AI products, extensions, transcription tools, and connected features the team uses. Record exact accounts and purposes without blame."],
                ["Week 2", "Choose one workflow", "Pick frequent work with a baseline. Map its information, effort, delay, errors, owner, and judgment points."],
                ["Week 3", "Build the safe lane", "Approve the tool and account, limit information and permissions, define review and escalation, and test edge cases."],
                ["Week 4", "Compare and decide", "Measure capacity, speed, quality, adoption, risk, and total cost. Expand, revise, or stop based on evidence."],
              ].map(([week, title, text]) => <div key={week} className="grid gap-2 py-6 sm:grid-cols-[6rem_11rem_1fr] sm:items-baseline"><span className="text-sm font-semibold text-primary">{week}</span><h3 className="font-semibold text-white">{title}</h3><p>{text}</p></div>)}
            </div>
            <p>
              Intake can be a strong first candidate because it is frequent, time-sensitive, and measurable. AI can acknowledge an inquiry, collect approved facts, structure the record, and alert the right person. Humans retain empathy, nuanced qualification, legal judgment, and the relationship. Our guide to <Link href="/personal-injury/intake-automation" className="text-primary underline decoration-primary/35 underline-offset-4">human-led AI intake</Link> shows that division.
            </p>
            <p className="text-xl leading-9 text-foreground/95">Good governance is not the brake on AI adoption. It is what lets a firm keep the benefits after the demo, the first mistake, and the first difficult matter.</p>
          </section>

          <section id="research-basis" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Research basis</h2>
            <p>This article combines current professional guidance with operating lessons from these Mission Control transcripts:</p>
            <ul className="space-y-3 border-y border-white/10 py-5">
              {[
                ["From Information Governance to Governed Intelligence for Trustworthy AI", "7824"],
                ["Law Firm Owners: Is Your Team Putting Client Data at Risk With AI?", "7784"],
                ["Stop Automating Broken Processes", "7805"],
                ["The Tech Stack That Was Costing TORKLAW Cases", "6301"],
                ["Recover $72K Per Lawyer a Year in Lost Billable Time With AI", "7216"],
                ["The Legal Industry Has a Data Problem AI Can't Fix", "7813"],
                ["AI Governance and Defensible Disposal", "7834"],
              ].map(([title, id]) => <li key={id}><a href={`https://mission.getpossibleminds.com/podcasts/${id}?view=explained`} target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">{title}</a></li>)}
            </ul>
            <p>
              The <a href="https://airc.nist.gov/airmf-resources/playbook/" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">NIST AI RMF Playbook</a> and the UK Information Commissioner&apos;s <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/ai-and-data-protection-risk-toolkit/" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">AI risk toolkit</a> provide more detailed implementation guidance.
            </p>
            <p className="text-sm leading-6 text-foreground/60">Vendor and podcast claims about returns are examples, not independent benchmarks. This article provides an operating framework, not legal advice.</p>
          </section>

          <section id="faq" className="mt-16 scroll-mt-28 space-y-8">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Frequently asked questions</h2>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqs.map((faq) => <div key={faq.question} className="py-7"><h3 className="text-xl font-semibold text-white">{faq.question}</h3><p className="mt-3">{faq.answer}</p></div>)}
            </div>
          </section>

          <section className="mt-16 border-y border-primary/30 py-10">
            <p className="text-xs font-semibold uppercase text-primary/80">Govern one workflow</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">Make the first AI investment measurable and governable.</h2>
            <p className="mt-5 max-w-2xl">Possible Minds helps PI firms map a workflow, its information, permissions, human decisions, vendor risks, and baseline before building a controlled system around it.</p>
            <Link href="/consult" className="mt-7 inline-flex items-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#00ff41]/90">Request an AI governance diagnostic <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </section>
        </article>
      </main>
    </div>
  );
}
