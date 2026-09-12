import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
