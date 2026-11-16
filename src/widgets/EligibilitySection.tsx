import React from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { Badge } from '../shared/ui/Badge';
import { Button } from '../shared/ui/Button';
import { UserCheck, ShieldCheck, CreditCard, ArrowRight, Sparkles, Smartphone } from 'lucide-react';

export const EligibilitySection: React.FC = () => {
  const { t } = useI18n();

  const scrollToApp = () => {
    document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="eligibility" className="py-16 md:py-24 bg-white dark:bg-[#0E1318] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="brand" className="mb-2">
            <UserCheck className="w-3.5 h-3.5 mr-1 text-[#FF655B]" />
            {t.eligibility.eyebrow}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t.eligibility.title}
          </h2>
          <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-[#181F26] border border-gray-200/80 dark:border-gray-800 text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-semibold flex items-center justify-center gap-3 shadow-sm">
            <CreditCard className="w-5 h-5 text-[#FF655B] shrink-0" />
            <span>{t.eligibility.requirement}</span>
          </div>
        </div>

        {/* 2 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Step 1: OneID */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gray-50/70 dark:bg-[#13181E] border border-gray-200/80 dark:border-gray-800 shadow-sm hover:border-[#FF655B]/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF655B]/10 text-[#FF655B] flex items-center justify-center border border-[#FF655B]/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                {t.eligibility.step1Title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                {t.eligibility.step1Desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200/60 dark:border-gray-800/80 flex items-center gap-2 text-xs font-bold text-[#FF655B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OneID orqali 2 daqiqada</span>
            </div>
          </div>

          {/* Step 2: Limit check */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gray-50/70 dark:bg-[#13181E] border border-gray-200/80 dark:border-gray-800 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                {t.eligibility.step2Title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                {t.eligibility.step2Desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200/60 dark:border-gray-800/80 flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>25 000 000 so'mgacha xarid limiti</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToApp}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="px-8 py-3 text-sm font-bold shadow-xl shadow-[#FF655B]/25"
          >
            <Smartphone className="w-4 h-4 mr-1" />
            {t.eligibility.ctaBtn}
          </Button>
        </div>

      </div>
    </section>
  );
};
