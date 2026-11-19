import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './app/theme/ThemeContext';
import { I18nProvider } from './app/i18n/I18nContext';
import { Navbar } from './widgets/Navbar';
import { HomePage } from './pages/HomePage';
import { BusinessPage } from './pages/BusinessPage';
import { StoresPage } from './pages/StoresPage';
import { FaqPage } from './pages/FaqPage';
import { Footer } from './widgets/Footer';
import { MerchantModal } from './widgets/MerchantModal';
import { useScrollReveal } from './app/motion/useScrollReveal';

type AppRoute = 'home' | 'stores' | 'business' | 'faq';

const LandingPageContent: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('home');
  const [isMerchantModalOpen, setIsMerchantModalOpen] = useState(false);
  useScrollReveal(currentRoute);

  useEffect(() => {
    const handleHashRouting = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('for-business') || hash.includes('business')) {
        setCurrentRoute('business');
      } else if (hash.includes('stores')) {
        setCurrentRoute('stores');
      } else if (hash.includes('faq')) {
        setCurrentRoute('faq');
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashRouting();
    window.addEventListener('hashchange', handleHashRouting);
    return () => window.removeEventListener('hashchange', handleHashRouting);
  }, []);

  const handleRouteChange = (route: string) => {
    setCurrentRoute(route as AppRoute);
  };

  return (
    <div className="min-h-screen bg-canvas text-ink transition-colors duration-200">
      {/* Sticky Glass Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onRouteChange={handleRouteChange}
        onOpenMerchantModal={() => setIsMerchantModalOpen(true)}
      />

      {/* Dynamic Route View */}
      {currentRoute === 'business' && (
        <BusinessPage onOpenMerchantModal={() => setIsMerchantModalOpen(true)} />
      )}
      {currentRoute === 'stores' && <StoresPage />}
      {currentRoute === 'faq' && <FaqPage />}
      {currentRoute === 'home' && (
        <HomePage onOpenMerchantModal={() => setIsMerchantModalOpen(true)} />
      )}

      {/* Global Footer */}
      <Footer onOpenMerchantModal={() => setIsMerchantModalOpen(true)} />

      {/* Merchant Application Modal */}
      <MerchantModal
        isOpen={isMerchantModalOpen}
        onClose={() => setIsMerchantModalOpen(false)}
      />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <LandingPageContent />
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
