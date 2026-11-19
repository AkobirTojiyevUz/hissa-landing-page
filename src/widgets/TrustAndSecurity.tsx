import React from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { SectionHeader } from '../shared/ui/SectionHeader';
import { Badge } from '../shared/ui/Badge';
import { ShieldCheck, Lock, Award, Building2, CheckCircle2 } from 'lucide-react';

export const TrustAndSecurity: React.FC = () => {
  const { t } = useI18n();

  const cards = [
    {
      title: t.security.card1Title,
      desc: t.security.card1Desc,
      icon: <Building2 className="w-6 h-6 text-brand-ink" />,
      badge: t.security.card1Badge,
    },
    {
      title: t.security.card2Title,
      desc: t.security.card2Desc,
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      badge: t.security.card2Badge,
    },
    {
      title: t.security.card3Title,
      desc: t.security.card3Desc,
      icon: <Award className="w-6 h-6 text-blue-500" />,
      badge: t.security.card3Badge,
    },
    {
      title: t.security.card4Title,
      desc: t.security.card4Desc,
      icon: <Lock className="w-6 h-6 text-amber-500" />,
      badge: t.security.card4Badge,
    },
  ];

  const banks = ['Kapitalbank', 'Ipak Yo\'li Bank', 'O\'zsanoatqurilishbank (SQB)', 'Aloqabank'];

  return (
    <section id="security" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={t.security.eyebrow}
          icon={<ShieldCheck />}
          title={t.security.title}
          subtitle={t.security.subtitle}
        />

        {/* 4 Security Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-surface p-7 rounded-3xl border border-line shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-surface-2 flex items-center justify-center border border-line">
                    {c.icon}
                  </div>
                  <Badge variant="neutral" size="sm">
                    {c.badge}
                  </Badge>
                </div>
                <h3 className="text-base font-bold text-ink mb-2 leading-snug">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed font-normal">
                  {c.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t.security.certifiedBadge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Co-Funding Bank Partners Strip */}
        <div className="bg-surface-2 rounded-3xl p-6 sm:p-8 border border-line text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            {t.security.coFundingTitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {banks.map((bank, index) => (
              <div
                key={index}
                className="px-5 py-2.5 rounded-2xl bg-surface border border-line text-xs sm:text-sm font-extrabold text-gray-800 dark:text-gray-200 shadow-sm"
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
