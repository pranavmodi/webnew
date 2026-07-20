import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const intakeSignals = [
  "Priority cases escalated in seconds",
  "Your team gets context before responding",
  "Retainers and follow-up keep moving",
];

export function Hero() {
  return (
    <section className="relative -mt-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-[#04150d] via-black to-black" />

      <div className="relative mx-auto grid min-h-[72vh] max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div>
          <p className="text-sm font-semibold uppercase text-[#00ff41]">
            AI operating systems for personal injury firms
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Recover the PI cases your firm is already paying for.
          </h1>
          <p className="mt-6 border-l-2 border-[#00ff41]/60 pl-5 text-base leading-7 text-foreground/85 sm:text-lg sm:leading-8">
            Possible Minds helps serious prospects reach the right person while
            intent is still high. AI captures the inquiry, organizes the facts,
            and alerts the appropriate lawyer or intake closer. Your people
            build the relationship; the system removes the delay around them.
          </p>

          <div className="mt-7 hidden gap-3 sm:grid sm:grid-cols-3 lg:grid-cols-1 lg:gap-2">
            {intakeSignals.map((signal) => (
              <div
                key={signal}
                className="flex items-start gap-2 border-l border-white/20 pl-3 text-sm leading-6 text-white/80 sm:min-h-14 lg:min-h-0"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#00ff41]" />
                <span>{signal}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="animate-glow">
              <Link href="/consult">
                Find your intake leaks
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hidden sm:inline-flex"
            >
              <Link href="/law-case-study">See the results</Link>
            </Button>
          </div>
        </div>

        {/* Live intake queue. Aspect matches the source exactly (1200x900), so
            object-cover crops nothing and the panel stays on the same grid as
            the copy at every breakpoint. */}
        <div
          className="overflow-hidden border border-primary/20 bg-[#031009]"
          aria-hidden="true"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/video/hero-loop-poster.png"
            className="block aspect-[4/3] w-full object-cover motion-reduce:hidden"
          >
            <source
              src="/video/hero-loop-sm.mp4"
              media="(max-width: 1023px)"
              type="video/mp4"
            />
            <source src="/video/hero-loop.mp4" type="video/mp4" />
          </video>

          {/* Reduced-motion viewers get the still frame. */}
          <Image
            src="/video/hero-loop-poster.png"
            alt=""
            width={1200}
            height={900}
            priority
            className="hidden aspect-[4/3] w-full object-cover motion-reduce:block"
          />
        </div>
      </div>
    </section>
  );
}
