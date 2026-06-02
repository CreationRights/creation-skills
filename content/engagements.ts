import { cskillsImages } from "./images";

export const engagements = [
  {
    slug: "creation-skills-review",
    title: "C/Skills Review",
    description: "A focused review of one production path, including team roles, production-agent use, rights exposure, approval paths, tool stack, asset lifecycle, operating gaps, and Creation Rights readiness.",
    image: cskillsImages.engagements.review,
  },
  {
    slug: "operating-model-design",
    title: "Operating Model Design",
    description: "A future-state model for how creative work should move from brief to production, agent-supported preparation, rights review, human approval, publication, reuse, reporting, and audit.",
    image: cskillsImages.engagements.operatingModelDesign,
  },
  {
    slug: "agent-operating-blueprint",
    title: "Agent Operating Blueprint",
    description: "Company-owned production-agent roles, operating files, prompt libraries, permission rules, token limits, blocked tasks, human checkpoints, and escalation paths.",
    image: cskillsImages.engagements.agentOperatingBlueprint,
  },
  {
    slug: "governance-blueprint",
    title: "Governance Blueprint",
    description: "Decision rights, approval gates, metadata requirements, NILP\u00AE checks, rights review triggers, reuse rules, risk controls, and exception paths.",
    image: cskillsImages.engagements.governanceBlueprint,
  },
  {
    slug: "pilot-transformation",
    title: "Pilot Transformation",
    description: "A focused pilot that proves the new model on one real production path, such as release assets, project production, product media, social cutdowns, localization, documentary production, or broadcast packaging.",
    image: cskillsImages.engagements.pilotTransformation,
  },
  {
    slug: "implementation-office",
    title: "Implementation Office",
    description: "Ongoing rollout support, owner guidance, agent supervision, operating-file updates, adoption tracking, stakeholder alignment, and Creation Rights readiness.",
    image: cskillsImages.engagements.implementationOffice,
  },
] as const;
