/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { TrainersSection } from './components/TrainersSection';
import { ScheduleSection } from './components/ScheduleSection';
import { PricingSection } from './components/PricingSection';
import {
  LeadCaptureSection,
  Footer,
  BookingModal,
} from './components/LeadCaptureAndFooter';

export default function App() {
  const [selectedCity, setSelectedCity] = useState<string>('Нижнекамск');
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [bookingModal, setBookingModal] = useState<{
    isOpen: boolean;
    subject: string;
  }>({
    isOpen: false,
    subject: 'Запись на первую тренировку',
  });

  const handleOpenBooking = (subject = 'Запись на тренировку в SOUL FIT') => {
    setBookingModal({ isOpen: true, subject });
  };

  const handleCloseBooking = () => {
    setBookingModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#141416]">
      {/* 1:1 Header matching provided mockup */}
      <Header
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1:1 First Screen (Hero) matching provided mockup */}
        <Hero
          activeSlideIndex={activeSlideIndex}
          onChangeSlide={setActiveSlideIndex}
          onOpenBooking={handleOpenBooking}
        />

        {/* О клубе */}
        <AboutSection
          selectedCity={selectedCity}
          onOpenBooking={handleOpenBooking}
        />

        {/* Направления */}
        <ProgramsSection onOpenBooking={handleOpenBooking} />

        {/* Тренеры */}
        <TrainersSection onOpenBooking={handleOpenBooking} />

        {/* Расписание */}
        <ScheduleSection onOpenBooking={handleOpenBooking} />

        {/* Цены */}
        <PricingSection onOpenBooking={handleOpenBooking} />

        {/* Запись в клуб */}
        <LeadCaptureSection selectedCity={selectedCity} />
      </main>

      {/* Footer */}
      <Footer
        selectedCity={selectedCity}
        onOpenBooking={handleOpenBooking}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModal.isOpen}
        subject={bookingModal.subject}
        selectedCity={selectedCity}
        onClose={handleCloseBooking}
      />
    </div>
  );
}

