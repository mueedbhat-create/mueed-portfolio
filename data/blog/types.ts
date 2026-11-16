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
  content: ReactNode;
};
