import Link from "next/link";
import {
  Award,
  Check,
  Clock3,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { WorkshopRegisterForm } from "@/app/workshops/workshop-register-form";
import ClickBeacon from "@/components/analytics/click-beacon";
import RevealPanel from "@/components/analytics/reveal-panel";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";

type ContentItem = {
  title: string;
  body: string;
};

type TimedItem = ContentItem & {
  time: string;
};

type ValueItem = ContentItem & {
  icon: "sparkles" | "users" | "file";
};

type FaqItem = {
  question: string;
  answer: string;
};

type OperationalWorkshopPageProps = {
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
  beaconPage: string;
  breadcrumbLabel: string;
  cohortLabel: string;
  headline: string;
  introduction: string;
  platformName: string;
  preview: {
    buttonLabel: string;
    description: string;
    step: string;
    promptLead: string;
    promptBody: string;
  };
  sessionFormat: TimedItem[];
  exercises: ContentItem[];
  practicalHeading: string;
  practicalDescription: string;
  valueHeading: string;
  values: ValueItem[];
  systemMapLabel: string;
  systemMap: ContentItem[];
  systemMapNote: string;
  deliverablesHeading: string;
  deliverablesDescription: string;
  deliverables: string[];
  registration: {
    product: string;
    roles: string[];
    defaultSystem: string;
    systemLabel: string;
    audience: string;
  };
  faqs: FaqItem[];
};

const valueIcons = {
  sparkles: Sparkles,
  users: Users,
  file: FileCheck2,
};

export function OperationalWorkshopPage({
  pageTitle,
  pageDescription,
  pageUrl,
  beaconPage,
  breadcrumbLabel,
  cohortLabel,
  headline,
  introduction,
  platformName,
  preview,
  sessionFormat,
  exercises,
  practicalHeading,
  practicalDescription,
  valueHeading,
  values,
  systemMapLabel,
  systemMap,
  systemMapNote,
  deliverablesHeading,
  deliverablesDescription,
  deliverables,
  registration,
  faqs,
}: OperationalWorkshopPageProps) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#page`,
      name: pageTitle,
      description: pageDescription,
      url: pageUrl,
      isPartOf: `${SITE_URL}/#website`,
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
          name: "Workshops",
          item: `${SITE_URL}/workshops`,
        },
        { "@type": "ListItem", position: 3, name: pageTitle, item: pageUrl },
      ],
    },
  ];

  return (
    <div className="bg-black pb-24">
      <ClickBeacon page={beaconPage} />
      <JsonLd data={structuredData} />

      <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#04150d] via-[#020d08] to-black">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ff41]/60 to-transparent" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link href="/workshops" className="transition hover:text-primary">
                Workshops
              </Link>
              <span className="text-primary/40">/</span>
              <span>{breadcrumbLabel}</span>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#00ff41]">
              A working session, not a webinar
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              {headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/75 sm:text-lg">
              {introduction}
            </p>

            <div className="mt-7 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { icon: Clock3, label: "60 minutes" },
                { icon: Users, label: "10 firms max" },
                { icon: ShieldCheck, label: "Sanitized files" },
                { icon: Award, label: "Certificate" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-xs font-medium text-foreground/70"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#00ff41]" />
                  {label}
                </div>
              ))}
            </div>

            <a
              href="#format"
              className="mt-7 inline-flex items-center text-sm font-semibold text-foreground/65 underline decoration-white/20 underline-offset-4 transition hover:text-[#00ff41]"
            >
              See the 60-minute format ↓
            </a>
          </div>

          <RevealPanel
            buttonLabel={preview.buttonLabel}
            eyebrow="Workshop preview"
            description={preview.description}
            helperText="No email or registration required"
            step={preview.step}
            featured
            showCopyButton
            ctaHref="#register"
          >
            <div
              id="instruction"
              className="rounded-xl border border-white/10 bg-black/45 p-5 font-mono text-sm leading-relaxed text-foreground/80"
            >
              <p className="text-[#00ff41]"># {preview.promptLead}</p>
              <p className="mt-3">{preview.promptBody}</p>
            </div>
          </RevealPanel>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 pt-14 text-foreground/85 sm:px-6">
        <section id="format" className="scroll-mt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00ff41]">
            The participant experience
          </p>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold text-foreground">
                What happens during the hour
              </h2>
              <p className="mt-3 max-w-2xl text-foreground/65">
                Participants do the work themselves. The session moves from safe
                use to tested instructions to a repeatable team standard.
              </p>
            </div>
            <span className="text-sm text-foreground/45">Live · small cohort · no product demo</span>
          </div>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {sessionFormat.map((item, index) => (
              <div
                key={item.time}
                className="grid grid-cols-[auto_1fr] gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00ff41]/10 text-sm font-bold text-[#00ff41]">
                  {index + 1}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#00ff41]/80">
                    {item.time}
                  </p>
                  <h3 className="mt-1 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00ff41]">
            The practical work
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">{practicalHeading}</h2>
          <p className="mt-3 max-w-3xl text-foreground/65">{practicalDescription}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {exercises.map((exercise, index) => (
              <div
                key={exercise.title}
                className="rounded-xl border border-white/10 bg-white/[0.025] p-5"
              >
                <span className="text-sm font-bold text-[#00ff41]">0{index + 1}</span>
                <h3 className="mt-3 font-semibold text-foreground">{exercise.title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/60">{exercise.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#04150d]/75 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00ff41]">
            Why this matters inside a {platformName} firm
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">{valueHeading}</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {values.map((item) => {
              const Icon = valueIcons[item.icon];
              return (
                <div key={item.title} className="rounded-xl border border-white/10 bg-black/30 p-5">
                  <Icon className="h-5 w-5 text-[#00ff41]" />
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">{item.body}</p>
                </div>
              );
            })}
          </div>

          <details className="group mt-6 rounded-xl border border-white/10 bg-black/25 p-5">
            <summary className="cursor-pointer list-none font-semibold text-foreground marker:hidden">
              <span className="flex items-center justify-between gap-4">
                {systemMapLabel}
                <span className="text-[#00ff41] transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {systemMap.map((item) => (
                <div key={item.title} className="rounded-lg border border-white/10 bg-black/25 p-4">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-foreground/45">{systemMapNote}</p>
          </details>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00ff41]">
              What participants leave with
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              {deliverablesHeading}
            </h2>
            <p className="mt-4 leading-7 text-foreground/65">{deliverablesDescription}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <ul className="space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/75">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00ff41]/10">
                    <Check className="h-3.5 w-3.5 text-[#00ff41]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="register"
          className="scroll-mt-24 rounded-2xl border border-[#00ff41]/25 bg-[#04150d] p-6 sm:p-8"
        >
          <div className="mb-6 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00ff41]">
              {cohortLabel}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Reserve a seat</h2>
            <p className="mt-3 text-sm leading-6 text-foreground/60">
              {registration.audience} Maximum ten firms per working session.
            </p>
          </div>
          <WorkshopRegisterForm
            product={registration.product}
            roles={registration.roles}
            defaultSystem={registration.defaultSystem}
            systemLabel={registration.systemLabel}
          />
        </section>

        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00ff41]">
            Questions answered
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">
            What to know before reserving a seat
          </h2>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-white/10 bg-white/[0.025] p-5"
              >
                <summary className="cursor-pointer list-none font-semibold text-foreground marker:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="shrink-0 text-[#00ff41] transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-foreground/60">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
