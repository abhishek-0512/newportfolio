import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`glass-card rounded-2xl p-6 transition-all duration-300 ${
        hoverEffect
          ? 'hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/5 hover:border-brand-500/30 dark:hover:border-brand-500/30'
          : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
