import { SkillCategory, ToolItem } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    description: "My core expertise: building fast, accessible, and responsive web apps",
    skills: [
      { name: "React.js / Next.js", level: 94, iconName: "react", color: "#61DAFB" },
      { name: "Tailwind CSS & Modern UI", level: 96, iconName: "tailwind", color: "#38BDF8" },
      { name: "TypeScript", level: 86, iconName: "typescript", color: "#3178C6" },
      { name: "HTML5 & Semantic CSS3", level: 98, iconName: "html", color: "#E34F26" },
      { name: "Framer Motion & Animations", level: 88, iconName: "framer", color: "#F0047F" },
      { name: "Zustand & State Management", level: 84, iconName: "redux", color: "#764ABC" },
    ],
  },
  {
    category: "Backend & Database (Learning)",
    description: "Actively studying and implementing server-side fundamentals & APIs",
    skills: [
      { name: "Node.js & Express Basics", level: 70, iconName: "node", color: "#339933" },
      { name: "MongoDB & Mongoose (CRUD)", level: 72, iconName: "mongodb", color: "#47A248" },
      { name: "RESTful API Integration", level: 85, iconName: "api", color: "#FF7639" },
      { name: "Next.js Server Actions & API Routes", level: 78, iconName: "server", color: "#8B5CF6" },
      { name: "PostgreSQL & Prisma (Exploring)", level: 55, iconName: "postgresql", color: "#4169E1" },
      { name: "Authentication (Auth.js/JWT)", level: 65, iconName: "shield", color: "#10B981" },
    ],
  },
  {
    category: "Architecture & Performance",
    description: "Ensuring code maintainability, fast load times, and clean UI engineering",
    skills: [
      { name: "Responsive & Mobile-First Design", level: 96, iconName: "blocks", color: "#3B82F6" },
      { name: "Web Vitals & Performance Optimization", level: 88, iconName: "gauge", color: "#F59E0B" },
      { name: "SEO & Open Graph Metadata", level: 90, iconName: "search", color: "#EC4899" },
      { name: "Git & Version Control Workflow", level: 88, iconName: "check-circle", color: "#6366F1" },
    ],
  },
];

export const toolsAndTech: ToolItem[] = [
  { name: "Next.js 14/15", category: "Framework", icon: "SiNextdotjs", color: "#FFFFFF" },
  { name: "React 19", category: "Library", icon: "SiReact", color: "#61DAFB" },
  { name: "TypeScript", category: "Language", icon: "SiTypescript", color: "#3178C6" },
  { name: "Tailwind CSS", category: "Styling", icon: "SiTailwindcss", color: "#38BDF8" },
  { name: "Node.js", category: "Runtime", icon: "SiNodedotjs", color: "#339933" },
  { name: "Express.js", category: "Backend", icon: "SiExpress", color: "#EEEEEE" },
  { name: "MongoDB", category: "Database", icon: "SiMongodb", color: "#47A248" },
  { name: "PostgreSQL", category: "Database", icon: "SiPostgresql", color: "#4169E1" },
  { name: "Prisma", category: "ORM", icon: "SiPrisma", color: "#2D3748" },
  { name: "Framer Motion", category: "Animation", icon: "SiFramer", color: "#FF7639" },
  { name: "Git & GitHub", category: "Version Control", icon: "SiGithub", color: "#F05032" },
  { name: "Docker", category: "DevOps", icon: "SiDocker", color: "#2496ED" },
  { name: "Postman", category: "API Testing", icon: "SiPostman", color: "#FF6C37" },
  { name: "Figma", category: "UI/UX Design", icon: "SiFigma", color: "#F24E1E" },
  { name: "Vercel", category: "Deployment", icon: "SiVercel", color: "#FFFFFF" },
  { name: "Zod & Hook Form", category: "Validation", icon: "SiZod", color: "#3E67B1" },
];
