---
name: HOTY.
description: A dark, editorial studio site where the portfolio wall is the pitch — proof scrolls before persuasion.
colors:
  emerald-tech: "#16C784"
  deep-green: "#073B2A"
  mint-background: "#EAFBF4"
  carbon: "#101312"
  graphite: "#626866"
  hairline-border: "#E5E9E7"
  off-white: "#FAFCFB"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "128px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "28px"
    fontWeight: 700
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 500
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  lg: "24px"
  pill: "999px"
  circle: "56px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "20px"
  xl: "40px"
  xxl: "80px"
  xxxl: "160px"
components:
  button-primary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.circle}"
    padding: "4px 4px"
  wall-tile:
    backgroundColor: "{colors.carbon}"
    rounded: "{rounded.sm}"
  feature-tag:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
---

# Design System: HOTY.

## Overview

**Creative North Star: "The Live Client Wall"**

HOTY. is a dark, editorial single-page pitch built around one conviction: proof outscores promise. The page opens on a full-bleed Carbon hero with an oversized "Hoty." wordmark that assembles itself letter by letter, then hands off directly into a horizontally-scrolling wall of the studio's 7 real shipped sites — no genre rows, no invented categories, because there's no evidence to split across them. Between the dark hero/wall open and the dark contact/footer close, the middle third (services, credibility, FAQ) shifts to quiet light counterpoints so the two dark bookends read as a deliberate frame rather than monotony. Manrope carries every weight in the system at editorial scale, with the hero wordmark's negative tracking as the system's one signature type move. There is no numbered-badge, kicker, or eyebrow system anywhere on the page — an earlier draft called for one, it was never built, and the correction lives in the surface brief, not here.

Confirmed visual rejections: no genre-split portfolio grid (only 7 real projects exist), no fabricated stat-card grid (only 98.6% / 100+ / 20+ are real, folded into testimonial prose instead), no section-number badges, no glyph/emoji icons (one consistent `lucide` icon family throughout).

**Key Characteristics:**
- Full-bleed Carbon dark ground bookending a light-ground middle (services/FAQ)
- A single accent (Emerald Tech) reserved for interactive/proof signals only
- Manrope at extreme scale contrast: 128px display wordmark down to 14px tag labels
- One authored motion signature: letter-by-letter hero assembly + pointer-tracked ambient tile glow
- Real content only — no stat cards, no invented case studies, no kicker labels

## Colors

A near-monochrome dark/light ground with a single accent held in reserve; color is spent on proof and interaction, not decoration.

### Primary
- **Emerald Tech** (#16C784): the only accent color in the system. Used for the wall tile's hover/focus border and ambient glow, all links and hover states, the CTA arrow icon's dark-on-white contrast is inverted from it, form focus underlines, and inline stat emphasis (`.stat-inline`) inside testimonial prose. Never used as a background fill at scale.

### Secondary
- **Deep Green** (#073B2A): the "proof" section's own dark ground (testimonial + why-us), distinct from Carbon so the credibility block reads as a secondary dark register rather than a repeat of the hero.

### Neutral
- **Carbon** (#101312): primary near-black ground — hero, portfolio wall, contact/footer. The page's darkest, most saturated dark.
- **Off White** (#FAFCFB): default body background for the light middle sections.
- **Mint Background** (#EAFBF4): the services section's light counterpoint fill, distinguishing it from the plain Off White page background.
- **Graphite** (#626866): secondary/body text on light ground, and feature-tag label color.
- **Hairline Border** (#E5E9E7): dividers between service rows, hairlines under form inputs' resting state, accordion borders.
- **White** (#FFFFFF): text on dark grounds, primary-button fill.

### Named Rules
**The One Accent Rule.** Emerald Tech is the only chromatic accent in the system. It never appears as a large fill — only as border, glow, link, icon, or inline emphasis. Its rarity against Carbon/Off White is what makes it register as "proof happening" rather than decoration.

**The Bookend Rule.** Dark ground opens (hero, wall) and dark ground closes (contact, footer); the light middle (services, FAQ) is the counterpoint, not the default. Don't lighten the open or close to "balance" the page — the frame is deliberate.

## Typography

**Display/Body Font:** Manrope (with sans-serif fallback) — a single family carries every role in the system, differentiated by size and weight alone.

**Character:** One typeface pushed to extremes: a 128px hero display with tight negative tracking against a body voice that sits at ordinary editorial scale. The contrast between those two ends of the ramp does the work a second typeface would otherwise do.

### Hierarchy
- **Display** (700, 128px / `$h1-font-size`, line-height 1, tracking -0.03em): the "Hoty." hero wordmark only. Assembles letter-by-letter on first paint (`.hero-letter` animation), fully visible immediately under `prefers-reduced-motion`.
- **Headline** (700, 48px / `$h2-font-size`, line-height ~1.2): section headings ("Trabajo real, en producción.", "Lo que hacemos", "¿Por qué elegirnos?", "Preguntas frecuentes", "Hablemos de tu proyecto").
- **Title** (700, 28px / `$h4-font-size`): service-row titles and wall-tile project names (`.h4` on tile body).
- **Body** (400, 18px / `$font-size-5`, line-height 1.5): section intros, service descriptions, FAQ body copy, testimonial prose. Kept short-measure by column width, not by a fixed ch value.
- **Label** (500, 14px, no case transform): feature tags and portfolio service-tag badges. Not uppercase, not tracked wide — a quiet label, not a kicker.

### Named Rules
**The No-Kicker Rule.** No heading in this system is preceded by an eyebrow, badge, or numbered label. Headings carry their own weight through size and weight alone. This is a hard prohibition carried from the craft floor, not a task-specific choice — do not reintroduce "01/02/03" section numbers or small-caps kickers above any heading in future surfaces.

## Layout

Container-based single-column page (Bootstrap grid, max-width 1680px at `xxl`), sections stacked full-bleed with generous vertical rhythm: `py-5` on mobile scaling to `py-xl-12` (160px) on desktop between major sections. Internal spacing steps from the project's spacer scale (4px increments up to 160px), with `gap-5`/`gap-7`/`gap-10` used for stacked content blocks rather than margin utilities.

The portfolio wall breaks the container pattern deliberately: `.wall-track` is a horizontally-scrolling flex row (300px tiles, 340px at `lg`) with `scroll-snap-type: x proximity` (mandatory on mobile) and a themed scrollbar (Emerald Tech thumb on a translucent dark track) — the one place the layout runs its own axis instead of the vertical page scroll.

Services use a two-column row grid at `lg` and above (5fr icon+title / 7fr description+tags), collapsing to a single stacked column below `lg`. Responsive breakpoints follow Bootstrap defaults (sm/md/lg/xl/xxl).

## Elevation & Depth

Mostly flat: sections are distinguished by solid ground-color changes (Carbon / Deep Green / Off White / Mint), not by shadow. Shadow is reserved for state, not structure — it appears only when a wall tile is hovered/focused (`0 24px 48px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(#16C784,0.25)`, a soft ambient lift-shadow paired with a 1px accent ring), and on small circular icon buttons (`$box-shadow-sm`) at rest.

### Shadow Vocabulary
- **wall-tile-hover** (`box-shadow: 0 24px 48px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(22,199,132,0.25)`): fires only on hover/focus-within of a portfolio tile, paired with a translateY(-10px) scale(1.045) lift.
- **icon-button-ambient** (`$box-shadow-sm`: `0px 6px 8px -6px rgba(0,0,0,0.15)`): default resting shadow on small circular buttons (CTA arrow chip, scroll-to-top).

### Named Rules
**The Flat-Until-Proof Rule.** Surfaces stay flat at rest. Depth (shadow + lift + glow) is spent exclusively on the portfolio wall's hover/focus state — the one place the system asks you to look closer at real work.

## Shapes

Two registers, deliberately split: hard 0-radius edges on structural containers (cards `$card-border-radius: 0`, inputs `$input-border-radius: 0`) versus fully round pills everywhere interactive (buttons `$btn-border-radius: 56px`, icon chips, feature tags `border-radius: 999px`). Wall tiles sit in between at a small 4px radius — just enough to soften a large image block without competing with the pill language of buttons.

## Components

### Buttons
- **Shape:** fully pill/circular (56px radius on text buttons, 52px circular icon chip inside).
- **Primary:** white circular icon chip (`bg-white`, dark icon, `$box-shadow-sm`) paired with a bordered pill label (`border border-white border-opacity-25` on dark ground) — e.g. "Ver proyectos", "Enviar mensaje". No solid-fill primary-color button exists in the build; the accent color appears on the icon glyph and hover states, not as a button fill.
- **Hover/Focus:** icon chip and label move together; `:focus-visible` gets a 2px Emerald Tech outline at 3px offset system-wide (defined once on `:focus-visible`, not per-component).

### Chips / Tags
- **feature-tag** (services section): transparent background, 1px hairline border (`$border-color`), full pill radius, Graphite text, 14px.
- **badge** (wall-tile service tags): `text-bg-dark` Bootstrap badge, revealed only on tile hover/focus (or always-visible on touch), never a persistent label.

### Cards / Containers
- **Portfolio wall tile:** the system's signature component (see below).
- **Service row:** no card at all — a full-width row separated by a 1px hairline bottom border, not a boxed card. Icon + title on one side, description + tags on the other at `lg`+.
- **Corner style:** 0 radius on the general card primitive (`$card-border-radius: 0`); the wall tile is the deliberate exception at 4px.

### Inputs / Fields
- **Style:** no box at all — transparent background, bottom-hairline-only border (`border-width: 0 0 1px 0`), white text at 20px on the dark contact section.
- **Focus:** border-bottom shifts to Emerald Tech, no box-shadow glow.

### Navigation
- **Style:** a single circular white hamburger button (`lucide:menu`) triggers a Bootstrap dropdown panel — no persistent horizontal nav bar. Header itself is a fixed, transparent-to-solid bar with a 4px Emerald Tech top border. Menu links are bold, dark-on-white inside the dropdown; active state uses a bold weight, not an underline or color change.

### Portfolio Wall Tile (signature component)
A 3:4 image tile in a horizontally-scrolling row. At rest: image only, hairline white-12%-opacity border, a bottom scrim gradient for legibility. On hover/focus-within: lifts and scales (`translateY(-10px) scale(1.045)`), border turns Emerald Tech, an ambient pointer-tracked radial glow fades in under the content (driven by `--gx`/`--gy` custom properties set on `pointermove` in `assets/js/custom.js`), and the tile's body (project name, service tags, "ver proyecto" link) slides up into view. Neighboring tiles dim to 55% opacity so the hovered tile reads as the single focus. On touch devices (`hover: none`), the tile's story ships visible at rest instead of gating it behind a hover that can never fire.

## Do's and Don'ts

### Do:
- **Do** hold Emerald Tech (#16C784) as the only accent — border/glow, link, icon, and inline stat emphasis, never a large fill.
- **Do** reserve depth (shadow + lift + glow) for the wall tile's hover/focus state; keep everything else flat.
- **Do** keep the hero wordmark's tight tracking (-0.03em) as the system's one display-type signature; don't apply it elsewhere.
- **Do** show only real content: 7 real projects, 1 real testimonial, 3 confirmed stats (98.6% / 100+ / 20+) folded into prose. Never add a stat-card grid or invent a project.
- **Do** keep the dark hero/wall open and dark contact/footer close bookending a light services/FAQ middle.

### Don't:
- **Don't** add a kicker, eyebrow, or numbered-badge ("01/02/03") above any heading — banned outright by the craft floor, not earned back by any brief.
- **Don't** split the portfolio wall into genre rows or invented categories; there are 7 real projects and one row.
- **Don't** introduce a second accent color or a solid-fill primary button; the system's only interactive fill on dark ground is white, and the only chromatic color is Emerald Tech used sparingly.
- **Don't** mix icon families — one consistent `lucide` stroke icon set system-wide (unified in this build's fix round after an earlier `solar`/`lucide` mix).
- **Don't** add a stat-card grid ("hero-metric template") for the confirmed numbers; they stay folded into testimonial prose as `.stat-inline` emphasis.
