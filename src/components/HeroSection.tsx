"use client";

export function HeroSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      >
        <source src="/hero-video.webm" />
      </video>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-6xl md:text-8xl font-light">
          Design Spaces
          <br />
          <span className="font-semibold">Inspire Living</span>
        </h1>

        <p className="mt-6 text-xl text-white/80">
          Hyderabad's premier home solutions destination
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <button
            onClick={() => scrollToSection("brands")}
            className="px-8 py-4 bg-white text-black rounded-full"
          >
            Explore Brands
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border border-white rounded-full"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
