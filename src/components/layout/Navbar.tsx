import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/portfolioData';
import { Sun, Moon, Menu, X, FileText, Code2 } from 'lucide-react';

export interface NavItem {
  id: string;
  name: string;
}

export const navLinks: NavItem[] = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'education', name: 'Education' },
  { id: 'experience', name: 'Experience' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'achievements', name: 'Achievements' },
  { id: 'contact', name: 'Contact' },
];

interface NavbarProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onSelectSection,
  onOpenResume,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onSelectSection(sectionId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-white/90 dark:bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm py-3 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group text-slate-900 dark:text-white font-mono font-bold text-lg tracking-tight focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-105 transition-transform">
            <Code2 className="w-4 h-4" />
          </div>
          <span>
            {personalInfo.name.split(' ')[0]}
            <span className="text-brand-500">.dev</span>
          </span>
        </button>

        {/* Desktop Single-Section Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-600 text-white dark:bg-brand-500 dark:text-slate-950 shadow-md shadow-brand-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-700"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Resume Modal CTA */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-slate-900 text-white dark:bg-brand-500 dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-brand-400 transition-all shadow-sm hover:shadow-brand-500/20 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 p-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold text-left transition-colors ${
                    isActive
                      ? 'bg-brand-500/10 text-brand-500 font-bold border border-brand-500/20'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-brand-500 text-slate-950 hover:bg-brand-400"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
