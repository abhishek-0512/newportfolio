import React, { useState } from 'react';
import { Terminal, FileCode, Cpu, Check, Copy, Play } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const DeveloperTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'profile' | 'architecture'>('terminal');
  const [copied, setCopied] = useState(false);
  const [running, setRunning] = useState(false);

  const profileCode = `// ${personalInfo.name} — Candidate Profile
const candidate = {
  name: "${personalInfo.name}",
  degree: "${personalInfo.degree}",
  college: "${personalInfo.college}",
  gradYear: ${personalInfo.graduationYear},
  cgpa: "${personalInfo.metrics.cgpa}",
  
  skills: {
    languages: ["Java", "JavaScript", "TypeScript", "C", "SQL"],
    frontend: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    devops: ["Git", "GitHub Actions", "Docker", "AWS", "Vercel", "Render"]
  },

  latestInternship: "Software Developer Intern @ Payvista Technology Solutions",
  isOpenToOpportunities: true
};`;

  const architectureJson = `{
  "platform": "Virtual Courses LMS + ShopNest E-Commerce",
  "techStack": ["React", "Redux", "Node.js", "Express", "MongoDB", "MySQL"],
  "aiIntegration": "Google Gemini AI API (Virtual Tutor)",
  "automation": "WhatsApp Business API & GitHub Actions CI/CD"
}`;

  const copyCode = () => {
    const textToCopy = activeTab === 'profile' ? profileCode : architectureJson;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCommand = () => {
    setRunning(true);
    setTimeout(() => setRunning(false), 1500);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl font-mono text-xs md:text-sm text-slate-300">
      {/* Top Window Bar */}
      <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-slate-500 font-medium">bash — 80×24</span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-lg border border-slate-800/80">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-colors ${
              activeTab === 'terminal'
                ? 'bg-slate-800 text-brand-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>terminal</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-colors ${
              activeTab === 'profile'
                ? 'bg-slate-800 text-brand-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>profile.ts</span>
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-colors ${
              activeTab === 'architecture'
                ? 'bg-slate-800 text-brand-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>skills.json</span>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {activeTab !== 'terminal' && (
            <button
              onClick={copyCode}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Copy snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>
      </div>

      {/* Terminal View Body */}
      <div className="p-5 overflow-x-auto min-h-[290px] max-h-[360px] leading-relaxed">
        {activeTab === 'terminal' && (
          <div className="space-y-3 font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-emerald-400 font-bold">abhishek@akgec-mac</span>
              <span className="text-slate-600">:~</span>
              <span className="text-brand-400">$</span>
              <span className="text-slate-100">node resume-status.js</span>
            </div>

            <div className="text-slate-400 pl-2 border-l-2 border-slate-800 space-y-1 py-1">
              <p className="text-emerald-400 font-semibold">✔ Candidate Verified</p>
              <p>📍 Candidate: <span className="text-white font-medium">{personalInfo.name}</span></p>
              <p>🎓 Degree: <span className="text-white">B.Tech CSE (Data Science) @ AKGEC</span></p>
              <p>📊 CGPA: <span className="text-amber-400 font-bold">{personalInfo.metrics.cgpa}</span></p>
              <p>💼 Current Role: <span className="text-cyan-400">Software Developer Intern @ Payvista</span></p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-slate-400">
              <span className="text-emerald-400 font-bold">abhishek@akgec-mac</span>
              <span className="text-slate-600">:~</span>
              <span className="text-brand-400">$</span>
              <span className="text-slate-100">git status</span>
            </div>

            <div className="bg-slate-900/80 rounded-lg p-3 text-xs border border-slate-800 text-slate-300">
              <span className="text-emerald-400">On branch main — Ready for Full-Stack / Backend Roles</span>
              <br />
              <span className="text-slate-400">Featured Projects: <strong>Virtual Courses LMS</strong>, <strong>ShopNest</strong></span>
            </div>

            <div className="flex items-center gap-2 text-slate-400 pt-1">
              <span className="text-emerald-400 font-bold">abhishek@akgec-mac</span>
              <span className="text-slate-600">:~</span>
              <span className="text-brand-400">$</span>
              <span className="inline-block w-2.5 h-4 bg-brand-400 animate-pulse ml-1"></span>
              {running && <span className="text-xs text-amber-400 ml-2 animate-spin">⚡ Verification check active...</span>}
            </div>

            <div className="pt-2">
              <button
                onClick={handleRunCommand}
                disabled={running}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-500/20 hover:bg-brand-500/30 text-brand-300 border border-brand-500/40 text-xs transition-colors"
              >
                <Play className="w-3 h-3" />
                <span>Run Interactive Test</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <pre className="text-xs md:text-sm text-slate-300 leading-relaxed font-mono">
            <code>{profileCode}</code>
          </pre>
        )}

        {activeTab === 'architecture' && (
          <pre className="text-xs md:text-sm text-cyan-300 leading-relaxed font-mono">
            <code>{architectureJson}</code>
          </pre>
        )}
      </div>

      {/* Footer bar */}
      <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          UTF-8
        </span>
        <span>Node.js v26.1.0</span>
        <span>Git: main*</span>
      </div>
    </div>
  );
};
