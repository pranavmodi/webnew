import Image from "next/image";

export function IntakeLeakVideo() {
  return (
    <section className="border-b border-primary/15 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-primary">
            Ninety seconds
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            The case you lost at 2:47 in the morning.
          </h2>
          <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg">
            What happens to a serious inquiry between the moment it arrives and
            the moment someone calls back — and what changes when an execution
            layer sits underneath it.
          </p>
        </div>

        <div className="mt-12 overflow-hidden border border-primary/20 bg-[#031009]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/video/hero-poster.png"
            aria-label="A personal injury inquiry arrives at 2:47 AM and goes unanswered for six hours, then the same inquiry handled by an AI intake system in under 90 seconds."
            className="block aspect-video w-full motion-reduce:hidden"
          >
            <source
              src="/video/possibleminds-hero-720p.mp4"
              media="(max-width: 768px)"
              type="video/mp4"
            />
            <source
              src="/video/possibleminds-hero-1080p.mp4"
              type="video/mp4"
            />
          </video>

          {/* Users who ask the OS for reduced motion get the still frame instead. */}
          <Image
            src="/video/hero-poster.png"
            alt="34% more signed cases, $2.1M added annual revenue, 70% faster intake — results from a 15-attorney Southern California personal injury firm."
            width={1920}
            height={1080}
            className="hidden aspect-video w-full motion-reduce:block"
          />
        </div>
      </div>
    </section>
  );
}
