import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import FinalCTA from "@/components/ui/FinalCTA";
import { programs } from "@/content/programs";

export const metadata: Metadata = getPageMeta("/programs");

export default function ProgramsPage() {
  return (
    <>
      <Hero
        eyebrow="PROGRAMS"
        headline="Structured programs for the new creative stack."
        subhead="Creation Skills helps creative, brand, legal, production, and operations teams design approved skills, company flows, and rollout plans for image, video, audio, voice, likeness, metadata, and release."
        compact
        primaryCta={{ label: "Book a C/Skills Review", href: "/book-review" }}
      />

      <section className="prog-section">
        <div className="prog-container">
          <div className="prog-grid">
            {programs.map((p) => {
              const href = p.slug === "skill-packs" ? "/skill-packs" : `/programs/${p.slug}`;
              return (
                <a key={p.slug} href={href} className="prog-card">
                  <h3 className="prog-card__title">{p.title}</h3>
                  <div className="prog-card__fields">
                    <div className="prog-card__field">
                      <span className="prog-card__label">What you get</span>
                      <p className="prog-card__value">{p.whatYouGet}</p>
                    </div>
                    <div className="prog-card__field">
                      <span className="prog-card__label">Best for</span>
                      <p className="prog-card__value">{p.bestFor}</p>
                    </div>
                    <div className="prog-card__field">
                      <span className="prog-card__label">Outcome</span>
                      <p className="prog-card__value">{p.outcome}</p>
                    </div>
                  </div>
                  <span className="prog-card__cta">Explore Program &rarr;</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
