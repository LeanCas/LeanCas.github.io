---
version: 1
slug: "html-index-html"
primary_target: "html/index.html"
related_targets: []
---

# Surface Brief — html/index.html (HOTY. homepage)

Scope: single-page marketing site (Persuade mode). Full visual redesign, product truth/content/constraints from PRODUCT.md preserved.

Audience: founders/marketing leads of product/e-commerce and DTC brands (international), evaluating a design+dev partner.
Job: decide HOTY. has the design taste and technical chops to build their site, then submit the contact form.
Proof/content: 7 real portfolio projects with live links, 1 real testimonial (Gonzalo Arias/Marea Blanca), confirmed stats (98.6% / 100+ / 20+), 4 real services, 5 real FAQs, real contact form (Formspree) and footer info.
Constraints: static HTML/Bootstrap/SCSS, no build tooling beyond manual `npx sass` recompile; Formspree endpoint/field names fixed; no fabricated social proof beyond what's confirmed.

## Direction contract

THESIS: The portfolio isn't a carousel proving "we have clients" — it's a live wall of real work you scroll through, and the project you land on is the one that tells you its story. Refuses the generic 3-up static portfolio grid every agency site ships.

OWN-WORLD: Carbon (#101312) full-bleed dark ground with portfolio imagery run edge-to-edge as the page's only color; Emerald Tech (#16C784) reserved for the focused tile's border/glow, links, and CTA arrows; Off White (#FAFCFB) / Mint Background (#EAFBF4) sections punctuate as quiet counterpoints for services/FAQ so the dark wall doesn't run the whole page; Deep Green (#073B2A) as a secondary dark accent; Graphite (#626866) for secondary text on light ground. Manrope at editorial scale: oversized display headlines with tight negative tracking (-0.03em on the hero wordmark). Correction after the finish review: no numbered-badge or kicker-label system ships anywhere — the skill's own craft floor bans section-number kickers ("01/02/03 unless the sequence itself carries information") outright, with no brief override; an earlier draft of this OWN-WORLD line called for reusing that pattern bigger/bolder, which was a drafting mistake carried over from the pre-redesign template and never should have been written. Corrected here rather than built.

STORY: A visitor lands, immediately sees the real client wall in motion (proof before pitch), scrolls through a bold "lo que hacemos" services block, then credibility (stats + the one real testimonial), FAQ, and a short direct contact block that closes the page back in the dark. They leave believing HOTY. ships real, working sites for real global brands, and they submit the form.

FIRST VIEWPORT: Full-bleed dark hero — big bold "Hoty." wordmark with the primary CTA paired directly beside it in the same bottom-anchored row (matching the pre-redesign layout's own composition, not a viewport-corner-pinned button; "as today" in an earlier draft of this line was ambiguous and was read too literally by the finish review — clarified here) — with the portfolio wall as the very next full-bleed section, no scroll-jacking, so proof-of-work sits one scroll away instead of buried after stats/services like the old page order. Portfolio wall: shipped as a single horizontally-scrolling row (not multiple genre rows) — only 7 real projects exist, and inventing genre categories to split them across rows would fabricate structure PRODUCT.md forbids; the focused/hovered tile lifts, scales up slightly, gains a primary-colored border/glow plus an ambient pointer-glow trail, and reveals project name, service tags, and "ver proyecto" link; neighbors dim to 55% opacity. Contact section intentionally stays dark (Carbon) rather than the light "quiet counterpoint" grouping this contract originally assigned it to — built as a bold, deliberate close (dark hero/wall open the page, light services/FAQ carry the middle, dark contact+footer close it) rather than ending on a light section; kept as shipped, this correction supersedes the section's original light assignment.

FORM: User-chosen challenger over the assigned grounded direction — the streaming-catalog-wall system (SOURCE ID `pop-culture-shelf-streaming-title-card-wall`), materials translated from its own neutral-ground/single-accent grammar into HOTY.'s pinned Carbon/Emerald Tech palette. Seed key `f217e3fa`, mode `persuade`, assigned index 7 (declined on named grounds: a full "software changelog/diff-log" world risked burying the design-craft message in programmer-only iconography for a largely non-technical buyer — product-clarity failure); chosen challenger index 3.

Raises kept from declined challengers:
- From the bioluminescent-plankton system: an ambient glow-trace on the wall tiles — a pointer-tracked radial glow (`--gx`/`--gy` custom properties updated on `pointermove`, see `assets/js/custom.js`) layered under the tile's content and above its image, live on the wall's hover/focus system.
- From the hand-processed-film system: the medium exposes its own process — a real "boot" beat on first paint (the "Hoty." wordmark assembling letter by letter) as the signature interaction, with a `prefers-reduced-motion` fallback that shows it fully assembled immediately.

The competitive (not chosen) particle-detector challenger's radial/orbit motif was judged, after building, not to earn its place: only 3 real numbers exist (98.6% / 100+ / 20+), and a literal radial chart over 3 points would read as forced data-viz rather than earned structure. Folded into the confirmed stats treatment instead (see below) — declined, not shipped.

Duplicate/contradictory "Datos y cifras" counter block (123/238/3 displayed vs 40/7/12 animated target) is dropped per client decision; only the confirmed stats (98.6% / 100+ / 20+) ship, folded into the testimonial's running prose as `.stat-inline` emphasis rather than a stat-card grid (avoids the craft floor's banned "hero-metric template").

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Finish review — fix round (round 1)

Reviewed by `impeccable-finish-reviewer`, disposition `fix`. Applied: ambient pointer-glow on wall tiles (was missing), tile now visibly lifts+scales on focus (was lift-only), tight tracking added to the hero wordmark, unified the header hamburger icon to the `lucide` family (was mixing `solar`). Declined per craft-floor conflict: reintroducing the 01/02/03 badge system — the floor's own ban ("no brief earns it back") outranks this brief's earlier draft text, which is corrected above instead of built. Clarified rather than changed: hero CTA placement (already matched "as today"; the contract's own wording was the ambiguous part) and the contact section's dark background (a deliberate, kept close, not an accidental drift — contract corrected to match).
