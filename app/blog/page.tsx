import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import { visiblePosts } from "@/data/posts";
import { SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Blog — ${SITE_TITLE}`,
  description:
    "Practical articles on AI marketing automation, AI copywriting, performance marketing and optimizing for AI search (GEO) — written by Mueed Nazir Bhat.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: `Blog — ${SITE_TITLE}`,
    description:
      "Practical articles on AI marketing automation, AI copywriting, performance marketing and optimizing for AI search.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  const [featured, ...rest] = visiblePosts;

  return (
    <div className="mx-auto max-w-4xl px-5 pt-28 pb-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        Blog
      </p>
      <h1
        className="mt-4 text-4xl leading-tight tracking-tight sm:text-5xl"
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontWeight: 560,
        }}
      >
        Ideas on AI automation &amp; performance marketing
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
        Practical writing from daily work at Anarchy Labs — automating marketing
        workflows, keeping brand voice in AI copy, and optimizing for AI search.
      </p>

      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="lift group mt-14 block rounded-sm border border-border bg-card p-8"
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-wide text-muted-foreground">
            <span className="uppercase text-primary">
              Featured · {featured.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {new Date(featured.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {featured.readingMinutes} min read
            </span>
          </div>
          <h2
            className="mt-4 text-2xl leading-snug tracking-tight transition-colors group-hover:text-primary sm:text-3xl"
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontWeight: 600,
            }}
          >
            {featured.title}
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            {featured.description}
          </p>
        </Link>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {rest.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="lift group flex flex-col rounded-sm border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3 font-mono text-xs tracking-wide text-muted-foreground">
              <span className="uppercase text-primary">{p.category}</span>
              <span>{p.readingMinutes} min read</span>
            </div>
            <h2
              className="mt-3 text-xl leading-snug tracking-tight transition-colors group-hover:text-primary"
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontWeight: 600,
              }}
            >
              {p.title}
            </h2>
            <p className="mt-2 line-clamp-3 leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <p className="mt-auto pt-4 font-mono text-xs text-muted-foreground">
              {new Date(p.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
