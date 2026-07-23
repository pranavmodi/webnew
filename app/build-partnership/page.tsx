import type { Metadata } from "next";
import {
  ArrowDown,
  Bot,
  Check,
  Code2,
  FileCheck2,
  GitBranch,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Link from "next/link";

import ClickBeacon from "@/components/analytics/click-beacon";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";

import { BuildPartnershipForm } from "./build-partnership-form";

const pageTitle = "AI Builder Program for PI Firm Owners";
const pageDescription =
  "A six-month, small-cohort program that helps personal injury firm owners build useful internal tools with AI coding agents such as Claude Code.";
const pageUrl = `${SITE_URL}/build-partnership`;

const facts = [
  ["6 months", "From first prompt to a deployed internal tool"],
  ["4 firms", "Direct feedback on every build"],
  ["No coding required", "Learn by directing an AI coding agent"],
  ["1 real tool", "Built around a problem inside your firm"],
];

const exampleTools = [
  {
    title: "Intake follow-up monitor",
    input: "Lead Docket export or intake spreadsheet",
    output:
      "A daily list of leads with no human response, too few attempts, or no assigned next step.",
  },
  {
    title: "Treatment and records chase list",
    input: "CASEpeer, Filevine, or case spreadsheet export",
    output:
      "Cases with a treatment gap, missing authorization, overdue request, or no provider response.",
  },
  {
    title: "Client-update queue",
    input: "Case status, last contact date, and upcoming milestone",
    output:
      "Clients due for an update, a draft message, and the source facts used to prepare it.",
  },
  {
    title: "Demand-readiness checker",
    input: "Folder contents and a firm-approved checklist",
    output:
      "Missing bills, records, wage documents, photos, or unresolved treatment questions before drafting starts.",
  },
  {
    title: "Lien and disbursement tracker",
    input: "Provider balances, offers, responses, and settlement data",
    output:
      "Open reductions, stale negotiations, missing confirmations, and matters blocking disbursement.",
  },
  {
    title: "Owner's operating dashboard",
    input: "Exports from intake, case management, phone, and marketing systems",
    output:
      "Response time, lead status, aging work, case movement, and exceptions that need the owner's attention.",
  },
];

const stages = [
  {
    period: "Month 1",
    title: "Choose a problem small enough to finish",
    body:
      "Bring one recurring annoyance from your firm. We turn it into a precise description of the inputs, rules, output, and examples of what “correct” looks like.",
    build:
      "A local prototype using sanitized sample data: usually a CSV, spreadsheet, PDF set, or copied folder.",
  },
  {
    period: "Month 2",
    title: "Learn to direct the coding agent",
    body:
      "Use Claude Code, Codex, or a similar agent to inspect files, propose a plan, make changes, explain what changed, and run tests. You learn what to approve and when to push back.",
    build:
      "A versioned tool that can repeat the first task on a fresh set of sample files.",
  },
  {
    period: "Month 3",
    title: "Turn firm knowledge into rules",
    body:
      "Add your actual definitions: what counts as a treatment gap, when a lead needs the owner, which documents make a demand ready, and which exceptions must never be automated.",
    build:
      "Firm-specific rules, test cases, source links, and a visible exception list.",
  },
  {
    period: "Month 4",
    title: "Connect it without replacing your case system",
    body:
      "Start with exports, email, or a watched folder. Use an API only when the vendor supports it and the access is justified. Document every system and field the tool can touch.",
    build:
      "A repeatable data path from the firm's current system into the tool and back to a person.",
  },
  {
    period: "Month 5",
    title: "Let one person use it on real work",
    body:
      "Pilot with one owner, paralegal, case manager, or intake specialist. Record wrong answers, missing information, confusing screens, and the steps people still do manually.",
    build:
      "A corrected pilot version with an audit trail and a short list of known limitations.",
  },
  {
    period: "Month 6",
    title: "Deploy it and learn how to change it",
    body:
      "Put the tool somewhere the firm can reliably use it. Practice adding one field, changing one rule, fixing one error, and rolling back a bad change with the coding agent.",
    build:
      "A deployed internal tool, source code, setup instructions, tests, and a backlog for the next version.",
  },
];

const capabilities = [
  {
    icon: Bot,
    title: "Give the agent a buildable instruction",
    body:
      "Replace “make intake better” with named inputs, rules, outputs, edge cases, and examples the agent can test.",
  },
  {
    icon: Code2,
    title: "Review work without becoming a programmer",
    body:
      "Ask the agent to explain files, changes, tests, and risks in plain English before you approve them.",
  },
  {
    icon: FileCheck2,
    title: "Test the tool against real PI examples",
    body:
      "Create examples that should pass, fail, escalate, or remain undecided, then rerun them after every change.",
  },
  {
    icon: GitBranch,
    title: "Keep a history and undo mistakes",
    body:
      "Use version control so every change is recorded and a broken version can be rolled back.",
  },
  {
    icon: ShieldCheck,
    title: "Keep client data out until the tool is ready",
    body:
      "Prototype with synthetic or sanitized files, review vendors and access, then introduce the minimum real data needed for the pilot.",
  },
  {
    icon: Wrench,
    title: "Know when to build, buy, or stop",
    body:
      "Build the small gap unique to your firm. Buy commodity software. Stop when maintenance or risk exceeds the value.",
  },
];

const faqs = [
  {
    question: "Do I need to know how to code?",
    answer:
      "No. You need to know the PI workflow and be willing to work through examples. The coding agent writes the code. You learn to define the job, review the plan, test the result, and decide whether a change is safe.",
  },
  {
    question: "Is this a course or a software-development service?",
    answer:
      "It is a guided build program. We teach the method, work beside you when the agent gets stuck, and review the architecture and safeguards. You remain involved enough to understand and change the tool.",
  },
  {
    question: "What AI coding tools will we use?",
    answer:
      "The method works with agentic coding tools such as Claude Code and Codex. We choose the tool based on the firm's environment and the build, and avoid making the program dependent on one vendor.",
  },
  {
    question: "Will the tool replace Filevine, CASEpeer, Lead Docket, or our CRM?",
    answer:
      "Usually not. Most first tools read an export, monitor a folder, prepare a queue, or fill a gap between existing systems. Direct API integration comes later, when the vendor supports it and the benefit justifies the access.",
  },
  {
    question: "Can we use client files?",
    answer:
      "Not at the start. Early versions use synthetic, sanitized, or redacted data. Before a real-data pilot, we review the AI vendor, hosting, retention, access, logging, and the minimum fields the tool actually needs.",
  },
  {
    question: "How much time does the owner need?",
    answer:
      "Plan on two live build sessions each month plus two to three hours a week during active building. You can involve an operations leader or technically curious staff member, but the owner should choose the problem and approve the rules.",
  },
  {
    question: "Who owns the tool?",
    answer:
      "The firm receives the source code, instructions, tests, and change history for the tool built during the program. Any third-party models, hosting, or APIs remain subject to their own terms and fees.",
  },
  {
    question: "What if I do not have a tool idea yet?",
    answer:
      "Bring a recurring task, spreadsheet, report, handoff, or question that consumes time. In month one we compare a few candidates and choose the smallest tool with a clear user and visible result.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Claude Code for lawyers",
    "AI coding agents for law firms",
    "build legal software with AI",
    "personal injury law firm automation",
    "PI law firm internal tools",
    "lawyer AI builder program",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: pageUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function BuildPartnershipPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalProgram",
      "@id": `${pageUrl}#program`,
      name: pageTitle,
      description: pageDescription,
      url: pageUrl,
      provider: { "@id": `${SITE_URL}/#organization` },
      timeToComplete: "P6M",
      occupationalCategory: "Personal injury law firm owner",
      teaches:
        "How to build, test, deploy, and maintain internal law-firm tools with AI coding agents",
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
        {
          "@type": "ListItem",
          position: 2,
          name: "AI Builder Program",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <div className="bg-black pb-24">
      <ClickBeacon page="build-partnership" />
      <JsonLd data={structuredData} />

      <section className="border-b border-primary/15 bg-[#03110b]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/75">
              For PI firm owners ready to build
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              Build the tools your firm keeps waiting for.
            </h1>
            <p className="mt-6 max-w-4xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              You know how a PI case should move. Learn to turn that knowledge
              into working software with AI coding agents.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              A six-month, four-firm program for owners who want to build
              internal tools themselves using Claude Code, Codex, or similar
              agents. No programming background required. Bring one real
              problem; leave with a deployed tool and the ability to improve it.
            </p>
            <Link
              href="#apply"
              className="mt-8 inline-flex min-h-11 items-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
            >
              Express interest
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid border-y border-primary/20 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map(([value, label]) => (
              <div
                key={value}
                className="border-b border-primary/15 px-0 py-5 sm:border-r sm:px-5 lg:border-b-0 first:pl-0 last:border-r-0"
              >
                <div className="text-xl font-semibold text-[#00ff41]">
                  {value}
                </div>
                <div className="mt-1 text-xs text-foreground/55">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
            Why PI owners
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            The hardest part is knowing what the tool should do.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-foreground/75">
          <p>
            You already know when an intake needs the owner, which missing
            record will stall a demand, why a client is about to call, and what
            must happen before a settlement can disburse. Most software vendors
            do not know those rules, and custom development used to be too slow
            and expensive for a small internal tool.
          </p>
          <p>
            AI coding agents change the division of labor. You describe the
            workflow, show examples, and judge whether the result is right. The
            agent writes and revises the code. The program teaches you how to
            direct that process without pretending the agent is infallible.
          </p>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#04150d]/55">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
              What you could build
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Small tools for gaps your current software leaves open.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/75">
              The first project should have one user, a known input, and an
              output you can check. It does not need to replace the case
              management system or become a commercial product.
            </p>
          </div>

          <div className="mt-10 grid gap-px border border-primary/20 bg-primary/20 md:grid-cols-2">
            {exampleTools.map((tool) => (
              <article key={tool.title} className="bg-[#03110b] p-6">
                <h3 className="text-xl font-semibold text-[#00ff41]">
                  {tool.title}
                </h3>
                <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="font-semibold text-primary/70">Reads</dt>
                    <dd className="mt-1 text-foreground/65">{tool.input}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-primary/70">Produces</dt>
                    <dd className="mt-1 text-foreground/75">{tool.output}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
            What you learn
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Not programming syntax. Builder judgment.
          </h2>
        </div>
        <div className="mt-10 grid gap-px border border-primary/20 bg-primary/20 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="bg-[#03110b] p-6">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-[#00ff41]">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                  {capability.body}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#04150d]/55">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
                Six-month path
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
                Build one tool. Learn a method you can repeat.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground/65">
                Every month ends with working software, written instructions, or
                a decision. You do not spend six months watching presentations.
              </p>
            </div>
            <div className="border-t border-primary/20">
              {stages.map((stage, index) => (
                <article
                  key={stage.title}
                  className="grid gap-4 border-b border-primary/20 py-7 sm:grid-cols-[120px_1fr]"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
                      {stage.period}
                    </span>
                    <div className="mt-2 text-sm text-foreground/35">
                      0{index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#00ff41]">
                      {stage.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                      {stage.body}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                      <span className="font-semibold text-primary">
                        You finish with:
                      </span>{" "}
                      {stage.build}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
            How the cohort works
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Four firms. Real screens. Real builds.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70">
            The group is small enough to review each tool in detail. Sessions
            use sanitized or synthetic examples until the tool and its data
            controls are ready for a limited real-world pilot.
          </p>
        </div>
        <div className="divide-y divide-primary/15 border-y border-primary/15">
          {[
            "Two live build sessions each month",
            "One 1:1 tool review each month",
            "Short self-paced exercises using your own sample workflow",
            "A shared library of build briefs, tests, and review checklists",
            "Two to three hours a week during active building",
            "Source code, tests, and setup instructions stay with your firm",
          ].map((item) => (
            <div
              key={item}
              className="flex gap-3 py-4 text-sm text-foreground/75"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#03110b]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
              The legal boundary
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Build quickly. Introduce client data slowly.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-foreground/75">
            <p>
              The first version should prove the logic without client data. Use
              synthetic matters, sanitized exports, or redacted documents.
            </p>
            <p>
              Before a real-data pilot, document the AI model, hosting,
              retention, access, logs, integrations, and the minimum fields the
              tool needs. Legal judgment, case acceptance, client advice, and
              settlement decisions remain with people.
            </p>
          </div>
        </div>
      </section>

      <section
        id="apply"
        className="scroll-mt-24 border-b border-primary/15 bg-[#04150d]/55"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
              Expression of interest
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              What tool does your firm wish existed?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/70">
              You can apply with a specific idea or one recurring task you want
              to examine. Solo owners and firms up to roughly 20 attorneys are
              welcome.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-foreground/55">
              We&apos;ll respond within three working days. The first
              conversation is to make sure the idea is small enough to build,
              useful enough to test, and safe enough for a first project.
            </p>
          </div>
          <BuildPartnershipForm />
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
          Before applying
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
          Practical questions
        </h2>
        <div className="mt-8 divide-y divide-primary/15 border-y border-primary/15">
          {faqs.map((faq) => (
            <article key={faq.question} className="py-6">
              <h3 className="text-lg font-semibold text-[#00ff41]">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
