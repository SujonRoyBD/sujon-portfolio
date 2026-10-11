"use client";

import { useState } from "react";
import { MessageSquare, X, Mail, Phone, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function ContactFab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-72 rounded-2xl glass-card p-4 shadow-2xl border border-white/15 bg-[#0e1424]/95 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <div>
                <h4 className="text-sm font-semibold text-white">Let's Connect</h4>
                <p className="text-xs text-emerald-400 font-medium">⚡ Replies in &lt; 2 hours</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-white/5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#FF7639]/30 transition-all text-sm text-slate-200 hover:text-white group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FF7639]/15 text-[#FF7639] flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-400">Email Me</div>
                  <div className="truncate text-xs font-mono text-slate-200">
                    {personalInfo.email}
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
              </a>

              <a
                href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-sm text-slate-200 hover:text-white group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                  <FaWhatsapp className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-400">WhatsApp</div>
                  <div className="text-xs font-mono text-slate-200">Instant Chat</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full mt-2 py-2 rounded-lg bg-gradient-to-r from-[#FF7639] to-[#8B5CF6] text-white text-xs font-semibold shadow-md shadow-[#FF7639]/20 hover:opacity-95"
              >
                Open Full Contact Form
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open quick contact menu"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#121826] border border-white/15 text-white shadow-xl shadow-black/40 hover:border-[#FF7639]/50 transition-all"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <MessageSquare className="w-4 h-4 text-[#FF7639]" />
        <span className="text-xs font-semibold tracking-wide">Quick Chat</span>
      </motion.button>
    </div>
  );
}
