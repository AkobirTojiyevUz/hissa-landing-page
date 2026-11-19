import React from 'react';
import { CreditCard, ArrowRight, UserCheck, Sparkles } from 'lucide-react';
import { useI18n } from '../app/i18n/I18nContext';
import { Icon3D } from '../shared/ui/Icon3D';
import { reveal } from '../app/motion/useScrollReveal';
import { SectionHeader } from '../shared/ui/SectionHeader';
import { Button } from '../shared/ui/Button';

export const EligibilitySection: React.FC = () => {
  const { t } = useI18n();

  const steps = [
    {
      icon: <Icon3D name="identification-card" delay={0} size={44} />,
      title: t.eligibility.step1Title,
      desc: t.eligibility.step1Desc,
      note: t.eligibility.step1Note,
      tone: 'bg-brand-tint text-brand-ink',
      noteTone: 'text-brand-ink',
    },
    {
      icon: <Icon3D name="credit-card" delay={500} size={44} />,
      title: t.eligibility.step2Title,
      desc: t.eligibility.step2Desc,
      note: t.eligibility.step2Note,
      tone: 'bg-success-soft text-success',
      noteTone: 'text-success',
    },
  ];

  return (
    <section id="eligibility" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t.eligibility.eyebrow} icon={<UserCheck />} title={t.eligibility.title}>
          <p className="mx-auto mt-2 inline-flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 text-sm font-semibold text-ink-2 shadow-card">
            <CreditCard className="h-5 w-5 shrink-0 text-brand-ink" />
            <span>{t.eligibility.requirement}</span>
          </p>
        </SectionHeader>

        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {steps.map((step, i) => (
            <article
              key={step.title}
              {...reveal('fade-up', i * 100)}
              className="group flex flex-col justify-between rounded-3xl bg-surface p-6 shadow-card transition-shadow duration-200 hover:shadow-lift sm:p-8"
            >
              <div className="space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-canvas">{step.icon}</div>
                <h3 className="text-lg font-bold text-ink sm:text-xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-2">{step.desc}</p>
              </div>
              <p className={`mt-6 flex items-center gap-2 border-t border-line pt-4 text-xs font-bold ${step.noteTone}`}>
                <Sparkles className="h-3.5 w-3.5" />
                {step.note}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center" {...reveal('fade-up', 200)}>
          <Button
            size="lg"
            onClick={() => document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' })}
            rightIcon={<ArrowRight className="h-5 w-5" />}
          >
            {t.eligibility.ctaBtn}
          </Button>
        </div>
      </div>
    </section>
  );
};
