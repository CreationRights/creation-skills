import { cskillsImages } from "./images";

export type Program = {
  slug: string;
  title: string;
  description: string;
  whatYouGet: string;
  bestFor: string;
  outcome: string;
  image: string;
};

export const programs: Program[] = [
  {
    slug: "cskills-audit",
    title: "C/Skills Audit",
    description: "A focused review of your current creation flow, tool use, approval paths, rights exposure, and Creation Rights readiness.",
    whatYouGet: "A focused review of your current creation flow, tool use, approval paths, rights exposure, and Creation Rights readiness.",
    bestFor: "Teams that need a clear map before building Skill Packs or rolling out Creation Rights.",
    outcome: "A practical readiness report with priority gaps, recommended Skill Packs, and next steps.",
    image: cskillsImages.engagements.review,
  },
  {
    slug: "cskills-lab",
    title: "C/Skills Lab",
    description: "A hands-on advisory environment where your team designs approved skills, creation flows, operating files, and approval gates with Creation Skills guidance.",
    whatYouGet: "A hands-on advisory environment where your team designs approved skills, creation flows, operating files, and approval gates with direct guidance.",
    bestFor: "Teams ready to build their first Skill Packs and need structured design time with an advisory partner.",
    outcome: "Draft Skill Packs, creation flow maps, and operating file structures ready for internal review.",
    image: cskillsImages.engagements.operatingModelDesign,
  },
  {
    slug: "cskills-academy",
    title: "C/Skills Academy",
    description: "Structured advisory that transfers practical creation skills to your creative, brand, legal, production, and operations teams.",
    whatYouGet: "Structured sessions that transfer practical skills for building and operating Skill Packs, creation flows, and approval gates to your internal teams.",
    bestFor: "Organizations that want internal capability, not ongoing dependency on external advisors.",
    outcome: "Teams who can design, update, and operate Skill Packs and creation flows independently.",
    image: cskillsImages.engagements.agentOperatingBlueprint,
  },
  {
    slug: "cskills-operating-system",
    title: "C/Skills Operating System",
    description: "A complete operating layer including approved skills, creation flows, approval gates, evidence requirements, and rollout plans.",
    whatYouGet: "A complete operating layer covering approved skills, creation flows, approval gates, evidence requirements, and Creation Rights rollout plans for your team.",
    bestFor: "Large teams with complex creative operations who need a full system designed and documented.",
    outcome: "A company-owned operating system with versioned files, clear ownership, and Creation Rights readiness.",
    image: cskillsImages.engagements.governanceBlueprint,
  },
  {
    slug: "skill-packs",
    title: "Skill Packs",
    description: "Pre-designed skill definitions covering tools, assets, brand rules, rights rules, metadata, approvals, evidence, and Creation Rights checks.",
    whatYouGet: "Pre-designed skill definitions covering approved tools, assets, brand rules, rights rules, metadata, approvals, evidence requirements, and Creation Rights checks.",
    bestFor: "Teams who want structured, repeatable skill definitions they can adapt and operate immediately.",
    outcome: "Approved Skill Pack operating files ready for internal adoption and Creation Rights connection.",
    image: cskillsImages.engagements.pilotTransformation,
  },
  {
    slug: "cskills-retainer",
    title: "C/Skills Retainer",
    description: "Ongoing advisory support including skill updates, creation flow refinement, approval gate reviews, and Creation Rights readiness.",
    whatYouGet: "Ongoing advisory support including Skill Pack updates, creation flow refinement, approval gate reviews, and readiness checkpoints.",
    bestFor: "Teams already operating Skill Packs who need periodic review, updates, and expansion support.",
    outcome: "Continuously maintained skills, flows, and evidence requirements that stay current as tools and rules evolve.",
    image: cskillsImages.engagements.implementationOffice,
  },
  {
    slug: "creation-rights-rollout-readiness",
    title: "Creation Rights Rollout Readiness",
    description: "A readiness program that prepares your team, creation flows, approved skills, and evidence requirements for full platform adoption.",
    whatYouGet: "A structured readiness program that confirms your team, creation flows, approved skills, approval gates, and evidence requirements are prepared for Creation Rights.",
    bestFor: "Teams approaching Creation Rights adoption who need confidence that their operating layer is complete.",
    outcome: "Verified readiness across all Creation Rights connection points with a clear rollout plan.",
    image: cskillsImages.core.creationRightsReadiness,
  },
];
