import React from 'react';
import { MdOutlineBookmark } from 'react-icons/md';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { IoStarSharp } from 'react-icons/io5';

const FlightCard = () => {
  return (
    <div className="bg-white shadow px-10 py-[25px] rounded-[15px]">
      <div className="flex justify-between items-center border-dashed">
        <div className="flex items-center gap-x-[15px]">
          <img
            src="assets/img/garuda_indonesia_symbol.png"
            alt="Airline Logo"
            className="w-12 h-12 object-contain"
          />
          <div className="flex gap-1 flex-col">
            <h2 className="text-[20px] text-[#292929] font-semibold">Garuda Indonesia</h2>
            <p className="text-[16px] text-[#29292950]">UA 4556, AC 3289</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[20px] text-[#292929] font-semibold">1h 06m</p>
          <p className="text-[16px] text-[#29292950]">Direct</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[20px] text-[#292929] font-semibold">$200</p>
          <p className="text-[16px] text-[#29292950]">Ticket Price</p>
        </div>
        <div>
          <button className="bg-white text-[#292929] text-[16px] font-semibold px-6 py-[14px] rounded-[10px] border-[2px] border-[#292929]">
            View Deal
          </button>
        </div>
      </div>

      <div className="h-[2px] bg-dashed-line my-10"></div>

      <div className="flex items-center justify-between">
        <p className="text-[18px] text-[#292929] font-semibold">Take - Off</p>
        <div className="flex items-center">
          <p className="text-[20px] text-[#292929] font-semibold">05:20 AM</p>
          <div className="border-l border-gray-300 h-6 mx-[15px]"></div>
          <p className="text-[20px] text-[#29292950] font-semibold">Bali</p>
        </div>

        <div className="flex flex-col items-center gap-y-[10px]">
          <img src="assets/img/airplane-mark.png" alt="No find the image" />
          <p className="text-[16px] text-[#292929] font-semibold">Direct Flight</p>
        </div>

        <div className="flex items-center">
          <p className="text-[20px] text-[#292929] font-semibold">10:26 AM</p>
          <div className="border-l border-gray-300 h-6 mx-[15px]"></div>
          <p className="text-[20px] text-[#29292950] font-semibold">London</p>
        </div>
        <p className="text-[18px] text-[#292929] font-semibold">Landing</p>
      </div>

      <div className="border-dashed bg-[#F1F7FF] rounded-[5px] py-[5px] mt-10">
        <p className="flex items-center justify-center text-[#1e1e1e] font-semibold text-center gap-x-2">
          <AiOutlineExclamationCircle color="#1e1e1e" />
          Included: Personal Item, Cabin Bag, Checked Bag
        </p>
      </div>

      <div className="h-[2px] bg-dashed-line my-10"></div>

      <div className="flex justify-between">
        <p className="text-[18px] text-[#292929] font-semibold">Direct Flight</p>
        <div className="flex">
          <p className="text-[18px] text-[#292929] font-semibold">Flight Type</p>
          <p className="text-[18px] text-[#29292950] font-semibold">: One Way</p>
        </div>
        <div className="flex items-center gap-x-1">
          <p className="text-[18px] text-[#29292950] font-semibold">Airlines Rate: </p>
          <IoStarSharp color="#FF9900" />
          <p className="text-[18px] text-[#292929] font-semibold"> 8.5 </p>
          <p className="text-[18px] text-[#29292950] font-semibold">(1290 Reviews)</p>
        </div>
        <button className="flex items-center text-[18px] text-[#292929] font-semibold">
          <MdOutlineBookmark color="#292929" />
          Bookmark Deal
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
