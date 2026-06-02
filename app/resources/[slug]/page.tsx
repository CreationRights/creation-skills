import { notFound } from "next/navigation";
import { resources } from "@/content/resources";
import { getMarkdownContent } from "@/lib/content";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import CTAGroup from "@/components/ui/CTAGroup";
import FinalCTA from "@/components/ui/FinalCTA";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const resource = resources.find((r) => r.slug === slug);
    if (!resource) return {};
    return {
      title: `${resource.title} | Creation Skills`,
      description: resource.description,
    };
  });
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = resources.find((r) => r.slug === slug);
  if (!resource) notFound();

  const raw = getMarkdownContent("resources", slug);
  const lines = raw.split("\n").filter((l) => l.trim());
  const bodyLines = lines.filter(
    (l) => !l.startsWith("#") && !l.startsWith("---") && !l.startsWith("**")
  );
  const bodyText = bodyLines.slice(0, 8).join(" ").replace(/\*\*/g, "").trim();

  return (
    <>
      <Hero
        eyebrow="RESOURCES"
        headline={resource.title}
        subhead={resource.description}
        image={resource.image}
        compact
      />

      <Section>
        <Container narrow>
          {bodyText && <p style={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-2xl)" }}>{bodyText}</p>}
          <CTAGroup
            primary={{ label: "Book a C/Skills Review", href: "/book-review" }}
            secondary={{ label: "All Resources", href: "/resources" }}
          />
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
