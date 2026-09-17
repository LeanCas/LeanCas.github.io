import {
  Blocks,
  Code2,
  Gauge,
  MousePointerClick,
  SlidersHorizontal,
  Smartphone,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { Marquee } from "@/components/Marquee";
import { pillars } from "@/data/content";
import { delay } from "@/lib/style";
import { OrbitMark } from "./OrbitMark";

const icons: LucideIcon[] = [Blocks, Gauge, MousePointerClick, Code2, SlidersHorizontal, Smartphone, Terminal];

const words = ["Liquid", "Performance", "Conversion", "Sections", "Integrations", "Themes", "Metafields"];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-carbon text-white">
      <div className="hairline-grid-dark pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-[10%] -left-40 size-[560px] rounded-full bg-[radial-gradient(circle,rgb(22_199_132/0.12),transparent_65%)]"
        aria-hidden="true"
      />

      {/* Differentiator */}
      <div className="container-x relative pt-24 md:pt-36">
        <p data-reveal className="eyebrow mb-6 flex items-center gap-3 text-ash">
          <span className="text-green">03</span>
          <span className="h-px w-8 bg-white/20" aria-hidden="true" />
          About HOTY
        </p>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 data-reveal style={delay(60)} className="display text-[clamp(3rem,6.6vw,6rem)]">
              Not another
              <br />
              <span className="text-white/40">Shopify agency</span>
              <span className="text-green">.</span>
            </h2>
            <p data-reveal style={delay(140)} className="mt-8 max-w-xl text-xl leading-relaxed text-pretty text-white/65">
              We combine design, development and ecommerce thinking to build Shopify stores made to scale. No
              account managers in between — you work directly with the people designing and writing the code.
            </p>
            <dl data-reveal style={delay(220)} className="mt-12 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
              {[
                ["Focus", "Shopify"],
                ["Based in", "Tucumán, AR"],
                ["Working", "Worldwide"],
              ].map(([k, v]) => (
                <div key={k} className="bg-carbon px-5 py-4 last:col-span-2 sm:last:col-span-1">
                  <dt className="eyebrow text-white/55">{k}</dt>
                  <dd className="mt-2 text-lg font-medium tracking-tight">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div data-reveal="scale" className="lg:col-span-5">
            <OrbitMark />
          </div>
        </div>
      </div>

      {/* Interlude marquee */}
      <div className="relative mt-20 border-y border-white/10 py-6 md:mt-28 md:py-8" aria-hidden="true">
        <Marquee duration={50}>
          {words.map((w) => (
            <span key={w} className="flex items-center">
              <span className="px-8 text-[clamp(2.5rem,6vw,5rem)] leading-none font-semibold tracking-[-0.045em] whitespace-nowrap text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.28)]">
                {w}
              </span>
              <span className="size-3 bg-green md:size-4" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* Why HOTY */}
      <div className="container-x relative py-24 md:py-36">
        <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between bg-carbon p-7 md:p-8" data-reveal>
            <p className="eyebrow text-green">Why HOTY</p>
            <p className="mt-10 text-3xl leading-[1.05] font-semibold tracking-[-0.035em]">
              Seven principles behind every store we ship.
            </p>
          </div>
          {pillars.map((p, i) => {
            const Icon = icons[i];
            return (
              <div
                key={p.title}
                data-reveal
                style={delay(((i + 1) % 4) * 70)}
                className="group relative bg-carbon p-7 transition-colors duration-500 hover:bg-carbon-2 md:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white/[0.06] text-green ring-1 ring-white/10 transition-colors duration-500 group-hover:bg-green group-hover:text-carbon">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-white/55">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 text-xl md:mt-12 font-semibold tracking-[-0.02em]">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-white/55">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
