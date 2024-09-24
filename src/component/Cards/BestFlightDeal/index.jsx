import React from 'react';
import PropTypes from 'prop-types';

const BestFlightDeal = ({ hotel }) => {
  return (
    <div className="bg-white rounded-[15px] shadow overflow-hidden w-full relative">
      <img src={hotel.image} className="w-full object-cover" />
      <button className="bg-white absolute top-[16px] right-[28px] rounded-full w-8 h-8 text-[28px] flex items-center justify-center">
        <p className="p-0 m-[0] top-[-8px] absolute">+</p>
      </button>
      <div className="bg-white px-5 py-4 flex flex-col gap-y-[26px] overflow-hidden">
        <div className="flex items-stretch justify-between">
          <div className="flex flex-col gap-y-[5px]">
            <div className="flex flex-col gap-y-[10px]">
              <h2 className="text-[18px] font-semibold text-[#333333]">{hotel.location}</h2>
            </div>
            <p className="text-[#979797] text-[14px]">{hotel.country}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm">Start From</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-[18px] font-semibold text-[#333333]">$250</p>
              <p className="text-[12px] font-semibold text-[#29292950]">/Night</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BestFlightDeal.propTypes = {
  hotel: PropTypes.shape({
    image: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default BestFlightDeal;
