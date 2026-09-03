import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Users } from "lucide-react";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "ai-cannot-fix-broken-pi-workflow";
const pageTitle = "AI Cannot Fix a Broken PI Firm Workflow";
const metaTitle = `Fix PI Workflows Before Adding AI | ${SITE_NAME}`;
const pageDescription =
  "Why PI firms should map intake, data, handoffs, and human review before automating with AI, based on Yuval Goren's operating advice.";
const pageUrl = `${SITE_URL}/blog/${slug}`;

const contents = [
  { id: "why-tools-disappoint", label: "Why good tools disappoint" },
  { id: "intake-test", label: "What intake reveals" },
  { id: "watch-the-work", label: "Watch the work before automating it" },
  { id: "data-and-security", label: "Prepare the data and security boundary" },
  { id: "adoption", label: "Make adoption part of the design" },
  { id: "buying-discipline", label: "Buy for the workflow, not the demo" },
];

const faqs = [
  {
    question: "Why does AI fail in a personal injury law firm?",
    answer:
      "AI often disappoints when the underlying workflow is undocumented, inconsistent, fragmented across systems, or dependent on one person's memory. The technology then reproduces those problems faster instead of resolving them.",
  },
  {
    question: "Is intake a good first AI workflow for a PI firm?",
    answer:
      "Yes, when the scope is narrow. AI can acknowledge an inquiry, collect approved facts, organize the lead, and support after-hours follow-up. A person should still build trust, handle sensitive conversations, and make case-acceptance decisions.",
  },
  {
    question: "What should a PI firm document before automating a workflow?",
    answer:
      "Document the trigger, required information, systems involved, handoffs, expected output, exceptions, escalation rules, responsible reviewer, and success measure. Test the map against ordinary and difficult examples before building.",
  },
  {
    question: "How should a PI firm evaluate an AI vendor?",
    answer:
      "Evaluate the vendor against the real workflow. Check integrations, API access, permissions, retention, security terms, exportability, exception handling, human review, contract length, and how the firm will verify results.",
  },
];

const workflowSteps = [
  { label: "Watch", detail: "Observe the work as it happens" },
  { label: "Map", detail: "Name every handoff and exception" },
  { label: "Fix", detail: "Remove ambiguity and duplication" },
  { label: "Automate", detail: "Give AI a bounded role" },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "AI workflow automation for personal injury firms",
    "personal injury law firm AI",
    "PI firm intake automation",
    "law firm AI readiness",
    "legal AI implementation",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-09-03",
    modifiedTime: "2026-09-03",
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
      datePublished: "2026-09-03",
      dateModified: "2026-09-03",
      author: { "@type": "Person", name: post.author },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: pageUrl,
      articleSection: "AI Operations",
      keywords:
        "AI workflow automation for personal injury firms, PI intake automation, law firm AI readiness",
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
      <ClickBeacon page="blog-fix-pi-workflow-before-ai" />
      <JsonLd data={structuredData} />

      <header className="border-b border-primary/20 bg-[#050807]">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24">
          <div className="flex items-center gap-3 text-xs text-foreground/65">
            <Link href="/blog" className="transition hover:text-primary">Blog</Link>
            <span aria-hidden="true" className="text-primary/50">/</span>
            <span>AI Operations</span>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase text-[#00ff41]">
            An operating lesson for PI firm owners
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.7rem]">
            AI Cannot Fix a Broken PI Firm Workflow
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80 sm:text-xl">
            Before a firm automates intake, follow-up, or case work, it has to understand how that work actually moves. Otherwise AI merely makes the confusion faster.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/60">
            <span>{post.author}</span><span aria-hidden="true">/</span>
            <time dateTime="2026-09-03">{post.date}</time><span aria-hidden="true">/</span>
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
              AI works best when the firm can explain the work: what starts it, what information it needs, where it goes, what good looks like, and when a person must step in. If those answers live only in someone&apos;s head, buying software is premature. Map and repair the workflow first; then automate a narrow, measurable part of it.
            </p>
          </div>

          <ol className="mt-10 grid grid-cols-2 border-y border-white/10 sm:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <li
                key={step.label}
                className={`min-h-28 border-white/10 p-4 sm:border-r sm:px-5 sm:last:border-r-0 ${
                  index < 2 ? "border-b sm:border-b-0" : ""
                } ${index % 2 === 0 ? "border-r" : ""}`}
              >
                <span className="text-sm font-semibold text-primary">0{index + 1}</span>
                <div className="mt-3">
                  <p className="font-semibold text-white">{step.label}</p>
                  <p className="mt-1 text-xs leading-5 text-foreground/55">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
          <section className="space-y-6">
            <p className="text-xl leading-9 text-foreground/95">
              A new lead enters through one system. An intake specialist copies it into another. Someone sends a message so the attorney notices it. Management updates a spreadsheet. When the case signs, part of the same information is entered again.
            </p>
            <p>
              From a distance, the firm has a four-step process. In practice, it may have twelve steps, several unofficial workarounds, and no single reliable record of what happened.
            </p>
            <p>
              That is the operating problem beneath many AI projects. In a recent <a href="https://mission.getpossibleminds.com/podcasts/7805?view=explained" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">Personal Injury Mastermind conversation</a>, <a href="https://www.linkedin.com/in/yuval-goren-8529727" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">Yuval Goren, founder and CEO of Kobargo Technology Partners</a>, put it plainly: &ldquo;Great technology is not going to fix a bad process.&rdquo;
            </p>
            <p>
              His point is not that PI firms should wait. It is that the fastest route to useful AI begins with the unglamorous work of seeing the firm clearly.
            </p>
          </section>

          <section id="why-tools-disappoint" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Why good tools disappoint</h2>
            <p>
              Firm leaders often begin with a product: an AI receptionist, a drafting assistant, a case-management feature, or an agent that promises to connect everything. The product looks capable in a demo. Adoption then stalls, outputs need constant repair, or staff quietly return to the old workaround.
            </p>
            <p>
              The missing layer is usually operational. The firm has not agreed on the required fields, who owns the next action, how exceptions should be handled, which system is authoritative, or how success will be measured. AI cannot infer those decisions reliably from a collection of habits.
            </p>
            <p>
              In that environment, automation preserves the ambiguity. A missed handoff happens sooner. Incomplete data travels farther. A poor follow-up sequence runs more consistently. The firm gets more activity without gaining more control.
            </p>
          </section>

          <section id="intake-test" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Intake is the clearest test</h2>
            <p>
              Intake is attractive because speed matters and the value is visible. It is also where an automation-first mindset can do damage. The person contacting the firm may be injured, frightened, comparing lawyers, or unsure whether anyone is listening.
            </p>
            <p>
              Goren draws a useful boundary. AI is well suited to collecting information, acknowledging an inquiry, supporting after-hours coverage, and pursuing leads the team has not reached. People remain better suited to creating the relationship that earns trust, referrals, and reviews.
            </p>
            <div className="overflow-x-auto border-y border-white/10">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 text-sm">
                    <th className="px-4 py-4 font-semibold text-primary">AI can prepare</th>
                    <th className="px-4 py-4 font-semibold text-white">A person should own</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Immediate acknowledgment and basic fact collection", "Empathy and the first substantive conversation"],
                    ["A structured lead record and transcript", "Case evaluation and acceptance"],
                    ["Approved follow-up across channels", "Sensitive questions and unusual facts"],
                    ["Priority flags and routing", "The decision to call, refer, decline, or escalate"],
                  ].map(([prepares, owns]) => (
                    <tr key={prepares}>
                      <td className="px-4 py-4 text-foreground/90">{prepares}</td>
                      <td className="px-4 py-4">{owns}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              The right design is not AI instead of intake staff. It is <Link href="/personal-injury/intake-automation" className="text-primary underline decoration-primary/35 underline-offset-4">AI-assisted, human-led intake</Link>: the system shortens the delay and prepares the context so the right person can respond well.
            </p>
          </section>

          <section id="watch-the-work" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Watch the work before automating it</h2>
            <p>
              An SOP may describe the intended process. It rarely captures the actual one. Watch a real inquiry move through the firm, including the spreadsheet added for reporting, the message sent as insurance, and the second phone number that breaks attribution.
            </p>
            <ol className="divide-y divide-primary/20 border-y border-primary/25">
              {[
                ["Trigger", "What event starts the work, and through which channel?"],
                ["Inputs", "What information is required, and where does it come from?"],
                ["Handoffs", "Who receives the work, and how do they know it is theirs?"],
                ["Exceptions", "Which facts require a different route or immediate attention?"],
                ["Output", "What must exist when the workflow is complete?"],
                ["Measure", "What result should improve: response time, contact rate, accuracy, or staff time?"],
              ].map(([label, detail], index) => (
                <li key={label} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_9rem_1fr] sm:items-baseline">
                  <span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-semibold text-white">{label}</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ol>
            <p>
              This map gives the firm something a vendor demo cannot: a specification for its own work. It becomes the basis for testing an off-the-shelf product, configuring an integration, or building a <Link href="/blog/why-pi-firms-need-bespoke-ai-agents" className="text-primary underline decoration-primary/35 underline-offset-4">bespoke agent for the last mile</Link>.
            </p>
          </section>

          <section id="data-and-security" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Prepare the data and security boundary</h2>
            <p>
              A workflow cannot be reliable when the information it needs is scattered across inboxes, local drives, case-management records, cloud folders, and private spreadsheets. Before connecting AI, the firm must decide which source is authoritative, who may access it, what should be retained, and what can be archived or removed.
            </p>
            <div className="flex gap-4 border-y border-amber-400/25 bg-amber-400/[0.04] py-6">
              <ShieldCheck className="mt-1 size-6 shrink-0 text-amber-300" aria-hidden="true" />
              <p className="text-foreground/90">
                An enterprise AI account is not a complete governance program. Review the actual product terms, retention, training use, permissions, logging, connected systems, incident responsibilities, and any privacy or professional obligations that apply to the firm and the data.
              </p>
            </div>
            <p>
              Use the least access the workflow needs. Redact identifying information when it is unnecessary. Keep sending, filing, case acceptance, legal advice, and other consequential actions behind human approval. Verify AI-assisted work against its source before it leaves the firm.
            </p>
            <p>
              Clear safeguards can also support trust. A firm should be able to explain, in ordinary client language, how it uses technology and protects information. That is more meaningful than placing an AI badge on the website. It is part of <Link href="/personal-injury/vendor-risk-governance" className="text-primary underline decoration-primary/35 underline-offset-4">vendor risk and AI governance</Link>.
            </p>
          </section>

          <section id="adoption" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Make adoption part of the design</h2>
            <p>
              A technically sound workflow has no value if the team avoids it. Staff may hear &ldquo;automation&rdquo; as a judgment on their work or a warning about their jobs. Silence from leadership leaves people to invent their own explanation.
            </p>
            <div className="flex gap-4 border-y border-primary/25 py-6">
              <Users className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-foreground/90">
                Tell the team what the system will handle, what remains theirs, how mistakes will be reported, and how the recovered time will be used. Involve the people who perform the workflow; they know the exceptions a demo will miss.
              </p>
            </div>
            <p>
              Start in shadow mode. Let the system prepare work without sending messages or changing the authoritative record. Compare its output with the team&apos;s output, record corrections, and expand only when ordinary and difficult cases both hold up. That is how <Link href="/blog/ai-change-management-personal-injury-firms" className="text-primary underline decoration-primary/35 underline-offset-4">AI change management</Link> becomes concrete rather than ceremonial.
            </p>
          </section>

          <section id="buying-discipline" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Buy for the workflow, not the demo</h2>
            <p>
              Goren describes firms signing long contracts after a polished demonstration without running a meaningful trial. The questions that matter appear after the presentation: Does the product connect to the firm&apos;s systems? Can the firm retrieve its data? Is there a usable API? How are exceptions surfaced? What can a reviewer inspect? What happens when the process changes?
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Test the product with representative firm scenarios.",
                "Include emotionally difficult and incomplete intakes.",
                "Confirm integrations and data-export paths in writing.",
                "Review permissions, retention, logging, and contract terms.",
                "Define the human approval points before launch.",
                "Measure the workflow outcome, not AI activity.",
              ].map((item) => (
                <li key={item} className="flex gap-3 border-b border-white/10 pb-3 text-foreground/90">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl leading-9 text-foreground/95">
              The firms that benefit from AI will not be the ones that bought the most tools. They will be the ones that understood their work well enough to give technology a clear job.
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
            <p className="text-xs font-semibold uppercase text-primary/80">Start with the work</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">Map one workflow before buying another tool.</h2>
            <p className="mt-5 max-w-2xl">
              Possible Minds helps PI firms observe a workflow, remove the broken handoffs, define the human boundary, and build a narrow AI system around what remains.
            </p>
            <Link href="/consult" className="mt-7 inline-flex items-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#00ff41]/90">
              Request a workflow diagnostic <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </section>
        </article>
      </main>
    </div>
  );
}
