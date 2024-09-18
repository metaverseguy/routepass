import React from 'react';
import { MdOutlineBookmark } from 'react-icons/md';
import { IoIosAirplane } from 'react-icons/io';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { IoStarSharp } from 'react-icons/io5';

const FlightCard = () => {
  return (
    <div className="mx-auto bg-white shadow-md rounded-lg overflow-hidden w-2/3">
      <div className="items-center p-4 border-dashed justify-center grid grid-cols-4">
        <div className="flex items-center gap-1">
          <img src="https://via.placeholder.com/50" alt="Airline Logo" className="w-12 h-12" />
          <div className="flex gap-1 flex-col">
            <h2 className="text-lg font-semibold">Garuda Indonesia</h2>
            <p className="text-gray-500">UA 4556, AC 3289</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">1h 06m</p>
          <p className="text-gray-500">Direct</p>
        </div>
        <div>
          <p className="text-xl font-bold">$200</p>
          <p className="text-gray-500">Ticket Price</p>
        </div>
        <div>
          <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg">View Deal</button>
        </div>
      </div>

      <div className="h-0.5 bg-dashed-line"></div>

      <div className="flex items-center justify-between p-4">
        <p className="text-lg font-semibold">Take - Off</p>
        <p className="text-lg font-semibold">05:20 AM</p>
        <div className="absolute border-l border-gray-300 h-6"></div>
        <p className="text-sm text-gray-500">Bali</p>

        <div className="flex items-center">
          <div className="border-t border-gray-300 w-16 mx-2"></div>
          <div className="flex flex-col justify-center items-center">
            <IoIosAirplane />
            <span className="text-sm font-semibold">Direct Flight</span>
          </div>
          <div className="border-t border-gray-300 w-16 mx-2"></div>
        </div>

        <p className="text-lg font-semibold">10:26 PM</p>
        <div className="absolute border-l border-gray-300 h-6 mx-4"></div>
        <p className="text-sm text-gray-500">London</p>
        <p className="text-lg font-semibold">Landing</p>
      </div>

      <div className="p-4 border-dashed">
        <p className="flex items-center justify-center text-black bg-slate-400 p-2 rounded-xl text-center">
          <AiOutlineExclamationCircle />
          Included: Personal Item, Cabin Bag, Checked Bag
        </p>
      </div>

      <div className="h-0.5 bg-dashed-line"></div>

      <div className="flex justify-between p-4">
        <p className="font-semibold">Direct Flight</p>
        <p className="text-gray-500">Flight Type: One Way</p>
        <p className="text-gray-500 flex items-center justify-center">
          Airlines Rate: <IoStarSharp color="#FF9900" />
          8.5 (1290 Reviews)
        </p>
        <button className="flex items-center text-gray-500">
          <MdOutlineBookmark />
          Bookmark Deal
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
