"use client";

import { useCallback, useEffect, useState } from "react";
import { Activity, Clock, MousePointerClick, RefreshCcw, UserRound } from "lucide-react";

type PageRow = {
  page: string;
  events: number;
  sessions: number;
};

type SessionPage = {
  page: string;
  event?: string | null;
  url?: string | null;
  referrer?: string | null;
  engagement_type?: string | null;
  click_text?: string | null;
  click_href?: string | null;
  click_tag?: string | null;
  utm_campaign?: string | null;
  time_on_page_ms?: number | null;
  created_at?: string | null;
};

type SessionRow = {
  session_id: string;
  contact_name?: string;
  contact_email?: string;
  firm_name?: string;
  link_code?: string | null;
  click_id?: string | null;
  source?: string | null;
  first_seen_at?: string | null;
  last_seen_at?: string | null;
  total_time_on_page_ms?: number;
  pages: SessionPage[];
};

type Analytics = {
  since_days: number;
  summary: {
    event_count: number;
    distinct_sessions: number;
    distinct_contacts: number;
    distinct_firms: number;
    total_time_on_page_ms: number;
  };
  pages: PageRow[];
  sessions: SessionRow[];
};

function formatTime(value?: string | null) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function formatDuration(ms?: number | null) {
  if (!ms) return "0s";
  const seconds = Math.round(ms / 1000);
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return rest ? `${minutes}m ${rest}s` : `${minutes}m`;
}

function compactPage(page: string) {
  if (!page || page === "home") return "/";
  return page.startsWith("/") ? page : `/${page}`;
}

function eventLabel(event?: string | null) {
  if (!event) return "event";
  if (event === "session_ready") return "view";
  if (event === "page_leave") return "time";
  return event.replace(/_/g, " ");
}

export default function EngagementAdminPage() {
  const [sinceDays, setSinceDays] = useState(30);
  const [data, setData] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [needsAuth, setNeedsAuth] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    try {
      setPassword(window.sessionStorage.getItem("pm_engagement_admin_password") || "");
    } catch {
      setPassword("");
    }
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/engagement?since_days=${sinceDays}&limit=100`, {
        cache: "no-store",
        headers: password ? { Authorization: `Bearer ${password}` } : {},
      });
      const body = await res.json();
      if (res.status === 401) {
        setNeedsAuth(true);
        throw new Error("Enter the Possible OS password to view engagement analytics.");
      }
      if (!res.ok) throw new Error(body.detail || body.error || "Could not load engagement analytics");
      setNeedsAuth(false);
      if (password) {
        try {
          window.sessionStorage.setItem("pm_engagement_admin_password", password);
        } catch {
          /* ignore */
        }
      }
      setData(body);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load engagement analytics");
    } finally {
      setLoading(false);
    }
  }, [password, sinceDays]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground">
      <div className="mx-auto grid w-full max-w-7xl gap-6">
        <header className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
          <div>
            <div className="text-sm font-semibold text-primary">Possible Minds</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Engagement analytics</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {[7, 30, 90].map((days) => (
              <button
                key={days}
                type="button"
                onClick={() => setSinceDays(days)}
                className={`rounded-md border px-3 py-2 text-sm font-semibold transition ${
                  sinceDays === days
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {days}d
              </button>
            ))}
            <button
              type="button"
              onClick={load}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground disabled:opacity-50"
            >
              <RefreshCcw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>
        </header>

        {error ? (
          <section className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
            {error}
          </section>
        ) : null}

        {needsAuth ? (
          <form
            className="grid gap-3 rounded-lg border border-border bg-card p-4 sm:grid-cols-[1fr_auto]"
            onSubmit={(event) => {
              event.preventDefault();
              load();
            }}
          >
            <label className="grid gap-2 text-sm font-semibold">
              Possible OS password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-10 rounded-md border border-border bg-background px-3 text-sm font-normal text-foreground outline-none transition focus:border-primary"
                autoComplete="current-password"
              />
            </label>
            <button
              type="submit"
              disabled={loading || !password}
              className="self-end rounded-md border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-50"
            >
              Unlock
            </button>
          </form>
        ) : null}

        <section className="grid gap-3 md:grid-cols-4">
          <Metric icon={Activity} label="Events" value={data?.summary.event_count || 0} />
          <Metric icon={UserRound} label="Sessions" value={data?.summary.distinct_sessions || 0} />
          <Metric icon={MousePointerClick} label="Contacts" value={data?.summary.distinct_contacts || 0} />
          <Metric icon={Clock} label="Time" value={formatDuration(data?.summary.total_time_on_page_ms || 0)} />
        </section>

        <section className="grid gap-6 lg:grid-cols-[380px_1fr]">
          <div className="rounded-lg border border-border bg-card p-4">
            <h2 className="text-sm font-semibold">Pages visited</h2>
            <div className="mt-4 divide-y divide-border">
              {data?.pages?.length ? data.pages.map((page) => (
                <div key={page.page} className="grid grid-cols-[1fr_auto] gap-3 py-3 text-sm">
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{compactPage(page.page)}</div>
                    <div className="text-xs text-muted-foreground">{page.sessions} sessions</div>
                  </div>
                  <div className="text-right font-mono text-sm text-muted-foreground">{page.events}</div>
                </div>
              )) : (
                <div className="py-6 text-sm text-muted-foreground">{loading ? "Loading..." : "No page events yet."}</div>
              )}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h2 className="text-sm font-semibold">Recent visitor journeys</h2>
            <div className="mt-4 grid gap-4">
              {data?.sessions?.length ? data.sessions.map((session) => (
                <article key={session.session_id} className="rounded-md border border-border bg-background p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold">{session.contact_name || "Unknown contact"}</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {[session.firm_name, session.contact_email].filter(Boolean).join(" · ") || "Unattributed visitor"}
                      </div>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      <div>{formatTime(session.last_seen_at)}</div>
                      <div>{formatDuration(session.total_time_on_page_ms)}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {session.source ? <span className="rounded border border-border px-2 py-1">{session.source}</span> : null}
                    {session.link_code ? <span className="rounded border border-border px-2 py-1">lc {session.link_code}</span> : null}
                    {session.click_id ? <span className="rounded border border-border px-2 py-1">click {session.click_id}</span> : null}
                  </div>
                  <div className="mt-4 overflow-hidden rounded-md border border-border">
                    {session.pages.map((page, index) => (
                      <div key={`${session.session_id}-${page.created_at || index}`} className="grid gap-2 border-b border-border px-3 py-3 text-sm last:border-b-0 md:grid-cols-[140px_1fr_auto]">
                        <div className="text-xs text-muted-foreground">{formatTime(page.created_at)}</div>
                        <div className="min-w-0">
                          <div className="flex min-w-0 flex-wrap items-center gap-2">
                            <span className="truncate font-semibold">{compactPage(page.page)}</span>
                            <span className="rounded border border-border px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                              {eventLabel(page.event)}
                            </span>
                          </div>
                          {page.click_text ? (
                            <div className="mt-1 truncate text-xs text-foreground">
                              Clicked {page.click_text}
                            </div>
                          ) : null}
                          {page.click_href ? (
                            <div className="truncate text-xs text-muted-foreground">{page.click_href}</div>
                          ) : null}
                          {page.url ? <div className="truncate text-xs text-muted-foreground">{page.url}</div> : null}
                        </div>
                        <div className="text-xs text-muted-foreground">{formatDuration(page.time_on_page_ms)}</div>
                      </div>
                    ))}
                  </div>
                </article>
              )) : (
                <div className="rounded-md border border-border p-6 text-sm text-muted-foreground">
                  {loading ? "Loading..." : "No visitor journeys yet."}
                </div>
              )}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Activity;
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
        <Icon className="h-4 w-4 text-primary" />
        {label}
      </div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
    </div>
  );
}
