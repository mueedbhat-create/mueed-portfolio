export type Experience = {
  company: string;
  role: string;
  period: string;
  link?: string;
  points: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  link?: string;
  demo?: string;
  featured?: boolean;
};

export type Faq = {
  q: string;
  a: string;
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
    github: "https://github.com/mueedbhat-create",
    linkedin: "https://www.linkedin.com/in/mueed-nazir-bhat-20a297429/",
    anarchylabs: "https://www.anarchylabs.in/team/mueed-nazir-bhat",
  },

  about: [
    "I combine a 3+ year marketing and copywriting background with a fast-growing focus on AI automation and performance marketing. I use LLMs, n8n, and workflow tools to automate the repetitive parts of marketing. The persuasive copy and brand voice that actually convert stay human.",
    "Today I build the AI automation behind the growth work at Anarchy Labs — paid performance, SEO, and the workflows that keep both running without a person on them every day.",
    "Landing pages, funnels, ads, and content workflows powered by AI mean teams spend less time on busywork. They spend more time on what moves the metrics.",
  ],

  services: [
    {
      slug: "ai-automation",
      icon: "Workflow",
      title: "AI Workflow Automation",
      description:
        "End-to-end marketing automations with LLMs, n8n, Zapier and custom agents — from lead capture to follow-up.",
    },
    {
      slug: "performance-marketing",
      icon: "Target",
      title: "Performance Marketing",
      description:
        "Funnels, paid campaigns and analytics tuned to metrics — CTRs, ROAS, and conversion where it counts.",
    },
    {
      slug: "ai-copy-content",
      icon: "PenLine",
      title: "AI-Assisted Copy & Content",
      description:
        "Persuasive ad copy, landing pages and content, generated and optimised with AI and human editorial skill.",
    },
    {
      slug: "ai-strategy",
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
      image: "/projects/campaign-suite.svg",
      imageAlt:
        "Preview graphic of the AI-Assisted Campaign Suite showing a rising analytics chart and audience segments",
      featured: true,
    },
    {
      title: "Content Automation Workflow",
      description:
        "A workflow to research, generate and schedule SEO-optimised content with AI tools — keeping brand voice while cutting production time.",
      tags: ["n8n", "AI Tools", "SEO"],
      image: "/projects/content-automation.svg",
      imageAlt:
        "Preview graphic of the Content Automation Workflow showing an n8n-style automation node graph",
    },
    {
      title: "Performance Marketing Funnel",
      description:
        "Funnels and ad copy optimised against CTR and conversion data — built on a foundation of market research and competitor analysis.",
      tags: ["Funnels", "Analytics", "Paid Ads"],
      image: "/projects/marketing-funnel.svg",
      imageAlt:
        "Preview graphic of the Performance Marketing Funnel showing a conversion funnel with stage metrics",
    },
    {
      title: "AI-Assisted Editorial Engine",
      description:
        "Blogs, articles and promotional copy produced with AI-assisted research and editing, reducing revision cycles by 25%.",
      tags: ["AI Tools", "Editorial", "Research"],
      image: "/projects/editorial-engine.svg",
      imageAlt:
        "Preview graphic of the AI-Assisted Editorial Engine showing an AI editor assembling published articles",
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
      "Voice AI",
      "AI Agents",
      "Python",
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
    "Voice AI",
    "AI Agents",
    "Python",
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
      company: "Anarchy Labs",
      role: "AI Automation & Performance Marketing",
      period: "2025 – Present",
      link: "https://www.anarchylabs.in/team/mueed-nazir-bhat",
      points: [
        "Builds AI automations — automated voice agents and chat flows for lead capture and follow-up, wired into real business workflows.",
        "Designs marketing automations on n8n, Zapier and Make — from lead capture and follow-up to content research, drafting and publishing.",
        "Builds LLM-powered automation workflows with the OpenAI API, using RAG and prompt engineering to turn client documents into working tools.",
        "Pairs AI-assisted copy and campaign strategy with performance marketing: funnels, paid ads, and analytics tuned to CTR, ROAS and conversion.",
        "Audits client workflows and builds AI automation roadmaps for where automation pays off fastest.",
      ],
    },
    {
      company: "Sadat Paints & Plastics Pvt. Ltd.",
      role: "Marketing Strategist & Copywriter",
      period: "Feb 2022 – Apr 2026",
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
        "Built custom AI automation workflows — n8n, prompt engineering and LLM API integrations — for client marketing tasks.",
        "Built AI agents for content research, generation and optimisation to accelerate client work.",
        "Crafted copy for campaigns, websites and social that boosted client engagement up to 40%.",
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

  faqs: [
    {
      q: "What is AI workflow automation for marketing?",
      a: "AI workflow automation uses AI tools like LLMs, n8n, Zapier and Make to automate repetitive marketing tasks. That covers lead capture, follow-up, content research and publishing. Instead of a person copying data between tools, an automated workflow triggers, transforms and hands off the work. Marketing teams ship faster with fewer manual hours.",
    },
    {
      q: "How do you combine AI with performance marketing?",
      a: "AI speeds up the testing and content side while performance marketing governs the numbers. I use AI for research, ad copy, landing pages and campaign iteration. Then I measure everything against CTR, ROAS and conversion rate. In recent client work this combination lifted brand visibility by 35% and engagement by 28%.",
    },
    {
      q: "Which tools and platforms do you work with?",
      a: "I build automations with n8n, Zapier and Make. I use LLMs and the OpenAI API for content and reasoning, and RAG for working with a client's own documents. On the marketing side I work with funnels, paid ads, analytics and A/B testing. I write all the copy myself.",
    },
    {
      q: "What results can AI-assisted copy and content deliver?",
      a: "AI-assisted editorial workflows reduce production time and revision cycles. I've seen revision cycles cut by 25% on blogs, articles and promotional copy. The key is keeping the human editor in control. AI handles research and first drafts. Persuasive brand voice stays with a skilled copywriter.",
    },
    {
      q: "How do we get started with AI automation?",
      a: "Start with a workflow audit. I review the repetitive tasks eating your team's time, pick the highest-leverage automations, and build a roadmap. Contact me via the form below with what's slowing you down. I'll come back with a plan to automate it.",
    },
  ],
};