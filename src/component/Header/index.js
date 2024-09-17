/* eslint-disable react/style-prop-object */
import React from 'react';
import SearchBar from '../SearchBar';
import Image from '../../Assets/Img/painting-3995999_1920.jpg';

const Header = () => {
  return (
    <div
      className="bg-cover bg-center h-[449px] w-full flex justify-center"
      style={{ backgroundImage: `url(${Image})` }}>
      <SearchBar />
    </div>
  );
};

export default Header;
