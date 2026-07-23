import type { Metadata } from "next";
import { ArrowDown, Check, ShieldCheck } from "lucide-react";
import Link from "next/link";

import ClickBeacon from "@/components/analytics/click-beacon";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";

import { BuildPartnershipForm } from "./build-partnership-form";

const pageTitle = "AI Builder Program for PI Firm Owners";
const pageDescription =
  "Build a useful internal tool for your personal injury firm with AI coding agents. No programming background required.";
const pageUrl = `${SITE_URL}/build-partnership`;

const examples = [
  {
    title: "Intake monitor",
    body: "Flag serious leads waiting for a human response or a clear next step.",
  },
  {
    title: "Case chase list",
    body: "Find treatment gaps, missing records, and stalled provider requests.",
  },
  {
    title: "Demand checker",
    body: "Identify missing records, bills, photos, and wage documents before drafting.",
  },
  {
    title: "Owner dashboard",
    body: "See response time, aging work, case movement, and exceptions in one place.",
  },
];

const buildReasons = [
  {
    label: "Your rules",
    body: "Encode your escalation rules, checklists, and exceptions instead of accepting a generic workflow.",
  },
  {
    label: "Your control",
    body: "Keep the source code, tests, and instructions. Change the tool when the firm changes.",
  },
  {
    label: "Your stack",
    body: "Work across approved exports and APIs without replacing the systems your team already uses.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose one gap",
    body: "Define one user, one input, and one result you can verify.",
  },
  {
    number: "02",
    title: "Build with sample data",
    body: "Direct the coding agent while we help scope, test, and review the work.",
  },
  {
    number: "03",
    title: "Pilot with one person",
    body: "Use the tool on a narrow workflow and record every error and exception.",
  },
  {
    number: "04",
    title: "Deploy and own it",
    body: "Leave with working software, source code, tests, and setup instructions.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Claude Code for lawyers",
    "AI coding agents for law firms",
    "personal injury law firm automation",
    "PI law firm internal tools",
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
      occupationalCategory: "Personal injury law firm owner",
      teaches:
        "How to build, test, deploy, and maintain internal law-firm tools with AI coding agents",
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
    <div className="bg-black pb-20">
      <ClickBeacon page="build-partnership" />
      <JsonLd data={structuredData} />

      <section className="border-b border-primary/15 bg-[#03110b]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
            For personal injury firm owners
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
            Build the tools your firm keeps waiting for.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/75 sm:text-xl">
            Bring one workflow your software does not handle well. Learn to turn
            it into a working internal tool with Claude Code, Codex, or a
            similar coding agent.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/65">
            {["No coding required", "One real tool", "Source code stays with your firm"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                  {item}
                </span>
              ),
            )}
          </div>
          <Link
            href="#apply"
            className="mt-8 inline-flex min-h-11 items-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
          >
            Express interest
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
            Why this works now
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            You know the workflow. The agent can write the code.
          </h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-foreground/70">
          <p>
            PI firms run on rules vendors cannot see: when a lead needs the
            owner, what makes a demand ready, and which stalled case needs
            attention.
          </p>
          <p>
            AI coding agents make small, firm-specific tools practical. You
            define what correct looks like. The agent builds it. We help you
            scope the tool, test it, and deploy it safely.
          </p>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#04150d]/55">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
              What you could build
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Start with one narrow operational gap.
            </h2>
          </div>
          <div className="mt-9 grid gap-px border border-primary/20 bg-primary/20 sm:grid-cols-2 lg:grid-cols-4">
            {examples.map((example) => (
              <article key={example.title} className="bg-[#03110b] p-5">
                <h3 className="text-lg font-semibold text-[#00ff41]">
                  {example.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                  {example.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
            Why not wait for a vendor?
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Buy the core system. Build the gap that makes your firm different.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/70">
            Vendors must serve the common workflow. Your highest-value rules
            often live in the exceptions they will not prioritize.
          </p>
        </div>
        <div className="mt-9 grid border-y border-primary/20 md:grid-cols-3">
          {buildReasons.map((reason) => (
            <article
              key={reason.label}
              className="border-b border-primary/15 py-6 md:border-b-0 md:border-r md:px-6 first:pl-0 last:border-r-0"
            >
              <h3 className="text-lg font-semibold text-[#00ff41]">
                {reason.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                {reason.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#03110b]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            One tool. Four steps.
          </h2>
          <div className="mt-9 grid gap-px border border-primary/20 bg-primary/20 md:grid-cols-4">
            {steps.map((step) => (
              <article key={step.number} className="bg-[#04150d] p-5">
                <span className="text-xs font-semibold text-primary/55">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-[#00ff41]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex max-w-4xl gap-4 border-l-2 border-primary/40 pl-5">
            <ShieldCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-foreground/65">
              Start with synthetic or sanitized data. Introduce client data only
              after access, retention, logging, and human review are defined.
              Legal judgment stays with people.
            </p>
          </div>
        </div>
      </section>

      <section
        id="apply"
        className="scroll-mt-24 border-b border-primary/15 bg-[#04150d]/55"
      >
        <div className="mx-auto grid max-w-6xl gap-9 px-4 py-14 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
              Expression of interest
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              What tool does your firm wish existed?
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-foreground/65">
              A specific idea is not required. One recurring task is enough to
              start.
            </p>
          </div>
          <BuildPartnershipForm />
        </div>
      </section>

    </div>
  );
}
