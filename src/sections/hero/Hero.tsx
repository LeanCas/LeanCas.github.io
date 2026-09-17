import { ButtonLink } from "@/components/ButtonLink";
import { Symbol } from "@/components/Logo";
import { delay } from "@/lib/style";
import { HeroVisualLazy } from "./HeroVisualLazy";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 lg:pb-24">
      {/* Background: hairline grid + soft green light */}
      <div
        aria-hidden="true"
        className="hairline-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_30%,#000_20%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgb(22_199_132/0.16),transparent_65%)]"
      />

      <div className="container-x relative">
        <p
          className="fade-up eyebrow inline-flex items-center gap-3 rounded-full bg-white px-3.5 py-2 text-carbon ring-1 ring-carbon/[0.08]"
          style={delay(0)}
        >
          <span className="size-1.5 animate-pulse-dot rounded-full bg-green" aria-hidden="true" />
          Shopify Development Studio
        </p>

        <h1 className="display mt-7 text-[clamp(2.9rem,8.4vw,7.75rem)] text-carbon md:mt-9">
          <span className="line-mask">
            <span style={delay(80)}>Shopify experiences</span>
          </span>
          <span className="line-mask">
            <span style={delay(180)}>
              <span className="text-carbon/55">built to perform</span>
              <span className="text-green">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col lg:col-span-5 lg:pt-8">
            <p
              className="fade-up max-w-md text-lg leading-relaxed text-pretty text-graphite md:text-xl"
              style={delay(320)}
            >
              We design, develop and optimize high-performance Shopify experiences built for conversion.
            </p>
            <div className="fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={delay(420)}>
              <ButtonLink href="#contact" size="lg">
                Start a project
              </ButtonLink>
              <ButtonLink href="#work" size="lg" variant="secondary" icon="none">
                View our work
              </ButtonLink>
            </div>

            <div
              className="fade-up mt-10 flex max-w-md items-center gap-4 border-t border-carbon/10 pt-6 lg:mt-auto"
              style={delay(540)}
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-carbon text-white">
                <Symbol tone="light" className="size-7" />
              </span>
              <div>
                <p className="text-[15px] font-semibold tracking-tight">Shopify Partners</p>
                <p className="text-sm text-graphite">A studio in the Shopify Partners program.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <HeroVisualLazy />
          </div>
        </div>
      </div>
    </section>
  );
}
