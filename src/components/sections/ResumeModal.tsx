import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, educationData, skillCategories, experiences } from '../../data/portfolioData';
import { X, Download, FileText, ExternalLink, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    onShowToast("Downloading Alex Morgan — Software Engineer Resume (PDF)...");
    // Simulated PDF download trigger
    const element = document.createElement("a");
    const file = new Blob([
      `Alex Morgan — Software Engineer & CS Student Resume\nDegree: ${personalInfo.degree}\nCollege: ${personalInfo.college}\nCGPA: ${personalInfo.metrics.cgpa}\nGitHub: ${personalInfo.socials.github}`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Alex_Morgan_Resume_SWE.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

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

        {/* Resume Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col"
        >
          
          {/* Header */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-500" />
              <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                Resume Preview — {personalInfo.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-600 text-white dark:bg-brand-500 dark:text-slate-950 text-xs font-semibold hover:bg-brand-500 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
              
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Paper View Container */}
          <div className="p-6 sm:p-10 space-y-6 text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed">
            
            {/* Candidate Header */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 font-sans">
                {personalInfo.role} (Graduating {personalInfo.graduationYear})
              </p>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1 font-mono">
                <span>📧 {personalInfo.socials.email}</span>
                <span>•</span>
                <span>📍 {personalInfo.location}</span>
                <span>•</span>
                <span>🔗 {personalInfo.socials.github}</span>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Executive Summary
              </h2>
              <p className="text-slate-700 dark:text-slate-300">
                {personalInfo.bio}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Education
              </h2>
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {edu.degree} — {edu.field}
                    </h3>
                    <p className="text-xs text-slate-500">{edu.institution} ({edu.location})</p>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <span className="font-bold text-brand-500">CGPA: {edu.cgpa}</span>
                    <p className="text-slate-500">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Engineering Experience
              </h2>
              {experiences.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {exp.role} <span className="text-brand-500">@ {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 pl-4 list-disc text-slate-700 dark:text-slate-300 text-xs">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Skills Overview */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Technical Competencies
              </h2>
              <div className="space-y-1 text-xs">
                <p><strong>Languages:</strong> Java, TypeScript, JavaScript, C, C++, Python, SQL</p>
                <p><strong>Frontend:</strong> React.js, Next.js, Redux Toolkit, Tailwind CSS, HTML5/CSS3</p>
                <p><strong>Backend:</strong> Node.js, Express.js, REST APIs, WebSockets, JWT Auth</p>
                <p><strong>Databases & Cloud:</strong> MongoDB, PostgreSQL, Redis, Docker, AWS (S3, EC2)</p>
                <p><strong>Core CS:</strong> Data Structures & Algorithms, System Design, OOP, DBMS, Networks</p>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <span className="text-xs text-slate-500 font-mono">
              Ready for immediate hire (Graduating 2026)
            </span>

            <button
              onClick={handleDownload}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-brand-600 text-white dark:bg-brand-500 dark:text-slate-950 hover:bg-brand-500"
            >
              Download PDF Copy
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
