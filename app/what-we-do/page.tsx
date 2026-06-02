import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import SplitPanel from "@/components/sections/SplitPanel";
import FinalCTA from "@/components/ui/FinalCTA";
import { cskillsImages } from "@/content/images";

export const metadata: Metadata = getPageMeta("/what-we-do");

export default function WhatWeDoPage() {
  return (
    <>
      <Hero
        eyebrow="WHAT WE DO"
        headline="Redesign the company flow behind how media gets made."
        subhead="Creation Skills helps companies redesign the people, production agents, operating files, approval gates, rights review, and protected records behind modern media creation."
        image={cskillsImages.supporting.whatWeDo}
        compact
        primaryCta={{ label: "Book a C/Skills Review", href: "/book-review" }}
        secondaryCta={{ label: "Explore Engagements", href: "/engagements" }}
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
            <h2>A governed company flow for media creation.</h2>
          </div>
          <div className="proof-grid">
            <div className="proof-block">
              <h3 className="proof-block__title">Company Flow Design</h3>
              <p className="proof-block__desc">We document how your team creates, reviews, versions, packages, approves, and delivers media today, then design the future-state model.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Production Agent Operating Paths</h3>
              <p className="proof-block__desc">We design company-owned agents with defined roles, owners, approved tasks, blocked tasks, operating files, and human checkpoints.</p>
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
            <h2>Prepare your company process before the platform arrives.</h2>
            <p>Creation Skills prepares the company process. Creation Rights governs the protected layer. The platform works best when the company flow is already clear.</p>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
