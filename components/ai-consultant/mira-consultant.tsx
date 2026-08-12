"use client";

import {
  ArrowRight,
  BookOpen,
  Check,
  Clock3,
  Mail,
  Mic,
  MicOff,
  Send,
  ShieldCheck,
  Square,
  ThumbsDown,
  ThumbsUp,
  Volume2,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";


const API =
  process.env.NEXT_PUBLIC_ADVISOR_API_URL ||
  "https://intakeos.getpossibleminds.com/advisor";
const CONSENT_VERSION = "mira-recording-v1";

type Preview = {
  advisor_name: string;
  consent_version: string;
  personalization: {
    personalized: boolean;
    first_name?: string;
    firm_name?: string;
  };
  recording_notice: string;
};

type TranscriptRow = { speaker: "visitor" | "mira"; text: string };
type Source = { title: string; url: string };
type Summary = { summary: string; next_actions: string[] };

type AudioRuntime = {
  socket: WebSocket | null;
  stream: MediaStream | null;
  inputContext: AudioContext | null;
  outputContext: AudioContext | null;
  inputSource: MediaStreamAudioSourceNode | null;
  inputProcessor: ScriptProcessorNode | null;
  silentGain: GainNode | null;
  playbackCursor: number;
  playbackSources: Set<AudioBufferSourceNode>;
};

function attribution() {
  const keys = [
    "pm_link_code",
    "pm_click_id",
    "pm_tracking_source",
    "pm_utm_source",
    "pm_utm_medium",
    "pm_utm_campaign",
    "pm_utm_term",
    "pm_utm_content",
  ];
  const result: Record<string, string> = {};
  for (const key of keys) {
    const value = sessionStorage.getItem(key);
    if (value) result[key.replace(/^pm_/, "")] = value;
  }
  return result;
}

function emitStep(step: string) {
  window.dispatchEvent(new CustomEvent("pm:funnel-step", { detail: { step } }));
}

function downsample(input: Float32Array, inputRate: number, outputRate = 16000) {
  if (inputRate <= outputRate) {
    const direct = new Int16Array(input.length);
    for (let i = 0; i < input.length; i += 1) {
      direct[i] = Math.max(-32768, Math.min(32767, input[i] * 32768));
    }
    return direct.buffer;
  }
  const ratio = inputRate / outputRate;
  const output = new Int16Array(Math.max(1, Math.round(input.length / ratio)));
  for (let i = 0; i < output.length; i += 1) {
    const start = Math.floor(i * ratio);
    const end = Math.min(input.length, Math.floor((i + 1) * ratio));
    let sum = 0;
    for (let j = start; j < end; j += 1) sum += input[j];
    output[i] = Math.max(-32768, Math.min(32767, (sum / Math.max(1, end - start)) * 32768));
  }
  return output.buffer;
}

function timeLabel(seconds: number) {
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

export function MiraConsultant({ invite }: { invite: string }) {
  const [preview, setPreview] = useState<Preview | null>(null);
  const [identity, setIdentity] = useState<"pending" | "yes" | "no">("pending");
  const [state, setState] = useState<"intro" | "connecting" | "active" | "summary">("intro");
  const [status, setStatus] = useState("Ready when you are");
  const [error, setError] = useState("");
  const [muted, setMuted] = useState(false);
  const mutedRef = useRef(false);
  const [elapsed, setElapsed] = useState(0);
  const [typed, setTyped] = useState("");
  const [transcript, setTranscript] = useState<TranscriptRow[]>([]);
  const [sources, setSources] = useState<Source[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [email, setEmail] = useState("");
  const [emailSaved, setEmailSaved] = useState(false);
  const [feedback, setFeedback] = useState<"helpful" | "not_helpful" | "">("");
  const [feedbackComment, setFeedbackComment] = useState("");
  const session = useRef<{ id: string; token: string } | null>(null);
  const activeInvite = useRef(invite);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const transcriptEnd = useRef<HTMLDivElement | null>(null);
  const runtime = useRef<AudioRuntime>({
    socket: null,
    stream: null,
    inputContext: null,
    outputContext: null,
    inputSource: null,
    inputProcessor: null,
    silentGain: null,
    playbackCursor: 0,
    playbackSources: new Set(),
  });

  const personalized = Boolean(preview?.personalization.personalized && identity !== "no");
  const identityResolved = !preview?.personalization.personalized || identity !== "pending";

  useEffect(() => {
    const retainedInvite = invite || sessionStorage.getItem("pm_link_code") || "";
    activeInvite.current = retainedInvite;
    const url = new URL(`${API}/v1/sites/possible-minds/preview`);
    if (retainedInvite) url.searchParams.set("invite", retainedInvite);
    fetch(url, { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Could not prepare Mira");
        return response.json();
      })
      .then((body: Preview) => {
        setPreview(body);
        if (!body.personalization.personalized) setIdentity("no");
      })
      .catch(() => {
        setPreview({
          advisor_name: "Mira",
          consent_version: CONSENT_VERSION,
          personalization: { personalized: false },
          recording_notice:
            "This AI conversation will be recorded and transcribed for personalized guidance, follow-up, and service improvement.",
        });
        setIdentity("no");
      });
  }, [invite]);

  useEffect(() => {
    transcriptEnd.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [transcript]);

  useEffect(() => () => {
    if (timer.current) clearInterval(timer.current);
    const active = runtime.current;
    active.stream?.getTracks().forEach((track) => track.stop());
    active.inputProcessor?.disconnect();
    active.inputSource?.disconnect();
    active.silentGain?.disconnect();
    active.playbackSources.forEach((source) => {
      try { source.stop(); } catch { /* already ended */ }
    });
    void active.inputContext?.close().catch(() => undefined);
    void active.outputContext?.close().catch(() => undefined);
  }, []);

  const sourceMap = useMemo(
    () => Array.from(new Map(sources.map((source) => [source.url, source])).values()),
    [sources],
  );

  function clearPlayback() {
    runtime.current.playbackSources.forEach((source) => {
      try { source.stop(); } catch { /* already ended */ }
    });
    runtime.current.playbackSources.clear();
    runtime.current.playbackCursor = runtime.current.outputContext?.currentTime || 0;
  }

  async function playPcm(buffer: ArrayBuffer, sourceRate = 24000) {
    if (!buffer.byteLength) return;
    if (!runtime.current.outputContext || runtime.current.outputContext.state === "closed") {
      runtime.current.outputContext = new AudioContext();
    }
    const context = runtime.current.outputContext;
    await context.resume();
    const samples = new Int16Array(buffer);
    const outputLength = Math.max(1, Math.round(samples.length * context.sampleRate / sourceRate));
    const audioBuffer = context.createBuffer(1, outputLength, context.sampleRate);
    const channel = audioBuffer.getChannelData(0);
    for (let i = 0; i < outputLength; i += 1) {
      const position = i * sourceRate / context.sampleRate;
      const left = Math.floor(position);
      const right = Math.min(samples.length - 1, left + 1);
      const fraction = position - left;
      channel[i] = ((samples[left] * (1 - fraction)) + (samples[right] * fraction)) / 32768;
    }
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    const startAt = Math.max(context.currentTime + 0.02, runtime.current.playbackCursor);
    source.start(startAt);
    runtime.current.playbackCursor = startAt + audioBuffer.duration;
    runtime.current.playbackSources.add(source);
    source.onended = () => runtime.current.playbackSources.delete(source);
  }

  async function startMicrophone(stream: MediaStream) {
    const context = new AudioContext();
    await context.resume();
    const source = context.createMediaStreamSource(stream);
    const processor = context.createScriptProcessor(4096, 1, 1);
    const gain = context.createGain();
    gain.gain.value = 0;
    processor.onaudioprocess = (event) => {
      const socket = runtime.current.socket;
      if (mutedRef.current || socket?.readyState !== WebSocket.OPEN) return;
      socket.send(downsample(event.inputBuffer.getChannelData(0), context.sampleRate));
    };
    source.connect(processor);
    processor.connect(gain);
    gain.connect(context.destination);
    runtime.current.inputContext = context;
    runtime.current.inputSource = source;
    runtime.current.inputProcessor = processor;
    runtime.current.silentGain = gain;
  }

  async function stopAudio(closeSocket = true) {
    if (timer.current) clearInterval(timer.current);
    const active = runtime.current;
    if (closeSocket && active.socket?.readyState === WebSocket.OPEN) {
      active.socket.send(JSON.stringify({ type: "disconnect" }));
      active.socket.close(1000, "visitor_finished");
    }
    active.stream?.getTracks().forEach((track) => track.stop());
    active.inputProcessor?.disconnect();
    active.inputSource?.disconnect();
    active.silentGain?.disconnect();
    clearPlayback();
    await active.inputContext?.close().catch(() => undefined);
    await active.outputContext?.close().catch(() => undefined);
  }

  function liveUrl(publicId: string) {
    const url = new URL(API);
    url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
    url.pathname = `${url.pathname.replace(/\/$/, "")}/v1/sessions/${publicId}/live`;
    url.search = "";
    return url.toString();
  }

  async function begin() {
    setError("");
    setState("connecting");
    setStatus("Preparing your consultation");
    emitStep("advisor_start");
    let stream: MediaStream | null = null;
    try {
      stream = await navigator.mediaDevices?.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
        video: false,
      });
    } catch {
      setStatus("Microphone unavailable. Typed conversation is ready.");
    }
    try {
      const browserSessionId = sessionStorage.getItem("pm_session_id");
      const response = await fetch(`${API}/v1/sites/possible-minds/sessions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          browser_session_id: browserSessionId,
          invite: activeInvite.current || null,
          identity_confirmed: personalized,
          consent_version: preview?.consent_version || CONSENT_VERSION,
          attribution: attribution(),
        }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.detail || "Could not start the consultation");
      session.current = { id: body.session_id, token: body.capability_token };
      runtime.current.stream = stream;
      const socket = new WebSocket(liveUrl(body.session_id));
      socket.binaryType = "arraybuffer";
      runtime.current.socket = socket;
      socket.onopen = () => socket.send(JSON.stringify({ capability_token: body.capability_token }));
      socket.onmessage = async (event) => {
        if (event.data instanceof ArrayBuffer) {
          await playPcm(event.data);
          return;
        }
        const message = JSON.parse(String(event.data));
        if (message.type === "ready") {
          setState("active");
          setStatus(stream ? "Listening" : "Type below to talk with Mira");
          if (stream) await startMicrophone(stream);
          timer.current = setInterval(() => setElapsed((value) => value + 1), 1000);
        } else if (message.type === "reconnecting") {
          setStatus("Reconnecting without losing the conversation");
        } else if (message.type === "transcript_delta") {
          // Complete turns are added below; deltas provide a responsive status cue.
          setStatus(message.speaker === "mira" ? "Mira is speaking" : "Listening");
        } else if (message.type === "turn_complete") {
          setTranscript((rows) => [
            ...rows,
            ...(message.visitor_transcript ? [{ speaker: "visitor" as const, text: message.visitor_transcript }] : []),
            ...(message.mira_transcript ? [{ speaker: "mira" as const, text: message.mira_transcript }] : []),
          ]);
          setStatus("Listening");
        } else if (message.type === "sources") {
          setSources((rows) => [...rows, ...(message.sources || [])]);
        } else if (message.type === "audio_interrupted") {
          clearPlayback();
          setStatus("Listening");
        } else if (message.type === "summary_ready") {
          setSummary({ summary: message.summary, next_actions: message.next_actions || [] });
          emitStep("advisor_summary");
        } else if (message.type === "error") {
          setError(message.message || "The consultation ended unexpectedly.");
        }
      };
      socket.onerror = () => setError("The live connection could not be established.");
      socket.onclose = () => {
        if (!summary) setStatus("Conversation ended");
      };
    } catch (caught) {
      stream?.getTracks().forEach((track) => track.stop());
      setState("intro");
      setError(caught instanceof Error ? caught.message : "Could not start the consultation");
    }
  }

  function sendTyped(event: FormEvent) {
    event.preventDefault();
    const value = typed.trim();
    if (!value || runtime.current.socket?.readyState !== WebSocket.OPEN) return;
    runtime.current.socket.send(JSON.stringify({ type: "text", text: value }));
    setTyped("");
  }

  function toggleMute() {
    const next = !muted;
    setMuted(next);
    mutedRef.current = next;
    runtime.current.stream?.getAudioTracks().forEach((track) => { track.enabled = !next; });
    if (next && runtime.current.socket?.readyState === WebSocket.OPEN) {
      runtime.current.socket.send(JSON.stringify({ type: "audio_stream_end" }));
    }
  }

  function requestSummary() {
    runtime.current.socket?.send(JSON.stringify({ type: "request_summary" }));
    setStatus("Mira is preparing your summary");
  }

  async function finish() {
    setState("summary");
    await stopAudio();
    if (session.current) {
      await fetch(`${API}/v1/sessions/${session.current.id}/end`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Advisor-Capability": session.current.token,
        },
        body: JSON.stringify({ reason: "summary_viewed" }),
      }).catch(() => undefined);
    }
  }

  async function saveEmail(event: FormEvent) {
    event.preventDefault();
    if (!session.current || !email.trim()) return;
    const response = await fetch(`${API}/v1/sessions/${session.current.id}/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Advisor-Capability": session.current.token,
      },
      body: JSON.stringify({ email: email.trim() }),
    });
    if (response.ok) {
      setEmailSaved(true);
      emitStep("advisor_email");
    }
  }

  async function saveFeedback(value: "helpful" | "not_helpful") {
    setFeedback(value);
    if (!session.current) return;
    await fetch(`${API}/v1/sessions/${session.current.id}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Advisor-Capability": session.current.token,
      },
      body: JSON.stringify({ value, comment: feedbackComment || null }),
    }).catch(() => undefined);
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-black pb-20">
      <section className="border-b border-primary/20 bg-[#03110b]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
              Free operational consultation
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-primary sm:text-5xl">
              Talk through your firm&apos;s AI decisions with Mira.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
              Get practical guidance on intake performance, where to start with AI,
              team adoption, or vendor risk. Mira asks about your operation before
              recommending a next step.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-foreground/65 sm:grid-cols-2">
              {["PI intake performance", "First AI workflow", "Change management", "Vendor governance"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-primary/25 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            {state === "intro" || state === "connecting" ? (
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 border-b border-border pb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                    <Volume2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-primary">Mira</h2>
                    <p className="text-sm text-muted-foreground">Possible Minds AI Advisor</p>
                  </div>
                </div>

                {preview?.personalization.personalized && identity === "pending" ? (
                  <div className="py-8">
                    <p className="text-lg leading-relaxed text-foreground/85">
                      This consultation was prepared for {preview.personalization.first_name} at {preview.personalization.firm_name}.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">Is that you?</p>
                    <div className="mt-5 flex gap-3">
                      <button onClick={() => setIdentity("yes")} className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Yes</button>
                      <button onClick={() => setIdentity("no")} className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground/80">No, start fresh</button>
                    </div>
                  </div>
                ) : (
                  <div className="py-7">
                    {personalized ? (
                      <p className="mb-5 text-base text-foreground/80">
                        Mira will use the approved context prepared for {preview?.personalization.firm_name} and confirm important details with you.
                      </p>
                    ) : null}
                    <div className="flex gap-3 border border-primary/20 bg-primary/[0.06] p-4 text-sm leading-relaxed text-foreground/70">
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p>{preview?.recording_notice || "Preparing the consultation terms..."}</p>
                    </div>
                    {error ? <p className="mt-4 text-sm text-red-400">{error}</p> : null}
                    <button
                      type="button"
                      onClick={begin}
                      disabled={!preview || !identityResolved || state === "connecting"}
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {state === "connecting" ? "Connecting..." : "Agree and start conversation"}
                      {state !== "connecting" ? <ArrowRight className="h-4 w-4" /> : null}
                    </button>
                    <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
                      Operational guidance only. Mira does not provide legal advice or assess cases.
                    </p>
                  </div>
                )}
              </div>
            ) : state === "active" ? (
              <div className="grid min-h-[610px] grid-rows-[auto_1fr_auto]">
                <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold">Mira</div>
                      <div className="text-xs text-muted-foreground">{status}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <Clock3 className="h-4 w-4" /> {timeLabel(elapsed)}
                  </div>
                </div>

                <div className="grid min-h-0 lg:grid-cols-[1fr_220px]">
                  <div className="max-h-[450px] overflow-y-auto border-b border-border p-5 lg:border-b-0 lg:border-r">
                    {transcript.length ? (
                      <div className="space-y-5">
                        {transcript.map((row, index) => (
                          <div key={`${row.speaker}-${index}`} className={row.speaker === "visitor" ? "pl-8" : "pr-8"}>
                            <div className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary/65">
                              {row.speaker === "mira" ? "Mira" : "You"}
                            </div>
                            <p className="text-sm leading-relaxed text-foreground/80">{row.text}</p>
                          </div>
                        ))}
                        <div ref={transcriptEnd} />
                      </div>
                    ) : (
                      <div className="flex h-full min-h-56 items-center justify-center text-center text-sm text-muted-foreground">
                        Mira is preparing the first question.
                      </div>
                    )}
                  </div>
                  <aside className="max-h-[450px] overflow-y-auto p-5">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary/70">
                      <BookOpen className="h-4 w-4" /> Sources
                    </div>
                    <div className="mt-4 space-y-3">
                      {sourceMap.length ? sourceMap.map((source) => (
                        <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="block border-l-2 border-primary/40 pl-3 text-xs leading-relaxed text-foreground/70 hover:text-primary">
                          {source.title}
                        </a>
                      )) : <p className="text-xs leading-relaxed text-muted-foreground">Sources appear as Mira consults the approved Possible Minds material.</p>}
                    </div>
                  </aside>
                </div>

                <div className="border-t border-border p-4">
                  <form onSubmit={sendTyped} className="flex gap-2">
                    <input value={typed} onChange={(event) => setTyped(event.target.value)} placeholder="Type a response" className="min-w-0 flex-1 rounded-md border border-border bg-background px-3 py-2.5 text-sm" />
                    <button type="submit" aria-label="Send response" title="Send response" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/30 text-primary hover:bg-primary/10"><Send className="h-4 w-4" /></button>
                  </form>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <button onClick={toggleMute} type="button" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground">
                      {muted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                      {muted ? "Unmute" : "Mute"}
                    </button>
                    <button onClick={requestSummary} type="button" className="inline-flex items-center gap-2 rounded-md border border-primary/35 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary/10">
                      <Square className="h-3.5 w-3.5" /> End and summarize
                    </button>
                  </div>
                  {summary ? <button onClick={finish} type="button" className="mt-3 w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">View consultation summary</button> : null}
                  {error ? <p className="mt-3 text-xs text-red-400">{error}</p> : null}
                </div>
              </div>
            ) : (
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">Your consultation summary</p>
                <h2 className="mt-3 text-2xl font-semibold text-primary">A practical place to start.</h2>
                <p className="mt-5 text-sm leading-relaxed text-foreground/75">{summary?.summary || "Your conversation has been saved for review."}</p>
                {summary?.next_actions?.length ? (
                  <ol className="mt-6 space-y-3">
                    {summary.next_actions.map((action, index) => (
                      <li key={action} className="grid grid-cols-[28px_1fr] gap-3 text-sm leading-relaxed text-foreground/80">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">{index + 1}</span>
                        <span className="pt-1">{action}</span>
                      </li>
                    ))}
                  </ol>
                ) : null}
                <div className="mt-7 border-t border-border pt-6">
                  <h3 className="text-base font-semibold text-primary">Request a detailed report</h3>
                  {emailSaved ? (
                    <p className="mt-3 flex items-center gap-2 text-sm text-foreground/75"><Check className="h-4 w-4 text-primary" /> Request saved. Our team will review the conversation.</p>
                  ) : (
                    <form onSubmit={saveEmail} className="mt-3 flex gap-2">
                      <div className="relative min-w-0 flex-1">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Work email" className="w-full rounded-md border border-border bg-background py-2.5 pl-10 pr-3 text-sm" />
                      </div>
                      <button type="submit" className="rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground">Request</button>
                    </form>
                  )}
                </div>
                <div className="mt-7 border-t border-border pt-6">
                  <p className="text-sm text-foreground/70">Was this consultation useful?</p>
                  <div className="mt-3 flex gap-2">
                    <button onClick={() => saveFeedback("helpful")} aria-label="Helpful" className={`flex h-9 w-9 items-center justify-center rounded-md border ${feedback === "helpful" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}><ThumbsUp className="h-4 w-4" /></button>
                    <button onClick={() => saveFeedback("not_helpful")} aria-label="Not helpful" className={`flex h-9 w-9 items-center justify-center rounded-md border ${feedback === "not_helpful" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}><ThumbsDown className="h-4 w-4" /></button>
                  </div>
                  <textarea value={feedbackComment} onChange={(event) => setFeedbackComment(event.target.value)} placeholder="Optional comment" rows={2} className="mt-3 w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm" />
                  {feedback ? (
                    <button type="button" onClick={() => saveFeedback(feedback)} className="mt-2 rounded-md border border-border px-3 py-2 text-xs font-semibold text-foreground/70 hover:text-primary">
                      Save feedback
                    </button>
                  ) : null}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold text-primary">Grounded, not generic</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/65">Mira uses only operator-approved Possible Minds material and shows the sources behind its guidance.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-primary">Operational, not legal</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/65">The conversation stays on workflow, adoption, controls, and intake operations. It does not assess claims or give legal advice.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-primary">A useful next step</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/65">End with a concise diagnosis and three concrete actions your firm can review with its team.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
