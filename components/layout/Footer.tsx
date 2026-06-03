import Link from "next/link";
import Image from "next/image";
import { cskillsLogo } from "@/content/logo";
import { footerContent } from "@/content/footer";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Image
              src={cskillsLogo.primary}
              alt="Creation Skills"
              width={120}
              height={28}
            />
            <p className="footer__subline">
              {cskillsLogo.subline}
            </p>
            <p className="footer__desc">
              {footerContent.positioning}
            </p>
          </div>

          {footerContent.columns.map((col) => (
            <div key={col.title}>
              <div className="footer__col-title">{col.title}</div>
              <ul className="footer__links">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            &copy; {year} Creation Skills. A Creation Rights Division.
          </span>
          <div className="footer__legal">
            {footerContent.legal.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
