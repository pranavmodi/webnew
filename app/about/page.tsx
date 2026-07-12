import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { LINKEDIN_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description:
    "Possible Minds builds diagnostic-led AI systems for personal injury firms and regulated operations with measurable operational impact.",
};

export default function AboutPage() {
  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden border-b border-primary/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.15),_rgba(0,0,0,0)_55%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About us
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
              <span className="rounded-full border border-primary/25 bg-[#04150d] px-3 py-1">Founded 2023</span>
              <span className="rounded-full border border-primary/25 bg-[#04150d] px-3 py-1">Bengaluru, India</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              Possible Minds
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              We build diagnostic-led AI systems for personal injury firms and
              regulated operations. Find the operational leak first, decide
              what is safe and ready to automate, build the narrow system that
              fixes it — and keep it governed, measurable, and owned by the
              firm.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-8 px-4 pt-12 sm:px-6">
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <div className="grid gap-8 md:grid-cols-[180px_1fr]">
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-primary/30 bg-black/45">
                <Image
                  src="/pranav-modi.jpg"
                  alt="Pranav Modi, founder of Possible Minds"
                  fill
                  sizes="(min-width: 768px) 180px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">Founder</p>
                <h2 className="mt-2 text-3xl font-semibold text-primary">Pranav Modi</h2>
                <p className="mt-2 text-base font-medium text-foreground/85">Founder, Possible Minds</p>
                <p className="mt-1 text-sm text-foreground/65">Bengaluru, India</p>
              </div>

              <div className="rounded-2xl border border-primary/25 bg-black/35 p-4">
                <p className="text-sm font-semibold text-[#00ff41]">
                  Ex-McKinsey data scientist. $100M+ in ML/AI impact before founding Possible Minds.
                </p>
              </div>

              <p className="text-base leading-7 text-foreground/80">
                Pranav founded Possible Minds in December 2023. Before that, he spent close to five years at McKinsey
                &amp; Company building machine-learning solutions that delivered over $100M in impact across retail,
                pharma, manufacturing, and transport.
              </p>
              <p className="text-base leading-7 text-foreground/80">
                He then built AI systems to detect cancer in tissue images at Definiens, led data-science work at Near,
                and was a product manager on the data platform at Expedia Group. Possible Minds brings that
                production-ML and product background to the operational workflows of personal injury firms and the
                medical imaging centers that serve them.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-primary/35 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Proof, not promises</h2>
          <p className="mt-4 text-base leading-7 text-foreground/80">
            Our first production systems run in live, regulated operations
            today — read the{" "}
            <Link
              href="/law-case-study"
              className="text-primary underline-offset-4 hover:underline"
            >
              personal injury case study
            </Link>{" "}
            and the{" "}
            <Link
              href="/healthcare-case-study"
              className="text-primary underline-offset-4 hover:underline"
            >
              healthcare operations case study
            </Link>
            . If you want to see how we think before you talk to us, start with
            the{" "}
            <Link
              href="/blog"
              className="text-primary underline-offset-4 hover:underline"
            >
              blog
            </Link>{" "}
            or join a free{" "}
            <Link
              href="/workshops"
              className="text-primary underline-offset-4 hover:underline"
            >
              working session
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
