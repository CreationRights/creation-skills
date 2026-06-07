import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import CardGrid from "@/components/sections/CardGrid";
import FinalCTA from "@/components/ui/FinalCTA";
import { programs } from "@/content/programs";

export const metadata: Metadata = getPageMeta("/programs");

export default function ProgramsPage() {
  return (
    <>
      <Hero
        eyebrow="PROGRAMS"
        headline="Advisory programs for governed multimodal media."
        subhead="Creation Skills helps enterprise creative, brand, legal, production, and operations teams design approved media skills, company flows, and Media Skill Packs for governed creation across image, video, audio, voice, likeness, and release."
        compact
        primaryCta={{ label: "Book a C/Skills Review", href: "/book-review" }}
      />

      <Section>
        <Container>
          <CardGrid
            columns={3}
            items={programs.map((p) => ({
              title: p.title,
              description: p.description,
              image: p.image,
              href: p.slug === "skill-packs" ? "/skill-packs" : `/programs/${p.slug}`,
              linkText: "Explore program",
            }))}
          />
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
