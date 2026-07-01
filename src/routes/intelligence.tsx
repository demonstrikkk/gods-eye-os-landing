import { createFileRoute } from "@tanstack/react-router";
import { PageTransition, Reveal } from "@/components/site/PageTransition";
import { PageHeader } from "@/components/site/PageHeader";
import intelMap from "@/assets/intel-map.jpg";

export const Route = createFileRoute("/intelligence")({
  head: () => ({
    meta: [
      { title: "Intelligence — God's Eye OS" },
      { name: "description", content: "AI-powered insights. Human-validated truth. Real-time threat detection and long-term strategic forecasting." },
      { property: "og:title", content: "Intelligence — God's Eye OS" },
      { property: "og:description", content: "AI-powered insights. Human-validated truth." },
    ],
  }),
  component: Intelligence,
});

const capabilities = [
  { k: "Threat Detection", active: true },
  { k: "Geospatial Analysis" },
  { k: "Entity Resolution" },
  { k: "Predictive Analytics" },
  { k: "Reports" },
];

const stats = [
  { v: "85M+", l: "Entities resolved" },
  { v: "2.4M+", l: "Daily analyses" },
  { v: "150+", l: "Countries covered" },
  { v: "24/7", l: "Monitoring" },
];

function Intelligence() {
  return (
    <PageTransition>
      <PageHeader
        index="02 / Intelligence"
        title="Intelligence"
        lead="AI-powered insights. Human-validated truth."
        sublead="From real-time threat detection to long-term strategic forecasting, our intelligence layer turns complexity into clarity."
      />

      {/* MAP */}
      <section className="relative hairline-t hairline-b overflow-hidden">
        <img
          src={intelMap}
          alt="Global threat map"
          className="w-full h-[50vh] md:h-[70vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />
        <div className="absolute top-6 left-6 mono text-gold/80 text-[10px]">
          Live · 47,209 active signals
        </div>
        <div className="absolute bottom-6 right-6 mono text-muted-foreground/70 text-[10px]">
          Last sync 00:00:03
        </div>
      </section>

      {/* CAPABILITIES + DETAIL */}
      <section className="container-page py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <p className="mono text-muted-foreground/60 mb-6">Capabilities</p>
          <ul className="space-y-px bg-border">
            {capabilities.map((m) => (
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

        <Reveal delay={0.1} className="lg:col-span-8">
          <h3 className="text-3xl md:text-4xl font-light tracking-tight">
            From signal to decision in milliseconds.
          </h3>
          <p className="mt-6 text-foreground/70 leading-relaxed max-w-2xl">
            Our intelligence layer combines deep learning inference with
            analyst-in-the-loop verification — surfacing what matters,
            suppressing what doesn't, and giving operators the context to act.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-border">
            {[
              ["Real-time inference", "Sub-200ms detection across multi-modal signal streams."],
              ["Human validation", "Every critical alert verified by trained analysts."],
              ["Strategic forecasting", "Multi-year horizon models for posture planning."],
              ["Explainable AI", "Every decision traceable, every model auditable."],
            ].map(([t, d]) => (
              <div key={t} className="bg-background p-6 hover:bg-surface transition-colors duration-500">
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
