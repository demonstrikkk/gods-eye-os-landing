import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition, Reveal } from "@/components/site/PageTransition";
import { Particles } from "@/components/site/Particles";
import heroGlobe from "@/assets/hero-globe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "God's Eye OS — See Everything. Understand Everything. Protect Everything." },
      { name: "description", content: "An advanced intelligence operating system that fuses data, AI, and human expertise for unmatched situational awareness." },
      { property: "og:title", content: "God's Eye OS" },
      { property: "og:description", content: "See Everything. Understand Everything. Protect Everything." },
    ],
  }),
  component: Home,
});

const features = [
  { n: "01", t: "Unified Data Fabric", d: "Ingest, normalize, and correlate data from any source." },
  { n: "02", t: "AI-Powered Analysis", d: "Detect anomalies, predict outcomes, and surface what matters." },
  { n: "03", t: "Operational Superiority", d: "Turn intelligence into action with speed and precision." },
  { n: "04", t: "Secure by Design", d: "Built for the most sensitive missions. Security at every layer." },
];

function Home() {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative min-h-[92vh] hairline-b overflow-hidden">
        <Particles className="opacity-60" />
        <div className="container-page relative grid lg:grid-cols-12 gap-12 pt-16 lg:pt-24 pb-24">
          <div className="lg:col-span-7 relative z-10">
            <Reveal>
              <p className="mono text-gold mb-10">Phase 10 · Live</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[0.95] tracking-[-0.03em]">
                See Everything.<br />
                Understand<br />
                Everything.<br />
                <span className="text-gradient-gold">Protect Everything.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed">
                God's Eye OS is an advanced intelligence operating system that
                fuses data, AI, and human expertise to deliver unmatched
                situational awareness and decision superiority.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  to="/request-access"
                  className="mono px-6 py-3.5 bg-gold text-primary-foreground hover:shadow-[var(--shadow-gold)] transition-all duration-500"
                >
                  Request Access →
                </Link>
                <Link
                  to="/platform"
                  className="mono px-6 py-3.5 border border-border-strong text-foreground hover:border-gold hover:text-gold transition-all duration-500"
                >
                  Explore Platform →
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 relative">
            <Reveal delay={0.2} y={40}>
              <div className="relative">
                <div className="mono text-muted-foreground/80 mb-4 flex justify-between">
                  <span>51.5074° N, 0.1278° W</span>
                </div>
                <div className="text-[10px] mono text-muted-foreground/50 mb-4 hairline-b pb-3">
                  Global View Enabled
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <motion.img
                    src={heroGlobe}
                    alt="Earth from orbit"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-background/80 via-transparent to-transparent" />
                </div>
                <div className="hairline-t mt-4 pt-4 flex justify-between items-baseline">
                  <div>
                    <p className="mono text-muted-foreground/60">Real-time intelligence</p>
                    <p className="text-3xl font-light mt-1">24/7</p>
                    <p className="mono text-muted-foreground/60 mt-1">Always on, always watching</p>
                  </div>
                  <Link to="/intelligence" className="mono text-gold hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-4 gap-px bg-border">
          {features.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.08}>
              <div className="bg-background p-8 h-full group hover:bg-surface transition-colors duration-500">
                <p className="text-4xl font-light text-gold/80">{f.n}</p>
                <p className="mono mt-6 text-foreground/90">{f.t}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                <div className="mt-8 h-px w-8 bg-gold/40 group-hover:w-full transition-all duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="hairline-t hairline-b">
        <div className="container-page py-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-light tracking-[-0.02em] max-w-2xl leading-tight">
              Intelligence that informs.<br />
              <span className="text-muted-foreground">Decisions that matter.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/contact"
              className="mono px-6 py-3 border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500"
            >
              Contact Operations Center →
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
