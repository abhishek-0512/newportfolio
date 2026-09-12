import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { experiences } from '../../data/portfolioData';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Work History"
          title="Experience"
          subtitle="Software development internships and technical roles."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="p-8">
              
              {/* Header info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    {exp.role} <span className="text-brand-600 dark:text-brand-400">@ {exp.company}</span>
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="pt-4 space-y-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 mr-2">Technologies Used:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <Badge key={tIdx} variant="outline" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>

            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
