"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/matrix-hero.png"
          alt="Matrix-inspired digital grid"
          fill
          priority
          className="object-cover object-center opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/70" />
      </div>

      <div className="relative mx-auto grid min-h-[70vh] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-2xl text-left">
          <h1 className="text-6xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-7xl lg:text-8xl">
            Imagine More.
            <span className="block">Do More.</span>
          </h1>
          <p className="mt-6 max-w-lg border-l-2 border-[#00ff41]/50 pl-4 text-lg font-medium text-foreground/90 sm:text-xl">
            We build AI agents that <span className="text-[#00ff41]">do the work</span>—not just help with it
          </p>
        </div>
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00ff41]/30 bg-[#00ff41]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#00ff41]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00ff41]" />
            The AI-Native Advantage
          </div>

          <div className="grid gap-3">
            {[
              { metric: "2x", label: "Implementation speed" },
              { metric: "50%", label: "Faster delivery" },
              { metric: "60%", label: "Gross margins" },
              { metric: "15-20h", label: "Saved per dev/week" },
            ].map((item) => (
              <div
                key={item.label}
                className="group flex items-center gap-4 rounded-xl border border-primary/20 bg-black/50 px-4 py-3 backdrop-blur-sm transition-all hover:border-[#00ff41]/40 hover:bg-black/70"
              >
                <div className="text-2xl font-bold text-[#00ff41] sm:text-3xl">
                  {item.metric}
                </div>
                <div className="text-sm font-medium text-foreground/80 sm:text-base">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
