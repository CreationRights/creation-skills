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
        headline="Prepare your creation flow before the platform arrives."
        subhead="The Creation Rights platform cannot fix what the company has not defined. Creation Skills prepares the people, approved media skills, creation flows, approval gates, and evidence requirements so the platform can govern what matters."
        image={cskillsImages.core.creationRightsReadiness}
        compact
        primaryCta={{ label: "Book a C/Skills Review", href: "/book-review" }}
      />

      <Section>
        <Container>
          <SplitPanel image={cskillsImages.core.howWeWork} imageAlt="Creation flow readiness" reverse>
            <Eyebrow>WHY READINESS MATTERS</Eyebrow>
            <h2>The platform works best when the creation flow is already clear.</h2>
            <p>
              If creation flows are unclear, media skills are undefined, approval gates are informal, and rights review happens late, the platform cannot govern what does not exist.
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
              <h3 className="proof-block__title">Brand Profiles</h3>
              <p className="proof-block__desc">Documented brand guidelines, stylistic standards, and tonal requirements that media agents must follow.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Approved Model List</h3>
              <p className="proof-block__desc">The approved AI models and tools that media agents are permitted to use for governed media creation.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Approved Media Skills</h3>
              <p className="proof-block__desc">Company-owned skill definitions with defined roles, owners, limits, and operating files.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Rights &amp; NILP Rules</h3>
              <p className="proof-block__desc">NILP&reg; checks, consent review, usage scope, talent review, and reuse controls integrated into the creation flow.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Metadata Schema</h3>
              <p className="proof-block__desc">Required metadata fields that every output must carry for provenance, evidence, and release readiness.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Approval Gates</h3>
              <p className="proof-block__desc">Named owners, review triggers, escalation paths, and audit-ready decision records at every stage.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Evidence Checklist</h3>
              <p className="proof-block__desc">The evidence records that must be captured and stored at each stage for approval and release readiness.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Release Proof Template</h3>
              <p className="proof-block__desc">The structured proof format that confirms all governance checks have been completed before release.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Release Manifest Template</h3>
              <p className="proof-block__desc">The complete record of what was released, where it went, and what evidence supports the release decision.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Destination Handoff Rules</h3>
              <p className="proof-block__desc">Rules governing where approved outputs can be delivered and what metadata must accompany each handoff.</p>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
