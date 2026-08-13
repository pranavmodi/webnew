import { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Database,
  Gauge,
  Mail,
  PhoneCall,
  Settings2,
  Sparkles,
} from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const pageTitle = "Intake Agent for Personal Injury Firms";
const pageDescription =
  "Meet Possible Minds Intake Agent: a working AI-assisted intake system for PI firms that answers phone and web inquiries, captures the story, identifies priority matters, and works with the firm's CRM and intake team.";
const pageUrl = `${SITE_URL}/solutions/intake-agent`;

const liveCapabilities = [
  {
    icon: PhoneCall,
    eyebrow: "Every front door",
    title: "Phone, browser voice, and web forms",
    body:
      "A prospect can call the firm, speak from the website, or submit a form. Each route creates the same structured intake record and starts the same response workflow.",
  },
  {
    icon: Bot,
    eyebrow: "Natural conversation",
    title: "Story-first voice intake",
    body:
      "The assistant lets callers explain what happened, follows the conversation naturally, and asks only for important details that are still missing.",
  },
  {
    icon: Gauge,
    eyebrow: "Fast triage",
    title: "Priority and escalation signals",
    body:
      "Serious injuries, catastrophic events, treatment indicators, and people actively comparing firms can trigger faster human attention under firm-approved rules.",
  },
  {
    icon: Database,
    eyebrow: "Connected operations",
    title: "HubSpot and CRM collaboration",
    body:
      "Intake facts, contact details, priority, and a linked summary move into HubSpot. DocketSim provides a complete lead-management environment for demonstrations and testing.",
  },
  {
    icon: Mail,
    eyebrow: "Immediate response",
    title: "Acknowledgment email agent",
    body:
      "The firm can have the agent prepare an acknowledgment for review or send it automatically when a valid, confirmed email and contact consent are available.",
  },
  {
    icon: Activity,
    eyebrow: "Observable by design",
    title: "Transcripts, recordings, and tests",
    body:
      "Operators can inspect conversations, listen to recordings, review execution traces, and run repeatable behavioral scenarios before trusting a new configuration.",
  },
];

const journey = [
  {
    number: "01",
    title: "The prospect reaches out",
    body:
      "A caller or website visitor gets an immediate response instead of voicemail or a generic confirmation screen.",
  },
  {
    number: "02",
    title: "They tell their story",
    body:
      "The agent captures contact details, what happened, where and when it happened, injuries or treatment, and decision signals without forcing a rigid interview.",
  },
  {
    number: "03",
    title: "The right facts become structured",
    body:
      "The spoken conversation populates a live intake record. The prospect confirms the callback number and email separately before the call ends.",
  },
  {
    number: "04",
    title: "The firm gets a usable lead",
    body:
      "The lead arrives in the selected CRM with a readable summary, dedicated intake fields, priority evidence, and a link to the transcript and recording.",
  },
  {
    number: "05",
    title: "Automation yields to people",
    body:
      "Firm rules determine what the agent may do independently and when a serious or competitive matter should be put in front of a human quickly.",
  },
];

const controls = [
  "Choose the questions and objectives that guide the conversation.",
  "Define serious-injury, urgency, shopping, and human-review rules.",
  "Run acknowledgment email in draft-for-review or automatic-send mode.",
  "Publish versioned configurations and test them before callers encounter them.",
  "Keep the CRM as the operational record instead of creating a competing lead database.",
  "Review every transcript, recording, correction, delivery, and agent action.",
];

const roadmap = [
  {
    phase: "Next",
    title: "A faster path to the right human",
    body:
      "Turn priority detection into a complete human-response loop for the moments when personal attention wins the case.",
    items: [
      "Caller-requested and rule-triggered warm transfers",
      "On-call schedules with fallback routing and acknowledgment",
      "Consultation booking when immediate contact is unavailable",
      "Policy-controlled two-way SMS follow-up",
    ],
  },
  {
    phase: "Expanding",
    title: "Whole-firm call triage",
    body:
      "Move beyond new-lead intake so every inbound call reaches the person or next step most likely to resolve it.",
    items: [
      "Distinguish new prospects, existing clients, providers, courts, vendors, and referrals",
      "Verified CRM lookup for bounded existing-client questions",
      "Firm-specific case-fit, jurisdiction, and referral policies",
      "Additional languages and channel-specific call paths",
    ],
  },
  {
    phase: "Broadening",
    title: "Conversion and CRM depth",
    body:
      "Connect response activity to signed cases and show owners exactly where valuable opportunities are being lost.",
    items: [
      "Intake Performance Audit and SLA leak detection",
      "Conversion reporting by source, time, pathway, and outcome",
      "Production adapters for Clio Grow, Lead Docket, Filevine, and other firm systems",
      "Retainer, document, referral, and signed-client handoffs",
    ],
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI intake agent",
    "personal injury intake software",
    "AI phone intake for law firms",
    "after-hours legal intake",
    "personal injury lead response",
    "HubSpot legal intake integration",
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

export default function IntakeAgentPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      name: pageTitle,
      description: pageDescription,
      url: pageUrl,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${pageUrl}/#software`,
      name: "Possible Minds Intake Agent",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: pageDescription,
      url: pageUrl,
      provider: { "@id": `${SITE_URL}/#organization` },
    },
  ];

  return (
    <div className="bg-black pb-24">
      <JsonLd data={structuredData} />

      <section className="relative -mt-4 overflow-hidden border-b border-primary/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,_rgba(0,255,65,0.17),_rgba(0,0,0,0)_38%),linear-gradient(to_bottom,_#04150d,_#000_72%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 border border-primary/30 bg-black/65 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00ff41] shadow-[0_0_10px_#00ff41]" />
              Working product
            </div>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Meet <span className="text-[#00ff41]">Intake Agent.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/80 sm:text-xl">
              An AI-assisted front door for personal injury firms. It responds
              immediately, lets an injured person tell their story, organizes
              the facts, and helps serious opportunities reach the right human
              while intent is still high.
            </p>
            <p className="mt-5 max-w-2xl border-l-2 border-primary/55 pl-5 text-base leading-7 text-foreground/65">
              The agent handles the delay and repetition around intake. Your
              people make the relationship, judgment, and representation
              decisions.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="animate-glow">
                <Link
                  href="https://piweb.getpossibleminds.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Try the live intake experience
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/consult">
                  Discuss a pilot
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative border border-primary/25 bg-[#031009] p-4 shadow-[0_30px_100px_rgba(0,255,65,0.08)] sm:p-6">
            <div className="flex items-center justify-between border-b border-primary/15 pb-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary/70">
                  New voice intake
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Serious rear-end collision
                </p>
              </div>
              <span className="border border-[#00ff41]/30 bg-[#00ff41]/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#00ff41]">
                Urgent
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div className="max-w-[88%] border-l-2 border-white/20 bg-black/45 p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/45">
                  Prospect
                </p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  “I was hit from behind yesterday. My back is getting worse,
                  and I&apos;m trying to figure out what to do next.”
                </p>
              </div>
              <div className="ml-auto max-w-[88%] border-r-2 border-primary/60 bg-primary/10 p-4 text-right">
                <p className="font-mono text-[10px] uppercase tracking-wider text-primary/70">
                  Intake Agent
                </p>
                <p className="mt-2 text-sm leading-6 text-white/85">
                  “I&apos;m sorry you&apos;re dealing with that. Let&apos;s make sure the
                  intake team has what they need to respond quickly.”
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-px bg-primary/15 sm:grid-cols-3">
              {[
                ["24/7", "Phone and web"],
                ["Live", "HubSpot sync"],
                ["Human", "Escalation rules"],
              ].map(([value, label]) => (
                <div key={label} className="bg-black/85 p-4">
                  <p className="font-mono text-lg font-semibold text-[#00ff41]">
                    {value}
                  </p>
                  <p className="mt-1 text-[11px] text-white/50">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-primary/15 bg-[#020b07]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Available now
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              A working intake system, not a chatbot mockup.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg">
              The current product handles the first response, the conversation,
              the structured record, and the handoff evidence around a new PI
              inquiry.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-primary/15 bg-primary/15 md:grid-cols-2 lg:grid-cols-3">
            {liveCapabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="bg-[#031009] p-6 sm:p-7">
                  <div className="flex h-10 w-10 items-center justify-center border border-primary/25 bg-primary/10 text-[#00ff41]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-primary/65">
                    {capability.eyebrow}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/65">
                    {capability.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-primary/15 bg-black">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              One inquiry, end to end
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              What happens after someone reaches out.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/70">
              The system is designed around the moment a prospective client is
              ready to act—not around a collection of disconnected AI features.
            </p>
          </div>

          <div className="divide-y divide-primary/15 border-y border-primary/15">
            {journey.map((step) => (
              <div
                key={step.number}
                className="grid gap-3 py-7 sm:grid-cols-[64px_220px_1fr] sm:gap-5"
              >
                <span className="font-mono text-sm text-primary">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-foreground/65">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-primary/15 bg-[#020b07]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div className="border border-primary/20 bg-black/45 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Settings2 className="h-5 w-5 text-[#00ff41]" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Firm control
              </p>
            </div>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-white">
              The agent follows the firm&apos;s rules—not hidden defaults.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/70">
              Owners configure how intake should behave. Operators see the
              resulting work in the CRM. Technical traces remain available for
              review without cluttering the team&apos;s everyday workflow.
            </p>
          </div>

          <div className="grid gap-3">
            {controls.map((control) => (
              <div
                key={control}
                className="flex items-start gap-3 border border-primary/15 bg-[#031009] p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00ff41]" />
                <p className="text-sm leading-6 text-foreground/75">{control}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-primary/15 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-4 w-4" />
                Upcoming roadmap
              </div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                From new-lead intake to the intelligent front door of the firm.
              </h2>
            </div>
            <p className="text-base leading-7 text-foreground/65">
              This roadmap is sequenced with pilot firms and reflects product
              direction, not fixed delivery dates. Each layer will be tested as
              carefully as the current intake workflow before it is presented as
              live.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {roadmap.map((stage, index) => (
              <article
                key={stage.phase}
                className="relative overflow-hidden border border-primary/20 bg-[#031009] p-6"
              >
                <span className="absolute right-4 top-3 font-mono text-5xl text-primary/[0.08]">
                  0{index + 1}
                </span>
                <div className="inline-flex border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#00ff41]">
                  {stage.phase}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {stage.title}
                </h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-foreground/60">
                  {stage.body}
                </p>
                <ul className="mt-5 space-y-3 border-t border-primary/15 pt-5">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-6 text-foreground/75">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="relative overflow-hidden border border-primary/30 bg-gradient-to-br from-[#04150d] via-[#062116] to-black p-7 sm:p-10 lg:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#00ff41]/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                See the system work
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Test the client experience, then help shape what comes next.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/70">
                We are working with PI intake specialists and firm operators to
                make sure speed does not come at the cost of judgment, empathy,
                or human ownership.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg">
                <Link
                  href="https://piweb.getpossibleminds.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/consult">Request an intake audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
