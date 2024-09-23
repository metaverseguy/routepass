import React from 'react';
import Navbar from '../../component/Bars/Navbar';
import SearchFunc from '../../component/SearchFunc/searchFunc';
import { FilterSearch } from '../../component/FilterSearch';
import { Footer } from '../../component/Bars/Footer';
export default function HotelSearch() {
  return (
    <>
      <Navbar title="hotels" />
      <SearchFunc />
      <FilterSearch />
      <Footer />
    </>
  );
}
