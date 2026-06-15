import { Metadata } from "next";

import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Security & Privacy | ${SITE_NAME}`,
  description:
    "We build AI systems for healthcare and legal workflows. Protecting the sensitive data those workflows touch is a first-class design constraint, not an afterthought.",
};

const securityCards = [
  {
    title: "Your data stays in your accounts",
    body: "Everything we build runs on infrastructure and accounts you own and control: your cloud, your email, your telephony, your API keys. Your data lives in your systems, not ours. If we ever stepped away, your system keeps running.",
  },
  {
    title: "You own what we build",
    body: "The source code and documentation for what we build are yours. No black box and no lock-in: your team, or any engineer you choose, can operate and extend it.",
  },
  {
    title: "Controls for sensitive data",
    body: "For workflows that touch PHI or client data, we design with least-privilege access, audit trails on automated actions, automated checks that guard against sensitive data leaving in outbound messages, and human review on sensitive or low-confidence edge cases.",
  },
  {
    title: "HIPAA",
    body: "We follow HIPAA-aligned practices, and formal HIPAA compliance is actively in progress. We're glad to walk your team through our current controls and our compliance roadmap, including Business Associate Agreements.",
  },
  {
    title: "Privacy",
    body: "We collect only what we need to operate the systems we build and to respond to inquiries. We do not sell personal data. Questions about data handling? Email hello@possibleminds.ai.",
  },
];

export default function SecurityPage() {
  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden border-b border-primary/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.15),_rgba(0,0,0,0)_55%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Security & Privacy
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              Built for regulated operations
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              We build AI systems for healthcare and legal workflows. Protecting
              the sensitive data those workflows touch is a first-class design
              constraint, not an afterthought.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 pt-12 sm:px-6 md:grid-cols-2">
        {securityCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-primary/25 bg-[#04150d] p-6"
          >
            <h2 className="text-2xl font-semibold text-primary">
              {card.title}
            </h2>
            <p className="mt-4 text-base text-foreground/80">{card.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
