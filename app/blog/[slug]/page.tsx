import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { getPost, posts, visiblePosts } from "@/data/posts";
import { resume } from "@/data/resume";
import { SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Mueed Nazir Bhat`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      siteName: resume.name,
      locale: "en_US",
      authors: [resume.name],
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    keywords: post.keywords,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = visiblePosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}/og-image.jpg`,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    keywords: post.keywords.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    author: {
      "@type": "Person",
      name: resume.name,
      url: `${SITE_URL}`,
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
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
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
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full border border-border px-3 py-1">
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readingMinutes} min read
          </span>
        </div>

        <h1
          className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
        >
          {post.title}
        </h1>

        <p className="mt-5 text-lg text-muted-foreground">{post.description}</p>

        <div className="mt-6 flex items-center gap-3 border-y border-border/60 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-sm font-semibold text-blue-400">
            {resume.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <p className="text-sm font-medium">{resume.name}</p>
            <p className="text-xs text-muted-foreground">
              Applied AI Engineer · AI Automation &amp; Performance Marketing ·{" "}
              <a
                href="https://www.anarchylabs.in/team/mueed-nazir-bhat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                Anarchy Labs
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card/60 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            Short answer
          </p>
          <p className="mt-2 text-muted-foreground">{post.intro}</p>
        </div>

        <div className="blog-content mt-10">{post.content}</div>

        <div className="mt-16 rounded-2xl border border-border bg-card/60 p-6 text-center">
          <p className="text-lg font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
            Need this built, not just read?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            I automate marketing workflows and run performance campaigns at{" "}
            <a
              href="https://www.anarchylabs.in/team/mueed-nazir-bhat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              Anarchy Labs
            </a>
            .
          </p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start a project
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2
              className="text-xl font-bold"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
            >
              Keep reading
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-card/60"
                >
                  <p className="text-xs text-blue-400">{p.category}</p>
                  <p className="mt-2 font-medium leading-snug group-hover:text-blue-300">
                    {p.title}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {p.description}
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