import { Symbol } from "@/components/Logo";
import { ecosystem } from "@/data/content";
import { delay } from "@/lib/style";

export function Partners() {
  return (
    <section id="partners" className="relative overflow-hidden bg-white py-24 md:py-36">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p data-reveal className="eyebrow mb-6 flex items-center gap-3 text-graphite">
              <span className="text-green-ink">05</span>
              <span className="h-px w-8 bg-carbon/20" aria-hidden="true" />
              Shopify Partners
            </p>
            <h2 data-reveal style={delay(80)} className="display text-[clamp(2.5rem,5.4vw,4.75rem)] text-balance">
              Built inside the Shopify ecosystem<span className="text-green">.</span>
            </h2>
            <div data-reveal style={delay(160)} className="mt-8 max-w-md space-y-4 text-lg leading-relaxed text-graphite">
              <p>
                HOTY is part of the Shopify Partners program — the global network of developers, designers and
                agencies that build for merchants on Shopify.
              </p>
              <p>
                We build with the platform, not around it: native theme architecture, the theme editor, metafields and
                Shopify&apos;s APIs. The result is a store your team can run confidently after launch.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              data-reveal="scale"
              className="relative overflow-hidden rounded-3xl bg-paper p-5 ring-1 ring-carbon/[0.07] sm:p-8 md:p-10"
            >
              <div
                className="hairline-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_50%_45%,#000_30%,transparent_80%)]"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="mx-auto flex max-w-sm items-center gap-4 rounded-2xl bg-carbon p-4 text-white shadow-[0_30px_60px_-30px_rgb(14_17_16/0.5)]">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-white/10">
                    <Symbol tone="light" className="size-7 text-white" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold tracking-tight">HOTY. × Shopify</p>
                    <p className="truncate font-mono text-xs text-white/55">Shopify Partners program member</p>
                  </div>
                  <span className="ml-auto size-2 shrink-0 animate-pulse-dot rounded-full bg-green" aria-hidden="true" />
                </div>

                <div className="mx-auto h-8 w-px bg-gradient-to-b from-carbon/30 to-carbon/5" aria-hidden="true" />

                <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:gap-3">
                  {ecosystem.map((item, i) => (
                    <li
                      key={item}
                      className="group flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-3 text-sm ring-1 ring-carbon/[0.07] transition-[box-shadow,transform] duration-500 ease-(--ease-out-expo) hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-18px_rgb(14_17_16/0.25)]"
                    >
                      <span className="font-mono text-[10px] text-graphite">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-medium tracking-tight text-carbon/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-graphite">
              Shopify and the Shopify Partners program are trademarks of Shopify Inc. HOTY is an independent studio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
