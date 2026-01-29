"use client";

import Image from "next/image";

export default function ExperienceCenters() {
  return (
    <section id="experience" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Jaquar - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight">
              South India's Largest
              <br />
              <span className="font-semibold">Experience Center</span>
            </h3>
            <div className="py-4">
              <img
                src="/jaquar/jaquar.png"
                alt="Jaquar"
                width={280}
                height={70}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-md">
              Premium Bath & Home Products Experience featuring world-class
              sanitaryware, faucets, and bathroom solutions.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
            <img
              src="/jaquar/jquar-banner.png"
              alt="Jaquar Experience Center"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Prominance - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight">
              Biggest Experience
              <br />
              <span className="font-semibold">Center for</span>
            </h3>
            <div className="py-4">
              <img
                src="/prominance/prominance-icon.png"
                alt="Prominance"
                width={300}
                height={100}
                className="h-28 w-auto object-contain"
              />
            </div>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-md">
              End-to-End Home Interior Design Partner delivering complete
              modular solutions for kitchens, wardrobes, and living spaces.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
            <img
              src="/prominance/banner.png"
              alt="Prominance Homworks"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
