import { Marquee } from "@/components/Marquee";
import { projects } from "@/data/projects";

export function ClientStrip() {
  return (
    <section aria-label="Brands we have worked with" className="border-y border-carbon/[0.07] bg-white">
      <div className="container-x flex flex-col gap-5 py-7 md:flex-row md:items-center md:gap-10">
        <div className="flex shrink-0 items-center gap-3 md:w-64">
          <span className="size-1.5 rounded-full bg-green" aria-hidden="true" />
          <p className="eyebrow text-graphite">
            Shopify Partners <span className="text-carbon/25">/</span> Selected brands
          </p>
        </div>
        <Marquee duration={36} className="min-w-0 flex-1">
          {projects.map((p) => (
            <span key={p.slug} className="flex items-center">
              <span className="px-7 text-2xl font-semibold tracking-[-0.04em] whitespace-nowrap text-carbon/80 md:px-10 md:text-[28px]">
                {p.name}
              </span>
              <span className="size-1.5 bg-carbon/20" aria-hidden="true" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
