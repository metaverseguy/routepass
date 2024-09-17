import React from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import { LandingCarousel } from '../LandingCarousel';
import { Support } from '../Support';
import { Guide } from '../Guide';
import { FlightDeals } from '../FlightDeals';
import { Travllers } from '../Travellers';
import { Subscribe } from '../Subscribe';
import { Questions } from '../Questions';
import { Footer } from '../Footer';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <LandingCarousel />
      <Support />
      <Guide />
      <FlightDeals />
      <Travllers />
      <Subscribe />
      <Questions />
      <Footer />
    </div>
  );
};

export default Main;
