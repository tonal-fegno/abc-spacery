"use client";

export interface Particle {
    width: number;
    height: number;
    left: number;
    top: number;
    animationDelay: number;
    animationDuration: number;
}

type HeroSectionProps = {
    particles: Particle[];
};

export function HeroSection({ particles }: HeroSectionProps) {
    return (
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
                            className="hero-shimmer-wrap"
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
    );
}

