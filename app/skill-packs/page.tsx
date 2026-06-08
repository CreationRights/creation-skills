import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import FinalCTA from "@/components/ui/FinalCTA";
import SkillPackFilter from "@/components/ui/SkillPackFilter";
import { skillPacks } from "@/content/skillPacks";

export const metadata: Metadata = getPageMeta("/skill-packs");

export default function SkillPacksPage() {
  return (
    <>
      <Hero
        eyebrow="MEDIA SKILL PACK LIBRARY"
        headline="Approved skill packs for creative teams."
        subhead="Browse sample Skill Packs across image, video, audio, voice, likeness, metadata, review, and release. Each pack shows how a company can define approved tools, models, assets, brand rules, rights rules, metadata, approvals, evidence, and Creation Rights checks before work moves forward."
        compact
        primaryCta={{ label: "Book a C/Skills Review", href: "/book-review" }}
        secondaryCta={{ label: "Request Client Library Preview", href: "/contact" }}
      />

      <SkillPackFilter packs={skillPacks} />

      {/* Client Library Preview */}
      <section className="sp2-section sp2-section--dark">
        <div className="sp2-container">
          <div className="sp2-section-header">
            <span className="sp2-label">Client Library</span>
            <h2 className="sp2-section-title">Client teams get more.</h2>
            <p className="sp2-section-desc">Public visitors can preview sample Skill Packs above. Client teams receive the full operating file, approved tool and model list, Brand Profile references, Rights &amp; NILP&reg; rules, metadata templates, evidence checklist, approval paths, sample prompts, run instructions, and Creation Rights rollout notes.</p>
          </div>
          <div className="sp2-client-grid">
            <div className="sp2-client-item">
              <span className="sp2-client-icon">01</span>
              <h3>Versioned Operating Files</h3>
              <p>Company-owned operating files with version history and change tracking.</p>
            </div>
            <div className="sp2-client-item">
              <span className="sp2-client-icon">02</span>
              <h3>Approved Model &amp; Tool Lists</h3>
              <p>Client-specific model approvals with access rules and review cadence.</p>
            </div>
            <div className="sp2-client-item">
              <span className="sp2-client-icon">03</span>
              <h3>Brand Profile References</h3>
              <p>Direct links to the Brand Profiles each pack must follow.</p>
            </div>
            <div className="sp2-client-item">
              <span className="sp2-client-icon">04</span>
              <h3>Rights &amp; NILP&reg; Rules</h3>
              <p>Specific consent boundaries and rights constraints per pack.</p>
            </div>
            <div className="sp2-client-item">
              <span className="sp2-client-icon">05</span>
              <h3>Evidence Checklists</h3>
              <p>Required evidence artifacts mapped to Creation Rights fields.</p>
            </div>
            <div className="sp2-client-item">
              <span className="sp2-client-icon">06</span>
              <h3>Rollout Notes</h3>
              <p>Pack-specific readiness checkpoints and platform connection details.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        headline="Ready to define your team's Skill Packs?"
        body="Creation Skills designs approved Skill Packs tailored to your creative system, brand rules, rights rules, and Creation Rights readiness. Start with a C/Skills Review."
      />
    </>
  );
}
