import React from 'react';
import { MerchantB2BSection } from '../widgets/MerchantB2BSection';
import { TrustAndSecurity } from '../widgets/TrustAndSecurity';
import { FAQSection } from '../widgets/FAQSection';

interface BusinessPageProps {
  onOpenMerchantModal: () => void;
}

export const BusinessPage: React.FC<BusinessPageProps> = ({ onOpenMerchantModal }) => {
  return (
    <main className="pt-20 animate-in fade-in duration-200">
      {/* Complete Merchant B2B Portal (Calculator, Solutions, Comparison, Onboarding, Inline Form) */}
      <MerchantB2BSection onOpenMerchantModal={onOpenMerchantModal} />

      {/* Trust & Security Badges for Business */}
      <TrustAndSecurity />

      {/* FAQ for Merchants */}
      <FAQSection />
    </main>
  );
};
