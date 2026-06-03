import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

export const metadata: Metadata = getPageMeta("/cookies");

export default function CookiesPage() {
  return (
    <Section size="lg">
      <Container narrow>
        <div className="utility-page">
          <h1>Cookie Policy</h1>
          <p><strong>Creation Skills</strong>, A Creation Rights Division</p>

          <h2>What Are Cookies</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help the website function properly and provide information to improve your experience.</p>

          <h2>How We Use Cookies</h2>
          <p>Creation Skills uses cookies for:</p>
          <ul>
            <li>Essential website functionality</li>
            <li>Understanding how visitors use our website</li>
            <li>Improving website performance</li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>You can control and manage cookies through your browser settings. Disabling cookies may affect website functionality.</p>

          <h2>Contact</h2>
          <p>For questions about our cookie practices, please contact us through our <a href="/contact">contact page</a>.</p>
        </div>
      </Container>
    </Section>
  );
}
