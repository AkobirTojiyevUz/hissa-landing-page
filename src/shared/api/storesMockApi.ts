export interface StoreBranch {
  id: string;
  brandId: 'texnomart' | 'mediapark' | 'korzinka' | 'bellstore' | 'ishonch' | 'terrapro' | 'arena' | 'flo' | 'makro' | 'idea';
  name: string;
  category: 'electronics' | 'fashion' | 'supermarket' | 'beauty' | 'home';
  lat: number;
  lng: number;
  address: string;
  district: string;
  city: string;
  phone: string;
  workingHours: string;
  terms: string; // e.g. "0-0-3", "0-0-6", "0-0-12"
  rating: number;
  reviewsCount: number;
  tezQrAvailable: boolean;
  popularItem: string;
}

export interface UserCoordinates {
  lat: number;
  lng: number;
  label: string;
}

// User reference position: Tashkent, Chilanzar (Bunyodkor & Muqimiy intersection)
export const DEFAULT_USER_COORDINATES: UserCoordinates = {
  lat: 41.2858,
  lng: 69.2045,
  label: "Toshkent, Chilonzor (Bunyodkor shoh ko'chasi)",
};

export const MOCK_STORE_BRANCHES: StoreBranch[] = [
  {
    id: 'texnomart-chilonzor',
    brandId: 'texnomart',
    name: 'Texnomart Chilonzor',
    category: 'electronics',
    lat: 41.2872,
    lng: 69.2085,
    address: "Bunyodkor shoh ko'chasi, 52A (Chilonzor savdo markazi)",
    district: 'Chilonzor',
    city: 'Toshkent',
    phone: '+998 71 209 99 44',
    workingHours: '09:00 — 22:00',
    terms: '0-0-3 / 0-0-6 / 0-0-12',
    rating: 4.9,
    reviewsCount: 382,
    tezQrAvailable: true,
    popularItem: 'iPhone 15 Pro, Samsung Galaxy S24, Smart TV',
  },
  {
    id: 'mediapark-novza',
    brandId: 'mediapark',
    name: 'Mediapark Novza',
    category: 'electronics',
    lat: 41.2932,
    lng: 69.2178,
    address: "Muqimiy ko'chasi, 15 (Novza metro yaqinida)",
    district: 'Chilonzor',
    city: 'Toshkent',
    phone: '+998 71 203 33 33',
    workingHours: '10:00 — 22:00',
    terms: '0-0-3 / 0-0-6',
    rating: 4.8,
    reviewsCount: 520,
    tezQrAvailable: true,
    popularItem: 'LG Muzlatgich, Artel Konditsioner, Bosch kir yuvish',
  },
  {
    id: 'korzinka-bunyodkor',
    brandId: 'korzinka',
    name: 'Korzinka Bunyodkor',
    category: 'supermarket',
    lat: 41.2815,
    lng: 69.1985,
    address: "Bunyodkor shoh ko'chasi, 41 (Mirzo Ulug'bek bekati)",
    district: 'Chilonzor',
    city: 'Toshkent',
    phone: '+998 78 140 14 14',
    workingHours: '08:00 — 23:00',
    terms: '0-0-3',
    rating: 4.9,
    reviewsCount: 1240,
    tezQrAvailable: true,
    popularItem: "Katta oylik ro'zg'or va oziq-ovqat mahsulotlari",
  },
  {
    id: 'bellstore-qatortol',
    brandId: 'bellstore',
    name: 'Bellstore Qatortol',
    category: 'beauty',
    lat: 41.2798,
    lng: 69.2140,
    address: "Qatortol ko'chasi, 28A (Parus Mall ro'parasida)",
    district: 'Chilonzor',
    city: 'Toshkent',
    phone: '+998 71 200 80 80',
    workingHours: '10:00 — 21:00',
    terms: '0-0-3',
    rating: 4.9,
    reviewsCount: 290,
    tezQrAvailable: true,
    popularItem: 'Dior Sauvage, Chanel, Tom Ford, premium parfyumeriya',
  },
  {
    id: 'arena-markaz-qoratosh',
    brandId: 'arena',
    name: 'Arena Markaz Qoratosh',
    category: 'electronics',
    lat: 41.3125,
    lng: 69.2385,
    address: "Qoratosh ko'chasi, 11A (Samarqand Darvoza ro'parasi)",
    district: 'Shayxontohur',
    city: 'Toshkent',
    phone: '+998 71 200 44 22',
    workingHours: '10:00 — 22:00',
    terms: '0-0-3 / 0-0-6',
    rating: 4.8,
    reviewsCount: 410,
    tezQrAvailable: true,
    popularItem: 'PlayStation 5, ASUS ROG Noutbuklar, Apple Watch',
  },
  {
    id: 'terrapro-samarkand-darvoza',
    brandId: 'terrapro',
    name: 'Terra Pro Darvoza',
    category: 'fashion',
    lat: 41.3160,
    lng: 69.2410,
    address: "Qoratosh ko'chasi, 5A (Samarqand Darvoza Mall 3-qavat)",
    district: 'Shayxontohur',
    city: 'Toshkent',
    phone: '+998 71 205 11 22',
    workingHours: '10:00 — 23:00',
    terms: '0-0-3',
    rating: 4.8,
    reviewsCount: 650,
    tezQrAvailable: true,
    popularItem: 'Kostyum-shimlar, charm kurtkalar, zamonaviy koftalar',
  },
  {
    id: 'flo-shoes-darvoza',
    brandId: 'flo',
    name: 'FLO Shoes Samarqand Darvoza',
    category: 'fashion',
    lat: 41.3155,
    lng: 69.2405,
    address: "Qoratosh ko'chasi, 5A (Samarqand Darvoza Mall 2-qavat)",
    district: 'Shayxontohur',
    city: 'Toshkent',
    phone: '+998 71 205 33 44',
    workingHours: '10:00 — 23:00',
    terms: '0-0-3',
    rating: 4.7,
    reviewsCount: 340,
    tezQrAvailable: true,
    popularItem: 'Lumberjack krossovkalar, Kinetix poyabzallar',
  },
  {
    id: 'ishonch-beruniy',
    brandId: 'ishonch',
    name: 'Ishonch Beruniy',
    category: 'home',
    lat: 41.3440,
    lng: 69.2065,
    address: "Beruniy shoh ko'chasi, 83 (Beruniy metro yaqinida)",
    district: 'Olmazor',
    city: 'Toshkent',
    phone: '+998 73 515 22 22',
    workingHours: '09:00 — 20:00',
    terms: '0-0-3 / 0-0-12',
    rating: 4.7,
    reviewsCount: 780,
    tezQrAvailable: true,
    popularItem: 'Yumshoq mebel to\'plamlari, gaz plitalari, gilamlar',
  },
  {
    id: 'idea-yunusobod',
    brandId: 'idea',
    name: 'Idea Electronics Mega Planet',
    category: 'electronics',
    lat: 41.3665,
    lng: 69.2895,
    address: "Ahmad Donish ko'chasi, 2B (Mega Planet Mall)",
    district: 'Yunusobod',
    city: 'Toshkent',
    phone: '+998 71 230 77 99',
    workingHours: '10:00 — 22:00',
    terms: '0-0-3 / 0-0-6',
    rating: 4.8,
    reviewsCount: 420,
    tezQrAvailable: true,
    popularItem: 'Oshxona kombaynlari, changyutgichlar, smartfonlar',
  },
  {
    id: 'makro-express-chilonzor',
    brandId: 'makro',
    name: 'Makro Chilonzor 24',
    category: 'supermarket',
    lat: 41.2750,
    lng: 69.2090,
    address: "Chilonzor 24-mavze, Kichik halqa yo'li 18",
    district: 'Chilonzor',
    city: 'Toshkent',
    phone: '+998 71 205 12 00',
    workingHours: '24/7',
    terms: '0-0-3',
    rating: 4.6,
    reviewsCount: 510,
    tezQrAvailable: true,
    popularItem: 'Oziq-ovqat, maishiy kimyo, go\'sht va sabzavotlar',
  },
];

// Haversine formula to compute distance in meters between two lat/lng coordinates
export function calculateDistanceInMeters(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371e3; // Earth radius in meters
  const phi1 = (lat1 * Math.PI) / 180;
  const phi2 = (lat2 * Math.PI) / 180;
  const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(R * c);
}

// Format distance: < 1000m -> "350 m", >= 1000m -> "1.2 km"
export function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${meters} m`;
  }
  return `${(meters / 1000).toFixed(1)} km`;
}

// Calculate walk time (average 80 meters per minute)
export function calculateWalkMinutes(meters: number): number {
  return Math.max(1, Math.round(meters / 80));
}

// Get Yandex Maps directions link
export function getYandexMapsUrl(lat: number, lng: number): string {
  return `https://yandex.uz/maps/?pt=${lng},${lat}&z=16&l=map`;
}

// Get Google Maps directions link
export function getGoogleMapsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}
