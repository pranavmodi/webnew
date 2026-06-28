"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const advantagePanels = [
  {
    title: "The Learning Loop Advantage",
    items: [
      { metric: "Human", label: "judgment sets the direction" },
      { metric: "AI", label: "scales the execution" },
      { metric: "Loop", label: "compounds the expertise" },
      { metric: "IP", label: "stays with your company" },
    ],
  },
  {
    title: "The AI-Native Advantage",
    items: [
      { metric: "2x", label: "Implementation speed" },
      { metric: "50%", label: "Faster delivery" },
      { metric: "60%", label: "Gross margins" },
      { metric: "15-20h", label: "Saved per dev/week" },
    ],
  },
] as const;

export function Hero() {
  const [activePanel, setActivePanel] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePanel((current) => (current + 1) % advantagePanels.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const panel = advantagePanels[activePanel];

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
            We build company-owned AI systems where human expertise and{" "}
            <span className="text-[#00ff41]">AI capability compound</span> over time
          </p>
        </div>
        <div className="min-h-[288px] [perspective:1200px]">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, rotateX: -86, y: 16 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, rotateX: 86, y: -16 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 [backface-visibility:hidden] [transform-style:preserve-3d]"
            >
              <div className="inline-flex min-h-7 items-center gap-2 rounded-full border border-[#00ff41]/30 bg-[#00ff41]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#00ff41]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00ff41]" />
                {panel.title}
              </div>

              <div className="grid gap-3">
                {panel.items.map((item) => (
                  <div
                    key={item.label}
                    className="group flex min-h-[60px] items-center gap-4 rounded-xl border border-primary/20 bg-black/50 px-4 py-3 backdrop-blur-sm transition-all hover:border-[#00ff41]/40 hover:bg-black/70"
                  >
                    <div className="w-20 shrink-0 text-2xl font-bold text-[#00ff41] sm:text-3xl">
                      {item.metric}
                    </div>
                    <div className="text-sm font-medium text-foreground/80 sm:text-base">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
