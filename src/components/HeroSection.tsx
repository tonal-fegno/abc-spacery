"use client";

import { useState } from "react";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
  fallbackImage?: string;
}

export default function HeroSection({ scrollToSection, fallbackImage = "/abc-spacery-image.jpg" }: HeroSectionProps) {
  const [videoError, setVideoError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Video Background with Modern Overlay */}
      <div className="absolute inset-0 z-0 brightness-[0.8] overflow-hidden poster">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/abc-spacery-image.jpg"
            className="w-full h-full object-cover" 
            onError={(e) => {
              e.currentTarget.style.display = "none";
              setVideoError(true);
            }}
          >
            <source src="/hero-video.webm" type="video/webm" />
          </video>
        ) : null}
        {/* {videoError && (
          <img
            src={fallbackImage}
            alt="ABC Spacery"
            className="w-full h-full object-cover"
          />
        )
        } */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-900/40 to-neutral-900/60" />
      </div>

      {/* Hero Content - Clean & Minimal */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white">
            Design Spaces
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
        <div className="w-7 h-12 border-2 border-white/60 rounded-full flex items-start justify-center p-2 bg-white/5">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-mouse-dot" />
        </div>
      </div>
    </section>
  );
}