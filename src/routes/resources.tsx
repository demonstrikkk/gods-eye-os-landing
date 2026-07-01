import { createFileRoute, Link } from "@tanstack/react-router";
import { PageTransition, Reveal } from "@/components/site/PageTransition";
import { PageHeader } from "@/components/site/PageHeader";
import earth from "@/assets/resource-earth.jpg";
import ai from "@/assets/resource-ai.jpg";
import cyber from "@/assets/resource-cyber.jpg";
import brief from "@/assets/resource-brief.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — God's Eye OS" },
      { name: "description", content: "Intelligence that informs. Knowledge that empowers. Reports, whitepapers, case studies, and threat briefs." },
      { property: "og:title", content: "Resources — God's Eye OS" },
      { property: "og:description", content: "Intelligence that informs. Knowledge that empowers." },
    ],
  }),
  component: Resources,
});

const cards = [
  { kind: "Report", title: "Global Threat Landscape 2024", date: "May 12, 2024", img: earth },
  { kind: "Whitepaper", title: "The Future of AI in Intelligence Operations", date: "Apr 28, 2024", img: ai },
  { kind: "Case Study", title: "Fusion at Scale: A National Security Case Study", date: "Mar 15, 2024", img: cyber },
  { kind: "Report", title: "Cyber Threat Intelligence Monthly Brief", date: "May 5, 2024", img: brief },
];

const cats = [
  { k: "Reports", active: true },
  { k: "Whitepapers" },
  { k: "Case Studies" },
  { k: "Blog" },
  { k: "Documentation" },
  { k: "Videos" },
];

function Resources() {
  return (
    <PageTransition>
      <PageHeader
        index="04 / Resources"
        title="Resources"
        lead="Intelligence that informs. Knowledge that empowers."
        sublead="Explore our latest reports, briefings, whitepapers, and documentation."
      />

      <section className="container-page pb-24 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-3">
          <p className="mono text-muted-foreground/60 mb-6">Library</p>
          <ul className="space-y-px bg-border">
            {cats.map((c) => (
              <li key={c.k} className="bg-background">
                <button
                  className={`w-full text-left px-5 py-3.5 mono transition-all duration-500 hover:bg-surface ${
                    c.active ? "bg-surface text-gold border-l-2 border-gold" : "text-foreground/70"
                  }`}
                >
                  {c.k}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="lg:col-span-9">
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <article className="group bg-background overflow-hidden cursor-pointer h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <p className="absolute top-4 left-4 mono text-gold/90">{c.kind}</p>
                  </div>
                  <div className="p-6 hairline-t group-hover:bg-surface transition-colors duration-500">
                    <h3 className="text-xl font-light tracking-tight leading-snug">{c.title}</h3>
                    <p className="mono text-muted-foreground/70 mt-3">{c.date}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12 flex justify-end">
              <Link to="/resources" className="mono text-gold hover:underline tracking-[0.2em]">
                View All Resources →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
