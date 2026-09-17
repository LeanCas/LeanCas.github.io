import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { delay } from "@/lib/style";

type Props = {
  eyebrow: string;
  index?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
  align?: "split" | "stack";
};

export function SectionIntro({ eyebrow, index, title, lead, tone = "light", className, align = "split" }: Props) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "grid gap-6",
        align === "split" && "lg:grid-cols-12 lg:items-end lg:gap-10",
        className,
      )}
    >
      <div className={cn(align === "split" && "lg:col-span-7")}>
        <p
          data-reveal
          className={cn("eyebrow mb-6 flex items-center gap-3", dark ? "text-ash" : "text-graphite")}
        >
          {index && <span className={dark ? "text-green" : "text-green-ink"}>{index}</span>}
          <span className={cn("h-px w-8", dark ? "bg-white/20" : "bg-carbon/20")} aria-hidden="true" />
          {eyebrow}
        </p>
        <h2
          data-reveal
          style={delay(80)}
          className={cn(
            "display text-[clamp(2.5rem,6vw,5.25rem)] text-balance",
            dark ? "text-white" : "text-carbon",
          )}
        >
          {title}
        </h2>
      </div>
      {lead && (
        <p
          data-reveal
          style={delay(160)}
          className={cn(
            "max-w-xl text-lg leading-relaxed text-pretty",
            align === "split" && "lg:col-span-5 lg:justify-self-end",
            dark ? "text-white/65" : "text-graphite",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
