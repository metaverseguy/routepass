import React from 'react';
import { FaBookmark } from 'react-icons/fa6';
import { Rating } from 'react-simple-star-rating';
import { useNavigate } from 'react-router-dom';

const HotelSearchCard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hidden md:block">
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex px-3 py-4 lg:py-6 lg:px-8 gap-5">
          <img
            className="w-auto h-full object-cover col-span-1"
            src="assets/img/hotels/hotel_search.png" // Replace with your image URL
            alt="Hotel"
          />
          <div className="flex flex-col w-full gap-y-5">
            <div className="flex justify-between">
              <h2 className="text-sm lg:text-xl font-semibold">Hotel 123</h2>
              <h2 className="text-xs lg:text-xl font-semibold flex gap-2 items-center">
                <FaBookmark />
                Bookmark Deal
              </h2>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-[12px] lg:text-[14px] 2xl:text-[0.9vw] max:text-[22px] text-gray-600">
                  Lombok
                </p>
                <p className="text-[12px] lg:text-[14px] 2xl:text-[0.9vw] max:text-[22px] text-gray-500">
                  2.41 from the city centre
                </p>
              </div>
              <div className="flex flex-col">
                <Rating initialValue={0} readonly={true} className="flex" />
                <p className="lg:text-[14px] 2xl:text-[0.8vw] max:text-[20px] text-gray-500 text-xs">
                  5-Stars Hotel
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-[12px]">
              <div className="bg-[#333333] text-white rounded-md px-[10px] py-[5px] flex items-center justify-center">
                <p className="text-lg font-semibold">9.1</p>
              </div>
              <div>
                <p className="text-[10px] lg:text-[sm] 2xl:text-[0.9vw] max:text-[22px] text-[#292929] font-semibold">
                  Excellent
                </p>
                <p className="text-[7px] lg:text-[10px] 2xl:text-[0.8vw] max:text-[20px] text-gray-500 font-semibold">
                  7123 reviews
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h2 className="text-[12px] lg:text-[14px] 2xl:text-[0.8vw] max:text-[20px] font-semibold c-chromaphobicblack">
                  Booking.com
                </h2>
                <h2 className="text-[12px] lg:text-[18px] 2xl:text-[1vw] max:text-[24px] font-semibold c-eerieblack">
                  $200
                </h2>
              </div>
              <div className=" border-2 border-[#29292915] w-0"></div>
              <div className="flex flex-col">
                <h2 className="text-[12px] lg:text-[14px] 2xl:text-[0.8vw] max:text-[20px] font-semibold c-chromaphobicblack">
                  Trip.com
                </h2>
                <h2 className="text-[12px] lg:text-[18px] 2xl:text-[1vw] max:text-[24px] font-semibold c-eerieblack">
                  $200
                </h2>
              </div>
              <div className="border-2 border-[#29292915] w-0"></div>
              <div className="flex flex-col">
                <h2 className="text-[12px] lg:text-[14px] 2xl:text-[0.8vw] max:text-[20px] font-semibold c-chromaphobicblack">
                  Agoda.com
                </h2>
                <h2 className="text-[12px] lg:text-[18px] 2xl:text-[1vw] max:text-[24px] font-semibold c-eerieblack">
                  $200
                </h2>
              </div>
              <div className="border-2 border-[#29292915] w-0"></div>
              <div className="flex items-center">
                <button
                  onClick={() => navigate('/hoteldetail')}
                  className="text-[12px] lg:text-[14px] 2xl:text-[0.8vw] max:text-[20px] text-wrap font-semibold c-chromaphobicblack">
                  See More
                </button>
              </div>
            </div>
          </div>
          <div className="border-2 border-[#29292915] w-0"></div>
          <div className="flex flex-col gap-y-5 w-1/2">
            <div className="w-full flex justify-between items-center">
              <span className="text-[12px] lg:text-[16px] 2xl:text-[1vw] max:text-[24px] font-semibold bg-[#2461FF20] c-eerieblack rounded-[10px] py-2 px-6">
                Great Price
              </span>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="c-eerieblack font-semibold text-[12px] lg:text-[16px] 2xl:text-[1vw] max:text-[24px]">
                Cheapest provider by $75
              </p>
              <div className="flex items-center gap-1">
                <p className="text-[22px] lg:text-[32px] 2xl:text-[1.4vw] max:text-[32px] c-eerieblack font-semibold">
                  $250
                </p>
                <p className="text-[10px] lg:text-[14px] 2xl:text-[0.9vw] max:text-[22px] c-chromaphobicblackhalf">
                  / Night
                </p>
              </div>
            </div>
            <button className="text-[12px] lg:text-[16px] 2xl:text-[1vw] max:text-[24px] font-semibold text-white py-[14px] bg-[#333333] rounded-[10px]">
              Go to Site
            </button>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="bg-white rounded-[15px] shadow overflow-hidden w-full relative">
          <img src="assets/img/hotels/hotel_search.png" className="w-full h-36 object-cover" />
          <div className="bg-white px-5 py-4 flex flex-col gap-y-[26px] overflow-hidden">
            <div className="flex items-stretch justify-between">
              <div className="flex flex-col gap-y-[5px]">
                <div className="flex flex-col gap-y-[10px]">
                  <h2 className="text-[12px] 2xl:text-[0.9vw] max:text-[22px] font-semibold text-[#333333]">
                    Lombok
                  </h2>
                  <h1 className="text-[18px] 2xl:text-[1vw] max:text-[24px] font-semibold text-black">
                    Hotel 123
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
              </div>
            </div>

            <div className="flex justify-between items-center gap-x-[12px] h-full">
              <div className="flex gap-x-2">
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
              <div className="flex items-center justify-center">
                <p className="text-[18px] 2xl:text-[1vw] max:text-[24px] font-semibold text-[#333333]">
                  $250
                </p>
                <p className="text-[12px] 2xl:text-[0.8vw] max:text-[20px] font-semibold text-[#29292950]">
                  /Night
                </p>
              </div>
            </div>
            <div className="border-b-2"></div>
            <div className="flex gap-x-[10px]">
              <button className="flex-1 text-[12px] lg:text-[16px] 2xl:text-[1vw] max:text-[24px] font-semibold text-white py-[14px] bg-[#333333] rounded-[10px]">
                Go to Site
              </button>
              <button className="flex flex-1 justify-center items-center text-[12px] lg:text-[16px] 2xl:text-[1vw] max:text-[24px] font-semibold text-white py-[14px] bg-[#333333] rounded-[10px]">
                <FaBookmark />
                Bookmark Deal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchCard;
