"use client";

import { useEffect, useRef, useState } from "react";

export default function TransformationQuote() {
  const [isVisible, setIsVisible] = useState(false);
  const quoteSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  return (
    <section ref={quoteSectionRef} className="py-32 px-6 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
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
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
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
  );
}