import React from 'react';
import { ArrowRight, Calculator, Briefcase, Check } from 'lucide-react';
import { useI18n } from '../app/i18n/I18nContext';
import { reveal } from '../app/motion/useScrollReveal';
import { HissaMark } from '../shared/ui/HissaMark';
import { HissaCard3D } from '../shared/ui/HissaCard3D';
import { Button } from '../shared/ui/Button';
import { StoreBrandLogo } from '../shared/ui/StoreBrandLogo';
import qrPhone from '../assets/illustrations/qr-phone.png';

interface HeroSectionProps {
  onOpenMerchantModal?: () => void;
}

const scrollTo = (...ids: string[]) => {
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  }
};

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const { t } = useI18n();

  const stats = [
    { value: t.hero.stat1Value, label: t.hero.stat1Label, accent: false },
    { value: t.hero.stat2Value, label: t.hero.stat2Label, accent: true },
    { value: t.hero.stat3Value, label: t.hero.stat3Label, accent: false },
    { value: t.hero.stat4Value, label: t.hero.stat4Label, accent: false },
  ];

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Soft coral wash, same as the app's home header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(90%_70%_at_70%_0%,var(--coral-100)_0%,transparent_70%)] opacity-80 dark:opacity-20"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Copy */}
        <div className="space-y-7 text-center lg:col-span-6 lg:text-left">
          <div
            {...reveal('fade-up')}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 shadow-card"
          >
            <HissaMark size={12} animated />
            <span className="text-xs font-semibold text-ink-2">{t.hero.badge}</span>
          </div>

          <h1
            {...reveal('fade-up', 80)}
            className="text-[40px] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl xl:text-[64px]"
          >
            {t.hero.titlePart1} <span className="text-brand-ink">{t.hero.titleHighlight}</span>{' '}
            <span className="block sm:inline">{t.hero.titlePart2}</span>
          </h1>

          <p
            {...reveal('fade-up', 160)}
            className="mx-auto max-w-xl text-base font-medium leading-relaxed text-ink-2 sm:text-lg lg:mx-0"
          >
            {t.hero.description}
          </p>

          <div
            {...reveal('fade-up', 240)}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button
              size="lg"
              onClick={() => scrollTo('map', 'stores')}
              rightIcon={<ArrowRight className="h-5 w-5" />}
              className="w-full sm:w-auto"
            >
              {t.hero.startCta}
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() => scrollTo('calculator')}
              leftIcon={<Calculator className="h-5 w-5 text-brand-ink" />}
              className="w-full sm:w-auto"
            >
              {t.hero.calcCta}
            </Button>
          </div>

          <a
            {...reveal('fade-up', 300)}
            href="#/for-business"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-2 transition-colors hover:text-brand-ink"
          >
            <Briefcase className="h-4 w-4 text-brand-ink" />
            <span>
              {t.audience.merchants}: {t.merchant.title}
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <dl className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                {...reveal('fade-up', 360 + i * 60)}
                className="rounded-3xl bg-surface p-4 text-left shadow-card"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className={`whitespace-nowrap text-xl font-extrabold ${stat.accent ? 'text-brand-ink' : 'text-ink'}`}>
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs font-semibold leading-4 text-ink-3">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Product visual built from the app's Figma components */}
        <div className="relative mx-auto w-full max-w-[480px] lg:col-span-6 lg:max-w-[520px]" {...reveal('fade-up', 120)}>
          <div className="relative rounded-[40px] bg-gradient-to-b from-[var(--coral-100)] via-[var(--coral-50)] to-surface p-6 pb-8 shadow-lift sm:p-8 dark:from-[var(--coral-950)] dark:via-surface dark:to-surface">
            <HissaCard3D className="mx-auto w-[88%] animate-float-slow" />

            <div className="mt-10 rounded-3xl bg-surface p-4 shadow-card">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-ink-3">{t.hero.availableLimit}</p>
                  <p className="mt-1 text-2xl font-extrabold text-ink">{t.hero.limitAmount}</p>
                </div>
                <span className="rounded-lg border border-brand px-2 py-1 text-xs font-semibold text-brand-ink">
                  {t.hero.verifiedPill}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-1" aria-hidden="true">
                <div className="h-6 w-[62%] rounded-lg bg-brand" />
                <div className="h-5 w-0.5 rounded-full bg-line-strong" />
                <div className="h-6 flex-1 rounded-lg bg-sunken" />
              </div>
              <div className="mt-2 flex justify-between text-xs font-semibold">
                <span className="text-ink-2">{t.hero.payWithQr}</span>
                <span className="text-success">{t.hero.activeStatus}</span>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3 rounded-3xl bg-surface p-3 pr-4 shadow-card">
              <StoreBrandLogo storeId="texnomart" name="Texnomart" className="h-11 w-11 rounded-2xl" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-ink">{t.hero.purchaseStore}</p>
                <p className="text-xs font-semibold text-ink-3">{t.hero.installmentProgress}</p>
              </div>
              <div className="flex gap-1" aria-hidden="true">
                <span className="h-2 w-5 rounded-full bg-brand" />
                <span className="h-2 w-5 rounded-full bg-sunken" />
                <span className="h-2 w-5 rounded-full bg-sunken" />
              </div>
            </div>
          </div>

          <img
            src={qrPhone}
            alt=""
            aria-hidden="true"
            width={640}
            height={512}
            className="pointer-events-none absolute -right-4 -top-12 w-32 drop-shadow-2xl animate-float-reverse sm:-right-12 sm:w-44"
          />

          <div className="absolute -bottom-6 left-4 flex items-center gap-2.5 rounded-2xl bg-surface p-3 pr-4 shadow-lift animate-float-slow sm:-left-8">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success-soft text-success">
              <Check className="h-4 w-4" strokeWidth={3} />
            </span>
            <div>
              <p className="text-xs font-extrabold text-ink">{t.hero.zeroInterestPill}</p>
              <p className="text-[11px] font-semibold text-ink-3">{t.hero.noHiddenPill}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
