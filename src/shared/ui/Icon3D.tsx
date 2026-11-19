import React from 'react';

/**
 * 3D icons from Microsoft Fluent Emoji (MIT license, see
 * src/assets/icons3d/LICENSE-fluentui-emoji.txt), resized to 128px.
 */
const ICONS = import.meta.glob('../../assets/icons3d/*.png', { eager: true, import: 'default' }) as Record<string, string>;

export type Icon3DName =
  | 'bell'
  | 'check-mark-button'
  | 'classical-building'
  | 'convenience-store'
  | 'credit-card'
  | 'department-store'
  | 'globe-with-meridians'
  | 'headphone'
  | 'identification-card'
  | 'locked'
  | 'mobile-phone-with-arrow'
  | 'mobile-phone'
  | 'money-bag'
  | 'money-with-wings'
  | 'package'
  | 'rocket'
  | 'shield'
  | 'sparkles'
  | 'spiral-calendar'
  | 'sports-medal';

interface Icon3DProps {
  name: Icon3DName;
  /** Rendered size in px (square). */
  size?: number;
  className?: string;
  /** Delay for the idle float so neighbouring icons don't move in sync. */
  delay?: number;
}

/**
 * Idle: gentle float. When an ancestor with the `group` class is hovered, the
 * icon tilts in perspective and scales up (see `.icon-3d` in index.css).
 */
export const Icon3D: React.FC<Icon3DProps> = ({ name, size = 44, className = '', delay = 0 }) => {
  const src = ICONS[`../../assets/icons3d/${name}.png`];
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className={`icon-3d select-none ${className}`}
      style={{ width: size, height: size, animationDelay: `${delay}ms` }}
      draggable={false}
    />
  );
};
