"use client";

import { useEffect, useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

// Autocaller backend — Postgres-backed bookings + SMS notification.
// Override via NEXT_PUBLIC_AUTOCALLER_API_URL for dev / staging.
const AUTOCALLER_API =
  process.env.NEXT_PUBLIC_AUTOCALLER_API_URL ||
  "https://autocaller.getpossibleminds.com";

type Slot = { iso: string; available: boolean };

type SlotsResponse = {
  slots: Slot[];
  slot_minutes: number;
  tz_offset_hours: number;
};

type BookingResponse = {
  id: number;
  slot_start: string;
  slot_end: string;
  message: string;
};

function groupByDay(slots: Slot[]) {
  const dtf = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const timeFmt = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
  const groups: {
    label: string;
    items: { iso: string; label: string; available: boolean }[];
  }[] = [];
  const indexByLabel = new Map<string, number>();
  for (const s of slots) {
    const d = new Date(s.iso);
    const dayLabel = dtf.format(d);
    let idx = indexByLabel.get(dayLabel);
    if (idx === undefined) {
      idx = groups.length;
      indexByLabel.set(dayLabel, idx);
      groups.push({ label: dayLabel, items: [] });
    }
    groups[idx].items.push({
      iso: s.iso,
      label: timeFmt.format(d),
      available: s.available,
    });
  }
  return groups;
}

export function ConsultBookingForm() {
  const [slots, setSlots] = useState<Slot[] | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<BookingResponse | null>(null);
  const [form, setForm] = useState({
    name: "",
    firm: "",
    email: "",
    phone: "",
    notes: "",
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${AUTOCALLER_API}/api/consults/slots?days=7`);
        if (!res.ok) throw new Error(`slots HTTP ${res.status}`);
        const data: SlotsResponse = await res.json();
        if (!cancelled) setSlots(data.slots || []);
      } catch (e) {
        if (!cancelled) {
          setFetchError(
            e instanceof Error ? e.message : "couldn't load available times",
          );
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const groups = useMemo(() => (slots ? groupByDay(slots) : []), [slots]);

  const canSubmit =
    selectedSlot &&
    form.name.trim().length > 0 &&
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email) &&
    !submitting;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || !selectedSlot) return;
    setSubmitting(true);
    try {
      const res = await fetch(`${AUTOCALLER_API}/api/consults/book`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          firm: form.firm.trim() || undefined,
          phone: form.phone.trim() || undefined,
          notes: form.notes.trim() || undefined,
          slot_start: selectedSlot,
        }),
      });
      if (!res.ok) {
        const detail = await res.text();
        throw new Error(detail || `booking failed (${res.status})`);
      }
      const data: BookingResponse = await res.json();
      setDone(data);
      toast({ title: "Booked!", description: data.message });
    } catch (e) {
      toast({
        title: "Couldn't book",
        description:
          e instanceof Error ? e.message : "Something went wrong.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    const start = new Date(done.slot_start);
    const fmt = new Intl.DateTimeFormat(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-primary/40 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-10 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-black/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Booked
        </div>
        <h3 className="mt-2 text-3xl font-semibold text-[#00ff41]">
          You&apos;re on.
        </h3>
        <p className="mt-4 text-foreground/80">
          {fmt.format(start)}.
          <br />
          Confirmation on its way to {form.email}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-8 rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6 sm:p-10"
    >
      {/* Step 1 — Time picker */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-black/40 text-xs font-semibold text-primary">
            1
          </span>
          <h3 className="text-lg font-semibold text-foreground">
            Pick a time
          </h3>
        </div>

        {fetchError && (
          <p className="text-sm text-red-400">
            Couldn&apos;t load times: {fetchError}. Email{" "}
            <a
              href="mailto:hello@possibleminds.ai"
              className="text-primary underline-offset-4 hover:underline"
            >
              hello@possibleminds.ai
            </a>{" "}
            and we&apos;ll set it up manually.
          </p>
        )}
        {!fetchError && !slots && (
          <p className="text-sm text-foreground/60">Loading times…</p>
        )}
        {slots && slots.length === 0 && (
          <p className="text-sm text-foreground/60">
            No free slots in the next week — please email{" "}
            <a
              href="mailto:hello@possibleminds.ai"
              className="text-primary underline-offset-4 hover:underline"
            >
              hello@possibleminds.ai
            </a>
            .
          </p>
        )}
        {slots && slots.length > 0 && slots.every((s) => !s.available) && (
          <p className="mb-3 text-sm text-foreground/60">
            All slots in the next week are taken — please email{" "}
            <a
              href="mailto:hello@possibleminds.ai"
              className="text-primary underline-offset-4 hover:underline"
            >
              hello@possibleminds.ai
            </a>
            .
          </p>
        )}
        {groups.length > 0 && (
          <>
            <div className="mb-4 flex items-center gap-4 text-xs text-foreground/60">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full border border-primary/50 bg-black/30" />
                Available
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full border border-rose-500/40 bg-rose-950/50" />
                Booked
              </span>
            </div>
            <div className="space-y-5">
            {groups.map((g) => (
              <div key={g.label}>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                  {g.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => {
                    const isSelected = selectedSlot === s.iso;
                    const classes = !s.available
                      ? "cursor-not-allowed border-rose-500/40 bg-rose-950/30 text-rose-400/70 line-through"
                      : isSelected
                      ? "border-[#00ff41] bg-[#00ff41] text-[#04150d]"
                      : "border-primary/30 bg-black/30 text-foreground/80 hover:border-primary/60 hover:bg-primary/10 hover:text-primary";
                    return (
                      <button
                        key={s.iso}
                        type="button"
                        disabled={!s.available}
                        aria-disabled={!s.available}
                        title={!s.available ? "Already booked" : undefined}
                        onClick={() =>
                          s.available && setSelectedSlot(s.iso)
                        }
                        className={cn(
                          "rounded-full border px-4 py-1.5 text-sm font-medium transition",
                          classes,
                        )}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            </div>
          </>
        )}
      </div>

      {/* Step 2 — Contact info */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-black/40 text-xs font-semibold text-primary">
            2
          </span>
          <h3 className="text-lg font-semibold text-foreground">
            Your contact info
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="name" label="Name" required>
            <Input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Full name"
            />
          </Field>
          <Field id="firm" label="Firm">
            <Input
              id="firm"
              value={form.firm}
              onChange={(e) => setForm({ ...form, firm: e.target.value })}
              placeholder="Law firm name"
            />
          </Field>
          <Field id="email" label="Email" required>
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@firm.com"
            />
          </Field>
          <Field id="phone" label="Phone">
            <Input
              id="phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Optional"
            />
          </Field>
          <div className="sm:col-span-2">
            <Field id="notes" label="What do you want to focus on? (optional)">
              <Textarea
                id="notes"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="E.g. after-hours intake, records chasing, lien reduction..."
                rows={3}
              />
            </Field>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-end">
        {!selectedSlot && (
          <span className="text-xs text-foreground/50">Pick a time to enable booking</span>
        )}
        <button
          type="submit"
          disabled={!canSubmit}
          className={cn(
            "inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold transition",
            canSubmit
              ? "bg-[#00ff41] text-[#04150d] hover:bg-[#00ff41]/90"
              : "cursor-not-allowed border border-primary/20 bg-black/30 text-foreground/40",
          )}
        >
          {submitting ? "Booking…" : "Book the consult"}
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-xs uppercase tracking-wider text-primary/70">
        {label}
        {required && <span className="text-primary/50"> *</span>}
      </Label>
      {children}
    </div>
  );
}
