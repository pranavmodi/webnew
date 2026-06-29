import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  FileSearch,
  Gauge,
  PhoneCall,
  Radar,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";

const REPUTATION_TOOL_URL = "https://reputable.getpossibleminds.com";

export default function Home() {
  return (
    <div className="space-y-20 bg-black pb-24">
      <Hero />

      {/* Diagnostic-led GTM */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-[#00ff41]/25 bg-gradient-to-br from-[#04150d] via-black to-[#06131c] p-6 shadow-[0_30px_100px_rgba(0,255,65,0.12)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#00ff41]/30 bg-[#00ff41]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#00ff41]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00ff41]" />
                Insight first, not another demo
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                We start by showing PI owners what is leaking.
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/75 sm:text-lg">
                Personal injury firms are not short on software pitches. They are short
                on clear answers to expensive questions: which leads are going cold,
                where files stall, whether AI search mentions the firm, and whether
                current AI use creates client-data or malpractice risk.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="animate-glow">
                  <Link href="/personal-injury">Get a firm-specific diagnostic</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/law-case-study">See PI case study</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                {
                  icon: PhoneCall,
                  title: "Intake leak",
                  copy: "After-hours form fills, missed calls, Spanish-language leads, and slow callbacks that quietly raise cost per signed case.",
                },
                {
                  icon: Radar,
                  title: "Market visibility",
                  copy: "Whether AI answer systems can find, describe, and cite your firm when someone nearby asks who to call after a crash.",
                },
                {
                  icon: ShieldCheck,
                  title: "Vendor risk",
                  copy: "Whether AI can be used without exposing client data, losing control of firm knowledge, or bypassing human judgment.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#00ff41]/35 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#00ff41]">
                    <Icon className="h-4 w-4" />
                    {item.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {item.copy}
                  </p>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Freeware Wedge */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-[#00ff41]/25 bg-gradient-to-br from-[#04150d] via-black to-[#06131c] shadow-[0_30px_100px_rgba(0,255,65,0.12)]">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.95fr] lg:p-10">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#00ff41]/30 bg-[#00ff41]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#00ff41]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00ff41]" />
                Free diagnostic tools for PI firms
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Give the owner a fact about their firm, not a pitch.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg">
                Our GTM starts with a useful report: a visible gap, a named competitor,
                a readiness blocker, or a work order the firm can hand to its team.
                The free diagnosis opens the conversation; scoped execution is the
                next step when the gap is real.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="animate-glow">
                  <Link href={REPUTATION_TOOL_URL} target="_blank" rel="noreferrer">
                    Launch the reputation diagnostic
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <span className="rounded-full border border-primary/20 bg-black/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Built for plaintiff-firm outreach
                </span>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                {
                  icon: Radar,
                  label: "AI visibility",
                  value: "N/M",
                  detail: "How often the firm appears in high-intent local answer checks",
                },
                {
                  icon: Gauge,
                  label: "Conversion friction",
                  value: "Leak",
                  detail: "Where public intake paths create slow response or drop-off risk",
                },
                {
                  icon: FileSearch,
                  label: "Readiness blocker",
                  value: "Risk",
                  detail: "Data, workflow, policy, and vendor-diligence gaps to fix first",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#00ff41]/35 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#00ff41]">
                          <Icon className="h-4 w-4" />
                          {item.label}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                          {item.detail}
                        </p>
                      </div>
                      <div className="text-3xl font-bold text-white">{item.value}</div>
                    </div>
                  </div>
                );
              })}

              <div className="rounded-2xl border border-[#00ff41]/20 bg-[#00ff41]/10 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#00ff41]">
                  <Sparkles className="h-4 w-4" />
                  Action plan included
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  Reports translate weak signals into prioritized fixes for intake,
                  public proof, client-data safety, and workflow ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PI Case Study Feature */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-primary/20">
          <div className="relative grid lg:grid-cols-[1fr_1.1fr]">
            {/* Left: Image */}
            <div className="relative min-h-[280px] lg:min-h-[420px]">
              <Image
                src="/blog/law-case-study.jpg"
                alt="Personal injury law firm"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black lg:bg-gradient-to-r lg:from-transparent lg:to-black" />
              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 flex gap-2 sm:bottom-6 sm:left-6 sm:gap-3">
                {[
                  { value: "34%", label: "More signed cases" },
                  { value: "<90s", label: "Response time" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/20 bg-black/70 px-3 py-2 backdrop-blur-md sm:px-4 sm:py-3"
                  >
                    <div className="text-xl font-bold text-[#00ff41] sm:text-2xl">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-medium text-white/70 sm:text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center bg-gradient-to-br from-[#04150d] to-black p-6 sm:p-10 lg:p-12">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#00ff41]/30 bg-[#00ff41]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#00ff41]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00ff41]" />
                Personal Injury Case Study
              </div>

              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                How a PI firm turned
                <span className="text-[#00ff41]"> missed leads</span> into signed
                retainers in under an hour
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
                A 15-attorney Southern California plaintiff firm was losing cases to
                competitors that simply called faster. We deployed queue-safe voice
                follow-up and email automation that increased signed cases by 34%,
                cut response time to under 90 seconds, and added $2.1M in annual
                revenue, depending on case mix.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="animate-glow">
                  <Link href="/law-case-study">Read the full story</Link>
                </Button>
                <div className="flex gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full border border-primary/20 bg-black/50 px-3 py-1">
                    Voice Intake
                  </span>
                  <span className="rounded-full border border-primary/20 bg-black/50 px-3 py-1">
                    Email Automation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Scale Feature */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-primary/20">
          <div className="relative grid lg:grid-cols-[1.1fr_1fr]">
            {/* Left: Content */}
            <div className="flex flex-col justify-center bg-gradient-to-bl from-[#04150d] to-black p-6 sm:p-10 lg:p-12">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#00ff41]/30 bg-[#00ff41]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#00ff41]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00ff41]" />
                Production Scale Proof
              </div>

              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                The same operating pattern runs behind
                <span className="text-[#00ff41]"> 600 daily emails</span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
                Possible Minds builds and runs the automation behind Precise Imaging&apos;s
                operations. The system triages roughly 600 inbound emails a day,
                auto-handles about 73% of that volume, and keeps reviewed workflow
                knowledge inside the company instead of a generic vendor layer.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="animate-glow">
                  <Link href="/healthcare-case-study">Read the full story</Link>
                </Button>
                <div className="flex gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full border border-primary/20 bg-black/50 px-3 py-1">
                    Email Triage
                  </span>
                  <span className="rounded-full border border-primary/20 bg-black/50 px-3 py-1">
                    Human Review
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative min-h-[280px] lg:min-h-[420px]">
              <Image
                src="/blog/precise-mri.jpg"
                alt="Medical imaging center"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-black lg:bg-gradient-to-l lg:from-transparent lg:to-black" />
              {/* Stats overlay */}
              <div className="absolute bottom-4 right-4 flex gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
                {[
                  { value: "600", label: "Emails/day" },
                  { value: "73%", label: "Auto-handled" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/20 bg-black/70 px-3 py-2 backdrop-blur-md sm:px-4 sm:py-3"
                  >
                    <div className="text-xl font-bold text-[#00ff41] sm:text-2xl">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-medium text-white/70 sm:text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Scaffold */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-6 sm:p-8">
            <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
              What clients say
            </h2>

            <blockquote className="mt-5 text-base leading-relaxed text-foreground/75 sm:text-lg">
              &ldquo;The team loves the solution, genuinely cuts down the time for
              email handling!&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-[#00ff41]">
              Danny Rackow, Director of Engineering, Precise Imaging
            </p>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-[#04150d] p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#00ff41]">
                  Reference customer
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  Precise Imaging
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#00ff41]">
                  Workflow
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  Email handling
                </p>
              </div>
            </div>

            <Link
              href="/consult"
              className="mt-6 block text-base leading-relaxed text-foreground/75 transition hover:text-[#00ff41]"
            >
              Want to talk to a firm already running this? We&apos;ll connect you with a
              reference.
            </Link>
          </div>
        </div>
      </section>

      {/* Vendor Risk Teaser */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                AI without handing your firm to a vendor
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
                PI files carry medical records, client confidences, settlement
                details, and privileged strategy. We design around that reality:
                limited access, human review, audit trails, and systems your firm can
                keep operating.
              </p>

              <Link
                href="/security"
                className="mt-5 inline-flex text-sm font-semibold text-[#00ff41] transition hover:text-[#00ff41]/80"
              >
                Security &amp; ownership →
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Client-data controls",
                  copy: "We do not treat sensitive PI data like generic training material. Workflows are scoped around least-privilege access, review thresholds, and clear records of automated actions.",
                },
                {
                  title: "Firm-owned learning loop",
                  copy: "The durable value lives in your rules, workflows, outcomes, and review history, so your firm keeps the operational knowledge instead of renting it from a black box.",
                },
                {
                  title: "Boundaries before build",
                  copy: "Some workflows are not ready for AI yet. We name the blockers first, then start with narrow, low-risk work such as missed-call capture, records chasing, and lien follow-up.",
                },
                {
                  title: "Human review where it matters",
                  copy: "Sensitive or low-confidence actions route to the team. The goal is faster throughput without asking a model to make legal judgment calls in the dark.",
                },
              ].map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <h3 className="text-lg font-semibold text-[#00ff41]">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                    {point.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
