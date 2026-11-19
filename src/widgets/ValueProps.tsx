import React from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { SectionHeader } from '../shared/ui/SectionHeader';
import { Badge } from '../shared/ui/Badge';
import { Percent, CreditCard, QrCode, Smartphone, Sparkles, Check } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const { t } = useI18n();

  const cards = [
    {
      icon: <Percent className="w-6 h-6 text-brand-ink" />,
      badge: t.whyHissa.card1Badge,
      title: t.whyHissa.card1Title,
      desc: t.whyHissa.card1Desc,
      bg: 'bg-rose-50/50 dark:bg-[#1D2329]',
      border: 'border-rose-100 dark:border-gray-800',
    },
    {
      icon: <CreditCard className="w-6 h-6 text-blue-500" />,
      badge: t.whyHissa.card2Badge,
      title: t.whyHissa.card2Title,
      desc: t.whyHissa.card2Desc,
      bg: 'bg-blue-50/50 dark:bg-[#1D2329]',
      border: 'border-blue-100 dark:border-gray-800',
    },
    {
      icon: <QrCode className="w-6 h-6 text-emerald-500" />,
      badge: t.whyHissa.card3Badge,
      title: t.whyHissa.card3Title,
      desc: t.whyHissa.card3Desc,
      bg: 'bg-emerald-50/50 dark:bg-[#1D2329]',
      border: 'border-emerald-100 dark:border-gray-800',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-amber-500" />,
      badge: t.whyHissa.card4Badge,
      title: t.whyHissa.card4Title,
      desc: t.whyHissa.card4Desc,
      bg: 'bg-amber-50/50 dark:bg-[#1D2329]',
      border: 'border-amber-100 dark:border-gray-800',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.whyHissa.eyebrow}
          icon={<Sparkles />}
          title={t.whyHissa.title}
          subtitle={t.whyHissa.subtitle}
        />

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`p-6 sm:p-7 rounded-3xl ${card.bg} border ${card.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-surface shadow-sm flex items-center justify-center">
                    {card.icon}
                  </div>
                  <Badge variant="neutral" size="sm">
                    {card.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold text-ink mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line flex items-center gap-1.5 text-xs font-semibold text-brand-ink">
                <Check className="w-3.5 h-3.5" />
                <span>{t.whyHissa.guaranteedCondition}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
