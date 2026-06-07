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
| Nav items | `mainNav` from `content/navigation.ts` | Home, Programs, Capabilities, Skill Packs, Who We Help, How We Work, About |
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
| Headline | `display-xl` | "Build the skills behind" + line break + `<span class="accent">governed media creation.</span>` |
| Subhead | `body-lg` | "Creation Skills helps creative, brand, legal, production, and operations teams design the approved media skills, company flows, and rollout plans needed for AI-assisted media production." |
| Primary CTA | Button `primary` | "Book a C/Skills Review" -> `/book-review` |
| Secondary CTA | Button `secondary` | "Explore Skill Packs" -> `/skill-packs` |

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
| 1 | Approved Media Skills | Define what each media agent can do, which tools it uses, what rules apply, and what evidence must be saved. |
| 2 | Clear Company Flows | Design the creation flows that move media from brief to delivery with structured review, approval, and rights checks. |
| 3 | Rights-Ready Production | Build production paths where every asset respects NILP (Name, Image, Likeness, and Persona) from the start. |
| 4 | Creation Rights Readiness | Prepare your team, creation flows, approval gates, and evidence requirements for full platform adoption. |

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

## Section 6: Skills / Rights Split + Programs

**Background**: `--color-surface-lowest` (#080808)
**Max-width**: 1320px
**Border**: `border-top: 1px solid var(--color-border)` and `border-bottom` from bg change

### Layout

```
// The Ecosystem

Creation Skills builds the skills. Creation Rights controls the rules.

[EcosystemSplit: left column + right column]

---

// Programs

What C/Skills builds with your team

Structured programs designed to build the approved media skills...

[01 C/Skills Audit]  [02 Media Skill Packs]  [03 Creation Rights Rollout Readiness]
```

3-column card grid, 24px gap. Cards are full-height flex with space-between.

### Content

**Ecosystem Split**:
- Label: "The Ecosystem"
- Headline: "Creation Skills builds the skills. Creation Rights controls the rules."
- Left: "Creation Skills prepares the team" — Approved media skills, Creation flows, Operating files, Approval gates, Evidence requirements, Rollout plans
- Right: "Creation Rights controls the proof" — Brand Profiles, Rights & NILP, Metadata, Approved agents and models, Evidence events, Release Proof, Release Manifest, Release Destinations, Protected Records

**Programs section**:
- Label: "Programs"
- Headline: "What C/Skills builds with your team"
- Subhead: "Structured programs designed to build the approved media skills, creation flows, and rollout plans your team needs for governed media production."

**Cards** (sourced from `content/programs.ts`):

| # | Title | Description | Key Outcome | Link |
|---|---|---|---|---|
| 01 | C/Skills Audit | "A structured review of your current media creation process..." | Strategic Readiness Report | `/programs/cskills-audit` |
| 02 | Media Skill Packs | "Each Skill Pack defines what agents or models may do..." | Governed Skill Definitions | `/skill-packs` |
| 03 | Creation Rights Rollout Readiness | "A readiness program that prepares your team..." | Platform-Ready Operating Model | `/programs/creation-rights-rollout-readiness` |

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
- **Body**: "Our approach is designed around Creation Rights, ensuring every asset respects NILP (Name, Image, Likeness, and Persona), honors consent boundaries, and maintains clear provenance. Build creation flows that protect your brand, creators, and intellectual property from the ground up."
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

- **Headline**: "Ready to build the skills behind governed media creation?"
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
- `footerContent.columns` (3 link columns: Pages, Programs, Resources)
- `footerContent.legal` (5 legal links)

### Layout

```
[Logo]                    // PAGES           // PROGRAMS          // RESOURCES
A Creation Rights         Capabilities        C/Skills Audit      All Resources
Division                  How We Work         C/Skills Lab        Who We Help
                          Creation Rights     C/Skills Academy    FAQ
Description...            About               C/Skills OS         Book a C/Skills
                          Contact             Media Agent Packs   Review
                                              C/Skills Retainer

─────────────────────────────────────────────────────────────────────────────
(c) 2026 Creation Skills. A Creation Rights Division.    Privacy  Terms  ...
```
