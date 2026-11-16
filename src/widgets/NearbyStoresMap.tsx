import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { useTheme } from '../app/theme/ThemeContext';
import { Badge } from '../shared/ui/Badge';
import { HissaMark } from '../shared/ui/HissaMark';
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
import L from 'leaflet';

export const NearbyStoresMap: React.FC = () => {
  const { t } = useI18n();
  const { theme } = useTheme();

  const [activeTab, setActiveTab] = useState<'nearby' | 'all'>('nearby');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStoreId, setSelectedStoreId] = useState<string>('texnomart-chilonzor');

  // Map references
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const routePolylineRef = useRef<L.Polyline | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);

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

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Create map centered on user
    const map = L.map(mapContainerRef.current, {
      center: [userCoords.lat, userCoords.lng],
      zoom: 14,
      zoomControl: false,
      attributionControl: false,
    });

    // Add zoom control at bottom right
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // OpenStreetMap clean standard tiles (No watermarks, no API key required)
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      subdomains: ['a', 'b', 'c'],
    }).addTo(map);

    tileLayerRef.current = tiles;

    // Add User Location Marker (Pulsing Radar Pin)
    const userIcon = L.divIcon({
      className: 'custom-user-marker',
      html: `
        <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">
          <div style="position: absolute; width: 32px; height: 32px; border-radius: 50%; background: rgba(16, 185, 129, 0.35); animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
          <div style="width: 14px; height: 14px; border-radius: 50%; background: #10B981; border: 3px solid #FFFFFF; box-shadow: 0 4px 10px rgba(0,0,0,0.3); z-index: 10;"></div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });

    L.marker([userCoords.lat, userCoords.lng], { icon: userIcon, zIndexOffset: 1000 })
      .bindPopup(
        `<div style="font-family: inherit; font-size: 11px; font-weight: 700; color: #10B981; padding: 2px 4px;">
           📍 ${t.map.yourLocation} (${userCoords.label})
         </div>`
      )
      .addTo(map);

    // Markers layer group
    const markersLayer = L.layerGroup().addTo(map);
    markersLayerRef.current = markersLayer;

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);



  // Update Store Pins and Route Polyline
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;
    if (!map || !markersLayer) return;

    markersLayer.clearLayers();

    // Add each store pin
    storesWithDistance.forEach((store) => {
      const isSelected = store.id === selectedStore.id;

      const storeIcon = L.divIcon({
        className: 'custom-store-marker',
        html: `
          <div style="display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: transform 0.2s ease;">
            <div style="
              width: ${isSelected ? '36px' : '28px'};
              height: ${isSelected ? '36px' : '28px'};
              border-radius: 12px;
              background: ${isSelected ? '#FF655B' : theme === 'dark' ? '#1D2329' : '#FFFFFF'};
              color: ${isSelected ? '#FFFFFF' : '#FF655B'};
              border: 2px solid ${isSelected ? '#FFFFFF' : '#FF655B'};
              box-shadow: 0 8px 18px ${isSelected ? 'rgba(255, 101, 91, 0.45)' : 'rgba(0,0,0,0.18)'};
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 800;
              font-size: ${isSelected ? '14px' : '11px'};
            ">
              ${store.name.charAt(0)}
            </div>
            <div style="
              margin-top: 3px;
              white-space: nowrap;
              padding: 2px 7px;
              border-radius: 9999px;
              background: ${isSelected ? '#FF655B' : theme === 'dark' ? '#13181E' : '#FFFFFF'};
              color: ${isSelected ? '#FFFFFF' : theme === 'dark' ? '#FFFFFF' : '#0C111D'};
              border: 1px solid ${isSelected ? 'transparent' : theme === 'dark' ? '#323A44' : '#E4E7EC'};
              font-size: 9px;
              font-weight: 700;
              box-shadow: 0 4px 10px rgba(0,0,0,0.12);
            ">
              ${store.name.split(' ')[0]} · ${formatDistance(store.distanceMeters)}
            </div>
          </div>
        `,
        iconSize: [70, 50],
        iconAnchor: [35, isSelected ? 36 : 28],
      });

      const marker = L.marker([store.lat, store.lng], { icon: storeIcon });

      marker.on('click', () => {
        setSelectedStoreId(store.id);
      });

      marker.bindPopup(`
        <div style="font-family: inherit; font-size: 12px; padding: 4px; line-height: 1.4;">
          <b style="font-size: 13px; color: #0C111D;">${store.name}</b>
          <div style="color: #64748B; margin-top: 2px;">${store.address}</div>
          <div style="color: #10B981; font-weight: 700; margin-top: 4px;">✓ ${store.terms} · TezQR</div>
          <div style="color: #FF655B; font-weight: 700; margin-top: 2px;">
            ${formatDistance(store.distanceMeters)} (${store.walkMinutes} ${t.common.walkMinutes})
          </div>
        </div>
      `);

      markersLayer.addLayer(marker);
    });

    // Draw Route Polyline from User to Selected Store
    if (routePolylineRef.current) {
      map.removeLayer(routePolylineRef.current);
    }

    const routeLine = L.polyline(
      [
        [userCoords.lat, userCoords.lng],
        [selectedStore.lat, selectedStore.lng],
      ],
      {
        color: '#FF655B',
        weight: 3.5,
        opacity: 0.85,
        dashArray: '8, 8',
      }
    ).addTo(map);

    routePolylineRef.current = routeLine;

    // Pan map smoothly to encompass user and selected store
    const bounds = L.latLngBounds(
      [userCoords.lat, userCoords.lng],
      [selectedStore.lat, selectedStore.lng]
    );
    map.flyToBounds(bounds, { padding: [50, 50], maxZoom: 15, duration: 0.8 });
  }, [storesWithDistance, selectedStore, theme, t]);

  const categories = [
    { id: 'all', label: t.map.filterAll },
    { id: 'electronics', label: t.map.categoryElectronics },
    { id: 'fashion', label: t.map.categoryFashion },
    { id: 'supermarket', label: t.map.categorySupermarket },
    { id: 'beauty', label: t.map.categoryBeauty },
  ];

  const handleRecenter = () => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo([userCoords.lat, userCoords.lng], 14, { duration: 0.8 });
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

            {/* Right Map Canvas (Leaflet Real Map Container) */}
            <div className="lg:col-span-7 relative min-h-[460px] lg:min-h-[640px] bg-gray-100 dark:bg-[#0A0F14]">
              {/* Actual Leaflet DOM element */}
              <div ref={mapContainerRef} className="w-full h-full min-h-[460px] lg:min-h-[640px] z-10" />

              {/* Floating Active Route Indicator */}
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
