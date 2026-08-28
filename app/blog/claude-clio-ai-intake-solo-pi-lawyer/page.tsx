import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ContactRound,
  Files,
  Mic,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "claude-clio-ai-intake-solo-pi-lawyer";
const pageTitle =
  "How a Solo PI Lawyer Used Claude and Clio to Cut Intake Work by Roughly 90%";
const metaTitle = `Claude and Clio for PI Intake | ${SITE_NAME}`;
const pageDescription =
  "See how a solo PI lawyer uses Claude and Clio to turn dictated intake facts into matters, documents, tasks, and review-ready work.";
const pageUrl = `${SITE_URL}/blog/${slug}`;

const contents = [
  { id: "what-the-workflow-does", label: "What the workflow does" },
  { id: "how-it-was-built", label: "How Claude and Clio work together" },
  { id: "examples-not-prompts", label: "Why examples matter more than prompts" },
  { id: "human-review", label: "What still requires human review" },
  { id: "adoption-mindset", label: "The mindset that made adoption work" },
  { id: "small-firm-opportunity", label: "Why this matters for small firms" },
];

const faqs = [
  {
    question: "Can Claude create matters and documents directly in Clio?",
    answer:
      "Claude can work with Clio through an authorized API integration that has appropriate permissions. The integration should be narrowly scoped, tested, monitored, and designed so consequential actions remain reviewable.",
  },
  {
    question: "What PI documents can an AI-assisted Clio workflow prepare?",
    answer:
      "The demonstrated workflow prepared a retainer agreement, New York no-fault documents, HIPAA authorizations, carrier letters, and a summons and complaint. The exact document set depends on the firm's jurisdiction, templates, and review rules.",
  },
  {
    question: "Does an AI intake workflow replace the lawyer or paralegal?",
    answer:
      "No. It can structure information, populate fields, assemble documents, and create tasks. People still verify facts, resolve exceptions, handle sensitive conversations, exercise legal judgment, and approve consequential work.",
  },
  {
    question: "How many examples should a law firm give Claude?",
    answer:
      "A few representative examples may be enough for standardized documents. Variable documents need examples covering the firm's major factual and procedural patterns, followed by continued correction and testing.",
  },
  {
    question: "Can lawyers put confidential client information into any Claude account?",
    answer:
      "No. A firm must evaluate the specific product, contract, data-retention terms, security controls, and applicable confidentiality or privacy obligations before submitting client information. Access to a consumer AI product is not the same as approval for client data.",
  },
];

const workflow = [
  { label: "Dictate", detail: "Intake facts", icon: Mic },
  { label: "Structure", detail: "Contact + facts", icon: ContactRound },
  { label: "Create", detail: "Clio matter", icon: BriefcaseBusiness },
  { label: "Prepare", detail: "Documents + tasks", icon: Files },
  { label: "Review", detail: "Lawyer approval", icon: UserCheck },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "Claude Clio integration",
    "Claude for personal injury lawyers",
    "Clio AI intake",
    "AI intake for personal injury law firms",
    "law firm workflow automation",
    "solo lawyer AI",
    "personal injury document automation",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-08-28",
    modifiedTime: "2026-08-28",
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
      datePublished: "2026-08-28",
      dateModified: "2026-08-28",
      author: { "@type": "Person", name: post.author },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: pageUrl,
      articleSection: "AI Operations",
      keywords:
        "Claude, Clio, personal injury intake, solo law firm, legal AI, workflow automation",
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
      <ClickBeacon page="blog-claude-clio-ai-intake" />
      <JsonLd data={structuredData} />

      <header className="border-b border-primary/20 bg-[#050807]">
        <div className="mx-auto max-w-4xl px-4 pt-20 sm:px-6 sm:pt-24">
          <div className="flex items-center gap-3 text-xs text-foreground/65">
            <Link href="/blog" className="transition hover:text-primary">Blog</Link>
            <span aria-hidden="true" className="text-primary/50">/</span>
            <span>AI Operations</span>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase text-[#00ff41]">
            Inside a working solo-firm system
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.75rem]">
            How a Solo PI Lawyer Used Claude and Clio to Cut Intake Work by Roughly 90%
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80 sm:text-xl">
            Dictated facts become a structured matter, document packet, and next-step task list. The lawyer remains the reviewer.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/60">
            <span>{post.author}</span><span aria-hidden="true">/</span>
            <time dateTime="2026-08-28">{post.date}</time><span aria-hidden="true">/</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="border-y border-white/10 py-6">
            <ol className="grid gap-0 sm:grid-cols-5">
              {workflow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li key={step.label} className="relative flex min-h-24 items-center gap-4 border-b border-white/10 py-4 last:border-b-0 sm:block sm:border-b-0 sm:border-r sm:px-5 sm:py-2 sm:last:border-r-0">
                    <div className="flex size-11 shrink-0 items-center justify-center border border-primary/35 bg-primary/10 text-[#00ff41]">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <div className="sm:mt-4">
                      <p className="text-sm font-semibold text-white">{index + 1}. {step.label}</p>
                      <p className="mt-1 text-xs text-foreground/55">{step.detail}</p>
                    </div>
                    {index < workflow.length - 1 ? (
                      <ArrowRight className="absolute right-[-11px] top-5 z-10 hidden size-5 bg-[#050807] text-primary/60 sm:block" aria-hidden="true" />
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
        <div className="border-y border-primary/30 py-8">
          <p className="text-xs font-semibold uppercase text-primary/80">In plain English</p>
          <p className="mt-4 text-xl leading-9 text-foreground/95 sm:text-2xl sm:leading-10">
            A solo PI lawyer connected Claude to Clio, encoded his intake process as reusable instructions, and supplied examples of the firm&apos;s documents. He estimates that a complete intake now takes roughly one-tenth of his former time. The result is not autonomous lawyering: AI prepares and organizes the work, while the lawyer and paralegal verify it.
          </p>
        </div>
      </section>

      <BlogTableOfContents items={contents} faqHref="#faq" />

      <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
        <section className="space-y-6">
          <p className="text-xl leading-9 text-foreground/95">
            A new personal injury client calls. The lawyer listens, asks questions, takes notes, creates the contact and matter, enters the accident and insurance details, prepares the retainer package, sends representation letters, and assigns the next tasks.
          </p>
          <p>None of this is intellectually difficult. Together, however, it consumes a meaningful part of the day.</p>
          <p>
            In a recent workflow demonstration, New York solo personal injury lawyer Dan Sinsky showed how he uses Claude, firm-specific skills, and Clio to compress that sequence. His estimate that intake time fell by roughly 90% is self-reported, not an independently measured benchmark. What makes the example valuable is the system behind the number.
          </p>
          <p>
            He did not ask a chatbot to &ldquo;handle intake.&rdquo; He described the firm&apos;s process, connected the tools, supplied examples, and kept people responsible for the final work.
          </p>
        </section>

        <section id="what-the-workflow-does" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">What the AI-assisted workflow does</h2>
          <p>
            Sinsky begins by dictating what he learned from the prospective client: contact information, accident facts, insurance details, injuries, medical providers, and other relevant information.
          </p>
          <p>Claude structures those facts and asks follow-up questions when required information appears to be missing. With the authorized Clio integration, the workflow can then:</p>
          <ul className="space-y-3 border-l border-primary/40 pl-6 text-foreground/90">
            <li>Create the contact and matter in Clio.</li>
            <li>Populate the firm&apos;s preferred matter fields.</li>
            <li>Generate a personal injury retainer agreement.</li>
            <li>Prepare New York no-fault documents, including the NF-2.</li>
            <li>Create HIPAA authorizations and carrier correspondence.</li>
            <li>Draft a summons and complaint when the matter moves into litigation.</li>
            <li>Create filing, service, and follow-up tasks.</li>
            <li>Upload generated documents to the appropriate Clio matter.</li>
          </ul>
          <p>
            The same operating layer can support a daily dashboard of matters by stage, unfinished tasks, outstanding records, and approaching limitation dates. For a solo lawyer handling more than 100 active matters with one paralegal, the gain is larger than faster drafting. It is less time spent carrying the same facts between a conversation, a form, a document, and a case-management system.
          </p>
        </section>

        <section id="how-it-was-built" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">How Claude and Clio work together</h2>
          <p>Clio is the system of record. Claude is the reasoning and workflow layer. The firm&apos;s instructions, templates, and review standards make the combination specific enough to be useful.</p>
          <p>
            The firm first defined what a completed motor-vehicle intake should contain: the facts to collect, the Clio fields to populate, the documents to create, and the next tasks to assign. That process became a reusable Claude skill, effectively a detailed operating procedure the model reads before beginning the work.
          </p>
          <div className="border-y border-white/10 py-2">
            <SystemRow label="Claude" text="Interprets the intake, finds missing information, applies instructions, and prepares outputs." />
            <SystemRow label="Clio" text="Stores the contact, matter, fields, documents, and tasks as the firm's operational record." />
            <SystemRow label="The firm" text="Supplies examples, permissions, exception rules, and the human approval boundary." />
          </div>
          <p>
            This is the difference between a prompt and a working system. A draft in a chat window may save a few minutes. A governed workflow that moves verified information into the right matter can reduce repeated data entry, document assembly, file organization, and task creation.
          </p>
          <p>
            It is also why the{` `}<Link href="/blog/ai-transformation-one-workflow-at-a-time" className="text-primary underline decoration-primary/35 underline-offset-4">workflow is the right unit of AI transformation</Link>. The model matters, but the operating path determines whether the firm gets durable value.
          </p>
        </section>

        <section id="examples-not-prompts" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Why examples matter more than a clever prompt</h2>
          <p>Sinsky gave Claude examples of documents the firm had already prepared. For relatively standardized work, such as retainers and representation letters, a few representative examples established the preferred structure.</p>
          <p>More variable documents required examples for different factual patterns. A premises-liability complaint may differ depending on whether the incident involves a sidewalk, municipality, private property owner, falling object, or dangerous interior condition.</p>
          <p>His working rule was roughly three examples for each meaningful variation, followed by more examples when the system encountered a new pattern. This was not one-shot configuration. An early version repeated the firm&apos;s letterhead on every page. Correcting that created a spacing problem, which required another revision.</p>
          <p>That iteration is not a side issue. It is how the firm turns its own work product into a reusable operating asset. The system improves because the lawyer can say what is wrong, show what good looks like, and encode the correction for the next matter.</p>
        </section>

        <section id="human-review" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">What still requires human review</h2>
          <p>The demonstration also showed why the workflow should not run without supervision. Claude missed the accident time in one field and failed to populate a date of birth. Some insurance information remained blank. The lawyer had to inspect the matter and correct the omissions.</p>
          <div className="flex gap-4 border-y border-amber-400/25 bg-amber-400/[0.04] py-6">
            <ShieldCheck className="mt-1 size-6 shrink-0 text-amber-300" aria-hidden="true" />
            <p className="text-foreground/90">AI can prepare the work. The lawyer remains responsible for what is sent, signed, relied upon, or filed.</p>
          </div>
          <p>Sinsky described reviewing an AI-assisted legal argument that captured a case&apos;s general meaning but placed words inside quotation marks that the court had not stated verbatim. The proposition was directionally similar. The quotation was still wrong.</p>
          <p>Human review should verify:</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {["Names, dates, addresses, and claim numbers", "Matter fields created in Clio", "Insurance and medical information", "Every citation and quoted passage", "Jurisdiction-specific allegations", "Filing requirements and deadlines", "Documents before sending or filing", "Exceptions the workflow could not resolve"].map((item) => (
              <li key={item} className="flex gap-3 border-b border-white/10 pb-3 text-foreground/90">
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span>
              </li>
            ))}
          </ul>
          <p>Confidentiality requires its own design. A firm must evaluate the specific Claude product, contract, data-retention terms, security controls, permissions, and applicable professional or privacy obligations before client information enters the system. Consumer access to an AI tool is not, by itself, authorization to upload confidential or regulated data.</p>
          <p>Firms should establish these controls as part of{` `}<Link href="/blog/derisk-ai-adoption-legal-practice" className="text-primary underline decoration-primary/35 underline-offset-4">derisking AI adoption</Link>, not after a workflow is already handling live matters.</p>
        </section>

        <section id="adoption-mindset" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">The mindset that made adoption work</h2>
          <p>The most useful part of Sinsky&apos;s example may be that he did not consider himself technically sophisticated. He looked for help connecting the tools, then stayed involved by reviewing outputs and explaining what needed to change.</p>
          <h3 className="pt-2 text-2xl font-semibold text-white">Start with one workflow</h3>
          <p>Do not begin with &ldquo;transform the firm with AI.&rdquo; Begin with motor-vehicle intake, a representation package, a medical chronology, or another recurring process with clear inputs and outputs.</p>
          <h3 className="pt-2 text-2xl font-semibold text-white">Treat workflow knowledge as the valuable input</h3>
          <p>Claude does not inherently know how your firm prefers to open a matter, organize a complaint, assign tasks, or escalate an unusual case. Your templates, field definitions, examples, and review standards supply that knowledge.</p>
          <h3 className="pt-2 text-2xl font-semibold text-white">Expect the first version to be imperfect</h3>
          <p>A repeated letterhead or omitted field does not necessarily mean the idea failed. It reveals an incomplete instruction, mapping, or validation rule. Correct it, test again, and retain the lesson.</p>
          <h3 className="pt-2 text-2xl font-semibold text-white">Treat AI like a fast junior associate</h3>
          <p>The comparison used in the conversation was a young associate who works quickly but still needs instruction and review. That is healthier than treating AI as either an infallible authority or a useless novelty.</p>
          <h3 className="pt-2 text-2xl font-semibold text-white">Measure the whole workflow</h3>
          <p>Drafting speed is only one part of the value. Measure how much time the firm stops spending on repeated entry, assembly, filing preparation, task creation, corrections, and switching between systems.</p>
        </section>

        <section id="small-firm-opportunity" className="mt-16 scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Why this matters for small firms</h2>
          <p>Large firms can distribute administrative work across specialized teams. A solo or small firm cannot. Saving several hours does not merely improve an abstract efficiency metric. It gives the lawyer more capacity to speak with clients, evaluate cases, negotiate, prepare for litigation, or accept additional matters.</p>
          <p>The goal is not to remove the lawyer or paralegal. It is to let Claude prepare and organize the work, let Clio preserve the operational record, and let people spend their time on judgment, relationships, and advocacy.</p>
          <p className="text-xl leading-9 text-foreground/95">The strongest AI workflow is not the one that operates without lawyers. It is the one that gives good lawyers more time to be lawyers.</p>
        </section>

        <section id="faq" className="mt-16 scroll-mt-28 space-y-8">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Frequently asked questions</h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-7"><h3 className="text-xl font-semibold text-white">{faq.question}</h3><p className="mt-3">{faq.answer}</p></div>
            ))}
          </div>
        </section>

        <section className="mt-16 border-y border-primary/30 py-10">
          <p className="text-xs font-semibold uppercase text-primary/80">Build around the way your firm actually works</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">Choose one workflow worth improving.</h2>
          <p className="mt-5 max-w-2xl">Possible Minds helps PI firm owners map a workflow, decide what can safely be delegated to AI, connect the existing systems, and keep human judgment at the consequential decisions.</p>
          <Link href="/build-partnership" className="mt-7 inline-flex items-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#00ff41]/90">
            Discuss a firm-owned workflow <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </section>
      </article>
    </div>
  );
}

function SystemRow({ label, text }: { label: string; text: string }) {
  return (
    <div className="grid gap-2 border-b border-white/10 py-5 last:border-b-0 sm:grid-cols-[8rem_1fr] sm:gap-6">
      <p className="font-semibold text-[#00ff41]">{label}</p><p>{text}</p>
    </div>
  );
}
