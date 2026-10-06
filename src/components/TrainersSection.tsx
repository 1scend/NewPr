import React from 'react';
import { ThinRightArrow } from './HeroFeatureIcons';

interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  achievement: string;
  image?: string;
}

const TRAINERS: Trainer[] = [
  {
    id: 'artem-volkov',
    name: 'Артем Волков',
    role: 'Старший тренер тренажерного зала',
    experience: 'Стаж 9 лет',
    specialization: 'Силовой и функциональный тренинг, биомеханика',
    achievement: 'Мастер спорта по тяжелой атлетике, сертифицированный специалист FPA и EXOS.',
    image: '/src/assets/images/trainer_portrait_male_1791302583219.jpg',
  },
  {
    id: 'alina-krasnova',
    name: 'Алина Краснова',
    role: 'Куратор студии Reformer Pilates & Stretch',
    experience: 'Стаж 7 лет',
    specialization: 'Пилатес на реформерах, коррекция осанки, МФР',
    achievement: 'Международная сертификация Polestar Pilates, эксперт по послеродовому восстановлению.',
    image: '/src/assets/images/trainer_portrait_female_1791302593195.jpg',
  },
  {
    id: 'dmitry-sokolov',
    name: 'Дмитрий Соколов',
    role: 'Эксперт по метаболическому кондиционированию',
    experience: 'Стаж 8 лет',
    specialization: 'HIIT, подготовка к гонкам с препятствиями и триатлону',
    achievement: 'КМС по легкой атлетике, подготовил более 180 атлетов-любителей к полумарафонам.',
    image: '/src/assets/images/program_functional_training_1791302563892.jpg',
  },
];

interface TrainersSectionProps {
  onOpenBooking: (subject?: string) => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="trainers"
      className="w-full bg-[#FAFAFC] py-20 lg:py-28 border-t border-neutral-100"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-14 xl:px-[112px]">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-16">
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-3.5">
              <span className="inline-block h-[1px] w-7 bg-[#8E44EC]" aria-hidden="true" />
              <span className="text-[11px] font-medium tracking-[0.22em] text-[#8E44EC] uppercase">
                КОМАНДА НАСТАВНИКОВ
              </span>
            </div>
            <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold uppercase leading-[1.12] tracking-[-0.02em] text-[#0F0F12]">
              ПРОФЕССИОНАЛЬНЫЕ <span className="text-[#8E44EC]">ТРЕНЕРЫ</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#5E5E68]">
              В SOUL FIT работают дипломированные специалисты со спортивным и медицинским
              образованием. Мы не даем шаблонных советов — мы ведем вас по оцифрованному плану
              прогресса.
            </p>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TRAINERS.map((trainer, index) => (
            <div
              key={trainer.id}
              className="flex flex-col justify-between overflow-hidden rounded-[4px] border border-neutral-200 bg-white"
            >
              <div>
                {/* Portrait */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <div className="text-xs font-mono tabular-nums text-[#C49BF9]">
                      0{index + 1} · {trainer.experience}
                    </div>
                    <h3 className="mt-0.5 font-display text-lg font-bold uppercase">
                      {trainer.name}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-[#8E44EC]">{trainer.role}</div>
                  <div className="mt-2 text-xs text-[#6E6E77]">{trainer.specialization}</div>
                  <p className="mt-3 text-[13.5px] leading-[1.55] text-[#4A4A52]">
                    {trainer.achievement}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => onOpenBooking(`Персональная тренировка: ${trainer.name}`)}
                  className="inline-flex w-full items-center justify-between rounded-[3px] bg-[#F4F4F8] px-4 py-3 text-xs font-medium text-[#141416] transition-colors hover:bg-[#8E44EC] hover:text-white cursor-pointer"
                >
                  <span>Записаться к тренеру</span>
                  <ThinRightArrow className="w-3.5 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
