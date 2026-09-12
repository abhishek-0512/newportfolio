export interface PersonalInfo {
  name: string;
  role: string;
  college: string;
  graduationYear: string;
  degree: string;
  location: string;
  availability: string;
  bio: string;
  tagline: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    leetcode?: string;
    twitter?: string;
    resumeUrl: string;
  };
  metrics: {
    dsaSolved: number;
    projectsCompleted: number;
    internships: number;
    cgpa: string;
  };
}

export interface ArchitectureNode {
  title: string;
  description: string;
  tech: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'fullstack' | 'systems';
  featured: boolean;
  shortDescription: string;
  problemSolved: string;
  solutionOverview: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  architectureDiagram?: {
    overview: string;
    nodes: ArchitectureNode[];
  };
  technicalChallenges: {
    challenge: string;
    solution: string;
  }[];
  badgeText?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  board?: string;
  location: string;
  period: string;
  scoreLabel: string; // "CGPA" or "Percentage"
  scoreValue: string; // "8.0 / 10" or "91.4%"
  cgpa?: string;
  highlights?: string[];
  coursework?: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Intermediate';
    iconName?: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  technologies: string[];
}

export interface AchievementItem {
  title: string;
  category: 'Hackathon' | 'Competitive Programming' | 'Certification' | 'Open Source';
  issuer: string;
  date: string;
  description: string;
  badge?: string;
  link?: string;
}

export interface GitHubStats {
  username: string;
  totalContributions: number;
  totalRepositories: number;
  starsEarned: number;
  dsaRating: {
    platform: string;
    rating: string;
    globalRank: string;
    problemsSolved: number;
  };
  featuredRepos: {
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: string;
  }[];
}
