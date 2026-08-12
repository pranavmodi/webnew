"use client";

import { Clock3, Mail, RefreshCcw, UserRound } from "lucide-react";
import { useCallback, useEffect, useState } from "react";


type Session = {
  id: number;
  session_id: string;
  state: string;
  personalization: { first_name?: string; firm_name?: string };
  created_at: string;
  duration_seconds?: number;
  summary?: string;
  email?: string;
  report_state: string;
  feedback_value?: string;
  transcript_count: number;
};

type Detail = Session & {
  diagnosis?: string;
  next_actions: string[];
  transcript: { sequence: number; speaker: string; text: string }[];
  sources: { title: string; url: string }[];
  recordings: { channel: string; byte_count: number }[];
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date(value));
}

export default function AdvisorAdminPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [selected, setSelected] = useState<Detail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/advisor?limit=200", { cache: "no-store" });
      const body = await response.json();
      if (!response.ok) throw new Error(body.detail || "Could not load advisor sessions");
      setSessions(body.sessions || []);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not load advisor sessions");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  async function selectSession(id: number) {
    const response = await fetch(`/api/admin/advisor/${id}`, { cache: "no-store" });
    if (response.ok) setSelected(await response.json());
  }

  const reportCount = sessions.filter((row) => row.report_state === "manual_report_requested").length;
  const totalSeconds = sessions.reduce((sum, row) => sum + (row.duration_seconds || 0), 0);

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground">
      <div className="mx-auto grid w-full max-w-7xl gap-6">
        <header className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
          <div>
            <div className="text-sm font-semibold text-primary">Possible Minds</div>
            <h1 className="mt-2 text-3xl font-semibold text-primary">Mira consultations</h1>
          </div>
          <button onClick={load} disabled={loading} className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
            <RefreshCcw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} /> Refresh
          </button>
        </header>

        {error ? <div className="border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">{error}</div> : null}

        <section className="grid gap-3 sm:grid-cols-3">
          <Metric icon={UserRound} label="Consultations" value={sessions.length} />
          <Metric icon={Mail} label="Reports requested" value={reportCount} />
          <Metric icon={Clock3} label="Conversation time" value={`${Math.round(totalSeconds / 60)}m`} />
        </section>

        <section className="grid gap-5 lg:grid-cols-[390px_1fr]">
          <div className="border border-border bg-card">
            <div className="border-b border-border p-4 text-sm font-semibold">Recent consultations</div>
            <div className="max-h-[720px] divide-y divide-border overflow-y-auto">
              {sessions.map((row) => (
                <button key={row.id} onClick={() => selectSession(row.id)} className="block w-full p-4 text-left hover:bg-primary/[0.05]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="truncate text-sm font-semibold">{row.personalization?.first_name || "Unknown visitor"}</span>
                    <span className="text-xs text-muted-foreground">{row.state}</span>
                  </div>
                  <div className="mt-1 truncate text-xs text-muted-foreground">{row.personalization?.firm_name || row.email || "Unknown firm"}</div>
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground"><span>{formatDate(row.created_at)}</span><span>{row.transcript_count} turns</span></div>
                </button>
              ))}
              {!sessions.length ? <div className="p-6 text-sm text-muted-foreground">{loading ? "Loading..." : "No consultations yet."}</div> : null}
            </div>
          </div>

          <div className="min-h-[500px] border border-border bg-card p-5">
            {selected ? (
              <div className="space-y-7">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-primary/70">Diagnosis</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{selected.diagnosis || "No completed diagnosis."}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-primary/70">Summary</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{selected.summary || "No summary yet."}</p>
                </div>
                {selected.next_actions?.length ? <ol className="space-y-2 text-sm text-foreground/80">{selected.next_actions.map((item, index) => <li key={item}>{index + 1}. {item}</li>)}</ol> : null}
                {selected.recordings?.length ? (
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-primary/70">Recordings</p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {selected.recordings.map((recording) => (
                        <div key={recording.channel} className="border border-border p-3">
                          <div className="mb-2 text-xs font-semibold capitalize text-foreground/70">{recording.channel}</div>
                          <audio controls preload="none" className="h-9 w-full" src={`/api/admin/advisor/${selected.id}/recordings/${recording.channel}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-primary/70">Transcript</p>
                  <div className="mt-3 max-h-[380px] space-y-4 overflow-y-auto border-l border-border pl-4">
                    {selected.transcript?.map((row) => <div key={row.sequence}><div className="text-xs font-semibold text-primary/70">{row.speaker}</div><p className="mt-1 text-sm leading-relaxed text-foreground/75">{row.text}</p></div>)}
                  </div>
                </div>
              </div>
            ) : <div className="flex min-h-[450px] items-center justify-center text-sm text-muted-foreground">Select a consultation to review its transcript and summary.</div>}
          </div>
        </section>
      </div>
    </main>
  );
}

function Metric({ icon: Icon, label, value }: { icon: typeof UserRound; label: string; value: number | string }) {
  return <div className="border border-border bg-card p-4"><Icon className="h-4 w-4 text-primary" /><div className="mt-4 text-2xl font-semibold">{value}</div><div className="mt-1 text-xs text-muted-foreground">{label}</div></div>;
}
