"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import drawing from "../../public/drawing.png";
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
  const quoteSectionRef = useRef<HTMLDivElement>(null);
  const brandsMoreRef = useRef<HTMLParagraphElement>(null);
  const hasTypedRef = useRef(false);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
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
            setIsTyping(true);

            const typeText = () => {
              if (currentIndex < text.length) {
                setTypedText(text.slice(0, currentIndex + 1));
                currentIndex++;
                timeoutId = setTimeout(typeText, 100);
              } else {
                setIsTyping(false);
              }
            };
            typeText();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
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
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-sm border-b"
        style={{
          backgroundColor: "rgba(250, 248, 243, 0.95)",
          borderColor: "#E8E0D5",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <Image
                src="/logo/abc-spacery-logo.svg"
                alt="ABC Spacery Logo"
                width={200}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-medium transition-colors"
                style={{ color: "#4A5568" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8B6F47")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4A5568")}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("story")}
                className="text-sm font-medium transition-colors"
                style={{ color: "#4A5568" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8B6F47")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4A5568")}
              >
                Our Story
              </button>

              <button
                onClick={() => scrollToSection("brands")}
                className="text-sm font-medium transition-colors"
                style={{ color: "#4A5568" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8B6F47")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4A5568")}
              >
                Brands
              </button>
              <button
                onClick={() => scrollToSection("solutions")}
                className="text-sm font-medium transition-colors"
                style={{ color: "#4A5568" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8B6F47")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4A5568")}
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-sm font-medium transition-colors"
                style={{ color: "#4A5568" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8B6F47")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4A5568")}
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium transition-colors"
                style={{ color: "#4A5568" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8B6F47")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4A5568")}
              >
                Contact Us
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" style={{ color: "#4A5568" }}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Video Banner Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.7)" }}
            onError={(e) => {
              // Hide video if it fails to load
              e.currentTarget.style.display = "none";
            }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Fallback gradient overlay - always visible */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(44, 62, 80, 0.9), rgba(52, 73, 94, 0.9), rgba(139, 111, 71, 0.3))",
            }}
          />
          {/* Decorative pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Floating Particles - Hero */}
          {particles.length > 0 && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
              {particles.map((particle, i) => (
                <div
                  key={i}
                  className="absolute rounded-full animate-float"
                  style={{
                    width: `${particle.width}px`,
                    height: `${particle.height}px`,
                    backgroundColor: "#B8956A",
                    opacity: 0.4,
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    animationDelay: `${particle.animationDelay}s`,
                    animationDuration: `${particle.animationDuration}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 text-center">
          <div className="space-y-8 animate-fade-in">
            <p className="text-lg md:text-xl uppercase tracking-[0.3em] font-light text-white/90">
              Welcome to
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6">
              <span
                className="hero-shimmer-wrap hover:text-[#B8956A]"
                onPointerMove={(e) => {
                  const el = e.currentTarget as HTMLSpanElement;
                  const rect = el.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  el.style.setProperty("--shimmer-x", `${x}px`);
                  el.style.setProperty("--shimmer-y", `${y}px`);
                }}
                onPointerLeave={(e) => {
                  const el = e.currentTarget as HTMLSpanElement;
                  el.style.setProperty("--shimmer-x", `50%`);
                  el.style.setProperty("--shimmer-y", `50%`);
                }}
              >
                <span className="text-white">ABC SPACERY</span>
                <span className="hero-shimmer-overlay" aria-hidden="true">
                  ABC SPACERY
                </span>
              </span>
            </h1>
            <p className="text-2xl md:text-4xl font-light italic text-white/95 mb-4">
              DESIGN SPACES, INSPIRE LIVING
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 font-light leading-relaxed">
              Hyderabad's newest destination for thoughtfully curated complete
              home solutions
            </p>
            <div className="pt-8">
              <div className="inline-block px-12 py-6 rounded-xl shadow-2xl border-2 border-white/20 backdrop-blur-sm bg-white/10">
                <p className="text-4xl md:text-5xl font-bold text-white">
                  75,000 sq.ft.
                </p>
                <p className="text-lg md:text-xl mt-2 text-white/90 font-light">
                  Pure Inspiration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Quote Section - Italian Marbles to Complete Home Solutions */}
      <section
        ref={quoteSectionRef}
        className="py-24 md:py-32 px-4 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #2C3E50 0%, #34495E 50%, #2C3E50 100%)",
        }}
      >
        {/* Animated Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse-slow"
            style={{
              backgroundColor: "#B8956A",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse-slow"
            style={{
              backgroundColor: "#8B6F47",
              transform: "translate(50%, 50%)",
              animationDelay: "1s",
            }}
          />
        </div>

        {/* Floating Particles - Quote Section */}
        {particles.length > 0 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float"
                style={{
                  width: `${particle.width}px`,
                  height: `${particle.height}px`,
                  backgroundColor: "#B8956A",
                  opacity: 0.4,
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.animationDelay}s`,
                  animationDuration: `${particle.animationDuration}s`,
                }}
              />
            ))}
          </div>
        )}

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 text-center">
            {/* Once the land of */}
            <div
              className={`flex flex-col items-center transition-all duration-1000 ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
                }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <p
                className="text-lg md:text-xl font-light mb-2 transition-all duration-300 hover:scale-110 cursor-default"
                style={{ color: "#CBD5E0" }}
              >
                Once the land of
              </p>
              <h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight transition-all duration-300 hover:scale-110 hover:brightness-110 cursor-pointer group"
                style={{
                  color: "#B8956A",
                  textShadow: "0 4px 20px rgba(184, 149, 106, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow =
                    "0 8px 30px rgba(184, 149, 106, 0.6)";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow =
                    "0 4px 20px rgba(184, 149, 106, 0.3)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Italian Marbles
              </h2>
            </div>

            {/* Animated Separator */}
            <div
              className={`flex flex-col items-center gap-2 my-4 md:my-0 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              style={{ transitionDelay: "0.5s" }}
            >
              <div
                className="w-px h-16 md:h-20 transition-all duration-500 hover:h-24 md:hover:h-28"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, #B8956A, transparent)",
                }}
              />
              <div
                className="w-2 h-2 rounded-full animate-pulse-glow cursor-pointer transition-all duration-300 hover:scale-150 hover:shadow-lg"
                style={{
                  backgroundColor: "#B8956A",
                  boxShadow: "0 0 10px rgba(184, 149, 106, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(184, 149, 106, 0.8)";
                  e.currentTarget.style.transform = "scale(1.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 10px rgba(184, 149, 106, 0.5)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>

            {/* Now the destination for */}
            <div
              className={`flex flex-col items-center transition-all duration-1000 ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
                }`}
              style={{ transitionDelay: "0.8s" }}
            >
              <p
                className="text-lg md:text-xl font-light mb-2 transition-all duration-300 hover:scale-110 cursor-default"
                style={{ color: "#CBD5E0" }}
              >
                Now the destination for
              </p>
              <h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight transition-all duration-300 hover:scale-110 hover:brightness-110 cursor-pointer"
                style={{
                  color: "#B8956A",
                  textShadow: "0 4px 20px rgba(184, 149, 106, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow =
                    "0 8px 30px rgba(184, 149, 106, 0.6)";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow =
                    "0 4px 20px rgba(184, 149, 106, 0.3)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Complete Home Solutions
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - ABC Spacery */}
      <section
        id="story"
        className="relative w-full px-4 overflow-hidden"
        style={{
          backgroundColor: "#FAF8F3",
          backgroundImage: "url('/abc-spacery-image.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
        }}
      >
        {/* ✅ Space for full illustration height */}
        <div className="h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh]" />

        {/* Subtle overlay (keeps drawing readable) */}
        {/* <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(250,248,243,0.15), rgba(250,248,243,0.6) 70%)",
          }}
        /> */}

        {/* Content */}
        <div className="relative max-w-6xl mx-auto flex justify-start pb-24 md:pb-32">
          <ScrollReveal y={36} duration={0.75} amount={0.35} className="w-full md:w-[60%]">
            <div className="backdrop-blur-sm bg-white/85 border border-white/30 rounded-3xl px-6 md:px-10 py-8 md:py-12 shadow-2xl space-y-6">
              <p
                className="text-sm md:text-base uppercase tracking-[0.25em] font-semibold"
                style={{ color: "#8B6F47" }}
              >
                Our Story
              </p>

              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ color: "#8B6F47" }}
              >
                ABC Spacery: Three Legacies, One Vision
              </h2>

              <div className="space-y-4 text-left">
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "#4A5568" }}
                >
                  <span className="font-semibold" style={{ color: "#8B6F47" }}>
                    ABC Spacery
                  </span>{" "}
                  is a premium home solutions brand formed by three trusted teams{" "}
                  <span className="font-semibold" style={{ color: "#8B6F47" }}>
                    ABC Group
                  </span>
                  ,{" "}
                  <span className="font-semibold" style={{ color: "#8B6F47" }}>
                    Patel Marketing Group
                  </span>
                  , and{" "}
                  <span className="font-semibold" style={{ color: "#8B6F47" }}>
                    Subha Gruha Group
                  </span>
                  .
                </p>

                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "#4A5568" }}
                >
                  We offer complete home solutions under one roof, including
                  tiles, sanitaryware, kitchens, furniture, and smart home
                  technology.
                </p>

                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "#4A5568" }}
                >
                  With the global strength of{" "}
                  <span className="font-semibold" style={{ color: "#8B6F47" }}>
                    ABC Group
                  </span>
                  , the customer-friendly approach of{" "}
                  <span className="font-semibold" style={{ color: "#8B6F47" }}>
                    Patel Marketing Group
                  </span>
                  , and the reliable real estate experience of{" "}
                  <span className="font-semibold" style={{ color: "#8B6F47" }}>
                    Subha Gruha Group
                  </span>
                  , ABC Spacery is committed to future-ready living spaces.
                </p>

                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "#4A5568" }}
                >
                  Together, the three teams deliver better homes and better
                  living.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Centers */}
      <section
        id="experience"
        className="py-20 md:py-32 px-4"
        style={{ backgroundColor: "#FAF8F3" }}
      >
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Jaquar World */}
          <div className="text-center space-y-10">
            <h2
              className="text-4xl md:text-6xl font-bold mb-8"
              style={{ color: "#8B6F47" }}
            >
              South India's Largest Experience Center
            </h2>
            <div className="flex justify-center mb-4">
              <Image
                src="/jaquar/jaquar.png"
                alt="Jaquar Icon"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden max-w-2xl mx-auto shadow-2xl transform transition-transform hover:scale-105">
              <Image
                src="/jaquar/jquar-banner.png"
                alt="Jaquar World Banner"
                width={800}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <p
              className="text-2xl md:text-3xl font-semibold"
              style={{ color: "#8B6F47" }}
            >
              Explore Premium Bath & Home Products
            </p>
          </div>

          {/* Prominance Homworks */}
          <div className="text-center space-y-10">
            <h2
              className="text-4xl md:text-6xl font-bold mb-8"
              style={{ color: "#8B6F47" }}
            >
              Biggest Experience Center for
            </h2>
            <div className="flex justify-center mb-4">
              <Image
                src="/prominance/prominance-icon.png"
                alt="Prominance Icon"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden max-w-2xl mx-auto shadow-2xl transform transition-transform hover:scale-105">
              <Image
                src="/prominance/banner.png"
                alt="Prominance Homworks Banner"
                width={800}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <p
              className="text-2xl md:text-3xl font-semibold"
              style={{ color: "#8B6F47" }}
            >
              End to End Home Interior Designer Partner
            </p>
          </div>
        </div>
      </section>

      {/* Curated Brands */}
      <section
        id="brands"
        className="py-20 md:py-32 px-4"
        style={{ backgroundColor: "#F5F1E8" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            {/* <p
              className="text-sm md:text-base uppercase tracking-wider"
              style={{ color: "#4A5568" }}
            >
              ABC SPACERY
            </p> */}
            {/* <p
              className="text-lg md:text-xl italic mb-4"
              style={{ color: "#4A5568" }}
            >
              DESIGN SPACES, INSPIRE LIVING
            </p> */}
            <h2
              className="text-4xl md:text-6xl font-bold"
              style={{ color: "#8B6F47" }}
            >
              Curated Brands One Destination+
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
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
              {
                name: "PROMINANCE Uniframe",
                image: "/uniframe.png",
                subtitle: "ALUMINIUM WINDOW SYSTEMS",
              },
              {
                name: "PROMINANCE UPVC",
                image: "/prominance-upvc.png",
                subtitle: "WINDOW SYSTEMS",
              },
              {
                name: "VICOSTONE",
                image: "/vicostone.png",
                subtitle: "The Art of Quartz",
              },
              { name: "HOME SCREEN", image: "/home-screen.png" },
            ].map((brand, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#E8E0D5]/80 bg-[#FAF8F3]/80 px-4 md:px-6 py-6 md:py-8 flex items-center justify-center transition-all duration-300 hover:border-[#8B6F47] hover:bg-white hover:shadow-md"
                style={{ minHeight: "150px" }}
              >
                <div className="relative w-full h-24 md:h-32 flex items-center justify-center">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={200}
                    height={140}
                    className="object-contain max-h-full w-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          <p
            ref={brandsMoreRef}
            className="text-lg md:text-xl text-center pt-12 font-medium"
            style={{ color: "#4A5568", minHeight: "2rem" }}
          >
            {typedText || "\u00A0"}
            {isTyping && (
              <span className="animate-pulse ml-1" style={{ color: "#8B6F47" }}>
                |
              </span>
            )}
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section
        id="solutions"
        className="py-20 md:py-32 px-4"
        style={{ backgroundColor: "#FAF8F3" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2
              className="text-4xl md:text-6xl font-bold"
              style={{ color: "#8B6F47" }}
            >
              Complete Home Solutions
            </h2>
            <p
              className="text-xl md:text-2xl italic"
              style={{ color: "#4A5568" }}
            >
              DESIGN SPACES, INSPIRE LIVING
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
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
                className="rounded-xl p-6 md:p-8 hover:shadow-xl transition-all border-2 transform hover:scale-105 cursor-pointer"
                style={{ backgroundColor: "#F5F1E8", borderColor: "#E8E0D5" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F0EBE0";
                  e.currentTarget.style.borderColor = "#8B6F47";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#F5F1E8";
                  e.currentTarget.style.borderColor = "#E8E0D5";
                }}
              >
                <p
                  className="text-sm md:text-base font-medium text-center"
                  style={{ color: "#4A5568" }}
                >
                  {category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Masonry Layout */}
      <section
        id="gallery"
        className="py-20 md:py-32 overflow-hidden"
        style={{ backgroundColor: "#FAF8F3" }}
      >
        <div className="mb-12 px-4">
          <h2
            className="text-4xl md:text-6xl font-bold text-center"
            style={{ color: "#8B6F47" }}
          >
            Explore Our Spaces
          </h2>
        </div>

        <div className="w-full">
          {/* Masonry layout using CSS columns - fills viewport */}
          <div
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 md:gap-4 px-2 md:px-4"
            style={{ columnFill: "balance" }}
          >
            {[
              { src: "/gallerry/gallery-1.png", height: "h-[35vh]" },
              { src: "/gallerry/gallery-2.png", height: "h-[45vh]" },
              { src: "/gallerry/gallery-3.png", height: "h-[40vh]" },
              { src: "/gallerry/gallery-4.png", height: "h-[42vh]" },
              { src: "/gallerry/gallery-5.png", height: "h-[38vh]" },
              { src: "/gallerry/gallery-6.png", height: "h-[44vh]" },
              { src: "/gallerry/gallerry-7.png", height: "h-[41vh]" },
              { src: "/gallerry/gallery-8.png", height: "h-[43vh]" },
              { src: "/gallerry/gallery-9.png", height: "h-[39vh]" },
            ].map((item, index) => (
              <div
                key={`gallery-${index}`}
                className={`mb-2 md:mb-4 break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${item.height} w-full`}
              >
                <img
                  src={item.src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer
        id="contact"
        className="py-20 px-4 relative overflow-hidden"
        style={{ backgroundColor: "#2C3E50" }}
      >
        {/* Floating Particles - Footer */}
        {particles.length > 0 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float"
                style={{
                  width: `${particle.width}px`,
                  height: `${particle.height}px`,
                  backgroundColor: "#B8956A",
                  opacity: 0.4,
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.animationDelay}s`,
                  animationDuration: `${particle.animationDuration}s`,
                }}
              />
            ))}
          </div>
        )}

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-12">
            {/* Brand Section - Takes more space */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <Image
                  src="/logo/abc-spacery-logo.svg"
                  alt="ABC Spacery Logo"
                  width={240}
                  height={48}
                  className="h-14 w-auto object-contain filter brightness-0 invert opacity-95"
                />
                <p
                  className="text-xl italic font-light tracking-wide max-w-sm"
                  style={{ color: "#B8956A" }}
                >
                  DESIGN SPACES, INSPIRE LIVING
                </p>
              </div>

              {/* Quick Description */}
              <p
                className="text-sm leading-relaxed max-w-md"
                style={{ color: "#A0AEC0" }}
              >
                Creating exceptional spaces with innovative design solutions.
                Your vision, our expertise, delivered with excellence across the
                globe.
              </p>

              {/* Social Media Links */}
              <div className="flex gap-3 pt-2">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/abcspacery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{ backgroundColor: "rgba(184, 149, 106, 0.15)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#B8956A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(184, 149, 106, 0.15)";
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: "#B8956A" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/abcspacery?igsh=MXVnd3U1eDk3enV5eQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{ backgroundColor: "rgba(184, 149, 106, 0.15)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#B8956A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(184, 149, 106, 0.15)";
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: "#B8956A" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/abc-spacery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{ backgroundColor: "rgba(184, 149, 106, 0.15)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#B8956A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(184, 149, 106, 0.15)";
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: "#B8956A" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="lg:col-span-3 space-y-5">
              <h4 className="text-xl font-bold text-white relative inline-block">
                Quick Links
                <span
                  className="absolute -bottom-2 left-0 w-12 h-1 rounded-full"
                  style={{ backgroundColor: "#B8956A" }}
                />
              </h4>
              <nav className="space-y-3 pt-2">
                {[
                  { label: "Home", id: "home" },
                  { label: "Our Story", id: "story" },
                  { label: "Experience Centers", id: "experience" },
                  { label: "Brands", id: "brands" },
                  { label: "Solutions", id: "solutions" },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-sm transition-all duration-300 hover:translate-x-2 group w-full text-left"
                    style={{ color: "#A0AEC0" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#B8956A";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#A0AEC0";
                    }}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:w-6"
                        style={{ backgroundColor: "#B8956A" }}
                      />
                      {link.label}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Information Section */}
            <div className="lg:col-span-4 space-y-5">
              <h4 className="text-xl font-bold text-white relative inline-block">
                Get In Touch
                <span
                  className="absolute -bottom-2 left-0 w-12 h-1 rounded-full"
                  style={{ backgroundColor: "#B8956A" }}
                />
              </h4>
              <div className="space-y-5 pt-2">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: "rgba(184, 149, 106, 0.15)" }}
                  >
                    <svg
                      className="w-6 h-6"
                      style={{ color: "#B8956A" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 pt-1">
                    <p
                      className="text-xs uppercase tracking-wider font-semibold mb-1"
                      style={{ color: "#718096" }}
                    >
                      Our Location
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#CBD5E0" }}
                    >
                      NH 44, Opposite Mayfair Convention Center, Shamshabad,
                      Hyderabad, Telangana 501218
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: "rgba(184, 149, 106, 0.15)" }}
                  >
                    <svg
                      className="w-6 h-6"
                      style={{ color: "#B8956A" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 pt-1">
                    <p
                      className="text-xs uppercase tracking-wider font-semibold mb-1"
                      style={{ color: "#718096" }}
                    >
                      Call Us
                    </p>
                    <a
                      href="tel:+917660022799"
                      className="text-lg font-bold transition-all duration-300 hover:scale-105 inline-block"
                      style={{ color: "#B8956A" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#CBD5E0";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#B8956A";
                      }}
                    >
                      +91 76600 22799
                    </a>
                  </div>
                </div>

                {/* Email - Optional */}
                <div className="flex items-start gap-4 group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: "rgba(184, 149, 106, 0.15)" }}
                  >
                    <svg
                      className="w-6 h-6"
                      style={{ color: "#B8956A" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 pt-1">
                    <p
                      className="text-xs uppercase tracking-wider font-semibold mb-1"
                      style={{ color: "#718096" }}
                    >
                      Email Us
                    </p>
                    <a
                      href="mailto:info@abcspacery.com"
                      className="text-sm transition-all duration-300 hover:scale-105 inline-block"
                      style={{ color: "#CBD5E0" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#B8956A";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#CBD5E0";
                      }}
                    >
                      info@abcspacery.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Associations Section */}
          <div
            className="py-10 border-t border-b"
            style={{ borderColor: "#34495E" }}
          >
            <div className="text-center space-y-6">
              <p
                className="text-sm uppercase tracking-widest font-semibold"
                style={{ color: "#718096" }}
              >
                With Best Compliments From
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                {/* Patel Marketing */}
                <div className="group">
                  <p
                    className="text-2xl md:text-3xl font-bold text-white transition-all duration-300 group-hover:scale-105"
                    style={{
                      textShadow: "0 4px 20px rgba(184, 149, 106, 0.3)",
                    }}
                  >
                    Patel Marketing
                  </p>
                  <p className="text-sm mt-1" style={{ color: "#A0AEC0" }}>
                    Hyderabad
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="hidden md:block w-px h-16"
                  style={{ backgroundColor: "#B8956A" }}
                />
                <div
                  className="md:hidden text-2xl font-light"
                  style={{ color: "#B8956A" }}
                >
                  &
                </div>

                {/* ABC Group */}
                <div className="group">
                  <p
                    className="text-2xl md:text-3xl font-bold text-white transition-all duration-300 group-hover:scale-105"
                    style={{
                      textShadow: "0 4px 20px rgba(184, 149, 106, 0.3)",
                    }}
                  >
                    ABC Group International
                  </p>
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                    {[
                      "India",
                      "Qatar",
                      "UAE",
                      "Oman",
                      "Uganda",
                      "Rwanda",
                      "Kenya",
                      "Congo",
                      "Tanzania",
                    ].map((country, index, array) => (
                      <span key={country} className="inline-flex items-center">
                        <span
                          className="text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 hover:scale-105"
                          style={{
                            color: "#B8956A",
                            backgroundColor: "rgba(184, 149, 106, 0.1)",
                            border: "1px solid rgba(184, 149, 106, 0.2)",
                          }}
                        >
                          {country}
                        </span>
                        {index < array.length - 1 && (
                          <span
                            className="mx-1 text-xs"
                            style={{ color: "#4A5568" }}
                          >
                            •
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Section */}
          <div className="pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm" style={{ color: "#718096" }}>
                © {new Date().getFullYear()} ABC Spacery. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-sm transition-colors duration-300"
                  style={{ color: "#718096" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#B8956A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#718096";
                  }}
                >
                  Privacy Policy
                </a>
                <span style={{ color: "#4A5568" }}>•</span>
                <a
                  href="#"
                  className="text-sm transition-colors duration-300"
                  style={{ color: "#718096" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#B8956A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#718096";
                  }}
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
