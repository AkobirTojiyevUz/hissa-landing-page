import React from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { PARTNERS } from '../shared/config/partners';
import { StoreBrandLogo } from '../shared/ui/StoreBrandLogo';

export const PartnerTicker: React.FC = () => {
  const { t } = useI18n();

  // Rendered twice so the marquee loops seamlessly at -50%.
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <div className="py-8 bg-gray-50/70 dark:bg-[#0E1318] border-y border-line overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          {t.ticker.label}
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 dark:from-[#0E1318] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 dark:from-[#0E1318] to-transparent z-10 pointer-events-none" />

        <ul className="flex shrink-0 animate-marquee items-center gap-6 py-2">
          {loop.map((partner, index) => (
            <li
              key={`${partner.id}-${index}`}
              aria-hidden={index >= PARTNERS.length}
              className="flex items-center gap-3 pl-2 pr-5 py-2 rounded-2xl bg-surface border border-line shadow-sm hover:border-brand/40 transition-colors"
            >
              <StoreBrandLogo storeId={partner.id} name={partner.name} className="w-10 h-10 rounded-xl" />
              <div className="flex flex-col text-left">
                <span className="text-sm font-extrabold text-ink">{partner.name}</span>
                <span className="text-[10px] font-medium text-ink-3">
                  {t.stores.categoryLabels[partner.category]}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
