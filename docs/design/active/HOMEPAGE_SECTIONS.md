# HOMEPAGE_SECTIONS.md — Section-by-Section Homepage Specification

> Each section is specified with layout, content, assets, components, and responsive behavior.
> Sections are numbered in reading order. Header and footer wrap the page via `PageShell`.

---

## Section 1: Header

**Component**: `Header.tsx` (updated)
**Position**: Sticky top, persists across all pages.

### Layout

```
[Logo 120px] ———————— [Nav links, centered] ———————— [CTA pill]
```

Three zones: left (fixed ~200px), center (flex-1), right (fixed ~200px).

### Content

| Element | Source | Value |
|---|---|---|
| Logo | `cskillsLogo.primary` | SVG, ~120px x 28px |
| Nav items | `mainNav` from `content/navigation.ts` | Home, What We Do, Engagements, Who We Help, Creation Rights Readiness, Resources, About |
| CTA label | `ctaNav` from `content/navigation.ts` | "Book a C/Skills Review" |
| CTA href | `ctaNav.href` | `/book-review` |

### Responsive

| Breakpoint | Behavior |
|---|---|
| 1024px+ | Full 3-zone layout |
| <1024px | Nav hidden, hamburger button visible, CTA hidden from right zone |
| Mobile menu open | Full-screen overlay, nav links stacked, CTA at bottom |

---

## Section 2: Hero

**Background**: Body bg (`--color-bg`), no image
**Max-width**: 1320px
**Alignment**: Left

### Content

| Element | Style Token | Copy |
|---|---|---|
| Headline | `display-xl` | "Make better media faster," + line break + `<span class="accent">with control.</span>` |
| Subhead | `body-lg` | "Creation Skills helps creative companies overhaul how media gets made, reviewed, approved, reused, and scaled so teams can make better work faster without losing rights, brand, or human control." |
| Primary CTA | Button `primary` | "Book a C/Skills Review" -> `/book-review` |
| Secondary CTA | Button `secondary` | "Explore Engagements" -> `/engagements` |

### Layout Detail

```
[128px top padding]

Make better media faster,
with control.                          ← 84px, weight 300, lime italic on "with control."

[24px gap]

Creation Skills helps creative...       ← 22px, weight 300, max-width 768px

[16px gap]
──────────────────────────────          ← 1px border, color-border
[40px gap]

[Book a C/Skills Review]  [Explore Engagements]    ← pill buttons, 48px height

[64px bottom padding]
```

### Assets

None. Text-only hero.

### Responsive

| Breakpoint | Headline Size | Subhead Max-width |
|---|---|---|
| 1024px+ | 84px | 768px |
| 768-1023px | 56px | 640px |
| <768px | 36-48px | 100% |

---

## Section 3: Cinematic Media Block

**Background**: Body bg
**Max-width**: 1320px

### Layout

Full-width image within the container. No margin collapse with hero — the media block sits directly below the hero CTA row.

```
[Image, 21:9 aspect, rounded 16px, 1px border]
```

### Asset

| Image | Source |
|---|---|
| `cskillsImages.core.homeHero` | `/images/cskills/core/cskills-home-hero-01.png` |

### Implementation

```tsx
<div className="hp-media-block" style={{ position: 'relative' }}>
  <Image src={cskillsImages.core.homeHero} alt="..." fill style={{ objectFit: 'cover' }} priority />
</div>
```

### Responsive

| Breakpoint | Aspect Ratio |
|---|---|
| 1024px+ | 21:9 |
| <1024px | 16:9 |

---

## Section 4: Value Strip

**Background**: Body bg
**Max-width**: 1320px
**Position**: Directly below the media block, within the same container.

### Layout

```
[────────────────────────────────────────────────────────]  ← border-bottom from media block
[48px top padding]

// FASTER CREATIVE     // CLEARER          // RIGHTS-AWARE    // CREATION RIGHTS
   PRODUCTION             APPROVALS           REUSE              READINESS

   Streamline how...      Structured...       Track...           Prepare your...

[48px bottom padding]
[────────────────────────────────────────────────────────]  ← border-bottom
```

4-column grid, 32px gap. Each item: `label-caps` header + `body-xs` description with lime left-border.

### Content

| # | Label | Description |
|---|---|---|
| 1 | Faster Creative Production | Streamline how creative assets move from brief to delivery, reducing rework and idle time. |
| 2 | Clearer Approvals | Structured review steps with built-in legal and brand checkpoints at every stage. |
| 3 | Rights-Aware Reuse | Track provenance for every asset, preventing unauthorized reuse across teams and channels. |
| 4 | Creation Rights Readiness | Prepare your workflows for emerging NILP (Name, Image, Likeness, and Persona) standards. |

### Responsive

| Breakpoint | Columns |
|---|---|
| 1024px+ | 4 |
| 768-1023px | 2 |
| <768px | 1 |

---

## Section 5: Vision Editorial

**Background**: Body bg
**Max-width**: 1320px
**Border**: `border-top: 1px solid var(--color-border)` at top

### Layout

```
// The Vision          | Creative companies should be able to make
                       | better media faster without losing control
48px rule ──           | of rights, brand, approvals, talent use,
                       | or reuse.
                       |
                       | ──────────────────────────────────────
                       |
                       | [dot] Granular Rights    [dot] Embedded
                       |       Tracking                 Governance
                       |       Description...           Description...
                       |
                       | [dot] Scalable           [dot] Brand
                       |       Workflows                Alignment
                       |       Description...           Description...
```

1/3 + 2/3 grid (desktop). Sidebar contains only the label and decorative rule. Content column contains headline + 2x2 feature grid.

### Content

**Headline**: "Creative companies should be able to make better media faster without losing control of rights, brand, approvals, talent use, or reuse."

**Features** (see COMPONENT_MAP.md Section 3.4 for full copy).

### Responsive

| Breakpoint | Layout |
|---|---|
| 1024px+ | 1/3 + 2/3 grid, 2x2 feature grid |
| 768-1023px | Stacked, 2x2 feature grid |
| <768px | Stacked, 1-col feature stack |

---

## Section 6: Engagements

**Background**: `--color-surface-lowest` (#080808)
**Max-width**: 1320px
**Border**: `border-top: 1px solid var(--color-border)` and `border-bottom` from bg change

### Layout

```
// Engagements

What C/Skills builds with your team                ← display-md, 56px, weight 300

Structured engagements designed to integrate...     ← body-md, max-width 640px

[80px gap]

[01 C/Skills Review]  [02 Operating Model Design]  [03 Implementation Office]
```

3-column card grid, 24px gap. Cards are full-height flex with space-between.

### Content

**Section header**:
- Label: "Engagements"
- Headline: "What C/Skills builds with your team"
- Subhead: "Structured engagements designed to integrate into your existing operations, reducing disruption while upgrading how creative work moves through your company."

**Cards** (sourced from `content/engagements.ts`):

| # | Title | Description (from engagements.ts) | Key Outcome | Link |
|---|---|---|---|---|
| 01 | C/Skills Review | "A focused review of one production path, including team roles, production-agent use, rights exposure, approval paths, tool stack, asset lifecycle, operating gaps, and Creation Rights readiness." | Strategic Readiness Report | `/engagements/creation-skills-review` |
| 02 | Operating Model Design | "A future-state model for how creative work should move from brief to production, agent-supported preparation, rights review, human approval, publication, reuse, reporting, and audit." | Custom Operating Blueprint | `/engagements/operating-model-design` |
| 03 | Implementation Office | "Ongoing rollout support, owner guidance, agent supervision, operating-file updates, adoption tracking, stakeholder alignment, and Creation Rights readiness." | Deployed Production System | `/engagements/implementation-office` |

### Responsive

| Breakpoint | Columns |
|---|---|
| 1024px+ | 3 |
| <1024px | 1 (stacked, min-height removed) |

---

## Section 7: Prepared for Creation Rights

**Background**: Body bg
**Max-width**: 1320px

### Layout

```
[Image 4:3, rounded]  |  // Governance
                       |
                       |  Prepared for Creation Rights.
                       |
                       |  Our approach is designed around Creation Rights,
                       |  ensuring every asset respects NILP...
                       |
                       |  ┌─────────────────────────────────┐
                       |  │ // THE NILP FRAMEWORK            │
                       |  │ ─────────────────────            │
                       |  │ [N] Name & Identity — desc       │
                       |  │ [I] Image — desc                 │
                       |  │ [L] Likeness — desc              │
                       |  │ [P] Persona — desc               │
                       |  └─────────────────────────────────┘
```

1/2 + 1/2 grid (desktop), 64px gap. Image left, content right.

### Content

- **Label**: "Governance"
- **Headline**: "Prepared for Creation Rights."
- **Body**: "Our approach is designed around Creation Rights, ensuring every asset respects NILP (Name, Image, Likeness, and Persona), honors consent boundaries, and maintains clear provenance. Build workflows that protect your brand, creators, and intellectual property from the ground up."
- **NILP sidebar**: See COMPONENT_MAP.md Section 3.7.

### Asset

| Image | Source |
|---|---|
| `cskillsImages.core.creationRightsReadiness` | `/images/cskills/core/cskills-creation-rights-readiness-01.png` |

### Responsive

| Breakpoint | Layout |
|---|---|
| 768px+ | 1/2 + 1/2 grid |
| <768px | Stacked (image on top, content below) |

---

## Section 8: FAQ

**Background**: Body bg
**Max-width**: 1320px
**Border**: `border-top: 1px solid var(--color-border)` at top

### Layout

```
// FAQ                 | ──────────────────────────────────────
                       |
Common Questions       | How long does a          A typical C/Skills
                       | review take?             Review takes 2-4 weeks...
                       |
                       | ──────────────────────────────────────
                       |
                       | Do you build custom      We focus on designing
                       | tools or software?       the operational pipeline...
                       |
                       | ──────────────────────────────────────
                       |
                       | What is the              Dedicated embedded
                       | Implementation Office?   support designed to...
                       |
                       | ──────────────────────────────────────
```

1/3 + 2/3 grid (desktop). Right column: each FAQ item is a horizontal pair (question 1/3, answer 2/3) separated by borders.

### Content

| # | Question | Answer |
|---|---|---|
| 1 | How long does a review take? | A typical C/Skills Review takes 2-4 weeks depending on the complexity of your current workflows and organizational scale. |
| 2 | Do you build custom tools or software? | We focus on designing the operational pipeline and integrating governance into your creative workflows. We work with whatever tools and platforms your team already uses. |
| 3 | What is the Implementation Office? | Dedicated embedded support designed to deploy new workflows into your teams, ensuring smooth adoption, stakeholder alignment, and long-term operational success. |

### Responsive

| Breakpoint | Layout |
|---|---|
| 768px+ | 1/3 + 2/3 outer grid; FAQ items are horizontal (question + answer side by side) |
| <768px | Stacked outer; FAQ items stacked (question above answer) |

---

## Section 9: Final CTA

**Background**: Body bg
**Max-width**: 1320px
**Alignment**: Centered

### Layout

```
                     [128-160px top padding]

              Ready to redesign how
              your media gets made?                 ← display-lg, 64-84px, weight 300, centered

                     [48px gap]

               [Book a C/Skills Review]             ← xl pill button, lime, glow shadow

                     [128-160px bottom padding]
```

### Content

- **Headline**: "Ready to redesign how your media gets made?"
- **CTA**: "Book a C/Skills Review" -> `/book-review`

### Responsive

| Breakpoint | Headline Size |
|---|---|
| 1024px+ | 84px |
| 768-1023px | 56px |
| <768px | 36-48px |

---

## Section 10: Footer

**Component**: `Footer.tsx` (updated)
**Background**: `--color-surface-lowest`
**See**: COMPONENT_MAP.md Section 1.2

### Content Source

All content from `content/footer.ts`:
- `footerContent.positioning` (brand description)
- `footerContent.columns` (3 link columns: Pages, Engagements, Resources)
- `footerContent.legal` (5 legal links)

### Layout

```
[Logo]                    // PAGES           // ENGAGEMENTS      // RESOURCES
A Creation Rights         What We Do          C/Skills Review     All Resources
Division                  Method              Operating Model     Who We Help
                          Creation Rights     Agent Operating     Contact
Description...            About               Governance          Book a C/Skills
                          FAQ                 Pilot Transform.    Review
                                              Implementation

─────────────────────────────────────────────────────────────────────────────
(c) 2026 Creation Skills. A Creation Rights Division.    Privacy  Terms  ...
```
