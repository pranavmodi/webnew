type FlowDiagramProps = {
  steps: { title: string; detail: string }[];
};

export function FlowDiagram({ steps }: FlowDiagramProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="relative flex-1 rounded-xl border border-border bg-white p-4 text-sm shadow-sm"
          >
            <div className="text-xs font-semibold uppercase tracking-tight text-muted-foreground">
              Step {idx + 1}
            </div>
            <div className="text-base font-semibold text-foreground">{step.title}</div>
            <p className="mt-2 text-muted-foreground">{step.detail}</p>
            {idx < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 hidden w-6 translate-y-[-50%] items-center sm:flex">
                <div className="h-px w-full bg-border" />
                <div className="ml-[-2px] h-2 w-2 rotate-45 border border-border border-t-0 border-l-0 bg-border" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
