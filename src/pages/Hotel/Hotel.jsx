import React from 'react';
import Navbar from '../../component/Bars/Navbar';
import Header from '../../component/Bars/Header';
import { LandingCarousel } from '../../component/LandingCarousel';
import { Support } from '../../component/Support';
import { Guide } from '../../component/Guide';
import { FlightHotel } from '../../component/FlightHotel';
import { Travllers } from '../../component/Travellers';
import { Subscribe } from '../../component/Subscribe';
import { Questions } from '../../component/Questions';
import { Footer } from '../../component/Bars/Footer';

const Hotel = () => {
  return (
    <div>
      <Navbar title="hotels" />
      <Header pageTitle="hotel" />
      <LandingCarousel />
      <Support />
      <Guide imgURL="assets/img/hotel_sub_background.png" />
      <FlightHotel />
      <Travllers />
      <Subscribe imgURL="assets/img/hotels/kuala lumpur.png" />
      <Questions />
      <Footer />
    </div>
  );
};

export default Hotel;
