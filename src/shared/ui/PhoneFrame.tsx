import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Minimal device bezel for app screenshots. Screens exported from Figma
 * already contain the status bar and Dynamic Island, so the frame only adds
 * the body and keeps the 402×874 screen ratio.
 */
export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className = '' }) => (
  <div
    className={`aspect-[402/874] rounded-[3rem] bg-[#0c111d] p-2.5 shadow-[0_40px_80px_-20px_rgba(12,17,29,0.35),inset_0_0_0_1.5px_rgba(255,255,255,0.12)] ${className}`}
  >
    <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-canvas">{children}</div>
  </div>
);
