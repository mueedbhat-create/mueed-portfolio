import { ArrowDown, MessageSquare } from "lucide-react";
import { resume } from "@/data/resume";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Spotlight } from "@/components/aceternity/spotlight";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Spotlight />
      <div className="hero-grid absolute inset-0" aria-hidden />
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" aria-hidden />
      <div className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5">
        <BlurFade delay={0.1}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {resume.available}
          </span>
        </BlurFade>

        <BlurFade delay={0.2}>
          <h1
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            <span className="block">{resume.name}</span>
            <span className="mt-2 block text-2xl font-semibold leading-tight text-muted-foreground sm:text-3xl md:text-4xl">
              AI Automation &amp; Performance Marketing
            </span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            {resume.tagline}
          </p>
        </BlurFade>

        <BlurFade delay={0.4}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View work <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium transition-colors hover:bg-card"
            >
              <MessageSquare className="h-4 w-4" /> Let&apos;s talk
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}