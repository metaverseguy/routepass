import React from 'react';
import Navbar from '../../component/Bars/Navbar';
import SearchFunc from '../../component/SearchFunc/searchFunc';
import { FilterSearchResult } from '../../component/FilterSearchResult';
import { Footer } from '../../component/Bars/Footer';

export const Search = () => {
  return (
    <div>
      <Navbar title="flights" />
      <SearchFunc />
      <FilterSearchResult />
      <Footer />
    </div>
  );
};
