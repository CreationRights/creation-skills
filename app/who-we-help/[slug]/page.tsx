import { notFound } from "next/navigation";
import { audiences } from "@/content/audiences";
import { getMarkdownContent } from "@/lib/content";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import CTAGroup from "@/components/ui/CTAGroup";
import FinalCTA from "@/components/ui/FinalCTA";

export function generateStaticParams() {
  return audiences.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const audience = audiences.find((a) => a.slug === slug);
    if (!audience) return {};
    return {
      title: `${audience.title} | Creation Skills`,
      description: audience.description,
    };
  });
}

export default async function AudiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const audience = audiences.find((a) => a.slug === slug);
  if (!audience) notFound();

  const raw = getMarkdownContent("audiences", slug);
  const lines = raw.split("\n").filter((l) => l.trim());
  const bodyLines = lines.filter(
    (l) => !l.startsWith("#") && !l.startsWith("---") && !l.startsWith("**")
  );
  const bodyText = bodyLines.slice(0, 6).join(" ").replace(/\*\*/g, "").trim();

  return (
    <>
      <Hero
        eyebrow="WHO WE HELP"
        headline={audience.title}
        subhead={audience.description}
        image={audience.image}
        compact
      />

      <Section>
        <Container narrow>
          {bodyText && <p style={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-2xl)" }}>{bodyText}</p>}
          <CTAGroup
            primary={{ label: "Book a C/Skills Review", href: "/book-review" }}
            secondary={{ label: "All Audiences", href: "/who-we-help" }}
          />
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
