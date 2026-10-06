import React, { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { SoulFitLogo } from './SoulFitLogo';
import { ThinRightArrow } from './HeroFeatureIcons';

interface LeadCaptureSectionProps {
  selectedCity: string;
}

export const LeadCaptureSection: React.FC<LeadCaptureSectionProps> = ({ selectedCity }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Гостевой визит и тест-драйв клуба');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Пожалуйста, укажите ваше имя');
      return;
    }
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) {
      setError('Пожалуйста, введите корректный номер телефона (минимум 10 цифр)');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#141416] py-20 lg:py-28 text-white">
      {/* Subtle decorative purple diagonal bars matching hero motif */}
      <svg
        viewBox="0 0 320 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute right-0 top-0 h-full w-auto opacity-30"
        aria-hidden="true"
      >
        <polygon points="180,0 240,0 60,420 0,420" fill="#8E44EC" fillOpacity="0.45" />
        <polygon
          points="265,0 315,0 135,420 85,420"
          stroke="#A864FD"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-14 xl:px-[112px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left 6 cols */}
          <div className="lg:col-span-6">
            <div className="mb-4 flex items-center gap-3.5">
              <span className="inline-block h-[1px] w-7 bg-[#A864FD]" aria-hidden="true" />
              <span className="text-[11px] font-medium tracking-[0.22em] text-[#C49BF9] uppercase">
                НАЧНИ СВОЙ РИТМ СЕГОДНЯ · {selectedCity.toUpperCase()}
              </span>
            </div>
            <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold uppercase leading-[1.12] tracking-[-0.01em]">
              ЗАПИШИСЬ НА <span className="text-[#A864FD]">ПРОБНУЮ ТРЕНИРОВКУ</span>
            </h2>
            <p className="mt-5 max-w-lg text-[15px] sm:text-[16px] leading-[1.6] text-neutral-300">
              Оставьте контакты — менеджер клубного сервиса перезвонит в течение 10 минут,
              подберет удобное время визита и проведет персональную экскурсию по всем зонам
              SOUL FIT.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10 text-xs text-neutral-300">
              <div>
                <div className="font-semibold text-white">Адрес клуба ({selectedCity})</div>
                <div className="mt-1 text-neutral-400">
                  пр. Химиков, 38А · Панорамный корпус, 2–3 этаж
                </div>
              </div>
              <div>
                <div className="font-semibold text-white">Прямая линия</div>
                <div className="mt-1 font-mono tabular-nums text-neutral-400">
                  +7 (8555) 49-80-00 · Ежедневно 06:00–24:00
                </div>
              </div>
            </div>
          </div>

          {/* Right 6 cols: Interactive Form */}
          <div className="lg:col-span-6">
            <div className="rounded-[4px] border border-white/15 bg-[#1C1C20] p-6 sm:p-9">
              {submitted ? (
                <div className="py-8 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-[#A864FD]" />
                  <h3 className="mt-4 font-display text-xl font-bold uppercase">
                    Заявка принята!
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300 max-w-md mx-auto">
                    Спасибо, {name}! Мы свяжемся с вами по номеру {phone} в ближайшие 10 минут для
                    подтверждения записи в клуб SOUL FIT ({selectedCity}).
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                    }}
                    className="mt-6 inline-flex items-center gap-2 rounded-[3px] bg-[#8E44EC] px-6 py-3 text-xs font-medium text-white hover:bg-[#7B32D9] cursor-pointer"
                  >
                    Отправить еще одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label
                      htmlFor="lead-name"
                      className="block text-xs font-medium text-neutral-300 mb-2"
                    >
                      Ваше имя
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Например, Александр"
                      className="w-full rounded-[3px] border border-white/15 bg-[#141416] px-4 py-3.5 text-sm text-white placeholder:text-neutral-500 focus:border-[#8E44EC] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lead-phone"
                      className="block text-xs font-medium text-neutral-300 mb-2"
                    >
                      Номер телефона
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (999) 000-00-00"
                      className="w-full rounded-[3px] border border-white/15 bg-[#141416] px-4 py-3.5 text-sm text-white placeholder:text-neutral-500 focus:border-[#8E44EC] focus:outline-none tabular-nums"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lead-goal"
                      className="block text-xs font-medium text-neutral-300 mb-2"
                    >
                      Интересующее направление
                    </label>
                    <select
                      id="lead-goal"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full rounded-[3px] border border-white/15 bg-[#141416] px-4 py-3.5 text-sm text-white focus:border-[#8E44EC] focus:outline-none"
                    >
                      <option value="Гостевой визит и тест-драйв клуба">
                        Гостевой визит и тест-драйв клуба
                      </option>
                      <option value="Оформление клубной карты SOUL INFINITY">
                        Оформление клубной карты SOUL INFINITY
                      </option>
                      <option value="Персональный тренинг с наставником">
                        Персональный тренинг с наставником
                      </option>
                      <option value="Студия Reformer Pilates & Mind Body">
                        Студия Reformer Pilates & Mind Body
                      </option>
                    </select>
                  </div>

                  {error && <p className="text-xs text-rose-400">{error}</p>}

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-4 rounded-[3px] bg-[#8E44EC] px-7 py-4 text-sm font-medium text-white shadow-[0_10px_25px_-6px_rgba(142,68,236,0.5)] hover:bg-[#7B32D9] transition-colors cursor-pointer"
                  >
                    <span>Записаться в клуб</span>
                    <ThinRightArrow className="w-4 h-3" />
                  </button>

                  <p className="text-[11px] text-neutral-400 leading-normal">
                    Нажимая кнопку «Записаться в клуб», вы соглашаетесь с политикой обработки
                    персональных данных и правилами посещения SOUL FIT.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FooterProps {
  selectedCity: string;
  onOpenBooking: (subject?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ selectedCity, onOpenBooking }) => {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white py-12 text-[#4A4A52]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-14 xl:px-[112px]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-neutral-100">
          <a href="#" className="shrink-0">
            <SoulFitLogo />
          </a>

          <nav className="flex flex-wrap items-center gap-6 sm:gap-9 text-xs sm:text-[13px] font-medium text-[#2C2C30]">
            <a href="#about" className="hover:text-[#8E44EC] transition-colors">
              О клубе
            </a>
            <a href="#programs" className="hover:text-[#8E44EC] transition-colors">
              Направления
            </a>
            <a href="#trainers" className="hover:text-[#8E44EC] transition-colors">
              Тренеры
            </a>
            <a href="#schedule" className="hover:text-[#8E44EC] transition-colors">
              Расписание
            </a>
            <a href="#pricing" className="hover:text-[#8E44EC] transition-colors">
              Цены
            </a>
          </nav>

          <button
            type="button"
            onClick={() => onOpenBooking('Обратный звонок из футера')}
            className="text-xs font-semibold text-[#8E44EC] hover:text-[#6B27C2] transition-colors cursor-pointer"
          >
            Заказать звонок →
          </button>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#8A8A94]">
          <div>
            © {new Date().getFullYear()} ООО «СОУЛ ФИТ» ({selectedCity}). Все права защищены.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span>Политика конфиденциальности</span>
            <span aria-hidden="true">·</span>
            <span>Договор оферты</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface BookingModalProps {
  isOpen: boolean;
  subject: string;
  selectedCity: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  subject,
  selectedCity,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  if (!isOpen) return null;

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Укажите ваше имя');
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      setError('Введите корректный номер телефона');
      return;
    }
    setError('');
    setDone(true);
  };

  const resetAndClose = () => {
    setDone(false);
    setName('');
    setPhone('');
    setError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-md rounded-[4px] bg-white p-6 sm:p-8 shadow-2xl">
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Закрыть окно"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-[3px] text-neutral-400 hover:bg-neutral-100 hover:text-neutral-800 cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {done ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-[#8E44EC]" />
            <h3 id="modal-title" className="mt-4 font-display text-lg font-bold uppercase text-[#141416]">
              Вы успешно записаны!
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#5E5E68]">
              {name}, администратор клуба SOUL FIT ({selectedCity}) свяжется с вами по телефону{' '}
              {phone} в течение 10 минут.
            </p>
            <button
              type="button"
              onClick={resetAndClose}
              className="mt-6 w-full rounded-[3px] bg-[#8E44EC] py-3 text-xs font-semibold text-white hover:bg-[#7B32D9] cursor-pointer"
            >
              Отлично
            </button>
          </div>
        ) : (
          <div>
            <div className="text-[10px] font-semibold tracking-[0.2em] text-[#8E44EC] uppercase">
              SOUL FIT · {selectedCity.toUpperCase()}
            </div>
            <h3
              id="modal-title"
              className="mt-1.5 font-display text-lg sm:text-xl font-extrabold uppercase text-[#141416]"
            >
              ОНЛАЙН-ЗАПИСЬ
            </h3>
            <p className="mt-1.5 text-xs text-[#6E6E77]">{subject}</p>

            <form onSubmit={handleModalSubmit} className="mt-5 space-y-4" noValidate>
              <div>
                <label className="block text-xs font-medium text-[#2C2C30] mb-1.5">
                  Ваше имя
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Введите имя"
                  className="w-full rounded-[3px] border border-neutral-300 px-3.5 py-2.5 text-sm text-[#141416] focus:border-[#8E44EC] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2C2C30] mb-1.5">
                  Телефон для связи
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (999) 000-00-00"
                  className="w-full rounded-[3px] border border-neutral-300 px-3.5 py-2.5 text-sm text-[#141416] focus:border-[#8E44EC] focus:outline-none tabular-nums"
                />
              </div>

              {error && <p className="text-xs text-rose-600">{error}</p>}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-[3px] bg-[#8E44EC] px-6 py-3.5 text-xs font-semibold text-white hover:bg-[#7B32D9] transition-colors cursor-pointer"
              >
                <span>Подтвердить запись</span>
                <ThinRightArrow className="w-3.5 h-3" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
