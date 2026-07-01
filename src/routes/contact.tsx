import { createFileRoute } from "@tanstack/react-router";
import { PageTransition, Reveal } from "@/components/site/PageTransition";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — God's Eye OS" },
      { name: "description", content: "We're here to help. Let's connect. Reach our 24/7 operations team." },
      { property: "og:title", content: "Contact — God's Eye OS" },
      { property: "og:description", content: "We're here to help. Let's connect." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageTransition>
      <section className="container-page pt-16 md:pt-24 pb-24 grid lg:grid-cols-12 gap-16">
        <Reveal className="lg:col-span-5">
          <p className="mono text-gold mb-8">Operations center</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-[-0.02em] leading-[0.95]">
            Contact
          </h1>
          <p className="mt-8 text-foreground/70 leading-relaxed max-w-md">
            We're here to help. Let's connect.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7 space-y-px bg-border">
          {[
            ["Secure email", "contact@godseyeos.com"],
            ["Signal", "+1 (213) 555-0147"],
            ["Address", "123 Intelligence Way, Vienna, VA 22180, United States"],
            ["Hours", "24/7 operations"],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-6 grid grid-cols-3 gap-6 hover:bg-surface transition-colors duration-500">
              <p className="mono text-muted-foreground/60">{k}</p>
              <p className="col-span-2 text-foreground/90">{v}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="hairline-t">
        <div className="container-page py-16 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
          <Reveal>
            <p className="text-2xl font-light text-foreground/90 max-w-xl">
              Need immediate assistance? <br className="hidden md:block" />
              <span className="text-muted-foreground">Our team is available 24/7 for mission-critical support.</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="mailto:contact@godseyeos.com"
              className="mono px-6 py-3 bg-gold text-primary-foreground hover:shadow-[var(--shadow-gold)] transition-all duration-500"
            >
              Contact Operations Center →
            </a>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
