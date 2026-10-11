import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { Sparkles, Heart } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <FaGithub className="w-4 h-4" />;
      case "linkedin":
        return <FaLinkedinIn className="w-4 h-4" />;
      case "twitter":
        return <FaTwitter className="w-4 h-4" />;
      case "whatsapp":
        return <FaWhatsapp className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#070a12] pt-16 pb-12 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-t from-[#FF7639]/10 via-[#8B5CF6]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF7639] to-[#8B5CF6] text-white">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="font-mono font-bold tracking-tight">
                {personalInfo.name.split(" ")[0]}
                <span className="text-[#FF7639]">.dev</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {personalInfo.shortBio}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-400">
                {personalInfo.status}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-[#FF7639] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#FF7639] transition-colors">
                  Core Skills
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-[#FF7639] transition-colors">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#FF7639] transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF7639] transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Connect</h4>
            <div className="flex flex-wrap gap-2.5">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-[#141b2b] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#FF7639]/50 hover:bg-[#FF7639]/10 transition-all"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-500 pt-2">
              Based in {personalInfo.location}. Available globally for remote collaboration.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered with Next.js 14 & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
