"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-[background-color,border-color,backdrop-filter] duration-500 ease-(--ease-out-quart)",
          "border-b",
          scrolled && !open
            ? "border-carbon/[0.07] bg-paper/75 backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-transparent",
        )}
      >
        <nav className="container-x flex h-16 items-center justify-between md:h-[72px]" aria-label="Primary">
          <a href="#top" className="relative z-[60] -m-2 p-2" aria-label="HOTY. — back to top" onClick={() => setOpen(false)}>
            <Logo tone={open ? "light" : "dark"} className="w-[84px] transition-colors md:w-[92px]" />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative rounded-full px-4 py-2 text-sm font-medium text-carbon/70 transition-colors hover:text-carbon"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-carbon transition-transform duration-500 ease-(--ease-out-expo) group-hover:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <ButtonLink href="#contact">Start a project</ButtonLink>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="relative z-[60] -mr-2 inline-flex h-11 items-center gap-3 rounded-full px-3 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={cn("eyebrow transition-colors", open ? "text-white" : "text-carbon")}>
              {open ? "Close" : "Menu"}
            </span>
            <span className="relative block h-3 w-6" aria-hidden="true">
              <span
                className={cn(
                  "absolute left-0 h-[2px] w-6 transition-all duration-500 ease-(--ease-out-expo)",
                  open ? "top-[5px] rotate-45 bg-white" : "top-0 bg-carbon",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-[2px] transition-all duration-500 ease-(--ease-out-expo)",
                  open ? "top-[5px] w-6 -rotate-45 bg-white" : "top-[10px] w-4 bg-carbon",
                )}
              />
            </span>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col bg-carbon text-white lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="hairline-grid-dark pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="container-x relative flex flex-1 flex-col pt-28 pb-10">
              <p className="eyebrow mb-6 text-ash">Navigation</p>
              <ul className="flex flex-col">
                {[...nav, { label: "Contact", href: "#contact" }].map((item, i) => (
                  <li key={item.href} className="overflow-hidden border-b border-white/10">
                    <m.a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 text-[clamp(2.25rem,11vw,3.5rem)] font-semibold tracking-[-0.04em]"
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "110%", transition: { duration: 0.3 } }}
                      transition={{ delay: 0.25 + i * 0.06, duration: 0.8 }}
                    >
                      {item.label}
                      <span className="eyebrow text-green">0{i + 1}</span>
                    </m.a>
                  </li>
                ))}
              </ul>
              <m.div
                className="mt-auto flex flex-col gap-6 pt-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
              >
                <ButtonLink href="#contact" variant="green" size="lg" onClick={() => setOpen(false)} className="w-full">
                  Start a project
                </ButtonLink>
                <div className="flex flex-col gap-2 text-sm text-white/70">
                  <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 hover:text-white">
                    {site.contact.email} <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                  <a href={site.contact.phoneHref} className="hover:text-white">
                    {site.contact.phoneDisplay}
                  </a>
                </div>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
