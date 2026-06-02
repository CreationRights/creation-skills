import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import CardGrid from "@/components/sections/CardGrid";
import FinalCTA from "@/components/ui/FinalCTA";
import { audiences } from "@/content/audiences";
import { cskillsImages } from "@/content/images";

export const metadata: Metadata = getPageMeta("/who-we-help");

export default function WhoWeHelpPage() {
  return (
    <>
      <Hero
        eyebrow="WHO WE HELP"
        headline="For teams turning files into finished media."
        subhead="Creation Skills works with media enterprises, brands, agencies, and enterprise creative operations teams redesigning how creative work gets made, reviewed, approved, and governed."
        image={cskillsImages.supporting.whoWeHelp}
        compact
        primaryCta={{ label: "Book a C/Skills Review", href: "/book-review" }}
      />

      <Section>
        <Container>
          <CardGrid
            columns={2}
            items={audiences.map((a) => ({
              title: a.title,
              description: a.description,
              image: a.image,
              href: `/who-we-help/${a.slug}`,
              linkText: "Learn more",
            }))}
          />
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
