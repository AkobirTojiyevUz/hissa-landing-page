import React, { useState } from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { Icon3D } from '../shared/ui/Icon3D';
import { reveal } from '../app/motion/useScrollReveal';
import { SectionHeader } from '../shared/ui/SectionHeader';
import partnersPhoto from '../assets/photos/uzcard-partners-meeting.webp';
import { StoreBrandLogo } from '../shared/ui/StoreBrandLogo';
import { PARTNERS } from '../shared/config/partners';
import { Badge } from '../shared/ui/Badge';
import { Button } from '../shared/ui/Button';
import { Briefcase, ArrowRight, CheckCircle2, Building, Phone, Hash, Calculator, Scale, Clock, FileCheck2, Percent, Banknote, ShieldAlert } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MerchantB2BSectionProps {
  onOpenMerchantModal: () => void;
}

export const MerchantB2BSection: React.FC<MerchantB2BSectionProps> = ({ onOpenMerchantModal }) => {
  const { t } = useI18n();

  // B2B Turnover Slider State
  const [turnover, setTurnover] = useState<number>(250000000); // 250M UZS default

  // Inline B2B Form State
  const [formData, setFormData] = useState({
    companyName: '',
    inn: '',
    phone: '',
    category: 'retail',
    turnover: 'turnover2',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculations for B2B Growth
  const additionalRevenue = Math.round(turnover * 0.74);
  const totalWithHissa = turnover + additionalRevenue;
  const newShoppersMonthly = Math.round((turnover / 850000) * 0.45);

  const formatUzs = (num: number) => {
    return new Intl.NumberFormat('uz-UZ').format(num) + ' UZS';
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#FF655B', '#10B981', '#3B82F6'],
      });
    }, 900);
  };

  const stats = [
    { value: t.merchant.stat1Value, label: t.merchant.stat1Label, color: 'text-brand-ink' },
    { value: t.merchant.stat2Value, label: t.merchant.stat2Label, color: 'text-emerald-500' },
    { value: t.merchant.stat3Value, label: t.merchant.stat3Label, color: 'text-blue-500' },
    { value: t.merchant.stat4Value, label: t.merchant.stat4Label, color: 'text-amber-500' },
  ];

  const solutions = [
    {
      title: t.merchant.solRetailTitle,
      desc: t.merchant.solRetailDesc,
      badge: t.merchant.solRetailBadge,
      icon: <Icon3D name="convenience-store" delay={0} size={44} />,
      tags: ['Uzcard POS', 'TezQR Kassa', 'Smartfon ilovasi'],
    },
    {
      title: t.merchant.solEcomTitle,
      desc: t.merchant.solEcomDesc,
      badge: t.merchant.solEcomBadge,
      icon: <Icon3D name="globe-with-meridians" delay={400} size={44} />,
      tags: ['REST API', 'WooCommerce', 'OpenCart', 'Telegram Bot'],
    },
    {
      title: t.merchant.solEnterpriseTitle,
      desc: t.merchant.solEnterpriseDesc,
      badge: t.merchant.solEnterpriseBadge,
      icon: <Icon3D name="package" delay={800} size={44} />,
      tags: ['1C:Korxona', 'IIKO & R-Keeper', 'B2B Menejer', 'Maxsus SLA'],
    },
    {
      title: t.merchant.solServicesTitle,
      desc: t.merchant.solServicesDesc,
      badge: t.merchant.solServicesBadge,
      icon: <Icon3D name="rocket" delay={1200} size={44} />,
      tags: ['To\'lov havolalari', 'Elektron schyot-faktura', 'Klinikalar & Kurslar'],
    },
  ];

  const comparisonRows = [
    {
      label: t.merchant.compRow1,
      hissa: t.merchant.compRow1Hissa,
      bank: t.merchant.compRow1Bank,
      icon: <Clock className="w-4 h-4 text-brand-ink" />,
    },
    {
      label: t.merchant.compRow2,
      hissa: t.merchant.compRow2Hissa,
      bank: t.merchant.compRow2Bank,
      icon: <FileCheck2 className="w-4 h-4 text-emerald-500" />,
    },
    {
      label: t.merchant.compRow3,
      hissa: t.merchant.compRow3Hissa,
      bank: t.merchant.compRow3Bank,
      icon: <Percent className="w-4 h-4 text-blue-500" />,
    },
    {
      label: t.merchant.compRow4,
      hissa: t.merchant.compRow4Hissa,
      bank: t.merchant.compRow4Bank,
      icon: <Banknote className="w-4 h-4 text-amber-500" />,
    },
    {
      label: t.merchant.compRow5,
      hissa: t.merchant.compRow5Hissa,
      bank: t.merchant.compRow5Bank,
      icon: <ShieldAlert className="w-4 h-4 text-indigo-500" />,
    },
  ];

  const onboardingSteps = [
    {
      num: '01',
      title: t.merchant.step1Title,
      desc: t.merchant.step1Desc,
      badge: '2 daqiqa',
    },
    {
      num: '02',
      title: t.merchant.step2Title,
      desc: t.merchant.step2Desc,
      badge: '10 daqiqa',
    },
    {
      num: '03',
      title: t.merchant.step3Title,
      desc: t.merchant.step3Desc,
      badge: '1-2 kun',
    },
  ];

  return (
    <section id="for-business" className="py-20 md:py-28 bg-gray-50/70 dark:bg-[#0B1015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={t.merchant.eyebrow}
          icon={<Briefcase />}
          title={t.merchant.title}
          subtitle={t.merchant.subtitle}
        />

        {/* Partners photo (uzcard.uz) */}
        <figure {...reveal('zoom-in')} className="group relative mb-10 h-64 overflow-hidden rounded-[32px] shadow-lift sm:h-80 lg:h-[380px]">
          <img src={partnersPhoto} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#0c111d]/80 via-[#0c111d]/30 to-transparent" />
          <figcaption className="absolute bottom-6 left-6 right-6 max-w-md space-y-4 sm:bottom-10 sm:left-10">
            <p className="text-2xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-3xl">{t.merchant.subtitle}</p>
            <span className="flex -space-x-2">
              {PARTNERS.slice(0, 6).map((p) => (
                <StoreBrandLogo key={p.id} storeId={p.id} name={p.name} className="h-10 w-10 rounded-full ring-2 ring-white" />
              ))}
            </span>
          </figcaption>
        </figure>
        {/* 4 Big Business Stat Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((s, i) => (
            <div
              key={i}
              {...reveal('fade-up', i * 80)}
              className="bg-surface p-6 sm:p-8 rounded-3xl shadow-card text-center transition-shadow hover:shadow-lift"
            >
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-black ${s.color} tracking-tight mb-2`}>
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-ink-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive B2B Merchant Revenue Growth Calculator */}
        <div className="mb-20 bg-surface rounded-3xl border border-line shadow-xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 dark:bg-brand/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Slider & Inputs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <Badge variant="brand" size="sm">
                  <Calculator className="w-3 h-3 mr-1" />
                  {t.merchant.calcTitle}
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-ink">
                  {t.merchant.calcTitle}
                </h3>
                <p className="text-xs sm:text-sm text-ink-3">
                  {t.merchant.calcSubtitle}
                </p>
              </div>

              {/* Slider */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                  <span className="text-ink-2">{t.merchant.turnoverLabel}</span>
                  <span className="text-lg sm:text-xl font-black text-brand-ink">
                    {formatUzs(turnover)}
                  </span>
                </div>
                <input
                  type="range"
                  min={50000000}
                  max={2000000000}
                  step={25000000}
                  value={turnover}
                  onChange={(e) => setTurnover(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand"
                />
                <div className="flex justify-between text-[11px] text-gray-400 font-semibold">
                  <span>50 mln UZS</span>
                  <span>1 mlrd UZS</span>
                  <span>2 mlrd UZS</span>
                </div>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-surface-2 border border-line text-center">
                  <div className="text-[11px] text-gray-400 mb-1">{t.merchant.avgCheckLabel}</div>
                  <div className="text-base sm:text-lg font-black text-brand-ink">+74%</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-surface-2 border border-line text-center">
                  <div className="text-[11px] text-gray-400 mb-1">{t.merchant.newShoppersLabel}</div>
                  <div className="text-base sm:text-lg font-black text-emerald-500">~{newShoppersMonthly}+ / oy</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-surface-2 border border-line text-center">
                  <div className="text-[11px] text-gray-400 mb-1">{t.merchant.settlementLabel}:</div>
                  <div className="text-base sm:text-lg font-black text-blue-500">{t.merchant.settlementValue}</div>
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand to-brand-pressed text-white p-7 sm:p-8 rounded-3xl shadow-xl space-y-5 text-center flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 text-white px-3 py-1 rounded-full inline-block mb-3">
                  {t.merchant.projectedGrowthLabel}
                </span>
                <div className="text-3xl sm:text-4xl font-black mb-1">
                  +{formatUzs(additionalRevenue)}
                </div>
                <p className="text-xs text-white/80">
                  Hissa BNPL orqali kutilayotgan umumiy oylik aylanma:{' '}
                  <b>{formatUzs(totalWithHissa)}</b>
                </p>
              </div>

              <div className="pt-4 border-t border-white/20 space-y-3">
                <Button
                  variant="glass"
                  size="lg"
                  onClick={onOpenMerchantModal}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full justify-center bg-white text-brand-ink hover:bg-white/90 font-bold py-3 shadow-lg"
                >
                  {t.merchant.calcApplyBtn}
                </Button>
                <div className="text-[10px] text-white/70">
                  ✓ {t.merchant.riskGuarantee}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Solutions for Every Business Model */}
        <div className="mb-20 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-ink">
              {t.merchant.solutionsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-ink-2">
              {t.merchant.solutionsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((sol, index) => (
              <div
                key={index}
                {...reveal('fade-up', index * 80)}
                className="group bg-surface p-6 rounded-3xl shadow-card flex flex-col justify-between hover:shadow-lift hover:-translate-y-1 transition-[translate,box-shadow]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-canvas flex items-center justify-center">
                      {sol.icon}
                    </div>
                    <Badge variant="brand" size="sm">
                      {sol.badge}
                    </Badge>
                  </div>
                  <h4 className="text-base font-bold text-ink mb-2">
                    {sol.title}
                  </h4>
                  <p className="text-xs text-ink-2 leading-relaxed mb-4">
                    {sol.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-line flex flex-wrap gap-1.5">
                  {sol.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 dark:bg-[#181F26] text-ink-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Hissa BNPL vs Traditional Credit Comparison Matrix */}
        <div className="mb-20 bg-surface rounded-3xl border border-line shadow-xl p-6 sm:p-10 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="brand" size="sm">
              <Scale className="w-3 h-3 mr-1" />
              {t.merchant.compareBadge}
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-ink">
              {t.merchant.compareTitle}
            </h3>
            <p className="text-xs sm:text-sm text-ink-2">
              {t.merchant.compareSubtitle}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-line text-xs sm:text-sm">
                  <th className="py-4 px-4 font-bold text-gray-400 uppercase tracking-wider">
                    {t.merchant.compareFeature}
                  </th>
                  <th className="py-4 px-4 font-extrabold text-brand-ink bg-brand/5 dark:bg-brand/10 rounded-t-xl">
                    ✓ {t.merchant.compareHissa}
                  </th>
                  <th className="py-4 px-4 font-bold text-ink-3">
                    ✕ {t.merchant.compareBank}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800/60 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-[#181F26]/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                      {row.icon}
                      <span>{row.label}</span>
                    </td>
                    <td className="py-4 px-4 font-extrabold text-emerald-600 dark:text-emerald-400 bg-brand/5 dark:bg-brand/10">
                      {row.hissa}
                    </td>
                    <td className="py-4 px-4 text-ink-3">
                      {row.bank}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3-Step Digital Onboarding Timeline */}
        <div className="mb-20 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-ink">
              {t.merchant.stepsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {onboardingSteps.map((step, idx) => (
              <div
                key={idx}
                {...reveal('fade-up', idx * 100)}
                className="bg-surface p-8 rounded-3xl border border-line shadow-sm relative overflow-hidden group hover:border-brand/40 transition-all"
              >
                <div className="text-5xl font-black text-gray-100 dark:text-[#1D2329] group-hover:text-brand-ink/15 transition-colors absolute top-4 right-6 select-none">
                  {step.num}
                </div>
                <div className="relative z-10 space-y-3">
                  <Badge variant="brand" size="sm">
                    {step.badge}
                  </Badge>
                  <h4 className="text-lg font-bold text-ink">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Inline B2B Merchant Application Form */}
        <div className="rounded-3xl bg-surface border border-line shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Form Pitch */}
            <div className="lg:col-span-5 space-y-4">
              <Badge variant="brand" size="sm">
                <Briefcase className="w-3 h-3 mr-1" />
                {t.merchant.integrationBadge}
              </Badge>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink leading-tight">
                {t.merchant.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                {t.merchant.formSubtitle}
              </p>

              <div className="space-y-3 pt-4 border-t border-line">
                <div className="flex items-center gap-2 text-xs font-bold text-ink-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>1-2 ish kunida to'liq ishga tushirish</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-ink-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t.merchant.settlementPoint}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-ink-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>0% kredit xatari va bepul marketing</span>
                </div>
              </div>
            </div>

            {/* Actual Interactive Form */}
            <div className="lg:col-span-7 bg-surface-2 p-6 sm:p-8 rounded-2xl border border-line">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-extrabold text-ink">
                    {t.merchant.formSuccess}
                  </h4>
                  <p className="text-xs text-ink-3 max-w-sm mx-auto">
                    {t.merchant.formSuccessDesc}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                  >
                    {t.merchant.sendAnother}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold text-ink-2 mb-1">
                        {t.modal.companyName}
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          required
                          type="text"
                          placeholder={t.modal.companyPlaceholder}
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 bg-surface border border-line rounded-xl text-xs text-ink focus:outline-none focus:ring-2 focus:ring-brand"
                        />
                      </div>
                    </div>

                    {/* INN */}
                    <div>
                      <label className="block text-xs font-bold text-ink-2 mb-1">
                        {t.modal.inn}
                      </label>
                      <div className="relative">
                        <Hash className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          required
                          type="text"
                          maxLength={9}
                          placeholder={t.modal.innPlaceholder}
                          value={formData.inn}
                          onChange={(e) => setFormData({ ...formData, inn: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 bg-surface border border-line rounded-xl text-xs text-ink focus:outline-none focus:ring-2 focus:ring-brand"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-ink-2 mb-1">
                        {t.modal.phone}
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          required
                          type="tel"
                          placeholder={t.modal.phonePlaceholder}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 bg-surface border border-line rounded-xl text-xs text-ink focus:outline-none focus:ring-2 focus:ring-brand"
                        />
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-xs font-bold text-ink-2 mb-1">
                        {t.modal.category}
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-surface border border-line rounded-xl text-xs text-ink focus:outline-none focus:ring-2 focus:ring-brand"
                      >
                        <option value="retail">{t.modal.categoryRetail}</option>
                        <option value="electronics">{t.modal.categoryElectronics}</option>
                        <option value="fashion">{t.modal.categoryFashion}</option>
                        <option value="services">{t.modal.categoryServices}</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full justify-center text-sm py-3 font-bold shadow-lg shadow-brand/25"
                    >
                      {t.merchant.ctaBtn}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
