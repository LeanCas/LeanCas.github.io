"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { faqs } from "@/data/content";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { delay } from "@/lib/style";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p data-reveal className="eyebrow mb-6 flex items-center gap-3 text-graphite">
                <span className="text-green-ink">07</span>
                <span className="h-px w-8 bg-carbon/20" aria-hidden="true" />
                FAQ
              </p>
              <h2 data-reveal style={delay(80)} className="display text-[clamp(2.5rem,5vw,4.25rem)]">
                Questions,
                <br />
                <span className="text-carbon/55">answered.</span>
              </h2>
              <p data-reveal style={delay(160)} className="mt-6 max-w-sm text-graphite">
                Something else on your mind? Write to{" "}
                <a href={`mailto:${site.contact.email}`} className="font-medium text-carbon underline decoration-green decoration-2 underline-offset-4">
                  {site.contact.email}
                </a>
              </p>
            </div>
          </div>

          <ul className="border-t border-carbon/10 lg:col-span-8">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              const btnId = `${baseId}-q-${i}`;
              const panelId = `${baseId}-a-${i}`;
              return (
                <li key={f.question} className="border-b border-carbon/10" data-reveal style={delay(i * 40)}>
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
                    >
                      <span className="text-lg font-medium tracking-[-0.02em] md:text-2xl">{f.question}</span>
                      <span
                        className={cn(
                          "flex size-9 shrink-0 items-center justify-center rounded-full ring-1 transition-all duration-500 ease-(--ease-out-expo)",
                          isOpen ? "rotate-45 bg-green text-carbon ring-green" : "ring-carbon/15 group-hover:ring-carbon/40",
                        )}
                        aria-hidden="true"
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-500 ease-(--ease-out-expo)",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden" inert={!isOpen}>
                      <p className="max-w-2xl pb-7 text-lg leading-relaxed text-graphite">{f.answer}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
