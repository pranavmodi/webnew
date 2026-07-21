"use client";

import { useRef, useState, type ReactNode } from "react";

type RevealPanelProps = {
  /** Label on the tap-to-reveal control before the content is shown. */
  buttonLabel: string;
  /** Funnel step emitted (once) when a human taps to reveal. */
  step?: string;
  /** Optional copy above the reveal control for a featured giveaway. */
  eyebrow?: string;
  description?: string;
  helperText?: string;
  /** Use the high-contrast landing-page treatment. */
  featured?: boolean;
  /** Keep useful actions visible after the content is revealed. */
  showCopyButton?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
  children: ReactNode;
};

/**
 * Gesture-gated content. The payload is hidden behind an explicit tap, and the
 * tap dispatches a `pm:funnel-step` event that ClickBeacon relays to the
 * lead-gen page-event endpoint. Email-security scanners run page JS but do not
 * tap arbitrary controls, so a `content_revealed` step is high-confidence human
 * evidence the raw `session_ready` beacon cannot give.
 */
export default function RevealPanel({
  buttonLabel,
  step = "content_revealed",
  eyebrow,
  description,
  helperText,
  featured = false,
  showCopyButton = false,
  ctaHref,
  ctaLabel = "Reserve a seat",
  children,
}: RevealPanelProps) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const reveal = () => {
    if (revealed) return;
    setRevealed(true);
    try {
      window.dispatchEvent(new CustomEvent("pm:funnel-step", { detail: { step } }));
    } catch {
      /* beacon relay is best-effort */
    }
  };

  const copyContent = async () => {
    const text = contentRef.current?.innerText.trim();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard access is best-effort */
    }
  };

  if (revealed) {
    return (
      <div
        className={
          featured
            ? "rounded-2xl border border-[#00ff41]/50 bg-[#04150d] p-5 shadow-[0_0_45px_rgba(0,255,65,0.12)] sm:p-6"
            : "space-y-3"
        }
      >
        {(featured || showCopyButton || ctaHref) && (
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00ff41]">
              Prompt revealed
            </span>
            <div className="flex flex-wrap gap-2">
              {showCopyButton && (
                <button
                  type="button"
                  onClick={copyContent}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-foreground transition hover:border-[#00ff41]/60 hover:text-[#00ff41]"
                >
                  {copied ? "Copied" : "Copy prompt"}
                </button>
              )}
              {ctaHref && (
                <a
                  href={ctaHref}
                  className="rounded-full bg-[#00ff41] px-3 py-1.5 text-xs font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
                >
                  {ctaLabel}
                </a>
              )}
            </div>
          </div>
        )}
        <div ref={contentRef}>{children}</div>
      </div>
    );
  }

  if (featured) {
    return (
      <div className="rounded-2xl border border-[#00ff41]/40 bg-[#031b10] p-5 shadow-[0_0_55px_rgba(0,255,65,0.14)] sm:p-6">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00ff41]">
            {eyebrow}
          </p>
        )}
        {description && (
          <p className="mt-3 text-sm leading-6 text-foreground/75">{description}</p>
        )}
        <button
          type="button"
          onClick={reveal}
          data-pm-funnel={step}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00ff41] px-5 py-4 text-base font-bold text-[#04150d] shadow-[0_0_30px_rgba(0,255,65,0.28)] transition hover:-translate-y-0.5 hover:bg-[#37ff69] hover:shadow-[0_0_42px_rgba(0,255,65,0.4)]"
        >
          {buttonLabel}
          <span aria-hidden="true">↓</span>
        </button>
        {helperText && (
          <p className="mt-3 text-center text-xs text-foreground/55">{helperText}</p>
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={reveal}
      data-pm-funnel={step}
      className="flex w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-[#04150d] px-5 py-4 text-sm font-semibold text-[#00ff41] transition hover:bg-[#04150d]/70"
    >
      {buttonLabel}
      <span aria-hidden="true">↓</span>
    </button>
  );
}
