import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ClickBeacon from "@/components/analytics/click-beacon";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "ai-pi-firm-judgment-workflows";
const pageTitle =
  "AI Will Make Intelligence Cheap. Your PI Firm's Judgment Is the Moat.";
const metaTitle = `AI Agents and PI Firm Workflows | ${SITE_NAME}`;
const pageDescription =
  "AI will become common. A PI firm's advantage is turning its judgment, workflows, and relationships into governed systems it controls.";
const pageUrl = `${SITE_URL}/blog/${slug}`;
const heroImage = `${SITE_URL}/images/blog/pi-firm-judgment-moat.webp`;

const sources = {
  bobLinkedIn: "https://www.linkedin.com/in/roberttsimon",
  bobBook: "https://justiceteamnetwork.com/trying-disc-injury-cases/",
  californiaGuidance:
    "https://www.calbar.ca.gov/Portals/0/documents/ethics/Generative-AI-Practical-Guidance.pdf",
  abaOpinion:
    "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf",
};

const contents = [
  { id: "owner-not-in-room", label: "When the owner is not in the room" },
  { id: "intelligence-infrastructure", label: "Intelligence is becoming infrastructure" },
  { id: "judgment-trapped", label: "Where your firm's judgment is trapped" },
  { id: "three-shifts", label: "Three shifts PI owners should prepare for" },
  { id: "institutional-brain", label: "Build an institutional brain, not a chatbot" },
  { id: "editor-in-chief", label: "The lawyer becomes editor-in-chief" },
  { id: "ownership-governance", label: "Ownership means control and governance" },
  { id: "first-workflow", label: "Start with one workflow" },
  { id: "protect-the-moat", label: "Protect what should remain scarce" },
];

const faqs = [
  {
    question: "What is a firm-owned AI system for a personal injury firm?",
    answer:
      "A firm-owned AI system applies the firm's approved knowledge, workflow rules, and review standards to a defined task while the firm retains control over its data, permissions, outputs, and ability to change vendors.",
  },
  {
    question: "What law firm knowledge should be available to an AI agent?",
    answer:
      "Start with approved policies, playbooks, training material, exemplary work product, decision criteria, and de-identified examples relevant to one workflow. Do not provide broad access to client files merely because the technology can ingest them.",
  },
  {
    question: "Can an AI agent make legal decisions for a PI firm?",
    answer:
      "AI can organize facts, prepare drafts, monitor routine work, and flag issues. Lawyers should retain legal advice, strategy, case acceptance, valuation, settlement authority, court filings, and other consequential professional judgments.",
  },
  {
    question: "Where should a PI firm begin building an AI workflow?",
    answer:
      "Choose one repeatable workflow where delay or inconsistency has a visible cost, such as serious-lead escalation, records follow-up, or routine client updates. Map the current process before introducing automation.",
  },
  {
    question: "How should a PI firm protect client data when using agentic AI?",
    answer:
      "Limit access to the minimum necessary data, verify how vendors collect and retain information, isolate matters appropriately, require human review for external actions, maintain audit logs, and reassess controls as the system changes.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "AI agents for personal injury law firms",
    "personal injury law firm AI strategy",
    "PI firm workflow automation",
    "law firm institutional knowledge",
    "firm-owned AI systems",
    "AI workflows for lawyers",
    "personal injury firm operations",
    "law firm AI governance",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    publishedTime: "2026-08-13",
    modifiedTime: "2026-08-13",
    authors: ["Pranav Modi"],
    images: [
      {
        url: heroImage,
        width: 1536,
        height: 1024,
        alt: "A personal injury legal team working while the managing partner's chair sits empty",
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
      datePublished: "2026-08-13",
      dateModified: "2026-08-13",
      author: {
        "@type": "Person",
        name: post.author,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: pageUrl,
      articleSection: "AI Strategy",
      keywords:
        "AI agents for personal injury law firms, PI firm workflow automation, law firm institutional knowledge, firm-owned AI systems, law firm AI governance",
      citation: Object.values(sources),
      mentions: {
        "@type": "Person",
        name: "Robert T. Simon",
        sameAs: sources.bobLinkedIn,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
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
    <div className="bg-black pb-24">
      <ClickBeacon page="blog-ai-pi-firm-judgment-workflows" />
      <JsonLd data={structuredData} />

      <header className="relative min-h-[650px] overflow-hidden border-b border-primary/20 sm:min-h-[720px]">
        <Image
          src="/images/blog/pi-firm-judgment-moat.webp"
          alt="A personal injury legal team working while the managing partner's chair sits empty"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.87)_43%,rgba(0,0,0,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

        <div className="relative mx-auto flex min-h-[650px] max-w-4xl flex-col justify-end px-4 pb-14 pt-28 sm:min-h-[720px] sm:px-6 sm:pb-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-xs text-foreground/70">
              <Link href="/blog" className="transition hover:text-primary">
                Blog
              </Link>
              <span className="text-primary/50">/</span>
              <span>AI Strategy</span>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#00ff41]">
              A strategy essay for PI firm owners
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              AI Will Make Intelligence Cheap. Your PI Firm&apos;s Judgment Is the Moat.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/85 sm:text-xl">
              Every firm will gain access to capable AI. The advantage will belong
              to firms that turn earned judgment into governed systems without
              automating away the human relationships that make the judgment valuable.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/65">
              <span>{post.author}</span>
              <span aria-hidden="true">/</span>
              <time dateTime="2026-08-13">{post.date}</time>
              <span aria-hidden="true">/</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
        <div className="border-y border-primary/30 py-8 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            In plain English
          </p>
          <p className="mt-4 text-xl leading-9 text-foreground/95 sm:text-2xl sm:leading-10">
            The strategic question is no longer whether your firm can access AI.
            It is whether your best judgment can guide the firm when you are not
            personally available. AI creates leverage only after that judgment is
            made explicit, connected to a workflow, and bounded by human review.
          </p>
          <p className="mt-5 text-sm leading-7 text-foreground/65">
            This essay responds to an argument advanced by trial lawyer and legal-tech
            founder{" "}
            <a
              href={sources.bobLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white underline decoration-primary/45 underline-offset-4 transition hover:text-primary"
            >
              Robert &quot;Bob&quot; Simon
            </a>
            : intelligence will become widely available, while a firm&apos;s accumulated
            wisdom will remain scarce.
          </p>
        </div>
      </section>

      <BlogTableOfContents items={contents} faqHref="#faq" />

      <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
        <section className="space-y-6">
          <p className="text-xl leading-9 text-foreground/95">
            A serious lead arrives after hours. The intake specialist is unsure
            whether the facts justify waking the attorney. A treatment gap appears
            in an important file. A young lawyer preparing a deposition needs to
            know which contradiction matters and which one is noise.
          </p>
          <p>
            If the owner or senior trial lawyer is available, the firm usually knows
            what to do. If that person is in court, taking a child to school, or
            simply trying to take a day off, the answer may sit in a voicemail,
            inbox, or someone&apos;s memory.
          </p>
          <p>
            That is the useful way to read Simon&apos;s prediction. The opportunity is
            not a digital replica of a famous lawyer dispensing answers. It is a firm
            that can apply more of its best operating judgment, more consistently,
            without requiring its best people to touch every routine step.
          </p>
        </section>

        <section className="mt-16 space-y-6">
          <h2
            id="owner-not-in-room"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41] sm:text-4xl"
          >
            When the owner is not in the room
          </h2>
          <p>
            Most PI firms already possess valuable institutional knowledge. The
            problem is its form. It lives in a partner&apos;s instincts, a senior
            paralegal&apos;s workarounds, old deposition transcripts, model demands,
            recorded training calls, and unwritten rules about when a case deserves
            escalation.
          </p>
          <p>
            That creates founder dependence. The firm&apos;s quality changes with the
            availability of a few people. New employees learn through proximity.
            Departures remove context. The same facts can receive different treatment
            depending on who notices them.
          </p>
          <p>
            The first AI question for an owner is therefore diagnostic: if you
            disappeared for a week, where would the firm stop thinking like you?
            Those points are candidates for institutionalization. They are not all
            candidates for automation.
          </p>
        </section>

        <section className="mt-16 space-y-6">
          <h2
            id="intelligence-infrastructure"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41] sm:text-4xl"
          >
            Intelligence is becoming infrastructure
          </h2>
          <p>
            Models will continue to improve, and access to capable drafting,
            summarization, classification, and research will spread across vendors.
            Having AI will become less differentiating for the same reason having
            email or cloud storage is not a strategy.
          </p>
          <p>
            The competitive gap will come from what surrounds the model: the quality
            of the firm&apos;s source material, the specificity of its instructions,
            the systems the agent can use, the tests applied to its work, and the
            judgment points reserved for people.
          </p>
          <p>
            A competing firm does not need a magical model to pull ahead. It needs to
            respond to good leads sooner, preserve more case knowledge, remove more
            administrative delay, and give lawyers more time for strategy and trust.
            That is an operating advantage, not a software feature.
          </p>
        </section>

        <section className="mt-16 space-y-6">
          <h2
            id="judgment-trapped"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41] sm:text-4xl"
          >
            What your firm knows that software does not
          </h2>
          <p>
            &quot;Wisdom&quot; can sound mystical. Inside a PI firm, much of it is concrete.
            It is knowing:
          </p>
          <ul className="space-y-3 border-y border-primary/20 py-6 text-foreground/90 marker:text-primary">
            <li className="ml-5 list-disc pl-2">
              which inquiries need a lawyer&apos;s immediate personal response;
            </li>
            <li className="ml-5 list-disc pl-2">
              which facts change case acceptance, urgency, or referral strategy;
            </li>
            <li className="ml-5 list-disc pl-2">
              how the firm investigates coverage, collectability, and liability;
            </li>
            <li className="ml-5 list-disc pl-2">
              which treatment or documentation gaps require explanation;
            </li>
            <li className="ml-5 list-disc pl-2">
              what makes a demand, deposition, or negotiation persuasive in this
              venue; and
            </li>
            <li className="ml-5 list-disc pl-2">
              when a client needs judgment and reassurance rather than another
              automated message.
            </li>
          </ul>
          <p>
            Some of that knowledge can become criteria, examples, checklists, and
            escalation rules. Some remains tacit and must stay with experienced
            people. A mature AI strategy knows the difference.
          </p>
        </section>

        <section className="mt-16 space-y-8">
          <h2
            id="three-shifts"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41] sm:text-4xl"
          >
            Three shifts PI owners should prepare for
          </h2>
          <ol className="divide-y divide-primary/20 border-y border-primary/20">
            <li className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr]">
              <span className="text-3xl font-semibold text-primary/55">01</span>
              <div>
                <h3 className="text-2xl font-semibold leading-tight text-foreground">
                  The best lawyers become more valuable, not less
                </h3>
                <p className="mt-4">
                  Agents can prepare first drafts, monitor queues, assemble records,
                  and surface exceptions. The lawyer&apos;s scarce contribution becomes
                  clearer: judgment, persuasion, responsibility, and the human moment
                  that wins confidence. Firms that use AI well can return time to
                  those activities and to life outside the firm.
                </p>
              </div>
            </li>
            <li className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr]">
              <span className="text-3xl font-semibold text-primary/55">02</span>
              <div>
                <h3 className="text-2xl font-semibold leading-tight text-foreground">
                  Consolidation increases the value of a specific operating edge
                </h3>
                <p className="mt-4">
                  Better-funded firms can buy media, software, and talent. Legal-tech
                  vendors can copy thin AI features. Neither can instantly reproduce
                  a firm&apos;s local reputation, referral relationships, trial experience,
                  and tested way of handling a narrow case type. A smaller firm&apos;s
                  advantage becomes stronger when that knowledge is explicit enough
                  to scale.
                </p>
              </div>
            </li>
            <li className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr]">
              <span className="text-3xl font-semibold text-primary/55">03</span>
              <div>
                <h3 className="text-2xl font-semibold leading-tight text-foreground">
                  Conversation becomes the interface
                </h3>
                <p className="mt-4">
                  Lawyers will increasingly describe a mission in ordinary language:
                  prepare the status update, assemble the chronology, identify what
                  is missing, or draft the first version. The interface may be voice.
                  The difficult part will still be the system underneath: approved
                  sources, permissions, workflow state, review rules, and a record of
                  what happened.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="mt-16 space-y-6">
          <h2
            id="institutional-brain"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41] sm:text-4xl"
          >
            Build an institutional brain, not another chatbot
          </h2>
          <p>
            Uploading a folder of documents and adding a chat box does not create
            firm-wide intelligence. A useful system needs three layers.
          </p>
          <dl className="mt-8 divide-y divide-primary/20 border-y border-primary/20">
            <div className="grid gap-3 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <dt className="text-lg font-semibold text-primary">Knowledge</dt>
              <dd>
                Approved policies, playbooks, training material, exemplary work
                product, decision criteria, and carefully selected examples. The
                source should be identifiable, current, and appropriate for the task.
              </dd>
            </div>
            <div className="grid gap-3 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <dt className="text-lg font-semibold text-primary">Workflow</dt>
              <dd>
                The trigger, sequence, system integrations, assignments, deadlines,
                and escalation paths through which knowledge becomes action. This is
                what separates an answer from an operating system.
              </dd>
            </div>
            <div className="grid gap-3 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <dt className="text-lg font-semibold text-primary">Governance</dt>
              <dd>
                Permissions, matter boundaries, citations, evaluations, audit logs,
                uncertainty thresholds, and human approval. These controls determine
                what the agent may see, propose, and do.
              </dd>
            </div>
          </dl>
          <p>
            That architecture is why we distinguish between isolated AI tools and
            <Link
              href="/blog/tools-vs-systems-pi-firms-ai"
              className="font-medium text-primary underline decoration-primary/35 underline-offset-4"
            >
              {" "}AI systems that run defined workflows
            </Link>
            . The model is one component. The firm&apos;s operating design is the asset.
          </p>
        </section>

        <section className="mt-16 space-y-6">
          <h2
            id="editor-in-chief"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41] sm:text-4xl"
          >
            The lawyer becomes editor-in-chief
          </h2>
          <p>
            &quot;Editor-in-chief&quot; is a useful metaphor only if it does not become an
            excuse for superficial review. The lawyer defines the mission, standards,
            sources, and boundaries. The system handles approved execution. A person
            reviews the result in proportion to its consequence and uncertainty.
          </p>
          <p>
            In intake, AI can acknowledge an inquiry, collect facts, organize the
            transcript, and alert the right person. It should not impersonate the
            relationship or make the final legal judgment. A competitive serious case
            may need the owner&apos;s text or call precisely because the human signal is
            what distinguishes the firm.
          </p>
          <p>
            In case development, an agent can identify missing records, draft routine
            follow-up, and surface a discrepancy. The case manager decides what the
            discrepancy means. The attorney retains strategy, valuation, settlement
            authority, and responsibility for work sent to a client, opposing counsel,
            or a court.
          </p>
          <p>
            This is consistent with the{" "}
            <a
              href={sources.californiaGuidance}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline decoration-primary/35 underline-offset-4"
            >
              State Bar of California&apos;s practical guidance on generative and agentic AI
            </a>
            , which emphasizes that greater autonomy requires stronger supervision and
            verification, while professional judgment remains with the lawyer.
          </p>
        </section>

        <section className="mt-16 space-y-6">
          <h2
            id="ownership-governance"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41] sm:text-4xl"
          >
            Ownership means control and governance
          </h2>
          <p>
            A firm does not need to own every server to own the strategic asset. It
            needs meaningful control over its knowledge and operating layer: the
            ability to export data, preserve provenance, change vendors, define
            permissions, set retention, prevent unauthorized training, and inspect
            what the system did.
          </p>
          <p>
            Broad data access is not a sign of sophistication. An agent connected to
            email, documents, calendars, and case files can create more leverage, but
            it also creates more ways to cross matter boundaries or disclose
            information. Access should be no broader or longer-lived than the workflow
            requires.
          </p>
          <p>
            The{" "}
            <a
              href={sources.abaOpinion}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline decoration-primary/35 underline-offset-4"
            >
              ABA&apos;s Formal Opinion 512
            </a>{" "}
            similarly frames AI use through competence, confidentiality,
            communication, supervision, and review. Firms should also apply the rules
            and guidance of their own jurisdictions. Our practical starting point is
            an explicit{" "}
            <Link
              href="/personal-injury/vendor-risk-governance"
              className="font-medium text-primary underline decoration-primary/35 underline-offset-4"
            >
              AI governance and vendor-risk review
            </Link>{" "}
            before sensitive data or autonomous actions enter scope.
          </p>
        </section>

        <section className="mt-16 space-y-6">
          <h2
            id="first-workflow"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41] sm:text-4xl"
          >
            Start with one workflow
          </h2>
          <p>
            Do not begin by trying to reproduce the owner&apos;s entire brain. Choose one
            repeatable workflow where inconsistency or delay has a visible cost.
            Serious-lead response is often a good candidate because it combines
            urgency, economics, empathy, qualification, and attorney escalation.
          </p>
          <ol className="mt-8 divide-y divide-primary/20 border-y border-primary/20">
            {[
              ["Choose the failure", "Identify where work currently stalls, varies, or depends on one person."],
              ["Observe the best operator", "Document what that person notices, decides, records, and escalates."],
              ["Separate execution from judgment", "Mark what can be prepared automatically and what still requires a person."],
              ["Curate examples", "Use strong, weak, and ambiguous historical examples to define expected behavior."],
              ["Build the narrow system", "Connect only the data and tools required for that workflow."],
              ["Test before autonomy", "Evaluate accuracy, uncertainty, escalation, and failure handling against real scenarios."],
              ["Measure the operating result", "Track response, completion, rework, exceptions, and human time rather than demo quality."],
            ].map(([title, body], index) => (
              <li key={title} className="grid gap-3 py-5 sm:grid-cols-[2.5rem_11rem_1fr] sm:gap-6">
                <span className="text-sm font-semibold text-primary/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong className="font-semibold text-foreground">{title}</strong>
                <span>{body}</span>
              </li>
            ))}
          </ol>
          <p>
            This is the same diagnostic logic behind our approach to{" "}
            <Link
              href="/personal-injury/intake-automation"
              className="font-medium text-primary underline decoration-primary/35 underline-offset-4"
            >
              AI-supported personal injury intake
            </Link>
            : make the firm faster around the human conversation, not less human at
            the moment trust is won.
          </p>
        </section>

        <section className="mt-16 space-y-6">
          <h2
            id="protect-the-moat"
            className="scroll-mt-24 text-3xl font-semibold leading-tight text-[#00ff41] sm:text-4xl"
          >
            Protect what should remain scarce
          </h2>
          <p>
            Your moat is not access to AI. Every firm will have access to AI.
          </p>
          <p>
            The moat is the judgment your firm has earned, the relationships it has
            built, and the operating system through which both appear consistently.
            Technology can make a trusted lawyer&apos;s standards more available. It
            cannot manufacture the trust, responsibility, or experience that gave
            those standards value.
          </p>
          <p>
            The immediate task is not to automate everything. It is to find where
            your firm&apos;s best judgment lives, decide which parts can guide a system,
            protect the underlying data, and preserve human control where the client
            or case needs it.
          </p>
          <p className="border-y border-primary/30 py-8 text-2xl font-semibold leading-10 text-foreground sm:text-3xl sm:leading-[1.4]">
            If you stepped away for a week, which parts of the firm would stop
            thinking like you?
          </p>
          <p>Start there.</p>
        </section>

        <section id="faq" className="mt-20 scroll-mt-24 border-t border-primary/30 pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            Common questions
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            AI agents, firm knowledge, and control
          </h2>
          <div className="mt-8 divide-y divide-primary/20 border-y border-primary/20">
            {faqs.map((faq) => (
              <section key={faq.question} className="py-7">
                <h3 className="text-xl font-semibold leading-8 text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-3">{faq.answer}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-primary/30 pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            Find the first workflow
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Map where your firm&apos;s judgment is trapped
          </h2>
          <p className="mt-5 max-w-3xl">
            Possible Minds helps PI firms identify one consequential workflow,
            separate execution from judgment, and build a governed system around the
            work that is ready. The first conversation is a diagnosis, not a demo.
          </p>
          <Link
            href="/consult"
            className="mt-7 inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Request an institutional intelligence audit
          </Link>
        </section>
      </article>
    </div>
  );
}
