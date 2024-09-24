import React from 'react';
import Navbar from '../../component/Bars/Navbar';
import Header from '../../component/Bars/Header';
import { LandingCarousel } from '../../component/LandingCarousel';
import { Support } from '../../component/Support';
import { Guide } from '../../component/Guide';
import { FlightDeals } from '../../component/FlightDeals';
import { Travllers } from '../../component/Travellers';
import { Subscribe } from '../../component/Subscribe';
import { Questions } from '../../component/Questions';
import { Footer } from '../../component/Bars/Footer';

const Main = () => {
  return (
    <div>
      <Navbar title="flights" />
      <Header />
      <LandingCarousel />
      <Support />
      <Guide imgURL="assets/img/guide.png" />
      <FlightDeals />
      <Travllers />
      <Subscribe imgURL="assets/img/sub_background.png" />
      <Questions />
      <Footer />
    </div>
  );
};

export default Main;
