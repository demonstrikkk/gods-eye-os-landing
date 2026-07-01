import { createFileRoute } from "@tanstack/react-router";
import { PageTransition, Reveal } from "@/components/site/PageTransition";
import { PageHeader } from "@/components/site/PageHeader";
import architecture from "@/assets/about-architecture.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — God's Eye OS" },
      { name: "description", content: "Built with purpose. Driven by mission. Created by experts in intelligence, technology, and operations." },
      { property: "og:title", content: "About — God's Eye OS" },
      { property: "og:description", content: "Built with purpose. Driven by mission." },
    ],
  }),
  component: About,
});

const sections = [
  { k: "Our Mission", active: true },
  { k: "Our Team" },
  { k: "Advisors" },
  { k: "Careers" },
  { k: "News" },
];

function About() {
  return (
    <PageTransition>
      <section className="container-page pt-16 md:pt-24 pb-12 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mono text-gold mb-8">05 / About</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] leading-[0.95]">
              Built with purpose.<br />
              <span className="text-muted-foreground">Driven by mission.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-foreground/70 leading-relaxed max-w-xl">
              God's Eye OS was created by experts in intelligence, technology,
              and operations with a shared commitment to protect what matters most.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden hairline-b hairline-t">
            <img
              src={architecture}
              alt="Architectural geometry"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-page py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <p className="mono text-muted-foreground/60 mb-6">Company</p>
          <ul className="space-y-px bg-border">
            {sections.map((m) => (
              <li key={m.k} className="bg-background">
                <button
                  className={`w-full text-left px-5 py-4 mono transition-all duration-500 hover:bg-surface flex items-center justify-between ${
                    m.active ? "bg-surface text-gold border-l-2 border-gold" : "text-foreground/70"
                  }`}
                >
                  {m.k}
                  <span className="opacity-50">→</span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-8 space-y-6">
          <h3 className="text-3xl md:text-4xl font-light tracking-tight">
            Clarity at the edge of consequence.
          </h3>
          <p className="text-foreground/70 leading-relaxed">
            We exist at the intersection of national security, frontier AI, and
            principled engineering. Our team has shipped intelligence systems
            for governments, agencies, and enterprises across five continents —
            and we measure success by the missions that succeed because of us.
          </p>
        </Reveal>
      </section>

      {/* QUOTE */}
      <section className="hairline-t hairline-b">
        <div className="container-page py-24 md:py-32 max-w-4xl mx-auto text-center relative">
          <Reveal>
            <span className="text-7xl text-gold/40 font-serif leading-none">"</span>
            <blockquote className="text-2xl md:text-4xl font-light tracking-tight leading-relaxed text-foreground/90 mt-4">
              In a world of noise, <span className="text-gold">clarity is power</span>.<br />
              In a world of complexity, <span className="text-gold">focus is advantage</span>.<br />
              In a world of uncertainty, <span className="text-gold">intelligence is everything</span>.
            </blockquote>
            <p className="mono text-muted-foreground/60 mt-12">— The God's Eye OS Manifesto</p>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
