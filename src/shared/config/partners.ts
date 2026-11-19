import texnomartIcon from '../../assets/brands/texnomart.png';
import mediaparkIcon from '../../assets/brands/mediapark.png';
import korzinkaIcon from '../../assets/brands/korzinka.png';
import asaxiyIcon from '../../assets/brands/asaxiy.png';
import olchaIcon from '../../assets/brands/olcha.png';
import ishonchIcon from '../../assets/brands/ishonch.png';
import terraproIcon from '../../assets/brands/terrapro.png';
import defactoIcon from '../../assets/brands/defacto.png';
import makroIcon from '../../assets/brands/makro.svg';

export type PartnerId =
  | 'texnomart'
  | 'mediapark'
  | 'korzinka'
  | 'asaxiy'
  | 'olcha'
  | 'ishonch'
  | 'terrapro'
  | 'defacto'
  | 'makro';

export type PartnerCategory = 'electronics' | 'fashion' | 'home' | 'supermarket';

/**
 * How the logo file is placed inside the square tile:
 * - `bleed`: the file is already a finished square app icon and fills the tile.
 * - `inset`: the file is a mark or wordmark on a transparent background and is
 *   centered with padding on a white tile.
 */
export type PartnerLogoFit = 'bleed' | 'inset';

export interface Partner {
  id: PartnerId;
  name: string;
  category: PartnerCategory;
  logo: string;
  logoFit: PartnerLogoFit;
  terms: string;
  maxMonths: number;
  rating: string;
}

/**
 * Single source of truth for partner brands. Logos come from official sources:
 * the brand's App Store app icon, or the icon/logo published on its own website
 * (makromarket.uz, terrapro.uz, ishonchsavdo.uz).
 */
export const PARTNERS: readonly Partner[] = [
  { id: 'texnomart', name: 'Texnomart', category: 'electronics', logo: texnomartIcon, logoFit: 'bleed', terms: '0-0-3 / 0-0-6 / 0-0-12', maxMonths: 12, rating: '4.9' },
  { id: 'mediapark', name: 'Mediapark', category: 'electronics', logo: mediaparkIcon, logoFit: 'bleed', terms: '0-0-3 / 0-0-6', maxMonths: 6, rating: '4.8' },
  { id: 'korzinka', name: 'Korzinka', category: 'supermarket', logo: korzinkaIcon, logoFit: 'bleed', terms: '0-0-3', maxMonths: 3, rating: '4.9' },
  { id: 'asaxiy', name: 'Asaxiy', category: 'electronics', logo: asaxiyIcon, logoFit: 'bleed', terms: '0-0-3 / 0-0-6', maxMonths: 6, rating: '4.8' },
  { id: 'ishonch', name: 'Ishonch', category: 'home', logo: ishonchIcon, logoFit: 'inset', terms: '0-0-3 / 0-0-12', maxMonths: 12, rating: '4.7' },
  { id: 'terrapro', name: 'Terra Pro', category: 'fashion', logo: terraproIcon, logoFit: 'inset', terms: '0-0-3', maxMonths: 3, rating: '4.8' },
  { id: 'olcha', name: 'Olcha', category: 'electronics', logo: olchaIcon, logoFit: 'bleed', terms: '0-0-3 / 0-0-6', maxMonths: 6, rating: '4.8' },
  { id: 'defacto', name: 'DeFacto', category: 'fashion', logo: defactoIcon, logoFit: 'bleed', terms: '0-0-3', maxMonths: 3, rating: '4.7' },
  { id: 'makro', name: 'Makro', category: 'supermarket', logo: makroIcon, logoFit: 'inset', terms: '0-0-3', maxMonths: 3, rating: '4.7' },
];

const PARTNERS_BY_ID = new Map<string, Partner>(PARTNERS.map((p) => [p.id, p]));

export function getPartner(id: string): Partner | undefined {
  return PARTNERS_BY_ID.get(id);
}
