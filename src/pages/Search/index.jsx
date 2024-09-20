import React from 'react';
import Navbar from '../../component/Bars/Navbar';
import SearchFunc from '../../component/SearchFunc/searchFunc';
import { Footer } from '../../component/Bars/Footer';
import { FilterSearchResult } from '../../component/FilterSearchResult';

export const Search = () => {
  return (
    <div>
      <Navbar />
      <SearchFunc />
      <FilterSearchResult />
      <Footer />
    </div>
  );
};
