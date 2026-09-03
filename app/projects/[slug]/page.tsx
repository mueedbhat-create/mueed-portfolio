import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { getCaseStudy, caseStudies } from "@/data/work";
import { resume } from "@/data/resume";
import { SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: `${study.title} — Mueed Nazir Bhat`,
    description: study.description,
    alternates: { canonical: `/projects/${study.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/projects/${study.slug}`,
      title: study.title,
      description: study.description,
      siteName: resume.name,
      locale: "en_US",
      authors: [resume.name],
      publishedTime: study.date,
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.description,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    keywords: study.tags,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const related = caseStudies
    .filter((s) => s.slug !== study.slug)
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.description,
    image: `${SITE_URL}/og-image.jpg`,
    datePublished: study.date,
    keywords: study.tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/projects/${study.slug}`,
    },
    author: {
      "@type": "Person",
      name: resume.name,
      url: `${SITE_URL}`,
      image: `${SITE_URL}/mueed-nazir-bhat.jpg`,
      jobTitle: "AI Automation & Performance Marketing",
    },
    publisher: {
      "@type": "Organization",
      name: resume.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.jpg`,
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: `${SITE_URL}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.title,
        item: `${SITE_URL}/projects/${study.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-5 pt-28 pb-24">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-wide text-muted-foreground">
          <span className="uppercase text-muted-foreground">{study.role}</span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {new Date(study.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {study.readingMinutes} min read
          </span>
          {study.link && (
            <a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              View live
            </a>
          )}
        </div>

        <h1
          className="mt-4 text-4xl leading-tight tracking-tight sm:text-5xl"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontWeight: 400,
          }}
        >
          {study.title}
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {study.description}
        </p>

        <div className="mt-8 flex items-center gap-3 border-y border-border py-5">
          <Image
            src="/mueed-nazir-bhat.jpg"
            alt={`Portrait of ${resume.name}`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border border-border object-cover"
          />
          <div>
            <p className="text-sm font-medium">{resume.name}</p>
            <p className="mt-0.5 font-mono text-xs tracking-wide text-muted-foreground">
              AI Automation &amp; Performance Marketing ·{" "}
              <a
                href="https://www.anarchylabs.in/team/mueed-nazir-bhat"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                Anarchy Labs
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-l-2 border-primary py-1 pl-6">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Short answer
          </p>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            {study.intro}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="blog-content mt-12">{study.content}</div>

        <div className="mt-16 rounded-sm border border-border bg-card p-8 text-center">
          <p
            className="text-xl tracking-tight"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontWeight: 400,
            }}
          >
            Need this built, not just read?
          </p>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            I automate marketing workflows and run performance campaigns at{" "}
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
          <Link
            href="/#contact"
            className="btn-sweep mt-6 inline-flex items-center gap-2 rounded-sm bg-foreground px-6 py-3 text-sm font-medium text-background hover:text-primary-foreground"
          >
            Start a project
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2
              className="text-2xl tracking-tight"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 400,
              }}
            >
              More work
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/projects/${s.slug}`}
                  className="lift group rounded-sm border border-border bg-card p-5"
                >
                  <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    {s.role}
                  </p>
                  <p
                    className="mt-2 leading-snug tracking-tight transition-colors group-hover:text-primary"
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontWeight: 400,
                    }}
                  >
                    {s.title}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
