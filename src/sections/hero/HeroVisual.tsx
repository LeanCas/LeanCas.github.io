"use client";

import { Check, GripVertical, Plus } from "lucide-react";
import {
  m,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ---------------------------------------------------------------
   Floating layer with cursor + scroll parallax (transform only)
---------------------------------------------------------------- */
function Layer({
  children,
  className,
  depth,
  px,
  py,
  scrollY,
  delay,
}: {
  children: ReactNode;
  className?: string;
  depth: number;
  px: MotionValue<number>;
  py: MotionValue<number>;
  scrollY: MotionValue<number>;
  delay: number;
}) {
  const x = useTransform(px, (v) => v * depth * 14);
  const yCursor = useTransform(py, (v) => v * depth * 10);
  const yScroll = useTransform(scrollY, (v) => v * depth * -70);
  const y = useTransform([yCursor, yScroll], ([a, b]) => (a as number) + (b as number));

  return (
    <m.div className={cn("absolute", className)} style={{ x, y }}>
      <m.div
        initial={{ opacity: 0, y: 36, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </m.div>
    </m.div>
  );
}

function Card({ children, className, dark }: { children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl",
        dark
          ? "bg-carbon text-white shadow-[0_30px_60px_-20px_rgb(14_17_16/0.45),inset_0_0_0_1px_rgb(255_255_255/0.06)]"
          : "bg-white text-carbon shadow-[0_30px_60px_-24px_rgb(14_17_16/0.22),0_0_0_1px_rgb(14_17_16/0.06)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ------------------------------ Cards ------------------------------ */

function ThemeEditorCard() {
  const sections = ["Announcement bar", "Header", "Image banner", "Featured collection", "Rich text", "Footer"];
  return (
    <Card>
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </div>
        <p className="font-mono text-[11px] text-graphite">Theme editor · Home page</p>
        <span className="ml-auto rounded-full bg-mint px-2 py-0.5 font-mono text-[10px] font-medium text-green-ink">
          Live
        </span>
      </div>
      <div className="grid grid-cols-[38%_1fr]">
        <div className="border-r border-line p-3">
          <p className="mb-2 px-2 font-mono text-[10px] tracking-wider text-graphite uppercase">Template</p>
          <ul className="flex flex-col gap-0.5">
            {sections.map((s, i) => (
              <li
                key={s}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[11.5px]",
                  i === 2 ? "bg-mint font-medium text-carbon shadow-[inset_2px_0_0_var(--color-green)]" : "text-graphite",
                )}
              >
                <GripVertical className="size-3 shrink-0 text-ash" />
                <span className="truncate">{s}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 flex items-center gap-1.5 px-2 text-[11.5px] font-medium text-green-ink">
            <Plus className="size-3" /> Add section
          </p>
        </div>
        <div className="bg-paper p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold tracking-tight">NORDE</span>
            <span className="flex gap-2">
              <span className="h-1 w-5 rounded bg-carbon/15" />
              <span className="h-1 w-5 rounded bg-carbon/15" />
              <span className="h-1 w-5 rounded bg-carbon/15" />
            </span>
          </div>
          <div className="relative h-[124px] overflow-hidden rounded-lg bg-[radial-gradient(120%_90%_at_80%_20%,#1f2523_0%,#0e1110_60%)] ring-2 ring-green ring-offset-2 ring-offset-paper">
            <div className="absolute right-6 bottom-0 h-[84px] w-10 rounded-t-[14px] bg-[linear-gradient(90deg,#2a302e,#4a524f_40%,#1f2523)]" />
            <div className="absolute right-[34px] bottom-[84px] h-3 w-6 rounded-t-sm bg-green" />
            <div className="absolute bottom-3 left-3">
              <p className="text-[13px] leading-tight font-semibold text-white">
                New season,
                <br />
                new ritual.
              </p>
              <span className="mt-2 inline-block rounded-full bg-white px-2.5 py-1 text-[9px] font-medium text-carbon">
                Shop now
              </span>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-1">
                <div className="aspect-square rounded-md bg-carbon/[0.06]" />
                <div className="h-1 w-3/4 rounded bg-carbon/15" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function ProductCard() {
  return (
    <Card className="p-3">
      <div className="relative aspect-[4/3.4] overflow-hidden rounded-xl bg-mint">
        <div className="absolute inset-x-0 bottom-[14%] mx-auto h-3 w-24 rounded-[50%] bg-green-deep/15 blur-[3px]" />
        <div className="absolute bottom-[16%] left-1/2 h-[58%] w-[26%] -translate-x-1/2 rounded-t-[22px] rounded-b-md bg-[linear-gradient(90deg,#0e1110,#3a423f_45%,#161a19)]" />
        <div className="absolute bottom-[73%] left-1/2 h-[9%] w-[12%] -translate-x-1/2 rounded-t-sm bg-carbon" />
        <div className="absolute bottom-[34%] left-1/2 h-[10%] w-[18%] -translate-x-1/2 rounded-sm bg-white/90" />
        <span className="absolute top-2.5 left-2.5 rounded-full bg-white px-2 py-0.5 font-mono text-[9.5px] text-carbon">
          New
        </span>
      </div>
      <div className="px-1 pt-3">
        <div className="flex items-start justify-between gap-2">
          <p className="text-[13px] leading-tight font-semibold tracking-tight">Botanical Face Oil</p>
          <p className="font-mono text-[12px]">$48.00</p>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <span className="size-3.5 rounded-full bg-carbon ring-2 ring-white ring-offset-1 ring-offset-carbon/30" />
          <span className="size-3.5 rounded-full bg-[#c9b79c]" />
          <span className="size-3.5 rounded-full bg-green-deep" />
          <span className="ml-auto flex items-center gap-1 text-[10px] text-green-ink">
            <span className="size-1.5 rounded-full bg-green" /> In stock
          </span>
        </div>
        <div className="mt-3 flex h-8 items-center justify-center rounded-full bg-carbon text-[11px] font-medium text-white">
          Add to cart
        </div>
      </div>
    </Card>
  );
}

function LiquidCard() {
  const K = "text-green";
  const S = "text-[#b7e4cf]";
  const C = "text-white/55";
  return (
    <Card dark>
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="size-2 rounded-full bg-green" />
        <p className="truncate font-mono text-[11px] text-white/70">sections/featured-product.liquid</p>
      </div>
      <pre className="overflow-hidden px-4 py-3 font-mono text-[10.5px] leading-[1.7] text-white/85 sm:text-[11px]">
        <code>
          <span className={C}>{"{%- comment -%} Theme editor ready {%- endcomment -%}"}</span>
          {"\n"}
          <span className={K}>{"{%- assign "}</span>
          {"product = section.settings.product"}
          <span className={K}>{" -%}"}</span>
          {"\n<"}
          <span className={S}>section</span>
          {" class="}
          <span className={S}>{'"pdp"'}</span>
          {" {{ section.shopify_attributes }}>"}
          {"\n  "}
          <span className={K}>{"{%- for "}</span>
          {"block "}
          <span className={K}>in</span>
          {" section.blocks"}
          <span className={K}>{" -%}"}</span>
          {"\n    "}
          <span className={K}>{"{%- render "}</span>
          <span className={S}>{"'product-block'"}</span>
          {", block: block"}
          <span className={K}>{" -%}"}</span>
          {"\n  "}
          <span className={K}>{"{%- endfor -%}"}</span>
          {"\n</"}
          <span className={S}>section</span>
          {">"}
        </code>
      </pre>
    </Card>
  );
}

function VitalsCard() {
  const rows = [
    { k: "LCP", v: "≤ 2.5 s", w: "78%" },
    { k: "INP", v: "≤ 200 ms", w: "86%" },
    { k: "CLS", v: "≤ 0.1", w: "92%" },
  ];
  return (
    <Card className="p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-[12px] font-semibold tracking-tight">Performance budget</p>
        <span className="hidden font-mono text-[10px] text-graphite sm:inline">Core Web Vitals</span>
      </div>
      <ul className="space-y-2.5">
        {rows.map((r, i) => (
          <li key={r.k} className="grid grid-cols-[30px_1fr_auto] items-center gap-2">
            <span className="font-mono text-[10.5px] font-medium">{r.k}</span>
            <span className="h-1.5 overflow-hidden rounded-full bg-line">
              <m.span
                className="block h-full origin-left rounded-full bg-green"
                style={{ width: r.w }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1 + i * 0.12, duration: 1.2 }}
              />
            </span>
            <span className="font-mono text-[10px] text-graphite">{r.v}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function CartToast() {
  return (
    <div className="flex items-center gap-2.5 rounded-full bg-white py-1.5 pr-4 pl-1.5 shadow-[0_20px_40px_-16px_rgb(14_17_16/0.3),0_0_0_1px_rgb(14_17_16/0.06)]">
      <span className="flex size-6 items-center justify-center rounded-full bg-green text-carbon">
        <Check className="size-3.5" strokeWidth={3} />
      </span>
      <span className="text-[11.5px] font-medium whitespace-nowrap">Added to cart</span>
    </div>
  );
}

/* ------------------------------ Stage ------------------------------ */

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const px = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.6 });
  const py = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.6 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scroll = useTransform(scrollYProgress, [0, 1], [0.5, -0.5]);
  const zero = useMotionValue(0);

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientX / window.innerWidth) * 2 - 1);
      rawY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, rawX, rawY]);

  const sy = reduce ? zero : scroll;

  return (
    <div
      ref={ref}
      className="relative h-[450px] w-full select-none sm:h-[540px] lg:h-[560px]"
      aria-hidden="true"
    >
      {/* Theme editor — main layer (tablet/desktop) */}
      <Layer depth={0.4} px={px} py={py} scrollY={sy} delay={0.35} className="top-12 left-0 hidden w-[66%] sm:block">
        <ThemeEditorCard />
      </Layer>

      {/* Product card */}
      <Layer
        depth={1}
        px={px}
        py={py}
        scrollY={sy}
        delay={0.5}
        className="top-0 left-0 w-[58%] sm:right-0 sm:left-auto sm:w-[38%] lg:w-[36%]"
      >
        <ProductCard />
      </Layer>

      {/* Vitals */}
      <Layer
        depth={1.2}
        px={px}
        py={py}
        scrollY={sy}
        delay={0.8}
        className="top-[8%] right-0 w-[50%] sm:top-auto sm:right-[2%] sm:bottom-[3%] sm:w-[40%] lg:w-[37%]"
      >
        <VitalsCard />
      </Layer>

      {/* Liquid code */}
      <Layer
        depth={0.8}
        px={px}
        py={py}
        scrollY={sy}
        delay={0.65}
        className="bottom-0 left-0 w-full sm:bottom-[1%] sm:left-[4%] sm:w-[58%]"
      >
        <LiquidCard />
      </Layer>

      {/* Cart toast */}
      <Layer
        depth={1.5}
        px={px}
        py={py}
        scrollY={sy}
        delay={1.25}
        className="top-[40%] right-[4%] sm:top-[3%] sm:right-auto sm:left-[40%]"
      >
        <CartToast />
      </Layer>
    </div>
  );
}
