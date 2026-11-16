import React from 'react';

const CRESCENTS = [
  {
    d: 'M1.66672 4C3.41767 4 5.15148 4.31039 6.76915 4.91345C8.38682 5.51651 9.85667 6.40042 11.0948 7.51473C12.3329 8.62903 13.315 9.95191 13.9851 11.4078C14.6551 12.8637 15 14.4242 15 16C15 17.5759 14.6551 19.1363 13.9851 20.5922C13.315 22.0481 12.3329 23.371 11.0947 24.4853C9.85663 25.5996 8.38678 26.4835 6.7691 27.0866C5.15143 27.6896 3.41762 28 1.66667 28H1.50497C0.674603 28 0.00223082 27.3254 0.00497673 26.495L0.0396825 16L0.00497671 5.50496C0.00223081 4.6746 0.674603 4 1.50497 4H1.66672Z',
    defaultOpacity: 0.25,
    delay: '0ms',
  },
  {
    d: 'M17.1667 4C18.9177 4 20.6515 4.31039 22.2691 4.91345C23.8868 5.51651 25.3567 6.40042 26.5948 7.51473C27.8329 8.62903 28.815 9.95191 29.4851 11.4078C30.1551 12.8637 30.5 14.4242 30.5 16C30.5 17.5759 30.1551 19.1363 29.4851 20.5922C28.815 22.0481 27.8329 23.371 26.5947 24.4853C25.3566 25.5996 23.8868 26.4835 22.2691 27.0866C20.6514 27.6896 18.9176 28 17.1667 28H17.005C16.1746 28 15.5022 27.3254 15.505 26.495L15.5397 16L15.505 5.50496C15.5022 4.6746 16.1746 4 17.005 4H17.1667Z',
    defaultOpacity: 0.45,
    delay: '400ms',
  },
  {
    d: 'M33.5863 4C35.2165 4 36.8307 4.31039 38.3368 4.91345C39.8429 5.51651 41.2114 6.40042 42.3641 7.51473C43.5168 8.62903 44.4312 9.9519 45.0551 11.4078C45.6789 12.8637 46 14.4242 46 16C46 17.5759 45.6789 19.1363 45.055 20.5922C44.4312 22.0481 43.5168 23.371 42.3641 24.4853C41.2113 25.5996 39.8429 26.4835 38.3368 27.0866C36.8306 27.6896 35.2164 28 33.5862 28H32.5C31.6716 28 31 27.3284 31 26.5V5.5C31 4.67157 31.6716 4 32.5 4H33.5863Z',
    defaultOpacity: 1,
    delay: '800ms',
  },
] as const;

interface HissaMarkProps {
  size?: number;
  animated?: boolean;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function HissaMark({
  size = 32,
  animated = true,
  color = '#FF655B',
  className = '',
  style,
}: HissaMarkProps) {
  // viewBox for the 3 crescents is 0 0 46 28
  const width = (size * 46) / 28;

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 46 28"
      role="img"
      aria-hidden="true"
      className={`select-none inline-block ${className}`}
      style={{ flex: '0 0 auto', ...style }}
    >
      {CRESCENTS.map((crescent, index) => (
        <path
          key={index}
          d={crescent.d}
          fill={color}
          opacity={animated ? undefined : crescent.defaultOpacity}
          style={
            animated
              ? {
                  transformBox: 'fill-box',
                  transformOrigin: 'center',
                  animation: `hissa-logo-wave 2400ms cubic-bezier(0.45, 0, 0.55, 1) infinite`,
                  animationDelay: crescent.delay,
                }
              : undefined
          }
        />
      ))}
    </svg>
  );
}
