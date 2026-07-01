import { createFileRoute } from "@tanstack/react-router";
import { PageTransition, Reveal } from "@/components/site/PageTransition";
import { PageHeader } from "@/components/site/PageHeader";
import platformWave from "@/assets/platform-wave.jpg";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — God's Eye OS" },
      { name: "description", content: "A unified operating system for modern intelligence. Built for mission-critical operations." },
      { property: "og:title", content: "Platform — God's Eye OS" },
      { property: "og:description", content: "A unified operating system for modern intelligence." },
    ],
  }),
  component: Platform,
});

const modules = [
  { k: "Overview", active: true },
  { k: "Data Fabric" },
  { k: "Intelligence Engine" },
  { k: "Workflows" },
  { k: "Security" },
  { k: "Integrations" },
];

const stats = [
  { v: "1000+", l: "Data sources" },
  { v: "<200ms", l: "Analysis time" },
  { v: "99.99%", l: "System uptime" },
  { v: "256-bit", l: "Encryption" },
];

function Platform() {
  return (
    <PageTransition>
      <PageHeader
        index="01 / Platform"
        title="Platform"
        lead="A unified operating system for modern intelligence."
        sublead="God's Eye OS unifies data, tools, and teams into one secure, scalable platform built for mission-critical operations."
      />

      {/* WAVE VISUAL */}
      <section className="relative h-[40vh] md:h-[55vh] overflow-hidden hairline-b hairline-t">
        <img
          src={platformWave}
          alt="Soundwave visualization"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </section>

      {/* MODULES + DETAIL */}
      <section className="container-page py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <p className="mono text-muted-foreground/60 mb-6">Modules</p>
          <ul className="space-y-px bg-border">
            {modules.map((m) => (
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

        <Reveal delay={0.1} className="lg:col-span-8 space-y-8">
          <h3 className="text-3xl md:text-4xl font-light tracking-tight">
            One platform. Every layer of intelligence.
          </h3>
          <p className="text-foreground/70 leading-relaxed">
            From raw ingest to operator action, God's Eye OS provides a single
            coherent surface for data fabric, AI inference, secure workflows,
            and integrations — purpose-built for teams operating in the most
            demanding environments on Earth.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-border mt-12">
            {[
              ["Data Fabric", "Normalize signals from any structured or unstructured source."],
              ["Intelligence Engine", "Real-time inference at the edge and at scale."],
              ["Operator Workflows", "Tactical interfaces designed by and for analysts."],
              ["Zero-Trust Security", "End-to-end encrypted, audited, and compliant."],
            ].map(([t, d]) => (
              <div key={t} className="bg-background p-6 hover:bg-surface transition-colors duration-500 group">
                <p className="mono text-gold">{t}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* METRICS */}
      <section className="hairline-t">
        <div className="container-page py-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="bg-background p-8 text-center md:text-left">
                <p className="text-4xl md:text-5xl font-light text-gold tracking-tight">{s.v}</p>
                <div className="h-px w-12 bg-border mt-4 mb-3 mx-auto md:mx-0" />
                <p className="mono text-muted-foreground/70">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
