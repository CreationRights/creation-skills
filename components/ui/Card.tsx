import Link from "next/link";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  image?: string;
  href?: string;
  eyebrow?: string;
  linkText?: string;
};

export default function Card({
  title,
  description,
  image,
  href,
  eyebrow,
  linkText = "Learn more",
}: CardProps) {
  const inner = (
    <>
      {image && (
        <div className="card__image">
          <Image src={image} alt={title} width={640} height={400} />
        </div>
      )}
      <div className="card__body">
        {eyebrow && <div className="card__eyebrow">{eyebrow}</div>}
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{description}</p>
        {href && <span className="card__link">{linkText} &rarr;</span>}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        {inner}
      </Link>
    );
  }

  return <div className="card">{inner}</div>;
}
