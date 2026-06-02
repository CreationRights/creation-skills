# Build File Structure and Route Map

# **Creation Skills Internal Page: Build File Structure and Route Map**

## **Page Identity**

**Creation Skills**  
**C/Skills.**  
**A Creation Rights Division**

## **Document Type**

Internal build planning document

## **Public Status**

Not a public page

## **Purpose**

This page defines the recommended file structure, route structure, component organization, and content data approach for building the Creation Skills website.

The goal is to keep the build clean, reusable, and easy to expand as phase two, phase three, resource, and ecosystem pages are added later.

The site should be static-first, fast, accessible, and easy to maintain.

---

# **1\. Build Principle**

## **Headline**

Build the launch site as a reusable content system.

## **Body**

Creation Skills has a large content library.

The first public site should launch with a focused set of pages, but the codebase should be ready to support future concept pages, audience pages, resources, ecosystem pages, and utility pages without rebuilding the design from scratch.

## **Core Rule**

Build once.  
Reuse templates.  
Add pages from structured content.

---

# **2\. Recommended Route Groups**

## **Core Routes**

/  
/what-we-do  
/engagements  
/who-we-help  
/creation-rights-readiness  
/about  
/book-review  
/contact

## **Engagement Routes**

/engagements/cskills-review  
/engagements/operating-model-design  
/engagements/agent-operating-blueprint  
/engagements/governance-blueprint  
/engagements/pilot-transformation  
/engagements/implementation-office

## **Utility Routes**

/privacy  
/terms  
/cookies  
/accessibility  
/legal-notice  
/404

## **Thank-You Routes**

/thank-you/review  
/thank-you/contact  
/thank-you/partnership  
/thank-you/briefing  
/thank-you/newsletter

## **Optional Resource Routes**

/resources  
/resources/why-production-agents-need-owners  
/resources/from-loose-prompts-to-operating-files  
/resources/the-human-approval-gate  
/resources/why-rights-review-belongs-earlier  
/resources/creation-rights-readiness

## **Phase Two Concept Routes**

/concepts/company-owned-production-agents  
/concepts/operating-files  
/concepts/human-approval-gates  
/concepts/rights-review-and-nilp-checks  
/concepts/protected-records-and-metadata  
/concepts/asset-reuse-and-usage-controls  
/concepts/decision-rights-and-escalation-paths  
/concepts/responsible-agent-use  
/concepts/confidentiality-and-client-materials  
/concepts/deliverables-and-operating-assets  
/concepts/how-we-work  
/concepts/terms-and-language

## **Phase Three Audience Routes**

/who-we-help/media-and-entertainment-enterprises  
/who-we-help/brands-with-large-content-operations  
/who-we-help/agencies-and-production-companies  
/who-we-help/enterprise-creative-operations  
/who-we-help/legal-rights-and-risk-teams  
/who-we-help/technology-platform-and-digital-asset-teams  
/who-we-help/executive-leaders-and-transformation-sponsors

Additional audience routes can be added later as phase three expands.

---

# **3\. Suggested Next.js App Structure**

## **Recommended App Directory**

app/  
app/page.tsx  
app/layout.tsx  
app/not-found.tsx

app/what-we-do/page.tsx  
app/engagements/page.tsx  
app/engagements/\[slug\]/page.tsx  
app/who-we-help/page.tsx  
app/who-we-help/\[slug\]/page.tsx  
app/creation-rights-readiness/page.tsx  
app/about/page.tsx  
app/book-review/page.tsx  
app/contact/page.tsx

app/resources/page.tsx  
app/resources/\[slug\]/page.tsx

app/concepts/\[slug\]/page.tsx

app/privacy/page.tsx  
app/terms/page.tsx  
app/cookies/page.tsx  
app/accessibility/page.tsx  
app/legal-notice/page.tsx

app/thank-you/review/page.tsx  
app/thank-you/contact/page.tsx  
app/thank-you/partnership/page.tsx  
app/thank-you/briefing/page.tsx  
app/thank-you/newsletter/page.tsx

## **Notes**

Use dynamic routes for engagement pages, resource pages, concept pages, and audience pages.

This keeps the build easier to expand later.

Static generation should be preferred wherever possible.

---

# **4\. Suggested Source Structure**

## **Components**

components/  
components/layout/Header.tsx  
components/layout/Footer.tsx  
components/layout/PageShell.tsx  
components/layout/Container.tsx  
components/layout/Section.tsx

components/ui/Button.tsx  
components/ui/Card.tsx  
components/ui/Eyebrow.tsx  
components/ui/CTAGroup.tsx  
components/ui/FinalCTA.tsx  
components/ui/PrincipleBlock.tsx  
components/ui/BoundaryNote.tsx  
components/ui/ConfidentialityNotice.tsx

components/sections/Hero.tsx  
components/sections/CardGrid.tsx  
components/sections/ProcessSteps.tsx  
components/sections/SplitPanel.tsx  
components/sections/EcosystemSplit.tsx  
components/sections/FormSection.tsx

components/forms/BookReviewForm.tsx  
components/forms/ContactForm.tsx  
components/forms/PartnershipForm.tsx  
components/forms/BriefingForm.tsx  
components/forms/NewsletterForm.tsx

components/visuals/AgentNodeVisual.tsx  
components/visuals/ApprovalGateVisual.tsx  
components/visuals/AssetFlowVisual.tsx  
components/visuals/RecordCardVisual.tsx  
components/visuals/OperatingFileVisual.tsx

## **Content**

content/  
content/site.ts  
content/navigation.ts  
content/footer.ts  
content/engagements.ts  
content/audiences.ts  
content/concepts.ts  
content/resources.ts  
content/utilityPages.ts  
content/forms.ts  
content/seo.ts

## **Styles**

styles/  
styles/globals.css  
styles/tokens.css  
styles/typography.css  
styles/forms.css

## **Lib**

lib/  
lib/seo.ts  
lib/routes.ts  
lib/forms.ts  
lib/utils.ts

---

# **5\. Page Content Model**

## **Headline**

Each page should be built from structured content.

## **Recommended Page Object**

type PageContent \= {  
  slug: string  
  title: string  
  seoTitle: string  
  seoDescription: string  
  pageType: string  
  launchStatus: string  
  hero: {  
    eyebrow: string  
    headline: string  
    subhead?: string  
    body?: string  
    primaryCta?: CTA  
    secondaryCta?: CTA  
  }  
  sections: PageSection\[\]  
  finalCta?: {  
    headline: string  
    body: string  
    primaryCta: CTA  
    secondaryCta?: CTA  
  }  
}

## **CTA Object**

type CTA \= {  
  label: string  
  href: string  
}

## **Section Object**

type PageSection \= {  
  type: "text" | "cards" | "process" | "split" | "principle" | "form" | "notice"  
  eyebrow?: string  
  headline?: string  
  body?: string  
  cards?: Card\[\]  
  steps?: Step\[\]  
}

---

# **6\. Engagement Data Model**

## **Purpose**

Engagement pages should use one shared template.

## **Engagement Fields**

slug  
title  
seoTitle  
seoDescription  
eyebrow  
headline  
subhead  
body  
whenItFits  
whatItCovers  
whatClientsReceive  
creationRightsReadiness  
whatGoodLooksLike  
primaryCta  
secondaryCta

## **Engagement Slugs**

cskills-review  
operating-model-design  
agent-operating-blueprint  
governance-blueprint  
pilot-transformation  
implementation-office

## **Rule**

Do not hardcode each engagement page as a separate visual design unless needed.

Use one engagement template with different content.

---

# **7\. Audience Data Model**

## **Purpose**

Audience pages should be easy to add later.

## **Audience Fields**

slug  
title  
seoTitle  
seoDescription  
eyebrow  
headline  
subhead  
body  
audienceProblem  
whatWeHelpWith  
useCases  
productionAgents  
operatingFiles  
approvalGates  
creationRightsReadiness  
engagementPaths  
finalCta

## **Launch Audience Page**

who-we-help should use audience cards instead of full audience detail pages at first.

## **Phase Three Rule**

Audience detail pages should remain unpublished until reviewed and internally linked.

---

# **8\. Resource Data Model**

## **Purpose**

Resources should feel like field notes, not generic blog posts.

## **Resource Fields**

slug  
title  
seoTitle  
seoDescription  
category  
eyebrow  
headline  
subhead  
body  
sections  
relatedEngagement  
relatedConcept  
primaryCta  
secondaryCta

## **Resource Categories**

Production Agents  
Operating Files  
Human Approval  
Rights Review  
Creation Rights Readiness  
Protected Records  
Asset Reuse  
Decision Rights

## **Rule**

Every resource article should point to a practical next step.

Most common CTA:

Book a C/Skills Review

---

# **9\. Form Routing Structure**

## **Form Routes**

Book review form routes to:

/thank-you/review

Contact form routes to:

/thank-you/contact

Partnership form routes to:

/thank-you/partnership

Briefing form routes to:

/thank-you/briefing

Newsletter form routes to:

/thank-you/newsletter

## **Form Build Rule**

No public file upload at launch.

Each form must include the confidentiality warning.

Each form must have clear labels and accessible error states.

---

# **10\. SEO Structure**

## **Headline**

SEO should be generated from content data.

## **SEO Fields**

title  
description  
canonical URL  
open graph title  
open graph description  
open graph image if used  
robots setting

## **Robots Rules**

Index launch pages.

Noindex thank-you pages.

Noindex internal planning pages.

Noindex staged pages until approved.

Noindex draft legal pages before counsel review.

---

# **11\. Navigation Structure**

## **Header Links**

What We Do  
Engagements  
Who We Help  
Creation Rights Readiness  
About  
Book a C/Skills Review

## **Engagement Dropdown**

C/Skills Review  
Operating Model Design  
Agent Operating Blueprint  
Governance Blueprint  
Pilot Transformation  
Implementation Office

## **Footer Columns**

Creation Skills  
Engagements  
Ecosystem  
Resources  
Legal

## **Rule**

Do not expose all phase two, phase three, or internal pages in the top navigation.

---

# **12\. Design Token Structure**

## **Colors**

colors \= {  
  lime: "...",  
  charcoal: "...",  
  nearBlack: "...",  
  warmWhite: "...",  
  softNeutral: "...",  
  mutedGray: "...",  
  border: "..."  
}

## **Typography**

type \= {  
  hero: "...",  
  h1: "...",  
  h2: "...",  
  h3: "...",  
  body: "...",  
  small: "...",  
  eyebrow: "..."  
}

## **Spacing**

spacing \= {  
  section: "...",  
  sectionSmall: "...",  
  container: "...",  
  cardGap: "...",  
  hero: "..."  
}

## **Rule**

Keep visual tokens centralized so the site can evolve without redesigning every page.

---

# **13\. Build Order**

## **Step 1**

Set up global layout, tokens, typography, and base styles.

## **Step 2**

Build Header, Footer, Container, Section, Button, Card, and FinalCTA.

## **Step 3**

Build core templates:

Core marketing page  
Engagement page  
Utility page  
Thank-you page  
Resource article page

## **Step 4**

Add launch content data.

## **Step 5**

Build forms and confirmation routes.

## **Step 6**

Add SEO metadata.

## **Step 7**

QA mobile, accessibility, links, forms, and legal placeholders.

## **Step 8**

Stage optional resource pages only if approved.

---

# **14\. Build Do Not**

## **Do Not**

Do not build every master document page into navigation.

Do not expose internal planning pages.

Do not use lorem ipsum.

Do not use fake Gemini artifact text.

Do not add file uploads to public forms.

Do not use generic AI imagery.

Do not confuse Creation Skills with Creation Rights.

Do not confuse Creation Skills with CreativeIP.org.

Do not publish legal pages without review.

Do not create one-off page designs for every route.

---

# **15\. Build QA Checklist**

## **Checklist**

Routes match the route map.  
Header links work.  
Footer links work.  
Dynamic engagement pages work.  
Forms route to correct thank-you pages.  
SEO metadata appears on every public page.  
Thank-you pages are noindex.  
Internal pages are not public.  
No staged pages are indexed.  
Mobile menu works.  
Forms are accessible.  
Confidentiality warning appears near forms.  
NILP® mark is correct.  
C/Skills. is correct.  
A Creation Rights Division is correct.  
Core line appears where appropriate.  
Site feels premium and creative.

---

# **Final Note**

The build should make the Creation Skills system easy to expand.

The launch site should stay focused.

The codebase should be ready for the full master document later.
