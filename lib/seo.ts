import type { Metadata } from "next";
import { pageSeo } from "@/content/seo";

export function getPageMeta(path: string, overrides?: Partial<Metadata>): Metadata {
  const seo = pageSeo[path];
  return {
    title: seo?.title ?? "Creation Skills | C/Skills",
    description: seo?.description ?? "Creation Skills helps companies build the company flow behind modern media.",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    other: {
      "theme-color": "#0d0d0d",
    },
    ...overrides,
  };
}
