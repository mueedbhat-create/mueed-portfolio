import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mueed Nazir Bhat — AI Automation & Performance Marketing",
  description:
    "Portfolio of Mueed Nazir Bhat: AI-powered automations and performance marketing built on a copywriting background — workflows, funnels, and AI-assisted content that scale.",
  openGraph: {
    title: "Mueed Nazir Bhat — AI Automation & Performance Marketing",
    description:
      "Automations, funnels and copy that move metrics — powered by AI.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}