import React from 'react';

export interface BadgeProps {
  variant?: 'brand' | 'success' | 'warning' | 'neutral' | 'glass';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'brand',
  size = 'md',
  icon,
  children,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-semibold tracking-figma rounded-lg select-none';

  const sizeStyles = {
    sm: 'text-xs px-2 py-1 gap-1',
    md: 'text-xs px-3 py-1.5 gap-1.5',
  };

  const variantStyles = {
    brand: 'bg-brand-tint text-brand-ink',
    success: 'bg-success-soft text-success',
    warning: 'bg-amber-500/10 text-amber-700 dark:text-amber-400',
    neutral: 'bg-sunken text-ink-2',
    glass: 'bg-surface/80 backdrop-blur-md text-ink border border-line shadow-card',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </span>
  );
};
