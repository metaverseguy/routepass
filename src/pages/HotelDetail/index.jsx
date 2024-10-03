import React from 'react';
import Navbar from '../../component/Bars/Navbar';
import { Footer } from '../../component/Bars/Footer';
import { HotelDetailOverview } from '../../component/HotelDetailComponents/HotelDetailOverview';
import { HotelDetailFacilities } from '../../component/HotelDetailComponents/HotelFacilities';
import { HotelDetailHeader } from '../../component/HotelDetailComponents/HotelDetailHeader';
import { HotelDetailAvailableRoom } from '../../component/HotelDetailComponents/HotelDetailAvailableRoom';
import { HotelDetailReview } from '../../component/HotelDetailComponents/HotelDetailReview';
import { HotelMap } from '../../component/HotelDetailComponents/HotelMap';

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
