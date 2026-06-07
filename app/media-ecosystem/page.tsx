import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import FinalCTA from "@/components/ui/FinalCTA";

export const metadata: Metadata = getPageMeta("/media-ecosystem");

export default function MediaEcosystemPage() {
  return (
    <>
      <Hero
        eyebrow="MEDIA ECOSYSTEM"
        headline="The new media stack is already here. Most teams just do not have rules for it yet."
        subhead="Creative teams now work across models, prompts, agents, asset libraries, review systems, DAMs, MAMs, metadata standards, voice tools, video tools, and release records. Creation Skills helps companies turn that stack into approved media capability."
        compact
        primaryCta={{ label: "Book a C/Skills Review", href: "/book-review" }}
        secondaryCta={{ label: "Explore Skill Packs", href: "/skill-packs" }}
      />

      <Section>
        <Container>
          <div className="section-header">
            <Eyebrow>MEDIA STACK</Eyebrow>
            <h2>Designed around the tools and systems your team already uses.</h2>
            <p>Skill Packs can be designed around any combination of the tools, models, asset systems, review platforms, metadata standards, and release controls below.</p>
          </div>
          <div className="hp-stack__board">
            <div className="hp-stack__group">
              <span className="hp-stack__group-label">Creative Models and Generation</span>
              <div className="hp-stack__pills">
                <span className="hp-stack__pill">Runway</span>
                <span className="hp-stack__pill">LTX</span>
                <span className="hp-stack__pill">Krea</span>
                <span className="hp-stack__pill">Luma</span>
                <span className="hp-stack__pill">Adobe Firefly</span>
                <span className="hp-stack__pill">ComfyUI</span>
                <span className="hp-stack__pill">fal.ai</span>
              </div>
            </div>
            <div className="hp-stack__group">
              <span className="hp-stack__group-label">Voice, Audio, and Localization</span>
              <div className="hp-stack__pills">
                <span className="hp-stack__pill">ElevenLabs</span>
                <span className="hp-stack__pill">Dubbing tools</span>
                <span className="hp-stack__pill">Translation systems</span>
                <span className="hp-stack__pill">DDEX</span>
              </div>
            </div>
            <div className="hp-stack__group">
              <span className="hp-stack__group-label">Review and Collaboration</span>
              <div className="hp-stack__pills">
                <span className="hp-stack__pill">Frame.io</span>
                <span className="hp-stack__pill">Creative review tools</span>
                <span className="hp-stack__pill">Internal approval systems</span>
              </div>
            </div>
            <div className="hp-stack__group">
              <span className="hp-stack__group-label">DAM, MAM, and Asset Systems</span>
              <div className="hp-stack__pills">
                <span className="hp-stack__pill">AEM Assets</span>
                <span className="hp-stack__pill">Bynder</span>
                <span className="hp-stack__pill">S3</span>
                <span className="hp-stack__pill">Internal DAM/MAM</span>
              </div>
            </div>
            <div className="hp-stack__group">
              <span className="hp-stack__group-label">Metadata and Provenance</span>
              <div className="hp-stack__pills">
                <span className="hp-stack__pill">C2PA</span>
                <span className="hp-stack__pill">Content Credentials</span>
                <span className="hp-stack__pill">IPTC</span>
                <span className="hp-stack__pill">DDEX</span>
              </div>
            </div>
            <div className="hp-stack__group hp-stack__group--accent">
              <span className="hp-stack__group-label">Creation Rights Control Layer</span>
              <div className="hp-stack__pills">
                <span className="hp-stack__pill hp-stack__pill--accent">Brand Profiles</span>
                <span className="hp-stack__pill hp-stack__pill--accent">Rights &amp; NILP&reg;</span>
                <span className="hp-stack__pill hp-stack__pill--accent">Release Proof</span>
                <span className="hp-stack__pill hp-stack__pill--accent">Release Manifest</span>
                <span className="hp-stack__pill hp-stack__pill--accent">Protected Records</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <div className="section-header">
            <Eyebrow>HOW C/SKILLS WORKS ACROSS THE STACK</Eyebrow>
            <h2>C/Skills prepares rules and handoff paths for each layer.</h2>
          </div>
          <div className="proof-grid">
            <div className="proof-block">
              <h3 className="proof-block__title">Approved Model Lists</h3>
              <p className="proof-block__desc">Which models and tools are permitted for production use, with version tracking and review cadence.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Asset Access Rules</h3>
              <p className="proof-block__desc">What assets each skill can touch, where they come from, and what rights must be confirmed before use.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Brand Rules</h3>
              <p className="proof-block__desc">Which Brand Profiles apply to each skill, what tone and style requirements govern output, and how alignment is checked.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Rights &amp; NILP&reg; Rules</h3>
              <p className="proof-block__desc">What NILP&reg; (Name, Image, Likeness, and Persona) constraints apply and how consent is verified at each stage.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Metadata Requirements</h3>
              <p className="proof-block__desc">What metadata must be returned by every skill, mapped to provenance standards and Creation Rights fields.</p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Evidence and Release</h3>
              <p className="proof-block__desc">What evidence must be captured at each stage and what Creation Rights checks before media is released.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="section-header">
            <Eyebrow>ADVISORY POSITION</Eyebrow>
            <h2>Creation Skills does not replace these tools.</h2>
            <p>It helps enterprise teams decide how they should be used, governed, reviewed, documented, and prepared for Creation Rights. We design the rules. We do not sell the tools.</p>
          </div>
        </Container>
      </Section>

      <FinalCTA
        headline="Ready to define rules for your media stack?"
        body="Creation Skills helps enterprise teams turn scattered tools into governed media capability with approved skills, brand rules, rights rules, evidence requirements, and Creation Rights readiness."
      />
    </>
  );
}
