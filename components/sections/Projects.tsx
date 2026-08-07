import { Badge } from "@/components/ui/badge";
import { resume, type Project } from "@/data/resume";
import { MagicCard } from "@/components/magicui/magic-card";

function ProjectCard({
  project,
  featured,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <div className="relative z-10">
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="secondary" className="font-normal">
              {t}
            </Badge>
          ))}
          {featured && (
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          )}
        </div>
        <h3
          className={`font-bold tracking-tight ${featured ? "text-2xl" : "text-lg"}`}
          style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = resume.projects;

  return (
    <section id="projects" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
        >
          Selected <span className="text-gradient">work</span>
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Campaigns, strategies and content that produced measurable results.
        </p>

        <div className="mt-12">
          {featured && (
            <MagicCard>
              <ProjectCard project={featured} featured />
            </MagicCard>
          )}

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <MagicCard key={p.title} delay={0.08 * i}>
                <ProjectCard project={p} />
              </MagicCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}