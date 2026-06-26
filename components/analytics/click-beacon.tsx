"use client";

import { useEffect, useRef } from "react";

const AUTOCALLER_API =
  process.env.NEXT_PUBLIC_AUTOCALLER_API_URL ||
  "https://autocaller.getpossibleminds.com";

type ClickBeaconProps = {
  page: string;
  event?: string;
};

function createSessionId() {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

function getSessionId() {
  try {
    const existing = window.sessionStorage.getItem("pm_session_id");
    if (existing) return existing;

    const sessionId = createSessionId();
    window.sessionStorage.setItem("pm_session_id", sessionId);
    return sessionId;
  } catch {
    return createSessionId();
  }
}

function getLinkCode() {
  try {
    return new URLSearchParams(window.location.search).get("lc");
  } catch {
    return null;
  }
}

export default function ClickBeacon({
  page,
  event = "session_ready",
}: ClickBeaconProps) {
  const sentMount = useRef(false);
  const sentLeave = useRef(false);

  useEffect(() => {
    const mountedAt = Date.now();
    const linkCode = getLinkCode();
    const sessionId = getSessionId();
    const url = `${AUTOCALLER_API}/api/lead-gen/page-event`;

    const makeBody = (timeOnPageMs: number) =>
      JSON.stringify({
        event,
        page,
        link_code: linkCode,
        session_id: sessionId,
        time_on_page_ms: timeOnPageMs,
      });

    const sendWithFetch = (body: string) => {
      try {
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
          keepalive: true,
        }).catch(() => {});
      } catch {
        /* ignore */
      }
    };

    if (!sentMount.current) {
      sentMount.current = true;
      sendWithFetch(makeBody(0));
    }

    const sendLeave = () => {
      if (sentLeave.current) return;
      sentLeave.current = true;

      const body = makeBody(Date.now() - mountedAt);

      try {
        if (navigator.sendBeacon) {
          const queued = navigator.sendBeacon(
            url,
            new Blob([body], { type: "application/json" }),
          );
          if (queued) return;
        }
      } catch {
        /* fall back to fetch */
      }

      sendWithFetch(body);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendLeave();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", sendLeave);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", sendLeave);
    };
  }, [event, page]);

  return null;
}
