import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Medical Imaging Case Study | ${SITE_NAME}`,
  description:
    "How a California-based medical imaging chain transformed patient support with AI, saving time and improving satisfaction.",
};

export default function PreciseMRIPage() {
  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/blog/precise-mri.jpg"
            alt="Medical imaging case study hero"
            fill
            priority
            className="object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Case Study
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              How a California Medical Imaging Chain Transformed Patient Support with AI
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              A California-based medical imaging company partnered with Possible Minds to deploy an AI support agent that reduced repetitive inquiries,
              safeguarded patient data, and delivered faster answers without sacrificing the human touch.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {[
                "December 26, 2023",
                "Case Study",
                "5 min read",
                "Author: Dr. Michael Thompson",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/20 bg-[#04150d] px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-12 px-4 pt-12 sm:px-6">
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Introduction</h2>
          <p className="mt-4 text-base text-foreground/80">
            When a California-based medical imaging chain with around 200 employees saw their support team
            overwhelmed by repetitive patient inquiries, they reached out for a tailored, cost-effective solution. The
            organization&apos;s leadership needed a way to reduce operational costs while maintaining a high standard of patient
            care and satisfaction. The result was an AI support agent built to handle routine questions and seamlessly
            hand off complex issues to human agents.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Objectives and benefits</h2>
          <p className="mt-4 text-base text-foreground/80">
            From the start, our mission was to help the imaging center conserve resources, boost patient satisfaction, and
            simplify staff workflows. By automating repetitive queries, we aimed to reduce manual support load, deliver
            faster answers, keep patient data protected, and free staff to handle complex or sensitive requests.
          </p>
          <ul className="mt-6 space-y-3 text-base text-foreground/80">
            {[
              "Save significant support hours each month",
              "Cut operational costs tied to repetitive inquiries",
              "Improve patient satisfaction with instant responses",
              "Maintain secure access to patient-specific data",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00ff41]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Chatbot features and technical highlights</h2>
          <div className="mt-6 space-y-8">
            <div className="overflow-hidden rounded-2xl border border-primary/20">
              <Image
                src="/blog/pre1.jpg"
                alt="Medical imaging chatbot interface"
                width={1200}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">Retrieval-augmented knowledge base</h3>
              <ul className="mt-3 space-y-2 text-base text-foreground/80">
                <li>Patients receive instant answers for booking, cancellations, preparation, and billing.</li>
                <li>Responses stay grounded in approved clinical and operational content.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">Authentication flow with Twilio</h3>
              <ul className="mt-3 space-y-2 text-base text-foreground/80">
                <li>Secure SMS verification when patient-specific data is requested.</li>
                <li>Appointment history is retrieved after verification with full audit logs.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">Human handoff to FrontApp</h3>
              <ul className="mt-3 space-y-2 text-base text-foreground/80">
                <li>Requests escalate to staff when automation thresholds are exceeded.</li>
                <li>Conversation context is preserved through FrontApp APIs and webhooks.</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary/20">
              <Image
                src="/blog/pre2.jpg"
                alt="Medical imaging chatbot analytics"
                width={1200}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Working with our team</h2>
          <p className="mt-4 text-base text-foreground/80">
            Working alongside the client&apos;s leadership team was a true pleasure. They came prepared with a clear vision but
            also trusted us to innovate and iterate on the project. Transparent communication and quick feedback loops
            allowed us to fine-tune the agent to meet and exceed the organization&apos;s standards.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Outcome and results</h2>
          <p className="mt-4 text-base text-foreground/80">
            The deployment reduced wait times and delivered measurable ROI while preserving a human-first experience
            for complex inquiries. After launch, the imaging center immediately reaped tangible benefits across support
            speed, staff focus, and patient confidence.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                value: "40%",
                title: "Inquiries handled by the chatbot",
                detail:
                  "Routine questions resolve instantly, freeing staff for high-touch cases.",
              },
              {
                value: "150+",
                title: "Support hours saved monthly",
                detail:
                  "Automated responses gave staff back time for patient care and follow-ups.",
              },
              {
                value: "$20K",
                title: "Annual cost savings",
                detail:
                  "Reduced staffing overhead and faster resolution cycles lowered costs.",
              },
              {
                value: "25%",
                title: "Increase in satisfaction",
                detail:
                  "Faster answers and secure personalization boosted patient confidence.",
              },
            ].map((metric) => (
              <div
                key={metric.title}
                className="rounded-2xl border border-primary/20 bg-black/60 p-5"
              >
                <div className="text-4xl font-semibold text-[#00ff41]">
                  {metric.value}
                </div>
                <div className="mt-2 text-lg font-semibold text-primary">
                  {metric.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{metric.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base text-foreground/80">
            These results underscore the impact of strategic automation: cutting unnecessary costs, improving team
            efficiency, and strengthening the overall patient experience.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Conclusion and next steps</h2>
          <p className="mt-4 text-base text-foreground/80">
            The imaging center now answers patients faster, protects sensitive data, and keeps staff focused on complex
            cases. The next phase includes deeper scheduling automation and expanded AI-driven workflows across channels.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            If you&apos;re ready to streamline patient support while saving time and money, we can tailor a solution that
            delivers tangible results for your organization.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="animate-glow">
              <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Book a demo
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="mailto:hello@possibleminds.ai">Email us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
