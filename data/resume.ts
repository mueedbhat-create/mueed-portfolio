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
  title: "AI Automation · Performance Marketing",
  tagline:
    "I help teams eliminate busywork and grow — AI-powered automations and data-driven marketing that scale.",
  location: "Srinagar, India",
  email: "mueed.nazir@gmail.com",
  phone: "+91 6006628812",
  available: "Available for Projects",
  socials: {
    github: "", // TODO: add GitHub URL
    linkedin: "", // TODO: add LinkedIn URL
    twitter: "", // TODO: add X/Twitter URL
  },

  about: [
    "I combine a 3+ year marketing and copywriting background with a fast-growing focus on AI automation and performance marketing. I use LLMs, n8n, and workflow tools to automate the repetitive parts of marketing — while keeping the persuasive copy and brand voice that actually convert.",
    "Today I help build AI-driven automations and performance marketing campaigns — landing pages, funnels, ads, and content workflows powered by AI — so teams spend less time on busywork and more on what moves the metrics.",
  ],

  services: [
    {
      icon: "Workflow",
      title: "AI Workflow Automation",
      description:
        "End-to-end marketing automations with LLMs, n8n, Zapier and custom agents — from lead capture to follow-up.",
    },
    {
      icon: "Target",
      title: "Performance Marketing",
      description:
        "Funnels, paid campaigns and analytics tuned to metrics — CTRs, ROAS, and conversion where it counts.",
    },
    {
      icon: "PenLine",
      title: "AI-Assisted Copy & Content",
      description:
        "Persuasive ad copy, landing pages and content, generated and optimised with AI and human editorial skill.",
    },
    {
      icon: "LineChart",
      title: "AI Strategy & Consulting",
      description:
        "Audit your workflows and build a roadmap for where AI automation pays off fastest.",
    },
  ],

  projects: [
    {
      title: "AI-Assisted Campaign Suite",
      description:
        "Data-driven marketing strategy plus AI-assisted copy and targeting that lifted brand visibility by 35% and engagement by 28%.",
      tags: ["AI Strategy", "Copywriting", "Campaigns"],
      featured: true,
    },
    {
      title: "Content Automation Workflow",
      description:
        "A workflow to research, generate and schedule SEO-optimised content with AI tools — keeping brand voice while cutting production time.",
      tags: ["n8n", "AI Tools", "SEO"],
    },
    {
      title: "Performance Marketing Funnel",
      description:
        "Funnels and ad copy optimised against CTR and conversion data — built on a foundation of market research and competitor analysis.",
      tags: ["Funnels", "Analytics", "Paid Ads"],
    },
    {
      title: "AI-Assisted Editorial Engine",
      description:
        "Blogs, articles and promotional copy produced with AI-assisted research and editing, reducing revision cycles by 25%.",
      tags: ["AI Tools", "Editorial", "Research"],
    },
  ],

  skills: {
    "AI & Automation": [
      "n8n",
      "Workflow Automation",
      "Prompt Engineering",
      "OpenAI API",
      "RAG",
      "AI Assistants",
      "Zapier / Make",
      "Data Annotation",
    ],
    "Performance Marketing": [
      "Funnels",
      "Paid Ads",
      "Analytics",
      "A/B Testing",
      "Conversion Optimisation",
      "Market Research",
    ],
    "Writing & Brand": [
      "Copywriting",
      "Content Strategy",
      "SEO",
      "Brand Storytelling",
      "Editing & Proofreading",
    ],
    "Media & Production": [
      "Scriptwriting",
      "Voice Overs",
      "Music Production",
      "Logic Pro",
      "Vegas Pro",
    ],
  },

  tech: [
    "n8n",
    "OpenAI",
    "Prompt Engineering",
    "Workflow Automation",
    "RAG",
    "Zapier",
    "Make",
    "SEO",
    "Analytics",
    "Funnels",
    "Paid Ads",
    "Copywriting",
    "Content Strategy",
    "Branding",
    "Scriptwriting",
    "Voice Overs",
    "Editing",
    "Research",
  ],

  experience: [
    {
      company: "Sadat Paints & Plastics Pvt. Ltd.",
      role: "Marketing Strategist & Copywriter",
      period: "Feb 2022 – Sep 2025",
      points: [
        "Designed data-driven strategies that lifted brand visibility by 35% and engagement by 28%.",
        "Created persuasive copy for brochures, campaigns, websites and social media — up 20% in customer interactions.",
        "Leveraged AI-assisted tools for keyword analysis, audience targeting and campaign optimisation.",
        "Ran market research and competitor analysis throughout a series of successful campaigns.",
      ],
    },
    {
      company: "Freelance",
      role: "Copywriter · Building AI Automations",
      period: "Jan 2022 – Present",
      points: [
        "Crafted copy for campaigns, websites and social that boosted client engagement up to 40%.",
        "Using AI tools for content research, generation and optimisation to accelerate client work.",
        "Exploring and building AI automation workflows — n8n, prompting, and workflow design — for marketing tasks.",
        "Produced SEO-optimised blogs, articles and promo material that cut revision cycles by 25%.",
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
    { value: 40, suffix: "%", label: "Client engagement " },
    { value: 3, suffix: "+", label: "Years marketing & copy" },
  ],
};