"use client";

import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const AUTOCALLER_API =
  process.env.NEXT_PUBLIC_AUTOCALLER_API_URL ||
  "https://autocaller.getpossibleminds.com";

const FIRM_SIZES = [
  "1-5 attorneys",
  "5-15 attorneys",
  "15-30 attorneys",
  "30+ attorneys",
];

type WorkshopRegisterFormProps = {
  product: string;
  roles: string[];
  defaultSystem: string;
  systemLabel?: string;
};

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

export function WorkshopRegisterForm({
  product,
  roles,
  defaultSystem,
  systemLabel = "Primary system",
}: WorkshopRegisterFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    firm: "",
    role: roles[0],
    system: defaultSystem,
    firmSize: FIRM_SIZES[1],
  });

  useEffect(() => {
    const name = getPersistedParam(["contact_name", "name"], "pm_contact_name");
    const email = getPersistedParam(["contact_email", "email"], "pm_contact_email");
    const firm = getPersistedParam(["firm_name", "firm"], "pm_firm_name");
    if (name || email || firm) {
      setForm((prev) => ({
        ...prev,
        name: prev.name || name || "",
        email: prev.email || email || "",
        firm: prev.firm || firm || "",
      }));
    }
  }, []);

  const canSubmit =
    form.name.trim().length > 0 &&
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email) &&
    !submitting;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      const res = await fetch(`${AUTOCALLER_API}/api/lead-gen/product-interest`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          firm: form.firm.trim() || undefined,
          product,
          source: "workshop_page_register",
          link_code:
            getPersistedParam(["lc", "link_code"], "pm_link_code") || undefined,
          role: form.role,
          case_management_system: form.system.trim() || undefined,
          firm_size: form.firmSize,
        }),
      });
      if (!res.ok) {
        const detail = await res.text();
        throw new Error(detail || `registration failed (${res.status})`);
      }
      setDone(true);
      toast({
        title: "You're on the list",
        description: "We'll email you the next cohort dates.",
      });
    } catch (err) {
      toast({
        title: "Couldn't register",
        description:
          err instanceof Error ? err.message : "Something went wrong.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-primary/40 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-10 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-black/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Registered
        </div>
        <h3 className="mt-2 text-3xl font-semibold text-[#00ff41]">
          You&apos;re on the list.
        </h3>
        <p className="mt-4 text-foreground/80">
          We&apos;ll email {form.email} the next cohort dates and the session
          materials. Nothing to install, nothing to prepare.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6 sm:p-10"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="ws-name" label="Name" required>
          <Input
            id="ws-name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Full name"
          />
        </Field>
        <Field id="ws-email" label="Work email" required>
          <Input
            id="ws-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@firm.com"
          />
        </Field>
        <Field id="ws-firm" label="Firm">
          <Input
            id="ws-firm"
            value={form.firm}
            onChange={(e) => setForm({ ...form, firm: e.target.value })}
            placeholder="Law firm name"
          />
        </Field>
        <Field id="ws-role" label="Your role">
          <select
            id="ws-role"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </Field>
        <Field id="ws-system" label={systemLabel}>
          <Input
            id="ws-system"
            value={form.system}
            onChange={(e) => setForm({ ...form, system: e.target.value })}
            placeholder={defaultSystem}
          />
        </Field>
        <Field id="ws-size" label="Firm size">
          <select
            id="ws-size"
            value={form.firmSize}
            onChange={(e) => setForm({ ...form, firmSize: e.target.value })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {FIRM_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-xs text-foreground/50">
          Cohorts are capped at 10 firms. Registering reserves your invitation
          to the next open cohort.
        </p>
        <button
          type="submit"
          disabled={!canSubmit}
          className={cn(
            "inline-flex items-center whitespace-nowrap rounded-full px-8 py-3 text-sm font-semibold transition",
            canSubmit
              ? "bg-[#00ff41] text-[#04150d] hover:bg-[#00ff41]/90"
              : "cursor-not-allowed border border-primary/20 bg-black/30 text-foreground/40",
          )}
        >
          {submitting ? "Registering..." : "Reserve a seat"}
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
