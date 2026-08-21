import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { resume } from "@/data/resume";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  creator: "Mueed Nazir Bhat",
  publisher: "Mueed Nazir Bhat",
  authors: [{ name: resume.name, url: SITE_URL }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: resume.name,
    title: SITE_TITLE,
    description:
      "Automations, funnels and copy that move metrics — powered by AI.",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Automations, funnels and copy that move metrics — powered by AI.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "8EWBZ4q2pkJ9iF5pN4uM2MqLnGeMEk7OZxnJJjrYV2Q",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf6f0",
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resume.name,
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    jobTitle: "AI Automation & Performance Marketing Specialist",
    description: resume.tagline,
    email: "mailto:mueed.nazir@gmail.com",
    telephone: "+916006628812",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Srinagar",
      addressRegion: "Jammu and Kashmir",
      addressCountry: "IN",
    },
    sameAs: Object.values(resume.socials),
    knowsAbout: resume.tech,
    alumniOf: resume.education.map((ed) => ({
      "@type": "CollegeOrUniversity",
      name: ed.institution,
    })),
    worksFor: {
      "@type": "Organization",
      name: "Anarchy Labs",
      url: "https://www.anarchylabs.in",
      sameAs: "https://www.anarchylabs.in/team/mueed-nazir-bhat",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: resume.name,
    alternateName: SITE_TITLE,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
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

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mueed Nazir Bhat — Services",
    itemListElement: resume.services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        provider: {
          "@type": "Person",
          name: resume.name,
          url: SITE_URL,
        },
      },
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: resume.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${workSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={serviceJsonLd} />
        <JsonLd data={faqJsonLd} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="bottom-right" theme="light" />
      </body>
    </html>
  );
}
