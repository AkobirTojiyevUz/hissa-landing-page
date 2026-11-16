import React from 'react';
import { useI18n } from '../app/i18n/I18nContext';

export const PartnerTicker: React.FC = () => {
  const { t } = useI18n();

  const partners = [
    { name: 'Texnomart', category: 'Elektronika' },
    { name: 'Mediapark', category: 'Maishiy texnika' },
    { name: 'Korzinka', category: 'Supermarket' },
    { name: 'Bellstore', category: 'Parfyumeriya' },
    { name: 'Ishonch', category: 'Mebel & Texnika' },
    { name: 'Makro', category: 'Supermarket' },
    { name: 'Arena Markaz', category: 'Gadjetlar' },
    { name: 'Idea', category: 'Elektronika' },
    { name: 'Terra Pro', category: 'Kiyim' },
    { name: 'Selfmade', category: 'Moda' },
    { name: 'FLO', category: 'Poyabzal' },
    { name: 'Vicco', category: 'Bolalar poyabzali' },
  ];

  // Duplicate for seamless loop
  const displayPartners = [...partners, ...partners];

  return (
    <div className="py-8 bg-gray-50/70 dark:bg-[#0E1318] border-y border-gray-200/60 dark:border-gray-800/80 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          {t.ticker.label}
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Gradients on edges for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 dark:from-[#0E1318] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 dark:from-[#0E1318] to-transparent z-10 pointer-events-none" />

        <div className="flex shrink-0 animate-marquee items-center gap-8 py-2">
          {displayPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white dark:bg-[#181F26] border border-gray-200/70 dark:border-gray-800 shadow-sm hover:border-[#FF655B]/40 transition-colors"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF655B]" />
              <div className="flex flex-col text-left">
                <span className="text-sm font-extrabold text-gray-900 dark:text-white">
                  {partner.name}
                </span>
                <span className="text-[10px] font-medium text-gray-400 dark:text-gray-400">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
