import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <Badge variant="outline" className="font-medium text-primary">
          {eyebrow}
        </Badge>
      )}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base text-muted-foreground sm:text-lg">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
