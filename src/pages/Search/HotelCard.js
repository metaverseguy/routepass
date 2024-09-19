import React from 'react';
import PropTypes from 'prop-types';

const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-1/3">
      <img src={hotel.image} alt={hotel.name} className="w-full h-40 object-cover" />
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Kuala Lumpur</h2>
              <h1 className="text-2xl font-bold text-gray-900">The Hotel 3121</h1>
              <p className="text-gray-600">2.41 from the city centre</p>
            </div>
            <div className="flex flex-col items-center mt-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-gray-500 text-sm ml-1">5-Stars Hotel</span>
              <p className="text-base font-bold text-gray-900 mt-2">$250/Night</p>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <div className="bg-[#333333] text-white rounded-md w-10 h-10 flex items-center justify-center">
              <span className="text-lg font-bold">9.1</span>
            </div>
            <div className="ml-2">
              <p className="text-gray-800 font-semibold">Excellent</p>
              <p className="text-gray-500 text-sm">7123 reviews</p>
            </div>
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
    reviews: PropTypes.string.isRequired
  }).isRequired
};

export default HotelCard;
