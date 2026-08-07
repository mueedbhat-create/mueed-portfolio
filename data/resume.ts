export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  demo?: string;
  featured?: boolean;
};

export const resume = {
  name: "Mueed Nazir Bhat",
  title: "Marketing Strategist & Copywriter",
  tagline:
    "I turn words into results — data-driven strategy, persuasive copy, and stories that sell.",
  location: "Srinagar, India",
  email: "mueed.nazir@gmail.com",
  phone: "+91 6006628812",
  available: "Available for Projects",

  about: [
    "Marketing strategist and copywriter with 3+ years of experience crafting persuasive copy and data-driven campaigns that move metrics — a 35% boost in brand visibility, a 28% lift in audience engagement, and a 20% rise in customer interactions at Sadat Paints & Plastics.",
    "I blend classic brand storytelling with AI-assisted research and modern content strategy to produce copy that connects with readers and converts. From full campaigns and brand voice to SEO-optimised blogs and scripts, I help brands sound like themselves — and get heard.",
  ],

  services: [
    {
      icon: "PenLine",
      title: "Copywriting",
      description:
        "Ads, campaigns, product launches, websites and social copy built to persuade and convert.",
    },
    {
      icon: "Layers",
      title: "Content Strategy",
      description:
        "Data-driven planning using audience insights, analytics and AI tools to shape your brand voice.",
    },
    {
      icon: "BookOpen",
      title: "Brand Storytelling",
      description:
        "Compelling narratives that connect your audience across every digital platform.",
    },
    {
      icon: "Search",
      title: "Market Research & SEO",
      description:
        "Audience behaviour, competitor analysis and keyword-fuelled content that's found and read.",
    },
  ],

  projects: [
    {
      title: "Brand Campaign Copy Suite",
      description:
        "End-to-end campaign copy — brochures, launch ads, web and social — that lifted customer interactions by 20% at Sadat Paints & Plastics.",
      tags: ["Copywriting", "Brand Strategy", "Campaigns"],
      featured: true,
    },
    {
      title: "Content Marketing Strategy",
      description:
        "Tailored content strategies that strengthened brand voice and lifted audience interaction and engagement for freelance clients.",
      tags: ["Content Strategy", "SEO", "Analytics"],
    },
    {
      title: "SEO & Editorial Content",
      description:
        "Blogs, articles and promotional pieces optimised for search and readability, reducing client revisions by 25%.",
      tags: ["SEO", "Editorial", "Research"],
    },
    {
      title: "Scripts & Voice Projects",
      description:
        "Engaging scripts for podcasts, audio shows and video content, plus professional voiceovers for radio and broadcasts.",
      tags: ["Scriptwriting", "Voice Overs", "Audio"],
    },
  ],

  skills: {
    "Writing & Strategy": [
      "Copywriting",
      "Creative Writing",
      "Content Strategy",
      "Editing & Proofreading",
      "Scriptwriting",
    ],
    "Brand & Marketing": [
      "Brand Storytelling",
      "Market Research",
      "Competitor Analysis",
      "AI & Prompt Engineering",
    ],
    "Production": [
      "Voice Overs",
      "Music Production",
      "Logic Pro",
      "Vegas Pro",
    ],
  },

  tech: [
    "SEO",
    "Analytics",
    "AI Tools",
    "Keyword Research",
    "Content Strategy",
    "Copywriting",
    "Branding",
    "Scriptwriting",
    "Editing",
    "Voice Overs",
    "Research",
    "Campaigns",
  ],

  experience: [
    {
      company: "Sadat Paints & Plastics Pvt. Ltd.",
      role: "Marketing Strategist & Copywriter",
      period: "Feb 2022 – Sep 2025",
      points: [
        "Designed data-driven strategies boosting brand visibility by 35% and engagement by 28%.",
        "Created persuasive copy for brochures, campaigns, websites and social media — up 20% in customer interactions.",
        "Ran market research and competitor analysis to guide a series of successful campaigns.",
        "Partnered with distributors, retailers, and B2B channels to deliver measurable market gains.",
      ],
    },
    {
      company: "Freelance",
      role: "Copywriter & Content Writer",
      period: "Jan 2022 – Present",
      points: [
        "Crafted copy for campaigns, websites and social — boosting client engagement up to 40%.",
        "Built content strategies that lifted brand voice and audience interaction by 30%.",
        "Produced SEO-optimised blogs, articles and promo material for diverse clients.",
        "Edited for clarity and tone, cutting revision cycles by 25%.",
      ],
    },
  ],

  education: [
    {
      institution: "Jamia Millia Islamia, New Delhi",
      degree: "M.Com — Specialisation in Finance",
      year: "2016",
    },
    {
      institution: "University of Delhi",
      degree: "B.Com — Business Communication, Marketing",
      year: "2014",
    },
  ],

  stats: [
    { value: 35, suffix: "%", label: "Brand visibility boost" },
    { value: 28, suffix: "%", label: "Engagement lift" },
    { value: 40, suffix: "%", label: "Client engagement" },
    { value: 7, suffix: "+", label: "Years writing" },
  ],
};