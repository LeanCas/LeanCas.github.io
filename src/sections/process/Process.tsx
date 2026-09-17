"use client";

import { m, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useRef, useState } from "react";
import { processSteps } from "@/data/content";
import { cn } from "@/lib/cn";
import { delay } from "@/lib/style";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 65%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(processSteps.length - 1, Math.max(0, Math.floor(v * processSteps.length)));
    setActive(idx);
  });

  return (
    <section id="process" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <p data-reveal className="eyebrow mb-6 flex items-center gap-3 text-graphite">
                <span className="text-green-ink">04</span>
                <span className="h-px w-8 bg-carbon/20" aria-hidden="true" />
                Process
              </p>
              <h2 data-reveal style={delay(80)} className="display text-[clamp(2.5rem,6vw,5.25rem)]">
                From brief
                <br />
                <span className="text-carbon/55">to live store.</span>
              </h2>
              <p data-reveal style={delay(160)} className="mt-6 max-w-md text-lg leading-relaxed text-graphite">
                Four clear stages with review points at every milestone, so you always know what&apos;s being built and what comes next.
              </p>

              <div className="mt-12 hidden lg:block" aria-hidden="true">
                <div className="flex items-end gap-4">
                  <div className="relative h-[92px] overflow-hidden">
                    <m.div
                      className="flex flex-col"
                      animate={{ y: `${-active * 92}px` }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {processSteps.map((s) => (
                        <span key={s.number} className="block h-[92px] text-[92px] leading-none font-semibold tracking-[-0.06em]">
                          {s.number}
                        </span>
                      ))}
                    </m.div>
                  </div>
                  <span className="mb-3 font-mono text-sm text-graphite">/ 04</span>
                </div>
                <div className="mt-6 h-px w-full max-w-sm bg-carbon/10">
                  <m.div className="h-full origin-left bg-green" style={{ scaleX: progress }} />
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div ref={ref} className="relative lg:col-span-7">
            <div className="absolute top-2 bottom-2 left-[19px] w-px bg-carbon/10" aria-hidden="true">
              <m.div className="h-full w-full origin-top bg-green" style={{ scaleY: progress }} />
            </div>
            <ol className="flex flex-col gap-6 md:gap-8">
              {processSteps.map((step, i) => {
                const on = i <= active;
                return (
                  <li key={step.number} className="relative pl-16 md:pl-20">
                    <span
                      className={cn(
                        "absolute top-7 left-0 flex size-10 items-center justify-center rounded-full font-mono text-xs transition-colors duration-500",
                        on ? "bg-carbon text-green" : "bg-paper text-graphite ring-1 ring-carbon/15",
                      )}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                    <div
                      className={cn(
                        "rounded-3xl p-7 transition-[background-color,box-shadow] duration-700 md:p-10",
                        i === active
                          ? "bg-white shadow-[0_30px_60px_-30px_rgb(14_17_16/0.18)] ring-1 ring-carbon/[0.07]"
                          : "bg-transparent ring-1 ring-carbon/[0.07]",
                      )}
                    >
                      <h3 className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-none font-semibold tracking-[-0.035em]">
                        {step.title}
                      </h3>
                      <p className="mt-4 max-w-lg text-lg leading-relaxed text-graphite">{step.description}</p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {step.outputs.map((o) => (
                          <li
                            key={o}
                            className="flex items-center gap-2 rounded-full bg-paper px-3 py-1.5 text-sm text-carbon/75 ring-1 ring-carbon/[0.06]"
                          >
                            <span className="size-1.5 rounded-full bg-green" aria-hidden="true" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
