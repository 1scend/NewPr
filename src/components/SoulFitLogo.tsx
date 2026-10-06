import React from 'react';

interface SoulFitLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const SoulFitLogo: React.FC<SoulFitLogoProps> = ({ className = '', variant = 'light' }) => {
  const mainColor = variant === 'light' ? '#1E1E20' : '#FFFFFF';
  const fitColor = variant === 'light' ? '#8E44EC' : '#A864FD';

  return (
    <svg
      viewBox="0 0 198 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-8 sm:h-9 w-auto select-none ${className}`}
      aria-label="SOUL FIT"
    >
      {/* S */}
      <path
        d="M21.5 14.5C21.2 11.8 18.2 10.2 13.4 10.2C8.4 10.2 5.3 12 5.3 15C5.3 17.6 7.8 18.9 12.6 19.6L15.8 20.1C20.9 20.9 23.8 22.8 23.8 26.5C23.8 30.8 19.6 33.4 13.5 33.4C7.2 33.4 3.2 30.7 2.8 26.8"
        stroke={mainColor}
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      {/* O */}
      <rect
        x="30.5"
        y="10.2"
        width="21.5"
        height="23"
        rx="8.5"
        stroke={mainColor}
        strokeWidth="2.1"
      />
      {/* U */}
      <path
        d="M60 10.2V24.2C60 29.5 63.8 33.2 69.8 33.2C75.8 33.2 79.6 29.5 79.6 24.2V10.2"
        stroke={mainColor}
        strokeWidth="2.1"
        strokeLinecap="square"
      />
      {/* L integrated with top and right frame around FIT */}
      <path
        d="M111.5 33.2H88.2V4.2H194.5V22"
        stroke={mainColor}
        strokeWidth="2.1"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* F */}
      <path
        d="M121 33.2V11.2H138.5M121 21.5H135.5"
        stroke={fitColor}
        strokeWidth="2.1"
        strokeLinecap="square"
      />
      {/* I */}
      <path
        d="M148.5 11.2V33.2"
        stroke={fitColor}
        strokeWidth="2.1"
        strokeLinecap="square"
      />
      {/* T */}
      <path
        d="M159.5 11.2H179.5M169.5 11.2V33.2"
        stroke={fitColor}
        strokeWidth="2.1"
        strokeLinecap="square"
      />
    </svg>
  );
};
