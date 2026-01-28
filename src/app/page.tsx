"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface Particle {
  width: number;
  height: number;
  left: number;
  top: number;
  animationDelay: number;
  animationDuration: number;
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [brandsTypingStarted, setBrandsTypingStarted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const quoteSectionRef = useRef<HTMLDivElement>(null);
  const brandsMoreRef = useRef<HTMLParagraphElement>(null);
  const hasTypedRef = useRef(false);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 6; i++) {
        newParticles.push({
          width: Math.random() * 4 + 2,
          height: Math.random() * 4 + 2,
          left: Math.random() * 100,
          top: Math.random() * 100,
          animationDelay: Math.random() * 3,
          animationDuration: Math.random() * 3 + 3,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (quoteSectionRef.current) {
      observer.observe(quoteSectionRef.current);
    }

    return () => {
      if (quoteSectionRef.current) {
        observer.unobserve(quoteSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!brandsMoreRef.current || hasTypedRef.current) return;

    const text = "...and Many More Brands";
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTypedRef.current) {
            hasTypedRef.current = true;
            setBrandsTypingStarted(true);
            setIsTyping(true);

            const typeText = () => {
              if (currentIndex < text.length) {
                setTypedText(text.slice(0, currentIndex + 1));
                currentIndex++;
                timeoutId = setTimeout(typeText, 65);
              } else {
                setIsTyping(false);
              }
            };
            typeText();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(brandsMoreRef.current);

    return () => {
      if (brandsMoreRef.current) {
        observer.unobserve(brandsMoreRef.current);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-100/70 bg-white/70 backdrop-blur-xl">
        <div className="max-w-7.1xl mx-auto pl-6 pr-4 md:pl-10 md:pr-6">
          <div className="flex items-center justify-between h-20 gap-6">
            {/* Logo */}
            <div
              className="cursor-pointer flex items-center gap-3 group"
              onClick={() => scrollToSection("home")}
            >
              <Image
                src="/logo/abc-spacery-logo.svg"
                alt="ABC Spacery"
                width={180}
                height={36}
                className="h-9 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <span className="hidden md:inline-block text-xs tracking-[0.25em] uppercase text-neutral-500">
                Home Solutions
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-1 rounded-full bg-neutral-50/80 border border-neutral-200/70 shadow-sm px-2 py-1">
                {[
                  { label: "Home", id: "home" },
                  { label: "Story", id: "story" },
                  { label: "Brands", id: "brands" },
                  { label: "Solutions", id: "solutions" },
                  { label: "Gallery", id: "gallery" },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="px-4 py-2 text-sm font-medium text-neutral-600 rounded-full hover:text-neutral-900 hover:bg-white transition-all duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-900/80 text-sm font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-200 shadow-sm"
              >
                <span>Contact</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-full border border-neutral-200 bg-white/80 shadow-sm text-neutral-900"
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
              {[
                { label: "Home", id: "home" },
                { label: "Story", id: "story" },
                { label: "Brands", id: "brands" },
                { label: "Solutions", id: "solutions" },
                { label: "Gallery", id: "gallery" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-full px-4 py-2 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-2 block w-full text-center text-sm font-semibold text-white bg-neutral-900 rounded-full px-4 py-2.5 hover:bg-neutral-800 transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section - Minimal & Modern */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Video Background with Modern Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.5)" }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-900/40 to-neutral-900/60" />
        </div>

        {/* Hero Content - Clean & Minimal */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-white/90">
                Welcome to ABC Spacery
              </p>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white">
              Design Spaces,
              <br />
              <span className="font-semibold">Inspire Living</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              Hyderabad's premier destination for complete home solutions
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection("brands")}
                className="px-8 py-4 bg-white text-neutral-900 rounded-full font-medium hover:bg-neutral-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Explore Brands
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-medium hover:bg-white hover:text-neutral-900 transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>

            <div className="pt-12">
              <p className="text-5xl md:text-6xl font-light text-white mb-2">
                75,000 sq.ft
              </p>
              <p className="text-lg text-white/70">of Pure Inspiration</p>
            </div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full scroll-dot-bounce" />
          </div>
        </div>
      </section>

      {/* Transformation Quote - Clean Design */}
      <section ref={quoteSectionRef} className="py-32 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div
              className={`space-y-6 transition-all duration-1000 ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
                }`}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 font-medium">
                From
              </p>
              <h2 className="text-5xl md:text-6xl font-light text-white leading-tight">
                Italian
                <br />
                <span className="font-semibold">Marbles</span>
              </h2>
            </div>

            <div
              className={`space-y-6 transition-all duration-1000 ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
                }`}
              style={{ transitionDelay: "0.3s" }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 font-medium">
                To
              </p>
              <h2 className="text-5xl md:text-6xl font-light text-white leading-tight">
                Complete Home
                <br />
                <span className="font-semibold">Solutions</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Modern Minimal */}
      <section id="story" className="relative py-32 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal y={40} duration={0.8}>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-neutral-900 rounded-full">
                  <p className="text-xs uppercase tracking-[0.2em] font-medium text-white">
                    Our Story
                  </p>
                </div>
                <h2 className="text-4xl md:text-5xl font-light leading-tight text-neutral-900">
                  Three Legacies,
                  <br />
                  <span className="font-semibold">One Vision</span>
                </h2>
              </div>

              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  <span className="font-semibold text-neutral-900">
                    ABC Spacery
                  </span>{" "}
                  brings together three trusted teams—
                  <span className="font-semibold text-neutral-900">
                    ABC Group
                  </span>
                  ,{" "}
                  <span className="font-semibold text-neutral-900">
                    Patel Marketing Group
                  </span>
                  , and{" "}
                  <span className="font-semibold text-neutral-900">
                    Subha Gruha Group
                  </span>
                  —to create a premium home solutions brand.
                </p>

                <p>
                  We offer complete home solutions under one roof, including
                  tiles, sanitaryware, kitchens, furniture, and smart home
                  technology.
                </p>

                <p>
                  With global expertise, customer-centric service, and proven
                  real estate experience, we deliver future-ready living spaces
                  that inspire better homes and better living.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Centers - Clean Cards */}
      <section id="experience" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Jaquar */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-light text-neutral-900">
                South India's Largest
              </h3>
              <div className="flex justify-center">
                <Image
                  src="/jaquar/jaquar.png"
                  alt="Jaquar"
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/jaquar/jquar-banner.png"
                alt="Jaquar Experience Center"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-lg text-neutral-600">
              Premium Bath & Home Products Experience
            </p>
          </div>

          {/* Prominance */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-light text-neutral-900">
                Biggest Experience Center for
              </h3>
              <div className="flex justify-center">
                <Image
                  src="/prominance/prominance-icon.png"
                  alt="Prominance"
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/prominance/banner.png"
                alt="Prominance Homworks"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-lg text-neutral-600">
              End-to-End Home Interior Design Partner
            </p>
          </div>
        </div>
      </section>

      {/* Brands - Minimal Grid */}
      <section id="brands" className="py-32 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900">
              <span className="block">Curated Brands,</span>
              <span className="block font-semibold mt-2 md:mt-4">
                One Destination
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "RAK CERAMICS", image: "/rak.png" },
              {
                name: "PROMINANCE Homworks®",
                image: "/prominance-home-work.png",
              },
              { name: "ICON WORLD OF TILE", image: "/icon.png" },
              { name: "Jaquar", image: "/jaquar.png" },
              { name: "Artize", image: "/Artize.png" },
              { name: "Jaquar LIGHTING", image: "/jaquar-lighting.png" },
              { name: "CARYSIL", image: "/carysil.png" },
              { name: "ÉSSCO", image: "/essco.png" },
              { name: "norisys®", image: "/norisys.png" },
              { name: "PROMINANCE Uniframe", image: "/uniframe.png" },
              { name: "PROMINANCE UPVC", image: "/prominance-upvc.png" },
              { name: "VICOSTONE", image: "/vicostone.png" },
              { name: "HOME SCREEN", image: "/home-screen.png" },
            ].map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-all duration-300 border border-neutral-100 hover:border-neutral-300 group"
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={160}
                  height={100}
                  className="object-contain max-h-20 w-auto "
                />
              </div>
            ))}
          </div>

          <p
            ref={brandsMoreRef}
            className="text-center text-lg pt-12 font-light min-h-[28px]"
          >
            {/* Single-line rendering (no overlap): static text until typing starts */}
            <span
              className={
                brandsTypingStarted ? "text-neutral-700" : "text-neutral-500"
              }
            >
              {brandsTypingStarted ? typedText : "...and Many More Brands"}
              {brandsTypingStarted && isTyping && (
                <span className="animate-pulse ml-0.5 text-neutral-900">|</span>
              )}
            </span>
          </p>
        </div>
      </section>

      {/* Solutions - Clean Categories */}
      <section id="solutions" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900">
              <span className="block">Complete Home</span>

              <span className="block font-semibold mt-2 md:mt-4">Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Accessories",
              "Tiles & Slabs",
              "Kitchens & Wardrobes",
              "Sanitaryware",
              "Sofas & More",
              "Bath Fittings",
              "Doors & Windows",
              "Home Cinema",
              "Lights & Switches",
              "Furniture",
            ].map((category, index) => (
              <div
                key={index}
                className="group bg-neutral-50 hover:bg-neutral-900 rounded-xl p-6 text-center transition-all duration-300 cursor-pointer border border-neutral-100 hover:border-neutral-900"
              >
                <p className="text-sm font-medium text-neutral-900 group-hover:text-white transition-colors">
                  {category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Minimal Masonry */}
      <section id="gallery" className="py-32 bg-neutral-50">
        <div className="mb-16 px-6 ">
          <h2 className="text-4xl md:text-5xl font-light text-center text-neutral-900">
            <span className="block">Explore Our</span>
            <span className="block font-semibold mt-3">Spaces</span>
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 px-4">
          {[
            "/gallerry/gallery-2.png",
            "/gallerry/gallery-3.png",
            "/gallerry/gallery-4.png",
            "/gallerry/gallery-5.png",
            "/gallerry/gallery-6.png",
            "/gallerry/gallerry-7.png",
            "/gallerry/gallery-8.png",
            "/gallerry/gallery-9.png",
            "/gallerry/gallery-1.png",
          ].map((src, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer - Minimal & Modern */}
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
                {[
                  { label: "Home", id: "home" },
                  { label: "Our Story", id: "story" },
                  { label: "Brands", id: "brands" },
                  { label: "Solutions", id: "solutions" },
                  { label: "Gallery", id: "gallery" },
                ].map((link) => (
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
                <p className="text-lg md:text-xl font-semibold">Patel Marketing</p>
                <p className="text-sm text-neutral-500 mt-1">Hyderabad</p>
              </div>

              <div className="hidden md:block h-10 w-px bg-neutral-800/70" aria-hidden="true" />

              <div className="w-full md:w-auto">
                <p className="text-lg md:text-xl font-semibold">
                  ABC Group International
                </p>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed md:max-w-md">
                  India • Qatar • UAE • Oman • Uganda • Rwanda • Kenya • Congo • Tanzania
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
    </div>
  );
}
