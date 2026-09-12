import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { skillCategories } from '../../data/portfolioData';
import { Code, Layout, Server, Database, Cloud } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.FC<{ className?: string }>> = {
    "Programming Languages": Code,
    "Frontend": Layout,
    "Backend": Server,
    "Databases": Database,
    "DevOps & Cloud": Cloud,
  };

  const categoriesList = ['All', ...skillCategories.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Skills"
          title="Skills"
          subtitle="Technical skills and technologies I work with."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white dark:bg-brand-500 dark:text-slate-950 font-semibold shadow-md shadow-brand-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, idx) => {
            const IconComponent = categoryIcons[group.category] || Code;
            return (
              <Card key={idx} className="flex flex-col justify-between p-6">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800/80">
                    <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {group.skills.length} technical skills
                      </p>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill, sIdx) => (
                      <Badge
                        key={sIdx}
                        variant={skill.highlight ? 'primary' : 'default'}
                        size="md"
                        highlight={skill.highlight}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};
