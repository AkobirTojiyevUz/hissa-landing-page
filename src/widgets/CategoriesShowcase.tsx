import React, { useState, useMemo } from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { Badge } from '../shared/ui/Badge';
import { Button } from '../shared/ui/Button';
import { StoreBrandLogo } from '../shared/ui/StoreBrandLogo';
import {
  Store,
  Search,
  ExternalLink,
  Tag,
  Check,
  MapPin,
} from 'lucide-react';

interface StoreItem {
  id: string;
  name: string;
  category: 'electronics' | 'fashion' | 'home' | 'beauty' | 'auto';
  categoryLabel: string;
  terms: string;
  maxMonths: number;
  popularProduct: string;
  rating: string;
  logoBg: string;
  brandHex: string;
  channel: 'both' | 'instore' | 'online';
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

  const stores: StoreItem[] = useMemo(() => [
    {
      id: 'texnomart',
      name: 'Texnomart',
      category: 'electronics',
      categoryLabel: t.stores.categoryLabels.electronics,
      terms: '0-0-3 / 0-0-6 / 0-0-12',
      maxMonths: 12,
      popularProduct: t.stores.popularProducts.texnomart,
      rating: '4.9',
      logoBg: 'bg-[#FFB800] text-black',
      brandHex: '#FFB800',
      channel: 'both',
    },
    {
      id: 'mediapark',
      name: 'Mediapark',
      category: 'electronics',
      categoryLabel: t.stores.categoryLabels.electronics,
      terms: '0-0-3 / 0-0-6',
      maxMonths: 6,
      popularProduct: t.stores.popularProducts.mediapark,
      rating: '4.8',
      logoBg: 'bg-[#E31E24] text-white',
      brandHex: '#E31E24',
      channel: 'both',
    },
    {
      id: 'korzinka',
      name: 'Korzinka',
      category: 'home',
      categoryLabel: t.stores.categoryLabels.supermarket,
      terms: '0-0-3',
      maxMonths: 3,
      popularProduct: t.stores.popularProducts.korzinka,
      rating: '4.9',
      logoBg: 'bg-[#E30613] text-white',
      brandHex: '#E30613',
      channel: 'both',
    },
    {
      id: 'bellstore',
      name: 'Bellstore',
      category: 'beauty',
      categoryLabel: t.stores.categoryLabels.beauty,
      terms: '0-0-3',
      maxMonths: 3,
      popularProduct: t.stores.popularProducts.bellstore,
      rating: '4.9',
      logoBg: 'bg-[#E91E63] text-white',
      brandHex: '#E91E63',
      channel: 'both',
    },
    {
      id: 'ishonch',
      name: 'Ishonch',
      category: 'home',
      categoryLabel: t.stores.categoryLabels.home,
      terms: '0-0-3 / 0-0-12',
      maxMonths: 12,
      popularProduct: t.stores.popularProducts.ishonch,
      rating: '4.7',
      logoBg: 'bg-[#005BAC] text-white',
      brandHex: '#005BAC',
      channel: 'both',
    },
    {
      id: 'terrapro',
      name: 'Terra Pro',
      category: 'fashion',
      categoryLabel: t.stores.categoryLabels.fashion,
      terms: '0-0-3',
      maxMonths: 3,
      popularProduct: t.stores.popularProducts.terrapro,
      rating: '4.8',
      logoBg: 'bg-[#00805A] text-white',
      brandHex: '#00805A',
      channel: 'both',
    },
    {
      id: 'arena',
      name: 'Arena Markaz',
      category: 'electronics',
      categoryLabel: t.stores.categoryLabels.electronics,
      terms: '0-0-3 / 0-0-6',
      maxMonths: 6,
      popularProduct: t.stores.popularProducts.arena,
      rating: '4.8',
      logoBg: 'bg-[#0A192F] text-white',
      brandHex: '#0A192F',
      channel: 'both',
    },
    {
      id: 'flo',
      name: 'FLO Shoes',
      category: 'fashion',
      categoryLabel: t.stores.categoryLabels.fashion,
      terms: '0-0-3',
      maxMonths: 3,
      popularProduct: t.stores.popularProducts.flo,
      rating: '4.7',
      logoBg: 'bg-[#FF6000] text-white',
      brandHex: '#FF6000',
      channel: 'both',
    },
    {
      id: 'makro',
      name: 'Makro Supermarket',
      category: 'home',
      categoryLabel: t.stores.categoryLabels.supermarket,
      terms: '0-0-3',
      maxMonths: 3,
      popularProduct: t.stores.popularProducts.makro,
      rating: '4.7',
      logoBg: 'bg-white text-gray-900',
      brandHex: '#DC2E2A',
      channel: 'both',
    },
  ], [t]);

  const categories = [
    { id: 'all', label: t.stores.all },
    { id: 'electronics', label: t.stores.electronics },
    { id: 'fashion', label: t.stores.fashion },
    { id: 'home', label: t.stores.home },
    { id: 'beauty', label: t.stores.beauty },
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
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="brand" className="mb-2">
            <Store className="w-3.5 h-3.5 mr-1" />
            {t.stores.eyebrow}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t.stores.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            {t.stores.subtitle}
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200 dark:border-gray-800">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#FF655B] text-white shadow-md shadow-[#FF655B]/20'
                    : 'bg-white dark:bg-[#181F26] text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
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
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#181F26] border border-gray-200 dark:border-gray-800 rounded-full text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF655B]"
            />
          </div>
        </div>

        {/* Store Cards Grid with Official Brand Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="group bg-white dark:bg-[#13181E] rounded-3xl p-6 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Brand Header with Exact Official Brand Emblem & Metadata */}
                <div className="flex items-start justify-between mb-3.5">
                  <div className="flex items-center gap-3">
                    <StoreBrandLogo
                      storeId={store.id}
                      name={store.name}
                      variant="icon"
                      className="group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-extrabold text-gray-900 dark:text-white text-base group-hover:text-[#FF655B] transition-colors">
                          {store.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[11px] font-medium text-gray-400">
                          {store.categoryLabel}
                        </span>
                        <span className="text-gray-300 dark:text-gray-700">·</span>
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-gray-100 dark:bg-[#181F26] text-gray-600 dark:text-gray-300">
                          {store.channel === 'both' ? t.stores.channelBoth : store.channel === 'online' ? t.stores.channelOnline : t.stores.channelInStore}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="brand" size="sm">
                    {store.terms}
                  </Badge>
                </div>

                {/* Official Brand Identity Logo Badge directly from partner website */}
                <div className="mb-3.5">
                  <StoreBrandLogo
                    storeId={store.id}
                    name={store.name}
                    variant="full"
                    className="max-w-fit"
                  />
                </div>

                <div className="space-y-2 py-2 border-t border-gray-100 dark:border-gray-800/80">
                  <div className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1.5">
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
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-4 flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToMap(store.id)}
                  leftIcon={<MapPin className="w-3.5 h-3.5 text-[#FF655B]" />}
                  className="w-1/2 justify-center text-xs border-gray-200 dark:border-gray-700 hover:border-[#FF655B]"
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
