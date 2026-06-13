"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const anchorHref = (id) => (pathname === "/" ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 16);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-solid" : ""}`}>
      <a className="logo" href={anchorHref("top")}>
        <Image
          src="/assets/logo.png"
          alt="Rio Children's Hospital"
          width={530}
          height={136}
          className="logo-img"
          priority
        />
      </a>
      <nav className="nav-links">
        <a href={anchorHref("emergency")}>Emergency</a>
        <a href={anchorHref("services")}>Services</a>
        <a href={anchorHref("maternity")}>Maternity</a>
        <a href={anchorHref("branches")}>Branches</a>
        <a href={anchorHref("faq")}>FAQ</a>
      </nav>
      <a className="btn btn-pink" href={anchorHref("book")}>
        Book an appointment
      </a>
    </header>
  );
}
