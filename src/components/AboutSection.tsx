import React from 'react';
import { ThinRightArrow } from './HeroFeatureIcons';

interface AboutSectionProps {
  selectedCity: string;
  onOpenBooking: (subject?: string) => void;
}

const STATS = [
  {
    value: '2 400 м²',
    label: 'Пространство клуба',
    detail: 'Панорамное остекление и трехступенчатая система очистки воздуха',
  },
  {
    value: '85+',
    label: 'Тренажеров Technogym',
    detail: 'Линейки Artis и Pure Strength последнего поколения из Италии',
  },
  {
    value: '25+',
    label: 'Групповых программ',
    detail: 'От силового функционала и сайклинга до антигравити-йоги',
  },
  {
    value: '06:00–24:00',
    label: 'Режим работы',
    detail: 'Комфортные тренировки утром перед работой или поздним вечером',
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({
  selectedCity,
  onOpenBooking,
}) => {
  return (
    <section
      id="about"
      className="relative w-full border-t border-neutral-100 bg-[#FAFAFC] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-14 xl:px-[112px]">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-16">
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-3.5">
              <span className="inline-block h-[1px] w-7 bg-[#8E44EC]" aria-hidden="true" />
              <span className="text-[11px] font-medium tracking-[0.22em] text-[#8E44EC] uppercase">
                О КЛУБЕ · {selectedCity.toUpperCase()}
              </span>
            </div>
            <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold uppercase leading-[1.12] tracking-[-0.02em] text-[#0F0F12]">
              ПРОСТРАНСТВО, ГДЕ{' '}
              <span className="text-[#8E44EC]">ТВОЯ ЦЕЛЬ</span> СТАНОВИТСЯ СИСТЕМОЙ.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#5E5E68]">
              Мы создали клуб без очередей к тренажерам и случайных программ. Каждый
              резидент проходит функциональную диагностику состава тела InBody и получает
              персональный маршрут тренировок под контролем профильных наставников.
            </p>
          </div>
        </div>

        {/* Asymmetric Visual + Architecture Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 cols: Main Interior Image */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-[4px] border border-neutral-200 bg-neutral-900 min-h-[320px] sm:min-h-[420px]">
            <img
              src="/src/assets/images/club_interior_gym_1791302553201.jpg"
              alt="Интерьер тренажерного зала SOUL FIT с оборудованием Technogym"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <div className="text-[11px] font-medium tracking-[0.18em] text-[#C49BF9] uppercase mb-1.5">
                  ОСНОВНОЙ АТЛЕТИЧЕСКИЙ ЗАЛ
                </div>
                <div className="font-display text-lg sm:text-xl font-bold uppercase">
                  Биомеханика Technogym Biostrength
                </div>
                <p className="mt-1 text-xs sm:text-sm text-neutral-300 max-w-md">
                  Автоматическая адаптация нагрузки и амплитуды под индивидуальные параметры
                  спортсмена по персональному браслету.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenBooking('Экскурсия по клубу и гостевой визит')}
                className="inline-flex items-center gap-3 self-start sm:self-auto rounded-[3px] bg-[#8E44EC] px-5 py-3 text-xs font-medium text-white hover:bg-[#7B32D9] whitespace-nowrap cursor-pointer"
              >
                <span>Записаться на тур</span>
                <ThinRightArrow className="w-3.5 h-3" />
              </button>
            </div>
          </div>

          {/* Right 5 cols: Editorial Numbered Club Zones */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-[4px] border border-neutral-200 bg-white p-6 sm:p-8 lg:p-9">
            <div>
              <div className="text-xs font-semibold tracking-[0.16em] text-[#8E44EC] uppercase mb-6">
                ИНФРАСТРУКТУРА КЛУБА
              </div>
              <div className="divide-y divide-neutral-100">
                <div className="py-4 first:pt-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-sm sm:text-base font-bold uppercase text-[#141416]">
                      01. Силовая и Кардио-зона
                    </h3>
                    <span className="text-xs font-mono tabular-nums text-[#8E44EC]">1 100 м²</span>
                  </div>
                  <p className="mt-1.5 text-[13.5px] leading-[1.55] text-[#6E6E77]">
                    Свободные веса Eleiko, помосты для тяжелой атлетики и кардио-театр с видом на
                    город.
                  </p>
                </div>

                <div className="py-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-sm sm:text-base font-bold uppercase text-[#141416]">
                      02. Студии реформеров и Mind & Body
                    </h3>
                    <span className="text-xs font-mono tabular-nums text-[#8E44EC]">450 м²</span>
                  </div>
                  <p className="mt-1.5 text-[13.5px] leading-[1.55] text-[#6E6E77]">
                    Залы для Reformer Pilates, гамаков AntiGravity и медитативных практик с
                    акустической изоляцией.
                  </p>
                </div>

                <div className="py-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-sm sm:text-base font-bold uppercase text-[#141416]">
                      03. Термальный SPA-комплекс
                    </h3>
                    <span className="text-xs font-mono tabular-nums text-[#8E44EC]">380 м²</span>
                  </div>
                  <p className="mt-1.5 text-[13.5px] leading-[1.55] text-[#6E6E77]">
                    Финская сауна из канадского кедра, турецкий хаммам, соляная комната и кабинеты
                    спортивного массажа.
                  </p>
                </div>

                <div className="py-4 last:pb-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-sm sm:text-base font-bold uppercase text-[#141416]">
                      04. Фитнес-бар и Лаунж
                    </h3>
                    <span className="text-xs font-mono tabular-nums text-[#8E44EC]">180 м²</span>
                  </div>
                  <p className="mt-1.5 text-[13.5px] leading-[1.55] text-[#6E6E77]">
                    Сбалансированное меню, функциональные смузи, изотоники и рабочая зона с
                    высокоскоростным Wi-Fi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative Metrics Strip */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200 rounded-[4px] overflow-hidden">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-white p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#141416] tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-[#8E44EC]">{stat.label}</div>
              </div>
              <p className="mt-3 text-xs leading-[1.5] text-[#6E6E77]">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
