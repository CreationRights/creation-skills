import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

export const metadata: Metadata = getPageMeta("/terms");

export default function TermsPage() {
  return (
    <Section size="lg">
      <Container narrow>
        <div className="utility-page">
          <h1>Terms of Service</h1>
          <p><strong>Creation Skills</strong>, A Creation Rights Division</p>

          <h2>Acceptance of Terms</h2>
          <p>By accessing and using the Creation Skills website, you accept and agree to be bound by these terms of service.</p>

          <h2>Services</h2>
          <p>Creation Skills provides consulting services for media creation operations. All engagements are subject to separate engagement agreements.</p>

          <h2>Intellectual Property</h2>
          <p>All content on this website, including text, images, logos, and design, is the property of Creation Skills or its licensors. You may not reproduce, distribute, or create derivative works without prior written consent.</p>

          <h2>Limitation of Liability</h2>
          <p>Creation Skills provides this website and its content on an as-is basis. We make no warranties regarding the accuracy or completeness of website content.</p>

          <h2>Confidentiality</h2>
          <p>Do not submit confidential source files, unreleased assets, private talent materials, contracts, legal documents, credentials, private links, or sensitive rights notes through website forms.</p>

          <h2>Changes</h2>
          <p>We reserve the right to update these terms at any time. Continued use of the website constitutes acceptance of updated terms.</p>

          <h2>Contact</h2>
          <p>For questions about these terms, please contact us through our <a href="/contact">contact page</a>.</p>
        </div>
      </Container>
    </Section>
  );
}
