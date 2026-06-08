import { Metadata } from "next";
import Link from "next/link";
import { getPageMeta } from "@/lib/seo";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { legalRegions } from "@/content/legal";

export const metadata: Metadata = getPageMeta("/legal");

export default function LegalCenterPage() {
  return (
    <Section size="lg">
      <Container>
        <div className="legal-center">
          <div className="legal-center__header">
            <h1>Legal Center</h1>
            <p>
              Legal documents for Creation Skills, organized by region. Select a
              document below to view the full text.
            </p>
          </div>

          {legalRegions.map((region) => (
            <div key={region.id} className="legal-region">
              <div className="legal-region__header">
                <span className="legal-region__flag">{region.flag}</span>
                <h2>{region.label}</h2>
              </div>

              <div className="legal-grid">
                {region.documents.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/legal/${region.id}/${doc.slug}`}
                    className="legal-card"
                  >
                    <span className="legal-card__title">{doc.title}</span>
                    <span className="legal-card__desc">{doc.description}</span>
                    <span className="legal-card__cta">Read document &rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
