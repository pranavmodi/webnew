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

type EventDetails = Record<string, string | number | null>;

function createSessionId() {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

function getSessionId() {
  const trackedSessionId = getPersistedParam(["session_id", "sid"], "pm_session_id");
  if (trackedSessionId) return trackedSessionId;

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

function getPersistedParam(params: string[], storageKey: string) {
  try {
    const searchParams = new URLSearchParams(window.location.search);
    const value = params.map((param) => searchParams.get(param)).find(Boolean);
    if (value) {
      window.sessionStorage.setItem(storageKey, value);
      return value;
    }
    return window.sessionStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

function attributionFields() {
  const source = getPersistedParam(["src", "source", "utm_source"], "pm_tracking_source");

  return {
    link_code: getPersistedParam(["lc", "link_code"], "pm_link_code"),
    click_id: getPersistedParam(["c", "click_id"], "pm_click_id"),
    source,
    firm_name: getPersistedParam(["firm_name", "firm"], "pm_firm_name"),
    pif_id: getPersistedParam(["pif_id"], "pm_pif_id"),
    contact_id: getPersistedParam(["contact_id"], "pm_contact_id"),
    contact_name: getPersistedParam(["contact_name", "name"], "pm_contact_name"),
    contact_email: getPersistedParam(["contact_email", "email"], "pm_contact_email"),
    utm_source: getPersistedParam(["utm_source"], "pm_utm_source") || source,
    utm_medium: getPersistedParam(["utm_medium"], "pm_utm_medium"),
    utm_campaign: getPersistedParam(["utm_campaign"], "pm_utm_campaign"),
    utm_term: getPersistedParam(["utm_term"], "pm_utm_term"),
    utm_content: getPersistedParam(["utm_content"], "pm_utm_content"),
  };
}

function clickDetails(target: EventTarget | null): EventDetails | null {
  if (!(target instanceof Element)) return null;
  const element = target.closest("a,button,[role='button']");
  if (!element) return null;

  const text = (element.textContent || element.getAttribute("aria-label") || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180);
  const href = element instanceof HTMLAnchorElement
    ? element.href
    : element.getAttribute("href");

  return {
    engagement_type: "click",
    click_text: text || element.tagName.toLowerCase(),
    click_href: href,
    click_tag: element.tagName.toLowerCase(),
    click_id_attr: element.id || null,
  };
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
    const attribution = attributionFields();
    const sessionId = getSessionId();
    const url = `${AUTOCALLER_API}/api/lead-gen/page-event`;

    const makeBody = (
      eventName: string,
      timeOnPageMs: number,
      details: EventDetails = {},
    ) =>
      JSON.stringify({
        event: eventName,
        page,
        ...attribution,
        session_id: sessionId,
        time_on_page_ms: timeOnPageMs,
        url: window.location.href,
        referrer: document.referrer || null,
        ...details,
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

    sendWithFetch(makeBody(event, 0));

    const handleClick = (clickEvent: MouseEvent) => {
      const details = clickDetails(clickEvent.target);
      if (!details) return;
      sendWithFetch(makeBody("click", Date.now() - mountedAt, details));
    };

    const sendLeave = () => {
      if (sentLeave) return;
      sentLeave = true;

      const body = makeBody("page_leave", Date.now() - mountedAt);

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
    document.addEventListener("click", handleClick, { capture: true });
    window.addEventListener("pagehide", sendLeave);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("click", handleClick, { capture: true });
      window.removeEventListener("pagehide", sendLeave);
    };
  }, [event, explicitPage, pathname]);

  return null;
}
