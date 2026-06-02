import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import SplitPanel from "@/components/sections/SplitPanel";
import FinalCTA from "@/components/ui/FinalCTA";
import { cskillsImages } from "@/content/images";

export const metadata: Metadata = getPageMeta("/creation-rights-readiness");

export default function CreationRightsReadinessPage() {
  return (
    <>
      <Hero
        eyebrow="CREATION RIGHTS READINESS"
        headline="Prepare your company process before the platform arrives."
        subhead="The Creation Rights platform cannot fix what the company has not defined. Creation Skills prepares the people, production agents, operating files, approval gates, and rights review paths so the platform can govern what matters."
        image={cskillsImages.core.creationRightsReadiness}
        compact
        primaryCta={{ label: "Book a C/Skills Review", href: "/book-review" }}
      />

      <Section>
        <Container>
          <SplitPanel image={cskillsImages.core.howWeWork} imageAlt="Company flow readiness" reverse>
            <Eyebrow>WHY READINESS MATTERS</Eyebrow>
            <h2>The platform works best when the company flow is already clear.</h2>
            <p>
              If production paths are unclear, agent roles are undefined, approval gates are informal, and rights review happens late, the platform cannot govern what does not exist.
            </p>
            <p>
              Creation Skills helps companies define the operating model so Creation Rights has something real to govern.
            </p>
          </SplitPanel>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <div className="section-header">
            <Eyebrow>READINESS CHECKPOINTS</Eyebrow>
            <h2>What Creation Skills prepares.</h2>
          </div>
          <div className="proof-grid">
            <div className="proof-block">
              <h3 className="proof-block__title">Production Paths</h3>
              <p className="proof-block__desc">Documented company flow from brief intake through delivery, reuse, and reporting.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Agent Profiles</h3>
              <p className="proof-block__desc">Company-owned production agents with defined roles, owners, limits, and operating files.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Approval Gates</h3>
              <p className="proof-block__desc">Named owners, review triggers, escalation paths, and audit-ready decision records.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Rights Review</h3>
              <p className="proof-block__desc">NILP&reg; checks, consent review, usage scope, talent review, and reuse controls.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Operating Files</h3>
              <p className="proof-block__desc">Company-owned instructions that define tasks, blocked actions, formats, and review steps.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Protected Records</h3>
              <p className="proof-block__desc">Metadata requirements, audit trails, compliance records, and governance documentation.</p>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
