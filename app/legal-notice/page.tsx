import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

export const metadata: Metadata = getPageMeta("/legal-notice");

export default function LegalNoticePage() {
  return (
    <Section size="lg">
      <Container narrow>
        <div className="utility-page">
          <h1>Legal Notice</h1>
          <p><strong>Creation Skills</strong> &mdash; A Creation Rights Division</p>

          <h2>Operator</h2>
          <p>This website is operated by Creation Skills, a division of Creation Rights.</p>

          <h2>Disclaimer</h2>
          <p>The information provided on this website is for general informational purposes only. It does not constitute legal advice, rights management guidance, or a substitute for professional consultation.</p>

          <h2>Trademarks</h2>
          <p>Creation Skills, C/Skills, Creation Rights, and NILP&reg; are trademarks or registered trademarks of their respective owners. All other trademarks referenced on this website are the property of their respective owners.</p>

          <h2>No Professional Advice</h2>
          <p>Nothing on this website constitutes legal, financial, or professional advice. For specific guidance, please engage with Creation Skills through a formal consulting engagement.</p>

          <h2>Contact</h2>
          <p>For legal enquiries, please contact us through our <a href="/contact">contact page</a>.</p>
        </div>
      </Container>
    </Section>
  );
}
