import React from 'react';
import Navbar from '../../component/Bars/Navbar';
import SearchFunc from '../../component/SearchFunc/searchFunc';
import { Footer } from '../../component/Bars/Footer';
import { FilterSearchResult } from '../../component/FilterSearchResult';
import { FilterSearchBar } from '../../component/Bars/FilterSearchBar';

export const Search = () => {
  return (
    <div>
      <Navbar />
      <SearchFunc />
      <div className="px-[60px] py-10 flex gap-[20px] w-full">
        <FilterSearchBar />
        <FilterSearchResult />
      </div>
      <Footer />
    </div>
  );
};
