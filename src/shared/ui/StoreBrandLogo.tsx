import React from 'react';
import texnomartSvg from '../../assets/texnomart-logo.svg';
import texnomartSquare from '../../assets/texnomart-square.png';
import mediaparkPng from '../../assets/mediapark-logo.png';
import mediaparkSquare from '../../assets/mediapark-square.png';
import korzinkaSquare from '../../assets/korzinka-square.png';
import ishonchSquare from '../../assets/ishonch-square.png';
import bellstoreCleanPng from '../../assets/bellstore-clean.png';
import bellstoreSquarePng from '../../assets/bellstore-square.png';
import terraproSvg from '../../assets/terrapro-logo.svg';
import terraproSquare from '../../assets/terrapro-square.png';
import makroSvg from '../../assets/makro-logo.svg';
import makroSquareSvg from '../../assets/makro-square.svg';
import floSquare from '../../assets/flo-square.png';
import arenaSquare from '../../assets/arena-square.png';
import arenaLogoPng from '../../assets/arena-logo.png';

export interface StoreBrandLogoProps {
  storeId: string;
  name: string;
  variant?: 'icon' | 'badge' | 'full';
  className?: string;
}

export const StoreBrandLogo: React.FC<StoreBrandLogoProps> = ({
  storeId,
  name,
  variant = 'icon',
  className = '',
}) => {
  // Sizing helper: default w-12 h-12 rounded-2xl if not overridden in className
  const hasWidth = className.includes('w-');
  const hasHeight = className.includes('h-');
  const hasRounded = className.includes('rounded-');
  const baseDim = `${hasWidth ? '' : 'w-12 '} ${hasHeight ? '' : 'h-12 '} ${hasRounded ? '' : 'rounded-2xl '}`.trim();

  // 1. Square Icon representation with official brand mobile app icon / vector emblem
  if (variant === 'icon') {
    switch (storeId) {
      case 'texnomart':
        return (
          <div
            className={`${baseDim} bg-[#FFB800] p-1.5 flex items-center justify-center shadow-sm shrink-0 overflow-hidden ${className}`}
            title="Texnomart"
          >
            <img
              src={texnomartSquare}
              alt="Texnomart"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        );

      case 'mediapark':
        return (
          <div
            className={`${baseDim} bg-[#E31E24] p-1.5 flex items-center justify-center shadow-sm shrink-0 overflow-hidden ${className}`}
            title="Mediapark"
          >
            <img
              src={mediaparkSquare}
              alt="Mediapark"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        );

      case 'korzinka':
        return (
          <div
            className={`${baseDim} bg-[#E30613] p-1 flex items-center justify-center shadow-sm shrink-0 overflow-hidden ${className}`}
            title="Korzinka"
          >
            <img
              src={korzinkaSquare}
              alt="Korzinka"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        );

      case 'ishonch':
        return (
          <div
            className={`${baseDim} bg-[#005BAC] dark:bg-[#30B34A] p-1.5 flex items-center justify-center shadow-sm shrink-0 overflow-hidden ${className}`}
            title="Ishonch"
          >
            <img
              src={ishonchSquare}
              alt="Ishonch"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        );

      case 'bellstore':
        return (
          <div
            className={`${baseDim} bg-[#E11D48] p-1.5 flex items-center justify-center shadow-sm shrink-0 overflow-hidden ${className}`}
            title="Bellstore"
          >
            <img
              src={bellstoreSquarePng}
              alt="Bellstore"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        );

      case 'terrapro':
        return (
          <div
            className={`${baseDim} bg-[#111827] dark:bg-[#00805A] p-1.5 flex items-center justify-center shadow-sm shrink-0 overflow-hidden ${className}`}
            title="Terra Pro"
          >
            <img
              src={terraproSquare}
              alt="Terra Pro"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        );

      case 'makro':
        return (
          <div
            className={`${baseDim} bg-white dark:bg-white/95 p-1.5 flex items-center justify-center shadow-sm border border-gray-200/80 dark:border-transparent shrink-0 overflow-hidden ${className}`}
            title="Makro"
          >
            <img
              src={makroSquareSvg}
              alt="Makro"
              className="w-8 h-8 object-contain"
            />
          </div>
        );

      case 'flo':
        return (
          <div
            className={`${baseDim} bg-[#FF6000] p-1.5 flex items-center justify-center shadow-sm shrink-0 overflow-hidden ${className}`}
            title="FLO Shoes"
          >
            <img
              src={floSquare}
              alt="FLO"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        );

      case 'arena':
        return (
          <div
            className={`${baseDim} bg-white dark:bg-[#0A192F] p-1.5 flex items-center justify-center shadow-sm border border-gray-200/80 dark:border-slate-800 shrink-0 overflow-hidden ${className}`}
            title="Arena Markaz"
          >
            <img
              src={arenaSquare}
              alt="Arena Markaz"
              className="w-full h-full object-contain rounded-xl dark:invert"
            />
          </div>
        );

      default:
        return (
          <div
            className={`${baseDim} bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-bold text-base text-gray-700 dark:text-gray-300 shadow-sm shrink-0 ${className}`}
          >
            {name.charAt(0)}
          </div>
        );
    }
  }

  // 2. Full official horizontal logo badge extracted from official retailer sites
  switch (storeId) {
    case 'texnomart':
      return (
        <div className={`flex items-center gap-1.5 px-3 py-1.5 bg-[#FFB800] rounded-xl shadow-xs ${className}`}>
          <img
            src={texnomartSvg}
            alt="Texnomart"
            className="h-5 w-auto object-contain brightness-0"
          />
        </div>
      );

    case 'mediapark':
      return (
        <div className={`flex items-center px-3 py-1 bg-white dark:bg-white/95 rounded-xl border border-gray-200/80 dark:border-transparent shadow-xs ${className}`}>
          <img
            src={mediaparkPng}
            alt="Mediapark"
            className="h-6 w-auto object-contain"
          />
        </div>
      );

    case 'korzinka':
      return (
        <div className={`flex items-center gap-2 px-3 py-1 bg-white dark:bg-white/95 rounded-xl border border-gray-200/80 dark:border-transparent shadow-xs ${className}`}>
          {/* Exact official header SVG from korzinka.uz */}
          <svg width="110" height="20" viewBox="0 0 180 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9126 12.3957L11.8313 19.349C11.5178 21.3653 9.77884 22.8466 7.74087 22.8466H0V26.8528H7.74087C11.6669 26.8528 15.0169 23.9991 15.6208 20.1172L16.7021 13.1639C17.0156 11.1475 18.7546 9.66624 20.7925 9.66624H28.5334V5.66003H20.7925C16.8665 5.66003 13.5165 8.51378 12.9126 12.3957Z" fill="#EF3738"/>
            <circle cx="24.5298" cy="24.85" r="2.00311" fill="#EF3738"/>
            <circle cx="4.00621" cy="7.66314" r="2.00311" fill="#EF3738"/>
            <text x="36" y="23" fontFamily="'Inter', system-ui, sans-serif" fontWeight="900" fontSize="24" fill="#231F20">korzinka</text>
          </svg>
        </div>
      );

    case 'ishonch':
      return (
        <div className={`flex items-center px-3 py-1 bg-white dark:bg-white/95 rounded-xl border border-gray-200/80 dark:border-transparent shadow-xs ${className}`}>
          {/* Exact official header SVG from ishonchsavdo.uz */}
          <svg width="105" height="18" viewBox="0 0 194 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M169.906 34.3299H177.726V21.298H185.946V34.3299H193.765V1.24343H185.946V13.6642H177.726V1.24343H169.906V34.3299ZM152.861 34.6335C157.07 34.6335 161.081 32.8 163.589 30.3592C165.193 28.7307 166.497 26.7947 166.598 26.5936L160.685 22.8279C159.982 23.7427 159.784 24.0503 158.98 24.764C157.175 26.3925 155.071 27.2087 152.865 27.2087C150.159 27.2087 147.954 26.2939 146.249 24.4603C144.646 22.6268 143.745 20.2846 143.745 17.5363C143.745 14.7879 144.549 12.4458 146.152 10.6122C147.756 8.77868 149.961 7.86388 152.768 7.86388C155.273 7.86388 157.478 8.77868 159.283 10.6122C159.784 11.2234 160.285 11.9371 160.588 12.6469L167.103 8.27002C166.501 7.35522 165.798 6.43648 164.999 5.52168C162.494 2.97839 158.484 0.431152 152.667 0.431152C147.554 0.431152 143.446 2.05964 140.336 5.31664C137.129 8.67615 135.525 12.7494 135.525 17.6349C135.525 22.5203 137.129 26.5936 140.239 29.8505C143.337 33.005 147.55 34.6335 152.861 34.6335ZM107.349 34.3299H114.866V14.9851L115.165 16.2075L124.188 34.3299H132.008V1.24343H124.39V20.5882L123.99 19.2634L115.467 1.24343H107.349V34.3299ZM86.5997 27.5083C83.8935 27.5083 81.7891 26.5936 80.1856 24.6575C78.582 22.824 77.7783 20.5843 77.7783 17.8359C77.7783 14.9851 78.582 12.6429 80.0846 10.8094C81.5872 8.97583 83.7926 8.06104 86.4988 8.06104C89.306 8.06104 91.4104 8.97582 93.0139 10.9119C94.6175 12.7454 95.4212 14.9851 95.4212 17.8359C95.4212 20.5843 94.6174 22.9265 93.1149 24.76C91.5113 26.5936 89.306 27.5083 86.5997 27.5083ZM39.8834 34.3299H47.7031V21.298H58.0272V34.3299H65.8469V1.24343H58.0272V13.6642H47.7031V1.24343H39.8834V34.3299ZM24.244 34.9411C27.5521 34.9411 30.2583 33.9238 32.2656 32.0902C34.37 30.1542 35.3718 27.6109 35.3718 24.3539C35.3718 19.8745 33.1664 17.1262 28.6547 15.2927L24.6439 13.6642C22.6405 12.9505 21.6349 11.322 21.6349 10.001C21.6349 9.28733 21.8368 8.67615 22.3376 8.16749C22.8385 7.76136 23.4403 7.4538 24.3411 7.4538C25.2419 7.4538 25.9446 7.75741 26.4455 8.47111C26.9464 9.08229 27.1483 9.89457 27.1483 11.0144H34.3662C34.568 7.85993 33.8653 5.3127 32.1608 3.47917C30.5573 1.64563 27.952 0.628307 24.2401 0.628307C21.134 0.628307 18.6258 1.5431 16.6223 3.37664C14.716 5.21018 13.8152 7.55238 13.8152 10.4032C13.8152 14.6775 15.5197 17.5284 18.8277 19.2594C19.7285 19.7681 21.433 20.4818 23.9412 21.4991C25.0439 21.9052 25.9446 22.4139 26.4455 22.9225C27.0473 23.5337 27.3463 24.346 27.3463 25.1622C27.3463 26.077 27.0473 26.7907 26.4455 27.2994C25.8437 27.808 25.1409 28.1156 24.2401 28.1156C23.0365 28.1156 22.1357 27.7094 21.6349 26.8932C21.134 26.077 20.8312 25.0597 20.9321 23.9399H13.5123C13.4114 25.2647 13.5123 26.4831 13.8113 27.7055C14.0132 28.8253 14.5141 30.0477 15.2129 31.1675C16.0167 32.2874 17.1193 33.2022 18.6219 33.9159C20.1323 34.531 22.0387 34.9411 24.244 34.9411ZM0.586914 34.3299H8.50756V1.24343H0.586914V34.3299ZM86.5997 34.9411C91.7132 34.9411 95.8211 33.3126 98.9311 29.9531C102.037 26.6961 103.645 22.6229 103.645 17.7374C103.645 12.7494 102.041 8.67616 98.9311 5.52168C95.724 2.26469 91.6123 0.636189 86.4017 0.636189C81.4901 0.636189 77.3784 2.3672 74.2722 5.6242C71.1661 8.88119 69.5587 12.9544 69.5587 17.8399C69.5587 22.8279 71.0613 26.9011 74.1713 30.0556C77.2736 33.3126 81.4863 34.9411 86.5997 34.9411Z" fill="#30B34A"/>
          </svg>
        </div>
      );

    case 'bellstore':
      return (
        <div className={`flex items-center px-3 py-1 bg-white dark:bg-white/95 rounded-xl border border-gray-200/80 dark:border-transparent shadow-xs ${className}`}>
          <img
            src={bellstoreCleanPng}
            alt="Bellstore"
            className="h-6 w-auto max-w-[110px] object-contain"
          />
        </div>
      );

    case 'terrapro':
      return (
        <div className={`flex items-center px-3 py-1 bg-[#111827] text-white rounded-xl shadow-xs ${className}`}>
          <img
            src={terraproSvg}
            alt="Terra Pro"
            className="h-5 w-auto object-contain filter invert"
          />
        </div>
      );

    case 'makro':
      return (
        <div className={`flex items-center px-3 py-1 bg-white dark:bg-white/95 rounded-xl border border-gray-200/80 dark:border-transparent shadow-xs ${className}`}>
          <img
            src={makroSvg}
            alt="Makro"
            className="h-6 w-auto max-w-[110px] object-contain"
          />
        </div>
      );

    case 'flo':
      return (
        <div className={`flex items-center justify-center gap-1.5 px-3 py-1 bg-[#FF6000] text-white rounded-xl shadow-xs ${className}`}>
          <img
            src={floSquare}
            alt="FLO"
            className="h-5 w-5 object-contain"
          />
          <span className="text-sm font-black tracking-widest text-white leading-none font-sans uppercase">
            FLO
          </span>
        </div>
      );

    case 'arena':
      return (
        <div className={`flex items-center justify-center px-3 py-1 bg-[#0A192F] text-white rounded-xl shadow-xs ${className}`}>
          <img
            src={arenaLogoPng}
            alt="Arena Markaz"
            className="h-6 w-auto max-w-[120px] object-contain"
          />
        </div>
      );

    default:
      return (
        <div className={`px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-xl font-bold text-xs text-gray-800 dark:text-gray-200 ${className}`}>
          {name}
        </div>
      );
  }
};
