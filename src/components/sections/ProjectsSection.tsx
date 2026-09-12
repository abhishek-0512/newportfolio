import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { projects } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { Github, ExternalLink, ArrowRight, Cpu, Sparkles, CheckCircle2, AlertTriangle } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-slate-100/40 dark:bg-[#080c16]/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Software Products"
          title="Projects"
          subtitle="Software applications and platforms I have built."
        />

        {/* Project Cards Grid */}
        <div className="space-y-10 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="p-8 rounded-3xl relative overflow-hidden glass-card hover:border-brand-500/40 transition-all duration-300 space-y-6"
            >
              {/* Top Accent Gradient */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 ${
                  project.id === 'virtual-courses'
                    ? 'bg-gradient-to-r from-brand-500 via-indigo-500 to-cyan-500'
                    : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500'
                }`}
              />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-4">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                    {project.badgeText}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white pt-2">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-brand-600 text-white dark:bg-brand-500 dark:text-slate-950 hover:bg-brand-500 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Problem Solved */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs md:text-sm">
                <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5 mb-1">
                  <AlertTriangle className="w-4 h-4" />
                  Problem Solved:
                </span>
                <p className="text-slate-700 dark:text-slate-300">
                  {project.problemSolved}
                </p>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Key Features:
                </h4>
                <div className="space-y-2">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-2">Technologies Used:</span>
                  {project.techStack.map((tech, idx) => (
                    <Badge key={idx} variant="primary" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-500 hover:text-brand-400"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>View Architecture Breakdown</span>
                </button>
              </div>

            </Card>
          ))}
        </div>

      </div>

      {/* Deep-dive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
};
