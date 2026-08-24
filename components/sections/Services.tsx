import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { resume } from "@/data/resume";

export default function Services() {
  return (
    <section id="services" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Services
        </p>
        <h2
          className="mt-4 text-3xl tracking-tight sm:text-5xl"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontWeight: 400,
          }}
        >
          What I <span className="text-gradient">do</span>
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Automations, funnels and copy — built to move your metrics.
        </p>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {resume.services.map((s, i) => (
            <Link
              key={s.title}
              href={`/services/${s.slug}`}
              className="group border-t border-border pt-6 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-xs tracking-[0.14em] text-muted-foreground">
                  ({String(i + 1).padStart(2, "0")})
                </p>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3
                className="mt-3 text-xl tracking-tight transition-colors group-hover:text-primary"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontWeight: 400,
                }}
              >
                {s.title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <Link
            href="/services"
            className="transition-colors hover:text-primary"
          >
            Explore all services →
          </Link>
        </p>
      </div>
    </section>
  );
}
