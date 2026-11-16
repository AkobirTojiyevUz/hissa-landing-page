import React, { useState, useMemo } from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { Badge } from '../shared/ui/Badge';
import { Button } from '../shared/ui/Button';
import { Calculator, Calendar, ChevronRight, CheckCircle2, Table2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CalculatorSection: React.FC = () => {
  const { t, formatMoney } = useI18n();
  const [amount, setAmount] = useState<number>(3000000);
  const [term, setTerm] = useState<number>(3);
  const [isCalculatedSuccess, setIsCalculatedSuccess] = useState<boolean>(false);

  const presets = [1500000, 3000000, 6000000, 12000000, 20000000];

  const calculation = useMemo(() => {
    const interestRate = term === 3 ? 0 : term === 6 ? 0.03 : 0.06;
    const overpayment = Math.round(amount * interestRate);
    const totalAmount = amount + overpayment;
    const monthlyPayment = Math.round(totalAmount / term);

    const today = new Date();
    const schedule = Array.from({ length: term }, (_, i) => {
      const payDate = new Date(today);
      payDate.setDate(payDate.getDate() + (i + 1) * 30);
      return {
        month: i + 1,
        date: payDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }),
        amount: monthlyPayment,
      };
    });

    return {
      todayPayment: 0,
      monthlyPayment,
      totalAmount,
      overpayment,
      schedule,
    };
  }, [amount, term]);

  const plansComparison = useMemo(() => {
    return [
      {
        months: 3,
        title: t.calculator.plan3Months,
        today: 0,
        monthly: Math.round(amount / 3),
        total: amount,
        overpay: 0,
        badge: t.calculator.month3Badge,
        isZero: true,
      },
      {
        months: 6,
        title: t.calculator.plan6Months,
        today: 0,
        monthly: Math.round((amount * 1.03) / 6),
        total: Math.round(amount * 1.03),
        overpay: Math.round(amount * 0.03),
        badge: t.calculator.month6Badge,
        isZero: false,
      },
      {
        months: 12,
        title: t.calculator.plan12Months,
        today: 0,
        monthly: Math.round((amount * 1.06) / 12),
        total: Math.round(amount * 1.06),
        overpay: Math.round(amount * 0.06),
        badge: t.calculator.month12Badge,
        isZero: false,
      },
    ];
  }, [amount, t]);

  const handleApply = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF655B', '#10B981', '#3B82F6', '#F59E0B'],
    });
    setIsCalculatedSuccess(true);
    setTimeout(() => {
      document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
  };

  return (
    <section id="calculator" className="py-20 md:py-28 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF655B]/5 dark:bg-[#FF655B]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="brand" className="mb-2">
            <Calculator className="w-3.5 h-3.5 mr-1 text-[#FF655B]" />
            {t.calculator.eyebrow}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Calculator Main Widget Box */}
        <div className="bg-white dark:bg-[#13181E] rounded-[2.5rem] border border-gray-200/80 dark:border-gray-800 shadow-2xl p-6 sm:p-10 lg:p-12 max-w-5xl mx-auto mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls: Amount Slider & Term Selector */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Amount Slider Block */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    {t.calculator.amountLabel}
                  </label>
                  <span className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                    {formatMoney(amount)}
                  </span>
                </div>

                {/* Range Slider */}
                <input
                  type="range"
                  min="300000"
                  max="25000000"
                  step="100000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-3 bg-gray-100 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#FF655B]"
                />

                {/* Min / Max Labels */}
                <div className="flex justify-between text-xs font-semibold text-gray-400">
                  <span>300 000 UZS</span>
                  <span>25 000 000 UZS</span>
                </div>

                {/* Quick Presets */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {presets.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setAmount(preset)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                        amount === preset
                          ? 'bg-[#FF655B] text-white border-[#FF655B] shadow-md shadow-[#FF655B]/20'
                          : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-[#FF655B]'
                      }`}
                    >
                      {formatMoney(preset)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Term Selector Block */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    {t.calculator.termLabel}
                  </label>
                  <Badge variant="brand" size="sm">
                    {term === 3 ? t.calculator.month3Badge : term === 6 ? t.calculator.month6Badge : t.calculator.month12Badge}
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { months: 3, label: t.calculator.month3, tag: '0-0-3 (0%)' },
                    { months: 6, label: t.calculator.month6, tag: '0-0-6' },
                    { months: 12, label: t.calculator.month12, tag: '0-0-12' },
                  ].map((item) => (
                    <button
                      key={item.months}
                      onClick={() => setTerm(item.months)}
                      className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                        term === item.months
                          ? 'border-[#FF655B] bg-[#FF655B]/10 dark:bg-[#FF655B]/15 text-gray-900 dark:text-white shadow-md'
                          : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/40 text-gray-700 dark:text-gray-300 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-base font-extrabold">{item.label}</div>
                      <div className="text-[11px] font-semibold text-[#FF655B] mt-0.5">
                        {item.tag}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Visual Schedule Timeline */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#FF655B]" />
                  {t.calculator.scheduleTitle}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {calculation.schedule.slice(0, 3).map((item) => (
                    <div
                      key={item.month}
                      className="bg-gray-50 dark:bg-[#181F26] p-3 rounded-xl border border-gray-100 dark:border-gray-800"
                    >
                      <div className="text-[10px] font-bold text-gray-400">
                        {item.month}{t.calculator.monthPrefix} · {item.date}
                      </div>
                      <div className="text-xs font-extrabold text-gray-900 dark:text-white mt-1">
                        {formatMoney(item.amount)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#181F26] dark:to-[#13181E] p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 space-y-6">
              
              <div className="space-y-4">
                {/* Due Today */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-200/70 dark:border-gray-700/60">
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                    {t.calculator.cardTodayPay}
                  </span>
                  <span className="text-base font-black text-emerald-600 dark:text-emerald-400">
                    {t.calculator.zeroSum}
                  </span>
                </div>

                {/* Monthly Payment */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-200/70 dark:border-gray-700/60">
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                    {t.calculator.cardMonthlyPay}
                  </span>
                  <span className="text-xl font-black text-[#FF655B]">
                    {formatMoney(calculation.monthlyPayment)}
                  </span>
                </div>

                {/* Total Payment */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-200/70 dark:border-gray-700/60">
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                    {t.calculator.cardTotalPay}
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {formatMoney(calculation.totalAmount)}
                  </span>
                </div>

                {/* Overpayment */}
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                    {t.calculator.cardOverpay}
                  </span>
                  <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">
                    {calculation.overpayment === 0 ? '0 UZS (0%)' : formatMoney(calculation.overpayment)}
                  </span>
                </div>
              </div>

              {/* Apply CTA */}
              <div className="space-y-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleApply}
                  rightIcon={<ChevronRight className="w-4 h-4" />}
                  className="w-full text-base py-4 font-bold shadow-xl shadow-[#FF655B]/25"
                >
                  {t.calculator.applyCta}
                </Button>

                {isCalculatedSuccess && (
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold text-center animate-in fade-in">
                    {t.calculator.successToast}
                  </div>
                )}

                <p className="text-[10px] text-gray-400 text-center leading-normal">
                  {t.calculator.disclaimer}
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Side-by-Side Tariff Comparison (Qisqa tarif taqqoslash - 3 ta muddat bir qarashda) */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-[#13181E] rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2">
            <Table2 className="w-4 h-4 text-[#FF655B]" />
            <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
              {t.calculator.comparePlansTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plansComparison.map((plan) => {
              const isSelected = term === plan.months;
              return (
                <div
                  key={plan.months}
                  onClick={() => setTerm(plan.months)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#FF655B] bg-[#FF655B]/5 dark:bg-[#FF655B]/10 shadow-md ring-2 ring-[#FF655B]/20'
                      : 'border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#181F26]/40 hover:border-gray-300'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-extrabold text-gray-900 dark:text-white">
                        {plan.title}
                      </span>
                      {plan.isZero && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                          {t.calculator.recommended}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800/80 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">{t.calculator.colToday}:</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">{t.calculator.zeroSum}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">{t.calculator.colMonthly}:</span>
                        <span className="font-extrabold text-[#FF655B]">{formatMoney(plan.monthly)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">{t.calculator.colTotal}:</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{formatMoney(plan.total)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">{t.calculator.colOverpay}:</span>
                        <span className={`font-bold ${plan.isZero ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-800 dark:text-gray-200'}`}>
                          {plan.overpay === 0 ? t.calculator.zeroOverpay : formatMoney(plan.overpay)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-gray-400">{plan.badge}</span>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-[#FF655B]" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
