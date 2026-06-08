import { notFound } from "next/navigation";
import { programs } from "@/content/programs";
import { parsePage } from "@/lib/content";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import CTAGroup from "@/components/ui/CTAGroup";
import FinalCTA from "@/components/ui/FinalCTA";

export function generateStaticParams() {
  return programs
    .filter((p) => p.slug !== "skill-packs")
    .map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const program = programs.find((p) => p.slug === slug);
    if (!program) return {};
    return {
      title: `${program.title} | Creation Skills`,
      description: program.description,
    };
  });
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const page = parsePage("programs", slug);
  const heroSection = page.sections.find((s) => s.body);
  const bodyText = heroSection?.body || "";

  return (
    <>
      <Hero
        eyebrow="PROGRAM"
        headline={program.title}
        subhead={program.description}
        image={program.image}
        compact
      />

      <Section>
        <Container narrow>
          <div className="prog-detail">
            <div className="prog-detail__field">
              <span className="prog-card__label">What you get</span>
              <p className="prog-detail__value">{program.whatYouGet}</p>
            </div>
            <div className="prog-detail__field">
              <span className="prog-card__label">Best for</span>
              <p className="prog-detail__value">{program.bestFor}</p>
            </div>
            <div className="prog-detail__field">
              <span className="prog-card__label">Outcome</span>
              <p className="prog-detail__value">{program.outcome}</p>
            </div>
          </div>
          {bodyText && <p style={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", marginTop: "var(--space-32)", color: "var(--color-text-secondary)" }}>{bodyText}</p>}
          <div style={{ marginTop: "var(--space-48)" }}>
            <CTAGroup
              primary={{ label: "Book a C/Skills Review", href: "/book-review" }}
              secondary={{ label: "All Programs", href: "/programs" }}
            />
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
