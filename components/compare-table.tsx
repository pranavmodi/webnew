import { Check } from "lucide-react";

import { compareRows } from "@/lib/content";

const columns = [
  { key: "emailtag", label: "EmailTag" },
  { key: "prodbot", label: "ProdBot" },
] as const;

export function CompareTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border/80 bg-card/80 shadow-soft">
      <div className="grid min-w-[560px] grid-cols-[2fr,repeat(2,1fr)] bg-muted/70 text-sm font-semibold text-muted-foreground">
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
            className="grid min-w-[560px] grid-cols-[2fr,repeat(2,1fr)] items-center text-sm"
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
