import { Metadata } from "next";
import Link from "next/link";

import { SITE_NAME } from "@/lib/constants";
import { ConsultBookingForm } from "./consult-booking-form";

export const metadata: Metadata = {
  title: `Free 30-minute AI consult for PI firms | ${SITE_NAME}`,
  description:
    "Book a free 30-minute consult on AI that saves PI firms hours a day on intake, records, and follow-up — and turns that time back into new cases.",
};

const outcomes = [
  {
    stat: "Save time",
    title: "Cut hours from intake and records",
    description:
      "Automated email triage, after-hours intake responses, records chasing, and lien follow-ups. The repetitive work that drains paralegal time, done in the background.",
  },
  {
    stat: "Save money",
    title: "Fewer missed cases, leaner staff",
    description:
      "After-hours inquiries converted instead of lost. Follow-up cadence your team can't sustain, automated. Fewer hires to scale the same caseload.",
  },
  {
    stat: "Grow business",
    title: "Response time becomes a moat",
    description:
      "The firm that responds in two minutes wins the case. AI closes the gap between a lead hitting your form and someone qualified talking to them.",
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
              Free 30-min consult for PI firms
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              AI that gives your firm its hours back.
            </h1>
            <p className="mx-auto max-w-3xl text-base text-foreground/80 sm:text-lg">
              Intake, records, liens, follow-up — the repetitive work that eats
              partner and paralegal time. We build the systems that handle it, so
              your team focuses on cases. Thirty minutes with us, no slides — we
              show you what fits your firm and what doesn&apos;t.
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
                See a live deployment →
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
            This isn&apos;t theory — we run it in production.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-base">
            We operate the AI backend for a 60-location medical imaging
            provider that PI firms send thousands of cases through. That same
            engine — email triage, records automation, outbound voice follow-up
            — is what we&apos;ll adapt to your firm&apos;s workflow on the call.
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
