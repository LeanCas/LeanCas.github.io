import { ArrowUpRight } from "lucide-react";
import { testimonials } from "@/data/content";
import { delay } from "@/lib/style";

/** Renders only real testimonials from src/data/content.ts. Hidden when empty. */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section aria-label="Client testimonial" className="relative bg-mint/60 py-24 md:py-32">
      <div className="container-x">
        {testimonials.map((t) => (
          <figure key={t.author} className="mx-auto max-w-5xl">
            <p data-reveal className="eyebrow mb-10 flex items-center gap-3 text-green-ink">
              <span className="size-1.5 rounded-full bg-green" aria-hidden="true" />
              Client words
            </p>
            <blockquote data-reveal style={delay(80)}>
              <p className="text-[clamp(2rem,4.6vw,4rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-balance text-carbon">
                <span className="text-green-ink" aria-hidden="true">
                  &ldquo;
                </span>
                {t.quote}
                <span className="text-green-ink" aria-hidden="true">
                  &rdquo;
                </span>
              </p>
            </blockquote>
            <figcaption
              data-reveal
              style={delay(160)}
              className="mt-10 flex flex-col gap-4 border-t border-green-deep/15 pt-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-semibold tracking-tight">{t.author}</p>
                {t.url ? (
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-graphite hover:text-carbon"
                  >
                    {t.company} <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <p className="text-graphite">{t.company}</p>
                )}
              </div>
              {t.originalQuote && (
                <p lang="es" className="max-w-md text-sm text-graphite italic sm:text-right">
                  Original: &ldquo;{t.originalQuote}&rdquo;
                </p>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
