import { ArrowDownRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type BlogContentsItem = {
  id: string;
  label: string;
};

export function BlogTableOfContents({
  items,
  faqHref,
  className,
  contained = true,
}: {
  items: BlogContentsItem[];
  faqHref?: string;
  className?: string;
  contained?: boolean;
}) {
  if (!items.length) return null;

  const navigation = (
    <nav
      aria-labelledby="article-contents"
      className={cn(
        "border-y border-primary/30 bg-black/65 text-left backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-end justify-between gap-6 border-b border-primary/20 px-1 py-4 sm:px-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            Article navigation
          </p>
          <h2
            id="article-contents"
            className="mt-1 text-xl font-semibold leading-tight text-foreground sm:text-2xl"
          >
            Table of contents
          </h2>
        </div>
        <p className="hidden text-right text-xs text-foreground/50 sm:block">
          {items.length} {items.length === 1 ? "section" : "sections"}
        </p>
      </div>
      <ol className="divide-y divide-primary/15">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group grid min-h-9 grid-cols-[2.25rem_1fr_1.25rem] items-center gap-2 px-1 py-1.5 text-sm leading-5 text-foreground/80 transition hover:bg-primary/[0.045] hover:text-primary sm:px-4"
            >
              <span className="text-xs font-semibold text-primary/60 group-hover:text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.label}</span>
              <ArrowDownRight
                aria-hidden="true"
                className="h-4 w-4 text-primary/35 transition group-hover:text-primary"
              />
            </a>
          </li>
        ))}
      </ol>
      {faqHref ? (
        <div className="border-t border-primary/20 px-1 py-3 sm:px-4">
          <a
            href={faqHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary underline decoration-primary/35 underline-offset-4 transition hover:decoration-primary"
          >
            Jump to common questions
            <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      ) : null}
    </nav>
  );

  if (!contained) return navigation;

  return (
    <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6">
      {navigation}
    </div>
  );
}
