import React from 'react';
import pinSec from '../../assets/trust/dss_1.svg';
import pinSecWhite from '../../assets/trust/dss_1_white.svg';
import dss from '../../assets/trust/dss_2.svg';
import dssWhite from '../../assets/trust/dss_2_white.svg';
import threeDs from '../../assets/trust/3ds.svg';
import threeDsWhite from '../../assets/trust/3ds_white.svg';

/**
 * Uzcard's security certification marks, exactly as published in the
 * uzcard.uz footer (api.uzcard.uz/wp-content/uploads/2025/12/*), each linking
 * to its public certificate on compliance-control.eu like on uzcard.uz.
 */
const BADGES = [
  { alt: 'PCI PIN Security', light: pinSec, dark: pinSecWhite, href: 'https://compliance-control.eu/certs/YLUC-6A3C-3G0V' },
  { alt: 'PCI DSS', light: dss, dark: dssWhite, href: 'https://compliance-control.eu/certs/HYPT-EYA6-YP1R/' },
  { alt: 'PCI 3DS', light: threeDs, dark: threeDsWhite, href: 'https://compliance-control.eu/certs/7D4F-CVE6-WJJO/' },
] as const;

export const TrustBadges: React.FC<{ className?: string }> = ({ className = '' }) => (
  <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
    {BADGES.map((b) => (
      <li key={b.alt}>
        <a
          href={b.href}
          target="_blank"
          rel="noopener noreferrer"
          title={b.alt}
          className="block rounded-xl transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <img src={b.light} alt={b.alt} width={70} height={56} className="h-14 w-auto dark:hidden" />
          <img src={b.dark} alt="" aria-hidden="true" width={70} height={56} className="hidden h-14 w-auto dark:block" />
        </a>
      </li>
    ))}
  </ul>
);
