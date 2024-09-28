// src/pages/HotelSearch/index.jsx
import React from 'react';
import Navbar from '../../component/Bars/Navbar';
import HotelSearchOption from '../../component/Bars/HotelSearchOption';
import { HotelFilterSearchResult } from '../../component/HotelFilterSearchResult';
import { Footer } from '../../component/Bars/Footer';
export default function HotelSearch() {
  return (
    <>
      <Navbar title="hotels" />
      <HotelSearchOption />
      <HotelFilterSearchResult />
      <Footer />
    </>
  );
}
