'use client';
import { useEffect, useRef, useState } from 'react';
import ServiceSection from '@components/service-section';
import CopySection from '@components/copy-section';
import GroupSection from '@components/group-section';
import Header from '@components/header';
import NavigationBar from '@components/navigation-bar';
import ReservationSection from '@components/reservation-section';
import ReservationToaster from '@components/reservation-toaster';
import ReviewSection from '@components/review-section';

function LandingPage() {
  const [isMounted, setIsMounted] = useState(false);
  const reservationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToReservation = () => {
    reservationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header scrollToReservation={scrollToReservation} />
      <CopySection />
      <GroupSection />
      <ServiceSection />
      <ReviewSection />
      <ReservationSection ref={reservationRef} />
      <NavigationBar scrollToReservation={scrollToReservation} />
      <ReservationToaster />
    </div>
  );
}

export default LandingPage;
