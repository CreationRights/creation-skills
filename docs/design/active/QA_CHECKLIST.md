# QA_CHECKLIST.md — Visual QA Checklist for C/Skills Homepage

> Use during and after implementation. Each item references the source spec document.

---

## 1. Global Checks

### Build

- [ ] `npm run build` completes with zero errors
- [ ] All 48 routes generate successfully (check build output count)
- [ ] No TypeScript errors
- [ ] No missing image warnings in console

### Fonts

- [ ] Hanken Grotesk loads from Google Fonts (weights 300, 400, 500, 600, 700)
- [ ] JetBrains Mono loads from Google Fonts (weights 400, 500, 700)
- [ ] Body text renders in Hanken Grotesk
- [ ] `//` labels render in JetBrains Mono
- [ ] Footer column headers render in JetBrains Mono
- [ ] No fallback font flash (FOUT) lasting more than 200ms

### Colors

- [ ] Body background is near-black (#0d0d0d or within 3 stops)
- [ ] Primary text is off-white (#F5F5F5 or equivalent)
- [ ] Body text is neutral gray (#B0B0B0 or equivalent), not warm-tinted
- [ ] Muted text is medium gray (#808080 or equivalent)
- [ ] Lime accent is #B8F600 (not #b4f740 from old palette, not #BFFF00 at rest)
- [ ] No purple, peach, or warm-tinted colors from old palette visible
- [ ] Borders are very dark (#1A1A1A or equivalent), barely visible but present

### Assets

- [ ] All images load from local `/images/cskills/` paths
- [ ] No external image URLs (lh3.googleusercontent.com, etc.)
- [ ] Logo SVG loads from `/brand/cskills/cskills-logo-white.svg`
- [ ] No broken image placeholders visible

---

## 2. Header

- [ ] Three-zone layout visible: logo left, nav center, CTA right
- [ ] Logo is ~120px wide, white SVG
- [ ] Nav links are centered, 14px, weight 400, gray color
- [ ] Nav links hover to white (not lime)
- [ ] CTA button is pill-shaped (fully rounded)
- [ ] CTA text is black (#0d0d0d) on lime background
- [ ] CTA label reads "Book a C/Skills Review"
- [ ] Header is sticky on scroll
- [ ] Header has bottom border (1px, very dark)
- [ ] Header background has slight transparency + backdrop blur
- [ ] Header height is ~80px
- [ ] **Mobile (<1024px)**: Nav hidden, hamburger visible
- [ ] **Mobile (<1024px)**: CTA hidden from header, appears in mobile menu
- [ ] **Mobile menu**: Full-screen overlay, nav links stacked, CTA at bottom

---

## 3. Hero

- [ ] No background image (text-only hero, body bg shows through)
- [ ] No announcement banner above hero
- [ ] No chips/tags above headline
- [ ] Headline reads: "Make better media faster, with control."
- [ ] "with control." is lime-colored and italic
- [ ] Headline is very large (84px desktop) and light-weight (300)
- [ ] Subhead starts with "Creation Skills helps creative companies..."
- [ ] Subhead is 22px, weight 300, gray color, max-width ~768px
- [ ] Thin border line separates subhead from CTAs
- [ ] Two CTA buttons present: primary (lime) and secondary (ghost/bordered)
- [ ] Primary CTA: "Book a C/Skills Review" — black text on lime, pill shape
- [ ] Secondary CTA: "Explore Engagements" — white text, dark bg, bordered, pill shape
- [ ] CTAs are left-aligned, not centered
- [ ] Generous top padding (~128px from header)
- [ ] **Mobile**: Headline scales down to 36-48px
- [ ] **Mobile**: CTAs stack vertically

---

## 4. Cinematic Media Block

- [ ] Large image fills container width (up to 1320px)
- [ ] Aspect ratio is ultra-wide (21:9 on desktop, 16:9 on mobile)
- [ ] Image has rounded corners (~16px)
- [ ] Image has thin dark border (1px)
- [ ] Image uses `cskillsImages.core.homeHero`
- [ ] No overlay, caption, or status widget on the image
- [ ] Image has subtle hover opacity change (0.9 -> 1.0)
- [ ] No gap between hero and media block (contiguous flow)

---

## 5. Value Strip

- [ ] 4-column grid below the media block
- [ ] Each item has a `//`-prefixed label in JetBrains Mono
- [ ] `//` prefix is lime-colored
- [ ] Label text is uppercase, small (12px), wide tracking
- [ ] Description text has a lime-tinted left border (subtle)
- [ ] Description text is small (13px), muted gray
- [ ] Strip has bottom border
- [ ] No claim of "25% efficiency gain"
- [ ] NILP appears with full expansion in item 4
- [ ] **Tablet**: 2-column grid
- [ ] **Mobile**: 1-column stack

---

## 6. Vision Editorial

- [ ] Section has top border
- [ ] 1/3 + 2/3 grid layout (desktop)
- [ ] Left sidebar: "// The Vision" label, decorative rule below
- [ ] Right column: large editorial headline (56px, weight 300)
- [ ] Headline text: "Creative companies should be able to..."
- [ ] 2x2 feature grid below headline, separated by border
- [ ] Each feature has lime dot indicator + title + description
- [ ] Feature titles are medium weight (500), ~18-20px
- [ ] Feature descriptions are light (300), muted
- [ ] No "foundation model" or "open weights" language in any feature
- [ ] No "infrastructure" or deployment-sounding language
- [ ] **Mobile**: Stacked layout, 1-col features

---

## 7. Engagements

- [ ] Section background is darker than body (#080808 or equivalent)
- [ ] Section has top border
- [ ] "// Engagements" label in lime mono
- [ ] Headline: "What C/Skills builds with your team" (56px, weight 300)
- [ ] Subhead paragraph below headline, max-width ~640px
- [ ] 3 engagement cards in a row
- [ ] Each card has dark background (#080808), thin border, rounded (16px)
- [ ] Each card has faded index number (01, 02, 03) in top-right corner
- [ ] Card titles: C/Skills Review, Operating Model Design, Implementation Office
- [ ] Card descriptions match `content/engagements.ts` text
- [ ] Each card has "Key Outcome" metadata block with lime left-border
- [ ] Cards are clickable links to their engagement pages
- [ ] Card hover: border shifts to lime, subtle glow
- [ ] "Explore Engagement ->" text appears on hover
- [ ] Card min-height ~440px (desktop)
- [ ] **Mobile**: Cards stack to 1-column, min-height removed

---

## 8. Creation Rights

- [ ] 1/2 + 1/2 grid: image left, content right
- [ ] Image uses `cskillsImages.core.creationRightsReadiness`
- [ ] Image has rounded corners and border
- [ ] No overlay, status widget, or "GOVERNANCE ACTIVE" badge on image
- [ ] "// Governance" label above headline
- [ ] Headline: "Prepared for Creation Rights." (48px, weight 300)
- [ ] Body text mentions NILP with full expansion: "NILP (Name, Image, Likeness, and Persona)"
- [ ] NILP has registered trademark symbol
- [ ] Body does NOT say "Voice" — must say "Persona"
- [ ] NILP framework sidebar present below body text
- [ ] Sidebar has dark background, border, rounded corners
- [ ] 4 items: N, I, L, P — with letter badges
- [ ] P = "Persona" (not "Voice Synthesis")
- [ ] **Mobile**: Image stacks above content

---

## 9. FAQ

- [ ] Section has top border
- [ ] 1/3 + 2/3 grid layout
- [ ] Left sidebar: "// FAQ" label + "Common Questions" heading
- [ ] 3 FAQ items in right column
- [ ] Each item shows question and answer side-by-side (desktop)
- [ ] Items separated by borders
- [ ] Questions are medium weight (500), white color
- [ ] Answers are light weight (300), gray color
- [ ] FAQ does NOT mention "foundation models"
- [ ] FAQ does NOT use "custom models" or API/deployment language
- [ ] Subtle hover effect on FAQ items
- [ ] **Mobile**: Question and answer stack vertically

---

## 10. Final CTA

- [ ] Centered layout
- [ ] Large headline: "Ready to redesign how your media gets made?"
- [ ] Headline is 64-84px (desktop), weight 300
- [ ] Single CTA button: "Book a C/Skills Review"
- [ ] Button is xl-sized pill, lime fill, black text
- [ ] Button has subtle lime glow shadow
- [ ] Button scales up slightly on hover
- [ ] No secondary CTA, no support lines
- [ ] Generous vertical padding (~128-160px)
- [ ] **Mobile**: Headline scales to 36-48px

---

## 11. Footer

- [ ] Darker background than body (#080808 or equivalent)
- [ ] Top border present
- [ ] Logo present (small, white SVG)
- [ ] "A Creation Rights Division" subline in mono uppercase
- [ ] Brand description text in muted gray
- [ ] 3 link columns with JetBrains Mono uppercase headers
- [ ] Column headers have bottom border decoration
- [ ] Links are small (14px), muted, hover to lime
- [ ] Bottom bar with copyright and legal links
- [ ] Copyright includes current year
- [ ] All footer links work (spot-check 3-4)
- [ ] **Mobile**: Grid collapses to 2-col then 1-col

---

## 12. Content Correctness

- [ ] No "C/Skills Pipeline v2.0" text anywhere
- [ ] No "Read the release notes" text anywhere
- [ ] No green announcement banner
- [ ] No "foundation model" language
- [ ] No "open weights" language
- [ ] No "API" in the context of a product offering
- [ ] No "verified 25% efficiency gain" or similar unsubstantiated claims
- [ ] NILP always expanded as "Name, Image, Likeness, and Persona" (not "Voice")
- [ ] All CTAs have black text on lime (not white text on lime)
- [ ] No LTX branding, logos, or references
- [ ] No fake dashboard widgets or system status indicators

---

## 13. Responsive Spot Checks

### 1440px (Wide Desktop)

- [ ] Content is centered within 1320px container
- [ ] Generous side margins visible
- [ ] All grids are at maximum column count

### 1024px (Standard Desktop)

- [ ] Full navigation visible
- [ ] Engagement cards still in 3-column
- [ ] Hero headline at full size

### 768px (Tablet)

- [ ] Navigation may collapse or condense
- [ ] Value strip shifts to 2-column
- [ ] Engagement cards shift to 1-column
- [ ] Split panels shift to stacked
- [ ] Headlines scale down appropriately

### 480px (Mobile)

- [ ] Hamburger menu visible
- [ ] All content is single-column
- [ ] Hero headline ~36px
- [ ] CTAs stack vertically
- [ ] Padding reduced to 24px horizontal
- [ ] No horizontal overflow / scrollbar
- [ ] All text is readable without zooming

---

## 14. Accessibility

- [ ] All images have meaningful `alt` text (or `aria-hidden="true"` for decorative)
- [ ] Primary text on body bg meets WCAG AA (contrast ratio >= 4.5:1)
- [ ] Muted text on body bg meets WCAG AA for large text (ratio >= 3:1)
- [ ] Lime on body bg has sufficient contrast for large text
- [ ] Black text on lime CTA has sufficient contrast (>= 4.5:1)
- [ ] All interactive elements are keyboard-accessible
- [ ] Mobile menu has proper `aria-expanded` and `aria-label`
- [ ] Skip-to-content link present (or acceptable for scope)
- [ ] No auto-playing media with sound

---

## 15. Performance

- [ ] Hero image uses `priority` flag for LCP optimization
- [ ] Images use Next.js `Image` component (automatic optimization)
- [ ] No unused CSS imports visible in bundle (check dev tools)
- [ ] Google Fonts import uses `display=swap`
- [ ] No layout shift visible on page load (CLS < 0.1)
