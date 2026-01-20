"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { outcomesBar } from "@/lib/content";

export function OutcomesBar() {
  return (
    <section className="relative">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-2xl border border-primary/30 bg-[#04150d] px-4 py-4 shadow-soft backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="border-primary/40 text-primary">
            {outcomesBar.label}
          </Badge>
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-tight text-muted-foreground">
            {outcomesBar.audiences.map((audience) => (
              <span key={audience} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                {audience}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {outcomesBar.metrics.map((metric, index) => (
            <motion.div
              key={metric.value}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
              className="rounded-xl border border-dashed border-primary/30 bg-[#03110b] px-4 py-3 text-sm font-semibold text-foreground"
            >
              <div>{metric.value}</div>
              <span className="text-xs font-medium text-muted-foreground">
                {metric.context}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
