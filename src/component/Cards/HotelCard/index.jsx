import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'react-simple-star-rating';

const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white rounded-[15px] shadow overflow-hidden w-full relative">
      <img src={hotel.image} alt={hotel.name} className="w-full object-cover" />
      <button className="bg-white absolute top-[16px] right-[28px] rounded-full w-8 h-8 text-[28px] flex items-center justify-center">
        <p className="p-0 m-[0] top-[-8px] absolute">+</p>
      </button>
      <div className="bg-white px-5 py-4 flex flex-col gap-y-[26px] overflow-hidden">
        <div className="flex items-stretch justify-between">
          <div className="flex flex-col gap-y-[5px]">
            <div className="flex flex-col gap-y-[10px]">
              <h2 className="text-[12px] 2xl:text-[0.9vw] max:text-[22px] font-semibold text-[#333333]">
                {hotel.location}
              </h2>
              <h1 className="text-[18px] 2xl:text-[1vw] max:text-[24px] font-semibold text-black">
                The Hotel 3121
              </h1>
            </div>
            <p className="text-[#979797] text-[14px] 2xl:text-[0.8vw] max:text-[20px]">
              2.41 from the city centre
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col">
              <Rating initialValue={0} readonly={true} className="flex" />
              <p className="text-gray-500 text-sm 2xl:text-[0.8vw] max:text-[20px]">
                5-Stars Hotel
              </p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-[18px] 2xl:text-[1vw] max:text-[24px] font-semibold text-[#333333]">
                $250
              </p>
              <p className="text-[12px] 2xl:text-[0.8vw] max:text-[20px] font-semibold text-[#29292950]">
                /Night
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-[12px] h-full">
          <div className="bg-[#333333] text-white rounded-md px-[10px] py-[5px] flex items-center justify-center">
            <p className="text-lg 2xl:text-[1vw] max:text-[24px] font-semibold">9.1</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#292929] text-[14px] 2xl:text-[0.9vw] max:text-[22px] font-semibold">
              Excellent
            </p>
            <p className="text-gray-500 text-sm 2xl:text-[0.9vw] max:text-[22px] font-semibold">
              7123 reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.string.isRequired,
  }).isRequired,
};

export default HotelCard;
