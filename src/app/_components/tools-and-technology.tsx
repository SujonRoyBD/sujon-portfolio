"use client";

import { motion } from "framer-motion";
import { toolsAndTech } from "@/data/skills";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiFramer,
  SiGit,
  SiDocker,
  SiPostman,
  SiFigma,
  SiVercel,
  SiZod,
} from "react-icons/si";

export default function ToolsAndTechnology() {
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case "SiNextdotjs":
        return <SiNextdotjs className="w-8 h-8 text-white" />;
      case "SiReact":
        return <SiReact className="w-8 h-8 text-[#61DAFB]" />;
      case "SiTypescript":
        return <SiTypescript className="w-8 h-8 text-[#3178C6]" />;
      case "SiTailwindcss":
        return <SiTailwindcss className="w-8 h-8 text-[#38BDF8]" />;
      case "SiNodedotjs":
        return <SiNodedotjs className="w-8 h-8 text-[#339933]" />;
      case "SiExpress":
        return <SiExpress className="w-8 h-8 text-slate-200" />;
      case "SiMongodb":
        return <SiMongodb className="w-8 h-8 text-[#47A248]" />;
      case "SiPostgresql":
        return <SiPostgresql className="w-8 h-8 text-[#4169E1]" />;
      case "SiPrisma":
        return <SiPrisma className="w-8 h-8 text-[#2D3748]" />;
      case "SiFramer":
        return <SiFramer className="w-8 h-8 text-[#FF7639]" />;
      case "SiGithub":
      case "SiGit":
        return <SiGit className="w-8 h-8 text-[#F05032]" />;
      case "SiDocker":
        return <SiDocker className="w-8 h-8 text-[#2496ED]" />;
      case "SiPostman":
        return <SiPostman className="w-8 h-8 text-[#FF6C37]" />;
      case "SiFigma":
        return <SiFigma className="w-8 h-8 text-[#F24E1E]" />;
      case "SiVercel":
        return <SiVercel className="w-8 h-8 text-white" />;
      case "SiZod":
        return <SiZod className="w-8 h-8 text-[#3E67B1]" />;
      default:
        return <SiNextdotjs className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section id="tools" className="site-section bg-[#0a0e1a]/80 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#FF7639] font-bold">
            Daily Driver Toolkit
          </span>
          <h2 className="site-heading mt-2">Tools & Technologies</h2>
          <div className="site-heading-divider" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto -mt-4 mb-12">
            The software, frameworks, databases, and development platforms I leverage every day to build resilient web products.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {toolsAndTech.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center group relative border border-white/5 hover:border-[#FF7639]/40 cursor-default"
            >
              {/* Subtle top indicator on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${tool.color}15 0%, transparent 70%)`,
                }}
              />

              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform relative z-10">
                {getToolIcon(tool.icon)}
              </div>

              <span className="text-xs font-bold text-white group-hover:text-[#FF7639] transition-colors relative z-10">
                {tool.name}
              </span>

              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-1 relative z-10">
                {tool.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Additional highlight banner */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h4 className="text-base font-bold text-white">
              Always adopting modern web standards & best practices
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Proficient in Next.js Server Components, Turbopack, REST/GraphQL design, and CI/CD automated deployments.
            </p>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF7639] to-[#8B5CF6] text-white text-xs font-semibold shadow-md shadow-[#FF7639]/20 hover:opacity-95"
          >
            See Them In Action →
          </a>
        </div>
      </div>
    </section>
  );
}
