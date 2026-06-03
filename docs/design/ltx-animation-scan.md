# LTX Animation & Interaction Scan

**Source:** https://ltx.io/model
**Date:** 2026-06-02
**Purpose:** Quality benchmark only. Do not copy LTX branding, assets, colors, text, or layouts.

---

## 1. Confirmed Animation Patterns

### Scroll-triggered reveal — blur-in (GSAP + ScrollTrigger)
- Elements with `.blur-in` class animate from `filter: blur(16px)` to `blur(0px)`
- Duration: 0.5s, easing: power3.out
- Triggered at scroll position "top 80%" (element top enters 80% viewport)
- Toggle actions: "play none none reverse" — reverses when scrolling back up

### Scroll-triggered reveal — stagger children (GSAP + ScrollTrigger)
- Elements with `[gush-stagger]` attribute have children animated
- Children animate from `{ y: 20, opacity: 0 }` to `{ y: 0, opacity: 1 }`
- Duration: 0.4s, stagger: 0.1s, easing: power1.inOut
- Triggered at "top 90%"

### Card expansion system (CSS-only with `:has()`)
- 4-card grid expands hovered card from `1fr` to `2fr` while shrinking others to `0.66fr`
- Height transitions from `--closedH` (65% of 70vh) to `--openH` (70vh)
- Open duration: 0.90s, close duration: 1.05s
- Custom easing: `cubic-bezier(0.16, 1, 0.3, 1)` — fast start, long ease-out
- Content reveals with `grid-template-rows: 0fr → 1fr` mask
- Staggered opacity and translateY on card subtext
- Reveal delay: 0.22s after card expansion starts

### Logo marquee carousel
- Continuous horizontal scroll via `@keyframes scroll` (translateX 0 → -100%)
- Duration: 40s, linear, infinite
- Pauses on container hover via `animation-play-state: paused`

### Gradient shift animation
- Banner background uses `background-size: 200% 200%` with `background-position` keyframes
- Duration: 15s, ease, infinite
- Shifts between 0%/50% and 100%/50%

### Link underline draw effect
- `::after` pseudo-element with `transform: scaleX(0)` → `scaleX(1)` on hover
- Duration: 0.25s-0.3s, ease
- `transform-origin` switches from `left` to `right` for draw/undraw effect

### Nav dropdown chevron rotation
- `transform: rotate(180deg)` on dropdown open
- Duration: 200ms, ease

### Video facade system
- IntersectionObserver lazy-loads videos with 300px rootMargin
- Facade image shown while video loads, hidden on `loadeddata` event
- Desktop hover activates card videos

### Video reveal cursor ring
- Custom 220px cursor ring tracks mouse position
- Radial gradient mask reveals video content through circular window
- Desktop only (hidden on mobile)

### Prefers-reduced-motion
- All card transitions disabled: `transition: none !important`
- Applied to card expansion, content reveal, and subtext animation

---

## 2. Likely Interaction Patterns

- **Smooth scroll** — likely Lenis or native `scroll-behavior: smooth`
- **Lazy media loading** — IntersectionObserver with generous rootMargin
- **Hover intent** — card expansion only triggers on actual hover, not touch
- **Focus accessibility** — `:focus-within` used alongside `:hover` for card expansion
- **Touch fallback** — mobile layout removes expansion, shows all content
- **will-change hints** — `will-change: grid-template-columns`, `will-change: height`, `will-change: opacity, transform` for GPU compositing

---

## 3. What Should Be Adapted for Creation Skills

### Scroll-triggered section reveal
- Adapt the blur-in and stagger patterns using native IntersectionObserver (no GSAP)
- Use CSS classes toggled by JS, not inline GSAP animations
- Lighter blur (8px instead of 16px) for subtlety
- Fade + translateY(16px) for section content

### Targeted transition properties
- Never use `transition: all`
- Always specify exact properties: `transition: opacity 0.4s ease, transform 0.4s ease`
- Use LTX's premium easing: `cubic-bezier(0.16, 1, 0.3, 1)` for content reveals

### Link underline draw
- Adapt for nav links and footer links
- `::after` scaleX animation on hover

### Gradient motion
- Subtle background gradient shift on hero or CTA sections
- Long duration (12-15s), infinite, ease

### Card hover depth
- Targeted border-color, box-shadow, and transform transitions
- No `transition: all` — list each property

### prefers-reduced-motion
- Disable all animations and transitions
- Show content in final state immediately

---

## 4. What Should NOT Be Copied

- **Card expansion grid system** — too complex for C/Skills card layout, requires `:has()` which has limited support
- **Video facade/reveal system** — C/Skills has no video assets currently
- **Cursor ring masking** — too experimental, requires mouse tracking
- **GSAP dependency** — too heavy for current scope; use native IntersectionObserver
- **Lenis smooth scroll** — adds dependency for minimal visual gain
- **40s logo marquee** — C/Skills has no logo wall
- **will-change on many elements** — can cause memory issues; use sparingly
- **LTX's specific easing values** — adapt the feel, not the exact cubic-bezier

---

## 5. CSS Implementation Recommendations for C/Skills

### Scroll reveal (CSS + minimal JS)
```css
/* Base state — hidden */
.reveal {
  opacity: 0;
  transform: translateY(16px);
  filter: blur(4px);
  transition: opacity 0.6s ease, transform 0.6s ease, filter 0.6s ease;
}

/* Revealed state — toggled by IntersectionObserver */
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* Stagger children */
.reveal-stagger > * {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.reveal-stagger.is-visible > *:nth-child(1) { transition-delay: 0s; }
.reveal-stagger.is-visible > *:nth-child(2) { transition-delay: 0.08s; }
.reveal-stagger.is-visible > *:nth-child(3) { transition-delay: 0.16s; }
/* etc. */

.reveal-stagger.is-visible > * {
  opacity: 1;
  transform: translateY(0);
}
```

### IntersectionObserver script (inline, no library)
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));
```

### Rail pulse animation
```css
@keyframes railPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; box-shadow: 0 0 8px rgba(180, 247, 64, 0.3); }
}
```

### CTA glow
```css
@keyframes ctaGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(180, 247, 64, 0.1); }
  50% { box-shadow: 0 0 40px rgba(180, 247, 64, 0.2); }
}
```

### prefers-reduced-motion
```css
@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal-stagger > * {
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
    transition: none !important;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
