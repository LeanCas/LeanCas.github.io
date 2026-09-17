import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/data/site";
import { delay } from "@/lib/style";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta" className="relative overflow-hidden bg-carbon px-0 text-white">
      <div className="hairline-grid-dark pointer-events-none absolute inset-0 opacity-80" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 -bottom-60 size-[720px] rounded-full bg-[radial-gradient(circle,rgb(22_199_132/0.22),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="container-x relative py-24 md:py-40">
        <p data-reveal className="eyebrow flex items-center gap-3 text-green">
          <span className="size-1.5 animate-pulse-dot rounded-full bg-green" aria-hidden="true" />
          Ready when you are
        </p>
        <h2 id="final-cta" data-reveal style={delay(80)} className="display mt-8 max-w-5xl text-[clamp(3rem,8.5vw,8rem)]">
          Let&apos;s build your
          <br />
          <span className="text-white/40">next Shopify store</span>
          <span className="text-green">.</span>
        </h2>
        <div data-reveal style={delay(160)} className="mt-12 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#contact" variant="green" size="lg">
            Start a project
          </ButtonLink>
          <ButtonLink href={`mailto:${site.contact.email}`} variant="ghost-light" size="lg" icon="up-right">
            {site.contact.email}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
