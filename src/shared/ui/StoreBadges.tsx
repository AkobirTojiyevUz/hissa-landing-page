import React from 'react';
import { useI18n } from '../../app/i18n/I18nContext';
import { APP_LINKS } from '../config/appLinks';
import appStoreBadge from '../../assets/stores/app-store-en.svg';
import googlePlayEn from '../../assets/stores/google-play-en.png';
import googlePlayRu from '../../assets/stores/google-play-ru.png';
import googlePlayUz from '../../assets/stores/google-play-uz.png';

/**
 * Official download badges, unmodified:
 * - App Store: developer.apple.com marketing artwork (US-UK, black).
 * - Google Play: play.google.com/intl/en_us/badges, localized per language.
 * The Google PNG includes its own clear-space padding, so it is drawn taller
 * than the Apple SVG to make the visible badges the same height (Google's
 * guidance).
 */
export const StoreBadges: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language } = useI18n();
  const googleBadge = language === 'ru' ? googlePlayRu : language === 'en' ? googlePlayEn : googlePlayUz;

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <a
        href={APP_LINKS.appStore || '#app'}
        target={APP_LINKS.appStore ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="inline-block rounded-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <img src={appStoreBadge} alt="Download on the App Store" width={135} height={45} className="h-[45px] w-auto" />
      </a>
      <a
        href={APP_LINKS.googlePlay || '#app'}
        target={APP_LINKS.googlePlay ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="inline-block rounded-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <img src={googleBadge} alt="Get it on Google Play" width={173} height={67} className="-my-[11px] h-[67px] w-auto" />
      </a>
    </div>
  );
};
