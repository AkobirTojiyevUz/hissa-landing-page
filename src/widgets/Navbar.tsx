import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe, Menu, X, ArrowUpRight, Briefcase, Check } from 'lucide-react';
import { useI18n } from '../app/i18n/I18nContext';
import { useTheme } from '../app/theme/ThemeContext';
import type { Language } from '../app/i18n/translations';
import { HissaLogo } from '../shared/ui/HissaLogo';
import { Button } from '../shared/ui/Button';

interface NavbarProps {
  currentRoute: string;
  onRouteChange: (route: string) => void;
  onOpenMerchantModal: () => void;
}

const LANGUAGES: { code: Language; label: string; short: string }[] = [
  { code: 'uz', label: 'Özbekçe (Yangi)', short: 'ÖZ' },
  { code: 'uz_lat', label: 'O‘zbekcha (Lotin)', short: 'OʻZ' },
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'en', label: 'English', short: 'EN' },
];

const iconButton =
  'inline-flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-full px-3 text-ink-2 transition-colors hover:bg-sunken hover:text-ink cursor-pointer';

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onRouteChange, onOpenMerchantModal }) => {
  const { language, setLanguage, t } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { route: 'home', hash: '#/', label: t.audience.shoppers },
    { route: 'stores', hash: '#/stores', label: t.nav.stores },
    { route: 'business', hash: '#/for-business', label: t.nav.forBusiness, isB2B: true },
    { route: 'faq', hash: '#/faq', label: t.nav.faq },
  ];

  const handleNavClick = (hash: string, route: string) => {
    onRouteChange(route);
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const goToApp = () => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById('app');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    handleNavClick('#/', 'home');
    window.setTimeout(() => document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' }), 200);
  };

  const currentLang = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,padding] duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'border-b border-line bg-surface/85 py-3 shadow-card backdrop-blur-xl'
          : 'bg-[color-mix(in_srgb,var(--color-bg-base)_40%,transparent)] py-5 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#/', 'home');
          }}
          className="flex shrink-0 items-center gap-2.5 rounded-xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <HissaLogo height={32} animated />
          <span className="hidden rounded-full bg-sunken px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-ink-3 sm:inline-block">
            Uzcard
          </span>
        </a>

        <nav
         
          className="hidden items-center gap-1 rounded-full border border-line bg-surface/70 p-1.5 shadow-card backdrop-blur-md lg:flex"
        >
          {navLinks.map((link) => {
            const isActive = currentRoute === link.route;
            return (
              <a
                key={link.route}
                href={link.hash}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.hash, link.route);
                }}
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-[15px] font-semibold transition-colors ${
                  isActive ? 'bg-brand-tint text-brand-ink' : 'text-ink-2 hover:bg-sunken hover:text-ink'
                }`}
              >
                {link.label}
                {link.isB2B && (
                  <span className="rounded-md bg-brand px-1.5 py-0.5 text-[10px] font-extrabold uppercase leading-none tracking-wide text-white">
                    B2B
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLangOpen((v) => !v)}
              aria-label={t.common.languageSelect}
              aria-expanded={isLangOpen}
              className={iconButton}
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm font-bold">{currentLang.short}</span>
            </button>
            {isLangOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)} />
                <ul className="absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-2xl border border-line bg-surface p-1.5 shadow-lift">
                  {LANGUAGES.map((l) => (
                    <li key={l.code}>
                      <button
                        type="button"
                        onClick={() => {
                          setLanguage(l.code);
                          setIsLangOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[15px] font-semibold transition-colors ${
                          language === l.code ? 'bg-brand-tint text-brand-ink' : 'text-ink hover:bg-sunken'
                        }`}
                      >
                        {l.label}
                        {language === l.code && <Check className="h-4 w-4" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <button type="button" onClick={toggleTheme} aria-label={t.common.toggleTheme} className={iconButton}>
            {theme === 'dark' ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
          </button>

          <Button
            variant="outline"
            size="md"
            onClick={onOpenMerchantModal}
            leftIcon={<Briefcase className="h-4 w-4 text-brand-ink" />}
            className="max-2xl:hidden text-[15px]"
          >
            {t.nav.partnerCta}
          </Button>

          <Button
            size="md"
            onClick={goToApp}
            rightIcon={<ArrowUpRight className="h-4 w-4" />}
            className="max-sm:hidden text-[15px]"
          >
            {t.nav.getAppCta}
          </Button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label={t.common.openMenu}
            aria-expanded={isMobileMenuOpen}
            className={`${iconButton} lg:hidden`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mx-auto max-w-7xl space-y-4 px-4 pb-6 pt-4 sm:px-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.route}
                href={link.hash}
                aria-current={currentRoute === link.route ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.hash, link.route);
                }}
                className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold transition-colors ${
                  currentRoute === link.route ? 'bg-brand-tint text-brand-ink' : 'text-ink hover:bg-sunken'
                }`}
              >
                {link.label}
                {link.isB2B && (
                  <span className="rounded-md bg-brand px-1.5 py-0.5 text-[10px] font-extrabold uppercase text-white">
                    B2B
                  </span>
                )}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 border-t border-line pt-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenMerchantModal();
              }}
              leftIcon={<Briefcase className="h-5 w-5 text-brand-ink" />}
              className="w-full"
            >
              {t.nav.partnerCta}
            </Button>
            <Button size="lg" onClick={goToApp} rightIcon={<ArrowUpRight className="h-5 w-5" />} className="w-full">
              {t.nav.getAppCta}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
