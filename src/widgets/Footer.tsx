import React from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { HissaLogo } from '../shared/ui/HissaLogo';
import { Phone, Mail, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenMerchantModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMerchantModal }) => {
  const { t } = useI18n();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#070A0E] text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-100 dark:border-gray-800">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <HissaLogo height={28} animated={true} />
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                UZCARD
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>PCI DSS v4.0.1</span>
              </div>
              <div className="text-xs font-semibold text-gray-400 px-2 py-1">
                UZCARD Protected
              </div>
            </div>
          </div>

          {/* Shoppers Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              {t.footer.colShoppers}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#calculator" className="hover:text-[#FF655B] transition-colors">
                  {t.nav.calculator}
                </a>
              </li>
              <li>
                <a href="#stores" className="hover:text-[#FF655B] transition-colors">
                  {t.nav.stores}
                </a>
              </li>
              <li>
                <a href="#app" className="hover:text-[#FF655B] transition-colors">
                  {t.nav.app}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#FF655B] transition-colors">
                  {t.nav.howItWorks}
                </a>
              </li>
            </ul>
          </div>

          {/* Merchants Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              {t.footer.colMerchants}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenMerchantModal}
                  className="hover:text-[#FF655B] transition-colors text-left"
                >
                  {t.nav.partnerCta}
                </button>
              </li>
              <li>
                <a href="#for-business" className="hover:text-[#FF655B] transition-colors">
                  {t.nav.forBusiness}
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-[#FF655B] transition-colors">
                  {t.nav.security}
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              {t.footer.colSupport}
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="tel:+998712000000"
                className="flex items-center gap-2 font-bold text-gray-900 dark:text-white hover:text-[#FF655B] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF655B]" />
                {t.footer.supportPhone}
              </a>
              <div className="text-[11px] text-gray-400">
                {t.footer.supportHours}
              </div>
              <a
                href="mailto:support@hissa.uz"
                className="flex items-center gap-2 text-gray-500 hover:text-[#FF655B] transition-colors pt-1"
              >
                <Mail className="w-3.5 h-3.5" />
                support@hissa.uz
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Disclaimers, Legal, Back to top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 dark:text-gray-400">
          <div className="text-center md:text-left space-y-1">
            <div>{t.footer.copyright}</div>
            <div className="text-gray-400 dark:text-gray-400">{t.footer.licenseText}</div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#FF655B] transition-colors">
              {t.footer.privacyPolicy}
            </a>
            <a href="#" className="hover:text-[#FF655B] transition-colors">
              {t.footer.termsOfService}
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-[#FF655B] hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
