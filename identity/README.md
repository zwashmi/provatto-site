# Provatto — Brand Asset Package (v1.0)

Every brand element as an individual, editable file. Arabic-first, light-theme default. Legal entity: مؤسسة زياد ناصر الوشمي للتجارة، الرياض.

## What's inside
```
/logo/                 Wordmark (color, white, on-dark), icon/mark, app icon (dark + light) — SVG + PNG
/header/               Reusable website nav bar — SVG + standalone HTML/CSS snippet
/icons/                Full original icon library: 53 individual SVGs + provatto-icons.svg sprite
/cards/                Verified Digital Record card (front, beside-watch) + business cards (founder, employee, back) — SVG + PNG
/watch-illustrations/  Original brand-neutral watch illustrations (diver, dress) — SVG + PNG
/colors/               swatches.html + tokens.json + provatto.tokens.js (React Native), all with hex
/fonts/                README — IBM Plex Sans Arabic / IBM Plex Sans (OFL-1.1); binaries not bundled
/screens/              8 light-theme app screens — PNG
/guidelines/           Full deck as PPTX (102 slides); PDF via print (see note)
```

## Formats
- **SVG** = editable vector source (logos, icons, cards, watches, header). Open in Figma/Illustrator/Inkscape.
- **PNG** = 2× raster exports for quick reuse.
- **tokens.json / provatto.tokens.js** = design tokens (color, type, space, radius, elevation, motion) with hex values.

## Guardrails (keep in all reuse)
- Documentary framing only: «سجل رقمي موثّق» / "Verified Digital Record", «نقل السجل الرقمي» / "Digital record transfer".
- Never imply certified authenticity, legal ownership/title transfer, government approval, or valuation.
- No real watch-brand names, logos, or identifiable models — the watch illustrations here are original and brand-neutral.
- Arabic leads; numbers/serials/prices in Latin digits (IBM Plex Sans). Never letterspace Arabic. Gold used sparingly (seal / hairline moments).

## Notes
- **PDF:** the 102-slide deck is included as PPTX in `/guidelines/`. To produce a PDF, open the deck's print view (Cmd/Ctrl+P → Save as PDF) or export from the PPTX — layout is print-ready.
- **Fonts:** license-restricted binaries are intentionally not bundled. Download IBM Plex (OFL-1.1) and self-host — see `/fonts/README.md`.
- **App icon:** `app-icon-dark.png` is the primary; `app-icon-light.png` is the light-surface variant. Provide platform-sized exports (iOS/Play) at production from `app-icon.svg` / `icon-mark.svg`.
