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
        </div>
        <div className="rounded-2xl border border-primary/25 bg-black/60 p-6">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#00ff41]">
            Reimagine <span className="text-[#57ffd6]">Enterprise software</span> for the AI era
          </div>
          <ul className="space-y-4 text-base text-foreground/85 sm:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00ff41]" />
              <span>Double implementation speed</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00ff41]" />
              <span>Cut delivery times by 50%</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00ff41]" />
              <span>Improve gross margins from ~35% to ~60%</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00ff41]" />
              <span>Give developers back 15-20 hours/week on repetitive tasks</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
