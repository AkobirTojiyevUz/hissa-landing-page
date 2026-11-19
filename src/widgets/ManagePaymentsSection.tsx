import React from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { SectionHeader } from '../shared/ui/SectionHeader';
import { Button } from '../shared/ui/Button';
import { Calendar, CheckCircle, Headphones, ArrowRight, Smartphone, RefreshCw } from 'lucide-react';

export const ManagePaymentsSection: React.FC = () => {
  const { t } = useI18n();

  const scrollToApp = () => {
    document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' });
  };

  const cards = [
    {
      title: t.managePayments.card1Title,
      desc: t.managePayments.card1Desc,
      btn: t.managePayments.card1Btn,
      icon: <Calendar className="w-6 h-6 text-brand-ink" />,
      action: scrollToApp,
      color: 'border-l-4 border-l-brand',
    },
    {
      title: t.managePayments.card2Title,
      desc: t.managePayments.card2Desc,
      btn: t.managePayments.card2Btn,
      icon: <CheckCircle className="w-6 h-6 text-emerald-500" />,
      action: scrollToApp,
      color: 'border-l-4 border-l-emerald-500',
    },
    {
      title: t.managePayments.card3Title,
      desc: t.managePayments.card3Desc,
      btn: t.managePayments.card3Btn,
      icon: <Headphones className="w-6 h-6 text-blue-500" />,
      action: () => {
        window.open('tel:+998712000000', '_self');
      },
      color: 'border-l-4 border-l-blue-500',
    },
  ];

  return (
    <section id="manage-payments" className="py-20 md:py-24 bg-gray-50/70 dark:bg-[#0B1015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={t.managePayments.eyebrow}
          icon={<RefreshCw />}
          title={t.managePayments.title}
          subtitle={t.managePayments.subtitle}
        />

        {/* 3 Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`bg-surface p-7 sm:p-8 rounded-3xl border border-line shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ${c.color}`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-surface-2 border border-line flex items-center justify-center">
                  {c.icon}
                </div>
                <h3 className="text-lg font-bold text-ink">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed font-normal">
                  {c.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-line">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={c.action}
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="w-full justify-center text-xs font-bold border-line hover:border-brand"
                >
                  {i < 2 && <Smartphone className="w-3 h-3 mr-1" />}
                  {c.btn}
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
