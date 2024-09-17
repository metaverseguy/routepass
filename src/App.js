import React from 'react';
import Navbar from './component/Navbar';
import Header from './component/Header';
import { LandingCarousel } from './component/LandingCarousel';
import { Support } from './component/Support';
import { Guide } from './component/Guide';
import { FlightDeals } from './component/FlightDeals';
import { Travllers } from './component/Travellers';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <LandingCarousel />
      <Support />
      <Guide />
      <FlightDeals />
      <Travllers />
    </div>
  );
}

export default App;
