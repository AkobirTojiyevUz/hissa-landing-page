import React, { useState, useEffect } from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { useTheme } from '../app/theme/ThemeContext';
import type { Language } from '../app/i18n/translations';
import { HissaLogo } from '../shared/ui/HissaLogo';
import { Button } from '../shared/ui/Button';
import { Sun, Moon, Globe, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenMerchantModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMerchantModal }) => {
  const { language, setLanguage, t } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'uz', label: "O'zbekcha", flag: '🇺🇿' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  const navLinks = [
    { href: '#map', label: t.nav.map },
    { href: '#how-it-works', label: t.nav.howItWorks },
    { href: '#calculator', label: t.nav.calculator },
    { href: '#stores', label: t.nav.stores },
    { href: '#app', label: t.nav.app },
    { href: '#for-business', label: t.nav.forBusiness },
    { href: '#security', label: t.nav.security },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#0A0F14]/85 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/80 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with 3 animated crescents */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#FF655B] rounded-xl p-1"
          >
            <HissaLogo height={28} animated={true} />
            <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full ml-1">
              UZCARD
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-gray-100/70 dark:bg-gray-900/60 p-1.5 rounded-full border border-gray-200/60 dark:border-gray-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-[#FF655B] dark:hover:text-[#FF655B] hover:bg-white dark:hover:bg-gray-800 rounded-full transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                aria-label="Language selection"
              >
                <Globe className="w-4 h-4 text-gray-500" />
                <span className="uppercase">{language}</span>
              </button>

              {isLangDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-[#13181E] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl py-1 z-20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLanguage(l.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                          language === l.code
                            ? 'text-[#FF655B] font-bold bg-[#FF655B]/10'
                            : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-gray-700" />
              )}
            </button>

            {/* B2B Partner CTA */}
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenMerchantModal}
              className="hidden md:inline-flex border-gray-300 dark:border-gray-700 hover:border-[#FF655B]"
            >
              {t.nav.partnerCta}
            </Button>

            {/* Main App CTA */}
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                const el = document.getElementById('app');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
              className="hidden sm:inline-flex"
            >
              {t.nav.getAppCta}
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#0A0F14]/95 backdrop-blur-2xl border-b border-gray-200 dark:border-gray-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-[#FF655B] hover:bg-gray-100 dark:hover:bg-gray-800/60 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-2">
            <Button
              variant="outline"
              size="md"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenMerchantModal();
              }}
              className="w-full justify-center"
            >
              {t.nav.partnerCta}
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                setIsMobileMenuOpen(false);
                const el = document.getElementById('app');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
              className="w-full justify-center"
            >
              {t.nav.getAppCta}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
