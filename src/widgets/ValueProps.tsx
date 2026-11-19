import React from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { Icon3D } from '../shared/ui/Icon3D';
import { reveal } from '../app/motion/useScrollReveal';
import { SectionHeader } from '../shared/ui/SectionHeader';
import { Badge } from '../shared/ui/Badge';
import { Sparkles, Check } from 'lucide-react';
import payInStore from '../assets/photos/uzcard-pay-in-store.webp';
import payWithPhone from '../assets/photos/uzcard-pay-with-phone.webp';
import tezqrGirl from '../assets/photos/uzcard-tezqr-girl.png';

export const ValueProps: React.FC = () => {
  const { t } = useI18n();

  const cards = [
    {
      icon: <Icon3D name="money-bag" delay={0} size={44} />,
      badge: t.whyHissa.card1Badge,
      title: t.whyHissa.card1Title,
      desc: t.whyHissa.card1Desc,
    },
    {
      icon: <Icon3D name="credit-card" delay={400} size={44} />,
      badge: t.whyHissa.card2Badge,
      title: t.whyHissa.card2Title,
      desc: t.whyHissa.card2Desc,
    },
    {
      icon: <Icon3D name="mobile-phone" delay={800} size={44} />,
      badge: t.whyHissa.card3Badge,
      title: t.whyHissa.card3Title,
      desc: t.whyHissa.card3Desc,
    },
    {
      icon: <Icon3D name="bell" delay={1200} size={44} />,
      badge: t.whyHissa.card4Badge,
      title: t.whyHissa.card4Title,
      desc: t.whyHissa.card4Desc,
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

        {/* Photo bento: real Uzcard imagery (uzcard.uz) */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-6 lg:h-[560px]">
          <figure {...reveal('zoom-in')} className="group relative min-h-[300px] overflow-hidden rounded-[32px] md:col-span-2 md:row-span-2">
            <img src={payInStore} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <figcaption className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl bg-white/90 p-3 pr-5 shadow-lift backdrop-blur-md sm:inset-x-auto sm:left-6 sm:bottom-6">
              <Icon3D name="credit-card" size={40} />
              <span className="text-base font-bold text-[#0c111d]">{t.whyHissa.card2Title}</span>
            </figcaption>
          </figure>
          <figure {...reveal('zoom-in', 120)} className="group relative min-h-[260px] overflow-hidden rounded-[32px]">
            <img src={payWithPhone} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-white/90 p-3 shadow-lift backdrop-blur-md">
              <Icon3D name="bell" size={36} delay={600} />
              <span className="text-sm font-bold text-[#0c111d]">{t.whyHissa.card4Title}</span>
            </figcaption>
          </figure>
          <figure {...reveal('zoom-in', 240)} className="group relative min-h-[260px] overflow-hidden rounded-[32px] bg-gradient-to-br from-[var(--coral-400)] to-[var(--coral-600)]">
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-48 w-48 rounded-full border-[28px] border-white/15" />
            <img src={tezqrGirl} alt="" loading="lazy" className="absolute bottom-0 right-0 h-[105%] w-auto max-w-none object-contain transition-transform duration-700 ease-out group-hover:-translate-y-2" />
            <figcaption className="absolute left-5 top-5 max-w-[55%] text-xl font-extrabold leading-tight tracking-[-0.03em] text-white">
              {t.whyHissa.card3Title}
            </figcaption>
          </figure>
        </div>
        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              {...reveal('fade-up', i * 80)}
              className="group p-6 sm:p-7 rounded-3xl bg-surface shadow-card hover:shadow-lift transition-[translate,box-shadow] duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-surface shadow-card flex items-center justify-center">
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
