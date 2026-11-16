import React from 'react';
import { NearbyStoresMap } from '../widgets/NearbyStoresMap';
import { CategoriesShowcase } from '../widgets/CategoriesShowcase';
import { MobileAppShowcase } from '../widgets/MobileAppShowcase';

export const StoresPage: React.FC = () => {
  return (
    <main className="pt-20 animate-in fade-in duration-200">
      {/* Full-View Interactive Yandex Map */}
      <NearbyStoresMap />

      {/* Complete Store Directory & Brand Catalog */}
      <CategoriesShowcase />

      {/* Mobile App Download */}
      <MobileAppShowcase />
    </main>
  );
};
