"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function StorySection() {
  return (
    <section id="story" className="relative py-32 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal y={40} duration={0.8}>
          <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-neutral-900 rounded-full">
                <p className="text-xs uppercase tracking-[0.2em] font-medium text-white">
                  Our Story
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-neutral-900">
                Three Legacies
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
  );
}