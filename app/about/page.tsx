import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import EcosystemSplit from "@/components/sections/EcosystemSplit";
import FinalCTA from "@/components/ui/FinalCTA";
import { cskillsImages } from "@/content/images";

export const metadata: Metadata = getPageMeta("/about");

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="ABOUT"
        headline="The consulting and transformation division of Creation Rights."
        subhead="Creation Skills helps companies redesign the operating model behind media creation so the people, production agents, operating files, approval gates, and rights review paths are ready before the Creation Rights platform governs the protected layer."
        image={cskillsImages.supporting.about}
        compact
      />

      <Section>
        <Container>
          <div className="section-header">
            <Eyebrow>WHY CREATION SKILLS EXISTS</Eyebrow>
            <h2>The platform works best when the company process is ready.</h2>
            <p>
              Creation Rights is the platform where rights, NILP&reg;, consent, talent use, metadata, approvals, audit, and compliance-sensitive media records are governed.
              But the platform cannot fix what the company has not defined.
            </p>
            <p>
              Creation Skills prepares the company process: the people, production agents, operating files, approval gates, and review paths that let media move with control.
            </p>
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <div className="section-header">
            <Eyebrow>THREE CONNECTED ROLES</Eyebrow>
            <h2>Creation Skills. Creation Rights. CreativeIP.org.</h2>
          </div>
          <EcosystemSplit
            left={{
              title: "Creation Skills",
              items: [
                "Consulting and transformation",
                "Company flow redesign",
                "Production agent design",
                "Operating file development",
                "Approval gate design",
                "Skills transfer",
              ],
            }}
            center={{
              title: "Creation Rights",
              items: [
                "Platform and governance",
                "Rights management",
                "NILP\u00AE governance",
                "Consent and talent use",
                "Metadata and audit",
                "Protected records",
              ],
            }}
            right={{
              title: "CreativeIP.org",
              items: [
                "Professional development",
                "CIP certification tracks",
                "Creative IP literacy",
                "Rights governance education",
                "Industry standards",
                "Recognised qualifications",
              ],
            }}
          />
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <div className="section-header">
            <Eyebrow>WHY SKILLS</Eyebrow>
            <h2>The consulting work must leave the company with usable internal capability.</h2>
            <p>
              Creation Skills is named Skills because every engagement is designed to transfer practical capability to the teams who will operate the system. This is not a dependency model. It is a readiness model.
            </p>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
