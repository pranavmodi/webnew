import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_NAME, SITE_URL } from "@/lib/constants";

const pageTitle = `PI Intake Case Study: Faster Human Response | ${SITE_NAME}`;
const pageDescription =
  "How an anonymized Southern California PI firm used transparent AI-assisted intake to acknowledge web leads, brief its team, and escalate serious matters without replacing human judgment.";
const pageUrl = `${SITE_URL}/law-case-study`;

const workflow = [
  {
    number: "01",
    title: "Capture the inquiry",
    body:
      "A web form, missed call, or after-hours inquiry enters one tracked intake queue instead of waiting in an inbox.",
  },
  {
    number: "02",
    title: "Respond transparently",
    body:
      "An AI assistant identifies itself, acknowledges the inquiry, and collects only the essential facts needed for routing.",
  },
  {
    number: "03",
    title: "Prepare the human",
    body:
      "The system structures the incident, injury, urgency, and shopping signals into a concise, call-ready brief.",
  },
  {
    number: "04",
    title: "Escalate the right matter",
    body:
      "Serious or competitive matters alert the appropriate intake closer or lawyer. The human owns empathy, judgment, and the close.",
  },
  {
    number: "05",
    title: "Keep follow-up moving",
    body:
      "Every attempt, handoff, retainer step, and outcome is written back to the firm's intake process for review and measurement.",
  },
];

const boundaries = [
  "The AI identifies itself; it does not pretend to be a person.",
  "It does not give legal advice or decide whether the firm accepts a case.",
  "High-value and emotionally sensitive conversations move to a human.",
  "The firm controls scripts, escalation rules, access, and review thresholds.",
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
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

export default function LawCaseStudyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    description: pageDescription,
    url: pageUrl,
    publisher: { "@id": `${SITE_URL}/#organization` },
    about: {
      "@type": "Service",
      name: "AI-assisted rapid intake response for personal injury firms",
    },
  };

  return (
    <div className="bg-black pb-24">
      <JsonLd data={structuredData} />

      <section className="relative flex min-h-[70svh] items-end overflow-hidden border-b border-primary/20">
        <Image
          src="/blog/law-case-study.jpg"
          alt="Personal injury intake team reviewing a new inquiry"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-y-0 left-0 w-full bg-black/25 lg:w-[68%]" />

        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 lg:pb-20">
          <p className="text-sm font-semibold uppercase text-primary">
            Anonymized PI intake deployment
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Faster response without putting a machine between the firm and the
            client.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            A Southern California plaintiff firm needed to stop after-hours web
            leads from sitting unseen. Possible Minds built a transparent
            response and escalation layer around its existing intake team.
          </p>
        </div>
      </section>

      <section className="border-b border-primary/15 bg-[#031009]">
        <div className="mx-auto grid max-w-6xl gap-px bg-primary/15 sm:grid-cols-3">
          {[
            ["<90 sec", "Automated first-response target"],
            ["24/7", "Inquiry capture and routing"],
            ["Human-led", "Evaluation, trust, and case acceptance"],
          ].map(([value, label]) => (
            <div key={label} className="min-h-40 bg-[#031009] p-6 sm:p-8">
              <p className="text-3xl font-semibold text-[#00ff41]">{value}</p>
              <p className="mt-3 text-sm leading-6 text-foreground/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-primary">
            The operating problem
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Marketing created demand. The staffed intake window determined who
            received it.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
          <p>
            Web leads arrived at night and during call spikes, when the intake
            team was least able to respond. By the next staffed window, a serious
            prospect could already be speaking with another firm.
          </p>
          <p>
            The answer was not to make a bot act like a lawyer. It was to remove
            the delay around the people who already knew how to listen, evaluate,
            and earn trust.
          </p>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#031009]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-primary">
              The deployed workflow
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Automate the wait, then make the human conversation better.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-primary/15 border-y border-primary/15">
            {workflow.map((step) => (
              <div
                key={step.number}
                className="grid gap-3 py-7 sm:grid-cols-[64px_240px_1fr] sm:gap-6"
              >
                <span className="font-mono text-sm text-primary">{step.number}</span>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-7 text-foreground/70">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase text-primary">
            What changed
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            The firm gained a measurable path from inquiry to human response.
          </h2>
          <div className="mt-8 space-y-5">
            {[
              {
                icon: Clock3,
                text: "Every inquiry receives a timestamped response path instead of waiting for staff discovery.",
              },
              {
                icon: FileCheck2,
                text: "The responding person receives the facts and escalation reason before calling or texting.",
              },
              {
                icon: UserRoundCheck,
                text: "Serious matters reach the people responsible for judgment and conversion.",
              },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-4">
                <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-7 text-foreground/70">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-primary/20 bg-[#031009] p-7 sm:p-9">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-white">Evidence note</h2>
          </div>
          <p className="mt-5 text-sm leading-7 text-foreground/70">
            This client remains anonymous. The operational measure available for
            this implementation is the interval from system receipt of an inquiry
            to the first automated outbound attempt. The workflow was configured
            for that action to begin in under 90 seconds.
          </p>
          <p className="mt-4 text-sm leading-7 text-foreground/70">
            The previously published conversion, revenue, satisfaction, and
            screening figures have been removed because the public case study did
            not include a reproducible baseline or supporting dataset. The
            90-second figure is an operating target, not a promise that an attorney
            will always make contact within that window.
          </p>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#031009]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">
              Guardrails
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Speed is useful only when it protects trust.
            </h2>
          </div>
          <div className="divide-y divide-primary/15 border-y border-primary/15">
            {boundaries.map((boundary) => (
              <div key={boundary} className="flex items-start gap-3 py-5">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm leading-7 text-foreground/75">{boundary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <p className="text-sm font-semibold uppercase text-primary">
          Intake Revenue Audit
        </p>
        <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
          Find the delay between your next inquiry and the right human response.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">
          We will map one intake path, establish the baseline, and identify the
          smallest measurable workflow that can recover qualified opportunities.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href={CALENDLY_URL}>
            Request an intake revenue audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
