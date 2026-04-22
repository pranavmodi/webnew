import { Metadata } from "next";

import { SITE_NAME } from "@/lib/constants";
import { ConsultBookingForm } from "./consult-booking-form";

export const metadata: Metadata = {
  title: `Free 30-minute AI consult | ${SITE_NAME}`,
  description:
    "Book a free 30-minute consult on how to leverage AI for your PI firm's intake and records workflow. Same tech that handles Precise Imaging's email triage.",
};

const stats = [
  {
    stat: "~100 hrs/wk",
    title: "Email triage saved at Precise",
    description:
      "Status inquiries, records requests, scheduling — the replies you're used to getting are coming from our system.",
  },
  {
    stat: "~20 hrs/wk",
    title: "Outbound-call time saved",
    description:
      "Follow-ups, appointment reminders, and records-ready notifications handled without staff time.",
  },
  {
    stat: "30 minutes",
    title: "What you get on the call",
    description:
      "We show you what we built for Precise and how the same pieces could plug into your intake and records workflow. No slides.",
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
              Free 30-min consult
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              The team behind Precise Imaging&apos;s AI.
            </h1>
            <p className="mx-auto max-w-3xl text-base text-foreground/80 sm:text-lg">
              Those replies you get from Precise on imaging-status questions — that&apos;s our
              system. We&apos;re doing free 30-minute consults with firms that work with
              Precise, walking through how the same tech can handle your intake and records
              workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6"
            >
              <div className="text-3xl font-semibold text-[#00ff41]">{item.stat}</div>
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

      {/* Booking form */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Pick a time
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            30-minute slots, Pacific Time, weekdays only. We&apos;ll send you a
            confirmation by email.
          </p>
        </div>
        <div className="mt-8">
          <ConsultBookingForm />
        </div>
      </section>
    </div>
  );
}
