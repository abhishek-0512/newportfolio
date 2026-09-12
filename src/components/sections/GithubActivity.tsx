import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { githubStats, personalInfo } from '../../data/portfolioData';
import { Github, Star, GitFork, Code, Flame, ExternalLink, Activity } from 'lucide-react';

export const GithubActivity: React.FC = () => {
  // Generate dummy heat-map grid for visual contribution display
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  const contributionGrid = Array.from({ length: 45 }, (_, i) => {
    // Generate realistic random contribution intensity (0 to 4)
    const val = Math.floor(Math.sin(i * 0.7) * 2.5 + 2);
    return Math.max(0, Math.min(4, val));
  });

  const getCellColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-emerald-950/40 dark:bg-emerald-900/40 border-emerald-800/40';
      case 2: return 'bg-emerald-800/60 dark:bg-emerald-700/60 border-emerald-600/60';
      case 3: return 'bg-emerald-600 dark:bg-emerald-500 border-emerald-400';
      case 4: return 'bg-emerald-400 dark:bg-emerald-400 border-emerald-300';
      default: return 'bg-slate-200 dark:bg-slate-800/50 border-slate-300/40 dark:border-slate-800';
    }
  };

  return (
    <section id="activity" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Open Source & Problem Solving"
          title="Developer Activity"
          subtitle="Consistent commit history, open-source repositories, and competitive algorithm metrics."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stats & Contribution Matrix */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Card hoverEffect={false} className="p-4 text-center">
                <span className="text-2xl font-extrabold font-mono text-brand-600 dark:text-brand-400 block">
                  {githubStats.totalContributions}+
                </span>
                <span className="text-xs text-slate-500 font-mono mt-1 block">Commits (2025-2026)</span>
              </Card>

              <Card hoverEffect={false} className="p-4 text-center">
                <span className="text-2xl font-extrabold font-mono text-amber-500 block">
                  {githubStats.starsEarned}
                </span>
                <span className="text-xs text-slate-500 font-mono mt-1 block">GitHub Stars</span>
              </Card>

              <Card hoverEffect={false} className="p-4 text-center">
                <span className="text-2xl font-extrabold font-mono text-purple-500 block">
                  {githubStats.totalRepositories}
                </span>
                <span className="text-xs text-slate-500 font-mono mt-1 block">Public Repos</span>
              </Card>

              <Card hoverEffect={false} className="p-4 text-center">
                <span className="text-2xl font-extrabold font-mono text-emerald-500 block">
                  {githubStats.dsaRating.rating}
                </span>
                <span className="text-xs text-slate-500 font-mono mt-1 block">LeetCode Rating</span>
              </Card>
            </div>

            {/* Visual Contribution Heatmap Widget */}
            <Card hoverEffect={false} className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-500" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Contribution Graph Snapshot
                  </h3>
                </div>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-brand-500 hover:underline flex items-center gap-1"
                >
                  <span>@{githubStats.username}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Heatmap Grid */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex justify-between text-[10px] font-mono text-slate-500 px-1">
                  {months.map(m => <span key={m}>{m}</span>)}
                </div>

                <div className="grid grid-cols-9 gap-1.5">
                  {contributionGrid.map((level, idx) => (
                    <div
                      key={idx}
                      className={`h-4 rounded border ${getCellColor(level)} transition-all hover:scale-110`}
                      title={`Activity index: ${level}`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-900">
                  <span>Less</span>
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded bg-slate-800"></span>
                    <span className="w-2.5 h-2.5 rounded bg-emerald-900"></span>
                    <span className="w-2.5 h-2.5 rounded bg-emerald-700"></span>
                    <span className="w-2.5 h-2.5 rounded bg-emerald-500"></span>
                    <span className="w-2.5 h-2.5 rounded bg-emerald-400"></span>
                  </div>
                  <span>More</span>
                </div>
              </div>
            </Card>

          </div>

          {/* Right Column: Featured Repos & Problem Solving Ratings */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* LeetCode / DSA Badge Card */}
            <Card className="p-6 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent border-amber-500/20">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
                  <Flame className="w-5 h-5" />
                  <span>Competitive Programming</span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold">
                  {githubStats.dsaRating.globalRank}
                </span>
              </div>
              
              <div className="space-y-1">
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {githubStats.dsaRating.platform} Knight
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Max Rating: <span className="font-bold text-amber-500 font-mono">{githubStats.dsaRating.rating}</span> • Solved <span className="font-bold text-emerald-500 font-mono">{githubStats.dsaRating.problemsSolved}+</span> problems in Data Structures & Dynamic Programming.
                </p>
              </div>
            </Card>

            {/* Featured Repos List */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                Top Public Repositories
              </h3>

              {githubStats.featuredRepos.map((repo, idx) => (
                <Card key={idx} className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <a
                      href={`${personalInfo.socials.github}/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-brand-500 flex items-center gap-1.5 font-mono"
                    >
                      <Github className="w-4 h-4 text-slate-400" />
                      <span>{repo.name}</span>
                    </a>

                    <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
                    {repo.description}
                  </p>
                </Card>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
