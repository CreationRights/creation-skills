import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import CTAGroup from "@/components/ui/CTAGroup";

export const metadata: Metadata = getPageMeta("/faq");

const faqs = [
  {
    q: "What is Creation Skills?",
    a: "Creation Skills is the consulting division of Creation Rights. We help companies redesign the operating model behind media creation so the people, production agents, operating files, approval gates, and rights review paths are ready before the Creation Rights platform governs the protected layer.",
  },
  {
    q: "Who is Creation Skills for?",
    a: "Media and entertainment enterprises, brands with large content operations, agencies and production companies, and enterprise creative operations teams that need a clearer media creation process before new tools and production paths scale across departments.",
  },
  {
    q: "What is the difference between Creation Skills and Creation Rights?",
    a: "Creation Skills prepares the company process. Creation Rights governs the protected layer. Creation Skills is the consulting engagement that builds the operating model. Creation Rights is the platform where rights, NILP\u00AE, consent, metadata, approvals, audit, and compliance records are governed.",
  },
  {
    q: "What is a production agent?",
    a: "A company-owned production agent is a defined role within the company's media creation process. Each agent has a name, owner, approved tasks, blocked tasks, operating files, review path, and risk level. Agents prepare the work. Humans approve the decisions that matter.",
  },
  {
    q: "What is an operating file?",
    a: "An operating file is a company-owned instruction set that defines what a production agent can do, what it cannot do, what examples it follows, what formats it uses, and what review steps are required. Operating files turn loose prompts into governed, repeatable instructions.",
  },
  {
    q: "What is a human approval gate?",
    a: "A human approval gate is a defined point in the production path where a named person must review and approve the work before it can move forward. Gates cover final creative, client-facing work, public posts, talent-facing materials, paid media, and rights-sensitive decisions.",
  },
  {
    q: "What is NILP\u00AE?",
    a: "NILP\u00AE refers to Name, Image, Likeness, and Performance rights. These are the rights associated with how a person's identity and creative contribution are used in media production. Creation Skills ensures NILP\u00AE checks are built into the company flow before media moves.",
  },
  {
    q: "What does a C/Skills Review include?",
    a: "A C/Skills Review is a focused review of one production path. It examines team roles, production-agent use, rights exposure, approval paths, tool stack, asset lifecycle, operating gaps, and Creation Rights readiness. It produces a current-state flow map, operating gap report, and priority roadmap.",
  },
  {
    q: "Is Creation Skills a software product?",
    a: "No. Creation Skills is a consulting practice. We do not sell software, licences, or SaaS products. We help companies redesign the operating model behind media creation. Creation Rights is the platform. Creation Skills prepares the company for it.",
  },
  {
    q: "How do I start?",
    a: "Book a C/Skills Review. It is the starting point for understanding your current company flow and identifying the gaps between how media moves today and how it should move with governed production agents, operating files, approval gates, and Creation Rights readiness.",
  },
];

export default function FAQPage() {
  return (
    <Section size="lg">
      <Container narrow>
        <div className="section-header">
          <Eyebrow>FAQ</Eyebrow>
          <h1>Frequently asked questions.</h1>
          <p>Common questions about Creation Skills, production agents, operating files, human approval gates, and Creation Rights readiness.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-item__answer">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div style={{ marginTop: "var(--space-3xl)" }}>
          <CTAGroup
            primary={{ label: "Book a C/Skills Review", href: "/book-review" }}
            secondary={{ label: "Contact Us", href: "/contact" }}
          />
        </div>
      </Container>
    </Section>
  );
}
