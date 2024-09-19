import React from 'react';
import Navbar from '../../component/Navbar';
import SearchFunc from './searchFunc';
import FlightCard from './FlightCard';

export const Search = () => {
  return (
    <div>
      <Navbar />
      <SearchFunc />
      <FlightCard />
    </div>
  );
};
