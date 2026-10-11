"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import {
  Code,
  Layout,
  Zap,
  Users,
  Award,
  Sparkles,
  MapPin,
  Mail,
  GraduationCap,
} from "lucide-react";

export default function AboutMe() {
  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="w-5 h-5 text-[#FF7639]" />;
      case "layout":
        return <Layout className="w-5 h-5 text-[#8B5CF6]" />;
      case "zap":
        return <Zap className="w-5 h-5 text-[#F59E0B]" />;
      case "users":
        return <Users className="w-5 h-5 text-[#10B981]" />;
      default:
        return <Award className="w-5 h-5 text-[#FF7639]" />;
    }
  };

  return (
    <section id="about" className="site-section bg-[#0a0e1a]/60 relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#FF7639] font-bold">
            Get to Know Me
          </span>
          <h2 className="site-heading mt-2">About Me</h2>
          <div className="site-heading-divider" />
        </div>

        {/* Top Stats Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF7639]/40 to-transparent group-hover:via-[#FF7639] transition-all" />
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight flex items-center justify-center">
                <span>{stat.value}</span>
                <span className="text-[#FF7639]">{stat.suffix}</span>
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-1">
                {stat.label}
              </div>
              <p className="text-xs text-slate-400 line-clamp-2">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Narrative & Highlights Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Biography text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Crafting engaging frontend interfaces while{" "}
              <span className="text-gradient">expanding into full-stack</span>
            </h3>

            <p className="text-slate-300 leading-relaxed text-base">
              {personalInfo.bio}
            </p>

            <p className="text-slate-400 leading-relaxed text-sm">
              I view every web application as a blend of artistic design and thoughtful engineering. While frontend is my primary domain—focusing on responsive layouts, smooth micro-interactions, and accessibility—I am equally passionate about learning how backend systems, REST APIs, and databases come together to power complete digital products.
            </p>

            {/* Quick Facts List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-[#FF7639]" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <Mail className="w-4 h-4 text-[#8B5CF6]" />
                <span className="truncate">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>B.Sc. in Computer Science</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Frontend & Backend Learner</span>
              </div>
            </div>
          </motion.div>

          {/* Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {personalInfo.aboutHighlights.map((item, idx) => (
              <div
                key={item.title}
                className="glass-card p-5 rounded-2xl border border-white/5 hover:border-[#8B5CF6]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {getHighlightIcon(item.icon)}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
