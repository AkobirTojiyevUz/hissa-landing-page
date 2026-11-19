import React, { useState, useMemo } from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { SectionHeader } from '../shared/ui/SectionHeader';
import { Badge } from '../shared/ui/Badge';
import { Button } from '../shared/ui/Button';
import { StoreBrandLogo } from '../shared/ui/StoreBrandLogo';
import { PARTNERS } from '../shared/config/partners';
import type { PartnerCategory, PartnerId } from '../shared/config/partners';
import {
  Store,
  Search,
  ExternalLink,
  Tag,
  Check,
  MapPin,
} from 'lucide-react';

interface StoreItem {
  id: PartnerId;
  name: string;
  category: PartnerCategory;
  categoryLabel: string;
  terms: string;
  maxMonths: number;
  popularProduct: string;
}

export const CategoriesShowcase: React.FC = () => {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const scrollToMap = (_storeId?: string) => {
    const mapElement = document.getElementById('map');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stores: StoreItem[] = useMemo(
    () =>
      PARTNERS.map((partner) => ({
        id: partner.id,
        name: partner.name,
        category: partner.category,
        categoryLabel: t.stores.categoryLabels[partner.category],
        terms: partner.terms,
        maxMonths: partner.maxMonths,
        popularProduct: t.stores.popularProducts[partner.id],
      })),
    [t],
  );

  const categories: { id: 'all' | PartnerCategory; label: string }[] = [
    { id: 'all', label: t.stores.all },
    { id: 'electronics', label: t.stores.electronics },
    { id: 'fashion', label: t.stores.fashion },
    { id: 'home', label: t.stores.home },
    { id: 'supermarket', label: t.stores.categoryLabels.supermarket },
  ];

  const filteredStores = useMemo(() => {
    return stores.filter((store) => {
      const matchesCategory =
        activeCategory === 'all' || store.category === activeCategory;
      const matchesSearch =
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.popularProduct.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [stores, activeCategory, searchQuery]);

  return (
    <section id="stores" className="py-20 md:py-28 bg-[#F8F9FA] dark:bg-[#070A0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={t.stores.eyebrow}
          icon={<Store />}
          title={t.stores.title}
          subtitle={t.stores.subtitle}
        />

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-line">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-brand text-white shadow-md shadow-brand/20'
                    : 'bg-surface text-ink-2 hover:bg-gray-100 dark:hover:bg-gray-800 border border-line'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={t.stores.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-surface border border-line rounded-full text-xs text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
        </div>

        {/* Store Cards Grid with Official Brand Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="group bg-surface rounded-3xl p-6 border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Brand Header with Exact Official Brand Emblem & Metadata */}
                <div className="flex items-start justify-between mb-3.5">
                  <div className="flex items-center gap-3">
                    <StoreBrandLogo
                      storeId={store.id}
                      name={store.name}
                      className="group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-extrabold text-ink text-base group-hover:text-brand-ink transition-colors">
                          {store.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[11px] font-medium text-gray-400">
                          {store.categoryLabel}
                        </span>
                        <span className="text-gray-300 dark:text-gray-700">·</span>
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-gray-100 dark:bg-[#181F26] text-ink-2">
                          {t.stores.channelBoth}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="brand" size="sm">
                    {store.terms}
                  </Badge>
                </div>

                <div className="space-y-2 py-2 border-t border-line">
                  <div className="text-xs text-ink-2 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>{store.popularProduct}</span>
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      {store.maxMonths} {t.stores.upToMonth}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Filiallarni ko'rish on Map + Shop Online */}
              <div className="pt-4 border-t border-line mt-4 flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToMap(store.id)}
                  leftIcon={<MapPin className="w-3.5 h-3.5 text-brand-ink" />}
                  className="w-1/2 justify-center text-xs border-line hover:border-brand"
                >
                  {t.stores.viewBranchesBtn}
                </Button>
                <Button
                  variant="glass"
                  size="sm"
                  rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                  className="w-1/2 justify-center text-xs"
                >
                  {t.stores.shopBtn}
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
