"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 16);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-solid" : ""}`}>
      <a className="logo" href="#top">
        <span className="logo-mark">R</span>
        <span className="logo-text">
          Rio Children's Hospital
          <em>Women - Newborns - Children</em>
        </span>
      </a>
      <nav className="nav-links">
        <a href="#emergency">Emergency</a>
        <a href="#services">Services</a>
        <a href="#maternity">Maternity</a>
        <a href="#branches">Branches</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a className="btn btn-pink" href="#book">
        Book an appointment
      </a>
    </header>
  );
}
