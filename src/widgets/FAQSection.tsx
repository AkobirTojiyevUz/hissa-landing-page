import React, { useId, useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useI18n } from '../app/i18n/I18nContext';
import { reveal } from '../app/motion/useScrollReveal';
import { SectionHeader } from '../shared/ui/SectionHeader';

type Audience = 'shoppers' | 'merchants';

export const FAQSection: React.FC = () => {
  const { t } = useI18n();
  const baseId = useId();
  const [audience, setAudience] = useState<Audience>('shoppers');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = audience === 'shoppers' ? t.faq.shoppers : t.faq.merchants;
  const tabs: { id: Audience; label: string }[] = [
    { id: 'shoppers', label: t.faq.shopperTab },
    { id: 'merchants', label: t.faq.merchantTab },
  ];

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t.faq.eyebrow} icon={<HelpCircle />} title={t.faq.title} subtitle={t.faq.subtitle} className="mb-10">
          <div role="tablist" className="mt-2 inline-flex rounded-full bg-sunken p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={audience === tab.id}
                onClick={() => {
                  setAudience(tab.id);
                  setOpenIndex(0);
                }}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
                  audience === tab.id ? 'bg-surface text-ink shadow-card' : 'text-ink-2 hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </SectionHeader>

        <div {...reveal('fade-up')} className="space-y-2 rounded-3xl bg-surface p-3 shadow-card sm:p-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `${baseId}-panel-${idx}`;
            return (
              <div key={faq.q} className="rounded-2xl bg-canvas">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left text-sm font-semibold text-ink transition-colors hover:text-brand-ink sm:text-base"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-ink' : 'text-ink-3'}`}
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-sm leading-relaxed text-ink-2">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
