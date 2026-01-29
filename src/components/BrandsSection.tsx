"use client";

import Image from "next/image";

export default function BrandsSection() {
  const brands = [
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
  ];

  const totalItems = brands.length;
  const isLastItemAlone = totalItems % 4 === 1;

  return (
    <section id="brands" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900">
            <span className="block">Curated Brands</span>
            <span className="block font-semibold mt-2 md:mt-4">
              One Destination
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brands.map((brand, index) => {
            const isLastItem = index === totalItems - 1;

            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-10 flex items-center justify-center hover:shadow-lg transition-all duration-300 border border-neutral-100 hover:border-neutral-300 group ${
                  isLastItem && isLastItemAlone
                    ? "xl:col-span-4 xl:w-1/4 xl:mx-auto"
                    : ""
                }`}
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={280}
                  height={180}
                  className="object-contain max-h-30 w-auto"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}