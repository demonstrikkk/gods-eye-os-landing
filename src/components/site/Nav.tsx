import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/platform", label: "Platform" },
  { to: "/intelligence", label: "Intelligence" },
  { to: "/solutions", label: "Solutions" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl hairline-b" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative w-7 h-7 grid place-items-center border border-border-strong">
            <span className="block w-2 h-2 bg-gold rounded-full shadow-[0_0_12px_var(--gold)]" />
          </span>
          <span className="mono text-foreground tracking-[0.2em] font-medium">
            God's Eye OS
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground data-[status=active]:text-foreground group"
            >
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gold scale-x-0 group-data-[status=active]:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/request-access"
            className="mono px-4 py-2 text-gold border border-gold/30 hover:bg-gold hover:text-primary-foreground transition-all duration-500 hover:shadow-[var(--shadow-gold)]"
          >
            Request Access →
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden hairline-t bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="container-page flex flex-col py-6 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-foreground/80 hairline-b text-sm"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/request-access"
              onClick={() => setOpen(false)}
              className="mono mt-4 px-4 py-3 text-gold border border-gold/30 text-center"
            >
              Request Access →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
