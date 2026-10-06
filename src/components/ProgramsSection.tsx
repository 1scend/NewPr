import React, { useState } from 'react';
import { ThinRightArrow } from './HeroFeatureIcons';

interface ProgramItem {
  id: string;
  index: string;
  category: 'strength' | 'functional' | 'mindbody' | 'recovery';
  categoryLabel: string;
  title: string;
  duration: string;
  intensity: string;
  calories: string;
  description: string;
  image?: string;
}

const PROGRAMS: ProgramItem[] = [
  {
    id: 'hiit-pro',
    index: '01',
    category: 'functional',
    categoryLabel: 'Функциональный тренинг',
    title: 'SOUL HIIT & METCON',
    duration: '55 мин',
    intensity: 'Высокая интенсивность',
    calories: '650–850 ккал',
    description:
      'Интервальные метаболические комплексы с гирями, канатами, гребными концептами и собственным весом для взрывной выносливости и рельефа.',
    image: '/src/assets/images/program_functional_training_1791302563892.jpg',
  },
  {
    id: 'reformer-pilates',
    index: '02',
    category: 'mindbody',
    categoryLabel: 'Mind & Body',
    title: 'REFORMER PILATES & STRETCH',
    duration: '55 мин',
    intensity: 'Средняя / Восстановительная',
    calories: '320–450 ккал',
    description:
      'Глубокая проработка мышц-стабилизаторов, осанки и мобильности суставов на оригинальных студийных реформерах и в воздушных гамаках.',
    image: '/src/assets/images/program_mind_body_yoga_1791302574147.jpg',
  },
  {
    id: 'power-athletics',
    index: '03',
    category: 'strength',
    categoryLabel: 'Силовой тренинг',
    title: 'HEAVY DUTY & POWERLIFT',
    duration: '60 мин',
    intensity: 'Высокая нагрузка',
    calories: '500–700 ккал',
    description:
      'Постановка техники базовых многосуставных движений, прогрессия рабочих весов и безопасная гипертрофия под контролем мастера спорта.',
    image: '/src/assets/images/club_interior_gym_1791302553201.jpg',
  },
  {
    id: 'miofascial-spa',
    index: '04',
    category: 'recovery',
    categoryLabel: 'Восстановление',
    title: 'МФР И ПОСТУРАЛЬНАЯ ТЕРАПИЯ',
    duration: '50 мин',
    intensity: 'Низкая / Релакс',
    calories: '200–300 ккал',
    description:
      'Миофасциальный релиз, снятие мышечных зажимов после тяжелых нагрузок и дыхательные практики для восстановления нервной системы.',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'Все направления' },
  { id: 'functional', label: 'Функционал' },
  { id: 'strength', label: 'Сила и атлетика' },
  { id: 'mindbody', label: 'Mind & Body' },
  { id: 'recovery', label: 'Восстановление' },
];

interface ProgramsSectionProps {
  onOpenBooking: (subject?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredPrograms =
    activeCategory === 'all'
      ? PROGRAMS
      : PROGRAMS.filter((item) => item.category === activeCategory);

  return (
    <section id="programs" className="w-full bg-white py-20 lg:py-28 border-t border-neutral-100">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-14 xl:px-[112px]">
        {/* Header + Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          <div>
            <div className="mb-4 flex items-center gap-3.5">
              <span className="inline-block h-[1px] w-7 bg-[#8E44EC]" aria-hidden="true" />
              <span className="text-[11px] font-medium tracking-[0.22em] text-[#8E44EC] uppercase">
                НАПРАВЛЕНИЯ ТРЕНИРОВОК
              </span>
            </div>
            <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold uppercase leading-[1.12] tracking-[-0.02em] text-[#0F0F12]">
              ПРОГРАММЫ ПОД <span className="text-[#8E44EC]">ТВОЙ ТЕМП</span>
            </h2>
          </div>

          {/* Interactive Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-[4px] bg-[#F4F4F8] p-1.5 self-start lg:self-auto">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-[3px] px-4 py-2 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#8E44EC] text-white shadow-xs'
                      : 'text-[#4A4A52] hover:text-[#141416]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Bento Grid of Programs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {filteredPrograms.map((program, idx) => {
            const isWide = idx === 0 && activeCategory === 'all';
            return (
              <div
                key={program.id}
                className={`${
                  isWide ? 'lg:col-span-7' : idx === 1 && activeCategory === 'all' ? 'lg:col-span-5' : 'lg:col-span-6'
                } group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-neutral-200 bg-white transition-colors hover:border-[#8E44EC]/50`}
              >
                {program.image && (
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-neutral-100">
                    <img
                      src={program.image}
                      alt={program.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white/90">
                      <span className="font-mono tabular-nums font-bold text-[#C49BF9]">
                        {program.index} · {program.categoryLabel}
                      </span>
                      <span className="tabular-nums">{program.duration}</span>
                    </div>
                  </div>
                )}

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    {!program.image && (
                      <div className="mb-3 flex items-center gap-2 text-xs text-[#8E44EC] font-medium">
                        <span className="font-mono tabular-nums">{program.index}</span>
                        <span aria-hidden="true">·</span>
                        <span>{program.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums text-[#6E6E77]">{program.duration}</span>
                      </div>
                    )}

                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-[#141416]">
                      {program.title}
                    </h3>

                    <p className="mt-3 text-[14.5px] leading-[1.6] text-[#5E5E68]">
                      {program.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                    {/* Unboxed clean metadata with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-[#6E6E77] tabular-nums">
                      <span>{program.intensity}</span>
                      <span aria-hidden="true">·</span>
                      <span>Расход {program.calories}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(`Пробная тренировка: ${program.title}`)}
                      className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#8E44EC] hover:text-[#6B27C2] transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <span>Записаться</span>
                      <ThinRightArrow className="w-3.5 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
