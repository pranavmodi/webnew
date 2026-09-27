import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GitBranch, ShieldCheck } from "lucide-react";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "redesign-pi-workflows-around-ai";
const pageTitle = "How Personal Injury Firms Should Redesign Workflows Around AI";
const metaTitle = `Redesigning PI Workflows Around AI | ${SITE_NAME}`;
const pageDescription =
  "Seven practical principles for redesigning PI intake and case workflows around AI, grounded in electrification and organizational economics.";
const pageUrl = `${SITE_URL}/blog/${slug}`;

const contents = [
  { id: "electricity-lesson", label: "The lesson from electricity" },
  { id: "design-principles", label: "Seven workflow design principles" },
  { id: "intake-example", label: "What this looks like in intake" },
  { id: "redesign-method", label: "A simple redesign method" },
  { id: "governance-boundary", label: "Where governance belongs" },
  { id: "research-basis", label: "The research behind the framework" },
];

const principles = [
  {
    number: "01",
    title: "Remove dependencies that no longer need to exist",
    theory: "Constraint removal and decoupling",
    body:
      "Old workflows often contain a handoff because a capability used to be scarce. If AI can reliably read an inquiry, extract approved facts, and create a structured lead record, staff no longer need to retype the same information before the next step can begin.",
    example:
      "A web inquiry can be acknowledged and organized immediately, while the intake specialist receives the transcript, source, urgency flags, and missing questions in one place.",
    question:
      "Which handoffs exist only because information used to be difficult to read, organize, or move?",
  },
  {
    number: "02",
    title: "Rebundle work around the outcome",
    theory: "Task allocation",
    body:
      "A job is a bundle of tasks. When AI changes the cost of some tasks, the old bundle may stop making sense. The goal is not to automate every task separately. It is to decide which tasks now belong together and who should own the result.",
    example:
      "Instead of one person collecting facts, another copying them into the intake system, and a third assigning follow-up, one intake owner can receive a prepared record and concentrate on earning the potential client's trust.",
    question:
      "Once routine preparation is removed, who can own this outcome from beginning to end?",
  },
  {
    number: "03",
    title: "Change the surrounding system too",
    theory: "Organizational complementarity",
    body:
      "AI creates value only when the surrounding conditions support it. The system needs usable information, sensible permissions, clear decision rights, staff training, and incentives that reward the desired outcome.",
    example:
      "A priority alert has little value if the attorney cannot see the lead, nobody is expected to respond, or the intake platform does not preserve the source and conversation history.",
    question:
      "What else must change for the new capability to improve the client's experience?",
  },
  {
    number: "04",
    title: "Keep common work close to the front line",
    theory: "Knowledge hierarchies",
    body:
      "Organizations save scarce expertise by letting the front line solve common problems and escalating unusual ones. AI can expand the common work that intake specialists, case managers, and paralegals can prepare or resolve, while lawyers retain judgment and supervision.",
    example:
      "The system can identify missing intake facts and prepare the next questions. A lawyer still decides whether the matter fits the firm, how to handle an unusual liability issue, or whether urgent legal action is required.",
    question:
      "Which recurring questions can be prepared at the front line, and which exceptions still require a specialist?",
  },
  {
    number: "05",
    title: "Follow the bottleneck when it moves",
    theory: "Bottleneck migration",
    body:
      "Making one stage faster does not necessarily increase completed work. If AI produces 100 summaries but the firm can review only ten, review is now the constraint. Capacity and management attention should move to the new limiting step.",
    example:
      "Faster lead capture may expose slow attorney callbacks, weak consultation scheduling, or poor follow-up. The next improvement belongs there, not in generating even more leads.",
    question:
      "After this step becomes faster, where will work wait next?",
  },
  {
    number: "06",
    title: "Treat the workflow as something the firm must learn",
    theory: "Co-invention and the productivity J-curve",
    body:
      "A general technology does not arrive with the perfect operating model for every firm. Teams discover useful task boundaries, checks, prompts, and exception rules through production use. That learning is part of the investment, not evidence that the project failed.",
    example:
      "Begin with a bounded intake path, review misses and staff corrections, update the operating instructions, and rerun evals before expanding the system.",
    question:
      "What feedback will help the workflow improve without learning from unreviewed mistakes?",
  },
  {
    number: "07",
    title: "Design the transition, not only the destination",
    theory: "Path dependence and adjustment costs",
    body:
      "A clean-sheet workflow may be attractive, but an operating firm already has contracts, systems, habits, and active cases. The best destination and the best next step are not always the same.",
    example:
      "A firm may begin by adding immediate acknowledgment and structured lead creation while leaving case-acceptance rules and its existing intake platform intact. It can remove further handoffs after the first path proves reliable.",
    question:
      "What is the smallest change that moves the firm toward the better design without disrupting live matters?",
  },
];

const intakeRows = [
  {
    moment: "Inquiry arrives",
    old: "A voicemail, form, or chat waits in a channel-specific queue.",
    redesigned: "AI acknowledges the inquiry and captures approved facts at any hour.",
    owner: "Staff owns empathy, promises, and sensitive conversations.",
  },
  {
    moment: "Lead is organized",
    old: "Staff retypes details and searches for the source or conversation history.",
    redesigned: "The system creates one structured lead with transcript, source, missing fields, and next actions.",
    owner: "Staff verifies material facts and corrects the record.",
  },
  {
    moment: "Priority is assessed",
    old: "Every lead enters the same queue or depends on someone noticing it.",
    redesigned: "Rules and AI surface urgent or promising inquiries for immediate attention.",
    owner: "The firm defines the criteria; a lawyer makes legal and acceptance decisions.",
  },
  {
    moment: "Follow-up begins",
    old: "Callbacks and reminders depend on memory, inboxes, and shift coverage.",
    redesigned: "Approved reminders continue until contact, decline, referral, or escalation.",
    owner: "A person takes over as soon as judgment or trust matters.",
  },
  {
    moment: "The firm learns",
    old: "Lost leads and corrections disappear into individual conversations.",
    redesigned: "Outcomes and reviewed corrections become measurable workflow feedback.",
    owner: "Leadership decides what changes and validates the next version.",
  },
];

const redesignQuestions = [
  {
    title: "What changed?",
    body: "Name the precise capability that became cheaper, faster, or more available. Avoid starting with the product name.",
  },
  {
    title: "What dependency can disappear?",
    body: "Find the queue, duplicate entry, status check, or specialist handoff created by the old constraint.",
  },
  {
    title: "How should the remaining tasks be bundled?",
    body: "Give one person or team clear ownership of the client or case outcome, not just a fragment of activity.",
  },
  {
    title: "What must change around it?",
    body: "List the data, permissions, integrations, training, review rules, and incentives the new workflow requires.",
  },
  {
    title: "Where will the bottleneck move?",
    body: "Measure completed, acceptable outcomes and watch where work starts waiting after the change.",
  },
];

const researchLinks = [
  {
    label: "Warren D. Devine Jr., From Shafts to Wires",
    href: "https://www.cambridge.org/core/journals/journal-of-economic-history/article/abs/from-shafts-to-wires-historical-perspective-on-electrification/500078D9B4764BA1109A7967437CF226",
    detail: "How individual motors changed factory layout and productivity.",
  },
  {
    label: "Paul A. David, The Dynamo and the Computer",
    href: "https://www.jstor.org/stable/2006600",
    detail: "Why general technologies can require long periods of organizational adaptation.",
  },
  {
    label: "Bresnahan and Trajtenberg, General Purpose Technologies",
    href: "https://www.nber.org/papers/w4148",
    detail: "How enabling technologies create opportunities for complementary innovation.",
  },
  {
    label: "Brynjolfsson and Hitt, Beyond Computation",
    href: "https://www.aeaweb.org/articles?id=10.1257/jep.14.4.23",
    detail: "Why technology returns depend on organizational change.",
  },
  {
    label: "Luis Garicano, Hierarchies and the Organization of Knowledge",
    href: "https://www.journals.uchicago.edu/doi/abs/10.1086/317671",
    detail: "How firms allocate common problems and scarce expertise.",
  },
  {
    label: "Brynjolfsson, Rock, and Syverson, The Productivity J-Curve",
    href: "https://www.nber.org/papers/w25148",
    detail: "Why process, skill, and other intangible investments can precede visible gains.",
  },
];

const faqs = [
  {
    question: "Should a PI firm redesign a workflow before buying an AI tool?",
    answer:
      "The firm should first understand the outcome, current handoffs, authoritative data, exceptions, and human decisions. It can then evaluate a tool against the redesigned workflow instead of allowing the vendor's product boundaries to define how the firm operates.",
  },
  {
    question: "Does workflow redesign mean replacing staff with AI?",
    answer:
      "No. The purpose is to allocate work more intelligently. AI can prepare, monitor, organize, and handle approved routine steps. People should retain empathy, legal judgment, exception handling, supervision, and accountability.",
  },
  {
    question: "What is a good first workflow for a personal injury firm?",
    answer:
      "Intake is often a strong first candidate because it has a clear trigger, visible queues, measurable response times, and direct revenue impact. Start with one bounded path such as after-hours inquiry acknowledgment, structured lead creation, and escalation to a human closer.",
  },
  {
    question: "How should a firm measure whether the redesign works?",
    answer:
      "Measure completed outcomes rather than AI activity. Depending on the workflow, useful measures include time to first response, contact rate, signed-case conversion, cycle time, exception rate, staff corrections, client satisfaction, and cost per completed matter stage.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "AI workflow redesign for personal injury firms",
    "personal injury law firm AI",
    "PI firm workflow automation",
    "legal AI operating model",
    "AI intake workflow",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-09-27",
    modifiedTime: "2026-09-27",
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
      datePublished: "2026-09-27",
      dateModified: "2026-09-27",
      author: { "@type": "Person", name: post.author },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: pageUrl,
      articleSection: "AI Operations",
      keywords:
        "AI workflow redesign for personal injury firms, PI firm workflow automation, legal AI operating model",
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
      <ClickBeacon page="blog-redesign-pi-workflows-around-ai" />
      <JsonLd data={structuredData} />

      <header className="border-b border-primary/20 bg-[#050807]">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24">
          <div className="flex items-center gap-3 text-xs text-foreground/65">
            <Link href="/blog" className="transition hover:text-primary">
              Blog
            </Link>
            <span aria-hidden="true" className="text-primary/50">/</span>
            <span>AI Operations</span>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase text-[#00ff41]">
            A first-principles guide for PI firm founders
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.7rem]">
            How Personal Injury Firms Should Redesign Workflows Around AI
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80 sm:text-xl">
            Electricity transformed factories only after owners stopped treating it as a replacement for steam. AI will transform legal work the same way: when firms redesign tasks, decisions, and handoffs around what the technology makes possible.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/60">
            <span>{post.author}</span><span aria-hidden="true">/</span>
            <time dateTime="2026-09-27">{post.date}</time><span aria-hidden="true">/</span>
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
              Work is organized around constraints. When AI changes a constraint, the firm should reconsider the workflow built around it. The real question is not, &ldquo;Where can we add AI?&rdquo; It is, &ldquo;How should this work now be done?&rdquo;
            </p>
          </div>

          <div className="mt-10 overflow-x-auto border-y border-white/10">
            <div className="grid min-w-[720px] grid-cols-[repeat(5,minmax(0,1fr))]">
              {["Changed capability", "Removed dependency", "New task bundle", "Required complements", "New bottleneck"].map((label, index) => (
                <div key={label} className="relative border-r border-white/10 px-4 py-5 last:border-r-0">
                  <span className="text-xs font-semibold text-primary">0{index + 1}</span>
                  <p className="mt-2 text-sm font-medium leading-5 text-white">{label}</p>
                  {index < 4 ? <ArrowRight aria-hidden="true" className="absolute -right-2.5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 bg-black text-primary" /> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
          <section className="space-y-6">
            <p className="text-xl leading-9 text-foreground/95">
              Most personal injury workflows were designed around scarce human attention. Someone had to answer the phone, read the email, extract the facts, enter the data, decide who should see it, prepare the document, and remember the next follow-up.
            </p>
            <p>
              Software digitized much of that work, but often preserved the same queues and handoffs. AI changes the cost of reading, classifying, extracting, drafting, and monitoring. If the firm simply places an AI tool on top of the old process, it may perform the same fragmented work faster. The larger opportunity is to redesign the process.
            </p>
            <p>
              This distinction matters for small and midsize PI firms. They do not have spare people to supervise a collection of disconnected tools. A useful AI workflow must reduce coordination, preserve human judgment, and make ownership clearer.
            </p>
          </section>

          <section id="electricity-lesson" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">The lesson from electricity</h2>
            <p>
              Early factories distributed power from a central steam engine through shafts and belts. Machines had to be placed where that mechanical system could reach them. When electricity arrived, many owners initially replaced the steam engine with one electric motor and left the factory floor largely unchanged.
            </p>
            <p>
              The deeper gains came later. Individual motors allowed machines to be arranged around the flow of production rather than the transmission of power. Work could move through a better sequence. Sections could operate more independently. Factory design changed because the old physical dependency had disappeared.
            </p>
            <p>
              Economic historians use this story to explain why general technologies can take time to raise productivity. The invention is only the beginning. Organizations must also invent new processes, skills, roles, and management systems around it.
            </p>
            <div className="border-l-2 border-primary pl-5 sm:pl-7">
              <p className="text-xl leading-9 text-foreground/95">
                For a PI firm, AI is not merely a faster engine for the existing workflow. It can remove some of the shafts and belts that determined how legal work had to move.
              </p>
            </div>
          </section>

          <section id="design-principles" className="mt-16 scroll-mt-28">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Seven principles for redesigning work</h2>
            <p className="mt-5 max-w-3xl">
              These principles come from the economics of innovation, organizational design, and the history of electrification. The PI examples are practical applications of those ideas, not claims that every firm should adopt the same structure.
            </p>

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {principles.map((principle) => (
                <section key={principle.number} className="grid gap-5 py-9 sm:grid-cols-[5rem_1fr] sm:gap-8">
                  <div>
                    <span className="text-3xl font-semibold text-primary">{principle.number}</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary/75">{principle.theory}</p>
                    <h3 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">{principle.title}</h3>
                    <p className="mt-5">{principle.body}</p>
                    <div className="mt-5 grid gap-4 border-l border-white/15 pl-5 sm:grid-cols-2 sm:gap-7">
                      <div>
                        <p className="text-xs font-semibold uppercase text-foreground/50">PI example</p>
                        <p className="mt-2 text-sm leading-6 text-foreground/75">{principle.example}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase text-primary/70">Design question</p>
                        <p className="mt-2 text-sm leading-6 text-foreground/90">{principle.question}</p>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section id="intake-example" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">What this looks like in intake</h2>
            <p>
              Intake is a useful example because the trigger is clear, speed is measurable, and human trust matters. A redesign does not hand the relationship to a chatbot. It removes the waiting, retyping, searching, and remembering that delay the relationship.
            </p>
            <div className="overflow-x-auto border-y border-white/10">
              <table className="w-full min-w-[840px] border-collapse text-left text-sm leading-6">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-4 font-semibold text-primary">Moment</th>
                    <th className="px-4 py-4 font-semibold text-foreground/65">Old workflow</th>
                    <th className="px-4 py-4 font-semibold text-white">Redesigned workflow</th>
                    <th className="px-4 py-4 font-semibold text-primary">Human ownership</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {intakeRows.map((row) => (
                    <tr key={row.moment} className="align-top">
                      <th scope="row" className="px-4 py-5 font-semibold text-white">{row.moment}</th>
                      <td className="px-4 py-5 text-foreground/60">{row.old}</td>
                      <td className="px-4 py-5 text-foreground/90">{row.redesigned}</td>
                      <td className="px-4 py-5 text-foreground/75">{row.owner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              The same logic can be applied to records collection, treatment monitoring, client updates, demand preparation, lien work, and case closure. Start with the constraint, not the feature list.
            </p>
          </section>

          <section id="redesign-method" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">A simple method for one workflow</h2>
            <p>
              Choose a single workflow with a visible queue and a measurable outcome. Watch real examples, including exceptions. Then answer these questions in order.
            </p>
            <ol className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {redesignQuestions.map((item, index) => (
                <li key={item.title} className="grid gap-3 py-6 sm:grid-cols-[3rem_13rem_1fr] sm:gap-5">
                  <span className="text-lg font-semibold text-primary">0{index + 1}</span>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-6 text-foreground/70">{item.body}</p>
                </li>
              ))}
            </ol>
            <p>
              Put the proposed workflow into production on a narrow path. Define who reviews it, what triggers escalation, how corrections are recorded, and what measure would justify expansion. This turns workflow design into a learning loop rather than a one-time automation project.
            </p>
            <p>
              For a concrete production example, see how we built a <Link href="/blog/ai-learning-loop-precise-imaging" className="text-primary underline decoration-primary/35 underline-offset-4">human-feedback and eval loop for Precise Imaging</Link>.
            </p>
          </section>

          <section id="governance-boundary" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Governance belongs inside the workflow</h2>
            <p>
              Governance is not a document added after the design. It is the set of boundaries that makes the design dependable: what information the system may use, what it may do, what it must never do, what requires review, and who is accountable.
            </p>
            <div className="grid gap-5 border-y border-white/10 py-7 sm:grid-cols-2">
              <div className="flex gap-3">
                <GitBranch aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-white">AI prepares and routes</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/65">Reading, extraction, organization, approved messages, monitoring, and exception detection can be bounded and tested.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <ShieldCheck aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-white">People judge and remain accountable</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/65">Legal advice, case acceptance, strategic decisions, sensitive client conversations, and material exceptions stay with authorized people.</p>
                </div>
              </div>
            </div>
            <p>
              The boundary should be visible in the process itself. A label saying &ldquo;human in the loop&rdquo; is not enough if nobody owns the review queue or knows what must be checked. Our <Link href="/blog/ai-governance-roi-small-pi-firms" className="text-primary underline decoration-primary/35 underline-offset-4">information governance guide</Link> explains the foundation in more detail.
            </p>
          </section>

          <section id="research-basis" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">The research behind the framework</h2>
            <p>
              The vocabulary can sound academic, but the finding is practical: technology and organization are complements. Firms capture more value when they change the work, skills, and decision structure around the tool.
            </p>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {researchLinks.map((source) => (
                <li key={source.href} className="py-5">
                  <a href={source.href} target="_blank" rel="noreferrer" className="group inline-flex items-start gap-3 text-white transition hover:text-primary">
                    <ArrowRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      <span className="font-semibold underline decoration-primary/30 underline-offset-4 group-hover:decoration-primary">{source.label}</span>
                      <span className="mt-1 block text-sm leading-6 text-foreground/60">{source.detail}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section id="faq" className="mt-16 scroll-mt-28">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Common questions</h2>
            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {faqs.map((faq) => (
                <section key={faq.question} className="py-7">
                  <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                  <p className="mt-3">{faq.answer}</p>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-16 border-y border-primary/30 py-9">
            <p className="text-xs font-semibold uppercase text-primary/80">The operating principle</p>
            <p className="mt-4 text-2xl font-semibold leading-10 text-white sm:text-3xl">
              Do not automate the old constraint. Remove it, rebundle the work, and make the next bottleneck visible.
            </p>
          </section>
        </article>

        <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6">
          <div className="border border-primary/30 bg-[#07100b] px-6 py-8 sm:px-9 sm:py-10">
            <div className="flex items-start gap-4">
              <CheckCircle2 aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase text-primary/80">Start with one workflow</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">Map the constraint before choosing the tool</h2>
                <p className="mt-4 max-w-2xl leading-7 text-foreground/70">
                  Possible Minds helps PI firms redesign intake and case operations around AI, with explicit human ownership, system integration, and measurable outcomes.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/consult" className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-black transition hover:bg-primary/85">
                    Discuss a workflow <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                  <Link href="/ai-readiness-assessment" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-primary/60 hover:text-primary">
                    Take the intake diagnostic
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs leading-5 text-foreground/45">
            This article discusses operating design and does not provide legal, ethics, privacy, or cybersecurity advice. Firms should evaluate their obligations, vendors, and data practices with qualified counsel and security professionals.
          </p>
        </section>
      </main>
    </div>
  );
}
