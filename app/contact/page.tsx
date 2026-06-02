import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ContactForm from "@/components/forms/ContactForm";
import { cskillsImages } from "@/content/images";

export const metadata: Metadata = getPageMeta("/contact");

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="CONTACT"
        headline="Get in touch with Creation Skills."
        subhead="For general enquiries, partnership questions, speaking requests, or to learn more about how Creation Skills can help your team."
        image={cskillsImages.supporting.contact}
        compact
      />

      <Section>
        <Container narrow>
          <div className="section-header">
            <Eyebrow>SEND A MESSAGE</Eyebrow>
            <h2>We will respond within two business days.</h2>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
