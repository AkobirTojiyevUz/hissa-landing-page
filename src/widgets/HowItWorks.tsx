import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useI18n } from '../app/i18n/I18nContext';
import { Icon3D } from '../shared/ui/Icon3D';
import { reveal } from '../app/motion/useScrollReveal';
import { SectionHeader } from '../shared/ui/SectionHeader';
import { HissaMark } from '../shared/ui/HissaMark';
import { PhoneFrame } from '../shared/ui/PhoneFrame';
import homeScreen from '../assets/app-screens/home.jpg';
import mapScreen from '../assets/app-screens/map.jpg';
import qrScreen from '../assets/app-screens/qr-scan.jpg';
import successScreen from '../assets/app-screens/success.jpg';

/**
 * Scroll-driven product walkthrough (Afterpay/Klarna style): on desktop the
 * phone stays sticky while the steps scroll past, and the screen inside it
 * cross-fades to the step currently in the middle of the viewport. On mobile
 * every step shows its own screen inline.
 * Screens are exports of the Hissa app frames in Figma ("Hissa · Branch").
 */
export const HowItWorks: React.FC = () => {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  const steps = [
    { num: t.howItWorks.step1Num, title: t.howItWorks.step1Title, desc: t.howItWorks.step1Desc, highlight: t.howItWorks.step1Highlight, icon: 'identification-card' as const, screen: homeScreen },
    { num: t.howItWorks.step2Num, title: t.howItWorks.step2Title, desc: t.howItWorks.step2Desc, highlight: t.howItWorks.step2Highlight, icon: 'department-store' as const, screen: mapScreen },
    { num: t.howItWorks.step3Num, title: t.howItWorks.step3Title, desc: t.howItWorks.step3Desc, highlight: t.howItWorks.step3Highlight, icon: 'mobile-phone' as const, screen: qrScreen },
    { num: t.howItWorks.step4Num, title: t.howItWorks.step4Title, desc: t.howItWorks.step4Desc, highlight: t.howItWorks.step4Highlight, icon: 'spiral-calendar' as const, screen: successScreen },
  ];

  // The active step is the last one whose top has passed the viewport centre.
  // Computed from positions (not IntersectionObserver) so fast scrolls and
  // anchor jumps never leave the phone on a stale screen.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const centre = window.innerHeight / 2;
      let next = 0;
      stepRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < centre) next = i;
      });
      setActive(next);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="how-it-works" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.howItWorks.eyebrow}
          icon={<HissaMark size={12} animated className="!w-auto" />}
          title={t.howItWorks.title}
          subtitle={t.howItWorks.subtitle}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Steps */}
          <ol className="relative">
            {/* Progress rail (desktop) */}
            <div aria-hidden="true" className="absolute bottom-[25vh] left-6 top-[25vh] hidden w-0.5 rounded-full bg-line lg:block">
              <div
                className="w-full rounded-full bg-brand transition-[height] duration-500 ease-out"
                style={{ height: `${((active + 1) / steps.length) * 100}%` }}
              />
            </div>

            {steps.map((step, i) => {
              const isActive = active === i;
              return (
                <li
                  key={step.num}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  data-step={i}
                  {...reveal('fade-up')}
                  className="group flex flex-col justify-center py-6 lg:min-h-[70vh] lg:py-0"
                >
                  <div
                    className={`flex gap-5 transition-opacity duration-500 ${isActive ? 'lg:opacity-100' : 'lg:opacity-40'}`}
                  >
                    <span
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ${
                        isActive ? 'bg-brand-tint ring-2 ring-brand shadow-brand' : 'bg-surface shadow-card'
                      }`}
                    >
                      <Icon3D name={step.icon} size={34} />
                    </span>
                    <div className="max-w-md space-y-3">
                      <p className="text-sm font-extrabold text-brand-ink">{step.num}</p>
                      <h3 className="text-2xl font-extrabold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">{step.title}</h3>
                      <p className="text-base leading-relaxed text-ink-2 sm:text-lg">{step.desc}</p>
                      <p className="inline-flex items-center gap-2 rounded-full bg-success-soft px-3 py-1.5 text-sm font-bold text-success">
                        <CheckCircle2 className="h-4 w-4" />
                        {step.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Inline screen on mobile/tablet */}
                  <PhoneFrame className="mx-auto mt-8 w-[min(280px,80%)] lg:hidden">
                    <img src={step.screen} alt={`${t.howItWorks.screenAlt}: ${step.title}`} loading="lazy" className="block h-full w-full object-cover" />
                  </PhoneFrame>
                </li>
              );
            })}
          </ol>

          {/* Sticky phone (desktop) */}
          <div className="relative hidden lg:block">
            <div className="sticky top-[12vh] flex h-[76vh] items-center justify-center">
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-1/2 h-3/4 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,var(--coral-200),transparent)] opacity-60 blur-2xl dark:opacity-25"
              />
              <PhoneFrame className="relative h-full max-h-[720px]">
                {steps.map((step, i) => (
                  <img
                    key={step.num}
                    src={step.screen}
                    alt={active === i ? `${t.howItWorks.screenAlt}: ${step.title}` : ''}
                    aria-hidden={active !== i}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
                      active === i ? 'scale-100 opacity-100' : 'scale-[1.03] opacity-0'
                    }`}
                  />
                ))}
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
