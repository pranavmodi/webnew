import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  FileCheck2,
  FolderLock,
  PlayCircle,
  Settings2,
  ShieldCheck,
} from "lucide-react";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

const slug = "how-to-set-up-claude-for-legal-work";
const pageTitle =
  "A Trial Lawyer's First Claude Session: How to Set Up Claude for Legal Work";
const metaTitle = "How to Set Up Claude for Legal Work";
const pageDescription =
  "Install and configure Claude for legal work with clear data boundaries, matter separation, legal instructions, and lawyer review.";
const pageUrl = `${SITE_URL}/blog/${slug}`;
const heroImage = `${SITE_URL}/images/blog/claude-legal-setup/first-claude-session.webp`;

const sources = {
  video: "https://www.youtube.com/watch?v=B04_OEqqN3I",
  channel: "https://www.youtube.com/@MasaiBrown-Andrews",
  install:
    "https://support.claude.com/en/articles/10065433-install-claude-desktop",
  legalWork:
    "https://support.claude.com/en/articles/15707726-using-claude-for-legal-work-privilege-confidentiality-and-how-to-think-about-configuration",
  personalization:
    "https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features",
  projects:
    "https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects",
  coworkSafety:
    "https://support.claude.com/en/articles/13364135-use-claude-cowork-safely",
  baa:
    "https://support.claude.com/en/articles/8114513-business-associate-agreements-baa-for-commercial-customers",
  aba512:
    "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf",
};

const contents = [
  { id: "what-the-video-shows", label: "What the first session shows" },
  { id: "choose-data-boundary", label: "Choose the data boundary first" },
  { id: "install-claude", label: "Install Claude Desktop" },
  { id: "legal-instructions", label: "Add legal instructions" },
  { id: "matter-workspace", label: "Create a matter workspace" },
  { id: "first-task", label: "Test one representative task" },
  { id: "lawyer-review", label: "Apply lawyer review" },
  { id: "faq", label: "Frequently asked questions" },
];

const faqs = [
  {
    question: "Can lawyers use Claude for legal work?",
    answer:
      "Yes, but the firm must select and configure the service with reasonable care, protect client information, supervise its use, and verify consequential output. The appropriate configuration depends on the matter, jurisdiction, client requirements, and data involved.",
  },
  {
    question: "Is a personal Claude Max account enough for a law firm?",
    answer:
      "It may be suitable for approved work with public, synthetic, or properly de-identified material. A firm handling confidential client information should separately evaluate commercial terms, administrator controls, retention, access, and its own professional obligations.",
  },
  {
    question: "Can a personal injury firm upload medical records to Claude Cowork?",
    answer:
      "Not as a HIPAA-covered Cowork workflow under Anthropic's current documentation. Anthropic states that Cowork is not covered by its BAA. Firms should use an approved HIPAA-ready service and configuration before processing PHI.",
  },
  {
    question: "Can a Claude-generated legal draft be filed without review?",
    answer:
      "No. A lawyer should verify the facts, record citations, quotations, authorities, procedural requirements, deadlines, and strategic choices before a draft is filed or sent.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "how to set up Claude for legal work",
    "Claude for lawyers",
    "Claude legal assistant setup",
    "Claude for personal injury law firms",
    "legal AI setup guide",
    "Claude Cowork legal",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-08-26",
    modifiedTime: "2026-08-26",
    authors: ["Pranav Modi"],
    images: [
      {
        url: heroImage,
        width: 1280,
        height: 720,
        alt: "Trial lawyer Yaya Ford and Masai Brown-Andrews in a first Claude setup session",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [heroImage],
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
      image: heroImage,
      datePublished: "2026-08-26",
      dateModified: "2026-08-26",
      author: { "@type": "Person", name: post.author },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: pageUrl,
      articleSection: "AI Governance",
      keywords:
        "Claude for lawyers, legal AI setup, Claude Cowork legal, personal injury law firm AI",
      citation: Object.values(sources),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
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
    <div className="-mt-4 bg-black pb-24">
      <ClickBeacon page="blog-how-to-set-up-claude-for-legal-work" />
      <JsonLd data={structuredData} />

      <header className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
          <div className="flex items-center gap-3 text-xs text-foreground/65">
            <Link href="/blog" className="transition hover:text-primary">
              Blog
            </Link>
            <span aria-hidden="true" className="text-primary/50">/</span>
            <span>AI Governance</span>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase text-primary">
            A practical setup guide
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            A Trial Lawyer&apos;s First Claude Session
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80 sm:text-xl">
            Installing Claude takes minutes. Setting it up for legal work means
            deciding what it may see, how matters stay separate, and what a lawyer
            must verify before the first client document is uploaded.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/60">
            <span>{post.author}</span>
            <span aria-hidden="true">/</span>
            <time dateTime="2026-08-26">{post.date}</time>
            <span aria-hidden="true">/</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 sm:pt-14">
          <figure>
            <a
              href={sources.video}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-video overflow-hidden rounded-md border border-white/15"
              aria-label="Watch A Trial Attorney's First Claude Session on YouTube"
            >
              <Image
                src="/images/blog/claude-legal-setup/first-claude-session.webp"
                alt="Trial lawyer Yaya Ford and Masai Brown-Andrews in a first Claude setup session"
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover transition duration-300 group-hover:scale-[1.01]"
              />
              <span className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-md bg-black/85 px-4 py-2 text-sm font-semibold text-white">
                <PlayCircle className="h-5 w-5 text-primary" />
                Watch the source video
              </span>
            </a>
            <figcaption className="mt-3 text-xs leading-5 text-foreground/50">
              Video and frames: Masai Brown-Andrews, “A Trial Attorney&apos;s First
              Claude Session: Full Trial Prep,” YouTube.
            </figcaption>
          </figure>
        </section>

        <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-14">
          <div className="border-y border-primary/30 py-8">
            <p className="text-xs font-semibold uppercase text-primary/80">
              In plain English
            </p>
            <p className="mt-4 text-xl leading-9 text-foreground/95 sm:text-2xl sm:leading-10">
              Claude can help a lawyer digest an expert report, expose weak
              assumptions, and build a first cross-examination outline. But the
              useful setup is not “buy Max and upload the file.” It is a governed
              workspace with an approved data boundary, matter-specific context,
              narrow permissions, and lawyer review.
            </p>
          </div>
        </section>

        <BlogTableOfContents items={contents} />

        <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
          <section id="what-the-video-shows" className="scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              What the first session shows
            </h2>
            <p className="text-xl leading-9 text-foreground/95">
              Civil-rights trial lawyer Yaya Ford is preparing a wrongful-death
              police-shooting case. She has multiple experts, a jury trial to run,
              and a team to direct. The appeal of Claude becomes obvious quickly:
              it may give her back time for the parts of trial work that require
              her judgment.
            </p>
            <p>
              In the walkthrough,{` `}
              <a
                href={sources.channel}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline decoration-primary/35 underline-offset-4"
              >
                Masai Brown-Andrews
              </a>{` `}
              installs Claude Desktop, helps Ford write standing instructions,
              and tests the system against an expert report. Claude identifies
              possible contradictions, investigative gaps, credibility issues,
              and methodological weaknesses. It then organizes a
              cross-examination into chapters and separately examines the
              expert&apos;s qualifications for voir dire.
            </p>

            <figure className="mx-auto max-w-2xl py-4">
              <Image
                src="/images/blog/claude-legal-setup/first-session-frame.webp"
                alt="Masai Brown-Andrews and trial lawyer Yaya Ford during the Claude setup session"
                width={960}
                height={540}
                loading="eager"
                sizes="(min-width: 1024px) 896px, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-xs leading-5 text-foreground/50">
                Brown-Andrews and Ford work through her first Claude session.
                Frame from the source video.
              </figcaption>
            </figure>

            <p>
              Ford is appropriately cautious. She is interested in trial
              preparation, but wary of hallucinated cases and lawyers being
              sanctioned. That instinct is the right starting point. The model can
              accelerate the first pass; it cannot inherit the lawyer&apos;s duty to
              verify the result.
            </p>
          </section>

          <section id="choose-data-boundary" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Step 1: Choose the data boundary before the plan
            </h2>
            <p>
              The video chooses a personal Max subscription because it unlocks the
              desired features. A law firm has another question to answer first:
              what information will this account be allowed to process?
            </p>
            <div className="divide-y divide-white/10 border-y border-white/10">
              <GuideRow
                label="Public or synthetic material"
                text="Useful for learning the interface and testing prompts without exposing client information."
              />
              <GuideRow
                label="Confidential client information"
                text="Evaluate commercial terms, administrator controls, retention, access, sharing, and professional obligations before use."
              />
              <GuideRow
                label="Protected health information"
                text="Use only a service and configuration covered by an executed BAA and approved by the firm."
              />
            </div>
            <p>
              Anthropic says customer content under its commercial terms is not
              used to train models by default, and retention can be configured.
              Its{` `}
              <a
                href={sources.legalWork}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline decoration-primary/35 underline-offset-4"
              >
                legal-work guidance
              </a>{` `}
              recommends considering commercial terms, sensitivity, verification,
              and client-consent practices.
            </p>
            <div className="border-l-2 border-[#ff8a3d] bg-[#ff8a3d]/8 px-5 py-4 text-sm leading-7 text-foreground/85">
              <strong className="text-white">Important for PI firms:</strong>{` `}
              Anthropic currently says Claude Cowork is not covered by its BAA.
              Do not place medical records or other PHI in Cowork merely because
              the firm has a paid Claude account. Review Anthropic&apos;s current{` `}
              <a
                href={sources.baa}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline decoration-primary/35 underline-offset-4"
              >
                BAA coverage
              </a>{` `}
              before designing the workflow.
            </div>
          </section>

          <section id="install-claude" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Step 2: Install Claude Desktop
            </h2>
            <p>
              Once the firm has approved the account and data boundary, the
              installation itself is simple.
            </p>
            <ol className="divide-y divide-white/10 border-y border-white/10">
              <NumberedStep
                number="01"
                icon={Download}
                title="Download the official app"
                text="Use Anthropic's official download page and select Windows, macOS, or a supported Linux distribution."
              />
              <NumberedStep
                number="02"
                icon={Settings2}
                title="Open the installer"
                text="Complete the operating-system prompts. Windows users need administrator access for full Cowork support."
              />
              <NumberedStep
                number="03"
                icon={ShieldCheck}
                title="Sign in with the approved work account"
                text="Use the firm's designated email and organization rather than creating an unmanaged account for client work."
              />
            </ol>
            <p className="text-sm text-foreground/65">
              Current system requirements and installation steps are in
              Anthropic&apos;s{` `}
              <a
                href={sources.install}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline decoration-primary/35 underline-offset-4"
              >
                Claude Desktop documentation
              </a>.
            </p>
          </section>

          <section id="legal-instructions" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Step 3: Add account-wide legal instructions
            </h2>
            <p>
              In Claude, open the account menu, choose <strong className="text-white">Settings</strong>,
              and find <strong className="text-white">Instructions for Claude</strong>.
              These instructions apply broadly, so keep client names, case facts,
              and strategy out of them. Put matter-specific context inside the
              relevant private project.
            </p>
            <div className="overflow-hidden rounded-md border border-white/15 bg-[#101010]">
              <div className="border-b border-white/10 px-5 py-3 text-xs font-semibold uppercase text-primary/80">
                Starter instructions
              </div>
              <pre className="overflow-x-auto whitespace-pre-wrap p-5 font-mono text-sm leading-7 text-foreground/80">{`You assist a licensed lawyer. Treat every output as a draft for lawyer review.

Never invent facts, quotations, record citations, legal authorities, deadlines, or procedural requirements.

Separate: (1) facts supported by supplied material, (2) reasonable inferences, (3) open questions, and (4) items requiring independent verification.

When possible, cite the supplied page, paragraph, exhibit, or section. Identify contrary evidence and the strongest opposing argument.

Do not say that legal authority has been verified unless the user confirms verification in the firm's approved research system.`}</pre>
            </div>
            <p>
              Anthropic distinguishes account-wide instructions from project
              instructions in its{` `}
              <a
                href={sources.personalization}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline decoration-primary/35 underline-offset-4"
              >
                personalization documentation
              </a>.
            </p>
          </section>

          <section id="matter-workspace" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Step 4: Create one private workspace per matter
            </h2>
            <p>
              A long, general-purpose chat is a poor matter file. Create a private
              project using the firm&apos;s approved matter identifier. Restrict access
              to the assigned team, add project-specific instructions, and upload
              only the documents required for the task.
            </p>
            <div className="grid gap-0 border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
              <CompactPrinciple
                icon={FolderLock}
                title="Separate matters"
                text="Do not mix documents, memory, or instructions across clients."
              />
              <CompactPrinciple
                icon={ShieldCheck}
                title="Limit access"
                text="Keep the project private to the people assigned to the matter."
              />
              <CompactPrinciple
                icon={FileCheck2}
                title="Use copies"
                text="Work from a dedicated folder, not the firm's original document repository."
              />
            </div>
            <p>
              If Cowork is approved for the material involved, connect only a
              dedicated working folder. Anthropic&apos;s{` `}
              <a
                href={sources.coworkSafety}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline decoration-primary/35 underline-offset-4"
              >
                Cowork safety guidance
              </a>{` `}
              recommends selective file access, backups, and oversight of
              consequential actions.
            </p>
          </section>

          <section id="first-task" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Step 5: Test one representative task
            </h2>
            <p>
              Start with a public, synthetic, or otherwise approved document that
              resembles the work the firm wants to improve. The expert-report task
              in Ford&apos;s session is a useful test because its output can be checked
              directly against the source.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 text-xl leading-9 text-foreground/95">
              Ask for a neutral summary, a page-linked opinion table, assumptions,
              omitted material, internal inconsistencies, and a chapter-based
              cross-examination outline. Require a separate list of every claim
              that still needs verification.
            </blockquote>
            <figure className="mx-auto max-w-2xl py-4">
              <Image
                src="/images/blog/claude-legal-setup/yaya-ford-frame.webp"
                alt="Trial lawyer Yaya Ford discussing how Claude could support trial preparation"
                width={960}
                height={540}
                loading="eager"
                sizes="(min-width: 1024px) 896px, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-xs leading-5 text-foreground/50">
                Ford describes the value she sees in faster expert-witness and
                trial preparation. Frame from the source video.
              </figcaption>
            </figure>
            <p>
              The test is not whether the output sounds sophisticated. It is
              whether the system preserves the record, exposes uncertainty, and
              saves reviewable time without creating a new source of hidden error.
            </p>
          </section>

          <section id="lawyer-review" className="mt-16 scroll-mt-28 space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Step 6: Make lawyer review part of the workflow
            </h2>
            <p>
              The generated document should return to a named lawyer before it is
              relied on, sent, or filed. That reviewer should check the record,
              quotations, citations, authorities, deadlines, local rules,
              contrary evidence, privilege, and strategic choices.
            </p>
            <p>
              The{` `}
              <a
                href={sources.aba512}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline decoration-primary/35 underline-offset-4"
              >
                ABA&apos;s Formal Opinion 512
              </a>{` `}
              applies familiar duties to generative AI: competence,
              confidentiality, communication, supervision, candor, and reasonable
              fees. The technology may change the first draft. It does not remove
              the lawyer from the chain of responsibility.
            </p>
            <div className="border-y border-primary/30 py-7 text-xl leading-9 text-white">
              The safe legal AI workflow is not prompt to product. It is source to
              draft to verification to lawyer judgment.
            </div>
          </section>

          <section id="faq" className="mt-16 scroll-mt-28">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <p className="mt-3 text-base leading-7 text-foreground/75">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 border-t border-primary/30 pt-10">
            <p className="text-xs font-semibold uppercase text-primary/80">
              Start with one governed workflow
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
              Set up legal AI around the work your firm actually does.
            </h2>
            <p className="mt-4 max-w-2xl">
              Possible Minds helps personal injury firms choose a safe first
              workflow, define the review boundary, and build narrow AI systems
              around the firm&apos;s own operating process.
            </p>
            <Link
              href="/consult"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Discuss your first workflow
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </article>
      </main>
    </div>
  );
}

function GuideRow({ label, text }: { label: string; text: string }) {
  return (
    <div className="grid gap-2 py-5 sm:grid-cols-[190px_1fr] sm:gap-6">
      <div className="font-semibold text-white">{label}</div>
      <div className="text-sm leading-7 text-foreground/70">{text}</div>
    </div>
  );
}

function NumberedStep({
  number,
  icon: Icon,
  title,
  text,
}: {
  number: string;
  icon: typeof Download;
  title: string;
  text: string;
}) {
  return (
    <li className="grid gap-4 py-6 sm:grid-cols-[64px_1fr] sm:items-start">
      <div className="flex h-12 w-12 items-center justify-center border border-primary/35 bg-primary/10 font-mono text-base font-semibold text-primary">
        {number}
      </div>
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
          <Icon className="h-5 w-5 text-primary" />
          {title}
        </h3>
        <p className="mt-2 text-base leading-7 text-foreground/70">{text}</p>
      </div>
    </li>
  );
}

function CompactPrinciple({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof FolderLock;
  title: string;
  text: string;
}) {
  return (
    <div className="py-6 sm:px-5 sm:first:pl-0 sm:last:pr-0">
      <Icon className="h-5 w-5 text-primary" />
      <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-foreground/65">{text}</p>
    </div>
  );
}
