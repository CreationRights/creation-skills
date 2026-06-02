import type { Metadata } from "next";
import { pageSeo } from "@/content/seo";

export function getPageMeta(path: string, overrides?: Partial<Metadata>): Metadata {
  const seo = pageSeo[path];
  return {
    title: seo?.title ?? "Creation Skills | C/Skills",
    description: seo?.description ?? "Creation Skills helps companies build the company flow behind modern media.",
    ...overrides,
  };
}
