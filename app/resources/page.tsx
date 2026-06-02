import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import CardGrid from "@/components/sections/CardGrid";
import FinalCTA from "@/components/ui/FinalCTA";
import { resources } from "@/content/resources";

export const metadata: Metadata = getPageMeta("/resources");

export default function ResourcesPage() {
  return (
    <>
      <Hero
        eyebrow="RESOURCES"
        headline="Field notes on governed media creation."
        subhead="Practical perspectives on production agents, operating files, human approval gates, rights review, and Creation Rights readiness."
        compact
      />

      <Section>
        <Container>
          <CardGrid
            columns={3}
            items={resources.map((r) => ({
              title: r.title,
              description: r.description,
              image: r.image,
              href: `/resources/${r.slug}`,
              linkText: "Read article",
            }))}
          />
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
