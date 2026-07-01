import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageTransition, Reveal } from "@/components/site/PageTransition";
import { z } from "zod";

export const Route = createFileRoute("/request-access")({
  head: () => ({
    meta: [
      { title: "Request Access — God's Eye OS" },
      { name: "description", content: "Join the network. Request private access to God's Eye OS." },
      { property: "og:title", content: "Request Access — God's Eye OS" },
      { property: "og:description", content: "Join the network. Request private access to God's Eye OS." },
    ],
  }),
  component: RequestAccess,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  org: z.string().trim().min(1, "Required").max(150),
  title: z.string().trim().max(120).optional(),
  message: z.string().trim().max(1000).optional(),
});

function Field({
  label, name, type = "text", required, placeholder, value, onChange, error,
}: any) {
  return (
    <label className="block group">
      <span className="mono text-muted-foreground/70 block mb-2">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold transition-colors duration-500"
      />
      {error && <p className="mono text-destructive mt-2">{error}</p>}
    </label>
  );
}

function RequestAccess() {
  const [form, setForm] = useState({ name: "", email: "", org: "", title: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <PageTransition>
      <section className="container-page pt-16 md:pt-24 pb-24 grid lg:grid-cols-12 gap-16">
        <Reveal className="lg:col-span-5">
          <p className="mono text-gold mb-8">Restricted access</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-[-0.02em] leading-[0.95]">
            Request<br />Access
          </h1>
          <p className="mt-8 text-foreground/70 leading-relaxed max-w-md">
            Join the network. Request a private invitation to God's Eye OS.
          </p>
          <div className="mt-12 hairline-t pt-6 space-y-3">
            <p className="mono text-muted-foreground/60">Operations · 24/7</p>
            <p className="mono text-muted-foreground/60">All inquiries encrypted end-to-end</p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          {sent ? (
            <div className="hairline-t hairline-b py-16 text-center">
              <p className="mono text-gold mb-4">Transmission received</p>
              <h2 className="text-3xl font-light tracking-tight">
                Thank you. We'll be in touch.
              </h2>
              <p className="mt-4 text-muted-foreground">A member of operations will reach out within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              <Field label="Full Name" name="name" required value={form.name} onChange={onChange} error={errors.name} placeholder="Enter your full name" />
              <Field label="Work Email" name="email" type="email" required value={form.email} onChange={onChange} error={errors.email} placeholder="name@organization.com" />
              <Field label="Organization" name="org" required value={form.org} onChange={onChange} error={errors.org} placeholder="Enter your organization" />
              <Field label="Job Title" name="title" value={form.title} onChange={onChange} error={errors.title} placeholder="Your job title" />
              <label className="block">
                <span className="mono text-muted-foreground/70 block mb-2">Message (optional)</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={4}
                  placeholder="Tell us about your mission requirements…"
                  className="w-full bg-transparent border-0 border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold transition-colors duration-500 resize-none"
                />
                {errors.message && <p className="mono text-destructive mt-2">{errors.message}</p>}
              </label>
              <button
                type="submit"
                className="mono w-full md:w-auto px-8 py-4 bg-gold text-primary-foreground hover:shadow-[var(--shadow-gold)] transition-all duration-500"
              >
                Submit Request →
              </button>
            </form>
          )}
        </Reveal>
      </section>
    </PageTransition>
  );
}
