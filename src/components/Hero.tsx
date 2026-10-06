import React from 'react';
import {
  DumbbellIcon,
  TrainersGroupIcon,
  HeartPlusIcon,
  ThinRightArrow,
} from './HeroFeatureIcons';

interface HeroSlide {
  id: string;
  number: string;
  kicker: string;
  line1: string;
  line2: string;
  line3: string;
  description: string;
  ctaLabel: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: '01',
    number: '01',
    kicker: 'ФИТНЕС КЛУБ',
    line1: 'СИЛА.',
    line2: 'ЭНЕРГИЯ.',
    line3: 'ТВОЙ РИТМ.',
    description:
      'Современный фитнес-клуб для тех,\nкто выбирает движение, развитие\nи качество жизни.',
    ctaLabel: 'Начать тренировку',
  },
  {
    id: '02',
    number: '02',
    kicker: 'ПРОСТРАНСТВО СИЛЫ',
    line1: 'БАЛАНС.',
    line2: 'ФОРМА.',
    line3: 'РЕЗУЛЬТАТ.',
    description:
      'Премиальное оборудование Technogym,\nавторские групповые программы\nи персональный подход к каждому.',
    ctaLabel: 'Выбрать программу',
  },
  {
    id: '03',
    number: '03',
    kicker: 'СООБЩЕСТВО SOUL FIT',
    line1: 'ДРАЙВ.',
    line2: 'СВОБОДА.',
    line3: 'НОВЫЙ ТЫ.',
    description:
      'Более 25 направлений тренировок,\nпросторная SPA-зона восстановления\nи команда сертифицированных тренеров.',
    ctaLabel: 'Записаться на гостевой визит',
  },
];

interface HeroProps {
  activeSlideIndex: number;
  onChangeSlide: (index: number) => void;
  onOpenBooking: (subject?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  activeSlideIndex,
  onChangeSlide,
  onOpenBooking,
}) => {
  const slide = HERO_SLIDES[activeSlideIndex] || HERO_SLIDES[0];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Subtle studio floor gradient at the very bottom right */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F2F2F5]/80 via-[#F8F8FA]/40 to-transparent"
        aria-hidden="true"
      />

      {/* TOP-LEFT DIAGONAL PURPLE STRIPES (1-to-1 with mockup) */}
      <svg
        viewBox="0 0 110 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute left-0 top-6 hidden sm:block w-[72px] lg:w-[92px] h-auto z-10"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="topLeftStripe1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9B59F6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#D6BCFA" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="topLeftStripe2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9B59F6" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#E9D8FD" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        {/* Thick diagonal stripe */}
        <polygon points="36,0 56,0 -24,185 -44,185" fill="url(#topLeftStripe1)" />
        {/* Thin parallel diagonal stripe */}
        <polygon points="70,0 80,0 -20,230 -30,230" fill="url(#topLeftStripe2)" />
      </svg>

      {/* BOTTOM-LEFT DIAGONAL OUTLINED STRIPES (1-to-1 with mockup) */}
      <svg
        viewBox="0 0 135 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute bottom-0 left-0 hidden sm:block w-[90px] lg:w-[118px] h-auto z-10"
        aria-hidden="true"
      >
        {/* Outer left outlined parallelogram */}
        <polygon
          points="36,16 58,16 -8,165 -30,165"
          stroke="#9B59F6"
          strokeWidth="1"
          strokeOpacity="0.65"
          fill="none"
        />
        {/* Inner right outlined parallelogram */}
        <polygon
          points="74,16 112,16 46,165 8,165"
          stroke="#9B59F6"
          strokeWidth="1"
          strokeOpacity="0.65"
          fill="none"
        />
      </svg>

      {/* MAIN HERO CONTAINER */}
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-14 xl:px-[112px] pt-6 sm:pt-10 lg:pt-12 pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-4 min-h-[540px] xl:min-h-[650px]">
          {/* LEFT COLUMN: Kicker, Headline, Subtitle, CTA, Bottom 3 Features */}
          <div className="relative z-20 lg:col-span-6 xl:col-span-6 flex flex-col justify-between pt-2 lg:pt-6">
            <div>
              {/* Kicker: —— ФИТНЕС КЛУБ */}
              <div className="mb-5 sm:mb-7 flex items-center gap-3.5">
                <span
                  className="inline-block h-[1px] w-7 bg-[#A770EF]"
                  aria-hidden="true"
                />
                <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.22em] text-[#9B69E8] uppercase">
                  {slide.kicker}
                </span>
              </div>

              {/* Main Display Heading */}
              <h1 className="font-display font-extrabold uppercase tracking-[-0.02em] leading-[1.07] text-[36px] sm:text-[50px] md:text-[58px] lg:text-[54px] xl:text-[66px]">
                <span className="block text-[#0F0F12]">{slide.line1}</span>
                <span className="block text-[#0F0F12]">{slide.line2}</span>
                <span className="block text-[#8E44EC]">{slide.line3}</span>
              </h1>

              {/* Description Paragraph */}
              <p className="mt-6 sm:mt-7 max-w-[380px] text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.55] text-[#6E6E77] whitespace-pre-line">
                {slide.description}
              </p>

              {/* Primary CTA Button */}
              <div className="mt-8 sm:mt-10">
                <button
                  type="button"
                  onClick={() => onOpenBooking(slide.ctaLabel)}
                  className="inline-flex items-center justify-center gap-5 rounded-[3px] bg-[#8E44EC] px-8 py-4 sm:px-9 sm:py-[18px] text-[13px] sm:text-[14px] font-medium text-white shadow-[0_10px_25px_-6px_rgba(142,68,236,0.45)] transition-colors hover:bg-[#7B32D9] whitespace-nowrap cursor-pointer"
                >
                  <span>{slide.ctaLabel}</span>
                  <ThinRightArrow className="w-4 h-3 text-white" />
                </button>
              </div>
            </div>

            {/* BOTTOM 3 FEATURE ITEMS WITH VERTICAL DIVIDERS */}
            <div className="mt-14 sm:mt-20 lg:mt-24 pt-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0">
                {/* Item 1 */}
                <div className="flex items-center gap-3.5 sm:pr-7 xl:pr-9">
                  <DumbbellIcon className="w-8 h-8 shrink-0" />
                  <div className="text-[12px] sm:text-[12.5px] leading-[1.35] text-[#4A4A52] font-normal">
                    <div>Современное</div>
                    <div>оборудование</div>
                  </div>
                </div>

                {/* Vertical Divider 1 */}
                <div
                  className="hidden sm:block h-9 w-[1px] bg-[#E2E2E8] shrink-0"
                  aria-hidden="true"
                />

                {/* Item 2 */}
                <div className="flex items-center gap-3.5 sm:px-7 xl:px-9">
                  <TrainersGroupIcon className="w-8 h-8 shrink-0" />
                  <div className="text-[12px] sm:text-[12.5px] leading-[1.35] text-[#4A4A52] font-normal">
                    <div>Профессиональные</div>
                    <div>тренеры</div>
                  </div>
                </div>

                {/* Vertical Divider 2 */}
                <div
                  className="hidden sm:block h-9 w-[1px] bg-[#E2E2E8] shrink-0"
                  aria-hidden="true"
                />

                {/* Item 3 */}
                <div className="flex items-center gap-3.5 sm:pl-7 xl:pl-9">
                  <HeartPlusIcon className="w-8 h-8 shrink-0" />
                  <div className="text-[12px] sm:text-[12.5px] leading-[1.35] text-[#4A4A52] font-normal">
                    <div>Комфортная</div>
                    <div>атмосфера</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Athlete Figure + Diagonal Purple Parallelograms Behind */}
          <div className="relative lg:col-span-6 xl:col-span-6 flex items-center justify-center min-h-[380px] sm:min-h-[480px] lg:min-h-[580px]">
            {/* Diagonal Purple Bars SVG Behind Athlete (1-to-1 with mockup) */}
            <svg
              viewBox="0 0 650 620"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute inset-0 w-full h-full object-contain z-0 scale-105 xl:scale-110"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="heroBarGrad1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9B59F6" stopOpacity="0.65" />
                  <stop offset="65%" stopColor="#C49BF9" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#E9D8FD" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="heroBarGrad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9B59F6" stopOpacity="0.58" />
                  <stop offset="75%" stopColor="#D6BCFA" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#F3E8FF" stopOpacity="0.08" />
                </linearGradient>
              </defs>

              {/* Left thick filled diagonal bar extending down behind athlete's arm */}
              <polygon
                points="395,70 465,70 215,595 145,595"
                fill="url(#heroBarGrad1)"
              />

              {/* Middle thinner filled diagonal bar */}
              <polygon
                points="495,70 532,70 302,555 265,555"
                fill="url(#heroBarGrad2)"
              />

              {/* Right outlined diagonal bar */}
              <polygon
                points="558,70 612,70 382,555 328,555"
                stroke="#9B59F6"
                strokeOpacity="0.6"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>

            {/* Athlete Studio Image with seamless white studio blending */}
            <div className="relative z-10 w-full max-w-[560px] lg:max-w-[650px] xl:max-w-[720px] lg:-ml-12 xl:-ml-16">
              <img
                src="/src/assets/images/hero_athlete_soulfit_1791302541927.jpg"
                alt="Атлет фитнес-клуба SOUL FIT в динамичном выпаде"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain mix-blend-multiply select-none"
              />
            </div>
          </div>
        </div>

        {/* RIGHT EDGE VERTICAL SLIDE INDICATOR: | 01 02 03 */}
        <div
          className="hidden md:flex flex-col items-center gap-2.5 absolute right-4 lg:right-8 xl:right-10 top-1/2 -translate-y-1/2 z-30"
          aria-label="Переключение слайдов первого экрана"
        >
          {/* Vertical purple indicator line */}
          <div className="w-[1.5px] h-9 bg-[#8E44EC] mb-1" aria-hidden="true" />
          {HERO_SLIDES.map((item, idx) => {
            const isActive = idx === activeSlideIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onChangeSlide(idx)}
                className={`text-[11px] font-mono tabular-nums tracking-wider transition-colors cursor-pointer py-0.5 ${
                  isActive
                    ? 'font-bold text-[#8E44EC]'
                    : 'font-normal text-[#C8C8D0] hover:text-[#6E6E77]'
                }`}
                aria-label={`Слайд ${item.number}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.number}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
