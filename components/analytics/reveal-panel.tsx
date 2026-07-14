"use client";

import { useState, type ReactNode } from "react";

type RevealPanelProps = {
  /** Label on the tap-to-reveal control before the content is shown. */
  buttonLabel: string;
  /** Funnel step emitted (once) when a human taps to reveal. */
  step?: string;
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
  children,
}: RevealPanelProps) {
  const [revealed, setRevealed] = useState(false);

  const reveal = () => {
    if (revealed) return;
    setRevealed(true);
    try {
      window.dispatchEvent(new CustomEvent("pm:funnel-step", { detail: { step } }));
    } catch {
      /* beacon relay is best-effort */
    }
  };

  if (revealed) return <>{children}</>;

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
