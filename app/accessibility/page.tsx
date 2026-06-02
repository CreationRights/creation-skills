import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

export const metadata: Metadata = getPageMeta("/accessibility");

export default function AccessibilityPage() {
  return (
    <Section size="lg">
      <Container narrow>
        <div className="utility-page">
          <h1>Accessibility</h1>
          <p><strong>Creation Skills</strong> &mdash; A Creation Rights Division</p>

          <h2>Our Commitment</h2>
          <p>Creation Skills is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>

          <h2>Standards</h2>
          <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible to people with a wide range of disabilities.</p>

          <h2>Features</h2>
          <ul>
            <li>Semantic HTML structure</li>
            <li>Keyboard navigable interface</li>
            <li>Descriptive alt text for images</li>
            <li>Sufficient colour contrast ratios</li>
            <li>Responsive design for all device sizes</li>
            <li>Clear and consistent navigation</li>
          </ul>

          <h2>Feedback</h2>
          <p>If you encounter accessibility barriers on this website, please contact us through our <a href="/contact">contact page</a>. We welcome your feedback and will work to address any issues.</p>
        </div>
      </Container>
    </Section>
  );
}
