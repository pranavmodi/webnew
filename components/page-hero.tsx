import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: React.ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
  actions,
  className,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "space-y-4 rounded-3xl border border-border/70 bg-white/80 p-6 shadow-sm backdrop-blur",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <Badge variant="secondary" className={cn("mb-2", align === "center" ? "mx-auto" : "")}>
          {eyebrow}
        </Badge>
      )}
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-muted-foreground">{description}</p>
        )}
      </div>
      {actions}
    </div>
  );
}
