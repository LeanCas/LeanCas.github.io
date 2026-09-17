"use client";

import { Plus } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { useState } from "react";
import { SectionIntro } from "@/components/SectionIntro";
import { services } from "@/data/services";
import { cn } from "@/lib/cn";
import { delay } from "@/lib/style";
import { ServiceVisual } from "./ServiceVisual";

export function Services() {
  const [active, setActive] = useState(0); // expanded row
  const [preview, setPreview] = useState(0); // hovered row (desktop preview)
  const current = services[preview];

  return (
    <section id="services" className="relative bg-white py-24 md:py-36">
      <div className="container-x">
        <SectionIntro
          index="02"
          eyebrow="Services"
          title={
            <>
              Seven ways
              <br />
              <span className="text-carbon/55">we grow stores.</span>
            </>
          }
          lead="Seven focused disciplines, one team. Design, Liquid development and ecommerce strategy work together from the first call."
        />

        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12 lg:gap-10">
          <ol className="border-t border-carbon/10 lg:col-span-7" onPointerLeave={() => setPreview(active)}>
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.key} className="border-b border-carbon/10" data-reveal style={delay(i * 40)}>
                  <button
                    type="button"
                    className="group flex w-full items-baseline gap-5 py-6 text-left md:gap-8 md:py-8"
                    aria-expanded={isActive}
                    aria-controls={`service-${s.key}`}
                    onClick={() => {
                      setActive(i);
                      setPreview(i);
                    }}
                    onPointerEnter={(e) => e.pointerType === "mouse" && setPreview(i)}
                    onFocus={() => setPreview(i)}
                  >
                    <span
                      className={cn(
                        "w-7 shrink-0 font-mono text-sm transition-colors duration-300",
                        isActive ? "text-green-ink" : "text-graphite",
                      )}
                    >
                      {s.number}
                    </span>
                    <span
                      className={cn(
                        "flex-1 text-[clamp(1.6rem,3.4vw,2.75rem)] leading-[1.05] font-semibold tracking-[-0.035em] transition-[color,transform] duration-500 ease-(--ease-out-expo)",
                        isActive || i === preview ? "text-carbon lg:translate-x-2" : "text-carbon/45 group-hover:text-carbon/70",
                      )}
                    >
                      {s.title}
                    </span>
                    <span
                      className={cn(
                        "flex size-9 shrink-0 items-center justify-center self-center rounded-full ring-1 transition-all duration-500 ease-(--ease-out-expo)",
                        isActive ? "rotate-45 bg-carbon text-white ring-carbon" : "text-carbon ring-carbon/15",
                      )}
                      aria-hidden="true"
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                  <div
                    id={`service-${s.key}`}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-500 ease-(--ease-out-expo)",
                      isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 pl-12 md:pl-[3.75rem]">
                        <p className="max-w-lg text-lg leading-relaxed text-graphite">{s.description}</p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {s.deliverables.map((d) => (
                            <li
                              key={d}
                              className="rounded-full bg-paper px-3 py-1.5 font-mono text-xs text-carbon/70 ring-1 ring-carbon/[0.07]"
                            >
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Sticky preview (desktop) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/4.6] overflow-hidden rounded-3xl bg-carbon p-8 text-white">
                <div className="hairline-grid-dark pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
                <div
                  className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full bg-[radial-gradient(circle,rgb(22_199_132/0.25),transparent_70%)]"
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-white/55">Preview</span>
                    <span className="font-mono text-xs text-green">
                      {current.number} / {String(services.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="relative my-8 flex-1" aria-hidden="true">
                    <AnimatePresence mode="wait">
                      <m.div
                        key={current.key}
                        className="absolute inset-0"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.45 }}
                      >
                        <ServiceVisual kind={current.key} />
                      </m.div>
                    </AnimatePresence>
                  </div>
                  <p className="text-2xl font-semibold tracking-[-0.03em]">{current.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
