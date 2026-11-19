import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { SectionHeader } from '../shared/ui/SectionHeader';
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
import { getPartner } from '../shared/config/partners';
import type { PartnerCategory } from '../shared/config/partners';
import { reveal } from '../app/motion/useScrollReveal';
import { storePinHtml, USER_DOT_HTML, PIN_SHAPE } from '../shared/map/storePins';
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
  LayoutGrid,
  Smartphone,
  Shirt,
  Sofa,
  ShoppingCart,
  LocateFixed,
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
    const ymapsLang = (language === 'uz' || (language as string) === 'uz_lat') ? 'uz_UZ' : language === 'en' ? 'en_US' : 'ru_RU';
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
            controls: ['zoomControl'],
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

    // 1. User location: blue dot with a soft pulse (Figma 1203:32935)
    const userPlacemark = new window.ymaps.Placemark(
      [userCoords.lat, userCoords.lng],
      { hintContent: `${t.map.yourLocation} · ${t.map.userLocationLabel}` },
      {
        iconLayout: window.ymaps.templateLayoutFactory.createClass(USER_DOT_HTML),
        iconShape: { type: 'Circle', coordinates: [0, 0], radius: 12 },
        hasBalloon: false,
        zIndex: 300,
      }
    );
    geoCollection.add(userPlacemark);

    // 2. Store pins: coral pill with category icon and brand name.
    // Stores outside the active filter stay visible but muted.
    const visibleIds = new Set(filteredStores.map((s) => s.id));
    storesWithDistance.forEach((store) => {
      const isSelected = store.id === selectedStore.id;
      const html = storePinHtml({
        name: getPartner(store.brandId)?.name ?? store.name,
        category: store.category,
        term: store.terms.split(' / ')[0],
        active: isSelected,
        muted: !isSelected && !visibleIds.has(store.id),
      });

      const storePlacemark = new window.ymaps.Placemark(
        [store.lat, store.lng],
        { hintContent: `${store.name} · ${formatDistance(store.distanceMeters)}` },
        {
          iconLayout: window.ymaps.templateLayoutFactory.createClass(html),
          iconShape: PIN_SHAPE,
          hasBalloon: false,
          zIndex: isSelected ? 250 : 200,
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
      { checkZoomRange: true, duration: 600, zoomMargin: [80, 80, 260, 40] }
    );
  }, [storesWithDistance, filteredStores, selectedStore, isMapReady, t]);

  const categories: { id: 'all' | PartnerCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: t.map.filterAll, icon: <LayoutGrid className="h-[18px] w-[18px]" /> },
    { id: 'electronics', label: t.map.categoryElectronics, icon: <Smartphone className="h-[18px] w-[18px]" /> },
    { id: 'fashion', label: t.map.categoryFashion, icon: <Shirt className="h-[18px] w-[18px]" /> },
    { id: 'home', label: t.stores.categoryLabels.home, icon: <Sofa className="h-[18px] w-[18px]" /> },
    { id: 'supermarket', label: t.map.categorySupermarket, icon: <ShoppingCart className="h-[18px] w-[18px]" /> },
  ];

  const handleRecenter = () => {
    if (!ymapsInstanceRef.current) return;
    ymapsInstanceRef.current.setCenter([userCoords.lat, userCoords.lng], 14, { duration: 600 });
  };

  const tabClass = (active: boolean) =>
    `rounded-full py-2.5 text-sm font-bold transition-colors ${active ? 'bg-surface text-ink shadow-card' : 'text-ink-2 hover:text-ink'}`;

  return (
    <section id="map" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t.map.eyebrow} icon={<Compass />} title={t.map.title} subtitle={t.map.subtitle} />

        <div {...reveal('fade-up')} className="overflow-hidden rounded-[32px] bg-surface shadow-lift">
          <div className="grid min-h-[680px] grid-cols-1 lg:grid-cols-12">
            {/* Controls and store list */}
            <div className="flex flex-col gap-4 border-b border-line p-4 sm:p-6 lg:col-span-5 lg:border-b-0 lg:border-r">
              <label className="relative block">
                <span className="sr-only">{t.map.searchPlaceholder}</span>
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-3" />
                <input
                  type="search"
                  placeholder={t.map.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full bg-canvas py-3.5 pl-12 pr-4 text-[15px] font-medium text-ink placeholder:text-ink-3 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </label>

              <div className="grid grid-cols-2 gap-1 rounded-full bg-sunken p-1" role="tablist">
                <button role="tab" aria-selected={activeTab === 'nearby'} onClick={() => setActiveTab('nearby')} className={tabClass(activeTab === 'nearby')}>
                  {t.map.nearbyTab}
                </button>
                <button role="tab" aria-selected={activeTab === 'all'} onClick={() => setActiveTab('all')} className={tabClass(activeTab === 'all')}>
                  {t.map.allStoresTab}
                </button>
              </div>

              <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none]">
                {categories.map((c) => {
                  const active = categoryFilter === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setCategoryFilter(c.id)}
                      aria-pressed={active}
                      className={`flex shrink-0 items-center gap-1.5 rounded-full border bg-surface py-2 pl-3 pr-4 text-sm font-semibold shadow-card transition-colors ${
                        active ? 'border-brand text-brand-ink' : 'border-transparent text-ink-2 hover:text-ink'
                      }`}
                    >
                      {c.icon}
                      {c.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between gap-3 px-1 text-sm">
                <span className="flex min-w-0 items-center gap-2 font-semibold text-ink">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#2e90fa] ring-4 ring-[#2e90fa]/20" />
                  {t.map.userLocationLabel}
                </span>
                <span className="shrink-0 text-ink-3">
                  {filteredStores.length} {t.map.storesFound}
                </span>
              </div>

              <ul className="-mr-2 max-h-[420px] flex-1 space-y-2 overflow-y-auto pr-2">
                {filteredStores.map((store) => {
                  const isSelected = store.id === selectedStore.id;
                  return (
                    <li key={store.id}>
                      <button
                        type="button"
                        onClick={() => setSelectedStoreId(store.id)}
                        aria-pressed={isSelected}
                        className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-colors ${
                          isSelected ? 'border-brand/40 bg-brand-tint' : 'border-transparent bg-canvas hover:border-line-strong'
                        }`}
                      >
                        <StoreBrandLogo storeId={store.brandId} name={store.name} className="h-12 w-12 rounded-2xl" />
                        <span className="min-w-0 flex-1 space-y-1">
                          <span className="flex items-center gap-2">
                            <span className="truncate text-[15px] font-bold text-ink">{store.name}</span>
                            <span className="shrink-0 rounded-md border border-brand px-1.5 py-0.5 text-[11px] font-bold text-brand-ink">
                              {store.terms.split(' / ')[0]}
                            </span>
                          </span>
                          <span className="block truncate text-[13px] text-ink-2">{store.address}</span>
                          <span className="flex items-center gap-3 text-xs font-semibold">
                            <span className="flex items-center gap-1 whitespace-nowrap text-brand-ink">
                              <Navigation className="h-3.5 w-3.5" />
                              {formatDistance(store.distanceMeters)} · {store.walkMinutes} {t.common.walkMinutes}
                            </span>
                            <span className="hidden items-center gap-1 whitespace-nowrap text-ink-3 sm:flex">
                              <Clock className="h-3.5 w-3.5" />
                              {store.workingHours}
                            </span>
                          </span>
                        </span>
                        <ChevronRight className={`h-5 w-5 shrink-0 ${isSelected ? 'text-brand-ink' : 'text-ink-3'}`} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Yandex map */}
            <div className="relative min-h-[520px] bg-sunken lg:col-span-7 lg:min-h-[680px]">
              <div ref={mapContainerRef} className="yandex-map-container absolute inset-0 z-10" />

              <button
                type="button"
                onClick={handleRecenter}
                aria-label={t.map.yourLocation}
                className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-ink shadow-card transition-colors hover:text-brand-ink"
              >
                <LocateFixed className="h-6 w-6" />
              </button>

              {selectedStore && (
                <div className="absolute inset-x-3 bottom-3 z-20 rounded-3xl bg-surface p-4 shadow-lift sm:inset-x-4 sm:bottom-4">
                  <div className="flex items-start gap-3">
                    <StoreBrandLogo storeId={selectedStore.brandId} name={selectedStore.name} className="h-12 w-12 rounded-2xl" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold uppercase tracking-wide text-brand-ink">{t.map.selectedStoreBadge}</p>
                      <p className="truncate text-base font-bold text-ink">{selectedStore.name}</p>
                      <p className="mt-0.5 hidden items-center gap-1 truncate text-[13px] text-ink-2 sm:flex">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        {selectedStore.address}
                      </p>
                    </div>
                    <span className="hidden shrink-0 items-center gap-1 rounded-lg bg-success-soft px-2 py-1 text-xs font-bold text-success sm:inline-flex">
                      <QrCode className="h-3.5 w-3.5" />
                      TezQR
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-[13px] font-semibold max-sm:hidden">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-canvas px-3 py-1.5 text-ink">
                      <Navigation className="h-3.5 w-3.5 text-brand-ink" />
                      {formatDistance(selectedStore.distanceMeters)} · {selectedStore.walkMinutes} {t.common.walkMinutes}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-canvas px-3 py-1.5 text-ink">
                      <Clock className="h-3.5 w-3.5 text-ink-3" />
                      {selectedStore.workingHours}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-brand px-3 py-1 text-brand-ink">
                      {selectedStore.terms}
                    </span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <a
                      href={getYandexMapsUrl(selectedStore.lat, selectedStore.lng)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-4 py-3 text-sm font-bold text-white shadow-brand transition-colors hover:bg-brand-pressed"
                    >
                      <Route className="h-4 w-4" />
                      {t.map.openInYandex}
                    </a>
                    <a
                      href={getGoogleMapsUrl(selectedStore.lat, selectedStore.lng)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line-strong px-4 py-3 text-sm font-bold text-ink transition-colors hover:border-brand hover:text-brand-ink max-sm:hidden"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t.map.openInGoogle}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
