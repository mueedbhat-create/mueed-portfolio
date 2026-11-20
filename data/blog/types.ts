import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  date: string;
  updated?: string;
  keywords: string[];
  category: string;
  readingMinutes: number;
  hidden?: boolean;
  featured?: boolean;
  /** Part of a numbered series (see data/blog/series.ts). */
  series?: { id: string; part: number };
  content: ReactNode;
};
