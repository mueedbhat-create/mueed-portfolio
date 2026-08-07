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
  title: "Mueed Nazir Bhat — Marketing Strategist & Copywriter",
  description:
    "Portfolio of Mueed Nazir Bhat: marketing strategist and copywriter crafting persuasive copy, content strategy and brand storytelling that convert.",
  openGraph: {
    title: "Mueed Nazir Bhat — Marketing Strategist & Copywriter",
    description:
      "Data-driven strategy, persuasive copy, and stories that sell.",
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