"use client";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-32 bg-neutral-50">
      <div className="mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-light text-center text-neutral-900">
          <span className="block">Explore Our</span>
          <span className="block font-semibold mt-3">Spaces</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 h-[800px] sm:h-[1000px] lg:h-[1200px]">
          <div className="rounded-lg overflow-hidden group cursor-pointer flex-1">
            <img
              src="/gallerry/gallery-2.png"
              alt="Gallery 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="rounded-lg overflow-hidden group cursor-pointer flex-1">
            <img
              src="/gallerry/gallery-6.png"
              alt="Gallery 5"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 h-[800px] sm:h-[1000px] lg:h-[1200px]">
          <div className="rounded-lg overflow-hidden group cursor-pointer flex-[1.5]">
            <img
              src="/gallerry/gallery-3.png"
              alt="Gallery 2"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="rounded-lg overflow-hidden group cursor-pointer flex-1">
            <img
              src="/gallerry/gallerry-7.png"
              alt="Gallery 6"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 h-[800px] sm:h-[1000px] lg:h-[1200px]">
          <div className="rounded-lg overflow-hidden group cursor-pointer flex-1">
            <img
              src="/gallerry/gallery-4.png"
              alt="Gallery 3"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="rounded-lg overflow-hidden group cursor-pointer flex-[1.3]">
            <img
              src="/gallerry/gallery-8.png"
              alt="Gallery 7"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-4 h-[800px] sm:h-[1000px] lg:h-[1200px]">
          <div className="rounded-lg overflow-hidden group cursor-pointer flex-1">
            <img
              src="/gallerry/gallery-5.png"
              alt="Gallery 4"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="rounded-lg overflow-hidden group cursor-pointer flex-1">
            <img
              src="/gallerry/gallery-9.png"
              alt="Gallery 8"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="rounded-lg overflow-hidden group cursor-pointer flex-[0.8]">
            <img
              src="/gallerry/gallery-1.png"
              alt="Gallery 9"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}