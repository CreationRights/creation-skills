"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cskillsLogo } from "@/content/logo";
import { mainNav, ctaNav } from "@/content/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <Link href="/" className="header__logo" aria-label="Creation Skills home">
          <Image
            src={cskillsLogo.primary}
            alt="Creation Skills"
            width={120}
            height={28}
            priority
          />
        </Link>

        <nav className={open ? "header__nav header__nav--open" : "header__nav"}>
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="header__link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={ctaNav.href}
            className="header__cta"
            onClick={() => setOpen(false)}
          >
            {ctaNav.label}
          </Link>
        </nav>

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
