import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { visiblePosts } from "@/data/posts";

export default function Writing() {
  const latest = [...visiblePosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <section id="writing" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Writing
            </p>
            <h2
              className="mt-4 text-3xl tracking-tight sm:text-5xl"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 400,
              }}
            >
              Latest from the <span className="text-gradient">blog</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
          >
            All articles →
          </Link>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-3">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border-t border-border pt-6"
            >
              <p className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <h3
                className="mt-3 leading-snug tracking-tight transition-colors group-hover:text-primary"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontWeight: 400,
                }}
              >
                {post.title}
              </h3>
              <p className="mt-2.5 line-clamp-3 leading-relaxed text-muted-foreground">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
