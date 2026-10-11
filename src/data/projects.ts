import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "devflow-qa",
    title: "DevFlow — Developer Q&A Platform",
    tagline: "StackOverflow-inspired collaborative ecosystem with responsive UI and AI-assisted answers.",
    description:
      "A comprehensive knowledge-sharing platform featuring smart tag recommendations, global vector search, reputation badges, and AI-assisted solutions. Built as an exploration of Next.js 14, TypeScript, and MongoDB backend integration.",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose", "OpenAI API", "Clerk Auth"],

    role: "Frontend & Next.js Developer",
    image: "/assets/images/projects/ai-generate.png",
    githubLink: "https://github.com/sujon-sheikh/devflow-qa-platform",
    liveLink: "https://devflow-demo.vercel.app",
    featured: true,
    metrics: "2.4k+ monthly active users • 99.8% uptime",
    category: "Full Stack",
  },
  {
    id: "nexus-fintech",
    title: "NexusPay — Neo-Banking & Crypto Investment Portal",
    tagline: "Modern neo-banking and investment portal with live interactive financial charts.",
    description:
      "Designed and engineered a sleek fintech web interface with interactive Recharts SVG charts, instant transaction simulator, bank statement export, and responsive design systems.",
    technologies: ["Next.js", "React 19", "PostgreSQL", "Prisma", "Tailwind CSS", "Recharts", "Framer Motion"],

    role: "Frontend UI Engineer",
    image: "/assets/images/projects/E-commerce.png",
    githubLink: "https://github.com/sujon-sheikh/nexuspay-crypto-portal",
    liveLink: "https://nexuspay-demo.vercel.app",
    featured: true,
    metrics: "$1.2M+ simulated volume • 0.3s page load",
    category: "Frontend",
  },
  {
    id: "shopvibe-ecommerce",
    title: "ShopVibe — High-Performance Headless E-Commerce",
    tagline: "High-performance headless e-commerce storefront with instant cart sync and dynamic filters.",
    description:
      "Modern e-commerce storefront integrated with Stripe payments, search autocomplete, category facet filters, responsive image optimization, and persistent user shopping cart state via Zustand.",
    technologies: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Zustand", "Stripe API", "Framer Motion"],

    role: "Frontend Developer & UI Designer",
    image: "/assets/images/projects/discountme.png",
    githubLink: "https://github.com/sujon-sheikh/shopvibe-headless-store",
    liveLink: "https://shopvibe-demo.vercel.app",
    featured: true,
    metrics: "100 Lighthouse Performance • 0 Layout Shifts",
    category: "Frontend",
  },
];
