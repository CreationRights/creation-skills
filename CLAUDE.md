# Creation Skills Build Rules

Claude Code must use `docs/design/active/` as the only active design source of truth.

Read and follow only:

- `docs/design/active/BUILD_SPEC.md`
- `docs/design/active/TOKENS.md`
- `docs/design/active/COMPONENT_MAP.md`
- `docs/design/active/HOMEPAGE_SECTIONS.md`
- `docs/design/active/QA_CHECKLIST.md`

Do not directly implement from:

- `docs/stitch/`
- `references/ltx-firecrawl/`
- `references/ltx-ui/`
- old screenshots
- old Claude homepage experiments
- external LTX assets
- external Stitch assets

Use local C/Skills assets only:
- `content/images.ts`
- `content/logo.ts`
- `public/images/cskills/`
- `public/brand/cskills/`

Do not add Tailwind CDN, Material Symbols, external image URLs, LTX model language, fake dashboards, generic icon grids, or old Claude system rails.

Build in controlled passes. After each pass, run `npm run build` and do not commit unless instructed.
