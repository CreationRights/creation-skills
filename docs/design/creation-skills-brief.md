# Creation Skills Design Brief

This file defines the design guardrails for the Creation Skills website. All homepage and shared design system decisions should follow these rules.

---

## Brand Goal

Creation Skills is a consulting division of Creation Rights. It helps creative companies overhaul how media gets made, reviewed, approved, reused, and scaled — so teams can make better work faster without losing rights, brand, or human control.

The website must feel like a premium creative media operations product — not a generic SaaS landing page, not a startup template, and not an AI tool marketing site.

Target impression: enterprise creative consulting firm with a proprietary system. The visual language should communicate governance, control, and creative confidence.

---

## Visual Mood

- Dark editorial media operations
- Black and charcoal base with intentional depth variation
- Lime green (#b4f740) as the primary accent — used for system indicators, rails, approval states, and interactive elements
- Peach/off-white (#f5efe6) for headlines and premium text moments
- Cinematic creative lab atmosphere
- Production-board editorial density
- Clean enterprise confidence, not startup energy
- Serious, media-industry native, not playful

Primary visual references:
1. `references/cskills-approved-direction/cskills-approved-homepage-composite-reference.jpeg` — mood, density, color energy, card rhythm, composition
2. `public/images/cskills/` — actual imagery
3. `references/ltx-ui/` — quality and structural benchmark only (not branding)

---

## Section Rhythm

Do not repeat the same section pattern. Each homepage section must use a distinct visual structure.

**Required section types (in order):**
1. Cinematic asymmetric hero — largest visual moment, split layout with system panel
2. Operating risk map — problem visualization, not uniform cards
3. System transformation proof — before/after path with solution evidence
4. Architecture diagram — dense three-layer model, product-like
5. Visual proof moment — wide cinematic image with overlay
6. Protected layer editorial — split panel with system elements
7. Premium service offerings — mixed card sizes, not uniform grid
8. Editorial resource module — lead story with side stories, publication feel
9. Bold CTA band — confident conversion moment
10. Structured footer — dense, multi-column, editorial

**Forbidden rhythm:** eyebrow → headline → paragraph → uniform grid → repeat.

Each section should have a unique background treatment, spacing, and visual weight.

---

## Typography Rules

**Two font roles only:**
- Display/headline: Inter 800-900, large scale, tight tracking (-0.03em to -0.05em), peach color
- Body/interface: Inter 400-600, normal scale, relaxed leading, secondary text color

**Headline scale:**
- Hero headline: 5rem+ desktop, 2.5rem mobile
- Section headlines: 2.5rem-3rem
- Card titles: 1.125rem-1.5rem
- Eyebrow labels: 0.6875rem-0.75rem, 700 weight, wider tracking, uppercase, lime

**Rules:**
- Headlines must feel large, premium, editorial, and confident
- Eyebrow labels must not feel like thin default SaaS labels — use lime color, wider tracking, and optional leading dash/marker
- Do not use default browser heading sizes
- Body text line height: 1.5-1.65 for readability
- Mono font (JetBrains Mono) for system/technical labels only

---

## Color Rules

**Base palette:**
- Black: #080a08 (primary background)
- Charcoal: #111311 (dark section backgrounds)
- Charcoal light: #181a18 (card backgrounds)
- Charcoal mid: #1e201e (raised elements)
- Surface: #232523 (elevated cards)
- Border: #333533 (default borders)

**Accent:**
- Lime: #b4f740 (primary accent — system indicators, CTAs, active states)
- Lime subtle: rgba(180, 247, 64, 0.06) (backgrounds)
- Lime border: rgba(180, 247, 64, 0.18) (borders)
- Lime glow: rgba(180, 247, 64, 0.12) (shadows)

**Text:**
- Primary: #f4eee8 (body text)
- Heading: #f5efe6 (peach — headlines only)
- Secondary: #b8b2aa (descriptions)
- Muted: #8a847e (labels, captions)

**Signal:**
- Amber: #f5a623 (warning states)
- Error: #f74040

**Rules:**
- Never use pure white (#fff) for text or backgrounds
- Lime is for interaction and system states, not decoration
- Use amber sparingly for problem/warning indicators
- Section backgrounds must vary — do not use the same background for adjacent sections

---

## Spacing Rules

**Section padding:**
- Standard sections: 96px vertical (var(--space-4xl))
- Large sections (hero, CTA): 128px vertical (var(--space-5xl))
- Compact sections: 64px vertical (var(--space-3xl))

**Internal spacing:**
- Section header to content: 64px (var(--space-3xl))
- Between cards in a grid: 16px (var(--space-md))
- Card internal padding: 24-32px (var(--space-lg) to var(--space-xl))
- Between major content blocks: 48px (var(--space-2xl))

**Rules:**
- Do not use the same spacing value for every gap — vary intentionally
- Tight spacing between related elements, generous spacing between sections
- Cards should feel dense and content-rich, not airy
- Section-specific spacing adjustments are preferred over uniform defaults

---

## Card Rules

**Do not use:**
- Repeated equal-size cards as the main design language
- Icon + title + description as the only card pattern
- Lucide-style icons as visual anchors
- Default shadow-md/shadow-lg
- Uniform 3-column or 4-column grids without variation

**Do use:**
- Mixed card sizes (bento/asymmetric grids)
- Custom CSS motifs as visual indicators (rails, dots, gates, shields, stacks)
- Inset border shadows for depth
- Lime-tinted hover glows
- Cards with different internal layouts (some with images, some dense text, some compact)
- Intentional border treatments (lime borders for active/solution states, muted borders for problems)

**Card depth system:**
- Background: var(--color-charcoal-light) or var(--color-charcoal-mid)
- Border: 1px solid var(--color-border)
- Inset shadow: var(--shadow-inset) — `inset 0 1px 0 rgba(255,255,255,0.03), inset 0 -1px 0 rgba(0,0,0,0.2)`
- Hover: border shifts to lime-border, add lime glow shadow, subtle translateY(-2px)

---

## Motion Rules

**Allowed:**
- Rail glow on hover (lime border + shadow transition)
- Card depth shift on hover (translateY, border-color, box-shadow)
- System nodes pulsing lightly (subtle glow animation on active dots)
- Hero panel drift (slow float animation, 14s cycle, 6-8px range)
- CTA glow (lime shadow on hover)
- Image zoom on hover (scale 1.03-1.04, slow transition)

**Forbidden:**
- `transition: all` — use targeted property transitions
- Heavy entrance animations on scroll
- Bouncing or springy animations
- Loading spinners or skeleton screens in static content
- Any motion that feels like a template library

**Transition values:**
- Fast: 150ms ease (hovers, color changes)
- Base: 250ms ease (layout shifts, transforms)
- Slow: 400ms ease (image zooms, complex state changes)

---

## Forbidden Generic Patterns

1. Equal-size icon cards in a uniform grid as the primary content layout
2. Lucide or similar icon libraries as visual anchors
3. Default shadow-md/lg from any framework
4. Repeated eyebrow → headline → paragraph → grid sections
5. Template hero with centered text and two buttons only
6. Generic gradient backgrounds from CSS generators
7. Stock illustration or abstract art placeholders
8. `transition: all` on any element
9. Floating decorative shapes or abstract background elements
10. Generic "feature grid" or "benefits grid" layouts
11. Thin, default-weight eyebrow labels
12. Uniform section backgrounds with no contrast variation
13. Simple pill badges without intentional system meaning
14. Card hover states that only change background color

---

## Homepage Conversion Goal

The homepage must accomplish three things:

1. **Credibility** — Communicate that Creation Skills is a serious enterprise consulting practice, not an AI chatbot wrapper or a startup MVP.

2. **Clarity** — Show visitors exactly what C/Skills does: helps creative companies overhaul their media production systems with governed agent paths, human approval gates, and rights-aware processes.

3. **Conversion** — Drive qualified leads to "Book a C/Skills Review" — the primary CTA. Secondary path: "Explore Engagements."

The page should feel like visiting a premium product company's marketing site (like Stripe, Linear, or Vercel) rather than a consulting firm's brochure.

---

## Logo Rules

- Primary lockup: `C/Skills.` with lime slash, `A Creation Rights Division` below
- The slash `/` is always lime green (#b4f740)
- Header logo: 2rem, 800 weight, tight tracking
- Footer logo: 1.5rem, 800 weight
- Subline: uppercase, 600 weight, wider tracking, muted color
- White SVG available at `public/images/logo/` — use if it renders well at size, otherwise use live text lockup
- The logo must feel like a brand mark, not a text label
