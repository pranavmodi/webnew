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
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Imagine more, do more
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Enterprise software has changed forever with AI, leverage it to surge ahead
        </p>
      </div>
    </section>
  );
}
