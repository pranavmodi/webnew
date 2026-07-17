import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Gauge,
  Layers3,
  Network,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/constants";

const pageTitle = "AI Intake and Operating Systems for Personal Injury Firms";
const pageDescription =
  "Possible Minds helps PI firms recover intake revenue by using AI to identify priority matters, brief the right human, and remove delays around response and follow-up.";
const pageUrl = SITE_URL;

const intakeLeaks = [
  {
    title: "Missed and after-hours calls",
    body:
      "High-intent prospects reach voicemail or wait until the next business day while faster firms respond.",
  },
  {
    title: "Slow first response",
    body:
      "Paid web leads cool before an intake coordinator can make contact.",
  },
  {
    title: "Inconsistent qualification",
    body:
      "Urgency, severity, shopping signals, and attorney-review triggers are captured unevenly.",
  },
  {
    title: "Weak follow-up",
    body:
      "Good prospects disappear because the next call, text, or email depends on staff memory.",
  },
  {
    title: "Broken handoffs",
    body:
      "Lead details do not move cleanly between the phone system, intake team, CRM, and attorney.",
  },
  {
    title: "Unsigned retainers",
    body:
      "A qualified prospect says yes, but document delivery, questions, and reminders stall the signature.",
  },
];

const implementationSteps = [
  {
    number: "01",
    title: "Diagnose",
    body: "Map one intake path and establish where revenue is leaking.",
  },
  {
    number: "02",
    title: "Connect",
    body: "Work with the phone, forms, email, Lead Docket, Filevine, or other systems already in place.",
  },
  {
    number: "03",
    title: "Launch",
    body: "Deploy one bounded workflow with clear human-review and escalation rules.",
  },
  {
    number: "04",
    title: "Measure",
    body: "Track time to human contact, priority escalation, retainers, and signed cases.",
  },
  {
    number: "05",
    title: "Expand",
    body: "Turn repeated implementation knowledge into a broader operating layer.",
  },
];

const lifecycle = [
  "Intake",
  "Case opening",
  "Records and treatment",
  "Client communication",
  "Demand preparation",
  "Settlement and liens",
];

const comparisonRows = [
  {
    topic: "Scope",
    typical: "A feature inside one vendor product",
    possible: "A workflow across the firm’s existing stack",
  },
  {
    topic: "Behavior",
    typical: "Defined by the vendor",
    possible: "Defined by the firm’s rules and escalation standards",
  },
  {
    topic: "Data",
    typical: "Useful inside one application",
    possible: "Controlled execution across authorized systems",
  },
  {
    topic: "Implementation",
    typical: "Generic configuration",
    possible: "PI-specific workflow design and integration",
  },
  {
    topic: "Learning",
    typical: "Remains inside the product",
    possible: "Preserved in firm-owned rules, review history, and logs",
  },
];

const controls = [
  {
    icon: ShieldCheck,
    title: "Least-privilege access",
    body:
      "Each workflow receives only the data and actions required for its job.",
  },
  {
    icon: FileCheck2,
    title: "Human-review thresholds",
    body:
      "Sensitive, consequential, or low-confidence actions return to staff.",
  },
  {
    icon: Network,
    title: "Explicit vendor boundaries",
    body:
      "The firm can see which systems receive data and where operational knowledge lives.",
  },
  {
    icon: Layers3,
    title: "Complete action history",
    body:
      "Inputs, outputs, exceptions, approvals, and automated actions remain traceable.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI intake for personal injury firms",
    "personal injury intake automation",
    "AI systems for PI law firms",
    "law firm intake conversion",
    "Filevine intake automation",
    "Lead Docket automation",
    "personal injury workflow automation",
    "firm-owned AI systems",
  ],
  alternates: {
    canonical: pageUrl,
  },
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

export default function Home() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      name: pageTitle,
      description: pageDescription,
      url: pageUrl,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}/#intake-service`,
      name: "AI intake and operating systems for personal injury firms",
      serviceType:
        "Personal injury intake automation and firm-owned AI workflow systems",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      description: pageDescription,
      url: pageUrl,
    },
  ];

  return (
    <div className="bg-black pb-24">
      <JsonLd data={structuredData} />
      <Hero />

      <section className="border-b border-primary/15 bg-[#031009]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase text-primary">
              The intake revenue leak
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Your marketing creates the opportunity. Intake determines whether
              it becomes revenue.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg">
              Most firms do not have one catastrophic intake failure. They have
              several small delays and handoff problems that compound across
              every lead source.
            </p>
          </div>

          <div className="divide-y divide-primary/15 border-y border-primary/15">
            {intakeLeaks.map((leak, index) => (
              <div
                key={leak.title}
                className="grid gap-3 py-6 sm:grid-cols-[52px_220px_1fr] sm:gap-5"
              >
                <span className="font-mono text-sm text-primary">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {leak.title}
                </h3>
                <p className="text-sm leading-7 text-foreground/65">
                  {leak.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-primary/15 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-primary">
              Minimal disruption
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Improve intake without replacing the systems your team already
              uses.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg">
              The first workflow is deliberately narrow: measurable impact,
              limited integration, clear human review, and a short path to
              value.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-primary/15 bg-primary/15 sm:grid-cols-5">
            {implementationSteps.map((step) => (
              <div key={step.number} className="min-h-52 bg-[#031009] p-5">
                <span className="font-mono text-sm text-primary">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/65">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/engagement-process">See how an engagement works</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/personal-injury/intake-automation">
                Explore rapid intake response
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid overflow-hidden border border-primary/20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[360px] lg:min-h-[520px]">
            <Image
              src="/blog/law-case-study.jpg"
              alt="Personal injury law firm case study"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-px bg-white/15">
              {[
                ["34%", "More signed cases"],
                ["<90s", "Lead response time"],
              ].map(([value, label]) => (
                <div key={label} className="bg-black/85 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-semibold text-[#00ff41]">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/70">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[#031009] p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase text-primary">
              Personal injury case study
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              The firm had leads. It needed an intake system that could keep up.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/70">
              A 15-attorney Southern California plaintiff firm was losing
              prospects to competitors that responded faster. We deployed rapid
              outreach and follow-up orchestration around the existing intake
              team so qualified prospects reached people while intent was high.
            </p>
            <div className="mt-7 space-y-3">
              {[
                "Qualified prospects reached human intake while intent was high.",
                "Follow-up no longer depended on staff memory.",
                "High-value matters were surfaced before the opportunity cooled.",
                "Activity flowed back into the existing intake process.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm leading-6 text-foreground/75">{item}</p>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-8 w-fit">
              <Link href="/law-case-study">
                Read the full case study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#031009]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-primary">
              The larger system
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Intake is where we start. It is not where the system ends.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg">
              Each workflow teaches the system more about the firm&apos;s rules,
              priorities, escalation standards, and exceptions. Over time,
              isolated automation becomes a firm-owned execution layer across
              the case lifecycle.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-primary/15 sm:grid-cols-2 lg:grid-cols-6">
            {lifecycle.map((stage, index) => (
              <div key={stage} className="min-h-36 bg-black p-5">
                <span className="font-mono text-xs text-primary">
                  0{index + 1}
                </span>
                <p className="mt-5 text-base font-semibold leading-6 text-white">
                  {stage}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/personal-injury"
              className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-[#00ff41]"
            >
              Explore PI systems across the case lifecycle
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-primary">
            The product difference
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Your firm needs an execution layer, not another isolated AI feature.
          </h2>
        </div>

        <div className="mt-10 overflow-x-auto border-y border-primary/20">
          <table className="min-w-[760px] w-full text-left">
            <thead>
              <tr className="border-b border-primary/20 text-sm text-primary">
                <th className="px-4 py-4 font-semibold">Dimension</th>
                <th className="px-4 py-4 font-semibold">Typical vendor AI</th>
                <th className="px-4 py-4 font-semibold">Possible Minds</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.topic} className="border-b border-primary/10">
                  <td className="px-4 py-5 font-semibold text-white">
                    {row.topic}
                  </td>
                  <td className="px-4 py-5 text-sm leading-6 text-foreground/60">
                    {row.typical}
                  </td>
                  <td className="px-4 py-5 text-sm leading-6 text-foreground/80">
                    {row.possible}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#031009]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">
              Automation with boundaries
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Move faster without handing the firm to a black box.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/70">
              PI files contain medical records, client confidences, settlement
              details, and privileged strategy. The architecture must preserve
              control as automation expands.
            </p>
            <Link
              href="/personal-injury/vendor-risk-governance"
              className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition hover:text-[#00ff41]"
            >
              Review our vendor-risk approach
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-px bg-primary/15 sm:grid-cols-2">
            {controls.map((control) => {
              const Icon = control.icon;
              return (
                <div key={control.title} className="min-h-52 bg-black p-6">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {control.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/65">
                    {control.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid border border-primary/20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase text-primary">
              Production-scale proof
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              The same operating pattern handles hundreds of daily workflows.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/70">
              Possible Minds runs the automation behind Precise Imaging&apos;s
              operations. The system triages roughly 600 inbound emails a day,
              auto-handles about 73% of the volume, and keeps reviewed workflow
              knowledge inside the company.
            </p>
            <div className="mt-7 flex gap-8">
              <div>
                <p className="text-3xl font-semibold text-[#00ff41]">600</p>
                <p className="mt-1 text-xs text-foreground/60">Emails per day</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-[#00ff41]">73%</p>
                <p className="mt-1 text-xs text-foreground/60">Auto-handled</p>
              </div>
            </div>
            <Button asChild size="lg" variant="outline" className="mt-8 w-fit">
              <Link href="/healthcare-case-study">Read the scale proof</Link>
            </Button>
          </div>
          <div className="relative min-h-[340px] lg:min-h-[480px]">
            <Image
              src="/blog/precise-mri.jpg"
              alt="Medical imaging operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="border-y border-primary/20 bg-[#031009]">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <div className="mx-auto flex h-12 w-12 items-center justify-center border border-primary/30 bg-black">
            <Gauge className="h-5 w-5 text-primary" />
          </div>
          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            See where your intake operation is losing signed cases.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">
            We will map one intake path, identify the measurable leaks, and show
            what can be improved without replacing your existing stack.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/consult">
                Request an intake audit
                <PhoneCall className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/engagement-process">See the engagement process</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
