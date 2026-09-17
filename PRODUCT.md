# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Founders and marketing leads at small-to-mid product/e-commerce and DTC brands (primarily English-speaking, international), shopping for a design-and-development partner to launch or relaunch their website.

## Product Purpose

HOTY. is a design and web development studio that builds high-performing, conversion-focused websites for product and e-commerce brands, pairing visual identity work with technical execution. Success means a visitor trusts the studio's craft from the real portfolio and reaches out through the contact form.

## Positioning

The differentiator is design craft and technical performance delivered by the same team: branding and UI work is inseparable from fast, SEO-optimized builds and custom development (CRM/ERP, APIs, dashboards, automation). Most boutique design studios stop at visuals; HOTY. also ships the engineering.

## Operating Context

Single-page marketing site with anchor navigation (Inicio / Sobre Hoty. / Proyectos / Servicios / Contacto). The only conversion path is the contact form (posts to Formspree) or direct email/WhatsApp-style contact. Studio is based in San Miguel de Tucumán, Tucumán, Argentina, but the portfolio and target clients skew international/e-commerce.

## Capabilities and Constraints

- Static site: HTML + Bootstrap 5 + hand-compiled SCSS (`npx sass assets/scss/styles.scss assets/css/styles.css --style=expanded`). No CMS, no backend, no npm build scripts.
- Contact form action and field names are fixed integration points: `action="https://formspree.io/f/xldlaapl"`, fields `Nombre`, `Email`, `Proyecto`. Do not change the endpoint or field names.
- Social links (Facebook/Instagram) in the footer are currently placeholders (`href="#!"`) with no confirmed real accounts — do not invent handles or follower counts.
- `html/estudios_abogados.html` is a separate client landing page, out of scope for this redesign.

## Brand Commitments

- Name renders as "HOTY." (trailing period is part of the wordmark).
- Email: studio.hoty@gmail.com. Location: San Miguel de Tucumán, Tucumán, Argentina.
- Brand palette (confirmed, already applied to SCSS tokens):
  - Emerald Tech `#16C784` — primary accent
  - Deep Green `#073B2A` — secondary/dark accent
  - Mint Background `#EAFBF4` — light section background
  - Carbon `#101312` — primary dark/near-black
  - Graphite `#626866` — body/secondary text
  - Border `#E5E9E7` — hairlines/dividers on light backgrounds
  - Off White `#FAFCFB` — default page background
  - White `#FFFFFF`
- Typeface: Manrope (already loaded via Google Fonts).
- Voice/tone: dark, editorial, bold — confirmed by the client for this redesign.

## Evidence on Hand

- 7 real completed projects with live links (only ones to feature; do not invent additional case studies):
  - Marea Blanca — mareablanca.com.mx
  - Salgado Inmobiliaria — inmobiliariasalgado.com.ar
  - Theeighthstand — theeighthstand.com
  - Simply Organic — simplyorganic.com
  - AJR Sport — ajrsport.com
  - 36Chester — 36chester.com
  - Bijou Grace — bijougrace.com
- One real testimonial: Gonzalo Arias (Marea Blanca), tied to a 98.6% client satisfaction figure.
- Confirmed aggregate stats: 98.6% client satisfaction, 100+ projects completed, 20+ brands served worldwide.
- The homepage's original "Datos y cifras" counter block (123/238/3 displayed vs. 40/7/12 as animation targets) is an unresolved template leftover with no confirmed real value. Decision: drop that duplicate stats block rather than fabricate numbers; keep only the confirmed stats above.

## Product Principles

1. Prove capability with real client outcomes (the 7-project portfolio + the one real testimonial), never invented case studies or numbers.
2. Design and engineering read as one discipline — every visual decision should also signal technical competence (speed, structure, SEO), not just aesthetics.
3. Speak to an international, product/e-commerce-minded audience even though copy is in Spanish.
4. Keep the path from proof (portfolio) to inquiry (contact form) short — single page, no unnecessary steps.

## Accessibility & Inclusion

No product-specific requirement established beyond standard web accessibility practice.
