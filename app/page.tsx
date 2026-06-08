import Hero from "@/components/sections/Hero";
import Image from "next/image";
import { cskillsImages } from "@/content/images";
import { audiences } from "@/content/audiences";
import { resources } from "@/content/resources";
import EcosystemSplit from "@/components/sections/EcosystemSplit";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        eyebrow="CONSULTING FOR THE NEW MEDIA ECOSYSTEM"
        headline={<>Build the skills behind <span className="accent">modern&nbsp;media&nbsp;creation.</span></>}
        subhead="Creation Skills helps media and creative teams use new tools, models, and agent assisted production without losing control of rights, approvals, or release."
        image={cskillsImages.core.homeHero}
        primaryCta={{ label: "Book a C/Skills Review", href: "/book-review" }}
        secondaryCta={{ label: "Explore Skill Packs", href: "/skill-packs" }}
      />

      {/* Value Strip */}
      <section className="hp-value-strip">
        <div className="hp-container">
          <div className="hp-value-strip__grid">
            <div className="hp-value-strip__item">
              <div className="hp-label">Approved Skills</div>
              <p className="hp-value-strip__desc">Define what each skill can do, which tools it uses, what brand and rights rules apply, and what evidence must be saved.</p>
            </div>
            <div className="hp-value-strip__item">
              <div className="hp-label">Company Flows</div>
              <p className="hp-value-strip__desc">Design the creation flows that move work from brief to release with structured review, approval, and rights checks at every stage.</p>
            </div>
            <div className="hp-value-strip__item">
              <div className="hp-label">Rights-Ready Work</div>
              <p className="hp-value-strip__desc">Build creation flows where every asset respects NILP&reg; (Name, Image, Likeness, and Persona), brand rules, and evidence requirements.</p>
            </div>
            <div className="hp-value-strip__item">
              <div className="hp-label">Release Readiness</div>
              <p className="hp-value-strip__desc">Prepare your team, approval gates, and evidence requirements for full Creation Rights rollout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Shift */}
      <section className="hp-vision">
        <div className="hp-container">
          <div className="hp-vision__grid">
            <div className="hp-vision__sidebar">
              <div className="hp-label">The Shift</div>
              <div className="hp-vision__rule" />
            </div>
            <div className="hp-vision__content">
              <h2 className="hp-vision__headline">
                Before, companies managed media. Then multimedia. Now multimodal media.
              </h2>
              <div className="hp-vision__features">
                <div className="hp-vision__feature">
                  <div className="hp-vision__dot" />
                  <h3 className="hp-vision__feature-title">Media</h3>
                  <p className="hp-vision__feature-desc">Files, formats, folders, and manual handoffs between creative and production teams.</p>
                </div>
                <div className="hp-vision__feature">
                  <div className="hp-vision__dot" />
                  <h3 className="hp-vision__feature-title">Multimedia</h3>
                  <p className="hp-vision__feature-desc">Formats, channels, and teams brought together across image, video, audio, and interactive outputs.</p>
                </div>
                <div className="hp-vision__feature">
                  <div className="hp-vision__dot" />
                  <h3 className="hp-vision__feature-title">Multimodal Media</h3>
                  <p className="hp-vision__feature-desc">Image, video, audio, voice, likeness, persona, metadata, prompts, models, approvals, rights, evidence, and release records moving together inside one company system.</p>
                </div>
                <div className="hp-vision__feature">
                  <div className="hp-vision__dot" />
                  <h3 className="hp-vision__feature-title">What This Requires</h3>
                  <p className="hp-vision__feature-desc">Assets, models, prompts, metadata, rights, approvals, evidence, and release records all moving together. Creation Skills helps teams design the approved skills and company flows needed to operate in that environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Stack */}
      <section className="hp-ecosystem">
        <div className="hp-container">
          <div className="hp-label">The New Creative Stack</div>
          <h2 className="hp-ecosystem__headline">The new creative stack is already here. Most teams just do not have rules for it yet.</h2>
          <p className="hp-ecosystem__intro">Creative tools, assets, approvals, rights, metadata, and release proof now move together. We help teams organize that process so work can move from idea to release with more confidence.</p>
        </div>
      </section>

      {/* Tool Ecosystem */}
      <section className="hp-stack">
        <div className="hp-container">
          <div className="hp-label">Tool Ecosystem</div>
          <h2 className="hp-stack__headline">Built around the tools your team already uses.</h2>
          <p className="hp-stack__subhead">Creation Skills designs approved skills around the tools, models, asset systems, review platforms, metadata standards, and release controls your team already uses.</p>
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
          <p className="hp-stack__bridge">Creation Skills does not replace these tools. It helps teams define how they should be used, reviewed, and prepared for Creation Rights rollout.</p>
        </div>
      </section>

      {/* Skills / Rights Split */}
      <section className="hp-engagements">
        <div className="hp-container">
          <div className="hp-label">The Split</div>
          <h2 className="hp-engagements__headline">Creation Skills builds the skills. Creation Rights controls the rules.</h2>
          <EcosystemSplit
            left={{
              title: "Creation Skills prepares the team",
              items: [
                "Approved skills",
                "Creation flows",
                "Operating files",
                "Approval gates",
                "Evidence requirements",
                "Rollout plans",
              ],
            }}
            right={{
              title: "Creation Rights controls the proof",
              items: [
                "Brand Profiles",
                "Rights & NILP\u00AE",
                "Metadata",
                "Approved tools and models",
                "Evidence events",
                "Release Proof",
                "Release Manifest",
                "Release Destinations",
                "Protected Records",
              ],
            }}
          />
        </div>
      </section>

      {/* Programs */}
      <section className="hp-engagements" style={{ background: "var(--bg-elevated)" }}>
        <div className="hp-container">
          <div className="hp-label">Programs</div>
          <h2 className="hp-engagements__headline">What C/Skills builds with your team</h2>
          <p className="hp-engagements__subhead">Advisory programs that help teams define approved skills, company flows, evidence requirements, and Creation Rights rollout readiness.</p>
          <div className="hp-engagements__grid">
            <a href="/programs/cskills-audit" className="hp-ecard">
              <div className="hp-ecard__top">
                <span className="hp-ecard__index">01</span>
                <h3 className="hp-ecard__title">C/Skills Audit</h3>
                <p className="hp-ecard__desc">A structured review of your current creative system, identifying gaps in creation flow, skill definitions, approval paths, rights exposure, and Creation Rights readiness.</p>
              </div>
              <div className="hp-ecard__bottom">
                <div className="hp-ecard__outcome">
                  <span className="hp-ecard__outcome-label">Key Outcome</span>
                  <span className="hp-ecard__outcome-value">Strategic Readiness Report</span>
                </div>
                <span className="hp-ecard__hover-link">Explore Program &rarr;</span>
              </div>
            </a>
            <a href="/skill-packs" className="hp-ecard">
              <div className="hp-ecard__top">
                <span className="hp-ecard__index">02</span>
                <h3 className="hp-ecard__title">Skill Packs</h3>
                <p className="hp-ecard__desc">Each Skill Pack defines what tools and models may be used, what assets they can touch, what brand and rights rules apply, what metadata must return, what approvals are required, what evidence must be saved, and what Creation Rights checks before release.</p>
              </div>
              <div className="hp-ecard__bottom">
                <div className="hp-ecard__outcome">
                  <span className="hp-ecard__outcome-label">Key Outcome</span>
                  <span className="hp-ecard__outcome-value">Approved Skill Definitions</span>
                </div>
                <span className="hp-ecard__hover-link">Explore Program &rarr;</span>
              </div>
            </a>
            <a href="/programs/creation-rights-rollout-readiness" className="hp-ecard">
              <div className="hp-ecard__top">
                <span className="hp-ecard__index">03</span>
                <h3 className="hp-ecard__title">Creation Rights Rollout Readiness</h3>
                <p className="hp-ecard__desc">A readiness program that prepares your team, creation flows, approved skills, approval gates, and evidence requirements for full Creation Rights platform adoption.</p>
              </div>
              <div className="hp-ecard__bottom">
                <div className="hp-ecard__outcome">
                  <span className="hp-ecard__outcome-label">Key Outcome</span>
                  <span className="hp-ecard__outcome-value">Platform Ready Operations</span>
                </div>
                <span className="hp-ecard__hover-link">Explore Program &rarr;</span>
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
              <h2 className="hp-rights__headline">Prepare for Creation Rights rollout.</h2>
              <p className="hp-rights__body">Every creative system built by Creation Skills is designed to connect with the Creation Rights platform. Assets respect NILP&reg; (Name, Image, Likeness, and Persona), honor consent boundaries, carry provenance, and maintain complete release records from production through to delivery.</p>
              <div className="hp-nilp">
                <div className="hp-nilp__title">The NILP Framework</div>
                <div className="hp-nilp__items">
                  <div className="hp-nilp__item">
                    <span className="hp-nilp__badge">N</span>
                    <div className="hp-nilp__text">
                      <span className="hp-nilp__name">Name &amp; Identity</span>
                      <span className="hp-nilp__desc">Protocols for talent attribution and metadata tagging across all creative outputs.</span>
                    </div>
                  </div>
                  <div className="hp-nilp__item">
                    <span className="hp-nilp__badge">I</span>
                    <div className="hp-nilp__text">
                      <span className="hp-nilp__name">Image</span>
                      <span className="hp-nilp__desc">Visual consent boundaries and persistent usage tracking across every version and iteration.</span>
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
                      <span className="hp-nilp__desc">Protections ensuring only authorized representations of persona enter finished work and release.</span>
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
          <h2 className="hp-audiences__headline">For teams turning assets into approved work</h2>
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
                  <span className="hp-acard__link">Learn more &rarr;</span>
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
          <h2 className="hp-resources__headline">Field notes on the new creative stack</h2>
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
                <span className="hp-rcard__link">Read article &rarr;</span>
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
                  <span className="hp-rcard__link">Read article &rarr;</span>
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
                  <span className="hp-rcard__link">Read article &rarr;</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hp-final-cta">
        <div className="hp-container">
          <h2 className="hp-final-cta__headline">Build the skills your team needs next.</h2>
          <a href="/book-review" className="hp-final-cta__btn">Book a C/Skills Review</a>
        </div>
      </section>
    </>
  );
}
