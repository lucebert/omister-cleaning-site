"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#services", label: "Prestations & tarifs" },
  { href: "#avant-apres", label: "Avant/Après", mobileOnly: true },
  { href: "#boutique", label: "Boutique" },
  { href: "#zone", label: "Zone", mobileOnly: true },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header>
      <div className="nav wrap">
        <a className="brand" href="/">
          O'Mister&nbsp;<span className="brand-accent">Cleaning</span>
        </a>
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="Navigation principale">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={l.mobileOnly ? "nav-extra" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <a className="nav-cta" href="tel:0610133642">Devis gratuit</a>
          <button
            className="nav-burger"
            type="button"
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
