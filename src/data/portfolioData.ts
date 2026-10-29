import { PersonalInfo, Project, EducationItem, SkillCategory, ExperienceItem, AchievementItem, GitHubStats } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Abhishek Gangwar",
  role: "Computer Science & Engineering Student",
  college: "Ajay Kumar Garg Engineering College (AKGEC)",
  graduationYear: "2027",
  degree: "B.Tech in Computer Science and Engineering (Data Science)",
  location: "Ghaziabad, Uttar Pradesh, India",
  availability: "Open for Software Developer & Full-Stack Roles",
  tagline: "Building scalable web applications, RESTful APIs, and modern full-stack web products.",
  bio: "Computer Science and Engineering student passionate about software engineering, full-stack web development, backend API design, and practical product development.",
  socials: {
    github: "https://github.com/abhishek-0512",
    linkedin: "https://linkedin.com/in/abhishekgangwar",
    email: "abhishekgangwar9876@gmail.com",
    leetcode: "https://leetcode.com/u/Abhishekgangwar9876/",
    resumeUrl: "#resume"
  },
  metrics: {
    dsaSolved: 200,
    projectsCompleted: 3,
    internships: 2,
    cgpa: "8.0 / 10"
  }
};

export const educationData: EducationItem[] = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    field: "Specialization in Data Science",
    institution: "Ajay Kumar Garg Engineering College (AKGEC)",
    location: "Ghaziabad, Uttar Pradesh, India",
    period: "Oct 2023 – June 2027",
    scoreLabel: "CGPA",
    scoreValue: "8.0 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems (MySQL/MongoDB)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering & RESTful APIs"
    ]
  },
  {
    degree: "Class 12th (Senior Secondary)",
    field: "Science Stream (PCM & Computer Science)",
    institution: "CP Vidya Niketan",
    board: "ISC Board",
    location: "Uttar Pradesh, India",
    period: "Passing Year: 2022",
    scoreLabel: "Percentage",
    scoreValue: "85.4%",
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
      "English"
    ]
  },
  {
    degree: "Class 10th (Secondary School)",
    field: "General Science & Mathematics",
    institution: "CP Vidya Niketan",
    board: "ICSE Board",
    location: "Uttar Pradesh, India",
    period: "Passing Year: 2020",
    scoreLabel: "Percentage",
    scoreValue: "81.6%",
    coursework: [
      "Mathematics",
      "Science",
      "Social Studies",
      "English",
      "Computer Applications"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "collab-code",
    title: "Collab Code",
    subtitle: "Real-Time Collaborative Coding Workspace",
    category: "ai",
    featured: true,
    badgeText: "Real-Time Developer Platform",
    shortDescription: "A production-minded collaborative coding workspace with live editing, voice rooms, sandboxed code execution, and interview-style problem solving.",
    problemSolved: "Remote pair programming and technical interviews need synchronized editing, communication, and safe multi-language execution in one workspace.",
    solutionOverview: "Built a real-time collaboration platform around Monaco, Yjs CRDT synchronization, Socket.IO rooms, WebRTC voice, and an isolated execution boundary for polyglot code.",
    keyFeatures: [
      "Live multi-user Monaco editing with Yjs CRDT synchronization, presence indicators, and remote cursors",
      "Room chat, WebRTC voice rooms, voice notes, and speech-to-text collaboration tools",
      "Sandboxed JavaScript, TypeScript, Python, Java, C++, Go, and Rust execution with resource limits",
      "JWT authentication, Zod request validation, MongoDB persistence, Redis support, and Docker deployment"
    ],
    techStack: [
      "React 19", "TypeScript", "Node.js", "Express 5", "Socket.IO", "Yjs", "WebRTC", "MongoDB", "Redis", "Docker"
    ],
    githubUrl: "https://github.com/abhishek-0512/collab-code",
    liveUrl: "https://collab-code-topaz.vercel.app/",
    architectureDiagram: {
      overview: "Real-Time Collaborative Architecture with CRDT Sync & Sandboxed Execution",
      nodes: [
        {
          title: "React + Monaco Client",
          description: "Collaborative editor, room UI, chat, presence, and voice experiences.",
          tech: ["React", "TypeScript", "Monaco", "Yjs"]
        },
        {
          title: "Express + Socket.IO",
          description: "REST APIs and real-time room transport for synchronized collaboration.",
          tech: ["Node.js", "Express", "Socket.IO"]
        },
        {
          title: "Execution Sandbox",
          description: "Isolated polyglot code execution with memory and timeout controls.",
          tech: ["Piston", "Docker"]
        },
        {
          title: "MongoDB + Redis",
          description: "Persistent room data, caching, pub/sub, and rate-limit support.",
          tech: ["MongoDB", "Redis"]
        }
      ]
    },
    technicalChallenges: [
      {
        challenge: "Keeping concurrent edits consistent while supporting multiple collaborators.",
        solution: "Used Yjs CRDT updates with Monaco bindings and Socket.IO transport for conflict-free convergence."
      }
    ]
  },
  {
    id: "nexora-ai",
    title: "Nexora AI",
    subtitle: "Multi-Agent AI Platform",
    category: "ai",
    featured: true,
    badgeText: "Multi-Agent AI Platform",
    shortDescription: "A modular AI platform that coordinates specialized agents for tasks such as image generation and intelligent content workflows.",
    problemSolved: "AI products need a reliable way to route user requests to specialized agents while keeping deployments, prompts, and provider integrations maintainable.",
    solutionOverview: "Designed a modular frontend and service-oriented backend with an API gateway, specialized agent services, Redis-backed coordination, and deployment documentation for cloud environments.",
    keyFeatures: [
      "Specialized image agent that enhances prompts and invokes the configured image-generation provider",
      "Service-oriented backend organized around an API gateway and independent agent services",
      "Redis integration for shared state and coordination between services",
      "Deployment assets for Docker, Nginx, EC2, and production environment configuration"
    ],
    techStack: [
      "React", "JavaScript", "Node.js", "Express", "Redis", "Docker", "Nginx", "AWS EC2"
    ],
    githubUrl: "https://github.com/abhishek-0512/multiagentplatform",
    architectureDiagram: {
      overview: "Gateway-Based Multi-Agent Service Architecture",
      nodes: [
        {
          title: "React Client",
          description: "User-facing interface for interacting with the agent platform.",
          tech: ["React", "JavaScript"]
        },
        {
          title: "API Gateway",
          description: "Routes requests and provides a stable boundary for agent services.",
          tech: ["Node.js", "Express"]
        },
        {
          title: "Specialized Agents",
          description: "Independent services for image generation and other AI workflows.",
          tech: ["AI Providers", "Node.js"]
        },
        {
          title: "Redis + Cloud",
          description: "Shared coordination and production deployment infrastructure.",
          tech: ["Redis", "Docker", "AWS EC2"]
        }
      ]
    },
    technicalChallenges: [
      {
        challenge: "Keeping agent integrations isolated while maintaining a consistent client contract.",
        solution: "Separated gateway routing from agent services and documented provider configuration through environment variables."
      }
    ]
  },
  {
    id: "payvista",
    title: "PayVista",
    subtitle: "WhatsApp Payment Link Gateway",
    category: "fullstack",
    featured: true,
    badgeText: "FinTech Automation",
    shortDescription: "A payment-link generator and dispatcher that combines merchant analytics, hosted checkout simulation, and WhatsApp Cloud API messaging.",
    problemSolved: "Merchants need a simple way to create payment requests, send them through WhatsApp, and track payment activity from one dashboard.",
    solutionOverview: "Built a Node.js and Express payment workflow with Meta WhatsApp Cloud API integration, template fallback handling, analytics endpoints, and a hosted checkout simulator.",
    keyFeatures: [
      "Creates dynamic payment links and dispatches customer notifications through Meta WhatsApp Cloud API",
      "Falls back to approved WhatsApp templates when the customer messaging window is unavailable",
      "Provides merchant analytics for request volume, payment conversion, and dispatched messages",
      "Includes hosted UPI, card, and netbanking checkout simulation for end-to-end testing"
    ],
    techStack: [
      "Node.js", "Express.js", "JavaScript", "Meta WhatsApp Cloud API", "REST APIs", "Vercel"
    ],
    githubUrl: "https://github.com/abhishek-0512/paylink",
    liveUrl: "https://paylink-ebon-beta.vercel.app/",
    architectureDiagram: {
      overview: "Payment Dashboard with WhatsApp Cloud API Integration",
      nodes: [
        {
          title: "Merchant Dashboard",
          description: "Creates payment requests and monitors delivery and payment status.",
          tech: ["JavaScript", "REST APIs"]
        },
        {
          title: "Express API",
          description: "Generates links, computes analytics, and manages payment lifecycle data.",
          tech: ["Node.js", "Express"]
        },
        {
          title: "Meta WhatsApp API",
          description: "Dispatches payment notifications and template-based fallbacks.",
          tech: ["Meta Cloud API", "OAuth"]
        },
        {
          title: "Hosted Checkout",
          description: "Customer-facing payment page for UPI, cards, and netbanking flows.",
          tech: ["React", "Vercel"]
        }
      ]
    },
    technicalChallenges: [
      {
        challenge: "Handling WhatsApp customer-session restrictions without losing payment notifications.",
        solution: "Implemented error-aware template fallback behavior for Meta Cloud API session and policy errors."
      }
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages used for problem solving and software development.",
    skills: [
      { name: "Java", level: "Advanced", highlight: true },
      { name: "JavaScript", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Proficient", highlight: true },
      { name: "C", level: "Proficient" },
      { name: "SQL", level: "Advanced", highlight: true }
    ]
  },
  {
    category: "Frontend",
    description: "Client-side web development technologies.",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true },
      { name: "Next.js", level: "Proficient", highlight: true },
      { name: "Redux Toolkit", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", highlight: true },
      { name: "HTML/CSS", level: "Advanced" }
    ]
  },
  {
    category: "Backend",
    description: "Server-side microservices, APIs, and authentication mechanisms.",
    skills: [
      { name: "Node.js", level: "Advanced", highlight: true },
      { name: "Express.js", level: "Advanced", highlight: true },
      { name: "RESTful APIs", level: "Advanced", highlight: true },
      { name: "JWT Authentication", level: "Advanced", highlight: true }
    ]
  },
  {
    category: "Databases",
    description: "Relational and NoSQL database management systems.",
    skills: [
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MySQL", level: "Advanced", highlight: true },
      { name: "MongoDB", level: "Advanced", highlight: true },
      { name: "Redis", level: "Proficient" }
    ]
  },
  {
    category: "DevOps & Cloud",
    description: "Version control, CI/CD automation pipelines, and cloud hosting.",
    skills: [
      { name: "Git", level: "Advanced", highlight: true },
      { name: "GitHub Actions (CI/CD)", level: "Proficient", highlight: true },
      { name: "Docker", level: "Intermediate" },
      { name: "AWS (EC2, S3)", level: "Intermediate" },
      { name: "Vercel", level: "Advanced" },
      { name: "Render", level: "Advanced" }
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    company: "Payvista Technology Solutions Private Limited",
    role: "Software Developer Intern",
    period: "July 2026 – Present",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Engineered a scalable document analytics engine using Node.js and SQL to parse and extract structured business insights from massive CSV, Excel, and PDF datasets.",
      "Designed and optimized database schemas in MySQL Workbench for high-volume transactional data, improving query response times for automated report generation.",
      "Integrated the WhatsApp Business API to automate real-time payment notifications, reducing manual communication overhead for the operations team.",
      "Configured GitHub Actions CI/CD pipelines to automate linting, testing, and deployment across staging and production environments, accelerating release cycles."
    ],
    technologies: ["Node.js", "SQL", "MySQL Workbench", "WhatsApp Business API", "GitHub Actions"]
  },
  {
    company: "IBM SkillsBuild (Virtual Program)",
    role: "Frontend Developer Trainee",
    period: "Aug 2025 – Sept 2025",
    location: "Remote",
    type: "Traineeship",
    bullets: [
      "Developed a responsive client-side application using React.js with modular components for dynamic state management.",
      "Implemented optimized rendering practices to ensure cross-device compatibility and a seamless user experience."
    ],
    technologies: ["React.js", "JavaScript", "HTML/CSS"]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    title: "Executive 4.0 Hackathon (DTU)",
    category: "Hackathon",
    issuer: "Delhi Technological University (DTU)",
    date: "2025",
    description: "Ranked in the Top 100 among 1000+ teams at Executive 4.0 Hackathon (DTU) by building a high-throughput backend solution.",
    badge: "🏆 Top 100"
  },
  {
    title: "200+ DSA Problems Solved",
    category: "Competitive Programming",
    issuer: "LeetCode & GeeksforGeeks",
    date: "2024 – Present",
    description: "Solved 200+ Data Structures and Algorithms problems across LeetCode and GeeksforGeeks.",
    badge: "⚡ 200+ Solved"
  },
  {
    title: "Full Stack Developer Certificate",
    category: "Certification",
    issuer: "IBM SkillsBuild",
    date: "2025",
    description: "IBM SkillsBuild – Full Stack Developer Professional Certificate.",
    badge: "📜 IBM Certified",
    link: "https://skillsbuild.org/certificate"
  }
];

export const githubStats: GitHubStats = {
  username: "abhishek-0512",
  totalContributions: 250,
  totalRepositories: 16,
  starsEarned: 0,
  dsaRating: {
    platform: "LeetCode & GFG",
    rating: "200+",
    globalRank: "Active Solver",
    problemsSolved: 200
  },
  featuredRepos: [
    {
      name: "collab-code",
      description: "Real-time collaborative coding workspace with CRDT sync, voice rooms, and sandboxed execution",
      stars: 0,
      forks: 0,
      language: "TypeScript"
    },
    {
      name: "multiagentplatform",
      description: "Service-oriented multi-agent AI platform with gateway routing and Redis coordination",
      stars: 0,
      forks: 0,
      language: "JavaScript"
    },
    {
      name: "paylink",
      description: "Payment-link generator with WhatsApp Cloud API notifications and merchant analytics",
      stars: 0,
      forks: 0,
      language: "JavaScript"
    }
  ]
};
