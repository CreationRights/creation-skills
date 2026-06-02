# Prompt pack

Paste-ready prompts for ltx.io. Use the variant that matches your tool.

## v0.txt

```
Build a landing page with this exact visual language.
COLORS:
  #333333
  #f9f9f9
  #000000
  #696969
  #999999
  #555555
  #1f1f24
  #0b0b0b
  #3860be
  #dddddd
  #0000ee
  #7d87a0
  #f4f4f4
  #2b61ff
FONTS: [object Object], [object Object], [object Object], [object Object]
SPACING: 1, 35, 38, 48, 64, 72, 80, 192
RADIUS: 2, 8, 17, 20, 50, 100
SHADOWS: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px | rgb(199, 197, 199) -3px -3px 5px -2px | rgb(199, 197, 199) 0px 0px 12px 2px
MATERIAL LANGUAGE: flat
VOICE: Tone: neutral · Headings: Title Case · CTA verbs: [object Object], [object Object], [object Object], [object Object], [object Object], [object Object]
SECTIONS (in order):
- hero — heading: "Open Creative Intelligence, Built for Production"
- logo-wall
- cta — heading: "Build, Create, and Scale with LTX"
- steps — heading: "Research"
- cta — heading: "LTX-2.3 and What We Built on It"
- cta
- testimonial — heading: "Success, Engineered Together"
- faq — heading: "FAQs"
Use Tailwind. Match these tokens exactly. Keep the material language consistent.
```

## lovable.txt

```
Clone the design language of this landing page and build a fresh equivalent.
Visual feel: flat. Tone: neutral · Headings: Title Case · CTA verbs: [object Object], [object Object], [object Object], [object Object], [object Object], [object Object]
Primary palette: #333333, #f9f9f9, #000000, #696969, #999999.
Typography: [object Object], [object Object], [object Object], [object Object].
Corner radius vocabulary: 2, 8, 17, 20, 50, 100.
Shadow vocabulary: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px | rgb(199, 197, 199) -3px -3px 5px -2px | rgb(199, 197, 199) 0px 0px 12px 2px.
Page structure:
- hero — heading: "Open Creative Intelligence, Built for Production"
- logo-wall
- cta — heading: "Build, Create, and Scale with LTX"
- steps — heading: "Research"
- cta — heading: "LTX-2.3 and What We Built on It"
- cta
- testimonial — heading: "Success, Engineered Together"
- faq — heading: "FAQs"
```

## cursor.md

```
# Design brief
Page type: **landing**.
Material language: **flat**.
Voice: Tone: neutral · Headings: Title Case · CTA verbs: [object Object], [object Object], [object Object], [object Object], [object Object], [object Object].
## Tokens
```ts
export const tokens = {
  colors: ['#333333', '#f9f9f9', '#000000', '#696969', '#999999', '#555555', '#1f1f24', '#0b0b0b', '#3860be', '#dddddd', '#0000ee', '#7d87a0', '#f4f4f4', '#2b61ff'],
  fonts: ['[object Object]', '[object Object]', '[object Object]', '[object Object]'],
  radii: ['2', '8', '17', '20', '50', '100'],
  shadows: ['rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px', 'rgb(199, 197, 199) -3px -3px 5px -2px', 'rgb(199, 197, 199) 0px 0px 12px 2px'],
};
```
## Sections
- hero — heading: "Open Creative Intelligence, Built for Production"
- logo-wall
- cta — heading: "Build, Create, and Scale with LTX"
- steps — heading: "Research"
- cta — heading: "LTX-2.3 and What We Built on It"
- cta
- testimonial — heading: "Success, Engineered Together"
- faq — heading: "FAQs"
```

## claude-artifacts.md

```
Create a React artifact that reproduces this brand's design language.
Page intent: landing.
Material language: flat.
Voice: Tone: neutral · Headings: Title Case · CTA verbs: [object Object], [object Object], [object Object], [object Object], [object Object], [object Object].
Colors to use: #333333, #f9f9f9, #000000, #696969, #999999, #555555, #1f1f24, #0b0b0b, #3860be, #dddddd, #0000ee, #7d87a0, #f4f4f4, #2b61ff.
Fonts: [object Object], [object Object], [object Object], [object Object].
Radius vocabulary: 2, 8, 17, 20, 50, 100.
Sections:
- hero — heading: "Open Creative Intelligence, Built for Production"
- logo-wall
- cta — heading: "Build, Create, and Scale with LTX"
- steps — heading: "Research"
- cta — heading: "LTX-2.3 and What We Built on It"
- cta
- testimonial — heading: "Success, Engineered Together"
- faq — heading: "FAQs"
Use Tailwind via CDN, lucide-react for icons, and keep the material language consistent across sections. Do not add extra decorative elements outside this vocabulary.
```

## Recipes

### button

# Recipe: button
Build one button component that matches this brand.
Palette: #333333, #f9f9f9, #000000, #696969, #999999, #555555
Typography: [object Object], [object Object], [object Object], [object Object]
Material: flat
Signals: Radius: 2, 8, 17, 20, 50, 100 · Shadows: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px | rgb(199, 197, 199) -3px -3px 5px -2px | rgb(199, 197, 199) 0px 0px 12px 2px
## Anatomy (detected)
```json
{
  "kind": "button",
  "structuralHash": "a",
  "instanceCount": 9,
  "variants": [
    {
      "css": {
        "background": "rgb(249, 249, 249)",
        "color": "rgb(11, 11, 11)",
        "padding": "11.2px 20.8px 11.2px 20.8px",
        "borderRadius": "800px",
        "border": "1px solid rgb(249, 249, 249)",
        "fontSize": "15.2px",
        "fontWeight": "500"
      },
      "instanceCount": 2
    },
    {
      "css": {
        "background": "rgba(249, 249, 249, 0)",
        "color": "rgb(249, 249, 249)",
        "padding": "17.6px 28.8px 17.6px 28.8px",
        "borderRadius": "800px",
        "border": "1px solid rgb(249, 249, 249)",
        "fontSize": "12.8px",
        "fontWeight": "500"
      },
      "instanceCount": 6
    },
    {
      "css": {
        "background": "rgba(11, 11, 11, 0)",
        "color": "rgb(249, 249, 249)",
        "padding": "16px 28.8px 16px 28.8px",
        "borderRadius": "800px",
        "border": "1px solid rgb(249, 249, 249)",
        "fontSize": "17.6px",
        "fontWeight": "500"
      },
      "instanceCount": 1
    }
  ]
}
```


### button

# Recipe: button
Build one button component that matches this brand.
Palette: #333333, #f9f9f9, #000000, #696969, #999999, #555555
Typography: [object Object], [object Object], [object Object], [object Object]
Material: flat
Signals: Radius: 2, 8, 17, 20, 50, 100 · Shadows: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px | rgb(199, 197, 199) -3px -3px 5px -2px | rgb(199, 197, 199) 0px 0px 12px 2px
## Anatomy (detected)
```json
{
  "kind": "button",
  "structuralHash": "div>a",
  "instanceCount": 1,
  "variants": [
    {
      "css": {
        "background": "rgba(0, 0, 0, 0)",
        "color": "rgb(51, 51, 51)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "0px",
        "border": "0px none rgb(51, 51, 51)",
        "fontSize": "14px",
        "fontWeight": "400"
      },
      "instanceCount": 1
    }
  ]
}
```


### card

# Recipe: card
Build one card component that matches this brand.
Palette: #333333, #f9f9f9, #000000, #696969, #999999, #555555
Typography: [object Object], [object Object], [object Object], [object Object]
Material: flat
Signals: Radius: 2, 8, 17, 20, 50, 100 · Shadows: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px | rgb(199, 197, 199) -3px -3px 5px -2px | rgb(199, 197, 199) 0px 0px 12px 2px
## Anatomy (detected)
```json
{
  "kind": "card",
  "structuralHash": "div>div",
  "instanceCount": 5,
  "variants": [
    {
      "css": {
        "background": "rgb(0, 0, 0)",
        "color": "rgb(51, 51, 51)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "8px",
        "border": "0px none rgb(51, 51, 51)",
        "fontSize": "14px",
        "fontWeight": "400"
      },
      "instanceCount": 1
    },
    {
      "css": {
        "background": "rgba(0, 0, 0, 0)",
        "color": "rgb(51, 51, 51)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "0px",
        "border": "0px none rgb(51, 51, 51)",
        "fontSize": "14px",
        "fontWeight": "400"
      },
      "instanceCount": 4
    }
  ]
}
```


### card

# Recipe: card
Build one card component that matches this brand.
Palette: #333333, #f9f9f9, #000000, #696969, #999999, #555555
Typography: [object Object], [object Object], [object Object], [object Object]
Material: flat
Signals: Radius: 2, 8, 17, 20, 50, 100 · Shadows: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px | rgb(199, 197, 199) -3px -3px 5px -2px | rgb(199, 197, 199) 0px 0px 12px 2px
## Anatomy (detected)
```json
{
  "kind": "card",
  "structuralHash": "div>div>script",
  "instanceCount": 1,
  "variants": [
    {
      "css": {
        "background": "rgba(0, 0, 0, 0)",
        "color": "rgb(51, 51, 51)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "0px",
        "border": "0px none rgb(51, 51, 51)",
        "fontSize": "14px",
        "fontWeight": "400"
      },
      "instanceCount": 1
    }
  ]
}
```


### card

# Recipe: card
Build one card component that matches this brand.
Palette: #333333, #f9f9f9, #000000, #696969, #999999, #555555
Typography: [object Object], [object Object], [object Object], [object Object]
Material: flat
Signals: Radius: 2, 8, 17, 20, 50, 100 · Shadows: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px | rgb(199, 197, 199) -3px -3px 5px -2px | rgb(199, 197, 199) 0px 0px 12px 2px
## Anatomy (detected)
```json
{
  "kind": "card",
  "structuralHash": "div>video",
  "instanceCount": 8,
  "variants": [
    {
      "css": {
        "background": "rgba(0, 0, 0, 0)",
        "color": "rgb(51, 51, 51)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "0px",
        "border": "0px none rgb(51, 51, 51)",
        "fontSize": "14px",
        "fontWeight": "400"
      },
      "instanceCount": 4
    },
    {
      "css": {
        "background": "rgba(0, 0, 0, 0)",
        "color": "rgb(255, 255, 255)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "0px",
        "border": "0px none rgb(255, 255, 255)",
        "fontSize": "14px",
        "fontWeight": "400"
      },
      "instanceCount": 4
    }
  ]
}
```


### card

# Recipe: card
Build one card component that matches this brand.
Palette: #333333, #f9f9f9, #000000, #696969, #999999, #555555
Typography: [object Object], [object Object], [object Object], [object Object]
Material: flat
Signals: Radius: 2, 8, 17, 20, 50, 100 · Shadows: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px | rgb(199, 197, 199) -3px -3px 5px -2px | rgb(199, 197, 199) 0px 0px 12px 2px
## Anatomy (detected)
```json
{
  "kind": "card",
  "structuralHash": "section>div",
  "instanceCount": 1,
  "variants": [
    {
      "css": {
        "background": "rgb(11, 11, 11)",
        "color": "rgb(51, 51, 51)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "0px",
        "border": "0px none rgb(51, 51, 51)",
        "fontSize": "14px",
        "fontWeight": "400"
      },
      "instanceCount": 1
    }
  ]
}
```


### card

# Recipe: card
Build one card component that matches this brand.
Palette: #333333, #f9f9f9, #000000, #696969, #999999, #555555
Typography: [object Object], [object Object], [object Object], [object Object]
Material: flat
Signals: Radius: 2, 8, 17, 20, 50, 100 · Shadows: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px | rgb(199, 197, 199) -3px -3px 5px -2px | rgb(199, 197, 199) 0px 0px 12px 2px
## Anatomy (detected)
```json
{
  "kind": "card",
  "structuralHash": "div>div>div",
  "instanceCount": 8,
  "variants": [
    {
      "css": {
        "background": "rgba(0, 0, 0, 0)",
        "color": "rgb(51, 51, 51)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "0px",
        "border": "0px none rgb(51, 51, 51)",
        "fontSize": "14px",
        "fontWeight": "400"
      },
      "instanceCount": 1
    },
    {
      "css": {
        "background": "rgb(0, 0, 0)",
        "color": "rgb(51, 51, 51)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "8px",
        "border": "0px none rgb(51, 51, 51)",
        "fontSize": "14px",
        "fontWeight": "400"
      },
      "instanceCount": 6
    },
    {
      "css": {
        "background": "rgb(0, 0, 0)",
        "color": "rgb(249, 249, 249)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "8px",
        "border": "0px none rgb(249, 249, 249)",
        "fontSize": "14px",
        "fontWeight": "400"
      },
      "instanceCount": 1
    }
  ]
}
```


### card

# Recipe: card
Build one card component that matches this brand.
Palette: #333333, #f9f9f9, #000000, #696969, #999999, #555555
Typography: [object Object], [object Object], [object Object], [object Object]
Material: flat
Signals: Radius: 2, 8, 17, 20, 50, 100 · Shadows: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px | rgb(199, 197, 199) -3px -3px 5px -2px | rgb(199, 197, 199) 0px 0px 12px 2px
## Anatomy (detected)
```json
{
  "kind": "card",
  "structuralHash": "div>div>div>div",
  "instanceCount": 6,
  "variants": [
    {
      "css": {
        "background": "rgba(0, 0, 0, 0)",
        "color": "rgb(51, 51, 51)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "0px",
        "border": "0px none rgb(51, 51, 51)",
        "fontSize": "14px",
        "fontWeight": "400"
      },
      "instanceCount": 5
    },
    {
      "css": {
        "background": "rgba(0, 0, 0, 0)",
        "color": "rgb(249, 249, 249)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "0px",
        "border": "0px none rgb(249, 249, 249)",
        "fontSize": "14px",
        "fontWeight": "400"
      },
      "instanceCount": 1
    }
  ]
}
```


### card

# Recipe: card
Build one card component that matches this brand.
Palette: #333333, #f9f9f9, #000000, #696969, #999999, #555555
Typography: [object Object], [object Object], [object Object], [object Object]
Material: flat
Signals: Radius: 2, 8, 17, 20, 50, 100 · Shadows: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px | rgb(199, 197, 199) -3px -3px 5px -2px | rgb(199, 197, 199) 0px 0px 12px 2px
## Anatomy (detected)
```json
{
  "kind": "card",
  "structuralHash": "div>a>div",
  "instanceCount": 3,
  "variants": [
    {
      "css": {
        "background": "rgba(0, 0, 0, 0)",
        "color": "rgb(51, 51, 51)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "0px",
        "border": "0px none rgb(51, 51, 51)",
        "fontSize": "14px",
        "fontWeight": "400"
      },
      "instanceCount": 3
    }
  ]
}
```


### card

# Recipe: card
Build one card component that matches this brand.
Palette: #333333, #f9f9f9, #000000, #696969, #999999, #555555
Typography: [object Object], [object Object], [object Object], [object Object]
Material: flat
Signals: Radius: 2, 8, 17, 20, 50, 100 · Shadows: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px | rgb(199, 197, 199) -3px -3px 5px -2px | rgb(199, 197, 199) 0px 0px 12px 2px
## Anatomy (detected)
```json
{
  "kind": "card",
  "structuralHash": "h3",
  "instanceCount": 6,
  "variants": [
    {
      "css": {
        "background": "rgba(0, 0, 0, 0)",
        "color": "rgb(249, 249, 249)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "0px",
        "border": "0px none rgb(249, 249, 249)",
        "fontSize": "28px",
        "fontWeight": "500"
      },
      "instanceCount": 6
    }
  ]
}
```


### card

# Recipe: card
Build one card component that matches this brand.
Palette: #333333, #f9f9f9, #000000, #696969, #999999, #555555
Typography: [object Object], [object Object], [object Object], [object Object]
Material: flat
Signals: Radius: 2, 8, 17, 20, 50, 100 · Shadows: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px | rgb(199, 197, 199) -3px -3px 5px -2px | rgb(199, 197, 199) 0px 0px 12px 2px
## Anatomy (detected)
```json
{
  "kind": "card",
  "structuralHash": "div>div>p>div>div",
  "instanceCount": 1,
  "variants": [
    {
      "css": {
        "background": "rgba(0, 0, 0, 0)",
        "color": "rgb(51, 51, 51)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "0px",
        "border": "0px none rgb(51, 51, 51)",
        "fontSize": "14px",
        "fontWeight": "400"
      },
      "instanceCount": 1
    }
  ]
}
```


### card

# Recipe: card
Build one card component that matches this brand.
Palette: #333333, #f9f9f9, #000000, #696969, #999999, #555555
Typography: [object Object], [object Object], [object Object], [object Object]
Material: flat
Signals: Radius: 2, 8, 17, 20, 50, 100 · Shadows: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px | rgb(199, 197, 199) -3px -3px 5px -2px | rgb(199, 197, 199) 0px 0px 12px 2px
## Anatomy (detected)
```json
{
  "kind": "card",
  "structuralHash": "p",
  "instanceCount": 3,
  "variants": [
    {
      "css": {
        "background": "rgba(0, 0, 0, 0)",
        "color": "rgb(249, 249, 249)",
        "padding": "0px 0px 0px 0px",
        "borderRadius": "0px",
        "border": "0px none rgb(249, 249, 249)",
        "fontSize": "17.6px",
        "fontWeight": "400"
      },
      "instanceCount": 3
    }
  ]
}
```

