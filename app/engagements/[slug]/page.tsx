import { notFound } from "next/navigation";
import { engagements } from "@/content/engagements";
import { getMarkdownContent } from "@/lib/content";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import CTAGroup from "@/components/ui/CTAGroup";
import FinalCTA from "@/components/ui/FinalCTA";

export function generateStaticParams() {
  return engagements.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const engagement = engagements.find((e) => e.slug === slug);
    if (!engagement) return {};
    return {
      title: `${engagement.title} | Creation Skills`,
      description: engagement.description,
    };
  });
}

export default async function EngagementPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const engagement = engagements.find((e) => e.slug === slug);
  if (!engagement) notFound();

  const raw = getMarkdownContent("engagements", slug);
  const lines = raw.split("\n").filter((l) => l.trim());
  const bodyLines = lines.filter(
    (l) => !l.startsWith("#") && !l.startsWith("---") && !l.startsWith("**")
  );
  const bodyText = bodyLines.slice(0, 6).join(" ").replace(/\*\*/g, "").trim();

  return (
    <>
      <Hero
        eyebrow="ENGAGEMENT"
        headline={engagement.title}
        subhead={engagement.description}
        image={engagement.image}
        compact
      />

      <Section>
        <Container narrow>
          {bodyText && <p style={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-2xl)" }}>{bodyText}</p>}
          <CTAGroup
            primary={{ label: "Book a C/Skills Review", href: "/book-review" }}
            secondary={{ label: "All Engagements", href: "/engagements" }}
          />
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
