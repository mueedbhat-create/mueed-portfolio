import { PenLine, Layers, BookOpen, Search, type LucideIcon } from "lucide-react";
import { resume } from "@/data/resume";
import { MagicCard } from "@/components/magicui/magic-card";

const icons: Record<string, LucideIcon> = {
  PenLine,
  Layers,
  BookOpen,
  Search,
};

export default function Services() {
  return (
    <section id="services" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
        >
          What I <span className="text-gradient">do</span>
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Strategy and copy built to move your numbers — from first word to final deliverable.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {resume.services.map((s, i) => {
            const Icon = icons[s.icon] ?? PenLine;
            return (
              <MagicCard key={s.title} delay={0.08 * i}>
                <div className="relative z-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                </div>
              </MagicCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}