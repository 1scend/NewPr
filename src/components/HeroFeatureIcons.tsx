import React from 'react';

export const DumbbellIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Left outer plate */}
    <rect x="3" y="11" width="3.5" height="14" rx="1.75" stroke="#8E44EC" strokeWidth="1.6" />
    {/* Left inner plate */}
    <rect x="6.5" y="7.5" width="4" height="21" rx="2" stroke="#8E44EC" strokeWidth="1.6" />
    {/* Center bar */}
    <line x1="10.5" y1="16.5" x2="25.5" y2="16.5" stroke="#8E44EC" strokeWidth="1.6" />
    <line x1="10.5" y1="19.5" x2="25.5" y2="19.5" stroke="#8E44EC" strokeWidth="1.6" />
    {/* Right inner plate */}
    <rect x="25.5" y="7.5" width="4" height="21" rx="2" stroke="#8E44EC" strokeWidth="1.6" />
    {/* Right outer plate */}
    <rect x="29.5" y="11" width="3.5" height="14" rx="1.75" stroke="#8E44EC" strokeWidth="1.6" />
  </svg>
);

export const TrainersGroupIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Center person head */}
    <circle cx="18" cy="11" r="3.5" stroke="#8E44EC" strokeWidth="1.6" />
    {/* Left person head */}
    <circle cx="10.5" cy="13.5" r="2.75" stroke="#8E44EC" strokeWidth="1.6" />
    {/* Right person head */}
    <circle cx="25.5" cy="13.5" r="2.75" stroke="#8E44EC" strokeWidth="1.6" />
    {/* Center person shoulders */}
    <path
      d="M12 27.5V24.5C12 21.7386 14.2386 19.5 17 19.5H19C21.7614 19.5 24 21.7386 24 24.5V27.5"
      stroke="#8E44EC"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Left person shoulders */}
    <path
      d="M5.5 27.5V25C5.5 22.7909 7.29086 21 9.5 21H11"
      stroke="#8E44EC"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Right person shoulders */}
    <path
      d="M30.5 27.5V25C30.5 22.7909 28.7091 21 26.5 21H25"
      stroke="#8E44EC"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const HeartPlusIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M18 29.5C18 29.5 6.5 22.2 6.5 13.8C6.5 9.8 9.6 6.8 13.3 6.8C15.5 6.8 17.2 7.9 18 9.4C18.8 7.9 20.5 6.8 22.7 6.8C26.4 6.8 29.5 9.8 29.5 13.8C29.5 22.2 18 29.5 18 29.5Z"
      stroke="#8E44EC"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 14.5V20.5M15 17.5H21"
      stroke="#8E44EC"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const ThinRightArrow: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 20 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M1 6H18.5M18.5 6L13.5 1M18.5 6L13.5 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
