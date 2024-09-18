/* eslint-disable react/style-prop-object */
import React from 'react';
import SearchBar from '../SearchBar';
import Image from '../../Assets/Img/painting-3995999_1920.jpg';

const Header = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-[585px] md:h-[449px] flex justify-center w-full relative"
        style={{ backgroundImage: `url(${Image})` }}></div>
      <SearchBar />
    </div>
  );
};

export default Header;
