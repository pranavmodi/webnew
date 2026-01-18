"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { heroHeadline, heroSubhead } from "@/lib/content";
import { CALENDLY_URL } from "@/lib/constants";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-slate-50 px-6">
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
      >
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {heroHeadline}
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          {heroSubhead}
        </p>
        <div className="pt-2">
          <Button asChild size="lg">
            <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
              Book a demo
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
