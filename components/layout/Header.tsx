"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "COLLECTION", href: "#collection" },
    { label: "STORY", href: "#story" },
    { label: "LOOKBOOK", href: "#lookbook" },
    { label: "WAITLIST", href: "#waitlist" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-laf-black/95 backdrop-blur-sm border-b border-laf-steel/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="font-display text-laf-offwhite tracking-widest text-sm font-medium uppercase"
            >
              L&F
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-[10px] tracking-superwide text-laf-zinc hover:text-laf-offwhite transition-colors duration-300 link-underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Tag */}
            <div className="hidden md:flex items-center gap-4">
              <span className="font-mono text-[9px] tracking-widest text-laf-steel border border-laf-steel/30 px-3 py-1">
                SS 25
              </span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex flex-col gap-[6px] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-px bg-laf-ash transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-px bg-laf-ash transition-all duration-300 ${
                  menuOpen ? "w-0 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`block w-6 h-px bg-laf-ash transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-laf-black transition-all duration-500 flex flex-col justify-center px-10 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-4xl font-light text-laf-offwhite hover:text-laf-ash transition-colors duration-200"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-16 font-mono text-[10px] tracking-widest text-laf-steel">
          LOST and FOUND — SS 2025
        </div>
      </div>
    </>
  );
}
