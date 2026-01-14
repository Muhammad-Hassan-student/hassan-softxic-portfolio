export type Theme = 'dark-pro' | 'light-clean' | 'cyber-neon' | 'minimal-mono';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  projects: number;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  experience: number;
  projects: number;
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'tools';
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  metrics: {
    performance: string;
    speed: string;
    scale: string;
  };
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface Failure {
  id: string;
  title: string;
  description: string;
  lesson: string;
  year: number;
}

export interface ContactForm {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

// Theme configuration
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
  };
  className: string;
}