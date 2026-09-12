import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { educationData } from '../../data/portfolioData';
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-100/50 dark:bg-[#070a12]/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Progression"
          title="Education"
          subtitle="My academic journey from Class 10th and 12th to B.Tech Computer Science Engineering."
        />

        {/* Timeline Stepper Badge */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
            <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-500">10th</span>
            <span className="text-slate-400">→</span>
            <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-500">12th</span>
            <span className="text-slate-400">→</span>
            <span className="px-2 py-0.5 rounded bg-brand-600 text-white dark:bg-brand-500 dark:text-slate-950 font-bold">B.Tech (Current)</span>
          </div>
        </div>

        {/* Education Timeline / Cards Stack */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, idx) => {
            const isBTech = idx === 0;

            return (
              <Card
                key={idx}
                className={`p-8 relative overflow-hidden transition-all duration-300 ${
                  isBTech
                    ? 'glass-card border-brand-500/30 dark:border-brand-500/30'
                    : 'glass-card'
                }`}
              >
                {/* Top Accent Gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    isBTech
                      ? 'bg-gradient-to-r from-brand-500 via-indigo-500 to-cyan-500'
                      : idx === 1
                      ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500'
                      : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500'
                  }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800/80">
                  
                  {/* Institution & Degree */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3.5 rounded-2xl shrink-0 ${
                        isBTech
                          ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <GraduationCap className="w-7 h-7" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-500">
                          Step 0{3 - idx}
                        </span>
                        {edu.board && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            {edu.board}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                        {edu.degree}
                      </h3>

                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                        {edu.institution}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Score / CGPA / Percentage Badge */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between bg-slate-100 dark:bg-slate-900/90 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0">
                    <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      {edu.scoreLabel}
                    </span>
                    <span className="text-2xl font-extrabold text-brand-600 dark:text-brand-400 font-mono">
                      {edu.scoreValue}
                    </span>
                  </div>

                </div>

                {/* Relevant Coursework / Subjects */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="space-y-3 pt-4">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-brand-500" />
                      <span>{isBTech ? 'Relevant Academic Coursework' : 'Subjects Studied'}</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, cIdx) => (
                        <Badge key={cIdx} variant={isBTech ? 'primary' : 'outline'} size="sm">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};
