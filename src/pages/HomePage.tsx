import React from 'react';
import { HeroSection } from '../widgets/HeroSection';
import { NearbyStoresMap } from '../widgets/NearbyStoresMap';
import { ValueProps } from '../widgets/ValueProps';
import { HowItWorks } from '../widgets/HowItWorks';
import { EligibilitySection } from '../widgets/EligibilitySection';
import { CalculatorSection } from '../widgets/CalculatorSection';
import { CategoriesShowcase } from '../widgets/CategoriesShowcase';
import { MobileAppShowcase } from '../widgets/MobileAppShowcase';
import { FAQSection } from '../widgets/FAQSection';
import { ManagePaymentsSection } from '../widgets/ManagePaymentsSection';
import { TrustAndSecurity } from '../widgets/TrustAndSecurity';

interface HomePageProps {
  onOpenMerchantModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenMerchantModal }) => {
  return (
    <main className="animate-in fade-in duration-200">
      {/* 1. Hero with PM promises & "Hamkor do‘konlarni ko‘rish" CTA */}
      <HeroSection onOpenMerchantModal={onOpenMerchantModal} />

      {/* Scroll-driven app walkthrough */}
      <HowItWorks />

      {/* 2. Interactive Yandex Map */}
      <NearbyStoresMap />

      {/* 3. Why Hissa / Value Props */}
      <ValueProps />

      {/* 5. PM Requirement: Hissa’dan kim foydalanishi mumkin? */}
      <EligibilitySection />

      {/* 6. BNPL Calculator with Side-by-Side Tariff Comparison */}
      <CalculatorSection />

      {/* 7. Partner Stores with Brand Colors & "Filiallarni ko'rish" */}
      <CategoriesShowcase />

      {/* 8. Smartphone App Showcase */}
      <MobileAppShowcase />

      {/* 9. FAQ Section with 4 Post-Purchase Questions */}
      <FAQSection />

      {/* 10. PM Requirement: Xarid qildingizmi? To‘lovlaringizni boshqaring */}
      <ManagePaymentsSection />

      {/* 11. Trust & Uzcard Security Infrastructure */}
      <TrustAndSecurity />
    </main>
  );
};
