import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { SITE_NAME } from "@/lib/constants";
import { ConsultBookingForm } from "./consult-booking-form";

export const metadata: Metadata = {
  title: `Intake Revenue Audit for PI Firms | ${SITE_NAME}`,
  description:
    "Book a focused intake revenue audit to identify where qualified PI leads wait, lose momentum, or disappear before reaching the right person.",
};

const auditOutcomes = [
  {
    number: "01",
    title: "A visible intake baseline",
    description:
      "Establish how long leads wait, where handoffs break, and which follow-up steps depend on staff memory.",
  },
  {
    number: "02",
    title: "A prioritized revenue leak",
    description:
      "Identify the one delay most likely to cost qualified opportunities: after-hours capture, human escalation, follow-up, or retainer completion.",
  },
  {
    number: "03",
    title: "A bounded first workflow",
    description:
      "Define what to automate, what must remain human, which systems are involved, and how improvement will be measured.",
  },
];

const reviewPoints = [
  "How inquiries enter the firm across calls, forms, chat, email, and referrals",
  "Time from inquiry to meaningful human contact",
  "How urgent or competitive matters reach a lawyer or intake closer",
  "What happens after the first unsuccessful contact attempt",
  "How retainers, signatures, and final case acceptance are tracked",
];

export default function ConsultPage() {
  return (
    <div className="bg-black pb-24">
      <section className="border-b border-primary/15 bg-[#031009]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <p className="text-sm font-semibold uppercase text-primary">
            Intake Revenue Audit
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Find where qualified leads lose momentum before they reach the right
            person.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-foreground/75 sm:text-lg sm:leading-8">
            In 30 minutes, we map one intake path and isolate the delay most likely
            to cost signed cases. No generic AI demo and no obligation to buy. You
            leave with a concrete starting point, even when the right answer is to
            fix the process before adding technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#book"
              className="inline-flex items-center bg-[#00ff41] px-6 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
            >
              Book the audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/law-case-study"
              className="inline-flex items-center border border-primary/35 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              Review the PI deployment
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-primary">
            What you leave with
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            A decision, not another software shortlist.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-primary/15 border-y border-primary/15">
          {auditOutcomes.map((item) => (
            <div
              key={item.number}
              className="grid gap-3 py-7 sm:grid-cols-[64px_260px_1fr] sm:gap-6"
            >
              <span className="font-mono text-sm text-primary">{item.number}</span>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-7 text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#031009]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">
              The conversation
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Bring one real intake path.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/70">
              A recent missed lead or delayed handoff is more useful than a deck.
              We follow the inquiry from arrival to human contact and final
              disposition.
            </p>
          </div>

          <div className="divide-y divide-primary/15 border-y border-primary/15">
            {reviewPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 py-5">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm leading-7 text-foreground/75">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-primary">
            Book the audit
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Choose a 30-minute time.
          </h2>
          <p className="mt-4 text-base leading-7 text-foreground/70">
            Weekday appointments are shown in Pacific Time. Tell us which part of
            intake you want to examine, and we will come prepared.
          </p>
        </div>
        <div className="mt-10">
          <ConsultBookingForm />
        </div>
      </section>
    </div>
  );
}
