import React from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { HissaMark } from '../shared/ui/HissaMark';
import { Button } from '../shared/ui/Button';
import { Badge } from '../shared/ui/Badge';
import { ArrowRight, QrCode, Sparkles, CheckCircle2, ShoppingBag } from 'lucide-react';

interface HeroSectionProps {
  onOpenMerchantModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const { t } = useI18n();

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStores = () => {
    document.getElementById('stores')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF655B]/10 dark:bg-[#FF655B]/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy, Value Props, CTAs, Stats */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* National Ecosystem Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#13181E] border border-gray-200/80 dark:border-gray-800 shadow-sm animate-fade-in">
              <HissaMark size={14} animated={true} />
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                {t.hero.badge}
              </span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF655B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF655B]"></span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.12]">
              {t.hero.titlePart1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF655B] via-[#FF847A] to-[#FF453A]">
                {t.hero.titleHighlight}
              </span>{' '}
              <span className="block sm:inline">{t.hero.titlePart2}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToStores}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto text-base px-8 shadow-xl shadow-[#FF655B]/20"
              >
                {t.hero.startCta}
              </Button>
              <Button
                variant="glass"
                size="lg"
                onClick={scrollToCalculator}
                leftIcon={<Sparkles className="w-4 h-4 text-[#FF655B]" />}
                className="w-full sm:w-auto text-base"
              >
                {t.hero.calcCta}
              </Button>
            </div>

            {/* Key Trust Stats Pill Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-gray-200/60 dark:border-gray-800/80">
              <div className="bg-white/60 dark:bg-[#13181E]/60 backdrop-blur-md p-3.5 rounded-2xl border border-gray-100 dark:border-gray-800 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                  {t.hero.stat1Value}
                </div>
                <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                  {t.hero.stat1Label}
                </div>
              </div>
              <div className="bg-white/60 dark:bg-[#13181E]/60 backdrop-blur-md p-3.5 rounded-2xl border border-gray-100 dark:border-gray-800 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-black text-[#FF655B]">
                  {t.hero.stat2Value}
                </div>
                <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                  {t.hero.stat2Label}
                </div>
              </div>
              <div className="bg-white/60 dark:bg-[#13181E]/60 backdrop-blur-md p-3.5 rounded-2xl border border-gray-100 dark:border-gray-800 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                  {t.hero.stat3Value}
                </div>
                <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                  {t.hero.stat3Label}
                </div>
              </div>
              <div className="bg-white/60 dark:bg-[#13181E]/60 backdrop-blur-md p-3.5 rounded-2xl border border-gray-100 dark:border-gray-800 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  {t.hero.stat4Value}
                </div>
                <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                  {t.hero.stat4Label}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Fintech Mockup + Lifestyle Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-md">
              
              {/* Main Visual: Klarna / Afterpay style modern lifestyle imagery */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/80 dark:border-gray-800/80 bg-gradient-to-br from-amber-100 via-rose-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?auto=format&fit=crop&w=900&q=80"
                  alt="Young woman happily shopping with Hissa BNPL"
                  className="w-full h-full object-cover object-center filter saturate-[1.05]"
                  loading="eager"
                />
                
                {/* Subtle dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

                {/* Overlaid Uzcard BNPL Glass Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <Badge variant="glass" className="font-semibold px-3 py-1 text-xs">
                    <HissaMark size={14} animated={true} className="mr-1.5" />
                    Hissa × UZCARD
                  </Badge>
                  <Badge variant="glass" className="font-bold text-emerald-400 px-3 py-1 text-xs">
                    0-0-3 Tasdiqlangan
                  </Badge>
                </div>

                {/* Overlaid Bottom Card: Instant QR & Limit Bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-[#13181E]/90 backdrop-blur-xl p-4 rounded-2xl border border-white/40 dark:border-gray-700/60 shadow-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        {t.hero.availableLimit}
                      </div>
                      <div className="text-lg font-black text-gray-900 dark:text-white">
                        {t.hero.limitAmount}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#FF655B]/15 text-[#FF655B] flex items-center justify-center">
                      <QrCode className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="space-y-1">
                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#FF655B] to-emerald-500 rounded-full w-3/4" />
                    </div>
                    <div className="flex justify-between text-[10px] font-medium text-gray-500 dark:text-gray-400">
                      <span>{t.hero.payWithQr}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Faol</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Element 1: Recent Purchase Badge */}
              <div className="absolute -top-6 -left-6 sm:-left-8 bg-white dark:bg-[#1D2329] p-3.5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3 animate-float-slow max-w-xs z-20">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-gray-900 dark:text-white truncate">
                    {t.hero.purchaseStore}
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    {t.hero.installmentProgress}
                  </div>
                </div>
              </div>

              {/* Floating Element 2: Zero Overpayment Pill */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white dark:bg-[#1D2329] p-3.5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-2.5 animate-float-reverse z-20">
                <div className="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-gray-900 dark:text-white">
                    0% Foiz · 0 UZS
                  </div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">
                    Yashirin to'lovlarsiz
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
