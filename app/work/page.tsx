import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { caseStudies } from "@/data/work";
import { SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Work — ${SITE_TITLE}`,
  description:
    "Case studies from projects at Anarchy Labs and independent builds — AI automation, SaaS products, and luxury real estate websites.",
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    url: "/work",
    title: `Work — ${SITE_TITLE}`,
    description:
      "Case studies from projects at Anarchy Labs and independent builds.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function WorkPage() {
  const [featured, ...rest] = caseStudies;

  return (
    <div className="mx-auto max-w-4xl px-5 pt-28 pb-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Work
      </p>
      <h1
        className="mt-4 text-4xl leading-tight tracking-tight sm:text-5xl"
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontWeight: 400,
        }}
      >
        Projects I&apos;ve built and contributed to
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
        Case studies from independent builds and team projects at{" "}
        <a
          href="https://www.anarchylabs.in/team/mueed-nazir-bhat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80"
        >
          Anarchy Labs
        </a>
        .
      </p>

      {featured && (
        <Link
          href={`/work/${featured.slug}`}
          className="lift group mt-14 block rounded-sm border border-border bg-card p-8"
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-wide text-muted-foreground">
            <span className="uppercase text-muted-foreground">
              Featured · {featured.role}
            </span>
            {featured.link && (
              <span className="inline-flex items-center gap-1.5">
                <ExternalLink className="h-3.5 w-3.5" />
                Live
              </span>
            )}
          </div>
          <h2
            className="mt-4 text-2xl leading-snug tracking-tight transition-colors group-hover:text-primary sm:text-3xl"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontWeight: 400,
            }}
          >
            {featured.title}
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            {featured.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {featured.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {rest.map((s) => (
          <Link
            key={s.slug}
            href={`/work/${s.slug}`}
            className="lift group flex flex-col rounded-sm border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3 font-mono text-xs tracking-wide text-muted-foreground">
              <span className="uppercase text-muted-foreground">{s.role}</span>
              {s.link && (
                <span className="inline-flex items-center gap-1.5">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live
                </span>
              )}
            </div>
            <h2
              className="mt-3 text-xl leading-snug tracking-tight transition-colors group-hover:text-primary"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 400,
              }}
            >
              {s.title}
            </h2>
            <p className="mt-2 line-clamp-3 leading-relaxed text-muted-foreground">
              {s.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {s.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
