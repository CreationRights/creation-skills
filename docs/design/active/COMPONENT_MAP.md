# COMPONENT_MAP.md — C/Skills Homepage Component Inventory

> Maps every visual component needed for the homepage. References existing React components where reusable; specifies new homepage-specific patterns where needed.

---

## 1. Layout Components

### 1.1 Header

**Existing file**: `components/layout/Header.tsx`
**Requires update**: Yes

| Property | Specification |
|---|---|
| Layout | Three-zone: logo (left, fixed ~200px) / nav (center, flex) / CTA (right, fixed ~200px) |
| Height | `--header-height` (80px) |
| Background | `rgba(13, 13, 13, 0.9)` with `backdrop-filter: blur(12px)` |
| Position | Sticky, `z-index: var(--z-header)` |
| Border | `border-bottom: 1px solid var(--color-border)` |
| Logo | `cskillsLogo.primary` (SVG), ~120px wide, ~28px tall |
| Nav links | `nav` type (14px, weight 400, `--color-text-secondary`), hover to `--color-text-primary` |
| CTA | Pill button, lime fill, black text. Label: "Book a C/Skills Review" |
| Mobile (<1024px) | Nav collapses to hamburger. CTA hidden from right zone, appears in mobile menu. |

### 1.2 Footer

**Existing file**: `components/layout/Footer.tsx`
**Requires update**: Yes

| Property | Specification |
|---|---|
| Background | `--color-surface-lowest` (#080808) |
| Border | `border-top: 1px solid var(--color-border)` |
| Grid | 4 columns: brand (2fr) + 3 link columns (1fr each) |
| Brand column | Logo (small), subline in `label-caps`, positioning text in `body-sm` / `--color-text-muted` |
| Column headers | `label-caps` (JetBrains Mono, 12px, weight 500, uppercase, 0.1em tracking), `--color-text-primary` |
| Links | `body-sm` (14px), `--color-text-muted`, hover to `--color-lime` |
| Bottom bar | `border-top: 1px solid var(--color-border)`. Copyright (12px, muted) + legal links |
| Data source | `content/footer.ts` (`footerContent`) |

### 1.3 Section

**Existing file**: `components/layout/Section.tsx`
**Reusable**: Yes, for subpages. Homepage sections use custom CSS classes with different spacing.

### 1.4 Container

**Existing file**: `components/layout/Container.tsx`
**Reusable**: Yes. Sets `max-width: var(--max-width)` with horizontal padding.

---

## 2. Button

**Existing file**: `components/ui/Button.tsx`
**Requires update**: Yes (radius change to pill)

### Variants

| Variant | Background | Text Color | Border | Radius | Usage |
|---|---|---|---|---|---|
| `primary` | `--color-lime` | `--color-lime-text` (#0d0d0d) | None | `--radius-full` | Primary CTAs |
| `secondary` | Transparent | `--color-text-primary` | 1px solid `--color-border` | `--radius-full` | Secondary CTAs |
| `ghost` | Transparent | `--color-lime` | None | `--radius-full` | Text-link style buttons |

### Sizes

| Size | Height | Padding | Font Size |
|---|---|---|---|
| `sm` | 36px | 0 20px | 13px |
| `default` | 44px | 0 28px | 14px |
| `lg` | 52px | 0 36px | 18px |
| `xl` | 64px | 0 48px | 18px (final CTA only) |

### Hover Behavior

| Variant | Hover Change |
|---|---|
| `primary` | Background shifts to `--color-lime-hover`, subtle scale(1.02) |
| `secondary` | Border to `--color-lime`, add `--shadow-glow-lime` |
| `ghost` | Color to `--color-lime-hover` |

---

## 3. Homepage-Specific Components

These components exist only on the homepage and are defined as sections within `app/page.tsx` or as dedicated components.

### 3.1 Hero Section

| Property | Specification |
|---|---|
| CSS class | `.hp-hero` |
| Padding | 128px top, 64px bottom (desktop). 80px top, 48px bottom (mobile). |
| Max-width | `--max-width` (1320px) |
| Alignment | Left-aligned |
| **Headline** | `display-xl` (84px, weight 300, line-height 1.08, tracking -0.02em) |
| Headline accent | Last phrase ("with control.") in lime, italic. `<span>` with `color: --color-lime; font-style: italic;` |
| **Subhead** | `body-lg` (22px, weight 300, line-height 1.6). Max-width 768px. Color: `--color-text-secondary`. |
| **CTA row** | Two buttons separated by 16px gap. Row has `border-top: 1px solid var(--color-border)`, padding-top 40px, margin-top 16px. |
| CTA 1 | Primary pill, height 48px, label: "Book a C/Skills Review" |
| CTA 2 | Secondary pill, height 48px, label: "Explore Engagements" |
| No background image | Plain body bg. The hero is text-only. |

### 3.2 Cinematic Media Block

| Property | Specification |
|---|---|
| CSS class | `.hp-media-block` |
| Width | 100% of container (1320px max) |
| Aspect ratio | 21:9 (desktop), 16:9 (mobile) |
| Border radius | `--radius-xl` (16px) |
| Border | 1px solid `--color-border` |
| Image | `cskillsImages.core.homeHero`, `object-fit: cover`, Next.js `Image` with `fill` |
| Hover | Opacity transition: 0.9 rest, 1.0 hover. Duration: `--duration-slow` |
| Overlay | None. Image should feel integrated with the dark bg. |

### 3.3 Value Strip

| Property | Specification |
|---|---|
| CSS class | `.hp-value-strip` |
| Layout | 4-column grid (desktop), 2-col (tablet), 1-col (mobile) |
| Gap | 32px |
| Padding | 48px top and bottom |
| Border | `border-bottom: 1px solid var(--color-border)` |
| **Each item** | |
| Label | `label-caps` with `//` prefix. Color: `--color-text-secondary`. The `//` prefix is in `--color-lime`. |
| Description | `body-xs` (13px, weight 300, line-height 1.5). Color: `--color-text-muted`. Left border: 1px solid `--color-border-accent` (lime 30%), padding-left 12px. |

4 items:
1. `// APPROVED MEDIA SKILLS` — "Define what each media agent can do, which tools it uses, what rules apply, and what evidence must be saved."
2. `// CLEAR COMPANY FLOWS` — "Design the creation flows that move media from brief to delivery with structured review, approval, and rights checks."
3. `// RIGHTS-READY PRODUCTION` — "Build production paths where every asset respects NILP (Name, Image, Likeness, and Persona) from the start."
4. `// CREATION RIGHTS READINESS` — "Prepare your team, creation flows, approval gates, and evidence requirements for full platform adoption."

### 3.4 Vision Editorial

| Property | Specification |
|---|---|
| CSS class | `.hp-vision` |
| Layout | 1/3 + 2/3 grid (desktop), stacked (mobile) |
| Border | `border-top: 1px solid var(--color-border)` at section top |
| Padding | `--section-padding` (128px) vertical |
| **Left column (sidebar)** | `label-caps` label: "The Vision". Below: 48px decorative rule (1px, `--color-border`). |
| **Right column** | |
| Headline | `display-md` (56px, weight 300). Full text: "Creative companies should be able to make better media faster without losing control of rights, brand, approvals, talent use, or reuse." |
| Feature grid | 2x2 grid below headline. Separated by `border-top: 1px solid var(--color-border)`, 64px margin-top and padding-top. |
| Each feature | Lime dot (6px circle) + title (`heading-sm`, weight 500) + description (`body-sm`, weight 300, `--color-text-muted`) |

4 features:
1. **Granular Rights Tracking** — "Maintain provenance for every asset, mapping inputs to outputs reliably across the production pipeline to ensure clear rights accountability."
2. **Embedded Governance** — "Governance checks integrated into creation flows at every stage, not bolted on afterwards."
3. **Scalable Company Flows** — "Design creation flows that scale across teams and regions, supporting high-volume media production with consistent governance and evidence requirements."
4. **Brand Alignment** — "Ensure all media output aligns with your brand guidelines, stylistic standards, and tonal requirements from the start."

### 3.5 Program Card

| Property | Specification |
|---|---|
| CSS class | `.hp-ecard` |
| Background | `--color-surface-lowest` (#080808) |
| Border | 1px solid `--color-border` |
| Border radius | `--radius-xl` (16px) |
| Padding | 40px |
| Min-height | 440px (desktop) |
| Hover | Border to `--color-lime`, add `--shadow-glow-lime` |
| **Index** | Large faded number (64px, mono, `--color-lime` at 10% opacity), positioned top-right. |
| **Title** | `heading-lg` (32px, weight 500) |
| **Description** | `body-sm` (14px, weight 300, `--color-text-secondary`) |
| **Key Outcome** | Left-bordered block (1px lime 50%). Label in `label-sm` (10px mono, muted). Value in `body-sm`, `--color-text-primary`. |
| **Hover link** | "Explore Program ->" in `label-caps`, `--color-lime`, opacity 0 at rest, 1 on card hover. |
| **Link** | Entire card is an `<a>` wrapping to the program detail page. |

3 cards displayed:
1. `01` — C/Skills Audit (slug: `cskills-audit`, href: `/programs/cskills-audit`)
2. `02` — Media Skill Packs (href: `/skill-packs`)
3. `03` — Creation Rights Rollout Readiness (slug: `creation-rights-rollout-readiness`, href: `/programs/creation-rights-rollout-readiness`)

### 3.6 Creation Rights Split Panel

| Property | Specification |
|---|---|
| CSS class | `.hp-rights` |
| Layout | 1/2 + 1/2 grid (desktop), stacked (mobile) |
| Gap | 64px |
| **Left: Image** | `cskillsImages.core.creationRightsReadiness`. Aspect 4:3. Rounded `--radius-xl`. Border. No overlay. |
| **Right: Content** | |
| Label | `label-caps`: "Governance" |
| Headline | `display-md` (48px, weight 300): "Prepared for Creation Rights." |
| Body | `body-md` (18px, weight 300, `--color-text-secondary`): Full NILP paragraph with trademark. |
| NILP sidebar | Dark container (`--color-surface-low`), 1px border, `--radius-xl`, 32px padding. |

### 3.7 NILP Framework Sidebar

| Property | Specification |
|---|---|
| CSS class | `.hp-nilp` |
| Title | `label-caps` in `--color-lime`: "The NILP Framework". Bottom border. |
| Items | 4 items, stacked, 24px gap |
| Each item | Letter badge (`label-sm`, bordered, mono) + Title (`body-sm`, weight 500) + Desc (`body-sm`, weight 300, muted) |

Items:
| Letter | Title | Description |
|---|---|---|
| N | Name & Identity | Clearance protocols for talent attribution and metadata tagging across all production outputs. |
| I | Image | Visual consent boundaries and persistent usage tracking across production iterations. |
| L | Likeness | Controls governing how likeness is used, adapted, or combined in creative outputs. |
| P | Persona | Protections ensuring only authorized representations of persona enter production and distribution. |

### 3.8 FAQ Section

| Property | Specification |
|---|---|
| CSS class | `.hp-faq` |
| Layout | 1/3 + 2/3 grid (desktop), stacked (mobile) |
| Border | `border-top: 1px solid var(--color-border)` at section top |
| **Left column** | `label-caps`: "FAQ". Below: h2 "Common Questions" (`heading-lg`, weight 300). |
| **Right column** | Stacked items with `border-top` and `border-bottom` per item. |
| Each item | Side-by-side on desktop: question (1/3, `heading-sm`, weight 500, `--color-text-primary`) + answer (2/3, `body-md`, weight 300, `--color-text-secondary`). Stacked on mobile. Padding: 40px 16px. Hover: subtle bg shift. |

3 items:
1. "How long does a review take?" — "A typical C/Skills Review takes 2-4 weeks depending on the complexity of your current workflows and organizational scale."
2. "Do you build custom tools or software?" — "We focus on designing the operational pipeline and integrating governance into your creative workflows. We work with whatever tools and platforms your team already uses."
3. "What is the Implementation Office?" — "Dedicated embedded support designed to deploy new workflows into your teams, ensuring smooth adoption, stakeholder alignment, and long-term operational success."

### 3.9 Final CTA

| Property | Specification |
|---|---|
| CSS class | `.hp-final-cta` |
| Alignment | Centered |
| Padding | `--section-padding-lg` (160px vertical) |
| Headline | `display-lg` (64-84px, weight 300): "Ready to redesign how your media gets made?" |
| Button | `xl` size pill, lime fill, black text. Label: "Book a C/Skills Review". Shadow: `--shadow-glow-lime-lg`. Hover: scale(1.05). |
| No secondary CTA | Single button only. |
| No background image | Plain body bg. Gradient or overlay is optional but not required. |

---

## 4. Existing Components — Reuse Status

| Component | File | Reuse on Homepage | Notes |
|---|---|---|---|
| `Header` | `components/layout/Header.tsx` | Yes (updated) | Needs 3-zone restructure |
| `Footer` | `components/layout/Footer.tsx` | Yes (updated) | Needs label-caps headers |
| `PageShell` | `components/layout/PageShell.tsx` | Yes (unchanged) | Wraps header + main + footer |
| `Button` | `components/ui/Button.tsx` | Yes (updated) | Pill radius globally |
| `Section` | `components/layout/Section.tsx` | No (homepage uses custom classes) | Still works for subpages |
| `Container` | `components/layout/Container.tsx` | No (homepage uses custom padding) | Still works for subpages |
| `Hero` | `components/sections/Hero.tsx` | No (homepage hero is text-only) | Still works for subpages |
| `FinalCTA` | `components/ui/FinalCTA.tsx` | No (homepage CTA is simpler) | Still works for subpages |
| `Card` | `components/ui/Card.tsx` | No (engagement cards are custom) | Still works for subpages |
| `Eyebrow` | `components/ui/Eyebrow.tsx` | No (homepage uses `label-caps`) | Still works for subpages |
| `SplitPanel` | `components/sections/SplitPanel.tsx` | Optional | Could be adapted for Creation Rights section |
| `CardGrid` | `components/sections/CardGrid.tsx` | No | Engagement cards need custom layout |

---

## 5. `//` Label Pattern

The `//` prefix is a defining visual pattern from both LTX and Stitch. Implementation:

```css
.hp-label {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
}

.hp-label::before {
  content: "// ";
  color: var(--color-lime);
  font-weight: 700;
}
```

Usage: Section labels ("The Vision", "Engagements", "Governance", "FAQ"), value strip labels, footer column headers.
