import React from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { Icon3D } from '../shared/ui/Icon3D';
import { reveal } from '../app/motion/useScrollReveal';
import { SectionHeader } from '../shared/ui/SectionHeader';
import { TrustBadges } from '../shared/ui/TrustBadges';
import kapitalbankLogo from '../assets/banks/kapitalbank.png';
import ipakYuliLogo from '../assets/banks/ipakyuli.png';
import sqbLogo from '../assets/banks/sqb.png';
import aloqabankLogo from '../assets/banks/aloqabank.png';
import { Badge } from '../shared/ui/Badge';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TrustAndSecurity: React.FC = () => {
  const { t } = useI18n();

  const cards = [
    {
      title: t.security.card1Title,
      desc: t.security.card1Desc,
      icon: <Icon3D name="classical-building" delay={0} size={44} />,
      badge: t.security.card1Badge,
    },
    {
      title: t.security.card2Title,
      desc: t.security.card2Desc,
      icon: <Icon3D name="shield" delay={400} size={44} />,
      badge: t.security.card2Badge,
    },
    {
      title: t.security.card3Title,
      desc: t.security.card3Desc,
      icon: <Icon3D name="sports-medal" delay={800} size={44} />,
      badge: t.security.card3Badge,
    },
    {
      title: t.security.card4Title,
      desc: t.security.card4Desc,
      icon: <Icon3D name="locked" delay={1200} size={44} />,
      badge: t.security.card4Badge,
    },
  ];

  const banks = [
    { name: 'Kapitalbank', logo: kapitalbankLogo },
    { name: "Ipak Yo'li Bank", logo: ipakYuliLogo },
    { name: "O'zsanoatqurilishbank (SQB)", logo: sqbLogo },
    { name: 'Aloqabank', logo: aloqabankLogo },
  ];

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
              {...reveal('fade-up', i * 80)}
              className="group bg-surface p-7 rounded-3xl shadow-card flex flex-col justify-between hover:shadow-lift transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-canvas flex items-center justify-center">
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
        <div {...reveal('fade-up')} className="bg-surface rounded-3xl p-6 sm:p-8 shadow-card text-center space-y-4">
          <TrustBadges className="justify-center pb-2" />
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            {t.security.coFundingTitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {banks.map((bank, index) => (
              <div
                key={bank.name}
                {...reveal('zoom-in', index * 60)}
                className="flex items-center gap-3 rounded-2xl bg-canvas py-2 pl-2 pr-5 text-sm font-extrabold text-ink"
              >
                <img src={bank.logo} alt="" aria-hidden="true" width={36} height={36} className="h-9 w-9 rounded-xl" />
                {bank.name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
