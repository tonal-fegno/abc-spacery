"use client";

import { useState } from "react";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { label: "Home", id: "home" },
    { label: "Story", id: "story" },
    { label: "Brands", id: "brands" },
    { label: "Solutions", id: "solutions" },
    { label: "Gallery", id: "gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/35 backdrop-blur-xl">
      <div className="max-w-7.1xl mx-auto pl-6 pr-4 md:pl-10 md:pr-6">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Logo */}
          <div
            className="cursor-pointer flex items-center gap-3 group"
            onClick={() => scrollToSection("home")}
          >
            <img
              src="/logo/abc-spacery-logo.svg"
              alt="ABC Spacery"
              width={180}
              height={36}
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1 rounded-full bg-neutral-50/80 border border-neutral-200/70 shadow-sm px-2 py-1">
              {navigationLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="cursor-pointer px-4 py-2 text-sm font-medium text-neutral-600 rounded-full hover:text-neutral-900 hover:bg-white transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-900/80 text-sm font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-200 shadow-sm"
            >
              <span>Contact</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="cursor-pointer lg:hidden inline-flex items-center justify-center p-2.5 rounded-full border border-neutral-200 bg-white/80 shadow-sm text-neutral-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-100/80 bg-white/95 backdrop-blur-xl shadow-lg">
          <nav className="px-6 py-5 space-y-3">
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="cursor-pointer block w-full text-left text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-full px-4 py-2 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToSection("contact");
                setMobileMenuOpen(false);
              }}
              className="cursor-pointer mt-2 block w-full text-center text-sm font-semibold text-white bg-neutral-900 rounded-full px-4 py-2.5 hover:bg-neutral-800 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}