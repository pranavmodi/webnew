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
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-6xl lg:text-7xl">
            Imagine more, do more
          </h1>
          <p className="mt-4 text-base text-foreground/80 sm:text-lg">
            Enterprise software has changed forever with AI, leverage it to surge ahead
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-primary/25 bg-black/60 p-5 text-sm text-foreground/80">
            <p className="text-base leading-relaxed text-foreground/90">
              “Information is information, not matter or energy.”
            </p>
            <p className="mt-3 text-xs uppercase tracking-wide text-primary">
              Norbert Wiener
            </p>
          </div>
          <div className="rounded-2xl border border-primary/25 bg-black/60 p-5 text-sm text-foreground/80">
            <p className="text-base leading-relaxed text-foreground/90">
              “We can only see a short distance ahead, but we can see plenty there that needs to be done.”
            </p>
            <p className="mt-3 text-xs uppercase tracking-wide text-primary">
              Alan Turing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
