import { notFound } from "next/navigation";
import { concepts } from "@/content/concepts";
import { getMarkdownContent } from "@/lib/content";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import CTAGroup from "@/components/ui/CTAGroup";

export function generateStaticParams() {
  return concepts.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const concept = concepts.find((c) => c.slug === slug);
    if (!concept) return {};
    return {
      title: `${concept.title} | Creation Skills`,
      description: `Learn about ${concept.title} in the Creation Skills framework.`,
    };
  });
}

export default async function ConceptPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const concept = concepts.find((c) => c.slug === slug);
  if (!concept) notFound();

  const raw = getMarkdownContent("concepts", slug);
  const lines = raw.split("\n").filter((l) => l.trim());
  const bodyLines = lines.filter(
    (l) => !l.startsWith("#") && !l.startsWith("---") && !l.startsWith("**")
  );
  const bodyText = bodyLines.slice(0, 8).join(" ").replace(/\*\*/g, "").trim();

  return (
    <Section size="lg">
      <Container narrow>
        <Eyebrow>CONCEPT</Eyebrow>
        <h1>{concept.title}</h1>
        {bodyText && (
          <p style={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-relaxed)", marginTop: "var(--space-lg)", marginBottom: "var(--space-2xl)" }}>
            {bodyText}
          </p>
        )}
        <CTAGroup
          primary={{ label: "Book a C/Skills Review", href: "/book-review" }}
          secondary={{ label: "What We Do", href: "/what-we-do" }}
        />
      </Container>
    </Section>
  );
}
