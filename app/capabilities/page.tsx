import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import SplitPanel from "@/components/sections/SplitPanel";
import FinalCTA from "@/components/ui/FinalCTA";
import { cskillsImages } from "@/content/images";

export const metadata: Metadata = getPageMeta("/capabilities");

export default function CapabilitiesPage() {
  return (
    <>
      <Hero
        eyebrow="CAPABILITIES"
        headline="Build the media skills your enterprise team needs."
        subhead="Creation Skills helps enterprise teams design the approved media skills, creation flows, Media Skill Packs, approval gates, rights rules, and evidence requirements behind governed multimodal production."
        image={cskillsImages.supporting.whatWeDo}
        compact
        primaryCta={{ label: "Book a C/Skills Review", href: "/book-review" }}
        secondaryCta={{ label: "Explore Programs", href: "/programs" }}
      />

      <Section>
        <Container>
          <SplitPanel image={cskillsImages.core.howWeWork} imageAlt="How Creation Skills works">
            <Eyebrow>THE PROBLEM</Eyebrow>
            <h2>Production has outgrown the process.</h2>
            <p>
              Most companies are already using tools for video, translation, social, product media, and more.
              But the prompts are scattered. The files are messy. The handoffs are hard to repeat. The review paths are unclear.
            </p>
            <p>
              Creation Skills builds the missing operating layer between the tools teams are already using and the governance the company needs.
            </p>
          </SplitPanel>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <div className="section-header">
            <Eyebrow>WHAT WE BUILD</Eyebrow>
            <h2>Governed media skills for your creation flow.</h2>
          </div>
          <div className="proof-grid">
            <div className="proof-block">
              <h3 className="proof-block__title">Creation Flow Design</h3>
              <p className="proof-block__desc">We document how your team creates, reviews, versions, packages, approves, and delivers media today, then design the future-state model.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Media Agent Skill Definitions</h3>
              <p className="proof-block__desc">We design company-owned media skills with defined roles, owners, approved actions, blocked actions, operating files, and human checkpoints.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Human Approval &amp; Governance</h3>
              <p className="proof-block__desc">We define who approves what, when review is required, and what cannot move forward without a human decision.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="section-header">
            <Eyebrow>CREATION RIGHTS READINESS</Eyebrow>
            <h2>Prepare your creation flow before the platform arrives.</h2>
            <p>Creation Skills prepares the creation flow. Creation Rights governs the protected layer. The platform works best when the creation flow is already clear.</p>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
