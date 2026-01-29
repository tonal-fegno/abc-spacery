import { ScrollReveal } from "@/components/ScrollReveal";

export function GallerySection() {
  return (
    <section id="gallery" className="py-32 bg-neutral-50 px-6">
      <ScrollReveal>
        <h2 className="text-center text-5xl font-light mb-16">
          Explore Our
          <br />
          <span className="font-semibold">Spaces</span>
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ScrollReveal key={i}>
            <img
              src={`/gallerry/gallery-${i + 1}.png`}
              className="rounded-lg object-cover"
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
