import Hero from "@/components/sections/Hero";
import Image from "next/image";
import { cskillsImages } from "@/content/images";
import { audiences } from "@/content/audiences";
import { resources } from "@/content/resources";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        headline={<>Make better media faster,<br /><span className="accent">with control.</span></>}
        subhead="Creation Skills helps creative companies overhaul how media gets made, reviewed, approved, reused, and scaled so teams can make better work faster without losing rights, brand, or human control."
        image={cskillsImages.core.homeHero}
        primaryCta={{ label: "Book a C/Skills Review", href: "/book-review" }}
        secondaryCta={{ label: "Explore Engagements", href: "/engagements" }}
      />

      {/* Value Strip */}
      <section className="hp-value-strip">
        <div className="hp-container">
          <div className="hp-value-strip__grid">
            <div className="hp-value-strip__item">
              <div className="hp-label">Faster Creative Production</div>
              <p className="hp-value-strip__desc">Streamline how creative assets move from brief to delivery, reducing rework and idle time.</p>
            </div>
            <div className="hp-value-strip__item">
              <div className="hp-label">Clearer Approvals</div>
              <p className="hp-value-strip__desc">Structured review steps with built-in legal and brand checkpoints at every stage.</p>
            </div>
            <div className="hp-value-strip__item">
              <div className="hp-label">Rights-Aware Reuse</div>
              <p className="hp-value-strip__desc">Track provenance for every asset, preventing unauthorized reuse across teams and channels.</p>
            </div>
            <div className="hp-value-strip__item">
              <div className="hp-label">Creation Rights Readiness</div>
              <p className="hp-value-strip__desc">Prepare your workflows for emerging NILP (Name, Image, Likeness, and Persona) standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Editorial */}
      <section className="hp-vision">
        <div className="hp-container">
          <div className="hp-vision__grid">
            <div className="hp-vision__sidebar">
              <div className="hp-label">The Vision</div>
              <div className="hp-vision__rule" />
            </div>
            <div className="hp-vision__content">
              <h2 className="hp-vision__headline">
                Creative companies should be able to make better media faster without losing control of rights, brand, approvals, talent use, or reuse.
              </h2>
              <div className="hp-vision__features">
                <div className="hp-vision__feature">
                  <div className="hp-vision__dot" />
                  <h3 className="hp-vision__feature-title">Granular Rights Tracking</h3>
                  <p className="hp-vision__feature-desc">Maintain provenance for every asset, mapping inputs to outputs reliably across the production pipeline to ensure clear rights accountability.</p>
                </div>
                <div className="hp-vision__feature">
                  <div className="hp-vision__dot" />
                  <h3 className="hp-vision__feature-title">Embedded Governance</h3>
                  <p className="hp-vision__feature-desc">Compliance checks integrated into creative workflows at every stage, not bolted on afterwards.</p>
                </div>
                <div className="hp-vision__feature">
                  <div className="hp-vision__dot" />
                  <h3 className="hp-vision__feature-title">Scalable Workflows</h3>
                  <p className="hp-vision__feature-desc">Design workflows that scale across teams and regions, supporting high-volume creative production with consistent governance.</p>
                </div>
                <div className="hp-vision__feature">
                  <div className="hp-vision__dot" />
                  <h3 className="hp-vision__feature-title">Brand Alignment</h3>
                  <p className="hp-vision__feature-desc">Ensure all media output aligns with your brand guidelines, stylistic standards, and tonal requirements from the start.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="hp-engagements">
        <div className="hp-container">
          <div className="hp-label">Engagements</div>
          <h2 className="hp-engagements__headline">What C/Skills builds with your team</h2>
          <p className="hp-engagements__subhead">Structured engagements designed to integrate into your existing operations, reducing disruption while upgrading how creative work moves through your company.</p>
          <div className="hp-engagements__grid">
            <a href="/engagements/creation-skills-review" className="hp-ecard">
              <div className="hp-ecard__top">
                <span className="hp-ecard__index">01</span>
                <h3 className="hp-ecard__title">C/Skills Review</h3>
                <p className="hp-ecard__desc">A focused review of one production path, including team roles, production-agent use, rights exposure, approval paths, tool stack, asset lifecycle, operating gaps, and Creation Rights readiness.</p>
              </div>
              <div className="hp-ecard__bottom">
                <div className="hp-ecard__outcome">
                  <span className="hp-ecard__outcome-label">Key Outcome</span>
                  <span className="hp-ecard__outcome-value">Strategic Readiness Report</span>
                </div>
                <span className="hp-ecard__hover-link">Explore Engagement →</span>
              </div>
            </a>
            <a href="/engagements/operating-model-design" className="hp-ecard">
              <div className="hp-ecard__top">
                <span className="hp-ecard__index">02</span>
                <h3 className="hp-ecard__title">Operating Model Design</h3>
                <p className="hp-ecard__desc">A future-state model for how creative work should move from brief to production, agent-supported preparation, rights review, human approval, publication, reuse, reporting, and audit.</p>
              </div>
              <div className="hp-ecard__bottom">
                <div className="hp-ecard__outcome">
                  <span className="hp-ecard__outcome-label">Key Outcome</span>
                  <span className="hp-ecard__outcome-value">Custom Operating Blueprint</span>
                </div>
                <span className="hp-ecard__hover-link">Explore Engagement →</span>
              </div>
            </a>
            <a href="/engagements/implementation-office" className="hp-ecard">
              <div className="hp-ecard__top">
                <span className="hp-ecard__index">03</span>
                <h3 className="hp-ecard__title">Implementation Office</h3>
                <p className="hp-ecard__desc">Ongoing rollout support, owner guidance, agent supervision, operating-file updates, adoption tracking, stakeholder alignment, and Creation Rights readiness.</p>
              </div>
              <div className="hp-ecard__bottom">
                <div className="hp-ecard__outcome">
                  <span className="hp-ecard__outcome-label">Key Outcome</span>
                  <span className="hp-ecard__outcome-value">Deployed Production System</span>
                </div>
                <span className="hp-ecard__hover-link">Explore Engagement →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Creation Rights */}
      <section className="hp-rights">
        <div className="hp-container">
          <div className="hp-rights__grid">
            <div className="hp-rights__image">
              <Image
                src={cskillsImages.core.creationRightsReadiness}
                alt="Creation Rights readiness"
                width={640}
                height={480}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="hp-rights__content">
              <div className="hp-label">Governance</div>
              <h2 className="hp-rights__headline">Prepared for Creation Rights.</h2>
              <p className="hp-rights__body">Our approach is designed around Creation Rights, ensuring every asset respects NILP&reg; (Name, Image, Likeness, and Persona), honors consent boundaries, and maintains clear provenance. Build workflows that protect your brand, creators, and intellectual property from the ground up.</p>
              <div className="hp-nilp">
                <div className="hp-nilp__title">The NILP Framework</div>
                <div className="hp-nilp__items">
                  <div className="hp-nilp__item">
                    <span className="hp-nilp__badge">N</span>
                    <div className="hp-nilp__text">
                      <span className="hp-nilp__name">Name &amp; Identity</span>
                      <span className="hp-nilp__desc">Clearance protocols for talent attribution and metadata tagging across all production outputs.</span>
                    </div>
                  </div>
                  <div className="hp-nilp__item">
                    <span className="hp-nilp__badge">I</span>
                    <div className="hp-nilp__text">
                      <span className="hp-nilp__name">Image</span>
                      <span className="hp-nilp__desc">Visual consent boundaries and persistent usage tracking across production iterations.</span>
                    </div>
                  </div>
                  <div className="hp-nilp__item">
                    <span className="hp-nilp__badge">L</span>
                    <div className="hp-nilp__text">
                      <span className="hp-nilp__name">Likeness</span>
                      <span className="hp-nilp__desc">Controls governing how likeness is used, adapted, or combined in creative outputs.</span>
                    </div>
                  </div>
                  <div className="hp-nilp__item">
                    <span className="hp-nilp__badge">P</span>
                    <div className="hp-nilp__text">
                      <span className="hp-nilp__name">Persona</span>
                      <span className="hp-nilp__desc">Protections ensuring only authorized representations of persona enter production and distribution.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="hp-audiences">
        <div className="hp-container">
          <div className="hp-label">Who We Help</div>
          <h2 className="hp-audiences__headline">For teams turning files into finished media</h2>
          <div className="hp-audiences__grid">
            {audiences.map((a) => (
              <a key={a.slug} href={`/who-we-help/${a.slug}`} className="hp-acard">
                <div className="hp-acard__image">
                  <Image
                    src={a.image}
                    alt={a.title}
                    width={400}
                    height={250}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="hp-acard__body">
                  <h3 className="hp-acard__title">{a.title}</h3>
                  <p className="hp-acard__desc">{a.description}</p>
                  <span className="hp-acard__link">Learn more →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="hp-resources">
        <div className="hp-container">
          <div className="hp-label">Resources</div>
          <h2 className="hp-resources__headline">Field notes on governed media creation</h2>
          <div className="hp-resources__grid">
            <a href={`/resources/${resources[0].slug}`} className="hp-rcard hp-rcard--lead">
              <div className="hp-rcard__image">
                <Image
                  src={resources[0].image}
                  alt={resources[0].title}
                  width={640}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="hp-rcard__body">
                <h3 className="hp-rcard__title">{resources[0].title}</h3>
                <p className="hp-rcard__desc">{resources[0].description}</p>
                <span className="hp-rcard__link">Read article →</span>
              </div>
            </a>
            <div className="hp-resources__side">
              <a href={`/resources/${resources[1].slug}`} className="hp-rcard hp-rcard--small">
                <div className="hp-rcard__image">
                  <Image
                    src={resources[1].image}
                    alt={resources[1].title}
                    width={400}
                    height={250}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="hp-rcard__body">
                  <h3 className="hp-rcard__title">{resources[1].title}</h3>
                  <p className="hp-rcard__desc">{resources[1].description}</p>
                  <span className="hp-rcard__link">Read article →</span>
                </div>
              </a>
              <a href={`/resources/${resources[2].slug}`} className="hp-rcard hp-rcard--small">
                <div className="hp-rcard__image">
                  <Image
                    src={resources[2].image}
                    alt={resources[2].title}
                    width={400}
                    height={250}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="hp-rcard__body">
                  <h3 className="hp-rcard__title">{resources[2].title}</h3>
                  <p className="hp-rcard__desc">{resources[2].description}</p>
                  <span className="hp-rcard__link">Read article →</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hp-final-cta">
        <div className="hp-container">
          <h2 className="hp-final-cta__headline">Ready to redesign how your media gets made?</h2>
          <a href="/book-review" className="hp-final-cta__btn">Book a C/Skills Review</a>
        </div>
      </section>
    </>
  );
}
