import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { navLinks } from './Navbar';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onSelectSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    onSelectSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100/80 dark:bg-[#070a12] border-t border-slate-200 dark:border-slate-800/80 pt-12 pb-10 transition-colors mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
          
          {/* Brand & Role */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-bold font-mono text-slate-900 dark:text-white">
              {personalInfo.name}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              {personalInfo.role} — {personalInfo.college}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 transition-all hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 transition-all hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 transition-all hover:scale-110"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-medium rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-brand-500/50 hover:text-brand-500 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/40 dark:border-slate-800/40 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 dark:text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed & built with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
            <span>for software engineering.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
