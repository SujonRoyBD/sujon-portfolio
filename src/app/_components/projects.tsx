"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import { ExternalLink, X, Activity } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const categories = ["All", "Full Stack", "Frontend", "AI & Cloud"] as const;

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (!selectedProject) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="site-section relative py-20">
      {/* Background glow orb */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#FF7639]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#FF7639] font-bold">
            Selected Creations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF7639] to-[#8B5CF6] mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto mt-4 mb-10">
            A hand-picked selection of responsive frontend applications, modern UI storefronts,
            and full-stack projects I've built while advancing my web development skills.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${activeTab === cat
                ? "bg-gradient-to-r from-[#FF7639] to-[#8B5CF6] text-white shadow-md shadow-[#FF7639]/20"
                : "bg-[#121826] text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sticky Stacked Projects Container */}
        <div className="relative flex flex-col gap-12 pb-12">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                // sticky positioning + dynamic top offset stack effect
                style={{ top: `${80 + index * 24}px` }}
                className="sticky rounded-3xl bg-[#090d16]/95 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                  {/* Left: Device Mockup / Image Preview */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#0c1220] border border-white/10 group cursor-pointer"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-center object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Right: Content details matching reference UI */}
                  <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FF7639]/20 text-[#FF7639] border border-[#FF7639]/30">
                        {project.category}
                      </span>
                      {project.metrics && (
                        <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                          <Activity className="w-3.5 h-3.5" />
                          <span>{project.metrics}</span>
                        </div>
                      )}
                    </div>

                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-2xl sm:text-3xl font-bold text-[#60a5fa] hover:text-[#93c5fd] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {project.tagline || project.description}
                    </p>

                    {/* Tech Badges / Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md bg-[#162032]/80 text-slate-300 text-[11px] font-semibold tracking-wider uppercase border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions Row */}
                    <div className="flex items-center gap-3 pt-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="p-3 rounded-xl bg-[#141c2c] hover:bg-[#1a253a] border border-white/10 text-slate-300 hover:text-white transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="py-3 px-4 rounded-xl bg-[#141c2c] hover:bg-[#1a253a] border border-white/10 text-slate-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
                      >
                        Details
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Dialog for Project Details (Rendered via Portal to escape all stacking contexts & overlay Navbar) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <div
                role="dialog"
                aria-modal="true"
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all overflow-y-auto"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#0e1526] border border-white/15 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col my-auto"
                >
                  <div className="relative aspect-[16/9] w-full bg-[#0a0f1d] shrink-0">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      aria-label="Close dialog"
                      className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 text-white hover:bg-black/95 hover:scale-105 active:scale-95 transition-all shadow-lg border border-white/20 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-6 overflow-y-auto space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FF7639]/20 text-[#FF7639] border border-[#FF7639]/30">
                        {selectedProject.category}
                      </span>
                      <span className="text-xs font-medium text-slate-400">
                        Role: {selectedProject.role}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {selectedProject.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Technologies & Libraries
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-lg bg-[#162034] border border-white/10 text-xs text-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:opacity-95"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Visit Live Application</span>
                      </a>

                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-5 rounded-xl bg-[#162034] hover:bg-[#1d2b46] border border-white/10 text-white text-sm font-semibold flex items-center gap-2"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}