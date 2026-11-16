import React, { useState } from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { Badge } from '../shared/ui/Badge';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<'shoppers' | 'merchants'>('shoppers');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentFaqs = activeTab === 'shoppers' ? t.faq.shoppers : t.faq.merchants;

  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50/60 dark:bg-[#0B1015] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <Badge variant="brand" className="mb-2">
            <HelpCircle className="w-3.5 h-3.5 mr-1 text-[#FF655B]" />
            {t.faq.eyebrow}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            {t.faq.subtitle}
          </p>

          {/* Toggle Tab */}
          <div className="inline-flex p-1 bg-white dark:bg-[#181F26] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm mt-4">
            <button
              onClick={() => {
                setActiveTab('shoppers');
                setOpenIndex(0);
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'shoppers'
                  ? 'bg-[#FF655B] text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {t.faq.shopperTab}
            </button>
            <button
              onClick={() => {
                setActiveTab('merchants');
                setOpenIndex(0);
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'merchants'
                  ? 'bg-[#FF655B] text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {t.faq.merchantTab}
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {currentFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#13181E] rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-gray-900 dark:text-white hover:text-[#FF655B] dark:hover:text-[#FF655B] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#FF655B]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800/60 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
