"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import {
  Code2,
  Database,
  Layers,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function MySkills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Skills" },
    ...skillCategories.map((c) => ({ id: c.category, label: c.category })),
  ];

  const displayedCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="site-section relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#FF7639]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#FF7639] font-bold">
            Technical Proficiency
          </span>
          <h2 className="site-heading mt-2">Skills & Expertise</h2>
          <div className="site-heading-divider" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto -mt-4 mb-10">
            A comprehensive breakdown of my programming capabilities, framework masteries, and production competencies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === tab.id
                  ? "bg-gradient-to-r from-[#FF7639] to-[#8B5CF6] text-white shadow-md shadow-[#FF7639]/20"
                  : "bg-[#121826] text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayedCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF7639]/20 to-[#8B5CF6]/20 border border-white/10 flex items-center justify-center text-white">
                    {idx === 0 ? (
                      <Code2 className="w-5 h-5 text-[#FF7639]" />
                    ) : idx === 1 ? (
                      <Database className="w-5 h-5 text-[#8B5CF6]" />
                    ) : (
                      <Layers className="w-5 h-5 text-[#38BDF8]" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-slate-200 flex items-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full inline-block"
                            style={{ backgroundColor: skill.color || "#FF7639" }}
                          />
                          {skill.name}
                        </span>
                        <span className="font-mono text-slate-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="w-full h-2 rounded-full bg-[#1e273a] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, #FF7639 0%, ${skill.color || "#8B5CF6"} 100%)`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Verified Experience
                </span>
                <span className="font-mono text-slate-500">
                  {cat.skills.length} skills listed
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
