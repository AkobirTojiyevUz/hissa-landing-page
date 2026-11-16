import React, { useState } from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { Badge } from '../shared/ui/Badge';
import { HissaMark } from '../shared/ui/HissaMark';
import { UserCheck, Store, QrCode, CheckCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { t } = useI18n();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: t.howItWorks.step1Num,
      title: t.howItWorks.step1Title,
      desc: t.howItWorks.step1Desc,
      icon: <UserCheck className="w-7 h-7 text-[#FF655B]" />,
      pill: t.hero.stat3Value,
      highlight: t.howItWorks.step1Highlight,
    },
    {
      num: t.howItWorks.step2Num,
      title: t.howItWorks.step2Title,
      desc: t.howItWorks.step2Desc,
      icon: <Store className="w-7 h-7 text-blue-500" />,
      pill: `${t.hero.stat1Value} ${t.nav.stores}`,
      highlight: t.howItWorks.step2Highlight,
    },
    {
      num: t.howItWorks.step3Num,
      title: t.howItWorks.step3Title,
      desc: t.howItWorks.step3Desc,
      icon: <QrCode className="w-7 h-7 text-emerald-500" />,
      pill: `0 UZS · ${t.calculator.cardTodayPay}`,
      highlight: t.howItWorks.step3Highlight,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gray-50/60 dark:bg-[#0B1015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="brand" className="mb-2">
            <HissaMark size={14} animated={true} className="mr-1" />
            {t.howItWorks.eyebrow}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#FF655B]/20 via-blue-500/20 to-emerald-500/20 -translate-y-12 z-0" />

          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative z-10 p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-[#181F26] shadow-2xl border-2 border-[#FF655B]/40 -translate-y-2'
                    : 'bg-white/80 dark:bg-[#13181E] border border-gray-200/70 dark:border-gray-800 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-[#1D2329] border border-gray-100 dark:border-gray-700 flex items-center justify-center shadow-inner">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-black text-gray-200 dark:text-gray-700 select-none">
                    {step.num}
                  </span>
                </div>

                {/* Badge Tag */}
                <Badge variant={isActive ? 'brand' : 'neutral'} size="sm" className="mb-3">
                  {step.pill}
                </Badge>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                  {step.desc}
                </p>

                {/* Highlight footer */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
