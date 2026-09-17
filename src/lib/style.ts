import type { CSSProperties } from "react";

/** Inline style helper for staggered reveals: style={delay(120)} */
export function delay(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}
