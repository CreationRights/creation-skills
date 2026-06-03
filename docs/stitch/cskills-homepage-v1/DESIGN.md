---
name: Cinematic Intellect
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c3caac'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#8d9479'
  outline-variant: '#434933'
  surface-tint: '#a1d800'
  primary: '#ffffff'
  on-primary: '#263500'
  primary-container: '#b8f600'
  on-primary-container: '#506e00'
  inverse-primary: '#4b6700'
  secondary: '#afcfa9'
  on-secondary: '#1c361b'
  secondary-container: '#345032'
  on-secondary-container: '#a1c19b'
  tertiary: '#ffffff'
  on-tertiary: '#243240'
  tertiary-container: '#d6e4f7'
  on-tertiary-container: '#586676'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b8f600'
  primary-fixed-dim: '#a1d800'
  on-primary-fixed: '#141f00'
  on-primary-fixed-variant: '#384e00'
  secondary-fixed: '#cbebc4'
  secondary-fixed-dim: '#afcfa9'
  on-secondary-fixed: '#062108'
  on-secondary-fixed-variant: '#324d30'
  tertiary-fixed: '#d6e4f7'
  tertiary-fixed-dim: '#bac8da'
  on-tertiary-fixed: '#0f1d2a'
  on-tertiary-fixed-variant: '#3b4857'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
  text-primary: '#F5F5F5'
  text-muted: '#999999'
  surface-card: '#0A0A0A'
  border-low-contrast: '#1F1F1F'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 84px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '300'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  margin-desktop: 80px
  margin-tablet: 40px
  margin-mobile: 24px
  gutter: 32px
  section-gap: 160px
---

## Brand & Style

The design system is engineered for a "Creation Rights Division," demanding an aesthetic that feels both authoritative and avant-garde. It targets high-level creators and legal-tech professionals who value precision and cinematic quality.

The visual style is a blend of **Minimalism** and **Modern Corporate**, leaning heavily into editorial rhythms. It prioritizes vast negative space and light-weight, oversized typography to convey a sense of "quiet luxury" and technical mastery. The interface should feel like a high-end film production slate—functional, high-contrast, and impeccably organized without the clutter of traditional dashboards.

## Colors

This design system utilizes a **true-dark foundation**. The primary background is absolute black to allow cinematic media blocks to blend seamlessly into the hardware bezel.

- **Primary Accent:** A high-visibility lime green (#BFFF00) is used with extreme restraint for call-to-actions, slashes, and critical status indicators.
- **Secondary Accent:** A muted sage (#A9C9A3) serves as a softer alternative for decorative elements and secondary highlights.
- **Typography:** Headlines and primary data points use an off-white (#F5F5F5) to reduce eye strain compared to pure white, while body text is pushed back into a muted gray (#999999) to maintain hierarchy.

## Typography

The typography strategy focuses on "Refined Geometry." By using **Hanken Grotesk**, we achieve a technical yet premium feel.

- **Headlines:** Must remain light (Weight 300-400) even at large scales to avoid a "heavy" or aggressive look. Spacious letter spacing is encouraged for sub-headlines.
- **Labels:** Use **JetBrains Mono** for technical labels and metadata to lean into the "Skills/Creation Rights" technical aspect. All labels should be prefixed or suffixed with the `//` notation (e.g., `// DIRECTORY`).
- **Rhythm:** Large display text should use tight tracking, while smaller labels should use expanded tracking for maximum legibility against the dark background.

## Layout & Spacing

The layout follows an **editorial rhythm** with a focus on cinematic scale. It uses a 12-column fixed grid for desktop content (max-width 1440px) but allows media blocks and "Hero" sections to break the grid and go full-bleed.

- **Whitespace:** Use generous vertical gaps (section-gap) to separate distinct thoughts. 
- **Breakpoints:**
  - **Desktop (1200px+):** 80px margins, 12 columns.
  - **Tablet (768px - 1199px):** 40px margins, 8 columns.
  - **Mobile (Up to 767px):** 24px margins, 4 columns.
- **Media:** Images and video blocks should prioritize a 21:9 or 16:9 aspect ratio to maintain the "cinematic" directive.

## Elevation & Depth

In a premium dark mode, traditional shadows are ineffective. Instead, this system uses **Tonal Layers** and **Low-contrast outlines**.

- **Surface Tiering:** The base layer is #000000. Cards and containers use a slightly elevated #0A0A0A.
- **Outlines:** Instead of shadows, use 1px solid borders in #1F1F1F to define container boundaries. This creates a "blueprint" or "technical" aesthetic.
- **Interaction:** On hover, a subtle inner-glow or a change in border color to the primary accent lime green can be used to indicate focus.

## Shapes

The shape language is a contrast between **pill-shaped interactive elements** and **sharp-edged structural containers**.

- **Actionable Items:** Buttons and tags use the `rounded-xl` (pill-shaped) setting to create a friendly, approachable touchpoint amidst a technical environment.
- **Structural Items:** Cards, media containers, and sections use sharp or very slightly softened corners (0px to 4px) to maintain a professional, architectural feel.

## Components

- **Header (Three-Zone):** Inspired by LTX, the header features a left-aligned logo, center-aligned utility links, and right-aligned primary actions (Log In / Contact).
- **CTAs:** Buttons are exclusively pill-shaped. The primary CTA uses a solid Lime Green fill with black text. The secondary CTA is a thin-bordered ghost button with White text.
- **Cards:** Thin-bordered (#1F1F1F) with no background fill or very dark (#0A0A0A) fill. Ensure content inside has generous padding (at least 32px).
- **Footer:** A restrained multi-column layout. Use `label-caps` for column headers and `body-sm` for links.
- **Inputs:** Minimalist bottom-border only or very thin-outlined boxes. Use the `//` label style above every input field.
- **Chips/Tags:** Small, pill-shaped, using the secondary sage color or a low-opacity version of the lime green for categorization.