import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { site } from "@/data/site";
import { delay } from "@/lib/style";
import { ContactForm } from "./ContactForm";

const channels: { icon: LucideIcon; label: string; value: string; href: string; external?: boolean }[] = [
  { icon: Mail, label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { icon: Phone, label: "Phone", value: site.contact.phoneDisplay, href: site.contact.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: site.contact.phoneDisplay, href: site.contact.whatsappHref, external: true },
  {
    icon: MapPin,
    label: "Studio",
    value: `${site.contact.city}, ${site.contact.country}`,
    href: site.contact.mapsHref,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-paper py-24 md:py-36">
      <div
        className="hairline-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_20%_20%,#000_10%,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p data-reveal className="eyebrow mb-6 flex items-center gap-3 text-graphite">
              <span className="text-green-ink">08</span>
              <span className="h-px w-8 bg-carbon/20" aria-hidden="true" />
              Contact
            </p>
            <h2 data-reveal style={delay(80)} className="display text-[clamp(3rem,7vw,6rem)]">
              Start a<br />
              project<span className="text-green">.</span>
            </h2>
            <p data-reveal style={delay(160)} className="mt-6 max-w-md text-lg leading-relaxed text-graphite">
              Tell us where your store is today and where you want it to be. We&apos;ll come back with questions,
              an approach and next steps.
            </p>

            <ul data-reveal style={delay(240)} className="mt-12 border-t border-carbon/10">
              {channels.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label} className="border-b border-carbon/10">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 py-4"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-carbon/10 transition-colors duration-300 group-hover:bg-carbon group-hover:text-green">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="eyebrow block text-graphite">{label}</span>
                      <span className="mt-1.5 block truncate font-medium tracking-tight">{value}</span>
                    </span>
                    <ArrowUpRight
                      className="ml-auto size-4 shrink-0 text-carbon/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-carbon"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal style={delay(120)} className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
