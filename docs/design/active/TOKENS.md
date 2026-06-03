# TOKENS.md — C/Skills Design Token System

> Merged from: LTX Firecrawl extraction (observed values), Designlang tokens (structured), Stitch DESIGN.md (C/Skills adaptation)

---

## 1. Colors

### 1.1 Background Surfaces

Tonal layering system. Elevation is expressed through lightness, not shadows. Derived from LTX's `#0b0b0b` base and Stitch's surface tier.

```
--color-bg:                 #0d0d0d     /* Body background */
--color-surface-lowest:     #080808     /* Deepest — card insets, footer */
--color-surface-low:        #141414     /* Alternate section background */
--color-surface:            #1a1a1a     /* Container background, inputs */
--color-surface-high:       #222222     /* Hover fills, active states */
--color-surface-highest:    #2c2c2c     /* Tooltips, raised elements */
```

### 1.2 Text

Contrast ratios measured against `#0d0d0d`.

```
--color-text-primary:       #F5F5F5     /* 18.2:1 — headlines, titles */
--color-text-secondary:     #B0B0B0     /* 9.5:1  — body, descriptions */
--color-text-muted:         #808080     /* 5.3:1  — captions, footer links */
--color-text-faint:         #555555     /* 3.2:1  — decorative only */
```

### 1.3 Accent — Lime

```
--color-lime:               #B8F600     /* Primary accent */
--color-lime-hover:         #CFFF33     /* Hover state */
--color-lime-dim:           #8ABF00     /* Muted accent — borders, indicators */
--color-lime-text:          #0d0d0d     /* Text on lime fill */
```

### 1.4 Borders

LTX uses very dark borders (`#2e3445`). Stitch specifies `#1F1F1F`. C/Skills uses the Stitch value, which is darker and more restrained.

```
--color-border:             #1A1A1A     /* Default — cards, sections, dividers */
--color-border-hover:       #333333     /* Hover emphasis */
--color-border-accent:      rgba(184, 246, 0, 0.3)   /* Lime-tinted */
```

### 1.5 Feedback

```
--color-error:              #FF4040
--color-success:            #40FF80
```

---

## 2. Typography

### 2.1 Font Families

```
--font-sans:    "Hanken Grotesk", "Helvetica Neue", Arial, sans-serif
--font-mono:    "JetBrains Mono", "Fira Code", monospace
```

Google Fonts import:
```css
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
```

### 2.2 Type Scale

Derived from LTX's observed scale (55-75px headlines, 17-20px body) adapted through Stitch's named styles.

| Token | Size | Weight | Line Height | Letter Spacing | Font | Usage |
|---|---|---|---|---|---|---|
| `display-xl` | 84px | 300 | 1.08 | -0.02em | sans | Hero headline (desktop) |
| `display-lg` | 64px | 300 | 1.1 | -0.02em | sans | Final CTA headline |
| `display-md` | 56px | 300 | 1.15 | -0.02em | sans | Section editorial headlines |
| `display-sm` | 48px | 300 | 1.2 | -0.01em | sans | Hero headline (mobile) |
| `heading-lg` | 32px | 400 | 1.3 | -0.01em | sans | Card titles, sub-section heads |
| `heading-md` | 24px | 500 | 1.3 | 0 | sans | H3 headings |
| `heading-sm` | 20px | 500 | 1.3 | 0 | sans | Feature titles, FAQ questions |
| `body-lg` | 22px | 300 | 1.6 | 0.01em | sans | Hero subhead |
| `body-md` | 18px | 400 | 1.6 | 0.01em | sans | Section body text |
| `body-sm` | 14px | 400 | 1.5 | 0.02em | sans | Card descriptions, footer links |
| `body-xs` | 13px | 300 | 1.5 | 0 | sans | Value strip descriptions |
| `label-caps` | 12px | 500 | 1.0 | 0.1em | mono | `//` labels, column headers, metadata |
| `label-sm` | 10px | 500 | 1.0 | 0.1em | mono | NILP letter badges, tiny metadata |
| `nav` | 14px | 400 | 1.0 | 0 | sans | Navigation links |
| `button` | 14px | 500 | 1.0 | 0 | sans | Button labels |
| `button-lg` | 18px | 500 | 1.0 | 0 | sans | Large CTA buttons |

### 2.3 Weight Rules

From LTX Firecrawl: 938 of 1,057 elements use weight 400. Bold (700) appears only 15 times. This is the defining typography observation.

| Weight | Meaning | Usage |
|---|---|---|
| 300 | Display, light | Headlines 48px+, hero subhead, body-xs |
| 400 | Standard | Body text, nav, descriptions — the default |
| 500 | Medium emphasis | Buttons, H3, card titles, key labels |
| 600 | Strong emphasis | Used sparingly for section headings in subpages |
| 700 | Legacy / bold | Subpage headings only — not on homepage |

---

## 3. Spacing

### 3.1 Base Scale

```
--space-2:     2px
--space-4:     4px
--space-8:     8px
--space-12:    12px
--space-16:    16px
--space-24:    24px
--space-32:    32px
--space-40:    40px
--space-48:    48px
--space-64:    64px
--space-80:    80px
--space-96:    96px
--space-128:   128px
--space-160:   160px
--space-192:   192px
```

### 3.2 Semantic Spacing

| Token | Value (Desktop) | Value (Mobile) | Usage |
|---|---|---|---|
| `--section-padding` | 128px | 80px | Vertical padding for homepage sections |
| `--section-padding-lg` | 160px | 96px | Extra-large sections (hero, final CTA) |
| `--container-padding` | 80px | 24px | Horizontal margin outside max-width |
| `--content-gap` | 32px | 24px | Gap between items in grids |
| `--stack-gap` | 24px | 16px | Vertical gap in stacked content |

### 3.3 Page Margins

From LTX Firecrawl and Stitch combined:

| Breakpoint | Margin |
|---|---|
| Desktop (1200px+) | 80px (content centered in 1320px max) |
| Tablet (768-1199px) | 40px |
| Mobile (<768px) | 24px |

---

## 4. Border Radius

Two shape systems from Stitch DESIGN.md: pills for interactive elements, sharp for structural containers.

```
--radius-none:    0px         /* Structural containers, full-bleed sections */
--radius-sm:      4px         /* Cards, structural edges */
--radius-md:      8px         /* Input fields, small containers */
--radius-lg:      12px        /* Media blocks, image containers */
--radius-xl:      16px        /* Large media blocks, cinematic image */
--radius-full:    9999px      /* Buttons, tags, chips — pill shape */
```

### Shape Rules

| Element Type | Radius |
|---|---|
| Buttons (all variants) | `--radius-full` (pill) |
| Tags / chips | `--radius-full` (pill) |
| Cards | `--radius-sm` to `--radius-lg` |
| Media containers | `--radius-lg` to `--radius-xl` |
| Sections | `--radius-none` |
| Input fields | `--radius-md` |

---

## 5. Shadows

On dark backgrounds, traditional shadows are ineffective. LTX uses zero shadows on cards. Stitch uses tonal layering + borders instead.

```
--shadow-none:         none                                    /* Default for cards */
--shadow-glow-lime:    0 0 20px rgba(184, 246, 0, 0.1)       /* Hover glow on cards */
--shadow-glow-lime-lg: 0 0 40px rgba(184, 246, 0, 0.2)       /* CTA button glow */
```

### Elevation Strategy

| Level | Method | Example |
|---|---|---|
| Base (0) | Body background `#0d0d0d` | Page body |
| Raised (1) | Surface color + 1px border | Cards, containers |
| Hover (2) | Border color shift to lime + glow shadow | Card hover, button hover |
| Floating (3) | Solid surface + backdrop-blur | Header, mobile menu |

---

## 6. Motion

From LTX Firecrawl motion analysis. C/Skills should be restrained — most interactions are subtle color/opacity shifts.

### 6.1 Duration

```
--duration-fast:     150ms      /* Hover color shifts, focus states */
--duration-base:     250ms      /* Standard transitions */
--duration-slow:     450ms      /* Image hover, card transitions */
--duration-slower:   700ms      /* Media fade-in, hero entrance */
```

### 6.2 Easing

```
--ease-default:      ease
--ease-out:          cubic-bezier(0.215, 0.61, 0.355, 1)      /* Standard ease-out */
--ease-smooth:       cubic-bezier(0.165, 0.84, 0.44, 1)       /* Smooth deceleration */
--ease-spring:       cubic-bezier(0.16, 1, 0.3, 1)            /* Springy, for emphasis */
```

### 6.3 Motion Philosophy

- **No scroll-triggered animations**. No fade-in, slide-up, or parallax effects.
- **No decorative motion**. No floating particles, animated backgrounds, or pulsing elements.
- **Functional transitions only**. Hover states, focus rings, menu open/close.
- **Media hover**: Subtle opacity shift (0.9 to 1.0) on cinematic image blocks.

---

## 7. Breakpoints

```
--bp-mobile:     480px      /* Small phones */
--bp-tablet:     768px      /* Tablet, small desktop */
--bp-desktop:    1024px     /* Standard desktop, nav collapse point */
--bp-wide:       1200px     /* Wide desktop, full 12-column grid */
--bp-max:        1440px     /* Maximum content stretch */
```

### Responsive Rules

| Element | Desktop (1024px+) | Tablet (768-1023px) | Mobile (<768px) |
|---|---|---|---|
| Grid columns | 12 | 8 | 4 |
| Hero headline | 84px | 56px | 36-48px |
| Section padding | 128px | 80px | 64px |
| Card grid | 3-col | 2-col | 1-col |
| Nav | Inline centered | Inline (condensed) | Hamburger overlay |
| Header CTA | Visible (pill) | Hidden | In mobile menu |

---

## 8. Z-Index Layers

```
--z-base:        0          /* Default content */
--z-sticky:      10         /* Sticky elements (announcement bars) */
--z-header:      100        /* Site header */
--z-overlay:     200        /* Mobile menu overlay */
--z-modal:       300        /* Modal dialogs */
```

---

## 9. CSS Custom Properties (Full Listing)

The following should be defined in `styles/tokens.css`:

```css
:root {
  /* Backgrounds */
  --color-bg: #0d0d0d;
  --color-surface-lowest: #080808;
  --color-surface-low: #141414;
  --color-surface: #1a1a1a;
  --color-surface-high: #222222;
  --color-surface-highest: #2c2c2c;

  /* Text */
  --color-text-primary: #F5F5F5;
  --color-text-secondary: #B0B0B0;
  --color-text-muted: #808080;
  --color-text-faint: #555555;

  /* Accent */
  --color-lime: #B8F600;
  --color-lime-hover: #CFFF33;
  --color-lime-dim: #8ABF00;
  --color-lime-text: #0d0d0d;

  /* Borders */
  --color-border: #1A1A1A;
  --color-border-hover: #333333;

  /* Feedback */
  --color-error: #FF4040;
  --color-success: #40FF80;

  /* Typography */
  --font-sans: "Hanken Grotesk", "Helvetica Neue", Arial, sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;

  /* Spacing */
  --space-4: 4px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-24: 24px;
  --space-32: 32px;
  --space-40: 40px;
  --space-48: 48px;
  --space-64: 64px;
  --space-80: 80px;
  --space-96: 96px;
  --space-128: 128px;

  /* Radius */
  --radius-none: 0px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-glow-lime: 0 0 20px rgba(184, 246, 0, 0.1);
  --shadow-glow-lime-lg: 0 0 40px rgba(184, 246, 0, 0.2);

  /* Motion */
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 450ms;
  --ease-default: ease;
  --ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-smooth: cubic-bezier(0.165, 0.84, 0.44, 1);

  /* Layout */
  --max-width: 1320px;
  --max-width-narrow: 800px;
  --header-height: 80px;

  /* Z-index */
  --z-header: 100;
  --z-overlay: 200;
  --z-modal: 300;
}
```
