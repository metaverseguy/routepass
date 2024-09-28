/* eslint-disable react/style-prop-object */
import React from 'react';
import SearchBar from '../SearchBar';
import PropTypes from 'prop-types';
import HotelSearchBar from '../HotelSearchBar';
// import Image from '../../Assets/Img/painting-3995999_1920.jpg';

const Header = ({ pageTitle }) => {
  return (
    <div className="relative flex flex-col justify-center items-center z-0">
      <img
        className="w-full object-cover h-[585px] md:h-[449px] flex justify-center z-0"
        src="assets/img/painting-3995999_1920.jpg"
        alt="No find the image"
      />
      <div className="flex flex-col justify-center items-center max-w-[1800px]">
        {pageTitle === 'main' ? <SearchBar /> : null}
        {pageTitle === 'hotel' ? <HotelSearchBar /> : null}
      </div>
    </div>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
