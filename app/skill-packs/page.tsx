import { Metadata } from "next";
import Image from "next/image";
import { getPageMeta } from "@/lib/seo";
import { cskillsImages } from "@/content/images";
import Hero from "@/components/sections/Hero";
import FinalCTA from "@/components/ui/FinalCTA";

export const metadata: Metadata = getPageMeta("/skill-packs");

type PackData = {
  name: string;
  slug?: string;
  category: string;
  outcome: string;
  ecosystem: string[];
  image: string;
  featured?: boolean;
};

function PackCard({ name, slug, category, outcome, ecosystem, image }: PackData) {
  const Tag = slug ? "a" : "div";
  const linkProps = slug ? { href: `/skill-packs/${slug}` } : {};
  return (
    <Tag className="sp2-card" {...linkProps}>
      <div className="sp2-card__image">
        <Image
          src={image}
          alt={name}
          width={400}
          height={220}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="sp2-card__body">
        <span className="sp2-card__category">{category}</span>
        <h3 className="sp2-card__name">{name}</h3>
        <p className="sp2-card__outcome">{outcome}</p>
        <div className="sp2-card__ecosystem">
          {ecosystem.map((item) => (
            <span key={item} className="sp2-card__eco-chip">{item}</span>
          ))}
        </div>
        <span className="sp2-card__cta">Preview Pack &rarr;</span>
      </div>
    </Tag>
  );
}

function FeaturedCard({ name, slug, category, outcome, ecosystem, image }: PackData) {
  const Tag = slug ? "a" : "div";
  const linkProps = slug ? { href: `/skill-packs/${slug}` } : {};
  return (
    <Tag className="sp2-featured" {...linkProps}>
      <div className="sp2-featured__image">
        <Image
          src={image}
          alt={name}
          width={640}
          height={360}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="sp2-featured__body">
        <span className="sp2-card__category">{category}</span>
        <h3 className="sp2-featured__name">{name}</h3>
        <p className="sp2-featured__outcome">{outcome}</p>
        <div className="sp2-card__ecosystem">
          {ecosystem.map((item) => (
            <span key={item} className="sp2-card__eco-chip">{item}</span>
          ))}
        </div>
        <span className="sp2-card__cta">Preview Pack &rarr;</span>
      </div>
    </Tag>
  );
}

const categories = [
  "All", "Image", "Video", "Audio", "Voice", "Localization",
  "Product Media", "Metadata", "Review", "Rights", "Release",
];

const featuredPacks: PackData[] = [
  {
    name: "AI Video Generation Skill Pack",
    slug: "ai-video-generation",
    category: "Video / Model-assisted creation",
    outcome: "Define approved use of video generation tools, source assets, likeness limits, review gates, evidence capture, and release checks.",
    ecosystem: ["Runway", "LTX", "fal.ai", "ComfyUI", "Adobe Firefly"],
    image: cskillsImages.capabilities.productionAgentSkills,
    featured: true,
  },
  {
    name: "Release Proof Skill Pack",
    category: "Release / Governance",
    outcome: "Assemble the complete evidence record required before governed media can be released through Creation Rights.",
    ecosystem: ["Creation Rights", "C2PA", "Content Credentials"],
    image: cskillsImages.core.creationRightsReadiness,
    featured: true,
  },
  {
    name: "Voice and Localization Skill Pack",
    slug: "voice-and-localization",
    category: "Voice / Persona protection",
    outcome: "Define consent rules, persona protections, locale requirements, and evidence capture for voice and dubbed content.",
    ecosystem: ["ElevenLabs", "Dubbing tools", "Rights & NILP\u00AE"],
    image: cskillsImages.capabilities.rightsSafeProduction,
    featured: true,
  },
];

const imageVideoPacks: PackData[] = [
  {
    name: "Image Generation Skill Pack",
    category: "Image / Model-assisted creation",
    outcome: "Define approved image generation from text or reference inputs with brand and rights checks at every stage.",
    ecosystem: ["fal.ai", "ComfyUI", "Midjourney", "Adobe Firefly"],
    image: cskillsImages.capabilities.agentToolPlaybooks,
  },
  {
    name: "Cutdown Skill Pack",
    category: "Video / Post-production",
    outcome: "Create format-specific cutdowns from approved masters with rights inheritance and talent usage scope.",
    ecosystem: ["Frame.io", "Adobe Premiere", "DaVinci Resolve"],
    image: cskillsImages.engagements.operatingModelDesign,
  },
  {
    name: "LTX Video Skill Pack",
    category: "Video / Model-assisted creation",
    outcome: "Define governed video generation and editing rules for LTX model infrastructure.",
    ecosystem: ["LTX Video", "LTX image-to-video", "LTX keyframe"],
    image: cskillsImages.engagements.pilotTransformation,
  },
  {
    name: "ComfyUI Production Skill Pack",
    category: "Image / Pipeline governance",
    outcome: "Run governed ComfyUI pipelines with approved node lists, brand LoRAs, and evidence capture.",
    ecosystem: ["ComfyUI", "ControlNet", "IP-Adapter", "LoRA"],
    image: cskillsImages.engagements.governanceBlueprint,
  },
  {
    name: "Product Media Skill Pack",
    category: "Product Media / Brand-controlled",
    outcome: "Generate product visuals and packaging renders under brand rules with evidence and metadata return.",
    ecosystem: ["ComfyUI", "fal.ai", "Adobe Firefly", "AEM Assets"],
    image: cskillsImages.capabilities.companyFlowDesign,
  },
  {
    name: "fal.ai Model Access Skill Pack",
    category: "Image / Model access governance",
    outcome: "Access fal.ai model endpoints for governed image and video generation with approved endpoint lists.",
    ecosystem: ["fal.ai", "Flux", "SDXL", "Lightning models"],
    image: cskillsImages.engagements.agentOperatingBlueprint,
  },
];

const audioVoicePacks: PackData[] = [
  {
    name: "ElevenLabs Voice Review Skill Pack",
    category: "Voice / Consent governance",
    outcome: "Review and govern voice outputs with talent consent verification and persona protection checks.",
    ecosystem: ["ElevenLabs", "Voice cloning review", "Consent systems"],
    image: cskillsImages.capabilities.executiveWorkshops,
  },
  {
    name: "Localization Skill Pack",
    category: "Localization / Multi-market",
    outcome: "Localize media across languages and markets with cultural review, consent per locale, and rights scope.",
    ecosystem: ["Dubbing tools", "Translation systems", "DDEX"],
    image: cskillsImages.capabilities.implementationSupport,
  },
];

const assetMetadataPacks: PackData[] = [
  {
    name: "DAM Handoff Skill Pack",
    slug: "dam-handoff",
    category: "Asset systems / Handoff governance",
    outcome: "Govern the handoff of approved media to DAM systems with full metadata and evidence records.",
    ecosystem: ["AEM Assets", "Bynder", "S3", "Internal DAM/MAM"],
    image: cskillsImages.engagements.implementationOffice,
  },
  {
    name: "Metadata Enrichment Skill Pack",
    slug: "metadata-enrichment",
    category: "Metadata / Provenance",
    outcome: "Enrich asset metadata for searchability, rights tracking, and release readiness with schema validation.",
    ecosystem: ["IPTC", "C2PA", "Content Credentials", "DDEX"],
    image: cskillsImages.engagements.review,
  },
  {
    name: "Frame.io Review Skill Pack",
    category: "Review / Approval routing",
    outcome: "Define governed review and approval routing with escalation rules and evidence capture.",
    ecosystem: ["Frame.io", "Creative review tools"],
    image: cskillsImages.audiences.agencies,
  },
  {
    name: "AEM Assets Readiness Skill Pack",
    category: "Asset systems / Platform prep",
    outcome: "Prepare media for governed ingestion into Adobe Experience Manager with metadata alignment.",
    ecosystem: ["Adobe AEM Assets", "Metadata mapping", "Taxonomy"],
    image: cskillsImages.audiences.enterpriseCreativeOps,
  },
  {
    name: "Archive Reuse Skill Pack",
    category: "Asset systems / Rights verification",
    outcome: "Access and reuse archived media with rights verification, re-consent checks, and provenance tracking.",
    ecosystem: ["AEM Assets", "Bynder", "Internal DAM/MAM"],
    image: cskillsImages.audiences.brands,
  },
];

const rightsReleasePacks: PackData[] = [
  {
    name: "Brand Review Skill Pack",
    category: "Brand / Review governance",
    outcome: "Run brand alignment checks against approved Brand Profiles with evidence and escalation paths.",
    ecosystem: ["Brand Profiles", "Creative review tools"],
    image: cskillsImages.audiences.studiosMedia,
  },
  {
    name: "Rights & NILP\u00AE Check Skill Pack",
    slug: "rights-and-nilp-check",
    category: "Rights / Persona protection",
    outcome: "Verify NILP\u00AE compliance, consent boundaries, and rights constraints before media moves forward.",
    ecosystem: ["Rights & NILP\u00AE", "Consent systems", "Creation Rights"],
    image: cskillsImages.capabilities.rightsSafeProduction,
  },
  {
    name: "Content Credentials Skill Pack",
    category: "Provenance / Release prep",
    outcome: "Attach content credentials and provenance data to media outputs for verified distribution.",
    ecosystem: ["C2PA", "Content Credentials", "IPTC"],
    image: cskillsImages.insights.creationRightsValue,
  },
];

export default function SkillPacksPage() {
  return (
    <>
      <Hero
        eyebrow="MEDIA SKILL PACK LIBRARY"
        headline="Approved skill packs for multimodal media teams."
        subhead="Browse sample Media Skill Packs across image, video, audio, voice, likeness, metadata, review, and release. Each pack shows how a company can define approved tools, models, agents, assets, brand rules, rights rules, metadata, approvals, evidence, and Creation Rights checks before media moves forward."
        compact
        primaryCta={{ label: "Book a C/Skills Review", href: "/book-review" }}
        secondaryCta={{ label: "Request Client Library Preview", href: "/contact" }}
      />

      {/* Search + Categories */}
      <section className="sp-filter">
        <div className="sp-filter__container">
          <div className="sp-filter__search">
            <span className="sp-filter__search-icon">/</span>
            <span className="sp-filter__search-text">Search skill packs by name, category, or capability...</span>
          </div>
          <div className="sp-filter__chips">
            {categories.map((cat) => (
              <span key={cat} className={`sp-filter__chip${cat === "All" ? " sp-filter__chip--active" : ""}`}>{cat}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skill Packs */}
      <section className="sp2-section">
        <div className="sp2-container">
          <div className="sp2-section-header">
            <span className="sp2-label">Featured</span>
            <h2 className="sp2-section-title">Featured Skill Packs</h2>
          </div>
          <div className="sp2-featured-grid">
            {featuredPacks.map((pack) => (
              <FeaturedCard key={pack.name} {...pack} />
            ))}
          </div>
        </div>
      </section>

      {/* Image and Video Packs */}
      <section className="sp2-section sp2-section--dark">
        <div className="sp2-container">
          <div className="sp2-section-header">
            <span className="sp2-label">Image &amp; Video</span>
            <h2 className="sp2-section-title">Image and Video Packs</h2>
          </div>
          <div className="sp2-row">
            {imageVideoPacks.map((pack) => (
              <PackCard key={pack.name} {...pack} />
            ))}
          </div>
        </div>
      </section>

      {/* Audio, Voice, and Localization Packs */}
      <section className="sp2-section">
        <div className="sp2-container">
          <div className="sp2-section-header">
            <span className="sp2-label">Audio, Voice &amp; Localization</span>
            <h2 className="sp2-section-title">Audio, Voice, and Localization Packs</h2>
          </div>
          <div className="sp2-row">
            {audioVoicePacks.map((pack) => (
              <PackCard key={pack.name} {...pack} />
            ))}
          </div>
        </div>
      </section>

      {/* Asset, Metadata, and Review Packs */}
      <section className="sp2-section sp2-section--dark">
        <div className="sp2-container">
          <div className="sp2-section-header">
            <span className="sp2-label">Asset, Metadata &amp; Review</span>
            <h2 className="sp2-section-title">Asset, Metadata, and Review Packs</h2>
          </div>
          <div className="sp2-row">
            {assetMetadataPacks.map((pack) => (
              <PackCard key={pack.name} {...pack} />
            ))}
          </div>
        </div>
      </section>

      {/* Rights, Proof, and Release Packs */}
      <section className="sp2-section">
        <div className="sp2-container">
          <div className="sp2-section-header">
            <span className="sp2-label">Rights, Proof &amp; Release</span>
            <h2 className="sp2-section-title">Rights, Proof, and Release Packs</h2>
          </div>
          <div className="sp2-row">
            {rightsReleasePacks.map((pack) => (
              <PackCard key={pack.name} {...pack} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Library Preview */}
      <section className="sp2-section sp2-section--dark">
        <div className="sp2-container">
          <div className="sp2-section-header">
            <span className="sp2-label">Client Library</span>
            <h2 className="sp2-section-title">Client teams get more.</h2>
            <p className="sp2-section-desc">Public visitors preview sample Skill Packs above. Client teams access a private library with the operating files, approval rules, evidence requirements, and Creation Rights rollout notes behind each pack.</p>
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
        headline="Ready to define your team's Media Skill Packs?"
        body="Creation Skills designs approved Skill Packs tailored to your media system, brand rules, rights rules, and Creation Rights readiness. Start with a C/Skills Review."
      />
    </>
  );
}
