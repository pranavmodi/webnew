import Image from "next/image";
import Link from "next/link";

import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-20 bg-black pb-24">
      <Hero />

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
    </div>
  );
}
