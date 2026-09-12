import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { personalInfo } from '../../data/portfolioData';
import { User, Code2, Cpu, Rocket, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const interests = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building responsive, modern, and scalable web applications from front to back."
    },
    {
      icon: Cpu,
      title: "Backend & RESTful APIs",
      description: "Designing efficient server-side architecture, data pipelines, and REST APIs."
    },
    {
      icon: Rocket,
      title: "AI Integration & Products",
      description: "Integrating intelligent AI models into web platforms to solve practical problems."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Introduction"
          title="About Me"
          subtitle="A brief introduction into who I am and what I enjoy building."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Who I Am Card */}
          <Card hoverEffect={false} className="p-8">
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed">
              <p>
                Hi! I'm <span className="font-extrabold text-slate-900 dark:text-white">{personalInfo.name}</span>, a final-year Computer Science and Engineering student.
              </p>
              <p>
                I am deeply interested in software engineering, modern web technologies, and backend system architecture.
              </p>
              <p>
                I enjoy building practical digital products—ranging from full-stack web applications and RESTful APIs to AI-driven software solutions that deliver seamless user experiences.
              </p>
            </div>
          </Card>

          {/* Main Interests */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-6 space-y-3">
                  <div className="p-3 rounded-xl bg-brand-500/10 text-brand-500 border border-brand-500/20 w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
