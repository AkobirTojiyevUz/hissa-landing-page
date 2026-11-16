import React from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { Badge } from '../shared/ui/Badge';
import { Button } from '../shared/ui/Button';
import { Briefcase, TrendingUp, ShieldCheck, Zap, Users, ArrowRight } from 'lucide-react';

interface MerchantB2BSectionProps {
  onOpenMerchantModal: () => void;
}

export const MerchantB2BSection: React.FC<MerchantB2BSectionProps> = ({ onOpenMerchantModal }) => {
  const { t } = useI18n();

  const stats = [
    { value: t.merchant.stat1Value, label: t.merchant.stat1Label, color: 'text-[#FF655B]' },
    { value: t.merchant.stat2Value, label: t.merchant.stat2Label, color: 'text-emerald-500' },
    { value: t.merchant.stat3Value, label: t.merchant.stat3Label, color: 'text-blue-500' },
    { value: t.merchant.stat4Value, label: t.merchant.stat4Label, color: 'text-amber-500' },
  ];

  const features = [
    {
      title: t.merchant.feature1Title,
      desc: t.merchant.feature1Desc,
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: t.merchant.feature2Title,
      desc: t.merchant.feature2Desc,
      icon: <Zap className="w-6 h-6 text-[#FF655B]" />,
    },
    {
      title: t.merchant.feature3Title,
      desc: t.merchant.feature3Desc,
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    },
    {
      title: t.merchant.feature4Title,
      desc: t.merchant.feature4Desc,
      icon: <Users className="w-6 h-6 text-amber-500" />,
    },
  ];

  return (
    <section id="for-business" className="py-20 md:py-28 bg-gray-50/70 dark:bg-[#0B1015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="brand" className="mb-2">
            <Briefcase className="w-3.5 h-3.5 mr-1 text-[#FF655B]" />
            {t.merchant.eyebrow}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t.merchant.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            {t.merchant.subtitle}
          </p>
        </div>

        {/* 4 Big Business Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#13181E] p-6 sm:p-8 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-sm text-center"
            >
              <div className={`text-3xl sm:text-4xl font-black ${s.color} tracking-tight mb-2`}>
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Feature Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#13181E] p-8 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-sm flex items-start gap-5 hover:border-[#FF655B]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-[#1D2329] flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-700 shadow-inner">
                {feat.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner to Launch Merchant Modal */}
        <div className="rounded-3xl bg-gradient-to-r from-[#FF655B] via-[#FF756C] to-[#ED4A3F] text-white p-8 sm:p-12 shadow-2xl shadow-[#FF655B]/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {t.merchant.ctaCardTitle}
            </h3>
            <p className="text-white/90 text-sm sm:text-base max-w-xl">
              {t.merchant.ctaCardDesc}
            </p>
          </div>
          <Button
            variant="glass"
            size="lg"
            onClick={onOpenMerchantModal}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0 bg-white text-[#FF655B] hover:bg-white/90 border-transparent shadow-xl font-bold"
          >
            {t.merchant.ctaBtn}
          </Button>
        </div>

      </div>
    </section>
  );
};
