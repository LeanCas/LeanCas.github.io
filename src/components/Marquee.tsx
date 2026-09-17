import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = { children: ReactNode; className?: string; duration?: number; label?: string };

/** CSS-only marquee: content is duplicated once and translated -50%. */
export function Marquee({ children, className, duration = 40, label }: Props) {
  return (
    <div
      className={cn(
        "marquee relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]",
        className,
      )}
      aria-label={label}
      role={label ? "region" : undefined}
    >
      <div className="marquee-track flex w-max shrink-0" style={{ animationDuration: `${duration}s` }}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
