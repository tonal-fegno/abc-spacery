"use client";

import Image from "next/image";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "Our Story", id: "story" },
    { label: "Brands", id: "brands" },
    { label: "Solutions", id: "solutions" },
    { label: "Gallery", id: "gallery" },
  ];

  return (
    <footer id="contact" className="bg-neutral-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-neutral-800">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Image
              src="/logo/abc-spacery-logo.svg"
              alt="ABC Spacery"
              width={200}
              height={40}
              className="h-10 w-auto filter brightness-0 invert"
            />
            <p className="text-neutral-400 leading-relaxed max-w-md">
              Creating exceptional spaces with innovative design solutions.
              Your vision, our expertise, delivered with excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/abcspacery/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-white flex items-center justify-center transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/abcspacery?igsh=MXVnd3U1eDk3enV5eQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-white flex items-center justify-center transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/abc-spacery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-white flex items-center justify-center transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-neutral-400">
              <p className="leading-relaxed">
                NH 44, Opposite Mayfair Convention Center,
                <br />
                Shamshabad, Hyderabad
                <br />
                Telangana 501218
              </p>
              <a
                href="tel:+917660022799"
                className="block hover:text-white transition-colors"
              >
                +91 76600 22799
              </a>
              <a
                href="mailto:info@abcspacery.com"
                className="block hover:text-white transition-colors"
              >
                info@abcspacery.com
              </a>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="py-12 border-b border-neutral-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-6 md:gap-10 text-center md:text-left">
            <div className="w-full md:w-auto">
              <p className="text-lg md:text-xl font-semibold">
                Patel Marketing
              </p>
              <p className="text-sm text-neutral-500 mt-1">Hyderabad</p>
            </div>

            <div
              className="hidden md:block h-10 w-px bg-neutral-800/70"
              aria-hidden="true"
            />

            <div className="w-full md:w-auto">
              <p className="text-lg md:text-xl font-semibold">
                ABC Group International
              </p>
              <p className="text-xs text-neutral-500 mt-2 leading-relaxed md:max-w-md">
                India • Qatar • UAE • Oman • Uganda • Rwanda • Kenya • Congo •
                Tanzania
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} ABC Spacery. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}