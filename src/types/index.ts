export type NavItem = { label: string; href: string };

export type Project = {
  slug: string;
  name: string;
  url: string;
  domain: string;
  industry: string;
  type: "Ecommerce" | "Website";
  scope: string[];
  image: string; // base path without size/extension, e.g. /projects/marea-blanca
  alt: string;
};

export type ServiceKey =
  | "development"
  | "themes"
  | "redesign"
  | "cro"
  | "sections"
  | "integrations"
  | "performance";

export type Service = {
  key: ServiceKey;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  outputs: string[];
};

export type Testimonial = {
  quote: string;
  originalQuote?: string;
  author: string;
  company: string;
  url?: string;
};

export type Faq = { question: string; answer: string };
