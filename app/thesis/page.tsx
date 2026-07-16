import { Metadata } from "next";
import {
  ArrowRight,
  Blocks,
  ChartNoAxesCombined,
  CircleDollarSign,
  Database,
  Gauge,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_URL } from "@/lib/constants";

const pageTitle = "Our Thesis: The AI Operating Layer for Personal Injury Firms";
const pageDescription =
  "Why Possible Minds is starting with intake revenue recovery, building firm-owned AI systems, and expanding across the personal injury case lifecycle.";
const pageUrl = `${SITE_URL}/thesis`;

const thesisPoints = [
  {
    icon: CircleDollarSign,
    title: "Aligned economics",
    body:
      "Personal injury firms work on contingency. Better response, conversion, case velocity, and outcomes can translate directly into firm revenue.",
  },
  {
    icon: Database,
    title: "An execution gap",
    body:
      "Legal software is good at storing leads, matters, documents, and tasks. It is less capable at coordinating work across systems and completing it.",
  },
  {
    icon: Gauge,
    title: "A measurable wedge",
    body:
      "Intake sits where expensive demand becomes signed cases. Speed, persistence, handoffs, and conversion can be measured without rebuilding the firm.",
  },
];

const marketGap = [
  {
    label: "Systems of record",
    detail: "Store leads, matters, notes, documents, tasks, and status.",
  },
  {
    label: "Point AI features",
    detail: "Summarize, draft, transcribe, or answer inside one product.",
  },
  {
    label: "What firms still coordinate",
    detail:
      "Calls, email, follow-up, handoffs, vendors, documents, exceptions, and human review across the full workflow.",
  },
];

const wedgeReasons = [
  {
    title: "Minimal disruption",
    body:
      "The system can begin at the edge of the existing stack, then write qualified activity back into tools such as Lead Docket and Filevine.",
  },
  {
    title: "Fast time to value",
    body:
      "A firm can improve first response, after-hours coverage, follow-up discipline, and handoffs before attempting a broader transformation.",
  },
  {
    title: "Visible ROI",
    body:
      "The baseline is practical: response time, contact rate, qualified leads, signed cases, source attribution, and opportunities recovered.",
  },
  {
    title: "A high-value learning loop",
    body:
      "Every intake reveals how the firm defines a wanted case, handles exceptions, allocates attention, and turns judgment into operating rules.",
  },
];

const distributionSteps = [
  {
    step: "01",
    title: "Reveal the leak",
    body:
      "Automated intake audits show where calls, web leads, follow-up, attribution, or handoffs are costing the firm cases.",
    purpose: "Earn attention with evidence specific to the firm.",
  },
  {
    step: "02",
    title: "Deliver useful entry points",
    body:
      "Focused tools can improve websites and AI visibility, after-hours coverage, intake routing, and review monitoring.",
    purpose: "Reduce the effort required to experience value.",
  },
  {
    step: "03",
    title: "Integrate with the workflow",
    body:
      "Connect to the systems firms already use, including Lead Docket, Filevine, phone systems, email, and web forms.",
    purpose: "Become operational without forcing a rip-and-replace decision.",
  },
  {
    step: "04",
    title: "Expand from measured proof",
    body:
      "Once one workflow performs, extend the operating layer to adjacent case and firm workflows.",
    purpose: "Let demonstrated ROI, not a transformation promise, drive expansion.",
  },
];

const expansionStages = [
  "Intake and qualification",
  "Case opening and handoffs",
  "Client communication",
  "Records and treatment",
  "Demands and claims intelligence",
  "Liens and disbursement",
  "Vendor governance",
  "Firm intelligence",
];

const advantages = [
  {
    icon: Network,
    title: "Workflow integration",
    body:
      "The value compounds as the system learns how data, people, vendors, and decisions move across the firm.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Operational benchmarks",
    body:
      "Diagnostics create a growing view of where firms lose time, conversion, case velocity, and management visibility.",
  },
  {
    icon: Workflow,
    title: "Deployment playbooks",
    body:
      "Repeated implementation turns firm-specific lessons into reusable patterns, controls, and connectors.",
  },
  {
    icon: ShieldCheck,
    title: "Governed firm ownership",
    body:
      "Documented rules, review gates, logs, and vendor boundaries make systems understandable and controllable by the firm.",
  },
];

export const metadata: Metadata = {
  title: "Our Thesis: AI Systems for Personal Injury Firms",
  description: pageDescription,
  keywords: [
    "AI operating system for personal injury firms",
    "personal injury legal technology",
    "AI intake revenue recovery",
    "personal injury intake automation",
    "legal AI systems of action",
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

export default function ThesisPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${pageUrl}#webpage`,
      name: pageTitle,
      description: pageDescription,
      url: pageUrl,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#organization`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
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
          name: "Our Thesis",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <div className="bg-black pb-24">
      <JsonLd data={structuredData} />

      <section className="relative overflow-hidden border-b border-primary/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,255,65,0.14),_rgba(0,0,0,0)_52%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
          <div className="max-w-4xl space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/65 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Our thesis
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              The AI operating layer for contingency law firms
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
              Possible Minds is starting with personal injury intake: the point
              where expensive demand becomes signed cases, operational speed is
              measurable, and better execution can create direct revenue.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/personal-injury/intake-automation">
                  See the Intake System
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href={CALENDLY_URL}>Book a Diagnostic Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {thesisPoints.map((point) => {
            const Icon = point.icon;
            return (
              <article
                key={point.title}
                className="rounded-xl border border-primary/20 bg-[#04150d] p-6"
              >
                <Icon className="h-6 w-6 text-[#00ff41]" />
                <h2 className="mt-5 text-xl font-semibold text-primary">
                  {point.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {point.body}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#04150d]/45">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
              Why legal. Why personal injury.
            </p>
            <h2 className="text-3xl font-semibold text-[#00ff41] sm:text-4xl">
              Better operations are rewarded, not penalized
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-foreground/75">
            <p>
              Much of legal technology has been built around administrative
              efficiency. Personal injury creates a more powerful incentive:
              firms invest their own time and capital into cases and earn when
              those cases are acquired, developed, and resolved successfully.
            </p>
            <p>
              That makes operational improvement economically legible. Faster
              lead response can improve conversion. Cleaner handoffs can prevent
              good cases from disappearing. Better records, communication, and
              workflow control can move files with less avoidable delay.
            </p>
            <p className="font-medium text-foreground/90">
              The opportunity is not to make lawyers produce more text. It is to
              help the firm execute its work with greater speed, consistency,
              visibility, and control.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            The market gap
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#00ff41] sm:text-4xl">
            Firms have systems of record. They still need systems of action.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/75">
            Established platforms remain essential. But most were designed to
            hold information and guide users through their own product, not to
            orchestrate work across the firm&apos;s entire operating environment.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {marketGap.map((item, index) => (
            <article
              key={item.label}
              className="relative rounded-xl border border-primary/20 bg-[#04150d] p-6"
            >
              <div className="text-xs font-semibold text-primary/60">
                0{index + 1}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-primary">
                {item.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {item.detail}
              </p>
              {index < marketGap.length - 1 && (
                <ArrowRight className="absolute -right-7 top-1/2 z-10 hidden h-5 w-5 text-primary/60 lg:block" />
              )}
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-primary/20 bg-black/45 p-5">
          <p className="text-sm leading-relaxed text-foreground/70">
            <span className="font-semibold text-primary">
              The signal is not that lawyers need a command line.
            </span>{" "}
            The lack of documented APIs and programmable interfaces reveals a
            deeper limitation: firms cannot easily make their software execute
            their own cross-vendor workflows. Possible Minds is building that
            flexible execution layer around the tools firms already trust.
          </p>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#04150d]/45">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Our wedge
              </p>
              <h2 className="text-3xl font-semibold text-[#00ff41] sm:text-4xl">
                Intake revenue recovery
              </h2>
              <p className="text-base leading-relaxed text-foreground/75">
                PI firms already spend heavily to create demand. The first
                product opportunity is helping them retain more of the value
                they have already paid to generate.
              </p>
              <div className="rounded-xl border border-primary/20 bg-black/45 p-5">
                <div className="flex items-center gap-3 text-sm font-semibold text-primary">
                  <Search className="h-5 w-5" />
                  Start with the leak
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  Missed calls, slow first response, weak persistence, poor
                  qualification, broken handoffs, unsigned retainers, and unclear
                  attribution.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {wedgeReasons.map((reason) => (
                <article
                  key={reason.title}
                  className="rounded-xl border border-primary/20 bg-black/45 p-5"
                >
                  <h3 className="text-lg font-semibold text-primary">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {reason.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            Distribution strategy
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#00ff41] sm:text-4xl">
            Diagnose, prove, integrate, expand
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/75">
            The go-to-market motion mirrors the product philosophy: make the
            problem visible, reduce adoption friction, and let measured value
            earn the right to do more.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {distributionSteps.map((item) => (
            <article
              key={item.step}
              className="grid gap-5 rounded-xl border border-primary/20 bg-[#04150d] p-5 sm:grid-cols-[64px_1fr] lg:grid-cols-[64px_0.8fr_1fr]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-[#00ff41]">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {item.body}
                </p>
              </div>
              <div className="rounded-lg border border-primary/15 bg-black/35 px-4 py-3 text-sm leading-relaxed text-foreground/65">
                <span className="font-semibold text-primary">
                  Strategic purpose:
                </span>{" "}
                {item.purpose}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-foreground/60">
          Forward-deployed engineering supports this motion by shortening the
          distance between a firm&apos;s real workflow and a production system.
          The goal is not permanent custom consulting. It is to convert repeated
          implementation lessons into reusable product capabilities.
        </p>
      </section>

      <section className="border-y border-primary/15 bg-[#04150d]/45">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Wedge to platform
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#00ff41] sm:text-4xl">
                Intake is the beginning, not the destination
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/75">
                Once the operating layer understands how a firm qualifies work,
                routes exceptions, and records decisions, it can expand across
                the case lifecycle.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {expansionStages.map((stage, index) => (
                <div
                  key={stage}
                  className="flex min-h-16 items-center gap-4 rounded-xl border border-primary/20 bg-black/45 px-4 py-3"
                >
                  <span className="font-mono text-xs text-primary/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-foreground/80">
                    {stage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            Why Possible Minds can win
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#00ff41] sm:text-4xl">
            The advantage compounds inside the workflow
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/75">
            Focus and technical depth matter. They become durable when they
            produce assets that improve with every deployment.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {advantages.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <article
                key={advantage.title}
                className="rounded-xl border border-primary/20 bg-[#04150d] p-6"
              >
                <Icon className="h-6 w-6 text-[#00ff41]" />
                <h3 className="mt-4 text-xl font-semibold text-primary">
                  {advantage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {advantage.body}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 rounded-xl border border-primary/25 bg-primary/10 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <Blocks className="h-6 w-6 text-[#00ff41]" />
              <h2 className="text-2xl font-semibold text-[#00ff41]">
                Build from the firm&apos;s economics outward
              </h2>
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/75">
              Find the workflow leak. Prove measurable value. Integrate with the
              existing operation. Turn what works into a firm-owned system.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/engagement-process">See How We Engage</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
