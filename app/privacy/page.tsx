import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

export const metadata: Metadata = getPageMeta("/privacy");

export default function PrivacyPage() {
  return (
    <Section size="lg">
      <Container narrow>
        <div className="utility-page">
          <h1>Privacy Policy</h1>
          <p><strong>Creation Skills</strong> &mdash; A Creation Rights Division</p>

          <h2>Introduction</h2>
          <p>Creation Skills is committed to protecting the privacy of individuals who visit our website and engage with our services. This policy explains how we collect, use, and protect your information.</p>

          <h2>Information We Collect</h2>
          <p>We may collect the following information when you use our website or submit a form:</p>
          <ul>
            <li>Name and contact details (email, company, role)</li>
            <li>Information you provide in form submissions</li>
            <li>Technical data such as browser type, IP address, and pages visited</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to enquiries and review requests</li>
            <li>Provide information about our consulting engagements</li>
            <li>Improve our website and services</li>
            <li>Send relevant updates if you have subscribed</li>
          </ul>

          <h2>Data Protection</h2>
          <p>We take appropriate measures to protect your personal information. We do not sell or share your data with third parties for marketing purposes.</p>

          <h2>Contact</h2>
          <p>For privacy-related enquiries, please contact us through our <a href="/contact">contact page</a>.</p>
        </div>
      </Container>
    </Section>
  );
}
