"use client";

import { motion } from "framer-motion";

import { previewModules } from "@/lib/content";
import { cn } from "@/lib/utils";

const cardVariants = {
  initial: { y: 16, opacity: 0 },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.08 * index,
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function ProductPreview() {
  return (
    <div className="rounded-3xl border border-border/80 bg-white/80 p-4 shadow-soft backdrop-blur-sm">
      <div className="space-y-3 rounded-2xl border border-dashed border-border/80 bg-gradient-to-b from-white via-white to-primary/5 p-4 text-sm font-semibold text-muted-foreground">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-tight text-primary">
          Live workflow preview
        </span>
        <p className="text-base font-semibold text-foreground">
          Inbox Triage → Suggested Reply → Intake Summary
        </p>
      </div>
      <div className="mt-4 space-y-3">
        {previewModules.map((module, index) => (
          <motion.div
            key={module.title}
            custom={index}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.4 }}
            whileHover={{ y: -4 }}
            className={cn(
              "group rounded-2xl border border-border bg-card/90 p-4 shadow-sm transition-all",
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-sm font-semibold text-foreground">
                {module.title}
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {module.latency}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {module.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {module.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-accent px-3 py-1 text-xs font-semibold text-foreground/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
