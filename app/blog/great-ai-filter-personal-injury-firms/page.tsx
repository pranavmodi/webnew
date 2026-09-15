import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Network } from "lucide-react";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "great-ai-filter-personal-injury-firms";
const pageTitle = "The Great AI Filter Is Here: Not All Firms Will Get Through";
const description =
  "Why AI adoption challenges the habits and relationships that made PI firms successful, and what architectural knowledge explains about change.";
const pageUrl = `${SITE_URL}/blog/${slug}`;

const contents = [
  { id: "what-the-filter-means", label: "What the AI filter means" },
  { id: "why-awareness-is-not-enough", label: "Why awareness is not enough" },
  { id: "architectural-knowledge", label: "What architectural knowledge means" },
  { id: "intake-example", label: "The intake example" },
  { id: "operating-architecture", label: "What the filter selects" },
  { id: "small-firm-advantage", label: "One practical implication" },
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
            <p className="text-xs font-semibold uppercase text-primary/80">The central idea</p>
            <p className="mt-4 text-xl leading-9 text-foreground/95 sm:text-2xl sm:leading-10">
              AI changes who does the first pass, when a human intervenes, where information moves, and how performance is measured. Its value depends on a firm&apos;s ability to rethink those connections. The habits that made an organization successful can also make that change difficult, even when its leaders understand the technology.
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
              The same technology has entered two very different organizations. What happens next depends on the relationships, habits, and decisions surrounding it.
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
              Rebecca Henderson and Kim Clark explored this problem in their <a href="https://doi.org/10.2307/2393549" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">1990 study of architectural innovation</a>. They studied companies making the equipment used to print tiny circuit patterns on semiconductor chips. Established manufacturers understood the underlying technology. Yet some struggled when new designs changed how familiar parts worked together.
            </p>
            <p>
              Their distinction was simple. <strong className="text-white">Component knowledge</strong> is knowing how each part works. <strong className="text-white">Architectural knowledge</strong> is knowing how those parts depend on one another. A company could retain its expertise in the parts while losing its advantage when the connections changed.
            </p>
            <p>
              The difficult discovery was that the old connections also lived inside the organization. Teams knew whom to consult. Engineers knew which information mattered. Testing routines looked for familiar problems. These habits made the company efficient at building the old product, but could cause it to overlook problems in the new design. Hiring capable people or buying new equipment did not automatically change those habits.
            </p>
            <p>
              Applied to a PI firm, the idea is easy to picture. A lawyer knows how to evaluate a case. An intake specialist knows how to speak with a frightened caller. The CRM stores the lead. The firm&apos;s architecture determines whether the right facts reach that lawyer while the caller is still deciding whom to hire.
            </p>
            <p>
              That legal example is an application of the study&apos;s insight. Henderson and Clark studied manufacturing, and their findings do not establish which law firms will succeed with AI. They give us a useful explanation for why knowing the technology can coexist with difficulty changing the organization.
            </p>
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
            <p>
              Speed at the front exposes delays further along. The experienced employee who used to keep everything moving may have been compensating for gaps nobody had written down. Once a machine takes over part of the work, the firm discovers how much coordination depended on that person&apos;s memory and judgment.
            </p>
          </section>

          <section id="operating-architecture" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">What the filter selects</h2>
            <p>
              As more firms gain access to capable AI, the ability to learn together becomes more valuable. Some firms will produce faster individuals. Others will turn individual discoveries into methods the whole firm can use and improve.
            </p>
            <p>
              In the first firm, useful prompts, corrections, and techniques stay with the people who discover them. When they leave, much of the learning leaves too. In the second, an employee&apos;s discovery changes a shared workflow. An error changes the instructions. A lawyer&apos;s correction clarifies where judgment belongs. The next matter benefits from what happened in the previous one.
            </p>
            <p>
              This is also why legal AI implementation remains difficult. A <a href="https://law.stanford.edu/publications/opportunities-and-challenges-in-legal-ai/" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/35 underline-offset-4">Stanford Law School review of legal AI</a> identifies firm structure, access to high-quality proprietary data, privacy, and integration with existing workflows among the enduring constraints. Better models do not automatically remove those organizational conditions.
            </p>
            <p>
              PI firms have a useful economic starting point. Under a contingency model, reducing administrative effort can improve the economics of a case without reducing the hours available to bill. But an incentive to become efficient does not itself create the capacity to change. The owner still has to reconsider familiar roles, tolerate a period of learning, and make room for staff to question procedures that once worked well.
            </p>
            <p>
              The title&apos;s warning is a competitive argument, not a forecast of mass closures. Losing ground may look ordinary at first: slower callbacks, more staff effort per case, inconsistent updates, less room to invest. If another firm keeps learning how to reduce those costs while improving service, the distance can grow. The model may be available to both firms. The accumulated ability to use it well takes time to build.
            </p>
          </section>

          <section id="small-firm-advantage" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">One practical implication</h2>
            <p>
              Start with one workflow and follow its connections. Notice where ownership changes, information is copied, judgment enters, and exceptions arise. Make those relationships clear before introducing AI, then assign an owner and measure the result. A small firm can often bring everyone involved into the same conversation.
            </p>
            <p>
              This is the reasoning behind <Link href="/blog/ai-transformation-one-workflow-at-a-time" className="text-primary underline decoration-primary/35 underline-offset-4">AI transformation one workflow at a time</Link>. The first project improves a piece of the business. It also teaches the firm how to change the next one.
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
            <p>Possible Minds helps PI firms understand how their work fits together and build AI systems around that understanding.</p>
            <Link href="/consult" className="mt-5 inline-flex items-center gap-2 text-primary underline underline-offset-4">Discuss one workflow <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </section>
        </article>
      </main>
    </div>
  );
}
