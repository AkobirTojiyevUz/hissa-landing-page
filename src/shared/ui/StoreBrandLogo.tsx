import React from 'react';
import { getPartner } from '../config/partners';

export interface StoreBrandLogoProps {
  storeId: string;
  name: string;
  className?: string;
}

/**
 * Square partner logo tile. Size and radius default to 48px / rounded-2xl and
 * can be overridden through `className` (e.g. `w-10 h-10 rounded-xl`).
 */
export const StoreBrandLogo: React.FC<StoreBrandLogoProps> = ({ storeId, name, className = '' }) => {
  const partner = getPartner(storeId);
  const size = [
    className.includes('w-') ? '' : 'w-12',
    className.includes('h-') ? '' : 'h-12',
    className.includes('rounded-') ? '' : 'rounded-2xl',
  ].join(' ');
  const base = `${size} shrink-0 overflow-hidden ring-1 ring-black/5 dark:ring-white/10 ${className}`;

  if (!partner) {
    return (
      <div
        className={`${base} flex items-center justify-center bg-gray-100 dark:bg-gray-800 font-bold text-base text-gray-700 dark:text-gray-200`}
        aria-hidden="true"
      >
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <div
      className={`${base} flex items-center justify-center bg-white ${partner.logoFit === 'inset' ? 'p-1.5' : ''}`}
      title={partner.name}
    >
      <img
        src={partner.logo}
        alt={partner.name}
        loading="lazy"
        decoding="async"
        className={partner.logoFit === 'inset' ? 'max-w-full max-h-full object-contain' : 'w-full h-full object-cover'}
      />
    </div>
  );
};
