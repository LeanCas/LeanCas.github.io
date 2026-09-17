import { ButtonLink } from "@/components/ButtonLink";
import { SectionIntro } from "@/components/SectionIntro";
import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";
import { delay } from "@/lib/style";
import { WorkCard } from "./WorkCard";

// Editorial rhythm on a 12-column grid (desktop) / 2 columns (tablet).
const layout = [
  { span: "md:col-span-2 lg:col-span-7", sizes: "(min-width:1024px) 58vw, 100vw" },
  { span: "lg:col-span-5 lg:mt-40", sizes: "(min-width:1024px) 42vw, (min-width:768px) 50vw, 100vw" },
  { span: "lg:col-span-4", sizes: "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" },
  { span: "lg:col-span-4 lg:mt-20", sizes: "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" },
  { span: "lg:col-span-4", sizes: "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" },
  { span: "lg:col-span-5 lg:mt-20", sizes: "(min-width:1024px) 42vw, (min-width:768px) 50vw, 100vw" },
  { span: "md:col-span-2 lg:col-span-7", sizes: "(min-width:1024px) 58vw, 100vw" },
];

export function Work() {
  return (
    <section id="work" className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionIntro
          index="01"
          eyebrow="Selected work"
          title={
            <>
              Real brands.
              <br />
              <span className="text-carbon/55">Live storefronts.</span>
            </>
          }
          lead="A selection of ecommerce stores and websites designed and developed by HOTY — for brands in fashion, jewelry, food, sport and real estate."
        />

        <div className="mt-16 grid gap-x-8 gap-y-14 md:mt-24 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-20">
          {projects.map((project, i) => (
            <div key={project.slug} data-reveal style={delay((i % 2) * 90)} className={cn(layout[i]?.span)}>
              <WorkCard project={project} index={i} sizes={layout[i]?.sizes ?? "100vw"} />
            </div>
          ))}
        </div>

        <div
          data-reveal
          className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-carbon/10 pt-8 md:flex-row md:items-center"
        >
          <p className="max-w-lg text-graphite">
            Every project is different. Tell us about yours and we&apos;ll walk you through the work most relevant to
            it.
          </p>
          <ButtonLink href="#contact" variant="secondary">
            Discuss your store
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
