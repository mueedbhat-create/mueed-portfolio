import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services — ${SITE_TITLE}`,
  description:
    "AI workflow automation, performance marketing, AI-assisted copy and content, and AI strategy consulting by Mueed Nazir Bhat.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "/services",
    title: `Services — ${SITE_TITLE}`,
    description:
      "AI workflow automation, performance marketing, AI-assisted copy and content, and AI strategy consulting.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ServicesIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pt-28 pb-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Services
      </p>
      <h1
        className="mt-4 text-4xl leading-tight tracking-tight sm:text-5xl"
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontWeight: 400,
        }}
      >
        Automations, funnels and copy that move metrics
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
        Four ways I help teams eliminate busywork and grow. Every engagement
        starts with a look at your numbers, not a pitch.
      </p>

      <div className="mt-14 space-y-6">
        {services.map((s, i) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="lift group block rounded-sm border border-border bg-card p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  ({String(i + 1).padStart(2, "0")}) {s.name}
                </p>
                <h2
                  className="mt-3 text-2xl leading-snug tracking-tight transition-colors group-hover:text-primary"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontWeight: 400,
                  }}
                >
                  {s.title}
                </h2>
                <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-sm border border-border bg-card p-8 text-center">
        <p
          className="text-xl tracking-tight"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontWeight: 400,
          }}
        >
          Not sure which one fits?
        </p>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Most projects start with a{" "}
          <Link href="/services/ai-strategy" className="text-primary hover:text-primary/80">
            workflow audit
          </Link>{" "}
          and grow from there. Or just tell me what is slowing you down.
        </p>
        <Link
          href="/#contact"
          className="btn-sweep mt-6 inline-flex items-center gap-2 rounded-sm bg-foreground px-6 py-3 text-sm font-medium text-background hover:text-primary-foreground"
        >
          Start a project
        </Link>
      </div>
    </div>
  );
}
