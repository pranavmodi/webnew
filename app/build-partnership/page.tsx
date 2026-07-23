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

const toolIdeas = [
  ["Intake monitor", "Flag serious leads waiting for a human response."],
  ["Case chase list", "Find treatment gaps, missing records, and stalled work."],
  ["Demand checker", "Catch missing documents before drafting begins."],
  ["Owner dashboard", "Surface aging work and cases that need attention."],
];

const steps = [
  {
    number: "01",
    title: "Choose one gap",
    body: "Define one user, one input, and one result you can verify.",
  },
  {
    number: "02",
    title: "Build and test",
    body: "Direct the coding agent while we help scope and review the work.",
  },
  {
    number: "03",
    title: "Pilot and own it",
    body: "Deploy a narrow tool with source code, tests, and instructions.",
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
        "How to build, test, and deploy internal law-firm tools with AI coding agents",
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
            Turn one PI workflow into a working internal tool with an AI coding
            agent. No programming background required.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/65">
            {["One real tool", "Works with your current stack", "Your firm keeps the code"].map(
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

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
              Why build
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary sm:text-4xl">
              Vendors build the common workflow. Your advantage is in the
              exceptions.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-foreground/70">
            <p>
              You know when a lead needs the owner, what makes a demand ready,
              and which stalled case needs attention. A generic product does
              not know those rules.
            </p>
            <p>
              AI coding agents make narrow, firm-specific software practical.
              Keep your core systems. Build the missing layer around them, using
              your rules, with code you can inspect and change.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-px border border-primary/20 bg-primary/20 sm:grid-cols-2">
          {toolIdeas.map(([title, body]) => (
            <article key={title} className="bg-[#03110b] p-5">
              <h3 className="text-lg font-semibold text-[#00ff41]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                {body}
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
            One tool. Three steps.
          </h2>
          <div className="mt-9 grid gap-px border border-primary/20 bg-primary/20 md:grid-cols-3">
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
              Start with synthetic or sanitized data. Add client data only after
              access, retention, logging, and human review are defined. Legal
              judgment stays with people.
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
              A specific idea is not required. One recurring task is enough.
            </p>
          </div>
          <BuildPartnershipForm />
        </div>
      </section>
    </div>
  );
}
