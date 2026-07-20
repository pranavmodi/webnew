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
      <div className="absolute inset-0" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/video/hero-loop-poster.png"
          className="h-full w-full object-cover object-center motion-reduce:hidden"
        >
          <source
            src="/video/hero-loop-720p.mp4"
            media="(max-width: 768px)"
            type="video/mp4"
          />
          <source src="/video/hero-loop-1080p.mp4" type="video/mp4" />
        </video>

        {/* Reduced-motion viewers get the still frame, same treatment. */}
        <Image
          src="/video/hero-loop-poster.png"
          alt=""
          fill
          priority
          className="hidden object-cover object-center motion-reduce:block"
        />

        {/* Lighter than the photo treatment this replaced: the old black/70 plus
            a via-black/85 gradient passed only ~13% of the video through on the
            right, which erased the queue entirely. */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/25" />
      </div>

      <div className="relative mx-auto flex min-h-[72vh] max-w-6xl items-center px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#00ff41]">
            AI operating systems for personal injury firms
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Recover the PI cases your firm is already paying for.
          </h1>
          <p className="mt-6 max-w-2xl border-l-2 border-[#00ff41]/60 pl-5 text-base leading-7 text-foreground/85 sm:text-xl sm:leading-8">
            Possible Minds helps serious prospects reach the right person while
            intent is still high. AI captures the inquiry, organizes the facts,
            and alerts the appropriate lawyer or intake closer. Your people
            build the relationship; the system removes the delay around them.
          </p>

          <div className="mt-7 hidden max-w-2xl gap-3 sm:grid sm:grid-cols-3">
            {intakeSignals.map((signal) => (
              <div
                key={signal}
                className="flex min-h-14 items-start gap-2 border-l border-white/20 pl-3 text-sm leading-6 text-white/80"
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
      </div>
    </section>
  );
}
