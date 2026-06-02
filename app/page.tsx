import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import CardGrid from "@/components/sections/CardGrid";
import SplitPanel from "@/components/sections/SplitPanel";
import Eyebrow from "@/components/ui/Eyebrow";
import FinalCTA from "@/components/ui/FinalCTA";
import EcosystemSplit from "@/components/sections/EcosystemSplit";
import { cskillsImages } from "@/content/images";
import { engagements } from "@/content/engagements";
import { audiences } from "@/content/audiences";
import { resources } from "@/content/resources";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        eyebrow="CREATION SKILLS"
        headline="Build the company flow behind modern media."
        subhead="Creation Skills helps media, entertainment, brand, agency, legal, rights, platform, and creative operations teams redesign how media moves through people, production agents, operating files, human approval gates, rights review, protected records, and Creation Rights readiness."
        image={cskillsImages.core.homeHero}
        primaryCta={{ label: "Book a C/Skills Review", href: "/book-review" }}
        secondaryCta={{ label: "Explore Engagements", href: "/engagements" }}
        supportLines={[
          "Your company flow.",
          "Your production agents.",
          "Your approval gates.",
          "Prepared for Creation Rights.",
        ]}
      />

      {/* Not Another Tool Layer */}
      <Section dark>
        <Container>
          <div className="section-header">
            <Eyebrow>NOT ANOTHER TOOL LAYER</Eyebrow>
            <h2>Media creation system design.</h2>
            <p>
              Most companies already have people testing tools across different parts of the business.
              The prompts are scattered. The files are messy. The handoffs are hard to repeat.
              The review paths are unclear. The company does not own the system.
              Creation Skills builds the missing operating layer.
            </p>
          </div>
          <div className="proof-grid">
            <div className="proof-block">
              <h3 className="proof-block__title">Company-Owned Production Agents</h3>
              <p className="proof-block__desc">
                Agents configured around your company&apos;s actual media tasks, files, formats, review paths, and approved examples.
              </p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Operating Files</h3>
              <p className="proof-block__desc">
                Company-owned operating files that define tasks, examples, blocked actions, output formats, naming rules, handoffs, review steps, and owner instructions.
              </p>
            </div>
            <div className="proof-block">
              <h3 className="proof-block__title">Human Approval Gates</h3>
              <p className="proof-block__desc">
                Named owners, review triggers, escalation paths, final sign-off rules, and audit-ready decision records.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Model */}
      <Section>
        <Container>
          <div className="section-header">
            <Eyebrow>THE MODEL</Eyebrow>
            <h2>Map the company flow. Build the agent operating paths. Keep people in control.</h2>
            <p>
              Creation Skills works across the full media creation process, from brief intake to production support, rights review, approval, publication, reuse, and reporting.
            </p>
          </div>
          <EcosystemSplit
            left={{
              title: "1. Company Flow",
              items: [
                "Brief intake", "Asset intake", "Creative production", "Editing support",
                "Localization", "Versioning", "Internal review", "Final delivery",
                "Rights review", "Approval gates",
              ],
            }}
            center={{
              title: "2. Production Agent Paths",
              items: [
                "Agent roles", "Approved tasks", "Blocked tasks", "Operating files",
                "Approved examples", "Output formats", "Naming rules",
                "Token limits", "Review paths",
              ],
            }}
            right={{
              title: "3. Human Approval & Governance",
              items: [
                "Creative approval", "Legal review", "Brand review",
                "Talent and NILP\u00AE checks", "Usage scope review",
                "Metadata requirements", "Reuse approval",
                "Escalation paths", "Audit-ready records",
              ],
            }}
          />
        </Container>
      </Section>

      {/* Protected Layer */}
      <Section surface>
        <Container>
          <SplitPanel
            image={cskillsImages.core.creationRightsReadiness}
            imageAlt="Creation Rights readiness visualization"
          >
            <Eyebrow>THE PROTECTED LAYER</Eyebrow>
            <h2>Production agents prepare the work. Creation Rights governs what can move forward.</h2>
            <p>
              Company-owned production agents can draft, cut, translate, summarize, package, resize, format, and prepare.
              They should not make final decisions without review.
            </p>
            <p>
              Creation Rights governs the protected layer around the work: rights, NILP&reg;, consent, talent use, brand rules, metadata, approvals, audit, and compliance-sensitive media records.
            </p>
            <p style={{ color: "var(--color-text-muted)", fontStyle: "italic", marginTop: "var(--space-lg)" }}>
              The agent does the prep. The human makes the call. The system records both.
            </p>
          </SplitPanel>
        </Container>
      </Section>

      {/* Engagements */}
      <Section dark>
        <Container>
          <div className="section-header">
            <Eyebrow>ENGAGEMENTS</Eyebrow>
            <h2>Consulting engagements for governed media creation.</h2>
            <p>
              Creation Skills helps companies move from scattered tools and unclear handoffs to a governed media creation model that people can use, production agents can support, and Creation Rights can govern.
            </p>
          </div>
          <CardGrid
            columns={3}
            items={engagements.map((e) => ({
              title: e.title,
              description: e.description,
              image: e.image,
              href: `/engagements/${e.slug}`,
              linkText: "View engagement",
            }))}
          />
        </Container>
      </Section>

      {/* Who We Help */}
      <Section>
        <Container>
          <div className="section-header">
            <Eyebrow>WHO WE HELP</Eyebrow>
            <h2>For teams turning files into finished media.</h2>
          </div>
          <CardGrid
            columns={4}
            items={audiences.map((a) => ({
              title: a.title,
              description: a.description,
              image: a.image,
              href: `/who-we-help/${a.slug}`,
              linkText: "Learn more",
            }))}
          />
        </Container>
      </Section>

      {/* Resources */}
      <Section surface>
        <Container>
          <div className="section-header">
            <Eyebrow>RESOURCES</Eyebrow>
            <h2>Field notes on governed media creation.</h2>
          </div>
          <CardGrid
            columns={3}
            items={resources.slice(0, 3).map((r) => ({
              title: r.title,
              description: r.description,
              image: r.image,
              href: `/resources/${r.slug}`,
              linkText: "Read article",
            }))}
          />
        </Container>
      </Section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
