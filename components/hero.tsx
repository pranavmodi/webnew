"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { ProductPreview } from "@/components/product-preview";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ctaButtons,
  heroBullets,
  heroHeadline,
  heroHeadlines,
  heroSubhead,
} from "@/lib/content";
import { CALENDLY_URL } from "@/lib/constants";

const fadeUp = {
  initial: { y: 16, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/hero/possible-hero.svg"
          alt=""
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/92" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-6 sm:px-6 lg:grid-cols-2 lg:pt-8">
        <div className="space-y-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3"
          >
            <Badge variant="secondary">Healthcare & legal</Badge>
            <Badge variant="outline">Fast outcomes</Badge>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ delay: 0.08 }}
          >
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {heroHeadline}
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              {heroSubhead}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ delay: 0.12 }}
          >
            <Button asChild size="lg">
              <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Book a demo
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/solutions">See solutions</Link>
            </Button>
            <Link
              href="/case-studies"
              className="inline-flex items-center text-sm font-semibold text-foreground underline-offset-8 hover:underline"
            >
              View case studies
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            className="space-y-3 rounded-2xl border border-border/80 bg-white/70 p-4 shadow-sm backdrop-blur"
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ delay: 0.16 }}
          >
            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-tight text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                Headlines
              </span>
              {heroHeadlines.slice(1).map((option) => (
                <span
                  key={option}
                  className="rounded-full bg-accent px-3 py-1 text-foreground/80"
                >
                  {option}
                </span>
              ))}
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {heroBullets.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.45 } }}
          className="relative"
        >
          <ProductPreview />
        </motion.div>
      </div>
    </section>
  );
}
