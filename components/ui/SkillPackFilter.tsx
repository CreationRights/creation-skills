"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { SkillPack, packCategories, PackCategory } from "@/content/skillPacks";

function PackCard({ pack }: { pack: SkillPack }) {
  return (
    <a className="sp2-card" href={`/skill-packs/${pack.slug}`}>
      <div className="sp2-card__image">
        <Image
          src={pack.image}
          alt={pack.name}
          width={400}
          height={220}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="sp2-card__body">
        <span className="sp2-card__category">{pack.category}</span>
        <h3 className="sp2-card__name">{pack.name}</h3>
        <p className="sp2-card__outcome">{pack.outcome}</p>
        <div className="sp2-card__ecosystem">
          {pack.ecosystem.map((item) => (
            <span key={item} className="sp2-card__eco-chip">{item}</span>
          ))}
        </div>
        <span className="sp2-card__cta">Preview Pack &rarr;</span>
      </div>
    </a>
  );
}

function FeaturedCard({ pack }: { pack: SkillPack }) {
  return (
    <a className="sp2-featured" href={`/skill-packs/${pack.slug}`}>
      <div className="sp2-featured__image">
        <Image
          src={pack.image}
          alt={pack.name}
          width={640}
          height={360}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="sp2-featured__body">
        <span className="sp2-card__category">{pack.category}</span>
        <h3 className="sp2-featured__name">{pack.name}</h3>
        <p className="sp2-featured__outcome">{pack.outcome}</p>
        <div className="sp2-card__ecosystem">
          {pack.ecosystem.map((item) => (
            <span key={item} className="sp2-card__eco-chip">{item}</span>
          ))}
        </div>
        <span className="sp2-card__cta">Preview Pack &rarr;</span>
      </div>
    </a>
  );
}

type Props = {
  packs: SkillPack[];
};

export default function SkillPackFilter({ packs }: Props) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<PackCategory>("All");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return packs.filter((pack) => {
      // Category filter
      if (activeCategory !== "All") {
        const cat = activeCategory.toLowerCase();
        const packCat = pack.category.toLowerCase();
        const packTags = pack.tags.map((t) => t.toLowerCase());
        const packEco = pack.ecosystem.map((e) => e.toLowerCase());
        if (
          !packCat.includes(cat) &&
          !packTags.some((t) => t.includes(cat)) &&
          !packEco.some((e) => e.includes(cat))
        ) {
          return false;
        }
      }

      // Search filter
      if (q) {
        const searchable = [
          pack.name,
          pack.category,
          pack.outcome,
          ...pack.ecosystem,
          ...pack.tags,
        ]
          .join(" ")
          .toLowerCase();
        return searchable.includes(q);
      }

      return true;
    });
  }, [packs, query, activeCategory]);

  const featuredPacks = filtered.filter((p) => p.featured);
  const imageVideoPacks = filtered.filter((p) => p.section === "image-video");
  const audioVoicePacks = filtered.filter((p) => p.section === "audio-voice");
  const assetMetadataPacks = filtered.filter((p) => p.section === "asset-metadata");
  const rightsReleasePacks = filtered.filter((p) => p.section === "rights-release");

  const isFiltering = query.trim() !== "" || activeCategory !== "All";
  const hasResults = filtered.length > 0;

  return (
    <>
      {/* Search + Categories */}
      <section className="sp-filter">
        <div className="sp-filter__container">
          <div className="sp-filter__search">
            <input
              type="text"
              className="sp-filter__input"
              placeholder="Search skill packs by name, category, or capability..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="sp-filter__chips">
            {packCategories.map((cat) => (
              <button
                key={cat}
                className={`sp-filter__chip${cat === activeCategory ? " sp-filter__chip--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {!hasResults && (
        <section className="sp2-section">
          <div className="sp2-container">
            <div className="sp2-empty">
              <h3>No matching Skill Packs found.</h3>
              <p>Try another capability, category, or ecosystem term.</p>
            </div>
          </div>
        </section>
      )}

      {/* When filtering, show flat results */}
      {isFiltering && hasResults && (
        <section className="sp2-section">
          <div className="sp2-container">
            <div className="sp2-section-header">
              <span className="sp2-label">Results</span>
              <h2 className="sp2-section-title">{filtered.length} Skill Pack{filtered.length !== 1 ? "s" : ""}</h2>
            </div>
            <div className="sp2-row">
              {filtered.map((pack) => (
                <PackCard key={pack.slug} pack={pack} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* When not filtering, show grouped sections */}
      {!isFiltering && (
        <>
          {/* Featured */}
          {featuredPacks.length > 0 && (
            <section className="sp2-section">
              <div className="sp2-container">
                <div className="sp2-section-header">
                  <span className="sp2-label">Featured</span>
                  <h2 className="sp2-section-title">Featured Skill Packs</h2>
                </div>
                <div className="sp2-featured-grid">
                  {featuredPacks.map((pack) => (
                    <FeaturedCard key={pack.slug} pack={pack} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Image & Video */}
          {imageVideoPacks.length > 0 && (
            <section className="sp2-section sp2-section--dark">
              <div className="sp2-container">
                <div className="sp2-section-header">
                  <span className="sp2-label">Image &amp; Video</span>
                  <h2 className="sp2-section-title">Image and Video Packs</h2>
                </div>
                <div className="sp2-row">
                  {imageVideoPacks.map((pack) => (
                    <PackCard key={pack.slug} pack={pack} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Audio, Voice & Localization */}
          {audioVoicePacks.length > 0 && (
            <section className="sp2-section">
              <div className="sp2-container">
                <div className="sp2-section-header">
                  <span className="sp2-label">Audio, Voice &amp; Localization</span>
                  <h2 className="sp2-section-title">Audio, Voice, and Localization Packs</h2>
                </div>
                <div className="sp2-row">
                  {audioVoicePacks.map((pack) => (
                    <PackCard key={pack.slug} pack={pack} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Asset, Metadata & Review */}
          {assetMetadataPacks.length > 0 && (
            <section className="sp2-section sp2-section--dark">
              <div className="sp2-container">
                <div className="sp2-section-header">
                  <span className="sp2-label">Asset, Metadata &amp; Review</span>
                  <h2 className="sp2-section-title">Asset, Metadata, and Review Packs</h2>
                </div>
                <div className="sp2-row">
                  {assetMetadataPacks.map((pack) => (
                    <PackCard key={pack.slug} pack={pack} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Rights, Proof & Release */}
          {rightsReleasePacks.length > 0 && (
            <section className="sp2-section">
              <div className="sp2-container">
                <div className="sp2-section-header">
                  <span className="sp2-label">Rights, Proof &amp; Release</span>
                  <h2 className="sp2-section-title">Rights, Proof, and Release Packs</h2>
                </div>
                <div className="sp2-row">
                  {rightsReleasePacks.map((pack) => (
                    <PackCard key={pack.slug} pack={pack} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}
