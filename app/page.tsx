import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Gauge, Radar, ShieldCheck, Sparkles } from "lucide-react";

import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";

const REPUTATION_TOOL_URL = "https://reputable.getpossibleminds.com";

export default function Home() {
  return (
    <div className="space-y-20 bg-black pb-24">
      <Hero />

      {/* Precise Imaging Stability Anchor */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-[#00ff41]/25 bg-gradient-to-br from-[#04150d] via-black to-[#06131c] p-6 shadow-[0_30px_100px_rgba(0,255,65,0.12)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#00ff41]/30 bg-[#00ff41]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#00ff41]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00ff41]" />
                Proven in production at scale
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                The automation behind Precise Imaging runs on our systems.
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/75 sm:text-lg">
                We build and run the automation behind Precise Imaging&apos;s operations: a
                system that triages roughly 600 inbound emails a day, auto-handles about
                73% of that volume, and saves on the order of 520 staff-hours a month
                across the ~1,900 personal injury firms Precise serves. It has run in
                production for years. When you work with us, you are not betting on a
                prototype.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { value: "600", label: "emails/day" },
                { value: "73%", label: "auto-handled" },
                { value: "~520", label: "staff-hours/month" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#00ff41]/35 hover:bg-white/[0.07]"
                >
                  <div className="text-3xl font-bold text-[#00ff41] sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground/75">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reputation Tool Feature */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-[#00ff41]/25 bg-gradient-to-br from-[#04150d] via-black to-[#06131c] shadow-[0_30px_100px_rgba(0,255,65,0.12)]">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.95fr] lg:p-10">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#00ff41]/30 bg-[#00ff41]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#00ff41]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00ff41]" />
                Free AI reputation tool
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                See how visible your PI firm is to
                <span className="text-[#00ff41]"> AI answer engines</span>.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg">
                Run a live public-footprint audit that turns website proof, attorney signals,
                competitor context, and third-party mentions into a reputation graph score and
                prioritized action plan.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="animate-glow">
                  <Link href={REPUTATION_TOOL_URL} target="_blank" rel="noreferrer">
                    Launch the reputation tool
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <span className="rounded-full border border-primary/20 bg-black/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Built for personal injury firms
                </span>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                {
                  icon: Gauge,
                  label: "Reputation Graph Score",
                  value: "74",
                  detail: "How clearly the public record proves authority",
                },
                {
                  icon: ShieldCheck,
                  label: "Evidence confidence",
                  value: "82%",
                  detail: "How much source material the scan can verify",
                },
                {
                  icon: Radar,
                  label: "AI readiness",
                  value: "68",
                  detail: "Whether answer systems can confidently cite the firm",
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
                  The report translates weak signals into concrete fixes for bios, case proof,
                  local relevance, and citable third-party validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Feature */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-primary/20">
          <div className="relative grid lg:grid-cols-[1fr_1.1fr]">
            {/* Left: Image */}
            <div className="relative min-h-[280px] lg:min-h-[420px]">
              <Image
                src="/blog/precise-mri.jpg"
                alt="Medical imaging center"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black lg:bg-gradient-to-r lg:from-transparent lg:to-black" />
              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 flex gap-2 sm:bottom-6 sm:left-6 sm:gap-3">
                {[
                  { value: "62%", label: "Less workload" },
                  { value: "41%", label: "Happier patients" },
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
                Case Study
              </div>

              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                How a medical imaging chain
                <span className="text-[#00ff41]"> stopped drowning</span> in
                600 daily emails
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
                A 200-person California imaging company deployed our AI chatbot
                and email automation together. The result: their staff got back
                670+ hours a month, patients got answers in under 5 minutes, and
                annual support costs dropped by $127K.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="animate-glow">
                  <Link href="/healthcare-case-study">Read the full story</Link>
                </Button>
                <div className="flex gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full border border-primary/20 bg-black/50 px-3 py-1">
                    AI Chatbot
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

      {/* Law Case Study Feature */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-primary/20">
          <div className="relative grid lg:grid-cols-[1.1fr_1fr]">
            {/* Left: Content */}
            <div className="flex flex-col justify-center bg-gradient-to-bl from-[#04150d] to-black p-6 sm:p-10 lg:p-12">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#00ff41]/30 bg-[#00ff41]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#00ff41]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00ff41]" />
                Case Study
              </div>

              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                How a PI firm went from
                <span className="text-[#00ff41]"> missed leads</span> to signed
                retainers in under an hour
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
                A 15-attorney Southern California personal injury firm was losing
                cases to firms that simply called faster. We deployed AI outbound
                voice calling and email automation that increased signed cases by
                34%, cut lead response time to under 90 seconds, and added $2.1M
                in annual revenue.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="animate-glow">
                  <Link href="/law-case-study">Read the full story</Link>
                </Button>
                <div className="flex gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full border border-primary/20 bg-black/50 px-3 py-1">
                    Outbound Voice AI
                  </span>
                  <span className="rounded-full border border-primary/20 bg-black/50 px-3 py-1">
                    Email Automation
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative min-h-[280px] lg:min-h-[420px]">
              <Image
                src="/blog/law-case-study.jpg"
                alt="Personal injury law firm"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-black lg:bg-gradient-to-l lg:from-transparent lg:to-black" />
              {/* Stats overlay */}
              <div className="absolute bottom-4 right-4 flex gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
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

            {/* TODO: Replace placeholder testimonial quote and attribution when approved assets are provided. */}
            <blockquote className="mt-5 text-base leading-relaxed text-foreground/75 sm:text-lg">
              &ldquo;{"{{TESTIMONIAL_QUOTE}}"}&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-[#00ff41]">
              {"{{NAME}}, {{TITLE}}, {{FIRM}}"}
            </p>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-[#04150d] p-6 sm:p-8">
            {/* TODO: Drop approved client logo assets into these empty styled slots. */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[0, 1, 2, 3].map((slot) => (
                <div
                  key={slot}
                  className="min-h-20 rounded-2xl border border-white/10 bg-white/[0.04]"
                />
              ))}
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

      {/* Ownership Teaser */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Built to outlast us
              </h2>

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
                  title: "Runs on your accounts",
                  copy: "Everything we build runs on infrastructure you own and control. If we ever stepped away, your system keeps running.",
                },
                {
                  title: "You own what we build",
                  copy: "The source code and documentation are yours. No black box, no lock-in.",
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
