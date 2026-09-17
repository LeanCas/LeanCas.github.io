import { SYMBOL, WORDMARK } from "@/lib/brand-paths";
import { cn } from "@/lib/cn";

type Props = { className?: string; tone?: "dark" | "light"; title?: string };

/** HOTY. wordmark. `dark` = carbon letters (for light backgrounds). */
export function Logo({ className, tone = "dark", title = "HOTY." }: Props) {
  return (
    <svg
      viewBox={WORDMARK.viewBox}
      role="img"
      aria-label={title}
      className={cn("block h-auto", className)}
    >
      <path d={WORDMARK.letters} fill={tone === "dark" ? "#0E1110" : "#FFFFFF"} />
      <path d={WORDMARK.dot} fill="#16C784" />
    </svg>
  );
}

export function Symbol({ className, tone = "dark" }: Omit<Props, "title">) {
  return (
    <svg viewBox={SYMBOL.viewBox} aria-hidden="true" className={cn("block", className)}>
      <path d={SYMBOL.o} fill={tone === "dark" ? "#0E1110" : "currentColor"} />
      <path d={SYMBOL.dot} fill="#16C784" />
    </svg>
  );
}
