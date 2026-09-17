import { GripVertical } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ServiceKey } from "@/types";

/** Small, code-built illustrations for each service (decorative). */
export function ServiceVisual({ kind }: { kind: ServiceKey }) {
  switch (kind) {
    case "development":
      return <Architecture />;
    case "themes":
      return <Wireframe />;
    case "redesign":
      return <BeforeAfter />;
    case "cro":
      return <Funnel />;
    case "sections":
      return <SectionStack />;
    case "integrations":
      return <Integrations />;
    case "performance":
      return <Performance />;
  }
}

const box = "rounded-lg bg-white/[0.06] ring-1 ring-inset ring-white/10";

function Architecture() {
  const cols = [
    ["Store"],
    ["Collections", "Navigation", "Markets"],
    ["Products", "Metafields", "Content"],
  ];
  return (
    <div className="grid h-full grid-cols-3 items-center gap-4 px-2">
      {cols.map((col, ci) => (
        <div key={ci} className="flex flex-col gap-3">
          {col.map((label, i) => (
            <div
              key={label}
              className={cn(
                box,
                "relative px-3 py-3 font-mono text-[11px] text-white/80",
                ci === 0 && "bg-green/15 text-green ring-green/40",
                ci === 2 && i === 1 && "ring-green/40",
              )}
            >
              {ci > 0 && <span className="absolute top-1/2 -left-4 h-px w-4 bg-white/20" />}
              {label}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Wireframe() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className={cn(box, "flex h-8 items-center justify-between px-3")}>
        <span className="h-2 w-10 rounded bg-white/40" />
        <span className="flex gap-2">
          <span className="h-1.5 w-6 rounded bg-white/20" />
          <span className="h-1.5 w-6 rounded bg-white/20" />
          <span className="h-1.5 w-6 rounded bg-white/20" />
        </span>
      </div>
      <div className="relative flex-[1.3] rounded-lg bg-green/15 ring-1 ring-inset ring-green/50">
        <span className="absolute bottom-4 left-4 h-3 w-1/2 rounded bg-white/70" />
        <span className="absolute bottom-10 left-4 h-2 w-1/3 rounded bg-white/30" />
        <span className="absolute top-3 right-3 rounded bg-green px-1.5 py-0.5 font-mono text-[9px] text-carbon">
          hero.liquid
        </span>
      </div>
      <div className="grid flex-1 grid-cols-4 gap-3">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={box} />
        ))}
      </div>
    </div>
  );
}

function BeforeAfter() {
  return (
    <div className="relative h-full overflow-hidden rounded-xl ring-1 ring-white/10">
      <div className="absolute inset-0 grid grid-cols-3 gap-2 bg-white/[0.03] p-4 opacity-60">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded bg-white/10" />
        ))}
      </div>
      <div className="absolute inset-y-0 right-0 left-1/2 flex flex-col gap-3 bg-carbon-2 p-4">
        <div className="h-1/2 rounded-lg bg-green/20 ring-1 ring-inset ring-green/40" />
        <div className="grid flex-1 grid-cols-2 gap-3">
          <div className={box} />
          <div className={box} />
        </div>
      </div>
      <div className="absolute inset-y-0 left-1/2 w-px bg-green" />
      <div className="absolute top-1/2 left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-green font-mono text-[11px] text-carbon">
        ⇆
      </div>
      <span className="absolute bottom-3 left-3 font-mono text-[10px] text-white/50">before</span>
      <span className="absolute right-3 bottom-3 font-mono text-[10px] text-green">after</span>
    </div>
  );
}

function Funnel() {
  const steps = [
    { label: "Session", w: "100%" },
    { label: "Product view", w: "78%" },
    { label: "Add to cart", w: "56%" },
    { label: "Checkout", w: "40%" },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-4">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-4">
          <span className="w-24 shrink-0 font-mono text-[11px] text-white/60">{s.label}</span>
          <span className="h-9 flex-1">
            <span
              className={cn("block h-full rounded-md", i === 2 ? "bg-green" : "bg-white/15")}
              style={{ width: s.w }}
            />
          </span>
        </div>
      ))}
      <p className="mt-2 font-mono text-[11px] text-white/60">Find the friction. Remove it. Measure.</p>
    </div>
  );
}

function SectionStack() {
  const items = ["Image banner", "Featured collection", "Testimonials", "Newsletter"];
  return (
    <div className="flex h-full flex-col justify-center gap-2.5">
      {items.map((label, i) => (
        <div
          key={label}
          className={cn(
            box,
            "flex items-center gap-3 px-3 py-3.5 text-[12px] text-white/80",
            i === 1 && "translate-x-5 -rotate-1 bg-carbon-3 shadow-2xl ring-green/60",
          )}
        >
          <GripVertical className={cn("size-3.5", i === 1 ? "text-green" : "text-white/30")} />
          {label}
          <span className="ml-auto font-mono text-[10px] text-white/60">{i === 1 ? "dragging" : "block"}</span>
        </div>
      ))}
      <div className="mt-1 rounded-lg border border-dashed border-green/50 py-3 text-center font-mono text-[11px] text-green">
        + Add section
      </div>
    </div>
  );
}

function Integrations() {
  const nodes = [
    { label: "Klaviyo", x: "12%", y: "18%" },
    { label: "GA4", x: "88%", y: "18%" },
    { label: "Reviews", x: "12%", y: "82%" },
    { label: "ERP / API", x: "88%", y: "82%" },
  ];
  return (
    <div className="relative h-full">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {nodes.map((n) => (
          <line
            key={n.label}
            x1="50"
            y1="50"
            x2={parseFloat(n.x)}
            y2={parseFloat(n.y)}
            stroke="rgb(22 199 132 / 0.45)"
            strokeWidth="0.4"
            strokeDasharray="1.5 1.5"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <div className="absolute top-1/2 left-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl bg-green text-carbon">
        <span className="text-sm font-semibold">Shopify</span>
        <span className="font-mono text-[10px]">store</span>
      </div>
      {nodes.map((n) => (
        <div
          key={n.label}
          className={cn(box, "absolute -translate-x-1/2 -translate-y-1/2 px-3 py-2 font-mono text-[11px] text-white/85")}
          style={{ left: n.x, top: n.y }}
        >
          {n.label}
        </div>
      ))}
    </div>
  );
}

function Performance() {
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="relative size-44">
        <svg viewBox="0 0 120 120" className="size-full -rotate-90" aria-hidden="true">
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgb(255 255 255 / 0.1)" strokeWidth="8" />
          <circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke="var(--color-green)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c * 0.08}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-[11px] text-white/50">target</span>
          <span className="text-4xl font-semibold tracking-tight text-white">90+</span>
        </div>
      </div>
      <div className="grid w-full grid-cols-3 gap-3">
        {[
          ["LCP", "≤ 2.5s"],
          ["INP", "≤ 200ms"],
          ["CLS", "≤ 0.1"],
        ].map(([k, v]) => (
          <div key={k} className={cn(box, "px-3 py-2.5 text-center")}>
            <p className="font-mono text-[10px] text-white/50">{k}</p>
            <p className="font-mono text-[12px] text-green">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
