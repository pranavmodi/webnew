"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductPreview } from "@/components/product-preview";
import { heroBullets, heroHeadline, heroSubhead, productSignals } from "@/lib/content";
import { CALENDLY_URL } from "@/lib/constants";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -top-32 left-0 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-14 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn}
          className="space-y-6"
        >
          <Badge className="w-fit border-primary/40 text-primary" variant="outline">
            AI agents for regulated ops
          </Badge>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {heroHeadline}
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            {heroSubhead}
          </p>
          <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {heroBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild size="lg" className="animate-glow">
            <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
              Book a demo
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/solutions">Explore solutions</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn}
          className="space-y-4"
        >
          <ProductPreview />
          <div className="grid gap-3 sm:grid-cols-2">
            {productSignals.map((signal) => (
              <div
                key={signal.title}
                className="rounded-2xl border border-primary/30 bg-[#04150d] p-4"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <signal.icon className="h-4 w-4" />
                  </span>
                  {signal.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {signal.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {signal.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-foreground/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
