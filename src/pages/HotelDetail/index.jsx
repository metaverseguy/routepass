import React from 'react';
import Navbar from '../../component/Bars/Navbar';
import { Footer } from '../../component/Bars/Footer';
import { HotelDetailOverview } from './HotelDetailOverview';
import { HotelDetailFacilities } from './HotelFacilities';
import { HotelDetailHeader } from './HotelDetailHeader';
import { HotelDetailAvailableRoom } from './HotelDetailAvailableRoom';
import { HotelDetailReview } from './HotelDetailReview';
import { HotelMap } from './HotelMap';

export default function HotelDetail() {
  return (
    <>
      <Navbar title="hotels" />
      <HotelDetailHeader />
      <HotelDetailOverview />
      <HotelDetailFacilities />
      <HotelDetailAvailableRoom />
      <HotelDetailReview />
      <HotelMap />
      <Footer />
    </>
  );
}
