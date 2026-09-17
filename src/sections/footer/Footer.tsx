import { Logo } from "@/components/Logo";
import { nav, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-carbon text-white">
      <div className="container-x border-t border-white/10 pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="light" className="w-32" />
            <p className="mt-6 text-lg font-medium tracking-tight">Shopify Development Studio</p>
            <p className="mt-2 flex items-center gap-2 text-white/55">
              <span className="size-1.5 rounded-full bg-green" aria-hidden="true" />
              Shopify Partners
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="eyebrow mb-5 text-white/55">Navigation</p>
            <ul className="space-y-3">
              {[...nav, { label: "FAQ", href: "#faq" }, { label: "Contact", href: "#contact" }].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/75 transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="eyebrow mb-5 text-white/55">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${site.contact.email}`} className="text-white/75 transition-colors hover:text-white">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a href={site.contact.phoneHref} className="text-white/75 transition-colors hover:text-white">
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li className="text-white/55">
                {site.contact.city}, {site.contact.country}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 overflow-hidden" aria-hidden="true">
          <Logo tone="light" className="w-full opacity-[0.07]" title="" />
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:justify-between">
          <p>© {year} HOTY. All rights reserved.</p>
          <p>Shopify is a trademark of Shopify Inc.</p>
        </div>
      </div>
    </footer>
  );
}
