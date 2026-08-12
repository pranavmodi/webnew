import { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { CALENDLY_URL, SITE_NAME, SITE_URL } from "@/lib/constants";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";

const slug = "headless-legal-software-pi-vendor-rankings";
const pageTitle =
  "Headless Legal Software: Which PI Vendors Are Ready for AI Agents?";
const metaTitle = `Headless Legal Software: PI Vendors Ranked | ${SITE_NAME}`;
const pageDescription =
  "We rank 12 PI legal-tech vendors on APIs, webhooks, CLI/MCP access, and whether external AI agents can safely operate their software.";
const pageUrl = `${SITE_URL}/blog/${slug}`;

type Vendor = {
  rank: number;
  name: string;
  score: string;
  access: string;
  verdict: string;
  publication: string;
  href: string;
};

const vendors: Vendor[] = [
  {
    rank: 1,
    name: "Litify",
    score: "9.5",
    access:
      "Salesforce REST APIs, events, CLI, and generally available hosted MCP servers",
    verdict:
      "The strongest machine-operable foundation reviewed. Salesforce MCP can expose records, flows, Apex actions, and queries to authorized AI clients, although implementation and licensing still require discipline.",
    publication:
      "Litify publishes agentic-AI product material and a State of AI in Legal report; Salesforce publishes extensive Headless 360 and MCP documentation.",
    href: "https://www.litify.com/platform",
  },
  {
    rank: 2,
    name: "Filevine",
    score: "8.0",
    access: "Public API documentation and webhooks",
    verdict:
      "A strong base for firm-owned agents, with broad documentation and events. Some product actions remain unavailable or restricted through the API.",
    publication:
      "Filevine publishes extensively about LOIS, its own agentic operating layer.",
    href: "https://developer.filevine.io/",
  },
  {
    rank: 2,
    name: "Clio",
    score: "8.0",
    access: "Public API, OpenAPI reference, OAuth, and webhooks",
    verdict:
      "One of the clearest general legal platforms for external development. It is less PI-specific, but unusually well documented.",
    publication:
      "Clio publishes developer documentation and AI research, but no PI-specific headless thesis was located.",
    href: "https://docs.developers.clio.com/clio-manage/api-reference/",
  },
  {
    rank: 4,
    name: "SmartAdvocate",
    score: "7.0",
    access:
      "First-party MCP server for external AI platforms, custom agents, and integrations",
    verdict:
      "The clearest PI-specific first-party MCP commitment reviewed. The score remains below the leaders because exact public documentation for tools, authentication, writes, events, and audit behavior is limited.",
    publication:
      "SmartAdvocate publishes a dedicated MCP article and lists its MCP server as part of SmartIntelligence.",
    href: "https://www.smartadvocate.com/smart-intelligence",
  },
  {
    rank: 5,
    name: "PracticePanther",
    score: "6.5",
    access: "REST API, OAuth 2, OData, Swagger, and JSON",
    verdict:
      "A credible programmable surface with strong public documentation, but API access must be requested and event support is less visible.",
    publication:
      "Its API guide is substantive; no dedicated CLI-first or agent-operability paper was located.",
    href: "https://support.practicepanther.com/en/articles/479897-practicepanther-api",
  },
  {
    rank: 6,
    name: "Assembly Neos",
    score: "6.0",
    access: "Partner API platform, Zapier, and embedded NeosAI agents",
    verdict:
      "Agentic product direction is strong, but external developer access appears partner-gated rather than broadly self-service.",
    publication:
      "Assembly publishes regularly on embedded and agentic AI for PI firms.",
    href: "https://www.assemblysoftware.com/",
  },
  {
    rank: 7,
    name: "Supio",
    score: "5.5",
    access: "Connectors, APIs, and a proprietary Supio Agent",
    verdict:
      "Advanced vendor-owned AI for plaintiff firms, but the public materials reviewed do not expose a comparable self-service surface for outside agents.",
    publication:
      "Supio publishes an AI buyer's guide and detailed material about Supio Agent.",
    href: "https://www.supio.com/",
  },
  {
    rank: 7,
    name: "CASEpeer",
    score: "5.5",
    access: "Advanced-tier API access, integrations, and Zapier",
    verdict:
      "Good PI workflow depth and a broad integration ecosystem, but the public developer surface is less detailed than the leaders.",
    publication:
      "CASEpeer publishes integration posts and an unusually explicit page written for AI assistants.",
    href: "https://www.casepeer.com/integrations/",
  },
  {
    rank: 9,
    name: "MyCase",
    score: "5.0",
    access: "Open API on the Advanced tier",
    verdict:
      "The firm can automate meaningful work, but access is plan-gated and MyCase says it does not directly support API implementations.",
    publication:
      "MyCase publishes a concise open-API explainer and public API documentation.",
    href: "https://supportcenter.mycase.com/en/articles/9370198-open-api",
  },
  {
    rank: 10,
    name: "EvenUp",
    score: "4.5",
    access: "Managed integrations and proprietary AI products",
    verdict:
      "Strong AI-enabled work product and useful integrations, but public materials emphasize EvenUp's agents rather than firm-controlled external agents.",
    publication:
      "EvenUp publishes AI and pre-litigation guides, plus integration material.",
    href: "https://www.evenuplaw.com/products/integrations/",
  },
  {
    rank: 10,
    name: "Smokeball",
    score: "4.5",
    access: "Zapier and API access by request",
    verdict:
      "Useful workflow connectivity exists, but the public machine interface is less discoverable and less self-service than the leaders.",
    publication:
      "Smokeball publishes integration documentation; no headless-agent paper was located.",
    href: "https://support.smokeball.com/hc/en-us/articles/15431574575511-Zapier-Integration",
  },
  {
    rank: 12,
    name: "Lead Docket",
    score: "4.0",
    access: "Filevine integrations, automations, and documented webhook activity",
    verdict:
      "Operationally useful for intake, but a complete standalone public developer surface was not located in the materials reviewed.",
    publication:
      "Capabilities appear mainly in Filevine product specifications and release notes.",
    href: "https://www.filevine.com/legal/product-specifications/",
  },
];

const faqs = [
  {
    question: "What is headless legal software?",
    answer:
      "Headless legal software makes its data and actions available without requiring a person to click through the graphical interface. It usually exposes APIs, webhooks, command-line tools, or MCP tools that software and AI agents can operate directly.",
  },
  {
    question: "Why would a law firm want a CLI for its case management software?",
    answer:
      "A CLI turns common case-management actions into documented commands with predictable inputs and structured outputs. That makes the system easier to automate, test, audit, and operate through an AI agent while preserving approval rules.",
  },
  {
    question: "Does an API make legal software agent-ready?",
    answer:
      "Not by itself. Agent-ready software also needs broad read and write coverage, stable schemas, authentication for service accounts, scoped permissions, webhooks, idempotent actions, audit logs, error handling, and human approval controls.",
  },
  {
    question: "Which PI case management vendor is most ready for external AI agents?",
    answer:
      "Among the vendors reviewed in July 2026, Litify had the strongest overall machine-operable foundation because it inherits Salesforce APIs, events, CLI tooling, and generally available hosted MCP servers. Filevine and Clio followed because of their public APIs and webhook documentation.",
  },
  {
    question: "Which PI legal software vendors support MCP?",
    answer:
      "Litify customers can use Salesforce-hosted MCP servers, subject to Salesforce edition, configuration, permissions, and validation of the relevant Litify objects and actions. SmartAdvocate explicitly advertises a first-party MCP server connecting external AI platforms to case data and documents. Clio has announced a forthcoming MCP connector for Vincent legal research, but not a generally available Clio Manage case-management MCP server.",
  },
  {
    question: "Do Filevine, CASEpeer, or Neos have a public MCP server?",
    answer:
      "No dedicated first-party MCP server was located in the public documentation reviewed for Filevine, CASEpeer, or Neos. They offer different combinations of APIs, integrations, webhooks, partner programs, and vendor-owned AI features.",
  },
  {
    question: "Can headless legal software reduce labor costs?",
    answer:
      "Potentially. It can return staff capacity by reducing duplicate entry, cross-system lookup, routine follow-up, document routing, and status reconstruction. Real savings depend on workflow volume, data quality, API coverage, exception rates, reliability, and human-review requirements.",
  },
  {
    question: "Can an AI agent safely update a personal injury case file?",
    answer:
      "Yes, for bounded actions with least-privilege access, validation, approval gates, idempotency, and complete audit logs. Legal judgment, sensitive client communications, settlement decisions, and low-confidence actions should remain under human supervision.",
  },
];

const contents = [
  { id: "legal-software-is-becoming-infrastructure-for-agents", label: "Legal software is becoming infrastructure for agents" },
  { id: "what-headless-legal-software-means", label: "What \"headless legal software\" means" },
  { id: "api-vs-mcp-what-is-the-difference", label: "API vs. MCP: what is the difference?" },
  { id: "why-the-cli-matters-in-the-agent-era", label: "Why the CLI matters in the agent era" },
  { id: "the-economics-interface-work-is-labor", label: "The economics: interface work is labor" },
  { id: "how-we-rated-pi-legal-tech-vendors", label: "How we rated PI legal-tech vendors" },
  { id: "pi-vendor-rankings-for-external-ai-agent-readiness", label: "PI vendor rankings for external AI-agent readiness" },
  { id: "what-the-rankings-reveal", label: "What the rankings reveal" },
  { id: "which-vendors-are-publishing-on-the-shift", label: "Which vendors are publishing on the shift?" },
  { id: "the-procurement-questions-pi-firms-should-ask-now", label: "The procurement questions PI firms should ask now" },
  { id: "what-a-headless-pi-operating-layer-could-do", label: "What a headless PI operating layer could do" },
  { id: "the-operating-principle-automate-action-preserve-judgment", label: "The operating principle: automate action, preserve judgment" },
  { id: "bottom-line", label: "Bottom line" },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "headless legal software",
    "personal injury case management software API",
    "legal software CLI",
    "AI agents for personal injury law firms",
    "PI legal technology vendors",
    "Filevine API",
    "Litify API",
    "CASEpeer API",
    "legal software MCP",
    "agentic legal software",
    "personal injury software comparison",
    "law firm workflow automation",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
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
      datePublished: "2026-07-16",
      dateModified: "2026-07-16",
      author: {
        "@type": "Person",
        name: post.author,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: pageUrl,
      articleSection: "Industry Analysis",
      keywords:
        "headless legal software, personal injury case management software API, legal software CLI, AI agents for PI firms, agentic legal software",
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
      <JsonLd data={structuredData} />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#04150d] to-black">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link href="/blog" className="transition hover:text-primary">
                Blog
              </Link>
              <span className="text-primary/40">/</span>
              <span>Industry Analysis</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              Headless Legal Software: Which PI Vendors Are Ready for AI Agents?
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              The next important user of legal software may not be a person. It
              may be an AI agent. We reviewed 12 widely encountered PI platforms
              to see which ones can be operated through APIs, events, CLIs, and
              other machine-native interfaces.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {[post.author, post.date, post.readTime].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/20 bg-[#04150d] px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BlogTableOfContents items={contents} faqHref="#faq" />


      <article className="mx-auto max-w-4xl space-y-12 px-4 pt-12 text-foreground/85 sm:px-6">
        <section className="rounded-lg border border-primary/25 bg-[#04150d] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase text-primary">
            The answer in 30 seconds
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="legal-software-is-becoming-infrastructure-for-agents">
            Legal software is becoming infrastructure for agents
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/75">
            A graphical interface helps a person operate software. An API, CLI,
            or MCP server helps another machine operate it. As AI agents become
            capable of completing multi-step work, the value of legal software
            will increasingly depend on whether agents can read, reason over,
            and safely act on the system.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/75">
            Most PI vendors are not there yet. Several have strong APIs. Several
            have impressive AI inside their own products. Two relevant MCP paths
            now stand out: Salesforce-hosted MCP for Litify environments and
            SmartAdvocate&apos;s first-party MCP server. That scarcity will shape
            vendor economics, implementation speed, and how much administrative
            labor a firm can actually remove.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">TL;DR</h2>
          <ul className="space-y-3 pl-5 text-foreground/80">
            <li className="list-disc">
              <strong>Headless means operable without clicks.</strong> The
              software exposes data and actions through machine-readable
              interfaces instead of requiring a human to navigate screens.
            </li>
            <li className="list-disc">
              <strong>A vendor&apos;s own AI is not the same as openness.</strong>{" "}
              An embedded agent may be powerful while the platform remains
              closed to the firm&apos;s agents and outside developers.
            </li>
            <li className="list-disc">
              <strong>APIs are the baseline, not the finish line.</strong> Agents
              also need events, stable schemas, permissions, audit logs,
              idempotency, approval gates, and reliable error handling.
            </li>
            <li className="list-disc">
              <strong>Litify leads this review.</strong> It benefits from
              Salesforce&apos;s hosted MCP, CLI, API, event, permission, and
              audit infrastructure. Filevine and Clio publish strong API and
              webhook documentation. SmartAdvocate now stands out as the most
              explicit PI-specific first-party MCP offering.
            </li>
            <li className="list-disc">
              <strong>The labor opportunity is real but conditional.</strong>{" "}
              The savings come from reducing interface work: duplicate entry,
              lookup, routing, follow-up, and status reconstruction. Reliability
              and review requirements determine how much capacity is recovered.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="what-headless-legal-software-means">
            What &quot;headless legal software&quot; means
          </h2>
          <p>
            Traditional legal software is designed around a screen. A case
            manager logs in, searches for a file, opens a tab, copies a value,
            updates a field, creates a task, and sends a message. The system may
            be sophisticated, but a person is still the integration layer.
          </p>
          <p>
            Headless software separates the useful capability from the graphical
            interface. Its records and actions can be accessed through an API, a
            command-line interface, webhooks, or an agent protocol such as the{" "}
            <a
              href="https://modelcontextprotocol.io/docs/getting-started/intro"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
            >
              Model Context Protocol
            </a>
            . The screen still exists for humans, but it is no longer the only
            way to operate the product.
          </p>
          <p>
            In plain English: if the only way to move a case forward is to teach
            a person where to click, the software is not headless. If an
            authorized agent can retrieve the right record, take a bounded
            action, return structured evidence, and leave an audit trail, it is.
          </p>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="api-vs-mcp-what-is-the-difference">
              API vs. MCP: what is the difference?
            </h2>
            <p className="mt-4">
              MCP does not replace an API. It usually sits above APIs, databases,
              and application logic and presents selected capabilities in a
              standard format designed for AI agents.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-primary/20">
            <table className="min-w-[680px] w-full text-left text-sm">
              <thead className="bg-[#04150d] text-primary">
                <tr>
                  <th className="px-4 py-3 font-semibold">Question</th>
                  <th className="px-4 py-3 font-semibold">API</th>
                  <th className="px-4 py-3 font-semibold">MCP server</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Designed primarily for",
                    "Developers and deterministic software integrations",
                    "LLM clients and AI agents",
                  ],
                  [
                    "How capabilities are found",
                    "The developer reads documentation and codes against endpoints",
                    "The agent can discover declared tools, resources, prompts, and schemas",
                  ],
                  [
                    "Integration work",
                    "A custom connector is usually built for each application",
                    "One MCP server can serve multiple compatible AI clients",
                  ],
                  [
                    "Typical interface",
                    "URLs, methods, request bodies, responses, and webhooks",
                    "Named tools with descriptions, typed inputs, outputs, and context",
                  ],
                  [
                    "Control model",
                    "Whatever authentication, permissions, and logging the API implements",
                    "The server exposes a deliberately bounded tool catalog, but still depends on strong authentication, permissions, and auditing",
                  ],
                ].map(([question, api, mcp]) => (
                  <tr
                    key={question}
                    className="border-t border-primary/15 align-top"
                  >
                    <td className="px-4 py-4 font-semibold text-foreground">
                      {question}
                    </td>
                    <td className="px-4 py-4 text-foreground/75">{api}</td>
                    <td className="px-4 py-4 text-foreground/75">{mcp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The practical difference is discoverability. A conventional API may
            contain hundreds of endpoints, but the agent does not automatically
            know which endpoint represents a safe business action. An MCP server
            can advertise a narrower tool such as &quot;find overdue medical
            records requests&quot; or &quot;draft a client status update,&quot;
            including the fields it accepts and the output it returns. The agent
            can reason about when to call that tool without every AI product
            building a separate Filevine, Litify, or SmartAdvocate connector.
          </p>
          <p>
            That makes MCP useful in three ways: it reduces integration work,
            makes capabilities portable across compatible AI clients, and gives
            the vendor or firm a place to define exactly which actions an agent
            may take. The{" "}
            <a
              href="https://modelcontextprotocol.io/specification/2025-06-18/server/tools"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
            >
              MCP tools specification
            </a>{" "}
            requires servers to describe callable tools and their input schemas.
          </p>
          <p>
            MCP is not automatically secure. A poorly designed MCP server can
            expose excessive data or dangerous actions just as a poorly designed
            API can. PI firms still need least-privilege access, read-only
            defaults, confirmation for consequential writes, source validation,
            complete audit logs, and defenses against prompt injection and
            malicious tool instructions.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="why-the-cli-matters-in-the-agent-era">
            Why the CLI matters in the agent era
          </h2>
          <p>
            Modern AI coding agents show why command lines are becoming
            important again.{" "}
            <a
              href="https://docs.anthropic.com/en/docs/claude-code/cli-usage"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
            >
              Claude Code
            </a>{" "}
            supports piped input, JSON output, permission controls, and MCP
            configuration.{" "}
            <a
              href="https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
            >
              GitHub Copilot CLI
            </a>{" "}
            provides interactive and programmatic operation. The interface is
            terse, composable, observable, and easy for another program to call.
          </p>
          <p>
            A legal CLI could compress a sprawling API into stable verbs that
            match the work of a firm. These commands are illustrative, not
            commands offered by the vendors reviewed:
          </p>
          <div className="overflow-x-auto rounded-lg border border-primary/20 bg-[#020806] p-5 font-mono text-sm text-foreground/80">
            <p>pi cases list --stage treatment --stale 14d --json</p>
            <p className="mt-3">
              pi records follow-up --case 1842 --dry-run
            </p>
            <p className="mt-3">
              pi intake qualify --lead 7731 --require-approval
            </p>
          </div>
          <p>
            The important features are not the terminal aesthetics. They are
            predictable commands, structured output, narrow permissions,
            previews before writes, machine-readable errors, and complete logs.
            The same commands can then be exposed as MCP tools or called by a
            workflow engine.
          </p>
          <p>
            This extends the argument in{" "}
            <Link
              href="/blog/when-ai-is-the-user"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
            >
              When AI Is the User
            </Link>
            : when software is operated by agents, its interface and economics
            change. The agent does not care how polished the dashboard is. It
            cares whether it can complete the job safely.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="the-economics-interface-work-is-labor">
            The economics: interface work is labor
          </h2>
          <p>
            A meaningful share of legal operations is not legal judgment. It is
            interface work: finding a matter, checking a status, copying data
            between products, renaming documents, sending standard follow-ups,
            and reconstructing what happened across inboxes and case notes.
          </p>
          <p>
            The{" "}
            <a
              href="https://www.nber.org/papers/w31161"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
            >
              NBER study Generative AI at Work
            </a>{" "}
            found a 14% average productivity improvement among 5,179 customer
            support agents, with larger gains for less experienced workers.
            That is not a PI-firm forecast. It is evidence that an AI system can
            materially increase throughput when the task is well instrumented
            and the system has access to the information needed to act.
          </p>
          <p>
            The{" "}
            <a
              href="https://www.bls.gov/opub/mlr/2025/article/incorporating-ai-impacts-in-bls-employment-projections.htm"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
            >
              Bureau of Labor Statistics
            </a>{" "}
            expects AI to reduce time spent on tasks such as document review,
            while emphasizing that legal work still requires human review.
            BLS reported a May 2024 median annual wage of{" "}
            <a
              href="https://www.bls.gov/ooh/legal/paralegals-and-legal-assistants.htm"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
            >
              $61,010 for paralegals and legal assistants
            </a>
            .
          </p>

          <div className="rounded-lg border border-primary/25 bg-[#04150d] p-6">
            <h3 className="text-xl font-semibold text-primary">
              An illustrative capacity model
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="border-l-2 border-primary/50 pl-4">
                <p className="text-xs uppercase text-muted-foreground">
                  Support roles
                </p>
                <p className="mt-1 text-2xl font-semibold text-[#00ff41]">10</p>
              </div>
              <div className="border-l-2 border-primary/50 pl-4">
                <p className="text-xs uppercase text-muted-foreground">
                  Median salary base
                </p>
                <p className="mt-1 text-2xl font-semibold text-[#00ff41]">
                  $610,100
                </p>
              </div>
              <div className="border-l-2 border-primary/50 pl-4">
                <p className="text-xs uppercase text-muted-foreground">
                  Time on interface work
                </p>
                <p className="mt-1 text-2xl font-semibold text-[#00ff41]">25%</p>
              </div>
              <div className="border-l-2 border-primary/50 pl-4">
                <p className="text-xs uppercase text-muted-foreground">
                  Work removed by agents
                </p>
                <p className="mt-1 text-2xl font-semibold text-[#00ff41]">50%</p>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-foreground/75">
              In this example, the firm recovers 12.5% of the team&apos;s total
              capacity: 1.25 full-time-equivalent roles, or about $76,263 of
              salary-equivalent capacity at the BLS median. This is not a layoff
              forecast. It excludes benefits and overhead, and it does not count
              the value of faster intake, fewer errors, or faster case movement.
              It shows the mechanism: eliminating screen work can return
              meaningful capacity even before AI performs legal analysis.
            </p>
          </div>

          <p>
            Gross model speed is not realized savings. Failed actions,
            incomplete APIs, dirty data, and excessive human checking can erase
            the gain. A headless interface matters because it reduces those
            frictions and makes the work observable enough to improve.
          </p>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="how-we-rated-pi-legal-tech-vendors">
              How we rated PI legal-tech vendors
            </h2>
            <p className="mt-4">
              This is an external-agent readiness review, not a ranking of total
              product quality. A lower score does not mean the software is bad.
              It means a firm has less publicly documented evidence that its own
              AI agents can operate the product directly.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["30%", "Public read/write API breadth and documentation"],
              ["20%", "Webhooks, events, and automation triggers"],
              ["15%", "First-party MCP availability, scope, and maturity"],
              ["5%", "CLI, SDK, or equivalent programmable interface"],
              ["10%", "Developer access, test environment, and friction"],
              ["10%", "Structured schemas, outputs, and error behavior"],
              ["10%", "Evidence of safe external-agent composability"],
            ].map(([weight, criterion]) => (
              <div
                key={criterion}
                className="flex gap-4 border-l-2 border-primary/40 bg-[#04150d]/55 p-4"
              >
                <span className="shrink-0 font-semibold text-primary">
                  {weight}
                </span>
                <span className="text-sm text-foreground/75">{criterion}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Research cutoff: July 16, 2026. We reviewed public first-party
            developer documentation, help centers, product pages, release notes,
            reports, and integration material. When no first-party CLI, MCP
            server, or public documentation was located, we say exactly that;
            private partner capabilities may exist.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="pi-vendor-rankings-for-external-ai-agent-readiness">
            PI vendor rankings for external AI-agent readiness
          </h2>
          <div className="overflow-x-auto rounded-lg border border-primary/20">
            <table className="min-w-[780px] w-full text-left text-sm">
              <thead className="bg-[#04150d] text-primary">
                <tr>
                  <th className="px-4 py-3 font-semibold">Rank</th>
                  <th className="px-4 py-3 font-semibold">Vendor</th>
                  <th className="px-4 py-3 font-semibold">Score</th>
                  <th className="px-4 py-3 font-semibold">
                    Publicly documented surface
                  </th>
                  <th className="px-4 py-3 font-semibold">Bottom line</th>
                </tr>
              </thead>
              <tbody>
                {vendors.map((vendor) => (
                  <tr
                    key={vendor.name}
                    className="border-t border-primary/15 align-top"
                  >
                    <td className="px-4 py-4 text-muted-foreground">
                      {vendor.rank}
                    </td>
                    <td className="px-4 py-4 font-semibold text-foreground">
                      <a
                        href={vendor.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary underline decoration-primary/30 underline-offset-4"
                      >
                        {vendor.name}
                      </a>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex min-w-12 justify-center rounded border border-primary/30 bg-[#04150d] px-2 py-1 font-semibold text-[#00ff41]">
                        {vendor.score}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-foreground/75">
                      {vendor.access}
                    </td>
                    <td className="px-4 py-4 text-foreground/75">
                      {vendor.verdict}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="what-the-rankings-reveal">
            What the rankings reveal
          </h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">
              1. Litify has the strongest foundation, including hosted MCP
            </h3>
            <p>
              Litify is built on Salesforce, so it inherits a mature REST
              platform, events, flows, permissions, developer tooling, the{" "}
              <a
                href="https://developer.salesforce.com/tools/salesforcecli"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
              >
                Salesforce CLI
              </a>
              , and{" "}
              <a
                href="https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/hosted-mcp-servers-overview.html"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
              >
                Salesforce-hosted MCP servers
              </a>
              . Those hosted servers are generally available for Enterprise
              Edition organizations and above and can expose Salesforce records,
              flows, Apex actions, and queries to authorized MCP clients. Litify
              is also moving toward agentic operation through ACE, its Agentic
              Case Expert.
            </p>
            <p>
              That makes Litify the closest platform in this review to a true
              agent-operable legal stack. The tradeoff is complexity. Salesforce
              flexibility can create excellent infrastructure or an expensive,
              brittle implementation. Firms should confirm that their edition,
              Litify package objects, custom flows, and required actions are
              exposed and permitted. The score reflects capability, not ease.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">
              2. Filevine and Clio make outside development credible
            </h3>
            <p>
              Filevine publishes API and webhook documentation that gives firms
              a realistic basis for event-driven workflows. Its{" "}
              <a
                href="https://info.filevine.com/lois-console"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
              >
                LOIS Console
              </a>{" "}
              also shows the company&apos;s internal move toward agentic action.
              The distinction remains important: LOIS acting inside Filevine is
              not the same as a firm receiving a supported Filevine CLI or MCP
              server.
            </p>
            <p>
              Clio&apos;s public developer ecosystem is similarly strong. Its
              API reference and webhooks make it easier to build a controlled
              integration layer. It ranks beside Filevine even though it is a
              generalist platform because openness often matters more than
              practice-area specificity when the buyer wants to build.
            </p>
            <p className="text-sm text-muted-foreground">
              One useful sign of honesty in Filevine&apos;s documentation is
              that its{" "}
              <a
                href="https://support.filevine.com/hc/en-us/articles/29259311975707-API-General-Q-A"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline decoration-primary/30 underline-offset-4"
              >
                API Q&amp;A
              </a>{" "}
              identifies product actions that are not available through the
              API. Agent readiness depends as much on documented limits as
              documented features.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">
              3. SmartAdvocate is the clearest PI-specific MCP entrant
            </h3>
            <p>
              SmartAdvocate now explicitly lists a{" "}
              <a
                href="https://www.smartadvocate.com/smart-intelligence"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
              >
                first-party MCP server
              </a>{" "}
              that lets technical teams connect external AI platforms such as
              Claude to SmartAdvocate case data and documents. Its separate{" "}
              <a
                href="https://www.smartadvocate.com/article/the-mcp-standard-the-high-speed-bridge-between-your-data-and-the-future"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
              >
                MCP article
              </a>{" "}
              describes real-time, bidirectional access.
            </p>
            <p>
              That is a substantial external-agent signal and moves
              SmartAdvocate from the bottom tier to fourth place in this review.
              The score stops at 7.0 because its public materials do not yet
              provide the technical depth needed to independently verify the
              exact tool catalog, authentication flows, write permissions,
              webhook coverage, approval controls, or audit semantics.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">
              4. Strong proprietary agents can coexist with a closed platform
            </h3>
            <p>
              Supio, EvenUp, Neos, Litify, and Filevine all describe AI that can
              perform increasingly substantive work within their products.
              That is a meaningful product advantage. It is not proof that the
              firm can connect its own intake agent, records agent, negotiation
              agent, and reporting agent across the rest of the stack.
            </p>
            <p>
              This is the strategic divide. A vendor-owned agent concentrates
              intelligence inside the vendor. A headless platform lets the firm
              decide which agent performs the work, which model it uses, what it
              can access, and where the resulting operational memory lives.
            </p>
            <p>
              The question for a PI owner is not merely, &quot;Does this product
              have AI?&quot; It is, &quot;Can our systems safely operate this
              product, or must every workflow terminate inside the
              vendor&apos;s agent?&quot;
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">
              5. The middle of the market has APIs, but access friction matters
            </h3>
            <p>
              PracticePanther&apos;s public documentation is stronger than its
              market narrative suggests: REST, OAuth 2, OData, Swagger, and JSON
              are credible building blocks. MyCase also offers an open API, but
              only on its Advanced tier and without direct implementation
              support. CASEpeer places API access on its Advanced tier and has a
              broad integration ecosystem. Neos promotes an API-driven partner
              platform, but access appears to run through a partnership process.
            </p>
            <p>
              These are not cosmetic differences. Every approval queue, partner
              agreement, undocumented object, and missing webhook increases the
              engineering and maintenance cost of automation. A technically
              available API can still be economically headful.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">
              6. MCP support exists, but remains narrow and uneven
            </h3>
            <p>
              Two current paths stand out. Litify can inherit generally
              available Salesforce-hosted MCP infrastructure, while
              SmartAdvocate advertises a PI-specific first-party MCP server.
              Neither should be reduced to a checkbox: buyers must verify which
              case objects, documents, actions, permissions, and audit records
              are actually exposed in their environment.
            </p>
            <p>
              Clio has announced an MCP connector that will make Vincent legal
              research available inside Perplexity&apos;s Computer for Counsel.
              It is set to launch in the coming months and does not establish a
              generally available MCP surface for Clio Manage case-management
              records or actions, so Clio&apos;s current score does not change.
            </p>
            <p>
              No dedicated first-party MCP server was located in the public
              materials reviewed for Filevine, PracticePanther, Neos, Supio,
              CASEpeer, MyCase, EvenUp, Smokeball, or Lead Docket. Supio discusses
              MCP as a way to connect general AI tools to legal databases, but
              that is not evidence of a Supio-operated MCP server.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="which-vendors-are-publishing-on-the-shift">
            Which vendors are publishing on the shift?
          </h2>
          <p>
            Legal vendors increasingly publish about agentic AI, but almost none
            frame the issue as headless software or CLI-first operation. The
            current thought leadership is mostly about what the vendor&apos;s own
            AI can do.
          </p>
          <div className="space-y-4">
            {vendors.map((vendor) => (
              <div
                key={vendor.name}
                className="grid gap-2 border-b border-primary/15 pb-4 sm:grid-cols-[150px_1fr]"
              >
                <p className="font-semibold text-primary">{vendor.name}</p>
                <p className="text-sm text-foreground/75">
                  {vendor.publication}
                </p>
              </div>
            ))}
          </div>
          <p>
            Litify&apos;s{" "}
            <a
              href="https://web.litify.com/rs/722-RPB-496/images/Litify-2025-AI-Report.pdf?version=0"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
            >
              State of AI in Legal
            </a>{" "}
            report is one of the more useful market snapshots. Supio&apos;s AI
            buyer&apos;s guide and Assembly&apos;s agentic-AI trend writing are
            useful for procurement. Filevine, Supio, Neos, Litify, and EvenUp
            provide detailed evidence of vendor-owned agent development.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              [
                "Filevine: LOIS Console",
                "https://info.filevine.com/lois-console",
              ],
              [
                "Litify: Agentic Case Expert",
                "https://www.litify.com/blog/introducing-litify-ace-the-agentic-case-expert",
              ],
              [
                "SmartAdvocate: MCP for law firms",
                "https://www.smartadvocate.com/article/the-mcp-standard-the-high-speed-bridge-between-your-data-and-the-future",
              ],
              [
                "Supio: Supio Agent launch",
                "https://www.supio.com/press/supio-launches-supio-agent-transforming-how-plaintiff-law-firms-operate",
              ],
              [
                "Assembly: 2026 PI legal-tech trends",
                "https://www.assemblysoftware.com/post/2026-legal-tech-trends-for-personal-injury-firms",
              ],
              [
                "CASEpeer: information for AI assistants",
                "https://www.casepeer.com/llm-info/",
              ],
              [
                "EvenUp: integration architecture",
                "https://www.evenuplaw.com/products/integrations/",
              ],
              [
                "Clio: forthcoming Vincent MCP connector",
                "https://www.clio.com/about/press/clio-perplexity-partnership/",
              ],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="border-l-2 border-primary/40 bg-[#04150d]/55 p-4 text-sm font-medium text-primary transition hover:bg-[#04150d]"
              >
                {label}
              </a>
            ))}
          </div>
          <p>
            What is still missing is a public PI-industry paper on the controls
            and interfaces required for outside agents to operate the system.
            The market talks about adding AI to the software. It talks much less
            about making the software operable by any authorized AI.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="the-procurement-questions-pi-firms-should-ask-now">
            The procurement questions PI firms should ask now
          </h2>
          <p>
            A conventional feature checklist will not reveal whether a platform
            can support the firm&apos;s future operating model. Add these
            questions to vendor diligence:
          </p>
          <ol className="space-y-4 pl-5">
            {[
              "Which objects can the API read, create, update, and delete?",
              "Which important product actions are unavailable through the API?",
              "Do webhooks cover intake, documents, tasks, notes, case-stage changes, messages, and custom fields?",
              "Can a service account receive narrow, role-based permissions instead of full user access?",
              "Are schemas versioned, documented, and available as OpenAPI or another machine-readable specification?",
              "Can write actions use dry-run, approval, idempotency, and rollback controls?",
              "Is every agent action, source record, output, and human approval preserved in an audit log?",
              "Can the firm export operational history and agent memory if it changes vendors?",
              "Is API access included, plan-gated, usage-priced, or restricted to approved partners?",
              "Does the vendor support a CLI, SDK, MCP server, sandbox, or reference integration for AI agents?",
            ].map((question) => (
              <li key={question} className="list-decimal pl-2">
                {question}
              </li>
            ))}
          </ol>
          <p>
            These questions belong inside a broader{" "}
            <Link
              href="/personal-injury/vendor-risk-governance"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
            >
              AI vendor-risk and governance review
            </Link>
            . An open platform without permissions, logs, and data controls can
            create more risk than a closed one.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="what-a-headless-pi-operating-layer-could-do">
            What a headless PI operating layer could do
          </h2>
          <p>
            The goal is not to replace the case-management system. It is to make
            the existing stack operable as one system. A controlled agent layer
            could:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "Intake",
                "Create and enrich leads, check duplicates, qualify facts, preserve source attribution, and escalate urgent cases.",
              ],
              [
                "Case development",
                "Detect stalled treatment, request missing records, reconcile provider status, and create reviewed follow-up tasks.",
              ],
              [
                "Client communication",
                "Draft routine updates from live case facts and route legal or emotionally sensitive questions to staff.",
              ],
              [
                "Demand preparation",
                "Assemble records, bills, chronology, liability facts, and unresolved gaps into a reviewable case package.",
              ],
              [
                "Settlement and liens",
                "Track offers, balances, reduction requests, deadlines, approvals, and negotiation history across systems.",
              ],
              [
                "Firm intelligence",
                "Calculate conversion, aging, cycle time, staff workload, referral quality, and exceptions from current operational data.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="border-l-2 border-primary/50 p-4">
                <h3 className="font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <p>
            This is the difference between buying isolated AI tools and building{" "}
            <Link
              href="/blog/tools-vs-systems-pi-firms-ai"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
            >
              an AI operating system for the firm
            </Link>
            . The tool completes one task. The system observes case state,
            chooses the next permitted action, documents what happened, and
            escalates judgment.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="the-operating-principle-automate-action-preserve-judgment">
            The operating principle: automate action, preserve judgment
          </h2>
          <p>
            Headless does not mean unsupervised. The more directly an AI agent
            can act on a case file, the more important the control layer becomes.
            Firms should use least-privilege credentials, bounded tools,
            validation rules, approval thresholds, source citations, and
            exception queues.
          </p>
          <p>
            An agent can create a task when records are overdue. A person should
            decide whether an unresolved treatment gap changes case strategy. An
            agent can draft a client update from verified facts. A lawyer should
            handle legal advice and high-stakes judgment. An agent can assemble
            a lien history. A human should approve the negotiation position.
          </p>
          <p>
            The clean division is simple: machines handle retrieval,
            reconciliation, routing, drafting, and routine action. Humans own
            judgment, exceptions, relationships, and accountability.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="bottom-line">
            Bottom line
          </h2>
          <p>
            The legal software market is moving from systems humans operate to
            systems agents can operate. PI firms should care because contingency
            economics reward throughput, speed, and consistency. A firm that can
            move more good cases with the same team gains operating leverage
            without weakening legal judgment.
          </p>
          <p>
            The vendor market is early. Public APIs are becoming common. Embedded
            agents are arriving quickly. Supported CLIs, MCP servers, and
            external-agent controls remain rare.
          </p>
          <p>
            That makes headless capability a procurement issue now, not a
            technical curiosity. The software a firm chooses today will either
            become infrastructure for its agents or remain another screen its
            staff must operate.
          </p>
        </section>

        <section id="faq" className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase text-primary">
              Frequently asked questions
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#00ff41]">
              Headless legal software and AI agents
            </h2>
          </div>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-primary/15 pb-5"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {faq.question}
                </h3>
                <p className="mt-2 leading-relaxed text-foreground/75">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 text-sm text-muted-foreground">
          <h2 className="text-xl font-semibold text-primary">
            Sources and limitations
          </h2>
          <p>
            The review uses public first-party materials from MCP, Anthropic,
            GitHub, NBER, BLS, Salesforce, Litify, Filevine, Clio,
            PracticePanther, MyCase, CASEpeer, Assembly Neos, Supio, EvenUp,
            Smokeball, Lead Docket, and SmartAdvocate. Vendor capabilities,
            pricing tiers, and documentation can change. Scores measure
            publicly documented external-agent readiness as of July 16, 2026,
            not security, implementation quality, customer satisfaction, or
            total product fit.
          </p>
          <p>
            Possible Minds has not independently tested every private API or
            partner program. A missing public CLI or MCP server does not prove
            that no private capability exists. Firms should validate the exact
            objects, actions, limits, controls, and commercial terms required
            for their workflows.
          </p>
          <p>
            This article is operational analysis, not legal, employment, or
            financial advice.
          </p>
        </section>

        <section className="rounded-lg border border-primary/25 bg-[#04150d] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase text-primary">
            Assess your stack
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#00ff41]">
            Find the workflows your current software can support
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-foreground/75">
            Possible Minds maps the systems, permissions, APIs, handoffs, and
            review rules behind a PI firm&apos;s highest-value workflows. The
            result is a practical path from disconnected tools to controlled,
            firm-owned AI operations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Discuss your operating stack
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/engagement-process">See the engagement process</Link>
            </Button>
          </div>
        </section>
      </article>
    </div>
  );
}
