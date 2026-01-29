import { ScrollReveal } from "@/components/ScrollReveal";

export function StorySection() {
  return (
    <section id="story" className="py-32 bg-neutral-50 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal y={40}>
          <div className="grid md:grid-cols-2 gap-12">
            <h2 className="text-5xl font-light">
              Three Legacies
              <br />
              <span className="font-semibold">One Vision</span>
            </h2>

            <div className="text-neutral-600 space-y-4">
              <p>
                <strong>ABC Spacery</strong> brings together ABC Group, Patel
                Marketing Group and Subha Gruha Group.
              </p>
              <p>
                Complete home solutions — tiles, kitchens, furniture & smart
                homes.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
