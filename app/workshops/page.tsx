import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Check,
  Clock3,
  Code2,
  FileSearch,
  FolderKanban,
  PhoneCall,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

import ClickBeacon from "@/components/analytics/click-beacon";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";

const pageTitle = "Hands-On AI Workshops for Personal Injury Firm Teams";
const metaTitle = "Free AI Workshops for PI Firm Teams";
const pageDescription =
  "Free 60-minute AI working sessions for PI intake specialists, case managers, and litigation paralegals using Lead Docket, Filevine, or CASEpeer.";
const pageUrl = `${SITE_URL}/workshops`;

const workshops = [
  {
    slug: "ai-for-lead-docket-intake-specialists",
    role: "Intake specialists and intake managers",
    platform: "Lead Docket",
    icon: PhoneCall,
    headline: "Work the next serious lead before it goes cold.",
    description:
      "Use a sanitized PI lead queue to identify urgency, prepare the human closer, recover stalled prospects, and expose gaps between inquiry and signed case.",
    outputs: [
      "Hot-lead triage instruction",
      "Attorney-ready brief",
      "Stalled-lead follow-up sequence",
    ],
  },
  {
    slug: "ai-for-filevine-case-managers",
    role: "Case managers and records staff",
    platform: "Filevine",
    icon: FolderKanban,
    headline: "Find the case that stopped moving.",
    description:
      "Work through sanitized medical and case materials to build chronologies, surface treatment gaps, prepare client updates, and create records-chasing actions.",
    outputs: [
      "Medical chronology instruction",
      "Treatment-gap exception list",
      "Records and client-update playbook",
    ],
  },
  {
    slug: "ai-for-casepeer-litigation-paralegals",
    role: "Litigation paralegals and litigation support",
    platform: "CASEpeer",
    icon: FileSearch,
    headline: "Turn a litigation packet into source-linked control.",
    description:
      "Use a sanitized litigation file to build a discovery matrix, deposition digest, deadline exception sweep, evidence index, and attorney-ready status memo.",
    outputs: [
      "Source-linked discovery matrix",
      "Deposition digest template",
      "Deadline and evidence checks",
    ],
  },
];

const sessionFormat = [
  {
    time: "0-10",
    title: "Set the boundary",
    body:
      "Name what AI may organize or draft, what a person must verify, and which legal or business decisions remain outside the exercise.",
  },
  {
    time: "10-20",
    title: "Build the instruction",
    body:
      "Replace a vague prompt with named sources, required output, missing-information rules, and conditions for human escalation.",
  },
  {
    time: "20-50",
    title: "Work the sample",
    body:
      "Run the instruction on sanitized PI material, inspect the result, find unsupported claims, and correct the weak parts.",
  },
  {
    time: "50-60",
    title: "Save the team standard",
    body:
      "Turn the strongest version into a reusable instruction, checklist, or handoff the team can test again after the session.",
  },
];

const faqs = [
  {
    question: "Are the workshops really free?",
    answer:
      "Yes. The sessions are free and contain no product demo. If a workshop exposes a larger workflow the firm later wants help implementing, that is a separate and optional conversation.",
  },
  {
    question: "Will participants use real client or prospective-client data?",
    answer:
      "No. Exercises use sanitized sample leads, records, and litigation materials. Participants should not upload confidential, privileged, protected-health, or prospective-client information to an unapproved AI tool.",
  },
  {
    question: "Do we need to use the named platform?",
    answer:
      "The exercises and terminology are anchored to Lead Docket, Filevine, or CASEpeer. A person using a similar system can still attend when their job and workflow match, and can enter their actual system during registration.",
  },
  {
    question: "Is this official vendor training?",
    answer:
      "No. Possible Minds runs these independent working sessions. They focus on the operating rules around each role and platform, not vendor certification or an exhaustive product tutorial.",
  },
  {
    question: "Is there a certificate or CLE credit?",
    answer:
      "Participants who complete the session receive a personalized certificate of completion. It records participation and is not CLE credit.",
  },
  {
    question: "When is the next session?",
    answer:
      "Register for the relevant track and we will email the next available cohort dates. Cohorts are capped at ten firms so participants can work through the exercises rather than watch a presentation.",
  },
  {
    question: "Should a firm owner attend a workshop or the builder program?",
    answer:
      "Choose a workshop when a staff member wants a role-specific AI playbook for work they already do. Choose the AI Builder Program when the owner wants to create and deploy a new internal software tool with a coding agent.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "AI workshop for personal injury law firms",
    "AI training for PI intake specialists",
    "AI for Filevine case managers",
    "AI for Lead Docket intake",
    "AI for CASEpeer paralegals",
    "personal injury legal AI training",
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

export default function WorkshopsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#page`,
      name: pageTitle,
      description: pageDescription,
      url: pageUrl,
      hasPart: workshops.map((workshop) => ({
        "@type": "WebPage",
        name: `${workshop.role}: ${workshop.platform} AI workshop`,
        url: `${pageUrl}/${workshop.slug}`,
      })),
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
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Workshops", item: pageUrl },
      ],
    },
  ];

  return (
    <div className="bg-black pb-24">
      <ClickBeacon page="workshops-hub" />
      <JsonLd data={structuredData} />

      <section className="border-b border-primary/15 bg-[#03110b]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
              Free working sessions for PI firms
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              Choose the job. Work the actual queue.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              Sixty-minute, small-cohort workshops where PI staff use sanitized
              leads, case materials, or litigation files to build AI
              instructions for the work on their desk. No webinar. No product
              demo. Participants do the work and keep the playbook.
            </p>
            <Link
              href="#tracks"
              className="mt-8 inline-flex min-h-11 items-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
            >
              Choose a workshop
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid border-y border-primary/20 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock3, value: "60 minutes", label: "Live working session" },
              { icon: Users, value: "10 firms", label: "Maximum per cohort" },
              { icon: ShieldCheck, value: "Sanitized", label: "No client files required" },
              { icon: Award, value: "Certificate", label: "Completion, not CLE" },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={value}
                className="border-b border-primary/15 py-5 sm:border-r sm:px-5 lg:border-b-0 first:pl-0 last:border-r-0"
              >
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                <div className="mt-3 text-lg font-semibold text-[#00ff41]">
                  {value}
                </div>
                <div className="mt-1 text-xs text-foreground/50">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tracks"
        className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
            Choose by role
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            The workshop should match the participant&apos;s next day at work.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70">
            Each track uses the language, source material, handoffs, and review
            boundaries of one PI role. Select the job first; the platform anchor
            keeps the examples concrete.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {workshops.map((workshop) => {
            const Icon = workshop.icon;
            return (
              <article
                key={workshop.slug}
                className="flex min-h-full flex-col rounded-lg border border-primary/20 bg-[#04150d] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <span className="border border-primary/20 px-2.5 py-1 text-xs font-semibold text-primary/75">
                    {workshop.platform}
                  </span>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary/60">
                  {workshop.role}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-snug text-[#00ff41]">
                  {workshop.headline}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/65">
                  {workshop.description}
                </p>
                <div className="mt-6 border-t border-primary/15 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/45">
                    Leave with
                  </p>
                  <ul className="mt-3 space-y-3">
                    {workshop.outputs.map((output) => (
                      <li
                        key={output}
                        className="flex gap-2 text-sm text-foreground/70"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{output}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/workshops/${workshop.slug}`}
                  className="mt-7 inline-flex min-h-11 items-center justify-between gap-3 border-t border-primary/20 pt-5 text-sm font-semibold text-primary transition hover:text-[#00ff41]"
                >
                  Details and registration
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#04150d]/55">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
              The participant experience
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              One hour from vague prompt to reusable team instruction.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-foreground/60">
              Participants work on the sample themselves. The facilitator
              explains the boundary, reviews the result, and helps turn the
              strongest version into something the team can test again.
            </p>
          </div>
          <div className="border-t border-primary/20">
            {sessionFormat.map((step, index) => (
              <article
                key={step.time}
                className="grid gap-3 border-b border-primary/20 py-6 sm:grid-cols-[72px_190px_1fr]"
              >
                <span className="font-mono text-xs text-primary/55">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/65">
                    {step.time} min
                  </p>
                  <h3 className="mt-2 font-semibold text-[#00ff41]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-foreground/65">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
            Safe by design
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Practice the method without exposing a matter.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70">
            Every exercise uses sanitized material. The goal is to learn how to
            structure, test, verify, and escalate AI-assisted work before a firm
            decides whether any approved tool should touch real information.
          </p>
        </div>
        <div className="grid gap-px border border-primary/20 bg-primary/20 sm:grid-cols-2">
          <div className="bg-[#03110b] p-6">
            <h3 className="font-semibold text-[#00ff41]">Inside the session</h3>
            <ul className="mt-5 space-y-3 text-sm text-foreground/70">
              {[
                "Sanitized PI materials",
                "Role-specific exercises",
                "Source and verification rules",
                "Human escalation boundaries",
                "Reusable team assets",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#03110b] p-6">
            <h3 className="font-semibold text-foreground/60">
              Outside the session
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-foreground/55">
              {[
                "Real client or lead files",
                "Legal advice or case acceptance",
                "Final deadline authority",
                "Vendor certification",
                "CLE credit",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-px w-4 shrink-0 bg-foreground/25" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#03110b]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
              For firm owners
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Want to build the tool, not only the instruction?
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-foreground/75">
              The workshops help staff use AI inside an existing role. The PI
              Owner AI Builder Program is different: owners spend six months
              building and deploying an internal tool with Claude Code, Codex,
              or a similar coding agent.
            </p>
            <div className="mt-6 grid gap-px border border-primary/20 bg-primary/20 sm:grid-cols-2">
              <div className="bg-[#04150d] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/60">
                  Workshop
                </p>
                <p className="mt-3 text-sm text-foreground/70">
                  60 minutes · role-specific playbook · existing workflow
                </p>
              </div>
              <div className="bg-[#04150d] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/60">
                  Builder Program
                </p>
                <p className="mt-3 text-sm text-foreground/70">
                  6 months · working internal software · source code and tests
                </p>
              </div>
            </div>
            <Link
              href="/build-partnership"
              className="mt-6 inline-flex min-h-11 items-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
            >
              Explore the AI Builder Program
              <Code2 className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
          Before registering
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
          Practical questions
        </h2>
        <div className="mt-8 divide-y divide-primary/15 border-y border-primary/15">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="cursor-pointer list-none font-semibold text-[#00ff41] marker:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span className="shrink-0 text-primary transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/65">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
