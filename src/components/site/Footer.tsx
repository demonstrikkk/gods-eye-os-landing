import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="hairline-t mt-32">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gold rounded-full shadow-[0_0_12px_var(--gold)]" />
            <span className="mono tracking-[0.2em]">God's Eye OS</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            An advanced intelligence operating system. Built for mission-critical
            operations across defense, security, and enterprise.
          </p>
          <p className="mono text-muted-foreground/60">
            51.5074° N, 0.1278° W · Global view enabled
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="mono text-muted-foreground/60">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/platform" className="text-foreground/80 hover:text-gold transition-colors">Overview</Link></li>
            <li><Link to="/intelligence" className="text-foreground/80 hover:text-gold transition-colors">Intelligence</Link></li>
            <li><Link to="/solutions" className="text-foreground/80 hover:text-gold transition-colors">Solutions</Link></li>
            <li><Link to="/resources" className="text-foreground/80 hover:text-gold transition-colors">Resources</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="mono text-muted-foreground/60">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-foreground/80 hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/careers" className="text-foreground/80 hover:text-gold transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-gold transition-colors">Contact</Link></li>
            <li><Link to="/request-access" className="text-foreground/80 hover:text-gold transition-colors">Request Access</Link></li>
          </ul>
        </div>
      </div>

      <div className="hairline-t">
        <div className="container-page py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="mono text-muted-foreground/60">
            © {new Date().getFullYear()} God's Eye OS · All systems operational
          </p>
          <p className="mono text-muted-foreground/60">v 10.4.2 · Phase 10</p>
        </div>
      </div>
    </footer>
  );
}
