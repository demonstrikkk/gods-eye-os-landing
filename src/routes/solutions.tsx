import { createFileRoute } from "@tanstack/react-router";
import { PageTransition, Reveal } from "@/components/site/PageTransition";
import { PageHeader } from "@/components/site/PageHeader";
import tactical from "@/assets/solutions-tactical.jpg";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — God's Eye OS" },
      { name: "description", content: "Tailored solutions for defense, national security, law enforcement, cyber operations, and enterprise risk." },
      { property: "og:title", content: "Solutions — God's Eye OS" },
      { property: "og:description", content: "Designed for the world's most critical missions." },
    ],
  }),
  component: Solutions,
});

const sectors = [
  { k: "Defense & Military", active: true },
  { k: "National Security" },
  { k: "Law Enforcement" },
  { k: "Cyber Operations" },
  { k: "Enterprise Risk" },
];

function Solutions() {
  return (
    <PageTransition>
      <PageHeader
        index="03 / Solutions"
        title="Solutions"
        lead="Designed for the world's most critical missions."
        sublead="Tailored solutions for defense, national security, law enforcement, cyber operations, and enterprise risk."
      />

      {/* HERO IMAGE */}
      <section className="relative hairline-t hairline-b overflow-hidden">
        <img
          src={tactical}
          alt="Tactical operations"
          className="w-full h-[55vh] md:h-[75vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </section>

      {/* SECTORS + DETAIL */}
      <section className="container-page py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <p className="mono text-muted-foreground/60 mb-6">Sectors</p>
          <ul className="space-y-px bg-border">
            {sectors.map((m) => (
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
            Mission-ready. Field-tested. Built to deploy.
          </h3>
          <p className="text-foreground/70 leading-relaxed max-w-2xl">
            From forward-operating bases to enterprise security operations
            centers, God's Eye OS adapts to the environment — not the other
            way around. Every deployment is configured around the specific
            threat model and operational tempo of the mission.
          </p>
        </Reveal>
      </section>

      {/* TRAITS BAR */}
      <section className="hairline-t">
        <div className="container-page py-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {[
            { n: "01", t: "Mission-ready", d: "Built for the harshest environments." },
            { n: "02", t: "Scalable", d: "From tactical teams to enterprises." },
            { n: "03", t: "Adaptable", d: "Configure. Extend. Evolve." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="bg-background p-8 flex items-start gap-6">
                <span className="mono text-gold text-xl">{s.n}</span>
                <div>
                  <p className="mono text-foreground/90">{s.t}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
