import { cskillsImages } from "./images";

export const audiences = [
  {
    slug: "media-and-entertainment-enterprises",
    title: "Media and Entertainment Enterprises",
    description: "Studios, streamers, publishers, networks, agencies, music companies, sports media groups, and entertainment companies managing complex creative production.",
    image: cskillsImages.audiences.studiosMedia,
  },
  {
    slug: "brands-with-large-content-operations",
    title: "Brands with Large Content Operations",
    description: "Companies producing projects, product media, social content, influencer assets, talent-led media, and digital media assets at scale.",
    image: cskillsImages.audiences.brands,
  },
  {
    slug: "agencies-and-production-companies",
    title: "Agencies and Production Companies",
    description: "Teams handling client work, talent usage, creator content, approvals, asset reuse, and release package delivery across many stakeholders.",
    image: cskillsImages.audiences.agencies,
  },
  {
    slug: "enterprise-creative-operations",
    title: "Enterprise Creative Operations Teams",
    description: "Internal creative, legal, brand, production, marketing, technology, and operations teams that need a clearer media creation process before new tools and production paths scale across departments.",
    image: cskillsImages.audiences.enterpriseCreativeOps,
  },
] as const;
