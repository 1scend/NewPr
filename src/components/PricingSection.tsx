import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { ThinRightArrow } from './HeroFeatureIcons';

interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: string;
  annualPrice: string;
  accessHours: string;
  highlighted?: boolean;
  features: string[];
}

const PLANS: PricingPlan[] = [
  {
    id: 'day-rhythm',
    name: 'SOUL DAY',
    subtitle: 'Дневной формат для свободного графика',
    monthlyPrice: '3 900 ₽',
    annualPrice: '34 900 ₽',
    accessHours: 'Доступ с 06:00 до 17:00 в будни и выходные',
    features: [
      'Безлимитный доступ в тренажерный и кардио-зал',
      'Групповые программы по расписанию до 17:00',
      'Первичная диагностика состава тела InBody',
      'Вводная персональная тренировка с наставником',
      'Доступ в финскую сауну и зону релаксации',
    ],
  },
  {
    id: 'unlimited-pro',
    name: 'SOUL INFINITY',
    subtitle: 'Полный безлимит без ограничений по времени',
    monthlyPrice: '5 400 ₽',
    annualPrice: '46 900 ₽',
    accessHours: 'Полный доступ 06:00–24:00 ежедневно',
    highlighted: true,
    features: [
      'Безлимитный доступ во все зоны клуба 7 дней в неделю',
      'Все групповые направления и студия Mind & Body',
      '2 персональные тренировки и 2 анализа InBody в пакете',
      'Полный доступ в термальный SPA-комплекс и хаммам',
      'Заморозка карты до 45 дней и 5 гостевых визитов для друзей',
    ],
  },
  {
    id: 'vip-club',
    name: 'SOUL BLACK VIP',
    subtitle: 'Индивидуальное сопровождение и привилегии',
    monthlyPrice: '9 800 ₽',
    annualPrice: '84 000 ₽',
    accessHours: 'Приоритетный доступ 06:00–24:00 + личный локер',
    features: [
      'Все привилегии карты SOUL INFINITY без ограничений',
      'Ежемесячный блок из 4 персональных тренировок или Reformer Pilates',
      'Индивидуальный закрепленный шкафчик в VIP-раздевалке',
      'Комплект премиального текстиля и халат на каждый визит',
      'Заморозка карты до 90 дней и 10 гостевых визитов',
    ],
  },
];

interface PricingSectionProps {
  onOpenBooking: (subject?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  const [billingPeriod, setBillingPeriod] = useState<'annual' | 'monthly'>('annual');

  return (
    <section
      id="pricing"
      className="w-full bg-[#FAFAFC] py-20 lg:py-28 border-t border-neutral-100"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-14 xl:px-[112px]">
        {/* Header + Billing Period Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-16">
          <div>
            <div className="mb-4 flex items-center gap-3.5">
              <span className="inline-block h-[1px] w-7 bg-[#8E44EC]" aria-hidden="true" />
              <span className="text-[11px] font-medium tracking-[0.22em] text-[#8E44EC] uppercase">
                КЛУБНЫЕ КАРТЫ И ТАРИФЫ
              </span>
            </div>
            <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold uppercase leading-[1.12] tracking-[-0.02em] text-[#0F0F12]">
              ИНВЕСТИЦИЯ В <span className="text-[#8E44EC]">КАЧЕСТВО ЖИЗНИ</span>
            </h2>
          </div>

          {/* Interactive Billing Switcher */}
          <div className="flex items-center gap-1.5 rounded-[4px] bg-white border border-neutral-200 p-1.5 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setBillingPeriod('annual')}
              className={`rounded-[3px] px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                billingPeriod === 'annual'
                  ? 'bg-[#8E44EC] text-white'
                  : 'text-[#4A4A52] hover:text-[#141416]'
              }`}
            >
              Годовая карта · Выгода до 25%
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod('monthly')}
              className={`rounded-[3px] px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                billingPeriod === 'monthly'
                  ? 'bg-[#8E44EC] text-white'
                  : 'text-[#4A4A52] hover:text-[#141416]'
              }`}
            >
              Помесячная оплата
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {PLANS.map((plan) => {
            const isHighlighted = plan.highlighted;
            const price =
              billingPeriod === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const periodLabel =
              billingPeriod === 'annual' ? 'за 12 месяцев' : 'в месяц по подписке';

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-[4px] p-7 sm:p-9 transition-colors ${
                  isHighlighted
                    ? 'bg-[#141416] text-white border border-[#8E44EC]'
                    : 'bg-white text-[#141416] border border-neutral-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-extrabold uppercase tracking-tight">
                      {plan.name}
                    </h3>
                    {isHighlighted && (
                      <span className="text-[11px] font-semibold tracking-wider text-[#C49BF9] uppercase">
                        Выбор резидентов
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-2 text-xs ${
                      isHighlighted ? 'text-neutral-400' : 'text-[#6E6E77]'
                    }`}
                  >
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mt-7 pb-6 border-b border-neutral-200/20">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-display text-3xl sm:text-4xl font-extrabold tabular-nums">
                        {price}
                      </span>
                      <span
                        className={`text-xs ${
                          isHighlighted ? 'text-neutral-400' : 'text-[#6E6E77]'
                        }`}
                      >
                        / {periodLabel}
                      </span>
                    </div>
                    <div
                      className={`mt-2 text-xs font-medium ${
                        isHighlighted ? 'text-[#C49BF9]' : 'text-[#8E44EC]'
                      }`}
                    >
                      {plan.accessHours}
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="mt-6 space-y-3.5">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-[13.5px] leading-[1.45]">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isHighlighted ? 'text-[#A864FD]' : 'text-[#8E44EC]'
                          }`}
                        />
                        <span className={isHighlighted ? 'text-neutral-200' : 'text-[#4A4A52]'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="mt-9 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      onOpenBooking(
                        `Оформление карты ${plan.name} (${
                          billingPeriod === 'annual' ? '12 месяцев' : '1 месяц'
                        })`
                      )
                    }
                    className={`inline-flex w-full items-center justify-center gap-4 rounded-[3px] px-6 py-4 text-xs sm:text-[13px] font-medium transition-colors whitespace-nowrap cursor-pointer ${
                      isHighlighted
                        ? 'bg-[#8E44EC] text-white hover:bg-[#7B32D9] shadow-[0_10px_25px_-6px_rgba(142,68,236,0.5)]'
                        : 'bg-[#F4F4F8] text-[#141416] hover:bg-[#8E44EC] hover:text-white'
                    }`}
                  >
                    <span>Оформить карту</span>
                    <ThinRightArrow className="w-4 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
