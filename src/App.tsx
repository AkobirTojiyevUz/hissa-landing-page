import React, { useState } from 'react';
import { ThemeProvider } from './app/theme/ThemeContext';
import { I18nProvider } from './app/i18n/I18nContext';
import { Navbar } from './widgets/Navbar';
import { HeroSection } from './widgets/HeroSection';
import { PartnerTicker } from './widgets/PartnerTicker';
import { ValueProps } from './widgets/ValueProps';
import { HowItWorks } from './widgets/HowItWorks';
import { CalculatorSection } from './widgets/CalculatorSection';
import { CategoriesShowcase } from './widgets/CategoriesShowcase';
import { NearbyStoresMap } from './widgets/NearbyStoresMap';
import { MobileAppShowcase } from './widgets/MobileAppShowcase';
import { MerchantB2BSection } from './widgets/MerchantB2BSection';
import { TrustAndSecurity } from './widgets/TrustAndSecurity';
import { FAQSection } from './widgets/FAQSection';
import { Footer } from './widgets/Footer';
import { MerchantModal } from './widgets/MerchantModal';

const LandingPageContent: React.FC = () => {
  const [isMerchantModalOpen, setIsMerchantModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F2F4F7] dark:bg-[#0A0F14] text-[#0C111D] dark:text-[#FFFFFF] transition-colors duration-200">
      {/* Sticky Glass Navbar */}
      <Navbar onOpenMerchantModal={() => setIsMerchantModalOpen(true)} />

      {/* Hero Section */}
      <main>
        <HeroSection onOpenMerchantModal={() => setIsMerchantModalOpen(true)} />

        {/* Endless Partner Ticker */}
        <PartnerTicker />

        {/* Interactive Nearby Stores & Geolocation Map (Primary Feature) */}
        <NearbyStoresMap />

        {/* Why Hissa / Value Pillars (Klarna / Afterpay Benchmark) */}
        <ValueProps />

        {/* How It Works (3 Steps) */}
        <HowItWorks />

        {/* Interactive BNPL Calculator */}
        <CalculatorSection />

        {/* Partner Stores & Categories */}
        <CategoriesShowcase />

        {/* Interactive Smartphone App Showcase */}
        <MobileAppShowcase />

        {/* Merchant & Business Partnership */}
        <MerchantB2BSection onOpenMerchantModal={() => setIsMerchantModalOpen(true)} />

        {/* Trust & Uzcard Security Infrastructure */}
        <TrustAndSecurity />

        {/* Interactive FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
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
