# LTX Design Dossier

> Extracted via Firecrawl on June 2, 2026
> Sources: ltx.io homepage, /model, /model/ltx-2-3, /studio, /about-us
> 1,057 DOM elements analyzed. 310+ URLs mapped. 29 design extraction files generated.

---

## 1. Site Map / Important URLs

### Core Pages

| Page | URL | Role |
|------|-----|------|
| Homepage | `https://ltx.io` | Brand story, product overview, mission |
| Model (main) | `https://ltx.io/model` | Product hero, capabilities, open source, API |
| LTX-2.3 | `https://ltx.io/model/ltx-2-3` | Latest model release, technical specs |
| Studio | `https://ltx.io/studio` | Creative platform for video production |
| About | `https://ltx.io/about-us` | Company story, executive team |
| Desktop | `https://ltx.io/ltx-desktop` | Local video editor product |
| API | `https://ltx.io/model/api` | Developer API product |

### Secondary Pages

| Page | URL |
|------|-----|
| API Pricing | `https://ltx.io/model/api/pricing` |
| Licensing | `https://ltx.io/model/license` |
| Open Source | `https://ltx.io/model/open-source` |
| Grants | `https://ltx.io/model/grants` |
| Case Studies | `https://ltx.io/case-studies` |
| Blog | `https://ltx.io/blog` |
| Newsroom | `https://ltx.io/newsroom` |
| Glossary | `https://ltx.io/glossary` |
| Alternatives | `https://ltx.io/model/alternatives` |

### Site Scale

| Section | URL Count |
|---------|-----------|
| Blog posts | ~190 |
| Glossary terms | ~95 |
| Model pages | 16 |
| Studio pages | 17 |
| Alternatives (competitor) | 9 |
| Case studies | 5 |
| Newsroom | 4 |
| Forms | 5 |

---

## 2. Desktop Screenshot Notes

### Homepage (ltx.io)

- Pure black background (#0b0b0b), no gradients in the hero area itself
- Thin purple gradient announcement banner at very top: "PRODUCTION-GRADE HDR IS HERE. TRY IT NOW"
- LTX logo: white, minimal, top-left. Stylized "LTX" lettering, not a complex lockup
- Nav is horizontally centered with dropdown categories: Products, Research, Resources, Pricing, Company
- Purple "Talk to Sales" CTA pill in top-right corner
- Hero headline is very large, light weight: "Open Creative Intelligence, Built for Production"
- Hero subhead is much smaller, muted color, 2 lines max
- Single ghost/outline CTA button below subhead: "Talk to sales"
- Below the fold: a massive cinematic video/image block showing AI-generated content (animated characters around a campfire)
- Partner logo strip below hero media
- Overall impression: extreme restraint, generous black space, cinematic confidence

### Model Page (ltx.io/model)

- Same black background, same nav structure
- Different sub-nav for model section: Research, API, Open Source, Licensing, Resources + "Log in" and "Talk to Sales"
- Hero headline: "Multimodal Video Generation Model" -- very large, light weight
- Subhead: "A production-grade foundation model deployable via API, on-prem, or open weights."
- Two CTA buttons side by side: "Download LTX-2.3" (outline) + "Get API Key" (filled purple gradient)
- Below: massive cinematic image (giraffe close-up against blue sky), full viewport width
- The image block has no visible border, blends into black
- Clean, editorial, no cards or widgets visible above the fold

---

## 3. Mobile Screenshot Notes

No mobile screenshots were captured. Based on HTML analysis:

- Breakpoints at 426px, 769px, 1024px, 1280px, 1920px
- Mobile nav collapses into hamburger menu
- Hero headline scales down but maintains large presence
- Grids collapse to single column below 769px
- Partner logo carousel is horizontally scrollable

---

## 4. Header / Nav Structure

### Layout

```
[Logo] -------- [Nav items with dropdowns] -------- [CTA pill]
```

Three-zone layout: logo left, nav center, CTA right.

### Dimensions & Style

| Property | Value |
|----------|-------|
| Background | `rgba(11, 11, 11, 0.55)` -- translucent black with glassmorphism |
| Position | Sticky, z-index 1000+ |
| Height | Not explicitly set; content-driven, approximately 64-72px visually |
| Max width | Full viewport width (nav content constrained within) |
| Border | None visible at rest; subtle separation via transparency |
| Backdrop | Blur effect (glassmorphism) |

### Logo

- White "LTX" logotype, minimal, clean
- Accompanied by "Models" label on the model page sub-nav
- No subline, no tagline in the header
- Visually about 60-80px wide

### Nav Items (Homepage)

Dropdown-based mega menu:

| Item | Type |
|------|------|
| Products | Dropdown: Models, API, LTX Studio, LTX Desktop |
| Research | Dropdown: LTX-2.3, LTX-2, Academic Programs |
| Resources | Dropdown: Blog, Case Studies, Release Notes, Documentation, HuggingFace, GitHub |
| Pricing | Dropdown: Licensing, API, LTX Studio |
| Company | Dropdown: About LTX, Newsroom, Careers |

### Nav Items (Model Page)

Flat nav (no dropdowns):

| Item |
|------|
| Research (dropdown) |
| API (dropdown) |
| Open Source (dropdown) |
| Licensing |
| Resources (dropdown) |

Plus: "Log in" text link and "Talk to Sales" CTA button.

### Nav Typography

| Property | Value |
|----------|-------|
| Font family | Aeonik |
| Font size | 17.6px (1.1rem) |
| Font weight | 400 |
| Color | `#f9f9f9` (near-white) |
| Letter spacing | -0.16px |
| Hover | Subtle color shift, no underline |

### CTA Button (Header)

| Property | Value |
|----------|-------|
| Label | "Talk to Sales" |
| Background | Purple gradient: `linear-gradient(125deg, #a98bd9, #6d28d9, #194df9)` |
| Text color | `#f9f9f9` (white) |
| Font size | 15.2px |
| Font weight | 500 |
| Padding | 11.2px 20.8px |
| Border radius | 800px (pill) |
| Height | ~38-40px (content-driven) |

---

## 5. Hero Structure

### Homepage Hero

```
[Announcement banner]
[Header/Nav]

                                        (generous top spacing)

[Headline]                              Large, left-aligned
[Subhead]                               Smaller, muted, 2 lines
[CTA button]                            Ghost/outline style

                                        (generous spacing)

[Cinematic media block]                 Full-width, edge-to-edge feel
```

### Model Page Hero

```
[Announcement banner]
[Header/Nav]

                                        (generous top spacing)

[Headline]                              Very large, left-aligned
[Subhead]                               Short, single line
[CTA group]                             Two buttons side by side

                                        (generous spacing)

[Cinematic image]                       Full-width, no border
```

### Hero Typography

| Element | Homepage | Model Page |
|---------|----------|------------|
| Headline font | Aeonik | Aeonik |
| Headline size | 55.04px / clamp to 75.2px | 55.04px / clamp to 75.2px |
| Headline weight | 400 | 400 |
| Headline line-height | 1.15 (63.3px from 55px) | 1.15 |
| Headline letter-spacing | -1.28px (-0.023em) | -1.28px |
| Headline color | `#f9f9f9` | `#f9f9f9` |
| Subhead font | Aeonik | Aeonik |
| Subhead size | ~20.8px (1.3rem) | ~20.8px |
| Subhead weight | 400 | 400 |
| Subhead color | `#999999` (muted grey) | `#999999` |

**Key observation:** Hero headline weight is 400 (regular), not bold. This is what creates the calm, confident, editorial feel. The size does the work, not the weight.

### Hero CTAs

| Type | Style |
|------|-------|
| Homepage | Ghost/outline: transparent bg, white border, white text, pill shape |
| Model page | Two buttons: outline "Download" + filled purple gradient "Get API Key" |

---

## 6. Section Order and Rhythm

### Homepage (ltx.io)

| # | Section | Style | Content |
|---|---------|-------|---------|
| 1 | Announcement banner | Purple gradient strip | "Production-grade HDR is here" |
| 2 | Header/Nav | Sticky glass | Logo + dropdowns + CTA |
| 3 | Hero | Black bg, left-aligned | Headline + subhead + CTA |
| 4 | Hero media | Full-width cinematic | AI-generated video/image |
| 5 | Logo carousel | Border-top/bottom strip | Partner logos scrolling |
| 6 | Mission | Black bg, centered text | "Our Mission is to build..." |
| 7 | Product stack | `// The LTX Stack` label | 3 large product cards |
| 8 | Research | `// Innovation` label | Split: text + code links |
| 9 | Announcement | Embedded video | LTX-2.3 release details |
| 10 | Enterprise CTA | Banner | "Ready to Bring AI Creative Solutions" |
| 11 | Testimonial | Quote block | Customer voice, large quote |
| 12 | FAQ | Accordion | 4 expandable items |
| 13 | Footer | Dark bg | Multi-column links + legal |

### Model Page (ltx.io/model)

| # | Section | Style | Content |
|---|---------|-------|---------|
| 1 | Announcement banner | Purple gradient strip | Same as homepage |
| 2 | Header/Nav | Sticky glass, model sub-nav | Research, API, Open Source, Licensing, Resources |
| 3 | Hero | Black bg, left-aligned | "Multimodal Video Generation Model" |
| 4 | Hero media | Full-width cinematic | AI-generated image |
| 5 | Logo carousel | Scrolling strip | Partner logos |
| 6 | Vision | Quote block | "We believe creative systems should be reliable..." |
| 7 | LTX-2.3 | Video embed + text | Engine upgrade announcement |
| 8 | Open Source | `// Open Source` | Philosophy + links |
| 9 | Desktop | Product feature | Local editor product |
| 10 | Capabilities | `// The LTX Stack` | 4 capability cards (HDR, Portrait, Audio, 20sec) |
| 11 | API | CTA section | "Access the Full Power of LTX-2" |
| 12 | Testimonial | Quote block | Same customer quote |
| 13 | Community | Banner | Discord CTA |
| 14 | FAQ | Accordion | 12 expandable items |
| 15 | Footer | Dark bg | Same structure |

### Section Rhythm Pattern

- Sections alternate between black (`#0b0b0b`) and dark grey (`#1f1f24`)
- Section labels use `//` prefix: `// The LTX Stack`, `// Innovation`, `// Open Source`
- Large spacing between sections (80-128px padding)
- Text sections are narrow (max ~720-800px)
- Media sections push full-width or near full-width
- No border between most sections; color change provides separation

---

## 7. Media Block Placement and Ratios

### Hero Media

| Property | Value |
|----------|-------|
| Width | Full viewport width (constrained to ~1440px max) |
| Aspect ratio | ~16:9 cinematic |
| Border radius | 0 or very subtle (blends into black bg) |
| Border | None visible |
| Spacing above | ~64-80px from CTA buttons |
| Spacing below | ~80-128px before next section |

### Product/Capability Media

- Video elements embedded inline (11 `<video>` tags on model page)
- Videos autoplay, muted, loop -- showing model output quality
- Card-internal media uses 16:10 aspect ratio
- Full-width media blocks use 16:9

### Key Media Patterns

1. **Cinematic hero image**: Full-width, no frame, bleeds into black
2. **Embedded video demos**: Within capability cards, showing real outputs
3. **Vimeo embed**: For announcement/release videos
4. **No decorative imagery**: Every image/video is functional product output

---

## 8. CTA Patterns

### Button Variants (3 main)

| Variant | Background | Text | Border | Radius | Padding |
|---------|-----------|------|--------|--------|---------|
| Primary filled | `#f9f9f9` (white) | `#0b0b0b` (black) | None | 800px (pill) | 11.2px 20.8px |
| Ghost/outline | Transparent | `#f9f9f9` | 1px solid `#f9f9f9` | 800px (pill) | 17.6px 28.8px |
| Purple gradient | `linear-gradient(125deg, #a98bd9, #6d28d9, #194df9)` | `#f9f9f9` | None | 800px (pill) | 11.2px 20.8px |

### CTA Labels Used

| Location | Label | Style |
|----------|-------|-------|
| Header | "Talk to Sales" | Purple gradient pill |
| Hero (homepage) | "Talk to sales" | Ghost outline |
| Hero (model) | "Download LTX-2.3" | Ghost outline |
| Hero (model) | "Get API Key" | Purple gradient fill |
| Section CTAs | "Learn More" | Text link with arrow |
| Footer | "Try LTX Now" | Filled button |
| Enterprise banner | "Talk to Sales" | Filled button |

### CTA Typography

| Property | Value |
|----------|-------|
| Font family | Aeonik |
| Font size | 12.8-17.6px (varies by variant) |
| Font weight | 500 |
| Letter spacing | Normal |
| Text transform | None (sentence case) |

---

## 9. Typography Observations

### Font Stack

| Font | Role | Usage Count | Source |
|------|------|-------------|--------|
| **Aeonik** | Primary sans-serif, used for everything | 780 elements | Self-hosted |
| **Miriam Libre** | Secondary/accent, some headings | 148 elements | Self-hosted |
| **Inconsolata** | Monospace, code/labels | 15 elements | Google Fonts |
| **Inter** | Loaded but minimal use | - | Google Fonts |
| **JetBrains Mono** | Loaded but minimal use | - | Google Fonts |
| **Antonio** | Loaded but minimal use | - | Google Fonts |
| **Field Gothic Wide** | Loaded but minimal use | - | Google Fonts |

### Type Scale

| Size | Weight | Line Height | Letter Spacing | Used For |
|------|--------|-------------|----------------|----------|
| 75.2px (4.7rem) | 400 | 97.8px (1.3x) | normal | Display headlines |
| 56px (3.5rem) | 400 | 67.2px (1.2x) | -1.12px | H2 headings |
| 55px (3.44rem) | 400 | 63.3px (1.15x) | -1.28px | H1 headlines |
| 40px (2.5rem) | 400 | 20px | normal | Large accent |
| 36px (2.25rem) | 400 | 39.6px (1.1x) | normal | Section headings |
| 32px (2rem) | 400 | 43.2px (1.35x) | 0.6px | Sub-sections |
| 28.8px (1.8rem) | 400 | 40.3px (1.4x) | 0.8px | Body large |
| 28px (1.75rem) | 500 | 30.8px (1.1x) | normal | H3 |
| 25.6px (1.6rem) | 400 | 35.8px (1.4x) | 0.8px | Body medium |
| 24px (1.5rem) | 400 | 28.8px (1.2x) | normal | Nav/links |
| 17.6px (1.1rem) | 400 | 20px | -0.16px | Nav items |
| 16px (1rem) | 400 | normal | normal | Base body |
| 15.2px | 500 | normal | normal | Button text |
| 12.8px (0.8rem) | 400-500 | normal | normal | Small labels, footer |

### Key Typography Insights

1. **Weight 400 dominates**: 938 of 1,057 elements use weight 400. Bold is almost never used.
2. **Headlines are light, not heavy**: The largest headlines (55-75px) use weight 400. Size creates hierarchy, not boldness.
3. **Minimal weight variation**: Only 400, 500 (buttons/H3), and occasional 600/700 (15-21 uses).
4. **Negative letter-spacing on headlines**: -1.12px to -1.28px for tight, editorial feel.
5. **Positive letter-spacing on body/labels**: 0.6-0.8px for readability at smaller sizes.
6. **One primary font does all the work**: Aeonik handles 74% of all elements.

---

## 10. Card / Module Patterns

### Product Cards (Homepage "The LTX Stack")

| Property | Value |
|----------|-------|
| Layout | 3-column grid, equal width |
| Background | `#000000` or `#1f1f24` |
| Border radius | 8px |
| Border | Subtle, dark (`#2e3445`) |
| Padding | ~32-48px internal |
| Title font size | 28px (1.75rem) |
| Title weight | 500 |
| Description | 16px, weight 400, muted color |
| CTA | "Learn More" text link |
| Media | None in card; text-only |

### Capability Cards (Model Page)

| Property | Value |
|----------|-------|
| Layout | 2x2 grid or horizontal scroll |
| Background | Dark with subtle borders |
| Media | Inline video demos, autoplay |
| Labels | "Beta", "New" -- small tags |
| Title | Short, direct (e.g., "HDR Output", "Native Portrait") |
| Description | 2-3 lines max |

### Card Design Principles

- Cards are minimal: dark background, thin border, generous internal spacing
- No shadows on cards (dark theme makes shadows invisible anyway)
- No hover lift/scale transforms observed
- Cards are content containers, not decorative elements
- Video/media inside cards is the primary visual interest

---

## 11. Footer Structure

### Layout

```
[Tagline]                               "Creative Intelligence, Built for Real Work"
[CTA button]                            "Try LTX Now"

[Products]    [Company]    [Resources]   [Social]       [Legal]
- LTX Models  - About      - Help Center - X           - Privacy Policy
- LTX Studio  - Careers    - Docs        - GitHub      - Cookie Prefs
- LTX API     - Newsroom   - API Status  - HuggingFace - Trust Center
- LTX Desktop              - Glossary    - Discord     - Accessibility
                            - Alternatives              - CCPA Notice

[Copyright]                             "(c) 2026 All rights reserved"
```

### Footer Typography

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Tagline | ~24-28px | 400 | `#f9f9f9` |
| Column title | ~12.8px | 500 | `#f9f9f9` |
| Column links | ~12.8px | 400 | `#999999` |
| Copyright | ~12px | 400 | `#636367` |

### Footer Style

| Property | Value |
|----------|-------|
| Background | `#0b0b0b` (same as body) |
| Top border | None visible |
| Padding top | ~80-128px |
| Column layout | 5 columns on desktop |
| Link hover | Subtle color shift to white |
| LTX logo | Present in footer, small, white |

---

## 12. Animation and Interaction Clues

### Motion Tokens

| Token | Duration | Easing |
|-------|----------|--------|
| Fast | 100-200ms | ease |
| Base | 300ms | `cubic-bezier(0.215, 0.61, 0.355, 1)` |
| Smooth | 450ms | `cubic-bezier(0.165, 0.84, 0.44, 1)` |
| Spring | - | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Slow | 1.05s | Custom bezier |
| Very slow | 2s | Linear |

### Observed Interactions

1. **Lenis smooth scrolling**: Library-driven smooth scroll behavior across all pages
2. **Logo carousel**: Infinite horizontal scroll animation (`@keyframes scroll`)
3. **Gradient animation**: `@keyframes gradient-shift` on announcement banner
4. **Nav hover**: Subtle opacity/color transitions on nav links
5. **Dropdown menus**: Slide-down reveal with `slide-down-custom` keyframe
6. **FAQ accordion**: Expand/collapse with smooth height animation
7. **Video autoplay**: Multiple `<video>` elements play on scroll into view
8. **No scroll-triggered animations**: No fade-in, slide-up, or parallax effects observed
9. **No skeleton loading**: Content is server-rendered (Webflow SSG)

### Motion Philosophy

- **Restrained**: Most interactions are subtle color/opacity shifts
- **Functional**: Animation serves navigation (dropdowns) and content (video demos)
- **No decorative motion**: No floating particles, animated backgrounds, or scroll-driven reveals
- **Performance-first**: Lenis smooth scroll is the most "premium" motion element

---

## 13. What C/Skills Should Copy Structurally

### Header

- [ ] Three-zone layout: logo left, nav center, CTA right
- [ ] Solid or translucent dark background (no busy gradients)
- [ ] Minimal logo presence (not oversized)
- [ ] Flat nav items at 13-17px, weight 400, good spacing
- [ ] Single CTA pill on the right, accent color
- [ ] No icons, no labels, no badges in the nav
- [ ] Sticky positioning with z-index layering

### Hero

- [ ] Large headline with light weight (400-500, let size do the work)
- [ ] Short muted subhead (2 lines max)
- [ ] 1-2 CTA buttons, cleanly spaced
- [ ] Generous top spacing after header (~120-160px)
- [ ] Cinematic media block below content, full width or near-full
- [ ] Black background, no overlay noise

### Typography

- [ ] One primary font for 80%+ of elements
- [ ] Weight 400 as the dominant weight
- [ ] Weight 500 only for buttons, H3, key labels
- [ ] Weight 600-700 used sparingly if at all
- [ ] Negative letter-spacing on large headlines (-0.02em)
- [ ] Size creates hierarchy, not boldness
- [ ] Monospace only for code/metadata, not UI text

### Section Rhythm

- [ ] `//` label prefix for section dividers
- [ ] Alternating black/dark-grey section backgrounds
- [ ] Large vertical padding between sections (80-128px)
- [ ] Narrow text columns (720-800px max-width)
- [ ] Full-width media blocks as visual anchors
- [ ] Single testimonial/quote as social proof, not a carousel

### Cards

- [ ] Dark background, thin border, generous padding
- [ ] No shadows, no hover-lift effects
- [ ] Text-primary content (not image-heavy cards)
- [ ] Clean grid layout (3-column desktop, 1-column mobile)

### Footer

- [ ] Tagline + CTA above the link columns
- [ ] 4-5 column link grid
- [ ] Small, muted link text (12-13px)
- [ ] Subtle, not decorative
- [ ] Same black background as body

### Overall

- [ ] Extreme restraint: less is more
- [ ] Black space is a design element (not emptiness)
- [ ] No decorative widgets, floating cards, or fake UI
- [ ] Every visual element is functional
- [ ] Cinematic confidence in media presentation
- [ ] Professional, not flashy

---

## 14. What C/Skills Should Replace with Its Own Brand

### Brand Identity

| LTX Element | C/Skills Replacement |
|-------------|---------------------|
| Purple accent color | Lime green (`#b7ff2a`) |
| "LTX" logotype | "C/Skills." live text with lime `/` |
| "Talk to Sales" CTA | "Book a C/Skills Review" CTA |
| Purple gradient banner | Remove or replace with subtle announcement if needed |
| Aeonik font | Azeret Mono (display) + Geist (body) |
| AI video product imagery | Media creation / operating model imagery |

### Content Voice

| LTX Tone | C/Skills Tone |
|----------|---------------|
| "Open Creative Intelligence" | "Make better media faster, with control." |
| Technical/developer | Consulting/operations |
| "Built for Production" | "Built with the teams who make the work" |
| Product capability focus | Operating model / process focus |
| API/deployment language | Review/redesign/implement language |

### Section Content

| LTX Section | C/Skills Equivalent |
|-------------|-------------------|
| Product stack (Models, Studio, API) | Engagement types (Review, Operating Model, Implementation) |
| Research / Open Source | Our Belief / How We Work |
| Capabilities (HDR, Portrait, etc.) | Operating model components (agents, files, gates) |
| Enterprise CTA | Creation Rights Readiness |
| Customer testimonial | Client success / "Built with the teams" |
| FAQ | FAQ (consulting-focused questions) |

### What NOT to Copy

- Dropdown mega menus (C/Skills has simpler nav needs)
- Multiple product sub-navs (C/Skills is one offering)
- Partner logo carousel (C/Skills may not have these yet)
- Announcement banner (unless there's real news)
- Video autoplay demos (C/Skills is consulting, not a video tool)
- Translucent glassmorphism header (solid black is cleaner for C/Skills)

---

## Appendix A: LTX Color System

### Brand Colors (from CSS variables)

```css
--ltx-black: #0b0b0b;
--ltx-white: #f9f9f9;
--ltx-grey-dark: #1f1f24;
--ltx-grey-medium: #636367;
--ltx-grey-light: #999999;
--ltx-grey-blue-dark: #2e3445;
--ltx-grey-blue-light: #868ea5;
--ltx-off-white: #e7e8eb;
--ltx-purple-light: #a98bd9;
--ltx-purple-dark: #6d28d9;
--purple-neon: #b244f7;
```

### Key Gradients

```css
/* Primary brand gradient (CTA, banner) */
linear-gradient(125deg, #a98bd9, #6d28d9, #194df9);

/* Dark edge fade */
linear-gradient(90deg, #0b0b0b 11%, rgba(11, 16, 43, 0));

/* Overlay gradients */
linear-gradient(rgba(0,0,0,0) 7%, rgba(0,0,0,0.7) 67%);
linear-gradient(225deg, rgba(0,0,0,0) 7%, rgba(0,0,0,0.7) 92%);
```

---

## Appendix B: LTX vs C/Skills Comparison

| Dimension | LTX | C/Skills Current |
|-----------|-----|-----------------|
| Background | `#0b0b0b` | `#080a08` |
| Text primary | `#f9f9f9` | `#f4eee8` (warmer) |
| Text muted | `#999999` | `#8a847e` (warmer) |
| Accent | Purple gradient | Lime `#b7ff2a` |
| Primary font | Aeonik (weight 400) | Azeret Mono + Geist |
| Headline weight | 400 (light) | 500 |
| Body weight | 400 | 400 |
| Header bg | Translucent glass | Solid black |
| Header CTA | Purple gradient pill | Lime pill |
| Hero headline size | 55-75px | clamp(3rem, 5.5vw, 4.75rem) |
| Section labels | `//` prefix | `//` prefix |
| Card style | Dark, minimal, no shadow | Dark, minimal, subtle border |
| Footer | Same bg as body | Charcoal (#111311) |

---

## Appendix C: Generated Design Files

29 design extraction output files saved to `design-extract-output/`:

| File | Use |
|------|-----|
| `ltx-io-design-language.md` | Full AI-optimized design system reference |
| `ltx-io-AGENT.md` | System prompt for building in LTX style |
| `ltx-io-variables.css` | All CSS custom properties extracted |
| `ltx-io-tailwind.config.js` | Tailwind v3 theme extension |
| `ltx-io-design-tokens.json` | W3C DTCG format tokens |
| `ltx-io-motion-tokens.json` | Animation duration/easing tokens |
| `ltx-io-anatomy.tsx` | React component scaffolds |
| `ltx-io-preview.html` | Visual preview (open in browser) |
| `ltx-io-intent.json` | Page intent and section roles |
| `ltx-io-visual-dna.json` | Visual DNA / material language |
| `ltx-io-voice.json` | Brand voice tokens |

---

## Appendix D: Raw Firecrawl Outputs

| File | Source |
|------|--------|
| `.firecrawl/ltx-io.json` | Homepage full scrape |
| `.firecrawl/ltx-io-screenshot.png` | Homepage screenshot |
| `.firecrawl/ltx-model.json` | Model page full scrape |
| `.firecrawl/ltx-model-screenshot.png` | Model page screenshot |
| `.firecrawl/ltx-studio.json` | Studio page scrape |
| `.firecrawl/ltx-about-us.json` | About page scrape |
| `.firecrawl/ltx-model-ltx-2-3.json` | LTX-2.3 page scrape |
