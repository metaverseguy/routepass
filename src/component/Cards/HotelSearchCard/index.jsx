import React from 'react';
import { FaBookmark } from 'react-icons/fa6';
import { Rating } from 'react-simple-star-rating';

const HotelSearchCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex py-6 px-8 gap-5">
      <img
        className="w-auto h-full object-cover col-span-1"
        src="assets/img/hotels/hotel_search.png" // Replace with your image URL
        alt="Hotel"
      />
      <div className="flex flex-col gap-y-5">
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
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-[12px] font-semibold c-chromaphobicblack">Booking.com</h2>
            <h2 className="text-[18px] font-semibold c-eerieblack">$200</h2>
          </div>
          <div className="mx-[30px] border-2 border-[#29292915] w-0"></div>
          <div className="flex flex-col">
            <h2 className="text-[12px] font-semibold c-chromaphobicblack">Trip.com</h2>
            <h2 className="text-[18px] font-semibold c-eerieblack">$200</h2>
          </div>
          <div className="mx-[30px] border-2 border-[#29292915] w-0"></div>
          <div className="flex flex-col">
            <h2 className="text-[12px] font-semibold c-chromaphobicblack">Agoda.com</h2>
            <h2 className="text-[18px] font-semibold c-eerieblack">$200</h2>
          </div>
          <div className="mx-[30px] border-2 border-[#29292915] w-0"></div>
          <div className="flex items-center">
            <h2 className="text-[12px] text-wrap font-semibold c-chromaphobicblack">See More</h2>
          </div>
        </div>
      </div>
      <div className="border-2 border-[#29292915] w-0"></div>
      <div className="flex flex-col flex-1 gap-y-5">
        <div className="w-full flex justify-between items-center">
          <span className="text-base font-semibold bg-[#2461FF20] c-eerieblack rounded-[10px] py-2 px-6">
            Great Price
          </span>
        </div>
        <div className="flex flex-col gap-y-3">
          <p className="c-eerieblack font-semibold text-base">Cheapest provider by $75</p>
          <div className="flex items-center gap-1">
            <p className="text-[32px] c-eerieblack font-semibold">$250</p>
            <p className="text-sm c-chromaphobicblackhalf">/ Night</p>
          </div>
        </div>
        <button className="text-base font-semibold text-white py-[14px] bg-[#333333] rounded-[10px]">
          Go to Site
        </button>
      </div>
    </div>
  );
};

export default HotelSearchCard;
