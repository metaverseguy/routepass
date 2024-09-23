import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/MainPage';
import { Search } from './pages/Search';
import { Detail } from './pages/Detail';
import Hotel from './pages/Hotel/Hotel.jsx';
import Contact from './pages/Contact';
import HotelSearch from './pages/HotelSearch';
import HotelDetail from './pages/HotelDetail/index.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hotelsearch" element={<HotelSearch />} />
        <Route path="/hoteldetail" element={<HotelDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
