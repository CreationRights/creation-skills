# BUILD_SPEC.md — C/Skills Homepage Active Design Specification

> Version: 1.0
> Status: Active
> Sources merged: LTX Firecrawl dossier, Designlang extraction, Stitch visual direction, C/Skills brand

---

## 1. Design Philosophy

The C/Skills homepage communicates cinematic confidence and commercial authority. It is a consulting company homepage, not a technology product page. Every design choice should reinforce that distinction.

### Core Principles

| Principle | Rule |
|---|---|
| **Restraint over decoration** | Black space is the dominant design element. No decorative widgets, floating cards, animated backgrounds, or fake UI. |
| **Size creates hierarchy** | Headlines are large and light-weight (300-400). Weight 700+ is reserved for critical emphasis. Size and spacing do the work. |
| **Cinematic media** | Image blocks are large, full-width or near-full, and presented without ornament. They should feel like film stills, not stock thumbnails. |
| **Editorial spacing** | Sections have generous vertical padding (120-160px desktop). Content breathes. Dense layouts signal low-end; space signals authority. |
| **Functional everything** | Every element earns its place. No icons for decoration, no gradients for style, no badges for novelty. |

### What This Is Not

- Not a dashboard. No widgets, system-status indicators, or fake data.
- Not a tech product page. No "API", "foundation model", "open weights", or deployment language.
- Not a design experiment. No novel layouts that confuse navigation or hierarchy.

---

## 2. Source Hierarchy

Three research sources inform this spec. They are not equal. The hierarchy is:

| Priority | Source | Role |
|---|---|---|
| **1. C/Skills Brand** | Content, logo, images, voice, legal terms | Authoritative for all copy, naming, and assets. |
| **2. LTX Firecrawl Dossier** | Page structure, section rhythm, typography strategy, spacing patterns, media placement | Structural backbone. Provides the proven layout rhythm and typographic approach. |
| **3. Stitch Visual Direction** | Color palette, font choice, component shapes, C/Skills-specific section adaptations | Visual refinement layer. Provides C/Skills-specific color, type, and component styling. |

**Resolution rule**: When sources conflict, C/Skills brand wins on content, Firecrawl wins on structure, Stitch wins on visual style. When Stitch introduces elements not supported by Firecrawl observation (e.g., dashboard widgets, status overlays), discard them.

---

## 3. Font Strategy

### Primary: Hanken Grotesk

Geometric sans-serif. Handles headlines, body, navigation, and buttons.

- **Source**: Google Fonts
- **Weights loaded**: 300, 400, 500, 600, 700
- **Rationale**: Matches the LTX observation that weight 400 dominates (938 of 1,057 elements). Hanken Grotesk has a clean geometric character similar to Aeonik but is freely available. Stitch validated this choice.

### Secondary: JetBrains Mono

Monospace. Used only for `//` section labels, metadata tags, footer column headers, and value strip labels.

- **Source**: Google Fonts
- **Weights loaded**: 400, 500, 700
- **Rationale**: Both LTX (via Inconsolata) and Stitch (via JetBrains Mono) use monospace sparingly for labels and code-adjacent text. JetBrains Mono has better readability at small sizes.

### Weight Distribution (Target)

| Weight | Usage | Frequency |
|---|---|---|
| 300 | Display headlines, hero text, editorial headings | Dominant for large text |
| 400 | Body text, nav links, subheadings, descriptions | Dominant for small text |
| 500 | Buttons, card titles, H3, key labels | Selective |
| 600 | Strong emphasis only | Rare |
| 700 | Section headings on subpages (legacy compat) | Legacy only |

---

## 4. Color Strategy

### Background Tier

Derived from LTX's pure-black approach and Stitch's surface layering. The body background is near-black; elevation is created through subtle tonal steps, not shadows.

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#0d0d0d` | Body / page background |
| `--color-surface-lowest` | `#080808` | Cards, inset containers, deepest recesses |
| `--color-surface-low` | `#141414` | Raised sections, alternate section bg |
| `--color-surface` | `#1a1a1a` | Container backgrounds, input fields |
| `--color-surface-high` | `#222222` | Hover states, active backgrounds |
| `--color-surface-highest` | `#2c2c2c` | Tooltip backgrounds, raised UI |

### Text Tier

| Token | Hex | Role | Contrast on #0d0d0d |
|---|---|---|---|
| `--color-text-primary` | `#F5F5F5` | Headlines, titles, card names | 18.2:1 AAA |
| `--color-text-secondary` | `#B0B0B0` | Body text, descriptions, nav links | 9.5:1 AAA |
| `--color-text-muted` | `#808080` | Captions, footer links, helper text | 5.3:1 AA |
| `--color-text-faint` | `#555555` | Decorative numbers, watermarks | Below AA — decorative only |

### Accent

| Token | Hex | Role |
|---|---|---|
| `--color-lime` | `#B8F600` | Primary accent: CTAs, links, active states, `//` labels |
| `--color-lime-hover` | `#CFFF33` | Hover state for lime elements |
| `--color-lime-dim` | `#8ABF00` | Muted lime: borders, inactive indicators |
| `--color-lime-text` | `#0d0d0d` | Text on lime backgrounds |

### Border

| Token | Hex | Role |
|---|---|---|
| `--color-border` | `#1A1A1A` | Default borders, section dividers, card edges |
| `--color-border-hover` | `#333333` | Hover state border |
| `--color-border-accent` | `rgba(184, 246, 0, 0.3)` | Lime-tinted borders for emphasis |

### Feedback (Minimal)

| Token | Hex | Role |
|---|---|---|
| `--color-error` | `#FF4040` | Form validation, error states |
| `--color-success` | `#40FF80` | Confirmation states |

---

## 5. Layout Strategy

### Grid System

| Breakpoint | Columns | Margin | Gutter | Max-width |
|---|---|---|---|---|
| Desktop (1200px+) | 12 | 80px | 32px | 1320px |
| Tablet (768px-1199px) | 8 | 40px | 24px | 100% |
| Mobile (up to 767px) | 4 | 24px | 16px | 100% |

### Section Rhythm

From the LTX Firecrawl observation: sections alternate between the body background and a slightly lighter surface. Separation comes from background color shifts and thin top-borders, not visible gaps.

| Property | Desktop | Tablet | Mobile |
|---|---|---|---|
| Section padding (vertical) | 128-160px | 80-96px | 64-80px |
| Section gap | 0 (sections are contiguous) | 0 | 0 |
| Text column max-width | 720-800px | 640px | 100% |
| Media block width | 100% of container | 100% | 100% |

### Media Placement

From LTX Firecrawl: media blocks are always full-width within their container. They act as "visual anchors" between text sections.

| Media Type | Aspect Ratio | Border Radius | Border |
|---|---|---|---|
| Hero/cinematic block | 21:9 (desktop), 16:9 (mobile) | 12-16px | 1px solid `--color-border` |
| Split-panel image | 4:3 or 3:2 | 12-16px | 1px solid `--color-border` |
| Card image | 16:10 | 0 (flush within card) | None |

---

## 6. Homepage Section Structure

10 sections in order. Full details in HOMEPAGE_SECTIONS.md.

| # | Section | Background | Content Width |
|---|---|---|---|
| 1 | Header | Semi-transparent #0d0d0d | Full |
| 2 | Hero | Body bg | 1320px max, left-aligned |
| 3 | Cinematic media block | Body bg | 1320px max |
| 4 | Value strip | Body bg | 1320px max |
| 5 | Vision editorial | Body bg, border-top | 1320px max, 1/3 + 2/3 grid |
| 6 | Engagements | `--color-surface-lowest` | 1320px max |
| 7 | Creation Rights | Body bg | 1320px max, 1/2 + 1/2 grid |
| 8 | FAQ | Body bg, border-top | 1320px max, 1/3 + 2/3 grid |
| 9 | Final CTA | Body bg | 1320px max, centered |
| 10 | Footer | `--color-surface-lowest` | 1320px max |

---

## 7. Content Rules

### Language

| Do | Do Not |
|---|---|
| Use "consulting," "review," "design," "implement" | Use "foundation model," "open weights," "API" |
| Say "production-agent," "operating files," "approval gates" | Say "AI model," "inference," "deployment" |
| Reference "Creation Rights," "NILP" | Reference "NILP" without full expansion on first use |
| Write "NILP (Name, Image, Likeness, and Persona)" | Write "NILP (Name, Image, Likeness, and Voice)" |
| Use "C/Skills Review" for the primary engagement | Use "audit," "assessment," or "trial" |
| Keep claims verifiable and grounded | Claim specific efficiency gains without data source |

### Headline Style

From both LTX voice analysis and C/Skills brand:

- Title Case for section headings
- Sentence case for body text and descriptions
- Short, direct. 2-8 words for headlines, 1-2 sentences for subheads.
- CTA verbs: "Book," "Explore," "Learn," "Read"

### NILP Expansion

The acronym NILP must be expanded on first use per page:

> NILP (Name, Image, Likeness, and Persona)

The registered trademark symbol is required: NILP&reg; or NILP\u00AE.

---

## 8. Asset Rules

### Logo

| Asset | Path | Usage |
|---|---|---|
| SVG (primary) | `public/brand/cskills/cskills-logo-white.svg` | Header, footer |
| PNG (fallback) | `public/brand/cskills/cskills-logo-white.png` | Social, email |

Import via `content/logo.ts` as `cskillsLogo.primary`.

### Images

All images are local. No external URLs, no Google-hosted assets, no placeholder services.

| Image | Path (via content/images.ts) | Homepage Usage |
|---|---|---|
| `cskillsImages.core.homeHero` | `/images/cskills/core/cskills-home-hero-01.png` | Cinematic media block |
| `cskillsImages.core.creationRightsReadiness` | `/images/cskills/core/cskills-creation-rights-readiness-01.png` | Creation Rights section |
| `cskillsImages.core.finalCta` | `/images/cskills/core/cskills-final-cta-01.png` | Final CTA background (optional) |
| `cskillsImages.core.howWeWork` | `/images/cskills/core/cskills-how-we-work-01.png` | Vision section (optional) |
| `cskillsImages.engagements.review` | Engagement card 01 | Optional |
| `cskillsImages.engagements.operatingModelDesign` | Engagement card 02 | Optional |
| `cskillsImages.engagements.implementationOffice` | Engagement card 03 | Optional |

### External Dependencies Prohibited

- No Tailwind CDN
- No Material Symbols
- No Google-hosted image URLs (lh3.googleusercontent.com)
- No icon libraries beyond Lucide React (already in project)

---

## 9. Implementation Constraints

| Constraint | Detail |
|---|---|
| **Framework** | Next.js App Router (existing) |
| **Styling** | CSS custom properties + global CSS classes. No CSS modules, no Tailwind. |
| **Components** | Use existing components in `/components/` where they fit. Create homepage-specific sections inline or as new components. |
| **Fonts** | Google Fonts via `@import` in globals.css (existing pattern). |
| **Scope** | Homepage (`app/page.tsx`) only. All other routes must continue to work. |
| **Shared CSS** | Update `styles/tokens.css` and `app/globals.css` as needed. Do not break subpage styling. |
| **Content files** | Do not modify `content/*.ts` files unless strictly required for homepage copy. |
| **Build** | Must pass `npm run build` with zero errors. |
| **Commit** | Do not auto-commit. |

---

## 10. Build and QA Notes

### Pre-implementation Checklist

- [ ] Read TOKENS.md and confirm all token values are applied to `styles/tokens.css`
- [ ] Read COMPONENT_MAP.md and identify which existing components can be reused
- [ ] Read HOMEPAGE_SECTIONS.md and confirm section order, content, and assets
- [ ] Read QA_CHECKLIST.md and keep it open during implementation

### Post-implementation Checklist

- [ ] `npm run build` passes
- [ ] All 48 routes still generate (check build output)
- [ ] Homepage renders all 10 sections
- [ ] No LTX model language appears on homepage
- [ ] NILP is correctly expanded on first use
- [ ] All images are local (no external URLs in source)
- [ ] CTA buttons use black text on lime background
- [ ] Responsive: test at 1440px, 1024px, 768px, 480px
