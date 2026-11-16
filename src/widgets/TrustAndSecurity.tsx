import React from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { Badge } from '../shared/ui/Badge';
import { ShieldCheck, Lock, Award, Building2, CheckCircle2 } from 'lucide-react';

export const TrustAndSecurity: React.FC = () => {
  const { t } = useI18n();

  const cards = [
    {
      title: t.security.card1Title,
      desc: t.security.card1Desc,
      icon: <Building2 className="w-6 h-6 text-[#FF655B]" />,
      badge: 'Milliy Ekotizim',
    },
    {
      title: t.security.card2Title,
      desc: t.security.card2Desc,
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      badge: 'PCI DSS v4.0.1',
    },
    {
      title: t.security.card3Title,
      desc: t.security.card3Desc,
      icon: <Award className="w-6 h-6 text-blue-500" />,
      badge: 'MB Reglamenti',
    },
    {
      title: t.security.card4Title,
      desc: t.security.card4Desc,
      icon: <Lock className="w-6 h-6 text-amber-500" />,
      badge: 'Bank Kafilligi',
    },
  ];

  const banks = ['Kapitalbank', 'Ipak Yo\'li Bank', 'O\'zsanoatqurilishbank (SQB)', 'Aloqabank'];

  return (
    <section id="security" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="brand" className="mb-2">
            <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#FF655B]" />
            {t.security.eyebrow}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t.security.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            {t.security.subtitle}
          </p>
        </div>

        {/* 4 Security Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#13181E] p-7 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-[#1D2329] flex items-center justify-center border border-gray-100 dark:border-gray-800">
                    {c.icon}
                  </div>
                  <Badge variant="neutral" size="sm">
                    {c.badge}
                  </Badge>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                  {c.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Sertifikatlangan</span>
              </div>
            </div>
          ))}
        </div>

        {/* Co-Funding Bank Partners Strip */}
        <div className="bg-gray-50 dark:bg-[#13181E] rounded-3xl p-6 sm:p-8 border border-gray-200/70 dark:border-gray-800 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Likvidlik va hisob-kitob bo'yicha yetakchi bank hamkorlarimiz
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {banks.map((bank, index) => (
              <div
                key={index}
                className="px-5 py-2.5 rounded-2xl bg-white dark:bg-[#181F26] border border-gray-200 dark:border-gray-800 text-xs sm:text-sm font-extrabold text-gray-800 dark:text-gray-200 shadow-sm"
              >
                {bank}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
