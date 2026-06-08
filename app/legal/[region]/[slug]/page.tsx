import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { getAllLegalParams, findLegalDocument } from "@/content/legal";
import { getLegalDocComponent } from "@/content/legal-docs";

type Params = { region: string; slug: string };

export function generateStaticParams(): Params[] {
  return getAllLegalParams();
}

export function generateMetadata({ params }: { params: Promise<Params> }) {
  return params.then(({ region, slug }) => {
    const result = findLegalDocument(region, slug);
    if (!result) return {};
    return {
      title: `${result.document.title} (${result.region.flag}) | Creation Skills`,
      description: result.document.description,
    };
  });
}

export default async function LegalDocumentPage({ params }: { params: Promise<Params> }) {
  const { region, slug } = await params;
  const result = findLegalDocument(region, slug);
  if (!result) notFound();

  const { region: reg, document } = result;
  const DocContent = getLegalDocComponent(region, slug);

  return (
    <Section size="lg">
      <Container narrow>
        <div className="utility-page">
          <div className="legal-breadcrumb">
            <Link href="/legal">Legal Center</Link>
            {" / "}
            {reg.label}
          </div>

          <h1>{document.title}</h1>
          {document.lastUpdated && (
            <p className="legal-meta">Last updated: {document.lastUpdated}</p>
          )}

          {DocContent ? <DocContent /> : (
            <p>This document is being prepared and will be published here.</p>
          )}
        </div>
      </Container>
    </Section>
  );
}
