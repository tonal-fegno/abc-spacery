"use client";

export default function SolutionsSection() {
  const categories = [
    "Tiles & Slabs",
    "Bath Fittings",
    "Sanitaryware",
    "Lights & Switches",
    "Sofas & More",
    "Doors & Windows",
    "Home Cinema",
    "Furniture",
    "Kitchens & Wardrobes",
    "Accessories",
  ];

  return (
    <section id="solutions" className="py-36 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900">
            <span className="block">Complete Home</span>
            <span className="block font-semibold mt-3 md:mt-5">
              Solutions
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-neutral-50 hover:bg-neutral-900 rounded-3xl 
             p-10 text-center transition-all duration-300 cursor-pointer
             border border-neutral-100 hover:border-neutral-900
             shadow-md hover:shadow-xl flex items-center justify-center"
            >
              <p className="text-lg md:text-xl font-medium text-neutral-900 group-hover:text-white transition-colors text-center">
                {category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}