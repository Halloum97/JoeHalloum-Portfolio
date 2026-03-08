export type SkillGroup = { title: string; items: string[] };

export type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  youtubeUrl?: string;
  links: {
    repo?: string;
    live?: string;
  };
};

export type Content = {
  profile: {
    name: string;
    headline: string;
    about: string;
    education: string;
  };
  skills: SkillGroup[];
  projects: Project[];
  now: {
    bullets: string[];
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    resumePath: string;
  };
};

export const content: Content = {
  profile: {
    name: "Joe Halloum",
    headline:
      "Full-Stack Engineer | AI-Powered Systems | React • Node • AWS | Production Deployment",
    about:
      "Full-Stack Software Engineer building scalable web applications, AI agents, and data-backed systems. I thrive in fast-paced startup environments where ownership, clean architecture, and real-world impact matter.",
    education: "Arizona State University — Software Engineer — 2026",
  },
  skills: [
    { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java"] },
    { title: "Frontend", items: ["React", "Vite", "TanStack Query", "HTML/CSS"] },
    { title: "Backend", items: ["Node.js", "Express", "REST API Design"] },
    {
      title: "Cloud & DevOps",
      items: [
        "AWS (ECS, Fargate, ECR, ALB, CloudFront, CloudWatch)",
        "Docker",
        "CI/CD",
      ],
    },
    { title: "Databases", items: ["SQL", "Firestore"] },
    {
      title: "Architecture",
      items: ["Monorepo", "Middleware Pipelines", "Structured Logging"],
    },
    { title: "Testing", items: ["Vitest", "Supertest", "React Testing Library"] },
  ],
  projects: [
    {
      id: "chatapp",
      title: "ChatApp",
      summary:
        "Chat app with a special feature to automate changing your profile picture.",
      tags: ["React", "TypeScript", "Node.js", "WebSockets", "Firestore"],
      image: "/projects/chatapp.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      links: {
        repo: "https://github.com/Halloum97/chatapp",
        live: "",
      },
    },
    {
      id: "ai-chat-agent",
      title: "AI Chat Agent",
      summary:
        "Website assistant that answers visitors using your website information and provides helpful links and guidance.",
      tags: ["Next.js", "Node.js", "RAG", "Embeddings", "Vector Search", "AWS"],
      image: "/projects/ai-chat-agent.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      links: {
        repo: "https://github.com/Halloum97/ai-chat-agent",
        live: "",
      },
    },
    {
      id: "startup-tech-site",
      title: "Startup-Tech Website",
      summary:
        "Innovative startup-style website design with polished motion, glass, and aurora visuals.",
      tags: ["Next.js", "Tailwind", "Motion", "Glassmorphism", "Performance"],
      image: "/projects/startup-tech-site.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      links: {
        repo: "https://github.com/Halloum97/startup-tech-site",
        live: "",
      },
    },
  ],
  now: {
    bullets: [
      "Building AI-powered user experiences and production-grade web systems.",
      "Open to Full-Stack / AI-focused roles and impactful startup teams.",
      "Currently improving: system design + cloud architecture depth.",
    ],
  },
  contact: {
    email: "halloumjihad97@gmail.com",
    linkedin: "https://www.linkedin.com/in/joehalloum1/",
    github: "https://github.com/Halloum97",
    resumePath: "/resume.pdf",
  },
};
