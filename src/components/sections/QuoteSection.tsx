"use client";

import { useEffect, useRef, useState } from "react";
import type { Particle } from "./HeroSection";

type QuoteSectionProps = {
    particles: Particle[];
};

export function QuoteSection({ particles }: QuoteSectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const quoteSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setIsVisible(true);
                });
            },
            { threshold: 0.2 },
        );

        if (quoteSectionRef.current) observer.observe(quoteSectionRef.current);

        return () => {
            if (quoteSectionRef.current) observer.unobserve(quoteSectionRef.current);
        };
    }, []);

    return (
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
                        className={`flex flex-col items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
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
                        className={`flex flex-col items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
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
    );
}

