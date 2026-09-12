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
    projectsCompleted: 2,
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
    id: "virtual-courses",
    title: "Virtual Courses – AI-Powered LMS",
    subtitle: "Learning Management System with Google Gemini AI Virtual Tutor",
    category: "ai",
    featured: true,
    badgeText: "AI LMS Platform",
    shortDescription: "A Learning Management System featuring role-based access control (RBAC), Gemini AI tutor integration for real-time doubt solving, and Cloudinary media pipelines.",
    problemSolved: "Students need real-time assistance for complex course queries outside lecture hours, while educators require role-based access control for content administration.",
    solutionOverview: "Architected a scalable Learning Management System with secure role-based access control (RBAC) utilizing JWT authentication for students, instructors, and admins. Integrated the Google Gemini AI API to build an interactive virtual tutor enabling real-time text and voice-based assistance.",
    keyFeatures: [
      "Architected a scalable Learning Management System with secure role-based access control (RBAC) utilizing JWT authentication for students, instructors, and admins",
      "Integrated Google Gemini AI API to build an interactive virtual tutor enabling real-time text and voice-based assistance for complex course queries",
      "Engineered robust RESTful backend controllers and centralized frontend state using Redux Toolkit, optimizing API calls and data flow",
      "Implemented a scalable media upload pipeline using Cloudinary to handle high-resolution course assets"
    ],
    techStack: [
      "React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Gemini API", "JWT", "Cloudinary"
    ],
    githubUrl: "https://github.com/abhishek-0512/VirtualCourses",
    liveUrl: "https://virtual-courses-dun.vercel.app/",
    architectureDiagram: {
      overview: "Full-Stack MERN Architecture with Gemini AI & Cloudinary",
      nodes: [
        {
          title: "React.js + Redux Client",
          description: "Centralized state management with Redux Toolkit for course browsing and AI tutor interface.",
          tech: ["React.js", "Redux Toolkit", "Tailwind CSS"]
        },
        {
          title: "Express.js Backend",
          description: "RESTful backend controllers enforcing JWT Role-Based Access Control (RBAC).",
          tech: ["Node.js", "Express.js", "JWT"]
        },
        {
          title: "Google Gemini AI API",
          description: "Interactive virtual tutor delivering text and voice-based Q&A assistance.",
          tech: ["Gemini API"]
        },
        {
          title: "MongoDB & Cloudinary",
          description: "Database storage for course data and Cloudinary pipeline for media assets.",
          tech: ["MongoDB", "Cloudinary"]
        }
      ]
    },
    technicalChallenges: [
      {
        challenge: "Securing role-based authorization across Students, Instructors, and Admins.",
        solution: "Implemented JWT payload verification with role-based middleware in Express controllers."
      }
    ]
  },
  {
    id: "shopnest",
    title: "ShopNest – E-Commerce Platform",
    subtitle: "Full-Stack E-Commerce Solution with Advanced Product Filtering",
    category: "fullstack",
    featured: true,
    badgeText: "Full-Stack E-Commerce",
    shortDescription: "A full-stack e-commerce platform featuring advanced product filtering, seamless checkout, secure JWT authentication, and separate Vercel/Render deployments.",
    problemSolved: "E-commerce applications require multi-criteria product filtering, secure authentication, and separate production deployments for frontend and backend microservices.",
    solutionOverview: "Architected a full-stack e-commerce platform with advanced product filtering, seamless checkout, and secure JWT-based authentication. Designed RESTful APIs using Express.js and MongoDB for product, inventory, and order management, deploying frontend on Vercel and backend on Render.",
    keyFeatures: [
      "Architected a full-stack e-commerce platform with advanced product filtering, seamless checkout, and secure JWT-based authentication for user and admin operations",
      "Designed scalable RESTful APIs using Express.js and MongoDB for efficient product, inventory, and lifecycle order management",
      "Deployed the React/Redux frontend on Vercel and the Node.js backend on Render, managing separate production environments and continuous integration"
    ],
    techStack: [
      "React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion", "Vercel", "Render"
    ],
    githubUrl: "https://github.com/abhishek-0512/shopnest",
    liveUrl: "https://shopnest-tau-pink.vercel.app/",
    architectureDiagram: {
      overview: "Decoupled Production Architecture (Vercel + Render)",
      nodes: [
        {
          title: "React Frontend (Vercel)",
          description: "Responsive client interface with product filtering, Redux cart state, and Framer Motion UI.",
          tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Vercel"]
        },
        {
          title: "Node.js API (Render)",
          description: "Express backend handling authentication, product catalog CRUD, and order lifecycle management.",
          tech: ["Node.js", "Express.js", "Render"]
        },
        {
          title: "MongoDB Atlas",
          description: "NoSQL database storing products, user credentials, and order records.",
          tech: ["MongoDB"]
        }
      ]
    },
    technicalChallenges: [
      {
        challenge: "Managing state across product filtering, shopping cart, and order checkout.",
        solution: "Utilized Redux Toolkit for centralized state management with persistent state syncing."
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
  totalRepositories: 8,
  starsEarned: 15,
  dsaRating: {
    platform: "LeetCode & GFG",
    rating: "200+",
    globalRank: "Active Solver",
    problemsSolved: 200
  },
  featuredRepos: [
    {
      name: "VirtualCourses",
      description: "AI-Powered Learning Management System with Gemini API & Cloudinary",
      stars: 8,
      forks: 3,
      language: "JavaScript"
    },
    {
      name: "shopnest",
      description: "Full-Stack E-Commerce platform built with React, Redux, Express & MongoDB",
      stars: 6,
      forks: 2,
      language: "JavaScript"
    }
  ]
};
