"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import {
  ArrowRight,
  Download,
  Terminal,
  Code2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect loop
  useEffect(() => {
    const currentTitle = personalInfo.titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        if (displayedText.length === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <FaGithub className="w-5 h-5" />;
      case "linkedin":
        return <FaLinkedinIn className="w-5 h-5" />;
      case "twitter":
        return <FaTwitter className="w-5 h-5" />;
      case "whatsapp":
        return <FaWhatsapp className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Neon Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#FF7639]/15 rounded-full blur-[120px] pointer-events-none ambient-glow" />
      <div className="absolute top-28 right-10 w-[550px] h-[550px] bg-[#8B5CF6]/18 rounded-full blur-[140px] pointer-events-none ambient-glow" style={{ animationDelay: "-6s" }} />

      {/* Decorative Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#162032]/80 border border-[#22C55E]/30 text-emerald-400 text-xs sm:text-sm font-medium mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Greeting & Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Hi, I'm{" "}
              <span className="text-gradient">
                {personalInfo.name}
              </span>
            </h1>

            {/* Dynamic Typing Subtitle */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-mono font-semibold text-slate-300 min-h-[44px] mb-6">
              <Terminal className="w-6 h-6 text-[#FF7639] shrink-0" />
              <span>{displayedText}</span>
              <span className="inline-block w-2.5 h-7 bg-[#FF7639] animate-pulse" />
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
              {personalInfo.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-[#FF7639] to-[#8B5CF6] shadow-lg shadow-[#FF7639]/25 hover:shadow-xl hover:shadow-[#FF7639]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Sujon_Roy_Resume.pdf"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-[#121826]/80 hover:bg-[#1a2337] border border-white/10 hover:border-[#FF7639]/40 hover:text-white shadow-sm transition-all flex items-center justify-center gap-2 group"
              >
                <Download className="w-4 h-4 text-[#FF7639] transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-medium text-sm sm:text-base text-slate-400 hover:text-white transition-colors text-center"
              >
                Explore Projects →
              </a>
            </div>

            {/* Social Links With Neon Glow */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mr-1">
                Find me on
              </span>
              {personalInfo.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-[#121826] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#FF7639] hover:bg-[#FF7639]/15 hover:shadow-lg hover:shadow-[#FF7639]/20 transition-all transform hover:-translate-y-1"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Profile Showcase & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Glowing Backdrop Border */}
            <div className="relative w-[300px] h-[390px] sm:w-[370px] sm:h-[470px]">
              {/* Soft Ambient Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#FF7639]/20 via-[#8B5CF6]/20 to-[#38BDF8]/15 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

              {/* Card Container */}
              <div className="relative w-full h-full rounded-3xl p-[2px] bg-gradient-to-b from-[#FF7639]/50 via-[#8B5CF6]/30 to-white/10 shadow-2xl">
                <div className="w-full h-full rounded-[22px] bg-[#0c1220] overflow-hidden relative flex items-end justify-center">
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10" />

                  {/* Profile Image */}
                  <Image
                    src="/assets/images/hero/profile-studio.png"
                    alt={personalInfo.name}
                    width={400}
                    height={500}
                    priority
                    className="w-full h-full object-cover object-top relative z-10 transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Badge 1: Next.js & React */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-6 glass-card px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-xl border border-white/10 backdrop-blur-xl bg-[#0c1322]/90 z-20"
              >
                <div className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs border border-white/10">
                  ▲
                </div>
                <div>
                  <div className="text-[10px] font-medium text-slate-400">Core Focus</div>
                  <div className="text-xs font-bold text-white">Next.js & React 19</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Frontend Developer & Backend Learner */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -right-3 sm:-right-5 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-xl border border-white/10 backdrop-blur-xl bg-[#0c1322]/90 z-20"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF7639] to-[#8B5CF6] text-white flex items-center justify-center shadow-md">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-medium text-slate-400">Role</div>
                  <div className="text-xs font-bold text-white">Frontend Dev (Learning Backend)</div>
                </div>
              </motion.div>

              {/* Floating Badge 3: Active Learner / Available */}
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="hidden sm:flex absolute top-1/2 -right-8 glass-card px-3 py-1.5 rounded-xl items-center gap-2 shadow-lg border border-emerald-500/20 backdrop-blur-xl bg-[#0c1322]/90 z-20"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-slate-200">Open to Work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
