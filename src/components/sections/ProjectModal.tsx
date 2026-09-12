import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types/portfolio';
import { Badge } from '../ui/Badge';
import {
  X, ExternalLink, Github, Cpu, AlertTriangle, Lightbulb,
  CheckCircle2, Layers, Server, ArrowRight, ShieldCheck, Database
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  // Handle ESC key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col"
        >
          
          {/* Sticky Modal Header */}
          <div className="sticky top-0 z-20 px-6 py-5 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                  {project.subtitle}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                {project.title}
              </h2>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Quick Action Links & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 6).map((tech, idx) => (
                  <Badge key={idx} variant="primary" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-200 hover:bg-slate-800 text-xs font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repo</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 text-white dark:bg-brand-500 dark:text-slate-950 hover:bg-brand-500 text-xs font-semibold transition-colors shadow-md shadow-brand-500/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Overview & Problem/Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Problem Card */}
              <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The Problem</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>

              {/* Solution Card */}
              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                  <Lightbulb className="w-4 h-4" />
                  <span>The Solution</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.solutionOverview}
                </p>
              </div>

            </div>

            {/* Visual Architecture Diagram Section */}
            {project.architectureDiagram && (
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-brand-500" />
                    <span>System Architecture & Flow</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    {project.architectureDiagram.overview}
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {project.architectureDiagram.nodes.map((node, nIdx) => (
                      <div
                        key={nIdx}
                        className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3 relative group hover:border-brand-500/50 transition-colors"
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono text-brand-400 font-semibold uppercase">
                            Node 0{nIdx + 1}
                          </span>
                          <h4 className="text-xs font-bold text-white leading-tight">
                            {node.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 leading-snug mt-1">
                            {node.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-800">
                          {node.tech.map((t, tIdx) => (
                            <span key={tIdx} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Key Features List */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Key Platform Capabilities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-500 shrink-0 mt-1.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Challenges & Solutions */}
            {project.technicalChallenges.length > 0 && (
              <div className="space-y-4 pt-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-500" />
                  <span>Engineering Challenges & Solutions</span>
                </h3>
                <div className="space-y-3">
                  {project.technicalChallenges.map((item, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 text-xs sm:text-sm"
                    >
                      <p className="font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-rose-500/10 text-[10px] font-mono uppercase">Challenge</span>
                        {item.challenge}
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 pl-4 border-l-2 border-brand-500">
                        <strong className="text-slate-900 dark:text-white">Resolution: </strong>
                        {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Complete Tech Stack Breakdown */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                Complete Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <Badge key={idx} variant="outline" size="md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              Close Details
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
