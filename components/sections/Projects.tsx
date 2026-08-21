import Image from "next/image";
import { resume, type Project } from "@/data/resume";

function ProjectCard({
  project,
  featured,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <div className="group">
      {project.image && (
        <div className="overflow-hidden rounded-sm border border-border bg-muted">
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            width={800}
            height={450}
            className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="mt-5 space-y-2.5">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {project.tags.join(" · ")}
          {featured && (
            <span className="ml-3 text-primary">Featured</span>
          )}
        </p>
        <h3
          className={`tracking-tight transition-colors group-hover:text-primary ${
            featured ? "text-3xl" : "text-xl"
          }`}
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontWeight: 600,
          }}
        >
          {project.title}
        </h3>
        <p className="leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = resume.projects;

  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Projects
        </p>
        <h2
          className="mt-4 text-3xl tracking-tight sm:text-5xl"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontWeight: 560,
          }}
        >
          Selected <span className="text-gradient">work</span>
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Automations, campaigns and content built with AI at the core — and
          real results behind them.
        </p>

        <div className="mt-14">
          {featured && (
            <ProjectCard project={featured} featured />
          )}

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
