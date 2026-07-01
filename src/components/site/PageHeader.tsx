import { Reveal } from "./PageTransition";

export function PageHeader({
  index,
  title,
  lead,
  sublead,
}: {
  index: string;
  title: string;
  lead?: string;
  sublead?: string;
}) {
  return (
    <section className="container-page pt-16 md:pt-24 pb-12">
      <Reveal>
        <p className="mono text-gold mb-8">{index}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] leading-[0.95]">
          {title}
        </h1>
      </Reveal>
      {lead && (
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
            {lead}
          </p>
        </Reveal>
      )}
      {sublead && (
        <Reveal delay={0.25}>
          <p className="mt-4 text-sm text-muted-foreground max-w-xl leading-relaxed">
            {sublead}
          </p>
        </Reveal>
      )}
    </section>
  );
}
