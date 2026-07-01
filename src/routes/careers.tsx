import { createFileRoute } from "@tanstack/react-router";
import { PageTransition, Reveal } from "@/components/site/PageTransition";
import careersPeak from "@/assets/careers-peak.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — God's Eye OS" },
      { name: "description", content: "Build the future of intelligence. Work with the brightest minds on the toughest problems." },
      { property: "og:title", content: "Careers — God's Eye OS" },
      { property: "og:description", content: "Build the future of intelligence." },
    ],
  }),
  component: Careers,
});

const positions = [
  { t: "Senior AI/ML Engineer", l: "Vienna, VA · Full-time" },
  { t: "Geospatial Intelligence Analyst", l: "Vienna, VA · Full-time" },
  { t: "Cyber Threat Researcher", l: "Remote · Full-time" },
  { t: "Platform Security Engineer", l: "Vienna, VA · Full-time" },
];

function Careers() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden hairline-b">
        <img src={careersPeak} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="container-page relative pt-20 md:pt-32 pb-24">
          <Reveal>
            <p className="mono text-gold mb-8">06 / Careers</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] leading-[0.95] max-w-3xl">
              Build the future<br />of intelligence.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-foreground/80 leading-relaxed max-w-xl">
              Work with the brightest minds on the toughest problems. We're hiring across engineering, intelligence, security, and operations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <p className="mono text-muted-foreground/60 mb-4">Open Positions</p>
            <h2 className="text-3xl font-light tracking-tight">
              We hire for clarity, conviction, and craft.
            </h2>
          </Reveal>

          <div className="lg:col-span-8 space-y-px bg-border">
            {positions.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.06}>
                <a
                  href="#"
                  className="block bg-background p-6 md:p-8 group hover:bg-surface transition-colors duration-500"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="text-xl md:text-2xl font-light tracking-tight">{p.t}</p>
                      <p className="mono text-muted-foreground/70 mt-2">{p.l}</p>
                    </div>
                    <span className="mono text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                      →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
