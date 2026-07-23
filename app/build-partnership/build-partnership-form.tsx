"use client";

import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const AUTOCALLER_API =
  process.env.NEXT_PUBLIC_AUTOCALLER_API_URL ||
  "https://autocaller.getpossibleminds.com";

const ROLES = [
  "Owner or managing partner",
  "COO or firm administrator",
  "Intake leader",
  "Operations leader",
  "Attorney sponsor",
  "Other",
];

const FIRM_SIZES = [
  "Solo",
  "2-5 attorneys",
  "6-10 attorneys",
  "11-20 attorneys",
  "21+ attorneys",
];

const WORKFLOWS = [
  "After-hours response",
  "Slow first human call or text",
  "Lead qualification and attorney escalation",
  "Follow-up stops too soon",
  "Source-to-signed-case attribution",
  "Intake team reporting",
  "Not sure yet",
];

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

export function BuildPartnershipForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    firm: "",
    role: ROLES[0],
    firmSize: FIRM_SIZES[1],
    systems: "",
    workflow: WORKFLOWS[0],
    readiness: 5,
  });

  useEffect(() => {
    const name = getPersistedParam(["contact_name", "name"], "pm_contact_name");
    const email = getPersistedParam(["contact_email", "email"], "pm_contact_email");
    const firm = getPersistedParam(["firm_name", "firm"], "pm_firm_name");
    if (name || email || firm) {
      setForm((current) => ({
        ...current,
        name: current.name || name || "",
        email: current.email || email || "",
        firm: current.firm || firm || "",
      }));
    }
  }, []);

  const canSubmit =
    form.name.trim().length > 0 &&
    form.firm.trim().length > 0 &&
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email) &&
    !submitting;

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit) return;

    setSubmitting(true);
    try {
      const response = await fetch(
        `${AUTOCALLER_API}/api/lead-gen/product-interest`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            firm: form.firm.trim(),
            product: "pi-ai-build-partnership",
            source: "build_partnership_eoi",
            link_code:
              getPersistedParam(["lc", "link_code"], "pm_link_code") || undefined,
            role: `${form.role} | First workflow: ${form.workflow}`,
            case_management_system: form.systems.trim() || undefined,
            firm_size: `${form.firmSize} | Readiness ${form.readiness}/10`,
          }),
        },
      );

      if (!response.ok) {
        const detail = await response.text();
        throw new Error(detail || `application failed (${response.status})`);
      }

      setDone(true);
      toast({
        title: "Expression of interest received",
        description: "We'll respond within three working days.",
      });
    } catch (error) {
      toast({
        title: "We couldn't submit the form",
        description:
          error instanceof Error
            ? error.message
            : "Email hello@possibleminds.ai and we'll take it from there.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="border border-primary/35 bg-[#04150d] p-8 text-center sm:p-12">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
          <Check className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-2xl font-semibold text-[#00ff41]">
          We have your application.
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-foreground/75">
          We&apos;ll review the intake problem, lead volume, and systems you
          listed, then contact {form.email} within three working days. The first
          conversation is to confirm that month one can produce a useful report.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-primary/25 bg-[#04150d] p-6 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="bp-name" label="Name" required>
          <Input
            id="bp-name"
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="First and last"
          />
        </Field>
        <Field id="bp-email" label="Work email" required>
          <Input
            id="bp-email"
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            placeholder="you@firm.com"
          />
        </Field>
        <Field id="bp-firm" label="Firm" required>
          <Input
            id="bp-firm"
            required
            autoComplete="organization"
            value={form.firm}
            onChange={(event) => setForm({ ...form, firm: event.target.value })}
            placeholder="Law firm name"
          />
        </Field>
        <Field id="bp-role" label="Your role">
          <select
            id="bp-role"
            value={form.role}
            onChange={(event) => setForm({ ...form, role: event.target.value })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {ROLES.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </Field>
        <Field id="bp-size" label="Firm size">
          <select
            id="bp-size"
            value={form.firmSize}
            onChange={(event) =>
              setForm({ ...form, firmSize: event.target.value })
            }
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {FIRM_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </Field>
        <Field id="bp-systems" label="Primary systems">
          <Input
            id="bp-systems"
            value={form.systems}
            onChange={(event) =>
              setForm({ ...form, systems: event.target.value })
            }
            placeholder="Lead Docket, Filevine, CASEpeer..."
          />
        </Field>
        <div className="space-y-2 sm:col-span-2">
          <Label
            htmlFor="bp-workflow"
            className="text-xs uppercase tracking-wider text-primary/70"
          >
            Which intake problem is most visible?
          </Label>
          <select
            id="bp-workflow"
            value={form.workflow}
            onChange={(event) =>
              setForm({ ...form, workflow: event.target.value })
            }
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {WORKFLOWS.map((workflow) => (
              <option key={workflow} value={workflow}>
                {workflow}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-3 sm:col-span-2">
          <div className="flex items-end justify-between gap-4">
            <Label
              htmlFor="bp-readiness"
              className="text-xs uppercase tracking-wider text-primary/70"
            >
              Could you run a 30-day pilot on one lead source?
            </Label>
            <span className="text-sm font-semibold text-[#00ff41]">
              {form.readiness}/10
            </span>
          </div>
          <input
            id="bp-readiness"
            type="range"
            min="1"
            max="10"
            step="1"
            value={form.readiness}
            onChange={(event) =>
              setForm({ ...form, readiness: Number(event.target.value) })
            }
            className="h-2 w-full cursor-pointer accent-[#00ff41]"
          />
          <div className="flex justify-between text-xs text-foreground/45">
            <span>Still exploring</span>
            <span>Ready to build</span>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-primary/15 pt-6">
        <p className="text-xs leading-relaxed text-foreground/50">
          Your information is used only to assess the partnership and contact
          you directly. It is not sold or shared for third-party marketing.
        </p>
        <button
          type="submit"
          disabled={!canSubmit}
          className={cn(
            "mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition sm:w-auto",
            canSubmit
              ? "bg-[#00ff41] text-[#04150d] hover:bg-[#00ff41]/90"
              : "cursor-not-allowed border border-primary/20 bg-black/30 text-foreground/40",
          )}
        >
          {submitting ? "Submitting..." : "Submit expression of interest"}
          {!submitting && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
        </button>
        <p className="mt-3 text-xs text-foreground/45">
          No commitment. We&apos;ll respond within three working days.
        </p>
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
      <Label
        htmlFor={id}
        className="text-xs uppercase tracking-wider text-primary/70"
      >
        {label}
        {required && <span className="text-primary/50"> *</span>}
      </Label>
      {children}
    </div>
  );
}
