import type { CSSProperties } from 'react';
import { CRESCENT_PATH, CRESCENT_VIEWBOX } from './crescent';

interface BrandMotifProps {
  color?: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

const STEP = CRESCENT_VIEWBOX.width * 0.78;
const LAYERS = [0.15, 0.35, 0.7] as const;
const VIEW_WIDTH = STEP * (LAYERS.length - 1) + CRESCENT_VIEWBOX.width;

export function BrandMotif({
  color = '#FF655B',
  size = 320,
  className = '',
  style,
}: BrandMotifProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={(size * CRESCENT_VIEWBOX.height) / VIEW_WIDTH}
      viewBox={`0 0 ${VIEW_WIDTH} ${CRESCENT_VIEWBOX.height}`}
      fill={color}
      className={`select-none pointer-events-none ${className}`}
      style={{ position: 'absolute', zIndex: 0, ...style }}
    >
      {LAYERS.map((opacity, index) => (
        <path
          key={opacity}
          d={CRESCENT_PATH}
          opacity={opacity}
          transform={`translate(${STEP * index} 0)`}
        />
      ))}
    </svg>
  );
}
