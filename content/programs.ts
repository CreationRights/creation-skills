import { cskillsImages } from "./images";

export const programs = [
  {
    slug: "cskills-audit",
    title: "C/Skills Audit",
    description: "A structured review of your current media system, identifying gaps in creation flow, agent skill definitions, approval paths, rights exposure, and Creation Rights readiness.",
    image: cskillsImages.engagements.review,
  },
  {
    slug: "cskills-lab",
    title: "C/Skills Lab",
    description: "A hands-on advisory environment where your team designs approved media skills, creation flows, operating files, and approval gates with Creation Skills guidance.",
    image: cskillsImages.engagements.operatingModelDesign,
  },
  {
    slug: "cskills-academy",
    title: "C/Skills Academy",
    description: "Structured advisory programs that transfer governed media creation skills to your creative, brand, legal, production, and operations teams.",
    image: cskillsImages.engagements.agentOperatingBlueprint,
  },
  {
    slug: "cskills-operating-system",
    title: "C/Skills Operating System",
    description: "A complete operating layer for governed multimodal media, including approved media skills, creation flows, approval gates, evidence requirements, and rollout plans.",
    image: cskillsImages.engagements.governanceBlueprint,
  },
  {
    slug: "skill-packs",
    title: "Media Skill Packs",
    description: "Each Skill Pack defines what agents or models may do, which tools they can use, what assets they can touch, what Brand Profiles apply, what Rights & NILP\u00AE rules apply, what metadata must return, what approvals are required, what evidence must be saved, and what Creation Rights checks before release.",
    image: cskillsImages.engagements.pilotTransformation,
  },
  {
    slug: "cskills-retainer",
    title: "C/Skills Retainer",
    description: "Ongoing advisory support for governed media operations, including media skill updates, creation flow refinement, approval gate reviews, and Creation Rights readiness.",
    image: cskillsImages.engagements.implementationOffice,
  },
  {
    slug: "creation-rights-rollout-readiness",
    title: "Creation Rights Rollout Readiness",
    description: "A readiness program that prepares your team, creation flows, media skills, approval gates, and evidence requirements for full Creation Rights platform adoption.",
    image: cskillsImages.core.creationRightsReadiness,
  },
] as const;
