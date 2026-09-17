import type { NavItem } from "@/types";

export const site = {
  name: "HOTY.",
  legalName: "HOTY",
  tagline: "Shopify Development Studio",
  url: "https://hoty.com.ar",
  title: "HOTY. — Shopify Development Studio",
  description:
    "HOTY is a Shopify development studio specialized in custom Shopify stores, themes, performance and conversion optimization.",
  locale: "en_US",
  // Real, confirmed contact data (carried over from the previous site).
  contact: {
    email: "studio.hoty@gmail.com",
    phoneDisplay: "+54 381 4594146",
    phoneHref: "tel:+543814594146",
    whatsappHref: "https://wa.me/5493814594146",
    city: "San Miguel de Tucumán",
    region: "Tucumán",
    country: "Argentina",
    countryCode: "AR",
    mapsHref: "https://maps.app.goo.gl/bh4usW5bepvBYhBp8",
  },
  // Existing Formspree endpoint used by the previous contact form.
  formEndpoint: "https://formspree.io/f/xldlaapl",
  // Existing Meta Pixel installed on the previous site.
  metaPixelId: "1959106141244679",
} as const;

export const nav: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];
