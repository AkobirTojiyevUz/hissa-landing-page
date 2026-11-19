import React, { useState } from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { SectionHeader } from '../shared/ui/SectionHeader';
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
      icon: <UserCheck className="w-7 h-7 text-brand-ink" />,
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
        
        <SectionHeader
          eyebrow={t.howItWorks.eyebrow}
          icon={<HissaMark size={12} animated className="!w-auto" />}
          title={t.howItWorks.title}
          subtitle={t.howItWorks.subtitle}
        />

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-brand/20 via-blue-500/20 to-emerald-500/20 -translate-y-12 z-0" />

          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative z-10 p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-surface shadow-2xl border-2 border-brand/40 -translate-y-2'
                    : 'bg-white/80 dark:bg-[#13181E] border border-line shadow-sm hover:shadow-md'
                }`}
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-surface-2 border border-line flex items-center justify-center shadow-inner">
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
                <h3 className="text-xl font-bold text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed font-normal">
                  {step.desc}
                </p>

                {/* Highlight footer */}
                <div className="mt-6 pt-4 border-t border-line flex items-center gap-1.5 text-xs font-semibold text-ink-3">
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
