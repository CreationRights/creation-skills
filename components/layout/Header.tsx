"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cskillsLogo } from "@/content/logo";
import { mainNav, ctaNav } from "@/content/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="header">
      <div className="header__inner">
        <Link href="/" className="header__logo" aria-label="Creation Skills home">
          <Image
            src={cskillsLogo.primary}
            alt="Creation Skills"
            width={110}
            height={26}
            priority
          />
        </Link>

        <nav className={open ? "header__nav header__nav--open" : "header__nav"}>
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`header__link${isActive(item.href) ? " header__link--active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={ctaNav.href}
            className="header__cta header__cta--mobile"
            onClick={() => setOpen(false)}
          >
            {ctaNav.label}
          </Link>
        </nav>

        <Link href={ctaNav.href} className="header__cta header__cta--desktop">
          {ctaNav.label}
        </Link>

        <button
          className="header__menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
