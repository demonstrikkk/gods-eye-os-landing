import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import satelliteDish from "../assets/satellite-dish.jpg";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Nav />
      <div className="container-page grid md:grid-cols-2 gap-12 items-center py-24">
        <div>
          <p className="mono text-gold mb-6">404 · Signal lost</p>
          <h1 className="text-7xl md:text-9xl font-light tracking-[-0.03em] leading-none">
            404
          </h1>
          <p className="mt-6 text-xl text-foreground/80">Page Not Found</p>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Our
            instruments couldn't locate this coordinate.
          </p>
          <Link
            to="/"
            className="mono inline-block mt-10 px-6 py-3 text-gold border border-gold/30 hover:bg-gold hover:text-primary-foreground transition-all duration-500"
          >
            Return Home →
          </Link>
        </div>
        <div className="relative aspect-square overflow-hidden hairline-b hairline-t">
          <img
            src={satelliteDish}
            alt="Satellite dish"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/60" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="mono text-gold mb-4">System anomaly</p>
        <h1 className="text-3xl font-light tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. Try again or return home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="mono px-5 py-2.5 bg-gold text-primary-foreground hover:opacity-90 transition"
          >
            Try again
          </button>
          <a
            href="/"
            className="mono px-5 py-2.5 border border-border-strong text-foreground hover:bg-surface transition"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "God's Eye OS — Intelligence Operating System" },
      { name: "description", content: "An advanced intelligence operating system fusing data, AI, and human expertise for mission-critical operations." },
      { name: "author", content: "God's Eye OS" },
      { property: "og:title", content: "God's Eye OS" },
      { property: "og:description", content: "See Everything. Understand Everything. Protect Everything." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}
