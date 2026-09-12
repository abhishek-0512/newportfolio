import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'outline';
  size?: 'sm' | 'md';
  highlight?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  highlight = false,
}) => {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-xs md:text-sm';
  
  let variantClasses = 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800/70 dark:text-slate-300 dark:border-slate-700/60';

  if (variant === 'primary' || highlight) {
    variantClasses = 'bg-brand-500/10 text-brand-700 dark:text-brand-300 border-brand-500/30 dark:bg-brand-500/15 font-semibold';
  } else if (variant === 'success') {
    variantClasses = 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30 dark:bg-emerald-500/15';
  } else if (variant === 'outline') {
    variantClasses = 'bg-transparent text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700';
  }

  return (
    <span className={`inline-flex items-center rounded-lg border font-mono transition-all duration-200 hover:scale-105 ${sizeClasses} ${variantClasses}`}>
      {children}
    </span>
  );
};
