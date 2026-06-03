# Design Language: LTX | The Top Open-Source AI Video Generation Model

> Extracted from `https://ltx.io` on June 2, 2026
> 1057 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#ff72b2` | rgb(255, 114, 178) | hsl(333, 100%, 72%) | 1 |
| Secondary | `#3860be` | rgb(56, 96, 190) | hsl(222, 54%, 48%) | 12 |
| Accent | `#468254` | rgb(70, 130, 84) | hsl(134, 30%, 39%) | 1 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#333333` | hsl(0, 0%, 20%) | 957 |
| `#f9f9f9` | hsl(0, 0%, 98%) | 746 |
| `#000000` | hsl(0, 0%, 0%) | 291 |
| `#999999` | hsl(0, 0%, 60%) | 64 |
| `#555555` | hsl(0, 0%, 33%) | 27 |
| `#1f1f24` | hsl(240, 7%, 13%) | 20 |
| `#0b0b0b` | hsl(0, 0%, 4%) | 15 |
| `#dddddd` | hsl(0, 0%, 87%) | 13 |
| `#7d87a0` | hsl(223, 16%, 56%) | 6 |
| `#f4f4f4` | hsl(0, 0%, 96%) | 4 |
| `#7a7c81` | hsl(223, 3%, 49%) | 4 |
| `#2e3445` | hsl(224, 20%, 23%) | 2 |

### Background Colors

Used on large-area elements: `#0b0b0b`, `#000000`, `#1f1f24`

### Text Colors

Text color palette: `#000000`, `#333333`, `#fdfdfd`, `#f9f9f9`, `#999999`, `#0b0b0b`, `#0000ee`, `#ffffff`, `#7a7c81`, `#e0e0e0`

### Gradients

```css
background-image: linear-gradient(125deg, rgb(169, 139, 217), rgb(109, 40, 217), rgb(25, 77, 249));
```

```css
background-image: linear-gradient(90deg, rgb(11, 11, 11) 11%, rgba(11, 16, 43, 0));
```

```css
background-image: linear-gradient(rgba(0, 0, 0, 0) 7%, rgba(0, 0, 0, 0.7) 67%);
```

```css
background-image: linear-gradient(13deg, rgba(11, 11, 11, 0.8), rgba(11, 11, 11, 0) 75%);
```

```css
background-image: linear-gradient(225deg, rgba(0, 0, 0, 0) 7%, rgba(0, 0, 0, 0.7) 92%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#333333` | text, border | 957 |
| `#f9f9f9` | background, text, border | 746 |
| `#000000` | text, border, background | 291 |
| `#999999` | text, border | 64 |
| `#555555` | text, border | 27 |
| `#1f1f24` | background, border | 20 |
| `#0b0b0b` | background, text | 15 |
| `#dddddd` | background, border, text | 13 |
| `#0000ee` | text, border | 12 |
| `#3860be` | text, border, background | 12 |
| `#7d87a0` | border, background | 6 |
| `#f4f4f4` | background | 4 |
| `#2b61ff` | border | 4 |
| `#7a7c81` | text, border, background | 4 |
| `#2e3445` | border, background | 2 |
| `#0a7da4` | border | 1 |
| `#ff72b2` | background | 1 |
| `#003cf0` | border | 1 |
| `#636367` | border | 1 |
| `#32ae88` | border | 1 |
| `#468254` | background | 1 |
| `#d1d1d1` | border | 1 |
| `#bbbbbb` | border | 1 |

## Typography

### Font Families

- **Aeonik** — used for all (780 elements)
- **Miriam Libre** — used for all (148 elements)
- **Times** — used for body (28 elements)
- **Inconsolata** — used for body (15 elements)
- **Arial** — used for all (9 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 75.2px | 4.7rem | 400 | 97.76px | normal | p, div |
| 56px | 3.5rem | 400 | 67.2px | -1.12px | h2 |
| 55.04px | 3.44rem | 400 | 63.296px | -1.28px | h1 |
| 40px | 2.5rem | 400 | 20px | normal | div, svg, path |
| 36px | 2.25rem | 400 | 39.6px | normal | div |
| 32px | 2rem | 400 | 43.2px | 0.6px | div |
| 28.8px | 1.8rem | 400 | 40.32px | 0.8px | p, div, br |
| 28px | 1.75rem | 500 | 30.8px | normal | h3 |
| 25.6px | 1.6rem | 400 | 35.84px | 0.8px | p, br, a |
| 24px | 1.5rem | 400 | 28.8px | normal | div, a, svg, path |
| 21.92px | 1.37rem | 600 | 26.304px | normal | h2 |
| 20.8px | 1.3rem | 300 | 31.2px | 0.48px | p, h3 |
| 19.2px | 1.2rem | 300 | 26.88px | 0.8px | p, h2 |
| 17.6px | 1.1rem | 400 | 20px | -0.16px | a, div, span, svg |
| 16px | 1rem | 400 | normal | normal | html, head, style, meta |

### Heading Scale

```css
h2 { font-size: 56px; font-weight: 400; line-height: 67.2px; }
h1 { font-size: 55.04px; font-weight: 400; line-height: 63.296px; }
h3 { font-size: 28px; font-weight: 500; line-height: 30.8px; }
h2 { font-size: 24px; font-weight: 400; line-height: 28.8px; }
h2 { font-size: 21.92px; font-weight: 600; line-height: 26.304px; }
h3 { font-size: 20.8px; font-weight: 300; line-height: 31.2px; }
h2 { font-size: 19.2px; font-weight: 300; line-height: 26.88px; }
h3 { font-size: 16px; font-weight: 400; line-height: normal; }
h4 { font-size: 14.4px; font-weight: 600; line-height: 17.28px; }
h3 { font-size: 14px; font-weight: 400; line-height: 20px; }
h4 { font-size: 13.2px; font-weight: 600; line-height: 19.8px; }
h5 { font-size: 13.12px; font-weight: 700; line-height: 18.368px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`400` (938x), `500` (77x), `600` (21x), `700` (15x), `300` (6x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-35 | 35px | 2.1875rem |
| spacing-38 | 38px | 2.375rem |
| spacing-48 | 48px | 3rem |
| spacing-64 | 64px | 4rem |
| spacing-72 | 72px | 4.5rem |
| spacing-80 | 80px | 5rem |
| spacing-192 | 192px | 12rem |
| spacing-208 | 208px | 13rem |
| spacing-245 | 245px | 15.3125rem |
| spacing-312 | 312px | 19.5rem |
| spacing-367 | 367px | 22.9375rem |
| spacing-392 | 392px | 24.5rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 2px | 9 |
| md | 8px | 20 |
| xl | 17px | 1 |
| xl | 20px | 3 |
| full | 50px | 8 |
| full | 100px | 8 |
| full | 130px | 1 |
| full | 800px | 10 |

## Box Shadows

**sm** — blur: 4px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px;
```

**md** — blur: 5px
```css
box-shadow: rgb(199, 197, 199) -3px -3px 5px -2px;
```

**md** — blur: 12px
```css
box-shadow: rgb(199, 197, 199) 0px 0px 12px 2px;
```

**lg** — blur: 18px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 18px 0px;
```

## CSS Custom Properties

### Colors

```css
--_ltx-brand-colors---ltx-grey-light: #999;
--_ltx-brand-colors---ltx-black: #0b0b0b;
--_theme---text-secondary: var(--_ltx-brand-colors---ltx-grey-light);
--_ltx-brand-colors---ltx-grey-medium: #636367;
--_ltx-brand-colors---ltx-gray-blue-very-light: #d4dae8;
--_ltx-brand-colors---ltx-grey-blue-dark: #2e3445;
--_ltx-brand-colors---ltx-grey-dark: #1f1f24;
--_ltx-brand-colors---ltx-grey-blue-light: #868ea5;
--_ltx-brand-colors---ltx-white: #f9f9f9;
--_ltx-brand-colors---ltx-off-white: #e7e8eb;
--_theme---card-secondary: var(--_ltx-brand-colors---ltx-grey-dark);
--_theme---navbar-bg: #0b0b0b8c;
--_theme---border-trans: var(--_ltx-brand-colors---ltx-grey-blue-dark);
--_theme---border: var(--_ltx-brand-colors---ltx-white);
--_theme---card-bg: var(--_ltx-brand-colors---ltx-grey-blue-dark);
--_theme---but-glass-bg: #f9f9f926;
--_theme---icon-color<deleted|variable-70a45cf2-dc92-338f-e8f0-3970fb59e826>: var(--_ltx-brand-colors---ltx-white);
--_theme---but-border: var(--_ltx-brand-colors---ltx-white);
--_theme---but-border-hover: var(--_ltx-brand-colors---ltx-white);
--_theme---but-bg-hover: var(--_ltx-brand-colors---ltx-white);
--_theme---dd-menu-item-bg-hover: #868ea526;
--_theme---dd-menu-bg: var(--_ltx-brand-colors---ltx-grey-dark);
--_ltx-brand-colors---ltx-white-blue-tint: #ebedf2;
--_ltx-brand-colors---ltx-purple-light: #a98bd9;
--_ltx-brand-colors---ltx-gray: #eee;
--_ltx-brand-colors---ltx-gray-blue-medium: #bbc0cb;
--_button-style---border: white;
--_button-style---border-hover: var(--_ltx-brand-colors---ltx-purple-light);
--_ltx-brand-colors---ltx-purple-dark: #6d28d9;
--_theme---but-glass-bg-hover: #f9f9f926;
```

### Typography

```css
--_theme---text: var(--_ltx-brand-colors---ltx-white);
--_theme---but-text: var(--_ltx-brand-colors---ltx-white);
--_theme---but-text-hover: var(--_ltx-brand-colors---ltx-black);
--_button-style---text: white;
--_button-style---text-hover: var(--_ltx-brand-colors---ltx-purple-light);
```

### Other

```css
--purple-dark: #aa5fff;
--black: #0b0b0b;
--_theme---background: var(--_ltx-brand-colors---ltx-black);
--purple-neon: #b244f7;
--grey-light: #636367;
--purple-light: #b97fde;
--white: white;
--grey-dark: #1f1f24;
--grey-medium: #413e45;
--flash-white: #f0f0f0;
--_licensing---lc-purple: #622988;
--_theme---but-background-2: #0b0b0b00;
--_theme---but-background: var(--_ltx-brand-colors---ltx-white);
--_nld-contest---nld-green: #4eef71;
--_licensing---lc-green: #54d475;
--_licensing---lc-purple2: #a150e3;
--_button-style---background: #fff0;
--_button-style---icon: white;
--_button-style---background-hover: white;
--_button-style---icon-hover: var(--purple-light);
```

### Dependencies

```css
--_theme---text: --_ltx-brand-colors---ltx-white;
--_theme---text-secondary: --_ltx-brand-colors---ltx-grey-light;
--_theme---background: --_ltx-brand-colors---ltx-black;
--_theme---card-secondary: --_ltx-brand-colors---ltx-grey-dark;
--_theme---border-trans: --_ltx-brand-colors---ltx-grey-blue-dark;
--_theme---border: --_ltx-brand-colors---ltx-white;
--_theme---card-bg: --_ltx-brand-colors---ltx-grey-blue-dark;
--_theme---but-text: --_ltx-brand-colors---ltx-white;
--_theme---icon-color<deleted|variable-70a45cf2-dc92-338f-e8f0-3970fb59e826>: --_ltx-brand-colors---ltx-white;
--_theme---but-border: --_ltx-brand-colors---ltx-white;
--_theme---but-border-hover: --_ltx-brand-colors---ltx-white;
--_theme---but-bg-hover: --_ltx-brand-colors---ltx-white;
--_theme---but-text-hover: --_ltx-brand-colors---ltx-black;
--_theme---but-background: --_ltx-brand-colors---ltx-white;
--_theme---dd-menu-bg: --_ltx-brand-colors---ltx-grey-dark;
--_button-style---border-hover: --_ltx-brand-colors---ltx-purple-light;
--_button-style---text-hover: --_ltx-brand-colors---ltx-purple-light;
--_button-style---icon-hover: --purple-light;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| 400px | 400px | min-width |
| sm | 425px | max-width |
| sm | 426px | min-width |
| sm | 479px | max-width |
| sm | 530px | max-width |
| 550px | 550px | max-width |
| sm | 600px | max-width |
| sm | 640px | max-width |
| md | 767px | max-width |
| md | 768px | min-width |
| md | 769px | min-width |
| 890px | 890px | min-width |
| 896px | 896px | max-width |
| 897px | 897px | min-width |
| lg | 991px | max-width |
| lg | 992px | min-width |
| lg | 1023px | max-width |
| lg | 1024px | min-width |
| xl | 1280px | min-width |
| 1920px | 1920px | min-width |

## Transitions & Animations

**Easing functions:** `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`

**Durations:** `0.4s`, `0.2s`, `0.3s`, `0.35s`, `1.05s`, `1.1s`, `0.12s`, `0.45s`, `0.55s`, `2s`, `0.1s`

### Common Transitions

```css
transition: all;
transition: left 0.4s ease-in, right 0.4s ease-in, top 0.4s ease-in, visibility 0.4s ease-in;
transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
transition: transform 0.2s;
transition: 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
transition: 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
transition: grid-template-columns 1.05s cubic-bezier(0.16, 1, 0.3, 1);
transition: height 1.05s cubic-bezier(0.16, 1, 0.3, 1);
transition: opacity 0.2s;
transition: grid-template-rows 1.1s cubic-bezier(0.16, 1, 0.3, 1);
```

### Keyframe Animations

**spin**
```css
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

**onetrust-fade-in**
```css
@keyframes onetrust-fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

**slide-down-custom**
```css
@keyframes slide-down-custom {
  0% {  }
  100% { bottom: 0px; }
}
```

**slide-down-custom**
```css
@keyframes slide-down-custom {
  0% {  }
  100% { bottom: 0px; }
}
```

**gradient-shift**
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

**scroll**
```css
@keyframes scroll {
  0% { transform: translateX(0px); }
  100% { transform: translateX(-100%); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (34 instances)

```css
.button {
  background-color: rgba(249, 249, 249, 0);
  color: rgb(249, 249, 249);
  font-size: 17.6px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 800px;
}
```

### Cards (62 instances)

```css
.card {
  background-color: rgb(0, 0, 0);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (8 instances)

```css
.input {
  background-color: rgb(255, 255, 255);
  color: rgb(51, 51, 51);
  border-color: rgb(51, 51, 51);
  border-radius: 0px;
  font-size: 16px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (76 instances)

```css
.link {
  color: rgb(249, 249, 249);
  font-size: 17.6px;
  font-weight: 400;
}
```

### Navigation (62 instances)

```css
.navigatio {
  background-color: rgba(46, 52, 69, 0);
  color: rgb(249, 249, 249);
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
}
```

### Footer (46 instances)

```css
.foote {
  background-color: rgb(11, 11, 11);
  color: rgb(249, 249, 249);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 12.8px;
}
```

### Modals (6 instances)

```css
.modal {
  background-color: rgb(239, 239, 239);
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Dropdowns (78 instances)

```css
.dropdown {
  background-color: rgba(46, 52, 69, 0);
  border-radius: 0px;
  border-color: rgb(249, 249, 249);
  padding-top: 0px;
}
```

### Tabs (6 instances)

```css
.tab {
  background-color: rgb(244, 244, 244);
  color: rgb(51, 51, 51);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(51, 51, 51);
  border-radius: 0px;
}
```

### Switches (16 instances)

```css
.switche {
  background-color: rgb(244, 244, 244);
  border-radius: 0px;
  border-color: rgb(249, 249, 249);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 9 instances, 3 variants

**Variant 1** (2 instances)

```css
  background: rgb(249, 249, 249);
  color: rgb(11, 11, 11);
  padding: 11.2px 20.8px 11.2px 20.8px;
  border-radius: 800px;
  border: 1px solid rgb(249, 249, 249);
  font-size: 15.2px;
  font-weight: 500;
```

**Variant 2** (6 instances)

```css
  background: rgba(249, 249, 249, 0);
  color: rgb(249, 249, 249);
  padding: 17.6px 28.8px 17.6px 28.8px;
  border-radius: 800px;
  border: 1px solid rgb(249, 249, 249);
  font-size: 12.8px;
  font-weight: 500;
```

**Variant 3** (1 instance)

```css
  background: rgba(11, 11, 11, 0);
  color: rgb(249, 249, 249);
  padding: 16px 28.8px 16px 28.8px;
  border-radius: 800px;
  border: 1px solid rgb(249, 249, 249);
  font-size: 17.6px;
  font-weight: 500;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

### Card — 5 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgb(0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 8px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

**Variant 2** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

### Card — 8 instances, 2 variants

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

**Variant 2** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(11, 11, 11);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

### Card — 8 instances, 3 variants

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

**Variant 2** (6 instances)

```css
  background: rgb(0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 8px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

**Variant 3** (1 instance)

```css
  background: rgb(0, 0, 0);
  color: rgb(249, 249, 249);
  padding: 0px 0px 0px 0px;
  border-radius: 8px;
  border: 0px none rgb(249, 249, 249);
  font-size: 14px;
  font-weight: 400;
```

### Card — 6 instances, 2 variants

**Variant 1** (5 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(249, 249, 249);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(249, 249, 249);
  font-size: 14px;
  font-weight: 400;
```

### Card — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

### Card — 6 instances, 1 variant

**Variant 1** (6 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(249, 249, 249);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(249, 249, 249);
  font-size: 28px;
  font-weight: 500;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

### Card — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(249, 249, 249);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(249, 249, 249);
  font-size: 17.6px;
  font-weight: 400;
```

### Card — 6 instances, 2 variants

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

**Variant 2** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(249, 249, 249);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(249, 249, 249);
  font-size: 14px;
  font-weight: 400;
```

### Card — 4 instances, 2 variants

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(249, 249, 249);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(249, 249, 249);
  font-size: 14px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

### Card — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
```

### Button — 4 instances, 1 variant

**Variant 1** (4 instances)

```css
  background: rgba(247, 247, 251, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 8px;
  border: 0px solid rgb(43, 97, 255);
  font-size: 14px;
  font-weight: 400;
```

### Button — 3 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgb(31, 31, 36);
  color: rgb(224, 224, 224);
  padding: 12px 0px 12px 0px;
  border-radius: 2px;
  border: 0px none rgb(255, 255, 255);
  font-size: 13.008px;
  font-weight: 600;
```

**Variant 2** (2 instances)

```css
  background: rgb(224, 224, 224);
  color: rgb(0, 0, 0);
  padding: 9.756px 19.512px 9.756px 19.512px;
  border-radius: 130.08px;
  border: 2px solid rgb(224, 224, 224);
  font-size: 13.008px;
  font-weight: 600;
```

## Layout System

**11 grid containers** and **239 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 537.6px | 0px |
| 1440px | 0px |
| 100% | 0px |
| 768px | 0px |
| 912px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 2-column | 6x |
| 1-column | 3x |
| 3-column | 2x |

### Grid Templates

```css
grid-template-columns: 503.656px 359.766px 323.781px;
gap: 8px;
grid-template-columns: 697.281px 441.938px;
gap: 64px;
grid-template-columns: 369.062px 369.078px 369.062px;
gap: 64px 48px;
grid-template-columns: 561.609px 561.609px;
gap: 80px;
grid-template-columns: 748.812px 374.406px;
gap: 80px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 162x |
| column/nowrap | 76x |
| row/wrap | 1x |

**Gap values:** `0px normal`, `12px`, `14.4px`, `16px`, `24px`, `32px`, `48px`, `64px`, `64px 48px`, `72px`, `80px`, `8px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 10 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#ffffff` | `#1f1f24` | 16.41:1 | AAA |
| `#0b0b0b` | `#f9f9f9` | 18.69:1 | AAA |
| `#000000` | `#efefef` | 18.26:1 | AAA |
| `#e0e0e0` | `#1f1f24` | 12.43:1 | AAA |
| `#000000` | `#e0e0e0` | 15.91:1 | AAA |

## Design System Score

**Overall: 78/100 (Grade: C)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 40/100 |
| Spacing System | 85/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 80/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 5 font families — consider limiting to 2 (heading + body)
- 27 distinct font sizes — consider a tighter type scale
- 152 !important rules — prefer specificity over overrides
- 89% of CSS is unused — consider purging
- 13342 duplicate CSS declarations

## Gradients

**5 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 125deg | 3 | bold |
| linear | 90deg | 2 | brand |
| linear | — | 2 | brand |
| linear | 13deg | 2 | brand |
| linear | 225deg | 2 | brand |

```css
background: linear-gradient(125deg, rgb(169, 139, 217), rgb(109, 40, 217), rgb(25, 77, 249));
background: linear-gradient(90deg, rgb(11, 11, 11) 11%, rgba(11, 16, 43, 0));
background: linear-gradient(rgba(0, 0, 0, 0) 7%, rgba(0, 0, 0, 0.7) 67%);
background: linear-gradient(13deg, rgba(11, 11, 11, 0.8), rgba(11, 11, 11, 0) 75%);
background: linear-gradient(225deg, rgba(0, 0, 0, 0) 7%, rgba(0, 0, 0, 0.7) 92%);
```

## Z-Index Map

**18 unique z-index values** across 4 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 1000,2147483647 | div.n.a.v.b.a.r.1.2._.c.o.m.p.o.n.e.n.t. .w.-.n.a.v, div, div.o.t.F.l.a.t. .b.o.t.t.o.m. .o.t.-.w.o.-.t.i.t.l.e. .v.e.r.t.i.c.a.l.-.a.l.i.g.n.-.c.o.n.t.e.n.t |
| dropdown | 100,999 | div.n.a.v.b.a.r.-.l.t.x. .c.c.-.g.l.a.s.s, nav.l.t.x.-.d.d.-.m.e.n.u. .i.s.-.l.o.g.o. .w.-.d.r.o.p.d.o.w.n.-.l.i.s.t, div.l.t.x.-.d.d.-.m.e.n.u. .c.c.-.l.o.g.o.-.d.d. .c.c.-.h.i.d.e |
| sticky | 10,10 | div.f.l.e.x.-.a.l.i.g.n.-.l.e.f.t. .c.c.-.b.a.n.n.e.r |
| base | -100,5 | video, video, video |

**Issues:**
- [object Object]

## SVG Icons

**7 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 2 |
| sm | 1 |
| lg | 3 |
| xl | 1 |

**Icon colors:** `currentColor`, `#0B0B0B`, `#F0F2F7`, `currentcolor`, `white`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| webflow-icons | self-hosted | 400 | normal |
| Brownllweb | self-hosted | 300, 400, 500, 700 | normal, italic |
| Aeonik | self-hosted | 300, 400, 600 | italic, normal |
| field-gothic-wide | self-hosted | 400, 500, 600, 700 | normal |
| Inconsolata | google-fonts | 400, 700 | normal |

**Google Fonts URL:** `https://fonts.googleapis.com/`

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 42 | objectFit: fill, borderRadius: 0px, shape: square |
| general | 2 | objectFit: cover, borderRadius: 0px, shape: square |
| gallery | 1 | objectFit: cover, borderRadius: 0px, shape: square |
| avatar | 1 | objectFit: cover, borderRadius: 100%, shape: circular |

**Aspect ratios:** 3.59:1 (6x), 3.98:1 (6x), 4.31:1 (3x), 2.5:1 (3x), 3:2 (3x), 6.31:1 (3x), 4.85:1 (3x), 3.36:1 (3x)

## Motion Language

**Feel:** responsive · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `100ms` | 100 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `lg` | `450ms` | 450 |
| `xl` | `1.05s` | 1050 |
| `xxl` | `2s` | 2000 |

### Easing Families

- **ease-in-out** (4 uses) — `ease`
- **ease-out** (57 uses) — `cubic-bezier(0.215, 0.61, 0.355, 1)`, `cubic-bezier(0.165, 0.84, 0.44, 1)`, `cubic-bezier(0.16, 1, 0.3, 1)`
- **custom** (26 uses) — `cubic-bezier(0.455, 0.03, 0.515, 0.955)`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `onetrust-fade-in` | fade | opacity | 2 |
| `gradient-shift` | pulse | background-position | 1 |
| `scroll` | slide-x | transform | 3 |

## Component Anatomy

### card — 55 instances

**Variants:** outline

| variant | count | sample label |
|---|---|---|
| default | 52 | <!-- Start of: Hero Poster Switch (video |
| outline | 3 |  |

### button — 19 instances

**Slots:** label
**Variants:** link
**Sizes:** small

| variant | count | sample label |
|---|---|---|
| default | 18 | Talk to Sales |
| link | 1 | Your Opt-Out Rights |

## Brand Voice

**Tone:** neutral · **Pronoun:** we→you · **Headings:** Title Case (tight)

### Top CTA Verbs

- **talk** (4)
- **learn** (3)
- **explore** (3)
- **join** (1)
- **try** (1)
- **your** (1)
- **accept** (1)

### Button Copy Patterns

- "talk to sales" (4×)
- "learn more" (3×)
- "huggingface
github
join the discussion" (1×)
- "explore ltx 2.3
explore ltx desktop" (1×)
- "explore ltx 2.3" (1×)
- "explore ltx desktop" (1×)
- "try ltx now" (1×)
- "your opt-out rights" (1×)
- "accept cookies" (1×)

### Sample Headings

> Open Creative Intelligence, Built for Production
> Build, Create, and Scale with LTX
> LTX Models
> LTX Studio
> API
> Research
> API
> Open Source
> Academic Collaboration
> LTX-2.3 and What We Built on It

## Page Intent

**Type:** `landing` (confidence 0.29)
**Description:** LTX brings together open video models, a full creative studio, and a developer API, everything you need to build and ship AI video at scale.

Alternates: legal (0.4), blog-post (0.35)

## Section Roles

Reading order (top→bottom): nav → nav → nav → nav → nav → nav → content → content → content → nav → nav → hero → content → logo-wall → content → cta → steps → cta → cta → testimonial → faq → content

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.9 |
| 1 | nav | — | 0.9 |
| 2 | nav | — | 0.9 |
| 3 | nav | — | 0.9 |
| 4 | nav | — | 0.9 |
| 5 | nav | — | 0.9 |
| 6 | nav | — | 0.9 |
| 7 | nav | — | 0.9 |
| 8 | hero | Open Creative Intelligence, Built for Production | 0.85 |
| 9 | content | — | 0.3 |
| 10 | logo-wall | — | 0.85 |
| 11 | content | — | 0.3 |
| 12 | cta | Build, Create, and Scale with LTX | 0.75 |
| 13 | steps | Research | 0.75 |
| 14 | cta | LTX-2.3 and What We Built on It | 0.75 |
| 15 | cta | — | 0.75 |
| 16 | testimonial | Success, Engineered Together | 0.8 |
| 17 | faq | FAQs | 0.85 |
| 18 | content | — | 0.3 |
| 19 | content | Cookie List | 0.3 |

## Material Language

**Label:** `material-you` (confidence 0.45)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.304 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 800px |
| backdrop-filter in use | no |
| Gradients | 5 |

## Imagery Style

**Label:** `flat-illustration` (confidence 0.257)
**Counts:** total 46, svg 36, icon 3, screenshot-like 0, photo-like 3
**Dominant aspect:** ultra-wide
**Radius profile on images:** square

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Aeonik` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
