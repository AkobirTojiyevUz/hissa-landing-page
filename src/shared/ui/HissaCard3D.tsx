import React from 'react';
import cardBody from '../../assets/illustrations/hissa-card-body.svg';
import cardShadow from '../../assets/illustrations/hissa-card-shadow.svg';
import { HissaLogo } from './HissaLogo';

interface HissaCard3DProps {
  className?: string;
}

/**
 * The coral installment card in perspective, rebuilt from the Figma node
 * "Ваша карта рассрочки" (65:2487): a glow layer, the trapezoid card body with
 * its inner shadows, and the white Hissa logo skewed onto the surface.
 * Geometry is kept in Figma's 362×110 frame and scales with the container width.
 */
export const HissaCard3D: React.FC<HissaCard3DProps> = ({ className = '' }) => (
  <div className={`relative aspect-[362/110] w-full select-none ${className}`} aria-hidden="true">
    <div className="absolute left-1/2 top-[35.5%] h-[64.5%] w-[66.3%] -translate-x-1/2">
      <div className="absolute inset-[-56.34%_-13.14%]">
        <img src={cardShadow} alt="" className="block size-full max-w-none" />
      </div>
    </div>
    <div className="absolute inset-x-0 top-0 h-[90.9%]">
      <div className="absolute inset-[-10%_-11.28%_-90%_-11.28%]">
        <img src={cardBody} alt="" className="block size-full max-w-none" />
      </div>
    </div>
    <div className="absolute left-[8.4%] top-[54.6%] w-[25%] origin-left [transform:rotate(0.97deg)_skewX(-23.88deg)_scaleY(0.91)] opacity-75">
      <HissaLogo animated={false} brandColor="#FFFFFF" wordmarkColor="#FFFFFF" title="Hissa" className="block h-auto w-full" />
    </div>
  </div>
);
