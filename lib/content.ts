import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content", "pages");

export function getMarkdownContent(category: string, slug: string): string {
  const filePath = path.join(CONTENT_DIR, category, `${slug}.md`);
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return "";
  }
}

interface ParsedSection {
  eyebrow?: string;
  headline?: string;
  body?: string;
  items?: Array<{ title: string; description: string }>;
}

interface ParsedPage {
  title: string;
  sections: ParsedSection[];
  raw: string;
}

export function parsePage(category: string, slug: string): ParsedPage {
  const raw = getMarkdownContent(category, slug);
  const lines = raw.split("\n");

  let title = "";
  const sections: ParsedSection[] = [];
  let currentSection: ParsedSection | null = null;
  let currentField: string | null = null;
  let buffer: string[] = [];
  let items: Array<{ title: string; description: string }> = [];
  let currentItemTitle = "";
  let currentItemDesc: string[] = [];

  function flushField() {
    if (!currentSection || !currentField) return;
    const text = buffer.join("\n").trim();
    if (currentField === "eyebrow") currentSection.eyebrow = text;
    if (currentField === "headline") currentSection.headline = text;
    if (currentField === "body") currentSection.body = text;
    buffer = [];
    currentField = null;
  }

  function flushItem() {
    if (currentItemTitle) {
      items.push({ title: currentItemTitle, description: currentItemDesc.join("\n").trim() });
      currentItemTitle = "";
      currentItemDesc = [];
    }
  }

  function flushSection() {
    flushField();
    flushItem();
    if (currentSection) {
      if (items.length > 0) currentSection.items = items;
      sections.push(currentSection);
      items = [];
    }
  }

  for (const line of lines) {
    if (line.startsWith("# ") && !title) {
      title = line.replace(/^#\s+/, "").replace(/\*\*/g, "").trim();
      continue;
    }

    if (line.startsWith("# **") || (line.startsWith("# ") && title)) {
      flushSection();
      currentSection = {};
      currentField = null;
      continue;
    }

    if (line.startsWith("## **Eyebrow") || line === "## **Eyebrow**") {
      flushField();
      currentField = "eyebrow";
      continue;
    }
    if (line.startsWith("## **Headline") || line === "## **Headline**") {
      flushField();
      currentField = "headline";
      continue;
    }
    if (line.startsWith("## **Subhead") || line === "## **Subhead**") {
      flushField();
      currentField = "headline";
      continue;
    }
    if (line.startsWith("## **Body") || line === "## **Body**") {
      flushField();
      currentField = "body";
      continue;
    }

    if (line.startsWith("### **")) {
      flushItem();
      currentItemTitle = line.replace(/^###\s+/, "").replace(/\*\*/g, "").trim();
      continue;
    }

    if (currentItemTitle && line.trim()) {
      currentItemDesc.push(line.trim());
      continue;
    }

    if (currentField && line.trim() && !line.startsWith("## ")) {
      buffer.push(line.trim());
    }
  }

  flushSection();

  return { title, sections, raw };
}

export function getPageSlugs(category: string): string[] {
  const dir = path.join(CONTENT_DIR, category);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}
