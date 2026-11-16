import React from 'react';
import { FAQSection } from '../widgets/FAQSection';
import { ManagePaymentsSection } from '../widgets/ManagePaymentsSection';
import { TrustAndSecurity } from '../widgets/TrustAndSecurity';

export const FaqPage: React.FC = () => {
  return (
    <main className="pt-20 animate-in fade-in duration-200">
      {/* Complete Customer & Merchant FAQ */}
      <FAQSection />

      {/* Post-Purchase Payment Management Actions */}
      <ManagePaymentsSection />

      {/* Security & Regulatory Licenses */}
      <TrustAndSecurity />
    </main>
  );
};
