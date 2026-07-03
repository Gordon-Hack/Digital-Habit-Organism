# Arc-GGD Design System

**Arc-GGD — Total Cross-Functional Industrial Systems Transformation**

Arc-GGD is a German-rooted industrial conglomerate operating across construction, scaffolding protection, textile, advertising, fine arts, food & beverage, process authorisation, and cross-sector design & build. The parent brand (Arc-GGD) unifies an ecosystem of autonomous sub-brands under a shared visual language: electric blue, raw black/white, bold sans typography, and an industrial-grade aesthetic.

---

## Sources

The following materials were provided to build this design system:

- **Colour Scheme:** `Design System/Colour Scheme.txt` — three values: blue `#1F48FF`, white `#FFFFFF`, dark grey `#676767`
- **Fonts:** `Design System/freesans-2/` — FreeSans family (Regular, Bold, Oblique, BoldOblique) in OTF format
- **Logos:** `Design System/Blue assorted Logos/` — 15 sub-brand logos in blue on white PNG
- **Backgrounds:** `Design System/Background Bits/` — 5 aerial rock/quarry B&W JPG textures
- **Main Logos:** `Design System/Main Logo black on white.png`, `Main logo no background.png`, `Main logo with space.png`
- **Homepage Background:** `Design System/Garching Homepage Backg2.png` — corrugated steel industrial building photo

No Figma link, GitHub repository, or codebase was provided. The design system is built entirely from the above source files.

---

## Sub-Brands & Divisions

| Brand | Description |
|---|---|
| **GGD** (parent mark) | Barbed-wire circle with "GGD" — the master brand mark |
| **Arc-GGD** | Full company identity: barbed-wire circle + "Arc-GGD" wordmark |
| **GGD Global Design & Build** | Globe + handshake icon; international construction & design |
| **GGD Anti-Recuperation Network** | Handshake icon; cross-sector partnership/alliance network |
| **GGD Jürgens GmbH** | Warehouse silhouette; industrial & commercial construction |
| **GerüstSchutz Limited** | Bulldog mascot; scaffolding protection services |
| **GPAC** | GGD Process Authorization Code; quality certification |
| **PQ VOB** | GGD quality mark, reference number 089 |
| **ISO 14001:2015** | Environmental management certification |
| **GGD TX — Textilabteilung** | Textile division |
| **GGD WA — Werbeabteilung** | Advertising/marketing division |
| **GGD ABK — Bildende Kunst** | Fine arts division (armed artisans iconography) |
| **Advanced Food & Wine** | Food & beverage division |
| **Mukbang Absolutism** | Bold sub-brand (food/media crossover) |
| **Sigrit Baumgärtner** | Individual/electrical professional brand (VDE certified) |
| **ARC** | Graffiti-style wordmark; the "Arc" identity |

---

## CONTENT FUNDAMENTALS

### Tone & Voice
Arc-GGD communicates with authority, directness, and zero sentimentality. Copy is blunt and declarative — statements, not questions. The brand does not invite debate; it asserts competence.

- **Direct:** "We build. We protect. We transform." — not "We're here to help you achieve your goals."
- **Industrial:** Technical vocabulary is used without apology. Acronyms (GPAC, ABK, VOB) stand without glossary.
- **Declarative over explanatory:** Headlines announce. Body copy justifies if needed, never the reverse.
- **German-inflected:** Sub-brands use German terms (Industrie- und Gewerbebau, Textilabteilung, Werbeabteilung, Gerüstschutz). This is intentional — it signals origin and specialism.
- **Scale over warmth:** The brand communicates at institutional/conglomerate scale. It does not use "I" or "you" conversationally — it speaks in "we" or in passive declarations.

### Casing
- **Headlines:** ALL CAPS or Title Case — never sentence case for hero text
- **Sub-brands:** Use their registered forms exactly (GGD TX, GerüstSchutz, GPAC, etc.)
- **Body:** Sentence case

### Emoji
**None.** The brand uses stars (★ ☆) as decorative marks — these are typographic, not emoji.

### Stars
Stars (★) appear as a recurring brand motif across multiple sub-brand logos. They denote certification, quality, or division membership — not whimsy.

---

## VISUAL FOUNDATIONS

### Colors
Three-color system: electric blue, white, black. Grey for secondary/muted text only.

- **Electric Blue `#1F48FF`** — the dominant brand color. Used for logos, CTAs, rules, fills, type on white. An intensely saturated, almost screen-native blue.
- **White `#FFFFFF`** — primary background; also used as inverse type on blue.
- **Black `#0A0A0A`** — used for primary text, hard shadows, outlines.
- **Dark Grey `#676767`** — secondary/muted text, dividers.

Color is binary and high-contrast: blue on white, or white on blue. No gradients. No tints. No overlays.

### Typography
**FreeSans** is the exclusive typeface — a humanist grotesque (based on URW Nimbus Sans / Helvetica lineage). Available in Regular, Bold, Oblique, Bold Oblique.

- Display/Hero: Bold, ALL CAPS, very large, tight tracking
- Subheadings: Bold, wide tracking, uppercase
- Body: Regular, normal tracking, 15–17px
- Labels: Bold, uppercase, wider tracking, small size
- No serif. No display. No decorative. One family only.

### Spacing
4px base grid. Sections are generously spaced. Internal padding is tight and structured — industrial machinery does not have excess breathing room, but sections are clearly demarcated.

### Backgrounds
Three background registers:
1. **White** — default, clean, document-like
2. **Black or very dark** — hero sections, inverted content blocks
3. **Rock/quarry photography** — aerial B&W imagery used as full-bleed section backgrounds; raw, geographic, massive in scale. These are provided in 5 variants (`rock-1.jpg` through `rock-5.jpg`).
4. **Corrugated steel industrial photography** — the Garching background (`garching-industrial.png`) used for homepage-style hero sections.

### Imagery
- Cool, desaturated, or full B&W
- Aerial/industrial/geological scale — quarries, steel facades, construction
- No people, no warmth, no lifestyle photography
- When layered behind type, images receive a dark overlay or are used at very low opacity

### Animation
- Minimal. Transitions are fast (80–150ms) with a sharp cubic-bezier — snappy, not floaty.
- No bounce, no spring, no elaborate entrance animations
- Hover states: color shift (blue→dark blue), slight offset on hard shadows
- Press states: slight downward translate (1–2px), shadow reduction — like pressing a physical button
- No infinite decorative loops

### Hover & Press States
- **Buttons (primary):** hover darkens blue to `#1237D6`; press shifts `translateY(1px)` + reduces shadow
- **Links:** underline appears on hover; color stays brand blue
- **Cards:** hard shadow lifts slightly on hover (`box-shadow` offset increases)

### Borders
Straight, sharp — no curves except minimal 2px radius. Brand uses thick rules (3–4px) for structural division. Blue rules signal brand hierarchy; black rules signal hard containment.

### Shadows
**Hard offset drop shadows only** — no blur, no feathering. `3px 3px 0 0 #0A0A0A` or `4px 4px 0 0 var(--color-blue)`. This is a tactile, printed/industrial feel — like rubber stamps and industrial badges.

### Corner Radii
Near zero. `0px` for most UI elements, `2px` maximum for small interactive elements. The brand is hard-edge, not rounded.

### Cards
Flat background (white or near-white), thick border (1–2px black or blue), hard offset shadow (`4px 4px 0 #0A0A0A`), zero radius. Cards look like labels or compliance plates — functional, stamped.

### Transparency & Blur
**Avoided.** No frosted glass, no backdrop-filter blur, no semi-transparent overlays on UI. When overlaying images, use a solid dark fill at opacity — not blur.

---

## ICONOGRAPHY

No system-wide icon font is used. Each division/sub-brand carries its own distinct illustrated mark:

- **Master mark:** Barbed-wire circle (custom illustration) — used as the primary brand symbol
- **GGD Global Design & Build:** Custom globe + handshake illustration
- **GGD Jürgens:** Warehouse/industrial building silhouette
- **GerüstSchutz:** Bulldog mascot (aggressive, guarding posture)
- **GGD ABK:** Spear, rod, and sculpted vessel — fine arts iconography
- **ARC:** Graffiti-style wordmark
- **★ Star:** Used across multiple divisions as a quality/certification marker — typographic character, not icon font

For UI purposes, no CDN icon library is linked. If icons are required in product UI, use **Heroicons** (outline, 1.5px stroke weight, matches the linear illustration style of GGD sub-brands). Stars should always use the `★` Unicode character.

---

## Files

```
/
├── styles.css                    ← Root stylesheet (imports only)
├── readme.md                     ← This file
├── SKILL.md                      ← Skill manifest
├── tokens/
│   ├── fonts.css                 ← @font-face declarations
│   ├── colors.css                ← Color custom properties
│   ├── typography.css            ← Type scale + roles
│   ├── spacing.css               ← Spacing scale
│   └── effects.css               ← Shadows, radii, transitions
├── assets/
│   ├── fonts/                    ← FreeSans OTF files
│   ├── logos/                    ← All brand + sub-brand logos (PNG)
│   └── backgrounds/              ← Rock/quarry + industrial photography
├── guidelines/                   ← Foundation specimen cards
├── components/
│   └── core/                     ← Button, Badge, Card, Tag, Input, Divider
└── ui_kits/
    └── website/                  ← Arc-GGD website UI kit
```

### Components
- `Button` — primary, secondary, ghost; sizes sm/md/lg
- `Badge` — inline status/label marker
- `Tag` — bold keyword chip
- `Card` — hard-bordered content container
- `Input` — text field, no-radius, thick border
- `Divider` — horizontal rule with brand options

### UI Kits
- **Arc-GGD Website** (`ui_kits/website/`) — homepage, divisions listing, contact — full interactive prototype
