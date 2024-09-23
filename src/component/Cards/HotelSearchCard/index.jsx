import React from 'react';
import { FaBookmark } from 'react-icons/fa6';
import { Rating } from 'react-simple-star-rating';

const HotelSearchCard = () => {
  return (
    <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-4">
      <img
        className="w-full h-full object-cover col-span-1"
        src="https://via.placeholder.com/400" // Replace with your image URL
        alt="Hotel"
      />
      <div className="w-full p-4 col-span-2">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Hotel 123</h2>
          <h2 className="text-xl font-semibold flex gap-2 items-center">
            <FaBookmark />
            Bookmark Deal
          </h2>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-gray-600">Lombok</p>
            <p className="text-gray-500">2.41 from the city centre</p>
          </div>
          <div className="flex flex-col">
            <Rating initialValue={0} readonly={true} className="flex" />
            <p className="text-gray-500 text-sm">5-Stars Hotel</p>
          </div>
        </div>
        <div className="flex items-center gap-x-[12px]">
          <div className="bg-[#333333] text-white rounded-md px-[10px] py-[5px] flex items-center justify-center">
            <p className="text-lg font-semibold">9.1</p>
          </div>
          <div>
            <p className="text-[#292929] text-[14px] font-semibold">Excellent</p>
            <p className="text-gray-500 text-sm font-semibold">7123 reviews</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col">
            <h2 className="text-gray-700">Booking.com</h2>
            <h2 className="text-gray-700">$200</h2>
          </div>
          <div className="flex flex-col">
            <h2 className="text-gray-700">Trip.com</h2>
            <h2 className="text-gray-700">$200</h2>
          </div>
          <div className="flex flex-col">
            <h2 className="text-gray-700">Agoda.com</h2>
            <h2 className="text-gray-700">$200</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex justify-between items-center mt-4 col-span-1">
          <div className="flex items-center">
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              Great Price
            </span>
          </div>
          <div className="text-lg font-bold">$250 / Night</div>
        </div>
        <p className="text-gray-500 mt-2">Cheapest provider by $75</p>
        <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Go to Site
        </button>
      </div>
    </div>
  );
};

export default HotelSearchCard;
