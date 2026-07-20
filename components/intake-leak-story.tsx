import Image from "next/image";

export function IntakeLeakStory() {
  return (
    <section className="border-b border-primary/15 bg-[#06170f]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase text-primary">
            The unstaffed moment
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            The case you lost at 2:47 in the morning.
          </h2>
          <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg">
            A serious inquiry should not wait in an inbox until morning. The
            system acknowledges it transparently, organizes the facts, and alerts
            the right person. AI removes the delay; your team builds the trust.
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden border border-primary/20 bg-black">
          <Image
            src="/blog/law-intake.png"
            alt="A personal injury intake professional prepared to respond to an overnight inquiry"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute left-4 top-4 border border-white/20 bg-black/80 px-3 py-2 font-mono text-xs text-white/80">
            02:47 AM · WEB INQUIRY RECEIVED
          </div>
          <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-black/85 p-4 sm:p-5">
            <p className="text-sm font-semibold text-white">
              AI organizes. Human intake responds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
