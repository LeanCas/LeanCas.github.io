import type { Faq, ProcessStep, Testimonial } from "@/types";

export const pillars = [
  { title: "Built for Shopify", body: "Native Online Store 2.0 architecture — sections, blocks, metafields — never a platform workaround." },
  { title: "Performance first", body: "Every theme is built against Core Web Vitals budgets from the first commit, not patched at the end." },
  { title: "Conversion focused", body: "Layouts, product pages and cart flows designed around how people actually buy." },
  { title: "Clean development", body: "Readable Liquid, versioned in Git, documented so any developer can pick it up." },
  { title: "Easy to manage", body: "Your team edits content, collections and campaigns from the theme editor, without us." },
  { title: "Mobile first", body: "Designed for the thumb first, then scaled up — because that is where most sessions happen." },
  { title: "Technical by default", body: "Integrations, APIs and automations are part of the build, not an afterthought." },
] as const;

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We audit your store or idea, your catalog and your customers, then define scope, priorities and success criteria.",
    outputs: ["Store & UX audit", "Technical scope", "Roadmap"],
  },
  {
    number: "02",
    title: "Design",
    description:
      "A focused design system and high-fidelity layouts for the templates that matter most — prototyped for mobile first.",
    outputs: ["Design system", "Key templates", "Clickable prototype"],
  },
  {
    number: "03",
    title: "Development",
    description:
      "Custom Liquid, sections and integrations built in Git, with staging previews you can review at every milestone.",
    outputs: ["Theme build", "Sections & blocks", "Integrations"],
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description:
      "QA across devices, a careful go-live and post-launch iteration on speed and conversion using real data.",
    outputs: ["QA & go-live", "Performance pass", "Iteration plan"],
  },
];

export const ecosystem = [
  "Online Store 2.0",
  "Liquid",
  "Theme editor",
  "Sections & blocks",
  "Metafields & metaobjects",
  "Shopify Markets",
  "Storefront API",
  "Admin API",
  "Shopify apps",
];

export const techStack = [
  { group: "Platform", items: ["Shopify", "Liquid"] },
  { group: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS"] },
  { group: "Workflow", items: ["GitHub", "Figma"] },
  { group: "Growth", items: ["Klaviyo", "GA4"] },
] as const;

// Only real testimonials. Leave empty to hide the section.
export const testimonials: Testimonial[] = [
  {
    quote: "The team exceeded our expectations with an impressive brand identity.",
    originalQuote: "El equipo superó nuestras expectativas con una identidad de marca impresionante.",
    author: "Gonzalo Arias",
    company: "Marea Blanca",
    url: "https://www.mareablanca.com.mx/",
  },
];

export const faqs: Faq[] = [
  {
    question: "Do you only work with Shopify?",
    answer:
      "Shopify is our focus and where most of our work happens. When a project needs it, we also build with Next.js and React — for headless storefronts, landing pages or custom tools around your store.",
  },
  {
    question: "Do you build custom themes or customize existing ones?",
    answer:
      "Both. We build fully custom Online Store 2.0 themes, and we also extend or redesign existing themes when that is the faster, smarter path for your budget.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope. A complete store build typically takes 4–8 weeks including discovery, design, development and QA. Focused work like custom sections or a performance pass is much shorter.",
  },
  {
    question: "Will my team be able to edit the store after launch?",
    answer:
      "Yes. Everything we build is configurable from the Shopify theme editor — sections, blocks, colors, content and collections — so day-to-day changes don't need a developer.",
  },
  {
    question: "Can you make my current store faster?",
    answer:
      "Usually, yes. We audit theme code, apps, images and scripts against Core Web Vitals, then fix what slows the store down, starting with the changes that matter most.",
  },
  {
    question: "Do you work with brands outside Argentina?",
    answer:
      "Yes. We're based in Tucumán, Argentina and work remotely with brands in different countries, in English and Spanish.",
  },
  {
    question: "What do you need to get started?",
    answer:
      "Your store URL (if you have one), what you want to achieve and any deadlines. Send it through the form below and we'll reply within 48 hours.",
  },
];
