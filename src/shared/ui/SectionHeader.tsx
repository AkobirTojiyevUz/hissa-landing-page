import React from 'react';
import { reveal } from '../../app/motion/useScrollReveal';

interface SectionHeaderProps {
  eyebrow: string;
  icon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Extra content under the subtitle (e.g. a requirement note). */
  children?: React.ReactNode;
  className?: string;
}

/**
 * Centered section heading used by every landing section: eyebrow chip,
 * H2 and lead paragraph, each revealed in sequence on scroll.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  icon,
  title,
  subtitle,
  children,
  className = 'mb-12 md:mb-16',
}) => (
  <header className={`mx-auto max-w-3xl space-y-4 text-center ${className}`}>
    <p
      {...reveal('fade-up')}
      className="inline-flex items-center gap-1.5 rounded-full bg-brand-tint px-3 py-1.5 text-xs font-bold text-brand-ink [&_svg]:h-3.5 [&_svg]:w-3.5"
    >
      {icon}
      {eyebrow}
    </p>
    <h2
      {...reveal('fade-up', 80)}
      className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]"
    >
      {title}
    </h2>
    {subtitle && (
      <p {...reveal('fade-up', 160)} className="text-base font-medium leading-relaxed text-ink-2 sm:text-lg">
        {subtitle}
      </p>
    )}
    {children && <div {...reveal('fade-up', 220)}>{children}</div>}
  </header>
);
