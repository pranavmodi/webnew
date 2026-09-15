import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Network, Workflow } from "lucide-react";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "great-ai-filter-personal-injury-firms";
const pageTitle = "The Great AI Filter Is Here: Why Some PI Firms Will Pull Ahead";
const description =
  "Why AI advantage depends on reorganizing PI firm workflows, roles, data, and decisions rather than merely buying better legal technology.";
const pageUrl = `${SITE_URL}/blog/${slug}`;

const contents = [
  { id: "what-the-filter-means", label: "What the AI filter means" },
  { id: "why-awareness-is-not-enough", label: "Why awareness is not enough" },
  { id: "architectural-knowledge", label: "What architectural knowledge means" },
  { id: "intake-example", label: "The intake example" },
  { id: "operating-architecture", label: "What the new architecture requires" },
  { id: "small-firm-advantage", label: "The small-firm advantage" },
  { id: "research-basis", label: "Research basis" },
];

const faqs = [
  {
    question: "What is the great AI filter for personal injury firms?",
    answer:
      "It is the widening performance gap between firms that reorganize workflows around AI and firms that merely add AI tools to existing processes. The difference appears in response time, handoffs, data quality, staff capacity, client service, and the speed at which the firm learns.",
  },
  {
    question: "What is architectural knowledge in a law firm?",
    answer:
      "Architectural knowledge is the firm's practical understanding of how roles, decisions, systems, information, incentives, and handoffs fit together. It includes details such as who owns a new lead, when a lawyer is alerted, where the authoritative case status lives, and how an error is corrected.",
  },
  {
    question: "Is generative AI necessarily a disruptive innovation?",
    answer:
      "Not every AI product is disruptive in Clayton Christensen's strict sense. Some improve established services for existing clients. The relevant lesson is that a technology or business model can become strategically important while remaining difficult for a successful incumbent to adopt through its existing structure.",
  },
  {
    question: "Why can buying an AI tool fail to improve a PI firm?",
    answer:
      "A tool may perform its task correctly while the surrounding workflow still fails. If ownership is unclear, data is incomplete, staff work around the system, or high-value matters are not escalated, the firm has added a capable component without repairing the operating system around it.",
  },
  {
    question: "Where should a small PI firm begin?",
    answer:
      "Begin with one measurable workflow such as after-hours intake or routine client updates. Map the current path, assign decision rights, define human review and escalation, connect the required data, and measure the business outcome before expanding.",
  },
];

export const metadata: Metadata = {
  title: `The Great AI Filter for PI Firms | ${SITE_NAME}`,
  description,
  keywords: [
    "AI transformation personal injury law firms",
    "AI strategy for PI firms",
    "architectural knowledge law firms",
    "legal AI operating model",
    "personal injury law firm automation",
    "AI disruption legal industry",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-09-15",
    modifiedTime: "2026-09-15",
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
      datePublished: "2026-09-15",
      dateModified: "2026-09-15",
      author: { "@type": "Person", name: post.author },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: pageUrl,
      articleSection: "AI Strategy",
      keywords:
        "AI transformation for PI firms, architectural knowledge, legal AI operating model, personal injury law firm automation",
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
      <ClickBeacon page="blog-great-ai-filter-pi-firms" />
      <JsonLd data={structuredData} />

      <header className="border-b border-primary/20 bg-[#050807]">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24">
          <div className="flex items-center gap-3 text-xs text-foreground/65">
            <Link href="/blog" className="transition hover:text-primary">Blog</Link>
            <span aria-hidden="true" className="text-primary/50">/</span>
            <span>AI Strategy</span>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase text-[#00ff41]">For personal injury firm owners</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.7rem]">{pageTitle}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80 sm:text-xl">
            Every firm can buy capable AI. Far fewer can change how work, information, authority, and incentives fit together. That organizational gap will decide who compounds the advantage.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/60">
            <span>{post.author}</span><span aria-hidden="true">/</span>
            <time dateTime="2026-09-15">{post.date}</time><span aria-hidden="true">/</span>
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
              The great AI filter will separate firms by their ability to reorganize, not by their ability to subscribe. AI changes who does the first pass, when a human intervenes, where information moves, and how performance is measured. Firms that redesign those connections will improve with every case. Firms that preserve the old structure will accumulate tools without gaining a reliable operating advantage.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
          <section className="space-y-6">
            <p className="text-xl leading-9 text-foreground/95">
              Imagine two PI firms buying access to the same AI model on the same afternoon.
            </p>
            <p>
              At the first firm, each lawyer experiments alone. Intake staff continue copying information between systems. Nobody knows which tasks AI may complete, which require review, or where corrections should be recorded. Six months later, the firm has faster drafts and the same operational bottlenecks.
            </p>
            <p>
              At the second firm, the owner chooses one workflow. The team maps every handoff, assigns ownership, gives the AI only the information it needs, defines when a human takes over, and measures the result. Each correction improves the workflow for the next matter.
            </p>
            <p>
              The difference is not model intelligence. It is organizational intelligence.
            </p>
          </section>

          <section id="what-the-filter-means" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">The AI filter is already forming</h2>
            <p>
              AI capability is spreading quickly across legal work. In the <a href="https://www.wolterskluwer.com/en/know/frl-26" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">2026 Future Ready Lawyer survey</a>, 92% of legal professionals reported using at least one AI tool, while 62% reported saving 6% to 20% of their weekly time. The survey is global and vendor-produced, not a PI-specific benchmark, but it captures the direction of travel: access is becoming ordinary.
            </p>
            <p>
              Results remain uneven. <a href="https://www.thomsonreuters.com/en/institute/reports/turning-law-firm-ai-strategies-into-practice" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">Thomson Reuters&apos; 2026 research</a> found that nearly 80% of the lawyers it studied believed their practices had a clear AI plan, yet fewer than half felt confident that their practice area could succeed as AI became more integrated.
            </p>
            <p>
              That is the filter. Some firms convert access into a new operating capability. Others remain aware, licensed, and strategically concerned while daily work changes very little. Falling behind may first appear as weaker margins, slower response, staff overload, or poorer client service rather than a dramatic collapse. Over time, those differences compound.
            </p>
          </section>

          <section id="why-awareness-is-not-enough" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Seeing the disruption does not make the switch easy</h2>
            <p>
              Clayton Christensen&apos;s theory of disruptive innovation is often reduced to a warning that leaders failed to notice new technology. His harder insight was that well-run organizations can see a threat and still respond too slowly because their resources, processes, customers, and measures of success were built for the existing business.
            </p>
            <p>
              In Christensen&apos;s strict theory, a disruption usually begins in a new or low-end market and improves until it can challenge incumbents. Not every AI product follows that path. The organizational lesson still matters: a promising technology can require economics and working methods that the existing firm is poorly designed to support. The <a href="https://www.christenseninstitute.org/theory/" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">Christensen Institute&apos;s theory library</a> emphasizes designing systems and aligning the organization around the problem being solved.
            </p>
            <p>
              A successful firm has accumulated habits that once made it successful. Cases move through familiar roles. Information follows familiar channels. Compensation rewards familiar outputs. Vendor contracts reinforce existing boundaries. Changing one component is easy. Changing the relationships among those components is much harder.
            </p>
          </section>

          <section id="architectural-knowledge" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">The missing capability is architectural knowledge</h2>
            <p>
              César Hidalgo&apos;s <a href="https://cesarhidalgo.com/books" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4"><em>The Infinite Alphabet: And the Laws of Knowledge</em></a> examines how knowledge grows, moves, and decays. In <a href="https://cesarhidalgo.com/knowledge_course" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">his course built around the book</a>, Hidalgo connects learning curves and disruptive innovation with the difficulty of moving between them. One reason for that difficulty is architectural knowledge.
            </p>
            <p>
              Rebecca Henderson and Kim Clark gave the term its influential management meaning. Their <a href="https://doi.org/10.2307/2393549" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">1990 study of architectural innovation</a> distinguished knowledge of individual components from knowledge of how the components fit together. They found that those relationships become embedded in an organization&apos;s structures and information-processing routines, making architectural change unusually difficult to recognize and execute.
            </p>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              <div className="bg-[#050807] p-6">
                <p className="text-xs font-semibold uppercase text-primary/80">Component knowledge</p>
                <h3 className="mt-3 text-xl font-semibold text-white">What each part can do</h3>
                <p className="mt-3 text-sm leading-6">The chatbot, CRM, phone system, summarizer, case-management platform, intake specialist, case manager, and lawyer.</p>
              </div>
              <div className="bg-[#050807] p-6">
                <p className="text-xs font-semibold uppercase text-primary/80">Architectural knowledge</p>
                <h3 className="mt-3 text-xl font-semibold text-white">How the parts work together</h3>
                <p className="mt-3 text-sm leading-6">Ownership, handoffs, permissions, escalation, source of truth, review, incentives, feedback, and accountability.</p>
              </div>
            </div>
            <p className="text-xl leading-9 text-foreground/95">
              A firm can understand every AI tool on the market and still lack the knowledge required to rebuild its own workflow around them.
            </p>
          </section>

          <section id="intake-example" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">A faster intake response can preserve a slow intake system</h2>
            <p>
              Suppose a PI firm adds an AI agent that answers after-hours inquiries in seconds, gathers facts, and creates a lead. The component works exactly as promised.
            </p>
            <p>
              The inquiry can still be lost. The CRM may create a duplicate. No one may own the morning callback. The agent may flag a high-value case without alerting the right lawyer. Staff may distrust the summary and repeat the interview. Marketing may still count the lead without learning whether it became a wanted, signed, and retained case.
            </p>
            <p>
              The firm automated the first step while preserving every broken connection around it. This is why <Link href="/blog/ai-cannot-fix-broken-pi-workflow" className="text-primary underline decoration-primary/35 underline-offset-4">AI cannot repair a broken PI workflow by itself</Link>.
            </p>
            <div className="border-y border-primary/30 py-7">
              <p className="text-xs font-semibold uppercase text-primary/80">The architectural questions</p>
              <div className="mt-5 divide-y divide-white/10">
                {[
                  ["Ownership", "Who is responsible from first response until the lead is signed or closed?"],
                  ["Escalation", "Which facts trigger immediate human contact, and by whom?"],
                  ["Authority", "What may the AI say, create, update, or schedule without approval?"],
                  ["Information", "Which system is authoritative, and where are corrections recorded?"],
                  ["Learning", "Which outcomes and errors are reviewed so the workflow improves?"],
                ].map(([title, text], index) => <div key={title} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_10rem_1fr] sm:items-baseline"><span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span><h3 className="font-semibold text-white">{title}</h3><p>{text}</p></div>)}
              </div>
            </div>
          </section>

          <section id="operating-architecture" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">What the new operating architecture requires</h2>
            <p>
              The hard part of AI transformation is deciding how the firm should work after intelligence becomes inexpensive. That requires changes across several connected layers.
            </p>
            <div className="divide-y divide-primary/20 border-y border-primary/25">
              {[
                ["Workflow", "Map the entire path, including delays, exceptions, rework, and the moment human judgment matters."],
                ["Decision rights", "State what AI may recommend or execute and what a lawyer or staff member must approve."],
                ["Information", "Give the system relevant, authoritative data with appropriate permissions and retention controls."],
                ["Roles", "Move people away from repetitive transfer work and toward review, empathy, judgment, and exception handling."],
                ["Incentives", "Measure useful outcomes such as qualified contact, signed cases, cycle time, corrections, and client experience."],
                ["Learning", "Capture failures and overrides, then update the workflow rather than treating each error as an isolated event."],
              ].map(([title, text], index) => <div key={title} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_11rem_1fr] sm:items-baseline"><span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span><h3 className="font-semibold text-white">{title}</h3><p>{text}</p></div>)}
            </div>
            <p>
              This is also why legal AI implementation remains difficult. A <a href="https://law.stanford.edu/publications/opportunities-and-challenges-in-legal-ai/" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">Stanford Law School review of legal AI</a> identifies firm structure, access to high-quality proprietary data, privacy, and integration with existing workflows among the enduring constraints. Better models do not automatically remove those organizational conditions.
            </p>
          </section>

          <section id="small-firm-advantage" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Small PI firms can change the architecture faster</h2>
            <p>
              A small firm has fewer people, less implementation capacity, and little room for a failed technology project. It also has an important advantage: the owner can see the whole workflow and change it without negotiating across dozens of committees.
            </p>
            <p>
              The sensible unit of change is one workflow. Choose an operational leak with a measurable outcome. Map how it works today. Redesign the roles, data, escalation, and review around AI. Run it on a limited scope. Keep human judgment where consequences are high. Measure what happened and preserve what the team learned.
            </p>
            <p>
              Then move to the next workflow. This is the logic behind <Link href="/blog/ai-transformation-one-workflow-at-a-time" className="text-primary underline decoration-primary/35 underline-offset-4">building AI transformation one workflow at a time</Link>. The compounding advantage comes from the firm&apos;s growing ability to redesign itself, not from any single automation.
            </p>
            <div className="flex gap-4 border-y border-primary/25 py-6">
              <Network className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-foreground/90">
                The durable asset is the firm&apos;s architectural knowledge: a living understanding of how people, systems, information, and judgment should work together.
              </p>
            </div>
            <p className="text-xl leading-9 text-foreground/95">
              The great AI filter will reward firms that can learn as an organization. Buying the technology is only the admission price.
            </p>
          </section>

          <section id="research-basis" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Research basis</h2>
            <p>
              The knowledge framework draws from César A. Hidalgo&apos;s <a href="https://cesarhidalgo.com/books" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4"><em>The Infinite Alphabet: And the Laws of Knowledge</em></a> and his <a href="https://cesarhidalgo.com/knowledge_course" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">course on collective learning</a>. The distinction between component and architectural knowledge comes from Rebecca Henderson and Kim Clark&apos;s 1990 paper, <a href="https://doi.org/10.2307/2393549" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">Architectural Innovation</a>. The disruption framing uses the <a href="https://www.christenseninstitute.org/theory/" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">Christensen Institute&apos;s theory resources</a>.
            </p>
            <p>
              Legal-industry context comes from the <a href="https://www.thomsonreuters.com/en/institute/reports/turning-law-firm-ai-strategies-into-practice" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">2026 Thomson Reuters Stand-out Lawyers Survey</a>, the <a href="https://www.wolterskluwer.com/en/know/frl-26" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">2026 Wolters Kluwer Future Ready Lawyer survey</a>, and the <a href="https://law.stanford.edu/publications/opportunities-and-challenges-in-legal-ai/" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">Stanford Law School paper on legal AI</a>. Survey findings are directional and are not specific forecasts for personal injury firms.
            </p>
          </section>

          <section id="faq" className="mt-16 scroll-mt-28 space-y-8">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Frequently asked questions</h2>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqs.map((faq) => <div key={faq.question} className="py-7"><h3 className="text-xl font-semibold text-white">{faq.question}</h3><p className="mt-3">{faq.answer}</p></div>)}
            </div>
          </section>

          <section className="mt-16 border-y border-primary/30 py-10">
            <div className="flex items-start gap-4">
              <Workflow className="mt-1 hidden size-7 shrink-0 text-primary sm:block" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase text-primary/80">Start with one workflow</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">Find the operating change your firm can make now.</h2>
                <p className="mt-5 max-w-2xl">Possible Minds helps PI firms map a workflow, redesign its handoffs and controls, and build a narrow AI system around a measurable business outcome.</p>
                <Link href="/consult" className="mt-7 inline-flex items-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#00ff41]/90">Request a firm-specific diagnostic <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
