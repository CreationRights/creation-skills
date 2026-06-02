import Image from "next/image";
import Button from "@/components/ui/Button";

type HeroProps = {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string;
  compact?: boolean;
  supportLines?: string[];
};

export default function Hero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  image,
  compact,
  supportLines,
}: HeroProps) {
  return (
    <section className={compact ? "hero hero--compact" : "hero"}>
      {image && (
        <>
          <div className="hero__bg">
            <Image
              src={image}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              priority
              aria-hidden="true"
            />
          </div>
          <div className="hero__overlay" />
        </>
      )}
      <div className="hero__content">
        {eyebrow && <div className="hero__eyebrow">{eyebrow}</div>}
        <h1 className="hero__headline">{headline}</h1>
        {subhead && <p className="hero__subhead">{subhead}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="hero__ctas">
            {primaryCta && (
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
        {supportLines && supportLines.length > 0 && (
          <div className="hero__support">
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
