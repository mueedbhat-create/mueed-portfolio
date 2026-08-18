import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { resume } from "@/data/resume";

const SITE_URL = "https://mueed-portfolio-dusky.vercel.app";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mueed Nazir Bhat — AI Automation & Performance Marketing",
  description:
    "Portfolio of Mueed Nazir Bhat: AI-powered automations and performance marketing built on a copywriting background — workflows, funnels, and AI-assisted content that scale.",
  keywords: [
    "Mueed Nazir Bhat",
    "AI automation specialist",
    "performance marketing",
    "AI workflow automation",
    "n8n workflows",
    "marketing copywriter",
    "funnel builder",
    "AI content strategy",
    "freelance AI automation",
  ],
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
    title: "Mueed Nazir Bhat — AI Automation & Performance Marketing",
    description:
      "Automations, funnels and copy that move metrics — powered by AI.",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 2400,
        height: 1260,
        alt: "Mueed Nazir Bhat — AI Automation & Performance Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mueed Nazir Bhat — AI Automation & Performance Marketing",
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
  themeColor: "#090a12",
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
      name: "Freelance",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: resume.name,
    alternateName: "Mueed Nazir Bhat — AI Automation & Performance Marketing",
    url: SITE_URL,
    description:
      "Portfolio of Mueed Nazir Bhat: AI-powered automations and performance marketing built on a copywriting background.",
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: resume.name,
      url: SITE_URL,
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}
