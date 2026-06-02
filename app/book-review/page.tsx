import { Metadata } from "next";
import { getPageMeta } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import BookReviewForm from "@/components/forms/BookReviewForm";
import { cskillsImages } from "@/content/images";

export const metadata: Metadata = getPageMeta("/book-review");

export default function BookReviewPage() {
  return (
    <>
      <Hero
        eyebrow="BOOK A C/SKILLS REVIEW"
        headline="Start with a focused review of one production path."
        subhead="A C/Skills Review examines team roles, production-agent use, rights exposure, approval paths, tool stack, asset lifecycle, operating gaps, and Creation Rights readiness."
        image={cskillsImages.supporting.bookReview}
        compact
      />

      <Section>
        <Container narrow>
          <div className="section-header">
            <Eyebrow>REQUEST A REVIEW</Eyebrow>
            <h2>Tell us about your team and production path.</h2>
            <p>We will review your submission and respond within two business days.</p>
          </div>
          <BookReviewForm />
        </Container>
      </Section>
    </>
  );
}
