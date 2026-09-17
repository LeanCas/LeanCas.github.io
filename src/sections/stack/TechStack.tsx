import { techStack } from "@/data/content";
import { delay } from "@/lib/style";

export function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="relative border-t border-carbon/[0.07] py-24 md:py-32">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p data-reveal className="eyebrow mb-6 flex items-center gap-3 text-graphite">
              <span className="text-green-ink">06</span>
              <span className="h-px w-8 bg-carbon/20" aria-hidden="true" />
              Tech stack
            </p>
            <h2 id="stack-title" data-reveal style={delay(80)} className="display text-[clamp(2.25rem,4.4vw,3.75rem)]">
              The tools
              <br />
              <span className="text-carbon/55">behind the work.</span>
            </h2>
          </div>

          <dl className="border-t border-carbon/10 lg:col-span-7">
            {techStack.map((row, i) => (
              <div
                key={row.group}
                data-reveal
                style={delay(i * 70)}
                className="grid gap-3 border-b border-carbon/10 py-6 md:grid-cols-[160px_1fr] md:items-baseline md:py-8"
              >
                <dt className="eyebrow text-graphite">
                  <span className="mr-2 text-green-ink">{String(i + 1).padStart(2, "0")}</span>
                  {row.group}
                </dt>
                <dd>
                  <ul className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    {row.items.map((item, j) => (
                      <li key={item} className="flex items-baseline gap-2">
                        <span className="relative text-[clamp(1.6rem,3vw,2.5rem)] leading-tight font-semibold tracking-[-0.035em] text-carbon transition-colors duration-300 hover:text-green-ink">
                          {item}
                        </span>
                        {j < row.items.length - 1 && (
                          <span className="text-2xl text-carbon/20" aria-hidden="true">
                            /
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
