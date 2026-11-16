import React, { useState, useMemo } from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { Badge } from '../shared/ui/Badge';
import { Button } from '../shared/ui/Button';
import { HissaMark } from '../shared/ui/HissaMark';
import {
  MapPin,
  Navigation,
  Search,
  Clock,
  QrCode,
  Compass,
  ChevronRight,
  Route,
} from 'lucide-react';

interface StoreLocation {
  id: string;
  name: string;
  category: 'electronics' | 'fashion' | 'supermarket' | 'beauty';
  address: string;
  district: string;
  distanceMeters: number;
  walkMinutes: number;
  coords: { x: number; y: number }; // SVG map coordinates percentage
  workingHours: string;
  terms: string;
  phone: string;
  rating: string;
}

export const NearbyStoresMap: React.FC = () => {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<'nearby' | 'all'>('nearby');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStoreId, setSelectedStoreId] = useState<string>('texnomart-chilonzor');
  const [isRouteActive, setIsRouteActive] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // User position on SVG map (Chilonzor / Bunyodkor reference)
  const userLocation = { x: 42, y: 55, name: 'Toshkent, Chilonzor tumani' };

  const stores: StoreLocation[] = [
    {
      id: 'texnomart-chilonzor',
      name: 'Texnomart Chilonzor',
      category: 'electronics',
      address: "Bunyodkor shoh ko'chasi, 52A",
      district: 'Chilonzor',
      distanceMeters: 350,
      walkMinutes: 4,
      coords: { x: 48, y: 46 },
      workingHours: '09:00 — 22:00',
      terms: '0-0-3 / 0-0-6 / 0-0-12',
      phone: '+998 71 209 99 44',
      rating: '4.9',
    },
    {
      id: 'mediapark-novza',
      name: 'Mediapark Novza',
      category: 'electronics',
      address: "Muqimiy ko'chasi, 15",
      district: 'Chilonzor',
      distanceMeters: 850,
      walkMinutes: 10,
      coords: { x: 34, y: 38 },
      workingHours: '10:00 — 22:00',
      terms: '0-0-3 / 0-0-6',
      phone: '+998 71 203 33 33',
      rating: '4.8',
    },
    {
      id: 'korzinka-bunyodkor',
      name: 'Korzinka Bunyodkor',
      category: 'supermarket',
      address: "Bunyodkor shoh ko'chasi, 41",
      district: 'Chilonzor',
      distanceMeters: 1100,
      walkMinutes: 13,
      coords: { x: 55, y: 62 },
      workingHours: '08:00 — 23:00',
      terms: '0-0-3',
      phone: '+998 78 140 14 14',
      rating: '4.9',
    },
    {
      id: 'bellstore-metro',
      name: 'Bellstore Chilonzor',
      category: 'beauty',
      address: "Qatortol ko'chasi, 28",
      district: 'Chilonzor',
      distanceMeters: 1400,
      walkMinutes: 16,
      coords: { x: 28, y: 65 },
      workingHours: '10:00 — 21:00',
      terms: '0-0-3',
      phone: '+998 71 200 80 80',
      rating: '4.9',
    },
    {
      id: 'arena-markaz',
      name: 'Arena Markaz Qoratosh',
      category: 'electronics',
      address: "Qoratosh ko'chasi, 11A",
      district: 'Shayxontohur',
      distanceMeters: 2200,
      walkMinutes: 25,
      coords: { x: 68, y: 30 },
      workingHours: '10:00 — 22:00',
      terms: '0-0-3 / 0-0-6',
      phone: '+998 71 200 44 22',
      rating: '4.8',
    },
    {
      id: 'terrapro-samarkand-darvoza',
      name: 'Terra Pro Darvoza',
      category: 'fashion',
      address: "Qoratosh ko'chasi, 5A (Darvoza Mall)",
      district: 'Shayxontohur',
      distanceMeters: 2400,
      walkMinutes: 28,
      coords: { x: 74, y: 35 },
      workingHours: '10:00 — 23:00',
      terms: '0-0-3',
      phone: '+998 71 205 11 22',
      rating: '4.8',
    },
    {
      id: 'ishonch-beruniy',
      name: 'Ishonch Beruniy',
      category: 'electronics',
      address: "Beruniy shoh ko'chasi, 83",
      district: 'Olmazor',
      distanceMeters: 3100,
      walkMinutes: 36,
      coords: { x: 20, y: 22 },
      workingHours: '09:00 — 20:00',
      terms: '0-0-3 / 0-0-12',
      phone: '+998 73 515 22 22',
      rating: '4.7',
    },
  ];

  const categories = [
    { id: 'all', label: t.map.filterAll },
    { id: 'electronics', label: t.map.categoryElectronics },
    { id: 'fashion', label: t.map.categoryFashion },
    { id: 'supermarket', label: t.map.categorySupermarket },
    { id: 'beauty', label: t.map.categoryBeauty },
  ];

  const filteredStores = useMemo(() => {
    return stores
      .filter((s) => {
        const matchesCategory = categoryFilter === 'all' || s.category === categoryFilter;
        const matchesSearch =
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.district.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (activeTab === 'nearby') return a.distanceMeters - b.distanceMeters;
        return a.name.localeCompare(b.name);
      });
  }, [stores, categoryFilter, searchQuery, activeTab]);

  const selectedStore = useMemo(() => {
    return stores.find((s) => s.id === selectedStoreId) || stores[0];
  }, [stores, selectedStoreId]);

  const handleSelectStore = (id: string) => {
    setSelectedStoreId(id);
    setIsRouteActive(true);
  };

  return (
    <section id="map" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[500px] bg-[#FF655B]/5 dark:bg-[#FF655B]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="brand" className="mb-2">
            <Compass className="w-3.5 h-3.5 mr-1 text-[#FF655B]" />
            {t.map.eyebrow}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t.map.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            {t.map.subtitle}
          </p>
        </div>

        {/* Interactive Map Container */}
        <div className="bg-white dark:bg-[#13181E] rounded-[2.5rem] border border-gray-200/80 dark:border-gray-800 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
            
            {/* Left Sidebar: Filters, Search & Nearby List */}
            <div className="lg:col-span-5 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-gray-200/80 dark:border-gray-800 flex flex-col justify-between space-y-4">
              
              <div className="space-y-4">
                {/* Search & Location Bar */}
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder={t.map.searchPlaceholder}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-gray-50 dark:bg-[#181F26] border border-gray-200 dark:border-gray-800 rounded-2xl text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF655B]"
                    />
                  </div>
                  <div className="p-2.5 rounded-2xl bg-[#FF655B]/10 text-[#FF655B] border border-[#FF655B]/20">
                    <Navigation className="w-4 h-4" />
                  </div>
                </div>

                {/* Tabs & Category Filter Chips */}
                <div className="space-y-2">
                  {/* Tab Selector */}
                  <div className="grid grid-cols-2 gap-1.5 p-1 bg-gray-100 dark:bg-[#181F26] rounded-2xl border border-gray-200 dark:border-gray-800">
                    <button
                      onClick={() => setActiveTab('nearby')}
                      className={`text-xs font-bold py-2 rounded-xl transition-all cursor-pointer ${
                        activeTab === 'nearby'
                          ? 'bg-white dark:bg-[#262D35] text-gray-900 dark:text-white shadow-sm'
                          : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {t.map.nearbyTab}
                    </button>
                    <button
                      onClick={() => setActiveTab('all')}
                      className={`text-xs font-bold py-2 rounded-xl transition-all cursor-pointer ${
                        activeTab === 'all'
                          ? 'bg-white dark:bg-[#262D35] text-gray-900 dark:text-white shadow-sm'
                          : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {t.map.allStoresTab}
                    </button>
                  </div>

                  {/* Horizontal Category Chips */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                    {categories.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setCategoryFilter(c.id)}
                        className={`text-[11px] font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                          categoryFilter === c.id
                            ? 'bg-[#FF655B] text-white shadow-sm'
                            : 'bg-gray-100 dark:bg-[#181F26] text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Results Count & User Location Pill */}
                <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 px-1 pt-1">
                  <span className="flex items-center gap-1 font-semibold text-gray-800 dark:text-gray-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                    {userLocation.name}
                  </span>
                  <span>{filteredStores.length} {t.map.storesFound}</span>
                </div>
              </div>

              {/* Scrollable Store Cards List */}
              <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                {filteredStores.map((store) => {
                  const isSelected = store.id === selectedStore.id;
                  return (
                    <div
                      key={store.id}
                      onClick={() => handleSelectStore(store.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'border-[#FF655B] bg-[#FF655B]/10 dark:bg-[#FF655B]/15 shadow-sm'
                          : 'border-gray-200 dark:border-gray-800/80 bg-gray-50/50 dark:bg-[#181F26]/60 hover:border-gray-300 dark:hover:border-gray-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-black text-gray-900 dark:text-white">
                            {store.name}
                          </h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            {store.terms}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">
                          {store.address}
                        </p>
                        <div className="flex items-center gap-3 text-[10px] text-gray-400 pt-1">
                          <span className="flex items-center gap-1 font-bold text-[#FF655B]">
                            <Navigation className="w-3 h-3" />
                            {store.distanceMeters} m ({store.walkMinutes} daq.)
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-gray-400" />
                            {store.workingHours}
                          </span>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                          isSelected ? 'text-[#FF655B] translate-x-1' : 'text-gray-400'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Selected Store Bottom Action Box */}
              {selectedStore && (
                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-[#FF655B] uppercase tracking-wider">
                        {t.map.selectedStoreBadge}
                      </div>
                      <div className="text-xs font-extrabold text-gray-900 dark:text-white">
                        {selectedStore.name}
                      </div>
                    </div>
                    <Badge variant="success" size="sm">
                      <QrCode className="w-3 h-3 mr-1" />
                      TezQR Faol
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setIsRouteActive(!isRouteActive)}
                      leftIcon={<Route className="w-3.5 h-3.5" />}
                      className="flex-1 text-xs py-2 shadow-md shadow-[#FF655B]/20"
                    >
                      {t.map.getDirections}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const el = document.getElementById('stores');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs py-2"
                    >
                      {t.map.viewProducts}
                    </Button>
                  </div>
                </div>
              )}

            </div>

            {/* Right Map Canvas Area */}
            <div className="lg:col-span-7 relative bg-[#F2F5F8] dark:bg-[#0E1318] flex items-center justify-center p-4 select-none overflow-hidden">
              
              {/* Dynamic SVG City Map Viewport */}
              <div
                className="relative w-full h-full min-h-[440px] lg:min-h-[600px] rounded-3xl overflow-hidden transition-transform duration-300"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                
                {/* Vector Map Background Grids & Streets */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full object-cover"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern id="city-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="currentColor"
                        className="text-gray-200/80 dark:text-gray-800/60"
                        strokeWidth="0.3"
                      />
                    </pattern>
                    <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#FF655B" />
                    </linearGradient>
                  </defs>

                  {/* Base grid */}
                  <rect width="100" height="100" fill="url(#city-grid)" />

                  {/* Parks / Green areas */}
                  <rect
                    x="15"
                    y="45"
                    width="12"
                    height="18"
                    rx="3"
                    className="fill-emerald-500/10 dark:fill-emerald-500/5"
                  />
                  <rect
                    x="62"
                    y="15"
                    width="16"
                    height="14"
                    rx="3"
                    className="fill-emerald-500/10 dark:fill-emerald-500/5"
                  />

                  {/* Major Avenues (Thick Lines) */}
                  <line
                    x1="0"
                    y1="60"
                    x2="100"
                    y2="35"
                    className="stroke-white dark:stroke-[#1A222B]"
                    strokeWidth="4"
                  />
                  <line
                    x1="0"
                    y1="60"
                    x2="100"
                    y2="35"
                    className="stroke-amber-400/40 dark:stroke-amber-400/20"
                    strokeWidth="0.8"
                    strokeDasharray="2 1"
                  />

                  {/* Bunyodkor Shoh Ko'chasi */}
                  <line
                    x1="20"
                    y1="100"
                    x2="70"
                    y2="0"
                    className="stroke-white dark:stroke-[#1A222B]"
                    strokeWidth="4"
                  />
                  <line
                    x1="20"
                    y1="100"
                    x2="70"
                    y2="0"
                    className="stroke-amber-400/40 dark:stroke-amber-400/20"
                    strokeWidth="0.8"
                    strokeDasharray="2 1"
                  />

                  {/* Secondary Streets */}
                  <line
                    x1="35"
                    y1="0"
                    x2="35"
                    y2="100"
                    className="stroke-white/70 dark:stroke-[#151C23]"
                    strokeWidth="2"
                  />
                  <line
                    x1="0"
                    y1="25"
                    x2="100"
                    y2="25"
                    className="stroke-white/70 dark:stroke-[#151C23]"
                    strokeWidth="2"
                  />
                  <line
                    x1="0"
                    y1="75"
                    x2="100"
                    y2="75"
                    className="stroke-white/70 dark:stroke-[#151C23]"
                    strokeWidth="2"
                  />

                  {/* Street Labels */}
                  <text
                    x="50"
                    y="39"
                    className="text-[2.2px] fill-gray-400 font-bold select-none tracking-wider"
                    transform="rotate(-14 50 39)"
                  >
                    Bunyodkor shoh ko'chasi
                  </text>
                  <text
                    x="48"
                    y="8"
                    className="text-[2px] fill-gray-400 font-bold select-none tracking-wider"
                    transform="rotate(-64 48 8)"
                  >
                    Muqimiy ko'chasi
                  </text>

                  {/* Animated Route Line from User to Selected Store */}
                  {isRouteActive && selectedStore && (
                    <path
                      d={`M ${userLocation.x} ${userLocation.y} Q ${(userLocation.x + selectedStore.coords.x) / 2 + 3} ${(userLocation.y + selectedStore.coords.y) / 2 - 2} ${selectedStore.coords.x} ${selectedStore.coords.y}`}
                      fill="none"
                      stroke="url(#route-gradient)"
                      strokeWidth="1.2"
                      strokeDasharray="2 1.5"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                  )}
                </svg>

                {/* User Radar Location Pin */}
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer pointer-events-auto"
                  style={{ left: `${userLocation.x}%`, top: `${userLocation.y}%` }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Concentric radar rings */}
                    <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-emerald-500 opacity-30" />
                    <span className="animate-pulse absolute inline-flex h-8 w-8 rounded-full bg-emerald-500 opacity-40" />
                    
                    {/* User Marker */}
                    <div className="w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-xl flex items-center justify-center text-white">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>

                    {/* User Tooltip Pill */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/10 flex items-center gap-1 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {t.map.yourLocation}
                    </div>
                  </div>
                </div>

                {/* Partner Store Pins */}
                {filteredStores.map((store) => {
                  const isSelected = store.id === selectedStore.id;
                  return (
                    <div
                      key={store.id}
                      onClick={() => handleSelectStore(store.id)}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer transition-all duration-200 group ${
                        isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                      }`}
                      style={{ left: `${store.coords.x}%`, top: `${store.coords.y}%` }}
                    >
                      <div className="relative flex flex-col items-center">
                        
                        {/* Store Pin Marker */}
                        <div
                          className={`w-8 h-8 rounded-2xl flex items-center justify-center shadow-xl border-2 transition-all ${
                            isSelected
                              ? 'bg-[#FF655B] text-white border-white scale-110 shadow-[#FF655B]/40'
                              : 'bg-white dark:bg-[#1D2329] text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:border-[#FF655B]'
                          }`}
                        >
                          {isSelected ? (
                            <HissaMark size={14} animated={false} color="#FFFFFF" />
                          ) : (
                            <MapPin className="w-4 h-4 text-[#FF655B]" />
                          )}
                        </div>

                        {/* Floating Name Badge */}
                        <div
                          className={`mt-1 whitespace-nowrap px-2 py-0.5 rounded-full text-[9px] font-black transition-all shadow-md ${
                            isSelected
                              ? 'bg-[#FF655B] text-white'
                              : 'bg-white/95 dark:bg-[#13181E]/95 text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-gray-800'
                          }`}
                        >
                          {store.name.split(' ')[0]} · {store.distanceMeters}m
                        </div>

                      </div>
                    </div>
                  );
                })}

                {/* Route Active Toast Overlay */}
                {isRouteActive && selectedStore && (
                  <div className="absolute top-4 left-4 bg-white/95 dark:bg-[#13181E]/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-gray-200/80 dark:border-gray-800 flex items-center gap-2.5 z-30 animate-in fade-in">
                    <div className="w-7 h-7 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                      <Route className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-gray-900 dark:text-white">
                        {t.map.routeDrawn}
                      </div>
                      <div className="text-[9px] font-medium text-gray-500 dark:text-gray-400">
                        {selectedStore.address} · {selectedStore.distanceMeters}m
                      </div>
                    </div>
                  </div>
                )}

                {/* Map Control Buttons (Zoom & Center) */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-30">
                  <button
                    onClick={() => setZoomLevel((z) => Math.min(z + 0.15, 1.45))}
                    className="w-8 h-8 rounded-xl bg-white dark:bg-[#181F26] border border-gray-200 dark:border-gray-800 shadow-md text-gray-700 dark:text-gray-200 hover:text-[#FF655B] font-bold text-sm flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Zoom in"
                  >
                    +
                  </button>
                  <button
                    onClick={() => setZoomLevel((z) => Math.max(z - 0.15, 0.85))}
                    className="w-8 h-8 rounded-xl bg-white dark:bg-[#181F26] border border-gray-200 dark:border-gray-800 shadow-md text-gray-700 dark:text-gray-200 hover:text-[#FF655B] font-bold text-sm flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Zoom out"
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      setZoomLevel(1);
                      setIsRouteActive(true);
                    }}
                    className="w-8 h-8 rounded-xl bg-white dark:bg-[#181F26] border border-gray-200 dark:border-gray-800 shadow-md text-emerald-500 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    title="Mening joylashuvim"
                    aria-label="Re-center"
                  >
                    <Navigation className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
