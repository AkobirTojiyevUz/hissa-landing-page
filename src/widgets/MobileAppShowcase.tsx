import React, { useState } from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { Badge } from '../shared/ui/Badge';
import { HissaMark } from '../shared/ui/HissaMark';
import { Smartphone, QrCode, ShieldCheck, Bell, Sparkles } from 'lucide-react';

export const MobileAppShowcase: React.FC = () => {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<'card' | 'qr' | 'schedule'>('card');

  return (
    <section id="app" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#FF655B]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="brand" className="mb-2">
            <Smartphone className="w-3.5 h-3.5 mr-1 text-[#FF655B]" />
            {t.mobileApp.eyebrow}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t.mobileApp.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            {t.mobileApp.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Phone Interactive Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            
            {/* Phone Outer Shell */}
            <div className="relative w-[320px] sm:w-[350px] bg-gray-900 rounded-[3rem] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border-4 border-gray-800">
              
              {/* Dynamic Island */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-800" />
                <div className="w-2 h-2 rounded-full bg-[#FF655B] animate-pulse" />
              </div>

              {/* Phone Inner Screen */}
              <div className="relative bg-[#0A0F14] text-white rounded-[2.5rem] overflow-hidden pt-10 pb-6 px-4 min-h-[580px] flex flex-col justify-between border border-gray-800">
                
                {/* Top App Bar inside Phone */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <HissaMark size={16} animated={true} />
                      <span className="text-xs font-black tracking-wider text-white">hissa</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-800/80 px-2 py-1 rounded-full text-[10px] font-bold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Uzcard Online
                    </div>
                  </div>

                  {/* Inside-Phone Tab Switcher */}
                  <div className="grid grid-cols-3 gap-1 bg-gray-900 p-1 rounded-2xl mb-4 border border-gray-800">
                    <button
                      onClick={() => setActiveTab('card')}
                      className={`text-[10px] font-bold py-1.5 rounded-xl transition-all ${
                        activeTab === 'card'
                          ? 'bg-[#FF655B] text-white shadow-sm'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {t.mobileApp.tabCard}
                    </button>
                    <button
                      onClick={() => setActiveTab('qr')}
                      className={`text-[10px] font-bold py-1.5 rounded-xl transition-all ${
                        activeTab === 'qr'
                          ? 'bg-[#FF655B] text-white shadow-sm'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {t.mobileApp.tabQr}
                    </button>
                    <button
                      onClick={() => setActiveTab('schedule')}
                      className={`text-[10px] font-bold py-1.5 rounded-xl transition-all ${
                        activeTab === 'schedule'
                          ? 'bg-[#FF655B] text-white shadow-sm'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {t.mobileApp.tabSchedule}
                    </button>
                  </div>

                  {/* Tab 1: Virtual Card & Limit Screen */}
                  {activeTab === 'card' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      {/* Realistic Uzcard Hissa Virtual Card */}
                      <div className="relative rounded-2xl bg-gradient-to-tr from-[#1E252D] via-[#2A3440] to-[#FF655B]/40 p-4 border border-white/10 shadow-lg overflow-hidden">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-gray-300">Uzcard BNPL</span>
                            <div className="text-sm font-black text-white mt-0.5">Hissa Platinum</div>
                          </div>
                          <HissaMark size={20} animated={true} />
                        </div>
                        <div className="text-[10px] text-gray-400">Mavjud xarid limiti</div>
                        <div className="text-xl font-black text-white tracking-tight">
                          12 500 000 UZS
                        </div>
                        <div className="mt-4 flex justify-between items-end text-[10px] text-gray-300">
                          <span>•••• 4820</span>
                          <span className="font-bold uppercase tracking-wider text-[#FF655B]">UZCARD</span>
                        </div>
                      </div>

                      {/* Limit Progress */}
                      <div className="bg-gray-900/90 p-3 rounded-2xl border border-gray-800 space-y-2">
                        <div className="flex justify-between text-[11px] font-semibold">
                          <span className="text-gray-400">Umumiy limit</span>
                          <span className="text-white">15 000 000 UZS</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-[#FF655B] rounded-full" />
                        </div>
                        <div className="flex justify-between text-[10px] text-gray-400">
                          <span>Sarflangan: 2 500 000 UZS</span>
                          <span className="text-emerald-400 font-bold">Faol</span>
                        </div>
                      </div>

                      {/* Recent transactions mini list */}
                      <div className="bg-gray-900/90 p-3 rounded-2xl border border-gray-800 space-y-2">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                          So'nggi to'lovlar
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-gray-200">Texnomart</span>
                          <span className="font-bold text-white">450 000 UZS · 1/3</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-gray-200">Bellstore</span>
                          <span className="font-bold text-white">180 000 UZS · 2/3</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: TezQR Checkout Screen */}
                  {activeTab === 'qr' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="relative aspect-square w-full rounded-2xl bg-gray-900 border-2 border-dashed border-[#FF655B]/60 p-4 flex flex-col items-center justify-center">
                        <QrCode className="w-24 h-24 text-[#FF655B] opacity-90 animate-pulse" />
                        <span className="text-xs font-bold text-white mt-3">Kassadagi QR kodni ko'rsating</span>
                        <span className="text-[10px] text-gray-400">TezQR integratsiyasi</span>
                      </div>

                      <div className="bg-gray-900 p-3 rounded-2xl border border-gray-800 space-y-1 text-center">
                        <div className="text-xs font-extrabold text-white">Texnomart Chilonzor</div>
                        <div className="text-[11px] text-gray-400">Xarid: 1 800 000 UZS · 0-0-3</div>
                        <div className="text-xs font-bold text-emerald-400 pt-1">Bugun: 0 UZS · Keyin: 600 000 UZS/oy</div>
                      </div>
                    </div>
                  )}

                  {/* Tab 3: Schedule Screen */}
                  {activeTab === 'schedule' && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div className="text-xs font-bold text-white mb-2">Yaqinlashayotgan to'lovlar</div>
                      
                      <div className="bg-gray-900 p-3 rounded-2xl border border-gray-800 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                            ✓
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">1-to'lov to'landi</div>
                            <div className="text-[10px] text-gray-400">12 Oktabr</div>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-gray-300">450 000 UZS</span>
                      </div>

                      <div className="bg-[#FF655B]/15 p-3 rounded-2xl border border-[#FF655B]/40 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-[#FF655B] text-white flex items-center justify-center text-xs font-bold">
                            2
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">2-to'lov (Navbatdagi)</div>
                            <div className="text-[10px] text-[#FF847A]">12 Noyabr · 3 kundan so'ng</div>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-[#FF655B]">450 000 UZS</span>
                      </div>

                      <div className="bg-gray-900 p-3 rounded-2xl border border-gray-800 flex items-center justify-between opacity-70">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center text-xs font-bold">
                            3
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">3-to'lov (Yakuniy)</div>
                            <div className="text-[10px] text-gray-400">12 Dekabr</div>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-gray-400">450 000 UZS</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Inside-Phone Button */}
                <div className="pt-4 border-t border-gray-800/80">
                  <button className="w-full py-2.5 bg-[#FF655B] text-white rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-md">
                    <QrCode className="w-4 h-4" />
                    TezQR bilan to'lash
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: App Features, QR code & Download Links */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF655B]/10 text-[#FF655B] flex items-center justify-center shrink-0">
                <Bell className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {t.mobileApp.benefit1Title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
                  {t.mobileApp.benefit1Desc}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {t.mobileApp.benefit2Title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
                  {t.mobileApp.benefit2Desc}
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {t.mobileApp.benefit3Title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
                  {t.mobileApp.benefit3Desc}
                </p>
              </div>
            </div>

            {/* QR Download Card */}
            <div className="bg-white dark:bg-[#13181E] p-6 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl flex flex-col sm:flex-row items-center gap-6">
              {/* QR Code Graphic */}
              <div className="w-24 h-24 bg-white p-2 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center text-white font-mono text-[9px] text-center p-1 leading-tight">
                  SCAN FOR HISSA APP
                </div>
              </div>
              <div className="space-y-3 text-center sm:text-left">
                <div className="text-xs font-bold text-gray-900 dark:text-white">
                  {t.mobileApp.scanQrToDownload}
                </div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-800 dark:text-gray-200">
                     App Store
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-800 dark:text-gray-200">
                    Google Play
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-800 dark:text-gray-200">
                    AppGallery
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
