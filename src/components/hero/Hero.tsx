import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { DeveloperTerminal } from './DeveloperTerminal';
import { ArrowRight, FileText, Github, Linkedin, Mail, Code, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onNavigateToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onNavigateToProjects }) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden flex items-center min-h-[75vh]">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 font-sans">
                {personalInfo.role}
              </p>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Primary CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onNavigateToProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-brand-600 text-white hover:bg-brand-500 dark:bg-brand-500 dark:text-slate-950 dark:hover:bg-brand-400 transition-all duration-200 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:scale-95"
              >
                <FileText className="w-4 h-4 text-brand-500" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links & Metrics */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-500 uppercase tracking-wider">Connect:</span>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 hover:border-brand-500/40 transition-all hover:scale-110"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 hover:border-brand-500/40 transition-all hover:scale-110"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 hover:border-brand-500/40 transition-all hover:scale-110"
                  aria-label="Email Direct"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                {personalInfo.socials.leetcode && (
                  <a
                    href={personalInfo.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:border-amber-500/40 transition-all hover:scale-110"
                    aria-label="LeetCode Profile"
                    title="LeetCode Profile"
                  >
                    <Code className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Quick Metrics */}
              <div className="flex items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{personalInfo.metrics.dsaSolved}+ DSA Solved</span>
                </div>
                <span>•</span>
                <div>
                  <span className="text-brand-500 font-bold">{personalInfo.metrics.cgpa}</span> CGPA
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Component */}
          <div className="lg:col-span-5 w-full">
            <DeveloperTerminal />
          </div>

        </div>
      </div>
    </section>
  );
};
