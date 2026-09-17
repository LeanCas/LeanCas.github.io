"use client";

import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SYMBOL } from "@/lib/brand-paths";

/** Large brand symbol drawn as a technical construction, rotating with scroll. */
export function OrbitMark() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-35, 35]);
  const rotateRev = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [20, -40]);
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      {/* construction rings */}
      <m.svg viewBox="0 0 200 200" className="absolute inset-0 size-full" style={{ rotate: rotateRev }}>
        <circle cx="100" cy="100" r="98" fill="none" stroke="rgb(255 255 255 / 0.08)" strokeWidth="0.4" />
        <circle cx="100" cy="100" r="74" fill="none" stroke="rgb(255 255 255 / 0.1)" strokeWidth="0.4" strokeDasharray="1 2.5" />
        <line x1="2" y1="100" x2="198" y2="100" stroke="rgb(255 255 255 / 0.06)" strokeWidth="0.4" />
        <line x1="100" y1="2" x2="100" y2="198" stroke="rgb(255 255 255 / 0.06)" strokeWidth="0.4" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const r1 = 94;
          const r2 = i % 6 === 0 ? 86 : 90;
          return (
            <line
              key={i}
              x1={100 + Math.cos(a) * r1}
              y1={100 + Math.sin(a) * r1}
              x2={100 + Math.cos(a) * r2}
              y2={100 + Math.sin(a) * r2}
              stroke={i % 6 === 0 ? "rgb(22 199 132 / 0.8)" : "rgb(255 255 255 / 0.2)"}
              strokeWidth="0.6"
            />
          );
        })}
        <circle cx="198" cy="100" r="2" fill="#16C784" />
      </m.svg>

      {/* symbol */}
      <m.div className="absolute inset-[18%]" style={{ y }}>
        <m.svg viewBox="0 0 100 100" className="size-full" style={{ rotate }}>
          <path d={SYMBOL.o} fill="rgb(255 255 255 / 0.04)" stroke="rgb(255 255 255 / 0.55)" strokeWidth="0.35" />
        </m.svg>
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
          <path d={SYMBOL.dot} fill="#16C784" />
        </svg>
      </m.div>
    </div>
  );
}
