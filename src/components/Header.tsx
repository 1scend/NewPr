import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { SoulFitLogo } from './SoulFitLogo';
import { ThinRightArrow } from './HeroFeatureIcons';

interface HeaderProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
  onOpenBooking: (subject?: string) => void;
}

const CITIES = [
  'Нижнекамск',
  'Казань',
  'Набережные Челны',
  'Альметьевск',
];

const NAV_LINKS = [
  { label: 'О клубе', href: '#about' },
  { label: 'Направления', href: '#programs' },
  { label: 'Тренеры', href: '#trainers' },
  { label: 'Расписание', href: '#schedule' },
  { label: 'Цены', href: '#pricing' },
];

export const Header: React.FC<HeaderProps> = ({
  selectedCity,
  onSelectCity,
  onOpenBooking,
}) => {
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCityDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="relative z-40 w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-5 sm:px-8 lg:px-14 xl:px-[76px] xl:py-7">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8E44EC]"
        >
          <SoulFitLogo />
        </a>

        {/* Zone 2: Primary Navigation (5 items matching mockup) */}
        <nav
          aria-label="Основная навигация"
          className="hidden lg:flex items-center gap-7 xl:gap-11 text-[13px] xl:text-[14px] font-medium text-[#2C2C30]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap py-1 transition-colors hover:text-[#8E44EC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8E44EC]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: City Selector + Divider + Primary CTA Button */}
        <div className="hidden md:flex items-center gap-5 xl:gap-6">
          {/* City selector dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setCityDropdownOpen((prev) => !prev)}
              aria-expanded={cityDropdownOpen}
              className="flex items-center gap-2 text-[13px] font-medium text-[#2C2C30] hover:text-[#8E44EC] transition-colors whitespace-nowrap py-1.5 cursor-pointer"
            >
              {/* Solid dark map pin matching mockup */}
              <svg
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-4 shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8C0 13.25 8 20 8 20C8 20 16 13.25 16 8C16 3.58 12.42 0 8 0ZM8 11C6.34 11 5 9.66 5 8C5 6.34 6.34 5 8 5C9.66 5 11 6.34 11 8C11 9.66 9.66 11 8 11Z"
                  fill="#232326"
                />
              </svg>
              <span>{selectedCity}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#52525B]" />
            </button>

            {cityDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-[4px] border border-neutral-200 bg-white py-1.5 shadow-lg z-50">
                {CITIES.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => {
                      onSelectCity(city);
                      setCityDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-[13px] transition-colors cursor-pointer ${
                      city === selectedCity
                        ? 'bg-[#8E44EC]/10 font-semibold text-[#8E44EC]'
                        : 'text-[#2C2C30] hover:bg-neutral-50'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Vertical Hairline Divider */}
          <div className="h-7 w-[1px] bg-[#D8D8DE]" aria-hidden="true" />

          {/* Primary Action Button: Записаться -> */}
          <button
            type="button"
            onClick={() => onOpenBooking('Запись в клуб SOUL FIT')}
            className="inline-flex items-center justify-center gap-3.5 rounded-[3px] bg-[#8E44EC] px-6 py-3 text-[13px] font-medium text-white transition-colors hover:bg-[#7B32D9] whitespace-nowrap cursor-pointer"
          >
            <span>Записаться</span>
            <ThinRightArrow className="w-4 h-3 text-white" />
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => onOpenBooking('Запись в клуб SOUL FIT')}
            className="inline-flex items-center gap-2 rounded-[3px] bg-[#8E44EC] px-3.5 py-2 text-xs font-medium text-white whitespace-nowrap"
          >
            <span>Записаться</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[3px] border border-neutral-200 text-[#1E1E20]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-neutral-200 bg-white px-4 pt-2 pb-6 md:hidden">
          <nav className="flex flex-col space-y-3 border-b border-neutral-100 pb-4">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-[15px] font-medium text-[#1E1E20] hover:text-[#8E44EC]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <div className="text-xs font-medium text-neutral-400">Выберите город</div>
            <div className="flex flex-wrap gap-2">
              {CITIES.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => {
                    onSelectCity(city);
                    setMobileMenuOpen(false);
                  }}
                  className={`rounded-[3px] px-3 py-1.5 text-xs font-medium transition-colors ${
                    city === selectedCity
                      ? 'bg-[#8E44EC] text-white'
                      : 'bg-neutral-100 text-[#2C2C30]'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
