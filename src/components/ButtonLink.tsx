import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost-light" | "green";

type Props = ComponentProps<"a"> & {
  variant?: Variant;
  icon?: "right" | "up-right" | "none";
  size?: "md" | "lg";
};

const variants: Record<Variant, string> = {
  primary: "bg-carbon text-white hover:bg-carbon-3",
  secondary: "bg-transparent text-carbon ring-1 ring-inset ring-carbon/15 hover:ring-carbon/40",
  "ghost-light": "bg-white/5 text-white ring-1 ring-inset ring-white/15 hover:bg-white/10 hover:ring-white/30",
  green: "bg-green text-carbon hover:bg-green-bright",
};

export function ButtonLink({
  variant = "primary",
  icon = "right",
  size = "md",
  className,
  children,
  ...props
}: Props) {
  const Icon = icon === "up-right" ? ArrowUpRight : ArrowRight;
  return (
    <a
      className={cn(
        "group relative inline-flex select-none items-center justify-center gap-2.5 rounded-full font-medium",
        "transition-[background-color,box-shadow,color,transform] duration-300 ease-(--ease-out-quart) active:scale-[0.98]",
        size === "lg" ? "h-14 px-7 text-[15px]" : "h-11 px-5 text-sm",
        variants[variant],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {icon !== "none" && (
        <span className="relative -mr-1 inline-flex size-5 items-center justify-center overflow-hidden" aria-hidden="true">
          <Icon
            className={cn(
              "size-4 transition-transform duration-500 ease-(--ease-out-expo)",
              icon === "up-right"
                ? "group-hover:translate-x-4 group-hover:-translate-y-4"
                : "group-hover:translate-x-5",
            )}
            strokeWidth={2}
          />
          <Icon
            className={cn(
              "absolute size-4 transition-transform duration-500 ease-(--ease-out-expo)",
              icon === "up-right"
                ? "-translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"
                : "-translate-x-5 group-hover:translate-x-0",
            )}
            strokeWidth={2}
          />
        </span>
      )}
    </a>
  );
}
