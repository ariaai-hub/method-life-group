"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#why-independent", label: "Why Independent" },
  { href: "/carriers", label: "Our Carriers" },
  { href: "/about", label: "About" },
  { href: "/recruit", label: "Join Us" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="#C9A84C" />
            <path
              d="M16 6L8 26h4l2-5h8l2 5h4L16 6zm0 7l2.5 7h-5L16 13z"
              fill="#0B1F3A"
            />
          </svg>
          <span
            style={{ fontFamily: "DM Serif Display, serif" }}
            className="text-white text-lg tracking-tight"
          >
            Method Life Group
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-gold text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/recruit"
            className="bg-gold text-navy px-5 py-2 text-sm font-semibold rounded hover:bg-gold/90 transition-colors"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-gold text-base font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/recruit"
            onClick={() => setOpen(false)}
            className="bg-gold text-navy px-5 py-2.5 text-sm font-semibold rounded text-center"
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}
