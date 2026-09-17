"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, m, useMotionValue, useSpring } from "motion/react";
import { useState, type PointerEvent } from "react";
import { ProjectPicture } from "@/components/ProjectPicture";
import { cn } from "@/lib/cn";
import type { Project } from "@/types";

type Props = { project: Project; index: number; sizes: string; className?: string };

export function WorkCard({ project, index, sizes, className }: Props) {
  const [hover, setHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.4 });

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group block", className)}
    >
      <div
        className="relative overflow-hidden rounded-[20px] bg-carbon/[0.04] ring-1 ring-carbon/[0.07]"
        onPointerEnter={(e) => {
          if (e.pointerType !== "mouse") return;
          onMove(e);
          setHover(true);
        }}
        onPointerLeave={() => setHover(false)}
        onPointerMove={onMove}
      >
        {/* browser chrome */}
        <div className="flex h-9 items-center gap-3 border-b border-carbon/[0.07] bg-white px-4">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-carbon/15" />
            <span className="size-2 rounded-full bg-carbon/15" />
            <span className="size-2 rounded-full bg-carbon/15" />
          </span>
          <span className="mx-auto max-w-[70%] truncate rounded-full bg-paper px-3 py-0.5 font-mono text-[11px] text-graphite">
            {project.domain}
          </span>
          <span className="w-10" aria-hidden="true" />
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className="h-full w-full transition-transform duration-[1.2s] ease-(--ease-out-expo) group-hover:scale-[1.04]">
            <ProjectPicture base={project.image} alt={project.alt} sizes={sizes} />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>

        <AnimatePresence>
          {hover && (
            <m.span
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 z-10 hidden md:block"
              style={{ x: sx, y: sy }}
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <span className="flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-green px-4 py-2.5 text-sm font-medium whitespace-nowrap text-carbon shadow-lg">
                Visit site <ArrowUpRight className="size-4" />
              </span>
            </m.span>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="eyebrow mb-2.5 text-graphite">
            <span className="text-green-ink">{String(index + 1).padStart(2, "0")}</span>
            <span className="mx-2 text-carbon/25">/</span>
            {project.industry}
          </p>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-[28px]">{project.name}</h3>
        </div>
        <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-carbon/10 transition-colors duration-300 group-hover:bg-carbon group-hover:text-white">
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">Opens {project.domain} in a new tab</span>
        </span>
      </div>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {[project.type, ...project.scope].map((tag) => (
          <li key={tag} className="rounded-full bg-carbon/[0.045] px-2.5 py-1 text-xs text-graphite">
            {tag}
          </li>
        ))}
      </ul>
    </a>
  );
}
