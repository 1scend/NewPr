import React, { useState } from 'react';
import { ThinRightArrow } from './HeroFeatureIcons';

interface ScheduleSlot {
  id: string;
  time: string;
  duration: string;
  title: string;
  hall: string;
  trainer: string;
  spotsLeft: number;
  level: string;
}

const DAYS = [
  { id: 'mon', short: 'ПН', full: 'Понедельник' },
  { id: 'tue', short: 'ВТ', full: 'Вторник' },
  { id: 'wed', short: 'СР', full: 'Среда' },
  { id: 'thu', short: 'ЧТ', full: 'Четверг' },
  { id: 'fri', short: 'ПТ', full: 'Пятница' },
  { id: 'sat', short: 'СБ', full: 'Суббота' },
  { id: 'sun', short: 'ВС', full: 'Воскресенье' },
];

const SCHEDULE_BY_DAY: Record<string, ScheduleSlot[]> = {
  mon: [
    {
      id: 'm1',
      time: '08:00',
      duration: '55 мин',
      title: 'MORNING MOBILITY & PILATES',
      hall: 'Зал Mind & Body',
      trainer: 'Алина Краснова',
      spotsLeft: 4,
      level: 'Любой уровень',
    },
    {
      id: 'm2',
      time: '12:30',
      duration: '50 мин',
      title: 'FUNCTIONAL CORE & ABS',
      hall: 'Зона функционала',
      trainer: 'Дмитрий Соколов',
      spotsLeft: 6,
      level: 'Средний уровень',
    },
    {
      id: 'm3',
      time: '18:30',
      duration: '55 мин',
      title: 'SOUL HIIT & METCON',
      hall: 'Атлетический зал',
      trainer: 'Артем Волков',
      spotsLeft: 2,
      level: 'Высокая нагрузка',
    },
    {
      id: 'm4',
      time: '20:00',
      duration: '55 мин',
      title: 'МФР И ГЛУБОКИЙ СТРЕТЧИНГ',
      hall: 'Зал Mind & Body',
      trainer: 'Алина Краснова',
      spotsLeft: 5,
      level: 'Восстановление',
    },
  ],
  tue: [
    {
      id: 't1',
      time: '09:00',
      duration: '55 мин',
      title: 'REFORMER PILATES PRO',
      hall: 'Студия реформеров',
      trainer: 'Алина Краснова',
      spotsLeft: 3,
      level: 'Любой уровень',
    },
    {
      id: 't2',
      time: '18:00',
      duration: '60 мин',
      title: 'HEAVY DUTY & POWERLIFT',
      hall: 'Силовая зона Eleiko',
      trainer: 'Артем Волков',
      spotsLeft: 4,
      level: 'Продвинутый',
    },
    {
      id: 't3',
      time: '19:30',
      duration: '50 мин',
      title: 'ATHLETIC CONDITIONING',
      hall: 'Зона функционала',
      trainer: 'Дмитрий Соколов',
      spotsLeft: 7,
      level: 'Средний уровень',
    },
  ],
  wed: [
    {
      id: 'w1',
      time: '08:00',
      duration: '55 мин',
      title: 'ANTIGRAVITY YOGA',
      hall: 'Зал Mind & Body',
      trainer: 'Алина Краснова',
      spotsLeft: 5,
      level: 'Любой уровень',
    },
    {
      id: 'w2',
      time: '18:30',
      duration: '55 мин',
      title: 'SOUL HIIT & METCON',
      hall: 'Атлетический зал',
      trainer: 'Дмитрий Соколов',
      spotsLeft: 3,
      level: 'Высокая нагрузка',
    },
    {
      id: 'w3',
      time: '20:00',
      duration: '50 мин',
      title: 'HEALTHY BACK & POSTURE',
      hall: 'Зал Mind & Body',
      trainer: 'Алина Краснова',
      spotsLeft: 6,
      level: 'Восстановление',
    },
  ],
  thu: [
    {
      id: 'th1',
      time: '09:30',
      duration: '55 мин',
      title: 'REFORMER PILATES FLOW',
      hall: 'Студия реформеров',
      trainer: 'Алина Краснова',
      spotsLeft: 2,
      level: 'Любой уровень',
    },
    {
      id: 'th2',
      time: '18:30',
      duration: '60 мин',
      title: 'STRENGTH & HYPERTROPHY',
      hall: 'Силовая зона Eleiko',
      trainer: 'Артем Волков',
      spotsLeft: 5,
      level: 'Средний / Высокий',
    },
    {
      id: 'th3',
      time: '19:45',
      duration: '50 мин',
      title: 'METABOLIC ROW & KETTLEBELL',
      hall: 'Зона функционала',
      trainer: 'Дмитрий Соколов',
      spotsLeft: 4,
      level: 'Высокая нагрузка',
    },
  ],
  fri: [
    {
      id: 'f1',
      time: '08:30',
      duration: '55 мин',
      title: 'MORNING PILATES & BREATH',
      hall: 'Зал Mind & Body',
      trainer: 'Алина Краснова',
      spotsLeft: 6,
      level: 'Любой уровень',
    },
    {
      id: 'f2',
      time: '18:00',
      duration: '55 мин',
      title: 'FRIDAY FULLBODY BURN',
      hall: 'Зона функционала',
      trainer: 'Дмитрий Соколов',
      spotsLeft: 3,
      level: 'Средний уровень',
    },
    {
      id: 'f3',
      time: '19:30',
      duration: '55 мин',
      title: 'МФР И РЕЛАКС ПЕРЕД ВЫХОДНЫМИ',
      hall: 'Зал Mind & Body',
      trainer: 'Алина Краснова',
      spotsLeft: 8,
      level: 'Восстановление',
    },
  ],
  sat: [
    {
      id: 's1',
      time: '10:30',
      duration: '60 мин',
      title: 'TEAM WORKOUT CHALLENGE',
      hall: 'Атлетический зал',
      trainer: 'Артем Волков и Дмитрий Соколов',
      spotsLeft: 5,
      level: 'Командная тренировка',
    },
    {
      id: 's2',
      time: '12:30',
      duration: '55 мин',
      title: 'STRETCH & SOUND MEDITATION',
      hall: 'Зал Mind & Body',
      trainer: 'Алина Краснова',
      spotsLeft: 4,
      level: 'Восстановление',
    },
  ],
  sun: [
    {
      id: 'su1',
      time: '11:00',
      duration: '60 мин',
      title: 'REFORMER PILATES WEEKEND',
      hall: 'Студия реформеров',
      trainer: 'Алина Краснова',
      spotsLeft: 3,
      level: 'Любой уровень',
    },
    {
      id: 'su2',
      time: '13:00',
      duration: '55 мин',
      title: 'RECOVERY MOBILITY & SPA',
      hall: 'Зал Mind & Body',
      trainer: 'Дмитрий Соколов',
      spotsLeft: 7,
      level: 'Восстановление',
    },
  ],
};

interface ScheduleSectionProps {
  onOpenBooking: (subject?: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onOpenBooking }) => {
  const [selectedDay, setSelectedDay] = useState<string>('mon');
  const slots = SCHEDULE_BY_DAY[selectedDay] || SCHEDULE_BY_DAY.mon;

  return (
    <section id="schedule" className="w-full bg-white py-20 lg:py-28 border-t border-neutral-100">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-14 xl:px-[112px]">
        {/* Header + Day Selector */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="mb-4 flex items-center gap-3.5">
              <span className="inline-block h-[1px] w-7 bg-[#8E44EC]" aria-hidden="true" />
              <span className="text-[11px] font-medium tracking-[0.22em] text-[#8E44EC] uppercase">
                РАСПИСАНИЕ ГРУППОВЫХ ПРОГРАММ
              </span>
            </div>
            <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold uppercase leading-[1.12] tracking-[-0.02em] text-[#0F0F12]">
              ПЛАНИРУЙ <span className="text-[#8E44EC]">СВОЙ РИТМ</span>
            </h2>
          </div>

          {/* Interactive Day Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-[4px] bg-[#F4F4F8] p-1.5 self-start lg:self-auto">
            {DAYS.map((day) => {
              const isActive = day.id === selectedDay;
              return (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => setSelectedDay(day.id)}
                  className={`rounded-[3px] px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#8E44EC] text-white'
                      : 'text-[#4A4A52] hover:text-[#141416]'
                  }`}
                >
                  <span className="sm:hidden">{day.short}</span>
                  <span className="hidden sm:inline">{day.full}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tabular Schedule List */}
        <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {slots.map((slot) => (
            <div
              key={slot.id}
              className="py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FAFAFC] px-3 sm:px-5 transition-colors"
            >
              {/* Time & Duration */}
              <div className="flex items-baseline gap-4 md:w-44 shrink-0">
                <span className="font-display text-xl sm:text-2xl font-bold text-[#141416] tabular-nums">
                  {slot.time}
                </span>
                <span className="text-xs text-[#6E6E77] tabular-nums">{slot.duration}</span>
              </div>

              {/* Workout Title & Metadata */}
              <div className="flex-1">
                <h3 className="font-display text-sm sm:text-base font-bold uppercase text-[#141416]">
                  {slot.title}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#6E6E77]">
                  <span className="text-[#8E44EC] font-medium">{slot.hall}</span>
                  <span aria-hidden="true">·</span>
                  <span>Тренер: {slot.trainer}</span>
                  <span aria-hidden="true">·</span>
                  <span>{slot.level}</span>
                </div>
              </div>

              {/* Spots & Action */}
              <div className="flex items-center justify-between md:justify-end gap-6 md:w-64 shrink-0">
                <span className="text-xs text-[#6E6E77] tabular-nums">
                  Свободно мест: <strong className="text-[#141416]">{slot.spotsLeft}</strong>
                </span>
                <button
                  type="button"
                  onClick={() =>
                    onOpenBooking(`Бронь места: ${slot.title} (${slot.time})`)
                  }
                  className="inline-flex items-center gap-2.5 rounded-[3px] border border-[#8E44EC] px-4 py-2 text-xs font-medium text-[#8E44EC] hover:bg-[#8E44EC] hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>Записаться</span>
                  <ThinRightArrow className="w-3.5 h-2.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
