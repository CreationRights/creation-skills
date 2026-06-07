import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FinalCTA from "@/components/ui/FinalCTA";
import { cskillsImages } from "@/content/images";

export const metadata: Metadata = getPageMeta("/how-we-work");

export default function HowWeWorkPage() {
  return (
    <>
      <Hero
        eyebrow="HOW WE WORK"
        headline="Audit. Design. Build. Approve. Implement."
        subhead="The Creation Skills advisory method moves from understanding your current media system to building the governed media skills, creation flows, and Media Skill Packs your team can own and operate."
        image={cskillsImages.core.howWeWork}
        compact
      />

      <Section>
        <Container>
          <div className="section-header">
            <Eyebrow>THE PROCESS</Eyebrow>
            <h2>How a Creation Skills program works.</h2>
          </div>
          <ProcessSteps
            steps={[
              { number: "01", title: "Audit", description: "Map the current creation flow, team roles, agent use, tool stack, rights exposure, and operating gaps." },
              { number: "02", title: "Design", description: "Define the future-state model with approved media skills, creation flows, operating files, approval gates, and evidence requirements." },
              { number: "03", title: "Build", description: "Create the operating files, media agent skill definitions, approval rules, metadata requirements, and governance structure." },
              { number: "04", title: "Approve", description: "Validate with stakeholders. Test on one creation flow. Refine based on real work." },
              { number: "05", title: "Implement", description: "Roll out across teams with owner guidance, agent supervision, adoption tracking, and Creation Rights readiness." },
            ]}
          />
        </Container>
      </Section>

      <Section dark>
        <Container>
          <div className="section-header">
            <Eyebrow>SYSTEM REPAIR</Eyebrow>
            <h2>Where production breaks, we design the control points.</h2>
            <p>
              Missing files. Wrong formats. Old briefs. Late reviews. Unclear owners. Incomplete asset packages. Agent outputs that exceed the skill definition.
              Creation Skills designs the rules, agents, checks, and approval paths that route the work back into order before delivery fails.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="section-header">
            <Eyebrow>SKILLS TRANSFER</Eyebrow>
            <h2>The system only works if your team can operate it.</h2>
            <p>
              Creation Skills is named Skills because the consulting work must leave the company with usable internal capability.
              This is practical skills transfer inside the program so teams know how to run the new model.
            </p>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
