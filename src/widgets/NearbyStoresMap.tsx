import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { Badge } from '../shared/ui/Badge';
import { HissaMark } from '../shared/ui/HissaMark';
import { StoreBrandLogo } from '../shared/ui/StoreBrandLogo';
import {
  MOCK_STORE_BRANCHES,
  DEFAULT_USER_COORDINATES,
  calculateDistanceInMeters,
  formatDistance,
  calculateWalkMinutes,
  getYandexMapsUrl,
  getGoogleMapsUrl,
} from '../shared/api/storesMockApi';
import {
  Navigation,
  Search,
  Clock,
  QrCode,
  Compass,
  ChevronRight,
  ExternalLink,
  Route,
  MapPin,
} from 'lucide-react';

declare global {
  interface Window {
    ymaps: any;
  }
}

export const NearbyStoresMap: React.FC = () => {
  const { t, language } = useI18n();

  const [activeTab, setActiveTab] = useState<'nearby' | 'all'>('nearby');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStoreId, setSelectedStoreId] = useState<string>('texnomart-chilonzor');
  const [isMapReady, setIsMapReady] = useState<boolean>(false);

  // Map DOM and Instance References
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const ymapsInstanceRef = useRef<any>(null);
  const routePolylineRef = useRef<any>(null);
  const geoObjectsGroupRef = useRef<any>(null);

  const userCoords = DEFAULT_USER_COORDINATES;

  // Process stores with live distance calculation
  const storesWithDistance = useMemo(() => {
    return MOCK_STORE_BRANCHES.map((store) => {
      const distance = calculateDistanceInMeters(userCoords.lat, userCoords.lng, store.lat, store.lng);
      const walkTime = calculateWalkMinutes(distance);
      return {
        ...store,
        distanceMeters: distance,
        walkMinutes: walkTime,
      };
    });
  }, [userCoords]);

  // Filter and sort stores
  const filteredStores = useMemo(() => {
    return storesWithDistance
      .filter((store) => {
        const matchesCategory = categoryFilter === 'all' || store.category === categoryFilter;
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          store.name.toLowerCase().includes(q) ||
          store.address.toLowerCase().includes(q) ||
          store.district.toLowerCase().includes(q) ||
          store.popularItem.toLowerCase().includes(q);
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (activeTab === 'nearby') return a.distanceMeters - b.distanceMeters;
        return a.name.localeCompare(b.name);
      });
  }, [storesWithDistance, categoryFilter, searchQuery, activeTab]);

  const selectedStore = useMemo(() => {
    return (
      storesWithDistance.find((s) => s.id === selectedStoreId) || storesWithDistance[0]
    );
  }, [storesWithDistance, selectedStoreId]);

  // Load Yandex Maps Script dynamically
  useEffect(() => {
    const ymapsLang = language === 'uz' ? 'uz_UZ' : language === 'en' ? 'en_US' : 'ru_RU';
    const scriptId = 'yandex-maps-api-script';

    const initYandexMap = () => {
      if (!window.ymaps) return;
      window.ymaps.ready(() => {
        if (!mapContainerRef.current) return;

        // Clean previous instance if any
        if (ymapsInstanceRef.current) {
          ymapsInstanceRef.current.destroy();
          ymapsInstanceRef.current = null;
        }

        const map = new window.ymaps.Map(
          mapContainerRef.current,
          {
            center: [userCoords.lat, userCoords.lng],
            zoom: 13,
            controls: ['zoomControl', 'fullscreenControl'],
            behaviors: ['default', 'scrollZoom'],
          },
          {
            searchControlProvider: 'yandex#search',
            suppressMapOpenBlock: false,
          }
        );

        ymapsInstanceRef.current = map;
        setIsMapReady(true);
      });
    };

    if (window.ymaps) {
      initYandexMap();
      return;
    }

    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.src = `https://api-maps.yandex.ru/2.1/?lang=${ymapsLang}`;
      script.async = true;
      script.onload = () => {
        initYandexMap();
      };
      document.head.appendChild(script);
    } else {
      script.addEventListener('load', initYandexMap);
    }

    return () => {
      if (ymapsInstanceRef.current) {
        ymapsInstanceRef.current.destroy();
        ymapsInstanceRef.current = null;
      }
    };
  }, [language]);

  // Update Yandex Placemarks & Route when selected store or stores change
  useEffect(() => {
    const map = ymapsInstanceRef.current;
    if (!map || !window.ymaps || !isMapReady) return;

    // Clear previous geoObjects
    map.geoObjects.removeAll();

    const geoCollection = new window.ymaps.GeoObjectCollection();

    // 1. User Location Placemark (Green pulsating icon)
    const userPlacemark = new window.ymaps.Placemark(
      [userCoords.lat, userCoords.lng],
      {
        hintContent: `${t.map.yourLocation} (${userCoords.label})`,
        balloonContentHeader: `<div style="font-weight: 800; font-size: 13px; color: #10B981;">📍 ${t.map.yourLocation}</div>`,
        balloonContentBody: `<div style="font-size: 12px; color: #475467; margin-top: 4px;">${userCoords.label}</div>`,
        iconCaption: t.map.yourLocation,
      },
      {
        preset: 'islands#darkGreenCircleDotIconWithCaption',
        iconColor: '#10B981',
      }
    );
    geoCollection.add(userPlacemark);

    // 2. Add Placemark for each store
    storesWithDistance.forEach((store) => {
      const isSelected = store.id === selectedStore.id;

      const storePlacemark = new window.ymaps.Placemark(
        [store.lat, store.lng],
        {
          hintContent: `${store.name} · ${formatDistance(store.distanceMeters)}`,
          balloonContentHeader: `
            <div style="font-family: inherit; font-size: 14px; font-weight: 800; color: #0C111D;">
              ${store.name}
            </div>
          `,
          balloonContentBody: `
            <div style="font-family: inherit; font-size: 12px; line-height: 1.5; color: #475467; padding-top: 4px;">
              <div><b>${t.map.userLocationLabel}:</b> ${store.address}</div>
              <div style="color: #10B981; font-weight: 700; margin-top: 4px;">✓ ${store.terms} · TezQR</div>
              <div style="color: #FF655B; font-weight: 700; margin-top: 2px;">
                ${formatDistance(store.distanceMeters)} (${store.walkMinutes} ${t.common.walkMinutes})
              </div>
              <div style="color: #98A2B3; font-size: 11px; margin-top: 2px;">⏱ ${store.workingHours}</div>
            </div>
          `,
          balloonContentFooter: `
            <div style="margin-top: 8px; display: flex; gap: 8px;">
              <a href="${getYandexMapsUrl(store.lat, store.lng)}" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 6px 12px; background: #FF655B; color: #ffffff; text-decoration: none; border-radius: 10px; font-size: 11px; font-weight: 700;">
                ${t.map.openInYandex} ↗
              </a>
            </div>
          `,
          iconCaption: `${store.name.split(' ')[0]} (${formatDistance(store.distanceMeters)})`,
        },
        {
          preset: isSelected ? 'islands#redCircleDotIconWithCaption' : 'islands#nightDotIconWithCaption',
          iconColor: isSelected ? '#FF655B' : '#475467',
        }
      );

      storePlacemark.events.add('click', () => {
        setSelectedStoreId(store.id);
      });

      geoCollection.add(storePlacemark);
    });

    // 3. Draw Dashed Polyline Route from User to Selected Store
    const routePolyline = new window.ymaps.Polyline(
      [
        [userCoords.lat, userCoords.lng],
        [selectedStore.lat, selectedStore.lng],
      ],
      {
        hintContent: `${selectedStore.name}: ${formatDistance(selectedStore.distanceMeters)}`,
      },
      {
        strokeColor: '#FF655B',
        strokeWidth: 4,
        strokeOpacity: 0.85,
        strokeStyle: 'dash',
      }
    );
    geoCollection.add(routePolyline);

    map.geoObjects.add(geoCollection);
    geoObjectsGroupRef.current = geoCollection;
    routePolylineRef.current = routePolyline;

    // Smoothly fit bounds around user and selected store
    const minLat = Math.min(userCoords.lat, selectedStore.lat);
    const maxLat = Math.max(userCoords.lat, selectedStore.lat);
    const minLng = Math.min(userCoords.lng, selectedStore.lng);
    const maxLng = Math.max(userCoords.lng, selectedStore.lng);

    const latPadding = Math.max((maxLat - minLat) * 0.3, 0.006);
    const lngPadding = Math.max((maxLng - minLng) * 0.3, 0.008);

    map.setBounds(
      [
        [minLat - latPadding, minLng - lngPadding],
        [maxLat + latPadding, maxLng + lngPadding],
      ],
      { checkZoomRange: true, duration: 600 }
    );
  }, [storesWithDistance, selectedStore, isMapReady, t]);

  const categories = [
    { id: 'all', label: t.map.filterAll },
    { id: 'electronics', label: t.map.categoryElectronics },
    { id: 'fashion', label: t.map.categoryFashion },
    { id: 'supermarket', label: t.map.categorySupermarket },
    { id: 'beauty', label: t.map.categoryBeauty },
  ];

  const handleRecenter = () => {
    if (!ymapsInstanceRef.current) return;
    ymapsInstanceRef.current.setCenter([userCoords.lat, userCoords.lng], 14, { duration: 600 });
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
          <p className="text-base text-gray-600 dark:text-gray-400 font-medium">
            {t.map.subtitle}
          </p>
        </div>

        {/* Interactive Map Card */}
        <div className="bg-white dark:bg-[#13181E] rounded-[2.5rem] border border-gray-200/80 dark:border-gray-800 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
            {/* Left Controls & Stores List */}
            <div className="lg:col-span-5 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-gray-200/80 dark:border-gray-800 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                {/* Search Bar */}
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
                  <button
                    onClick={handleRecenter}
                    title={t.map.yourLocation}
                    className="p-2.5 rounded-2xl bg-[#FF655B]/10 hover:bg-[#FF655B]/20 text-[#FF655B] border border-[#FF655B]/20 transition-colors cursor-pointer"
                  >
                    <Navigation className="w-4 h-4" />
                  </button>
                </div>

                {/* Tabs & Category Filter Chips */}
                <div className="space-y-2">
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

                {/* User Location Bar */}
                <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 px-1 pt-1">
                  <span className="flex items-center gap-1 font-semibold text-gray-800 dark:text-gray-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                    {userCoords.label}
                  </span>
                  <span>
                    {filteredStores.length} {t.map.storesFound}
                  </span>
                </div>
              </div>

              {/* Scrollable Store List */}
              <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                {filteredStores.map((store) => {
                  const isSelected = store.id === selectedStore.id;
                  return (
                    <div
                      key={store.id}
                      onClick={() => setSelectedStoreId(store.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'border-[#FF655B] bg-[#FF655B]/10 dark:bg-[#FF655B]/15 shadow-sm'
                          : 'border-gray-200 dark:border-gray-800/80 bg-gray-50/50 dark:bg-[#181F26]/60 hover:border-gray-300 dark:hover:border-gray-700'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <StoreBrandLogo
                          storeId={store.brandId}
                          name={store.name}
                          variant="icon"
                          className="w-10 h-10 rounded-xl shrink-0 mt-0.5"
                        />
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
                              {formatDistance(store.distanceMeters)} ({store.walkMinutes} {t.common.walkMinutes})
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-gray-400" />
                              {store.workingHours}
                            </span>
                          </div>
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

              {/* Selected Store Bottom Action Panel */}
              {selectedStore && (
                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <StoreBrandLogo
                        storeId={selectedStore.brandId}
                        name={selectedStore.name}
                        variant="icon"
                        className="w-10 h-10 rounded-xl"
                      />
                      <div>
                        <div className="text-[10px] font-bold text-[#FF655B] uppercase tracking-wider">
                          {t.map.selectedStoreBadge}
                        </div>
                        <div className="text-xs font-extrabold text-gray-900 dark:text-white">
                          {selectedStore.name}
                        </div>
                      </div>
                    </div>
                    <Badge variant="success" size="sm">
                      <QrCode className="w-3 h-3 mr-1" />
                      TezQR {t.common.active}
                    </Badge>
                  </div>

                  <div className="text-[11px] text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
                    <span className="truncate">{selectedStore.address}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={getYandexMapsUrl(selectedStore.lat, selectedStore.lng)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#FF655B] hover:bg-[#ED4A3F] text-white text-xs font-bold transition-all shadow-md shadow-[#FF655B]/20"
                    >
                      <Route className="w-3.5 h-3.5" />
                      {t.map.openInYandex}
                    </a>
                    <a
                      href={getGoogleMapsUrl(selectedStore.lat, selectedStore.lng)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-[#1D2329] dark:hover:bg-[#262D35] text-gray-800 dark:text-gray-200 text-xs font-bold transition-all border border-gray-200 dark:border-gray-700"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Google Maps
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Right Map Canvas (Official Yandex Maps API Container) */}
            <div className="lg:col-span-7 relative min-h-[460px] lg:min-h-[640px] bg-gray-100 dark:bg-[#0A0F14]">
              {/* Actual Yandex Map DOM element */}
              <div
                ref={mapContainerRef}
                className="yandex-map-container w-full h-full min-h-[460px] lg:min-h-[640px] z-10"
              />

              {/* Top Floating Badge & Active Route Indicator */}
              {selectedStore && (
                <div className="absolute top-4 left-4 z-20 bg-white/95 dark:bg-[#13181E]/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-gray-200/80 dark:border-gray-800 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#FF655B]/15 text-[#FF655B] flex items-center justify-center shrink-0">
                    <HissaMark size={14} animated={false} color="#FF655B" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-gray-900 dark:text-white">
                      {selectedStore.name}
                    </div>
                    <div className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                      {formatDistance(selectedStore.distanceMeters)} · {selectedStore.walkMinutes} {t.common.walkMinutes} ({t.map.routeDrawn})
                    </div>
                  </div>
                </div>
              )}

              {/* Yandex Maps Badge on Top-Right */}
              <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-[#13181E]/90 backdrop-blur-md border border-gray-200/80 dark:border-gray-800 text-[11px] font-bold text-gray-700 dark:text-gray-300 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#FF655B]" />
                <span>{t.map.yandexMapBadge}</span>
              </div>

              {/* Re-center Floating Compass Button */}
              <button
                onClick={handleRecenter}
                title={t.map.yourLocation}
                className="absolute bottom-16 right-4 z-20 w-9 h-9 rounded-xl bg-white dark:bg-[#181F26] border border-gray-200 dark:border-gray-800 shadow-xl text-emerald-500 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <Compass className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
