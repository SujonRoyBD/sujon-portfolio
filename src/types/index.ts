export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  role: string;
  image: string;
  githubLink: string;
  liveLink: string;
  featured?: boolean;
  metrics?: string;
  category?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  iconName: string;
  color?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ToolItem {
  name: string;
  category: string;
  icon: string;
  color: string;
}

export interface SocialLink {
  label: string;
  url: string;
  bgColor: string;
  icon: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  titles: string[];
  status: string;
  bio: string;
  shortBio: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  socials: SocialLink[];
  stats: StatItem[];
  aboutHighlights: {
    title: string;
    description: string;
    icon: string;
  }[];
}
