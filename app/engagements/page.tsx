import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import CardGrid from "@/components/sections/CardGrid";
import FinalCTA from "@/components/ui/FinalCTA";
import { engagements } from "@/content/engagements";

export const metadata: Metadata = getPageMeta("/engagements");

export default function EngagementsPage() {
  return (
    <>
      <Hero
        eyebrow="ENGAGEMENTS"
        headline="Consulting engagements for governed media creation."
        subhead="Creation Skills helps companies move from scattered tools and unclear handoffs to a governed media creation model that people can use, production agents can support, and Creation Rights can govern."
        compact
        primaryCta={{ label: "Book a C/Skills Review", href: "/book-review" }}
      />

      <Section>
        <Container>
          <CardGrid
            columns={3}
            items={engagements.map((e) => ({
              title: e.title,
              description: e.description,
              image: e.image,
              href: `/engagements/${e.slug}`,
              linkText: "View engagement",
            }))}
          />
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
