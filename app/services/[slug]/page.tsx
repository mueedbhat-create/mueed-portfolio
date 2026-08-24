import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getService, services } from "@/data/services";
import { resume } from "@/data/resume";
import { SITE_URL, SITE_DESCRIPTION } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.title} — Mueed Nazir Bhat`,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/services/${service.slug}`,
      title: service.title,
      description: service.description,
      siteName: resume.name,
      locale: "en_US",
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    keywords: service.keywords,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceUrl = `${SITE_URL}/services/${service.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: serviceUrl,
    areaServed: "Worldwide",
    provider: {
      "@type": "Person",
      name: resume.name,
      url: SITE_URL,
      image: `${SITE_URL}/mueed-nazir-bhat.jpg`,
      jobTitle: "AI Automation & Performance Marketing Specialist",
    },
  };

  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#professional-service`,
    name: `${resume.name} — AI Automation & Performance Marketing`,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    image: `${SITE_URL}/mueed-nazir-bhat.jpg`,
    email: resume.email,
    telephone: "+916006628812",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Srinagar",
      addressRegion: "Jammu and Kashmir",
      addressCountry: "IN",
    },
    areaServed: "Worldwide",
    founder: {
      "@type": "Person",
      name: resume.name,
      url: SITE_URL,
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        name: service.name,
      },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
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
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: serviceUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-5 pt-28 pb-24">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All services
        </Link>

        <p className="mt-8 font-mono text-xs uppercase tracking-wide text-muted-foreground">
          Service
        </p>

        <h1
          className="mt-4 text-4xl leading-tight tracking-tight sm:text-5xl"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontWeight: 400,
          }}
        >
          {service.title}
        </h1>

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
            {service.intro}
          </p>
        </div>

        <div className="blog-content mt-12">{service.content}</div>

        {service.faqs.length > 0 && (
          <div className="mt-14">
            <h2
              className="text-2xl tracking-tight"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 400,
              }}
            >
              Common questions
            </h2>
            <dl className="mt-6 space-y-7 border-t border-border pt-8">
              {service.faqs.map((f) => (
                <div key={f.q}>
                  <dt
                    className="leading-snug tracking-tight"
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontWeight: 400,
                    }}
                  >
                    {f.q}
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted-foreground">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {service.relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2
              className="text-2xl tracking-tight"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 400,
              }}
            >
              Keep reading
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {service.relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="lift group rounded-sm border border-border bg-card p-5"
                >
                  <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    From the blog
                  </p>
                  <p
                    className="mt-2 leading-snug tracking-tight transition-colors group-hover:text-primary"
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontWeight: 400,
                    }}
                  >
                    {p.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 rounded-sm border border-border bg-card p-8 text-center">
          <p
            className="text-xl tracking-tight"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontWeight: 400,
            }}
          >
            Want this running in your business?
          </p>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Tell me what is slowing your team down. I&apos;ll come back with a
            plan to fix it.
          </p>
          <Link
            href="/#contact"
            className="btn-sweep mt-6 inline-flex items-center gap-2 rounded-sm bg-foreground px-6 py-3 text-sm font-medium text-background hover:text-primary-foreground"
          >
            Start a project
          </Link>
        </div>
      </article>
    </>
  );
}
