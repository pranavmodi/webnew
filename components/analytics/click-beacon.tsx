"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const AUTOCALLER_API =
  process.env.NEXT_PUBLIC_AUTOCALLER_API_URL ||
  "https://autocaller.getpossibleminds.com";

type ClickBeaconProps = {
  page?: string;
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

function getPersistedParam(param: string, storageKey: string) {
  try {
    const params = new URLSearchParams(window.location.search);
    const value = params.get(param);
    if (value) {
      window.sessionStorage.setItem(storageKey, value);
      return value;
    }
    return window.sessionStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

export default function ClickBeacon({
  page: explicitPage,
  event = "session_ready",
}: ClickBeaconProps) {
  const pathname = usePathname();

  useEffect(() => {
    const mountedAt = Date.now();
    let sentLeave = false;
    const page = (
      explicitPage ??
      (window.location.pathname.replace(/^\/+|\/+$/g, "") || "home")
    ).slice(0, 64);
    const linkCode = getPersistedParam("lc", "pm_link_code");
    const clickId = getPersistedParam("c", "pm_click_id");
    const source = getPersistedParam("src", "pm_tracking_source");
    const sessionId = getSessionId();
    const url = `${AUTOCALLER_API}/api/lead-gen/page-event`;

    const makeBody = (timeOnPageMs: number) =>
      JSON.stringify({
        event,
        page,
        link_code: linkCode,
        click_id: clickId,
        source,
        session_id: sessionId,
        time_on_page_ms: timeOnPageMs,
        url: window.location.href,
        referrer: document.referrer || null,
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

    sendWithFetch(makeBody(0));

    const sendLeave = () => {
      if (sentLeave) return;
      sentLeave = true;

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
  }, [event, explicitPage, pathname]);

  return null;
}
