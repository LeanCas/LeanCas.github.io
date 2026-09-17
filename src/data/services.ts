import type { Service } from "@/types";

export const services: Service[] = [
  {
    key: "development",
    number: "01",
    title: "Shopify Development",
    description:
      "End-to-end Shopify builds — from store architecture and product structure to a production-ready storefront.",
    deliverables: ["Store setup", "Catalog architecture", "Metafields", "Launch QA"],
  },
  {
    key: "themes",
    number: "02",
    title: "Custom Shopify Themes",
    description:
      "Online Store 2.0 themes designed around your brand and written in clean, documented Liquid. No bloated templates.",
    deliverables: ["Design system", "Liquid templates", "Theme editor settings", "Accessibility"],
  },
  {
    key: "redesign",
    number: "03",
    title: "Shopify Redesign",
    description:
      "A sharper storefront without starting over: we rebuild the experience while keeping your products, data and SEO.",
    deliverables: ["UX audit", "New visual direction", "Template rebuild", "SEO-safe migration"],
  },
  {
    key: "cro",
    number: "04",
    title: "Conversion Optimization",
    description:
      "Friction mapped and removed across product pages, cart and navigation, with changes you can measure in GA4.",
    deliverables: ["Funnel review", "PDP & cart UX", "A/B-ready variants", "Event tracking"],
  },
  {
    key: "sections",
    number: "05",
    title: "Custom Shopify Sections",
    description:
      "Reusable sections and blocks your team can drop in, reorder and edit from the theme editor — no code required.",
    deliverables: ["Section schema", "Blocks & presets", "Dynamic sources", "Merchant-friendly settings"],
  },
  {
    key: "integrations",
    number: "06",
    title: "Shopify Integrations",
    description:
      "Apps, APIs and automations connected properly: email, analytics, reviews, ERPs and custom back-office flows.",
    deliverables: ["Klaviyo", "GA4 & pixels", "Storefront / Admin API", "Automations"],
  },
  {
    key: "performance",
    number: "07",
    title: "Performance Optimization",
    description:
      "Faster themes built against Core Web Vitals: leaner JavaScript, optimized media and fewer blocking apps.",
    deliverables: ["Speed audit", "Core Web Vitals", "Image & font strategy", "App cleanup"],
  },
];
