import Link from "next/link";
import { getSeries } from "@/data/blog/series";

export function SeriesNav({ id, part }: { id: string; part: number }) {
  const s = getSeries(id);
  if (!s) return null;
  const prev = s.parts[part - 2];
  const next = s.parts[part];
  return (
    <nav aria-label={s.name} className="series-nav mt-10 rounded-sm border border-border bg-card p-6">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
        Series · Part {part} of {s.parts.length}
      </p>
      <p
        className="mt-2 text-xl tracking-tight"
        style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
      >
        {s.name}
      </p>
      <details className="mt-4">
        <summary className="cursor-pointer text-sm text-muted-foreground">Show all {s.parts.length} parts</summary>
        <ol className="mt-3">
          {s.parts.map((p, i) => (
            <li key={p.slug}>
              {i + 1 === part ? (
                <span className="current" aria-current="page">
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  {p.short}
                </span>
              ) : (
                <Link href={`/blog/${p.slug}`}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  {p.short}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </details>
      {(prev || next) && (
        <div className="mt-4 flex flex-wrap justify-between gap-3 text-sm">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="text-primary hover:text-primary/80">
              ← Part {part - 1}: {prev.short}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/blog/${next.slug}`} className="text-primary hover:text-primary/80">
              Part {part + 1}: {next.short} →
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
