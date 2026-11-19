import React, { useState } from 'react';
import { Smartphone } from 'lucide-react';
import { useI18n } from '../app/i18n/I18nContext';
import { Icon3D } from '../shared/ui/Icon3D';
import { reveal } from '../app/motion/useScrollReveal';
import { SectionHeader } from '../shared/ui/SectionHeader';
import { PhoneFrame } from '../shared/ui/PhoneFrame';
import { StoreBadges } from '../shared/ui/StoreBadges';
import homeScreen from '../assets/app-screens/home.jpg';
import qrScreen from '../assets/app-screens/qr-scan.jpg';
import scheduleScreen from '../assets/app-screens/schedule.jpg';

type Tab = 'card' | 'qr' | 'schedule';

export const MobileAppShowcase: React.FC = () => {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<Tab>('card');

  const tabs: { id: Tab; label: string; screen: string }[] = [
    { id: 'card', label: t.mobileApp.tabCard, screen: homeScreen },
    { id: 'qr', label: t.mobileApp.tabQr, screen: qrScreen },
    { id: 'schedule', label: t.mobileApp.tabSchedule, screen: scheduleScreen },
  ];

  const benefits = [
    { icon: 'bell' as const, tone: 'bg-brand-tint', title: t.mobileApp.benefit1Title, desc: t.mobileApp.benefit1Desc },
    { icon: 'shield' as const, tone: 'bg-blue-500/10', title: t.mobileApp.benefit2Title, desc: t.mobileApp.benefit2Desc },
    { icon: 'sparkles' as const, tone: 'bg-amber-500/10', title: t.mobileApp.benefit3Title, desc: t.mobileApp.benefit3Desc },
  ];

  return (
    <section id="app" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t.mobileApp.eyebrow} icon={<Smartphone />} title={t.mobileApp.title} subtitle={t.mobileApp.subtitle} />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Real app screens from Figma, switched by tab */}
          <div className="flex flex-col items-center gap-6 lg:col-span-6" {...reveal('zoom-in')}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 scale-125 rounded-full bg-[radial-gradient(closest-side,var(--coral-200),transparent)] opacity-60 blur-2xl dark:opacity-25"
              />
              <PhoneFrame className="w-[280px] sm:w-[320px]">
                {tabs.map((tab) => (
                  <img
                    key={tab.id}
                    src={tab.screen}
                    alt={activeTab === tab.id ? `${t.howItWorks.screenAlt}: ${tab.label}` : ''}
                    aria-hidden={activeTab !== tab.id}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
                      activeTab === tab.id ? 'scale-100 opacity-100' : 'scale-[1.03] opacity-0'
                    }`}
                  />
                ))}
              </PhoneFrame>
            </div>

            <div role="tablist" className="inline-flex rounded-full bg-sunken p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-2.5 text-sm font-bold transition-colors ${
                    activeTab === tab.id ? 'bg-surface text-ink shadow-card' : 'text-ink-2 hover:text-ink'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Benefits and downloads */}
          <div className="space-y-4 lg:col-span-6">
            {benefits.map((b, i) => {
              return (
                <article key={b.title} {...reveal('fade-left', i * 100)} className="group flex items-start gap-4 rounded-3xl bg-surface p-5 shadow-card transition-shadow hover:shadow-lift">
                  <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${b.tone}`}>
                    <Icon3D name={b.icon} delay={i * 400} size={38} />
                  </span>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-ink">{b.title}</h3>
                    <p className="text-[15px] leading-relaxed text-ink-2">{b.desc}</p>
                  </div>
                </article>
              );
            })}

            <div {...reveal('fade-up', 300)} className="rounded-3xl bg-ink p-6 text-white shadow-lift dark:bg-surface-2">
              <p className="mb-4 text-base font-bold">{t.howItWorks.bannerDesc}</p>
              <StoreBadges />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
