import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { achievementsData } from '../../data/portfolioData';
import { Trophy, Award, Flame, CheckCircle2 } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-100/50 dark:bg-[#070a12]/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Honors & Credentials"
          title="Achievements & Certifications"
          subtitle="Hackathon accomplishments, coding achievements, and professional certifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((item, idx) => (
            <Card key={idx} className="flex flex-col justify-between p-6 space-y-4">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Issued by {item.issuer}
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-emerald-500 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Accomplishment</span>
              </div>

            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
