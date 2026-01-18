import { Check } from "lucide-react";

import { compareRows } from "@/lib/content";

const columns = [
  { key: "support", label: "Support AI" },
  { key: "intake", label: "Sales / Intake AI" },
  { key: "automation", label: "Automation" },
] as const;

export function CompareTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/80 bg-white shadow-sm">
      <div className="grid grid-cols-[2fr,repeat(3,1fr)] bg-accent/60 text-sm font-semibold text-muted-foreground">
        <div className="px-4 py-3">Capabilities</div>
        {columns.map((col) => (
          <div key={col.key} className="px-4 py-3 text-center">
            {col.label}
          </div>
        ))}
      </div>
      <div className="divide-y divide-border/80">
        {compareRows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[2fr,repeat(3,1fr)] items-center text-sm"
          >
            <div className="px-4 py-3 font-medium text-foreground/90">
              {row.label}
            </div>
            {columns.map((col) => (
              <div
                key={col.key}
                className="flex items-center justify-center px-4 py-3"
              >
                {row[col.key] ? (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                ) : (
                  <span className="h-1 w-6 rounded-full bg-border" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
