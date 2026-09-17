type ClassValue = string | false | null | undefined;

/** Tiny className joiner (no dependency). */
export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}
