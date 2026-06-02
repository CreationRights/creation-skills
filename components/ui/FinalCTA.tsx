import Image from "next/image";
import Button from "./Button";
import { cskillsImages } from "@/content/images";

type FinalCTAProps = {
  headline?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  supportLines?: string[];
};

export default function FinalCTA({
  headline = "Make your media creation process ready for rights, agents, approvals, and scale.",
  body = "Creation Skills helps your company move from scattered experiments to a governed production system your team can own, operate, and improve over time.",
  primaryCta = { label: "Book a C/Skills Review", href: "/book-review" },
  secondaryCta = { label: "Explore Engagements", href: "/engagements" },
  supportLines = [
    "Your company flow.",
    "Your production agents.",
    "Your approval gates.",
    "Prepared for Creation Rights.",
  ],
}: FinalCTAProps) {
  return (
    <section className="final-cta">
      <div className="final-cta__bg">
        <Image
          src={cskillsImages.core.finalCta}
          alt=""
          fill
          style={{ objectFit: "cover" }}
          aria-hidden="true"
        />
      </div>
      <div className="final-cta__overlay" />
      <div className="final-cta__content">
        <h2>{headline}</h2>
        <p>{body}</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
          <Button href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </Button>
        </div>
        {supportLines.length > 0 && (
          <div className="final-cta__support">
            {supportLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < supportLines.length - 1 && <br />}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
