import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Flight from './pages/Flight/index.jsx';
import { FlightSearch } from './pages/FlightSearch/index.jsx';
import { FlightDetail } from './pages/FlightDetail/index.jsx';
import Hotel from './pages/Hotel/Hotel.jsx';
import Contact from './pages/Contact';
import HotelSearch from './pages/HotelSearch';
import HotelDetail from './pages/HotelDetail/index.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Flight />} />
        <Route path="/flightsearch" element={<FlightSearch />} />
        <Route path="/flightdetail" element={<FlightDetail />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/hotelsearch" element={<HotelSearch />} />
        <Route path="/hoteldetail" element={<HotelDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
