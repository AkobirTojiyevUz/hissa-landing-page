import React, { useState, useMemo } from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { Badge } from '../shared/ui/Badge';
import { Button } from '../shared/ui/Button';
import {
  Store,
  Search,
  ExternalLink,
  Tag,
  Check,
  MapPin,
  Smartphone,
  Tv,
  ShoppingBasket,
  Sparkles,
  Sofa,
  Shirt,
  Laptop,
  Footprints,
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
  icon: React.ReactNode;
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
      icon: <Smartphone className="w-5 h-5" />,
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
      icon: <Tv className="w-5 h-5" />,
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
      icon: <ShoppingBasket className="w-5 h-5" />,
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
      icon: <Sparkles className="w-5 h-5" />,
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
      icon: <Sofa className="w-5 h-5" />,
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
      icon: <Shirt className="w-5 h-5" />,
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
      logoBg: 'bg-[#7C3AED] text-white',
      brandHex: '#7C3AED',
      channel: 'both',
      icon: <Laptop className="w-5 h-5" />,
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
      logoBg: 'bg-[#FF6F00] text-white',
      brandHex: '#FF6F00',
      channel: 'both',
      icon: <Footprints className="w-5 h-5" />,
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
      logoBg: 'bg-[#009639] text-white',
      brandHex: '#009639',
      channel: 'both',
      icon: <ShoppingBasket className="w-5 h-5" />,
    },
  ], [t]);

  const categories = [
    { id: 'all', label: t.stores.all },
    { id: 'electronics', label: t.stores.electronics },
    { id: 'fashion', label: t.stores.fashion },
    { id: 'home', label: t.stores.home },
    { id: 'beauty', label: t.stores.beauty },
  ];

  const filteredStores = stores.filter((s) => {
    const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.popularProduct.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="stores" className="py-20 md:py-28 bg-gray-50/60 dark:bg-[#0B1015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="brand" className="mb-2">
            <Store className="w-3.5 h-3.5 mr-1 text-[#FF655B]" />
            {t.stores.eyebrow}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t.stores.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            {t.stores.subtitle}
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories Tab Pill List */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#FF655B] text-white shadow-md shadow-[#FF655B]/20'
                    : 'bg-white dark:bg-[#181F26] text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
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

        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="group bg-white dark:bg-[#13181E] rounded-3xl p-6 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Brand Header with Exact Brand Icon & Colors */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl ${store.logoBg} font-black text-xl flex items-center justify-center shadow-md shrink-0`}
                    >
                      {store.icon}
                    </div>
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

                <div className="space-y-2 py-2">
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

              {/* Action Buttons: Filiallarni ko'rish + Do'konga o'tish */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => scrollToMap(store.id)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-gray-100 dark:bg-[#181F26] hover:bg-[#FF655B]/10 hover:text-[#FF655B] text-gray-700 dark:text-gray-300 text-xs font-bold transition-all cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#FF655B]" />
                  <span>{t.stores.viewBranchesBtn}</span>
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-500">
                    ★ {store.rating}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                    className="text-xs font-semibold text-[#FF655B] hover:text-[#ED4A3F] p-0"
                  >
                    {t.stores.shopBtn}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
