import { cskillsImages } from "./images";

export const resources = [
  {
    slug: "why-production-agents-need-owners",
    title: "Why Production Agents Need Owners",
    description: "Useful agent use becomes unmanaged production practice without defined ownership, limits, and review paths.",
    image: cskillsImages.insights.productionAgentsOwners,
  },
  {
    slug: "from-loose-prompts-to-operating-files",
    title: "From Loose Prompts to Operating Files",
    description: "Private prompts become hidden infrastructure. Operating files turn them into company-owned, reviewable instructions.",
    image: cskillsImages.insights.loosePromptsOperatingFiles,
  },
  {
    slug: "the-human-approval-gate",
    title: "The Human Approval Gate",
    description: "Faster production can hide unclear approval paths. Human approval gates define who reviews what and when.",
    image: cskillsImages.insights.humanApprovalGate,
  },
  {
    slug: "why-rights-review-belongs-earlier",
    title: "Why Rights Review Belongs Earlier",
    description: "Late rights review creates pressure on legal, delays delivery, and exposes the company to risk that could have been flagged sooner.",
    image: cskillsImages.insights.legalitiesAiMedia,
  },
  {
    slug: "creation-rights-readiness-checklist",
    title: "Creation Rights Readiness Checklist",
    description: "A practical checklist for assessing whether your company process is ready for governed media creation at scale.",
    image: cskillsImages.insights.creationRightsValue,
  },
] as const;
