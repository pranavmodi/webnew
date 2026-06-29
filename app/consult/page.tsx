import { Metadata } from "next";
import Link from "next/link";

import { SITE_NAME } from "@/lib/constants";
import { ConsultBookingForm } from "./consult-booking-form";

export const metadata: Metadata = {
  title: `Free diagnostic call for PI firms | ${SITE_NAME}`,
  description:
    "Book a free diagnostic call to identify the PI firm workflow where AI can safely improve intake, records, liens, follow-up, or vendor risk.",
};

const outcomes = [
  {
    stat: "Find the leak",
    title: "Pinpoint the costly workflow",
    description:
      "We look at intake response, after-hours coverage, records chasing, lien follow-up, AI visibility, and client communication to find the highest-leverage starting point.",
  },
  {
    stat: "Check readiness",
    title: "Avoid automating a broken process",
    description:
      "Some workflows need cleaner data, better handoffs, policy, or vendor diligence first. We name that before recommending a build.",
  },
  {
    stat: "Scope the first win",
    title: "Start narrow and measurable",
    description:
      "The best first project is usually one measurable workflow: missed-call capture, records follow-up, lien tracking, or client update automation.",
  },
];

export default function ConsultPage() {
  return (
    <div className="bg-black pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-primary/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.15),_rgba(0,0,0,0)_55%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Free diagnostic call for PI firms
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              Start with the leak, not the demo.
            </h1>
            <p className="mx-auto max-w-3xl text-base text-foreground/80 sm:text-lg">
              In 30 minutes, we look for the workflow where AI can safely create
              leverage for your PI firm: missed leads, records, liens, client
              updates, AI visibility, or vendor-risk controls. No slides. We tell
              you what fits, what does not, and what should come first.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="#book"
                className="inline-flex items-center rounded-full bg-[#00ff41] px-8 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
              >
                Book a time
              </Link>
              <Link
                href="/healthcare-case-study"
                className="inline-flex items-center rounded-full border border-primary/30 px-8 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                See production proof →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes strip */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00ff41]">
                {item.stat}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Credibility */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-primary">
            This is not a speculative AI workshop.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-base">
            We operate the AI backend for a 60-location medical imaging
            provider that PI firms send thousands of cases through. That same
            operating pattern, with human review and clear workflow boundaries,
            is what we adapt when a PI firm has a real, measurable leak.
          </p>
          <Link
            href="/healthcare-case-study"
            className="mt-4 inline-flex items-center text-sm font-semibold text-[#00ff41] transition hover:text-[#00ff41]/80"
          >
            Read the case study →
          </Link>
        </div>
      </section>

      {/* Booking form */}
      <section id="book" className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Pick a time
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            30-minute slots, Pacific Time, weekdays only. We&apos;ll send you a
            confirmation and the meeting link by email.
          </p>
        </div>
        <div className="mt-8">
          <ConsultBookingForm />
        </div>
      </section>
    </div>
  );
}
