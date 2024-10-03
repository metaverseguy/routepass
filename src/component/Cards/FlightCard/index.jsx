import React from 'react';
import { MdOutlineBookmark } from 'react-icons/md';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { IoStarSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const FlightCard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow px-4 py-[10px] sm:px-7 sm:py-4 md:px-10 md:py-[25px] rounded-[5px] sm:rounded-[10px] md:rounded-[15px]">
      <div className="flex justify-between items-center border-dashed">
        <div className="flex items-center gap-x-[15px]">
          <img
            src="assets/img/garuda_indonesia_symbol.png"
            alt="Airline Logo"
            className="w-5 h-5 sm:w-9 sm:h-9 md:w-12 md:h-12 object-contain"
          />
          <div className="flex gap-1 flex-col">
            <h2 className="text-[10px] sm:text-xs md:text-[16px] 2xl:text-[1.2vw] max:text-[28px] text-[#292929] font-semibold">
              Garuda Indonesia
            </h2>
            <p className="text-[8px] sm:text-[10px] md:text-[14px] 2xl:text-[0.9vw] max:text-[22px] text-[#29292950]">
              UA 4556, AC 3289
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[10px] sm:text-xs md:text-[16px] 2xl:text-[1vw] max:text-[24px] text-[#292929] font-semibold">
            1h 06m
          </p>
          <p className="text-[8px] sm:text-[10px] md:text-[14px] 2xl:text-[0.9vw] max:text-[22px] text-[#29292950]">
            Direct
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[10px] sm:text-xs md:text-[16px] 2xl:text-[1vw] max:text-[24px] text-[#292929] font-semibold">
            $200
          </p>
          <p className="text-[8px] sm:text-[10px] md:text-[14px] 2xl:text-[0.9vw] max:text-[22px] text-[#29292950]">
            Ticket Price
          </p>
        </div>
        <div>
          <button
            onClick={() => navigate('/flightdetail')}
            className="bg-white text-[#292929] text-[10px] sm:text-[12px] md:text-[14px] 2xl:text-[1vw] max:text-[24px] font-semibold px-[10px] py-[5px] sm:px-[17px] sm:py-[10px] md:px-6 md:py-[14px] rounded-[4px] sm:rounded-[7px] md:rounded-[10px] border-[0.6px] sm:border-[2px] border-[#292929]">
            View Deal
          </button>
        </div>
      </div>

      <div className="border border-dashed my-4 sm:my-7 md:my-10"></div>

      <div className="flex items-center justify-between">
        <p className="text-[7px] sm:text-[12px] md:text-[18px] 2xl:text-[1vw] max:text-[24px] text-[#292929] font-semibold">
          Take - Off
        </p>
        <div className="flex items-center">
          <p className="text-[8px] sm:textsm md:text-[20px] 2xl:text-[1vw] max:text-[24px] text-[#292929] font-semibold">
            05:20 AM
          </p>
          <div className="border-[0.4px] sm:border-[1.4px] md:border-[2px] border-gray-300 h-3 sm:h-5 md:h-6 mx-[6px] sm:mx-[10px] md:mx-[15px]"></div>
          <p className="text-[8px] sm:text-sm md:text-[20px] 2xl:text-[1vw] max:text-[24px] text-[#29292950] font-semibold">
            Bali
          </p>
        </div>

        <div className="flex flex-col items-center gap-y-[4px] sm:gap-y-[7px] md:gap-y-[10px]">
          <img
            src="assets/img/airplane-mark.png"
            alt="No find the image"
            className="w-[66px] sm:w-[114px] md:w-full h-[16px] sm:h-[28px] md:h-full"
          />
          <p className="hidden sm:block text-[6px] sm:text-[11px] md:text-[16px] 2xl:text-[0.9vw] max:text-[22px] text-[#292929] font-semibold">
            Direct Flight
          </p>
        </div>

        <div className="flex items-center">
          <p className="text-[8px] sm:textsm md:text-[20px] 2xl:text-[1vw] max:text-[24px] text-[#292929] font-semibold">
            10:26 AM
          </p>
          <div className="border-[0.4px] sm:border-[1.4px] md:border-[2px] border-gray-300 h-3 sm:h-5 md:h-6 mx-[6px] sm:mx-[10px] md:mx-[15px]"></div>
          <p className="text-[8px] sm:text-sm md:text-[20px] 2xl:text-[1vw] max:text-[24px] text-[#29292950] font-semibold">
            London
          </p>
        </div>
        <p className="text-[7px] sm:text-[12px] md:text-[18px] 2xl:text-[1vw] max:text-[24px] text-[#292929] font-semibold">
          Landing
        </p>
      </div>

      <p className="block sm:hidden text-[6px] sm:text-[11px] md:text-[16px] 2xl:text-[0.9vw] max:text-[22px] text-[#292929] font-semibold">
        Direct Flight
      </p>

      <div className="border-dashed bg-[#F1F7FF] rounded-[5px] py-[2px] sm:py-[5px] mt-4 sm:mt-7 md:mt-10">
        <p className="flex items-center justify-center text-[#1e1e1e] font-semibold text-center gap-x-2 text-[10px] sm:text-[10px] md:text-sm 2xl:text-[0.8vw] max:text-[20px]">
          <AiOutlineExclamationCircle color="#1e1e1e" />
          Included: Personal Item, Cabin Bag, Checked Bag
        </p>
      </div>

      <div className="border border-dashed my-4 sm:my-7 md:my-10"></div>

      <div className="flex justify-between">
        <p className="text-[7px] sm:text-[12px] md:text-[18px] 2xl:text-[1vw] max:text-[24px] text-[#292929] font-semibold">
          Direct Flight
        </p>
        <div className="flex">
          <p className="text-[7px] sm:text-[12px] md:text-[18px] 2xl:text-[1vw] max:text-[24px] text-[#292929] font-semibold">
            Flight Type
          </p>
          <p className="text-[7px] sm:text-[12px] md:text-[18px] 2xl:text-[1vw] max:text-[24px] text-[#29292950] font-semibold">
            : One Way
          </p>
        </div>
        <div className="flex items-center gap-x-1">
          <p className="text-[7px] sm:text-[12px] md:text-[18px] 2xl:text-[1vw] max:text-[24px] text-[#29292950] font-semibold">
            Airlines Rate:
          </p>
          <div className="text-[7px] sm:text-[12px] md:text-[18px]">
            <IoStarSharp color="#FF9900" />
          </div>
          <p className="text-[7px] sm:text-[12px] md:text-[18px] 2xl:text-[1vw] max:text-[24px] text-[#292929] font-semibold">
            8.5
          </p>
          <p className="text-[7px] sm:text-[12px] md:text-[18px] 2xl:text-[1vw] max:text-[24px] text-[#29292950] font-semibold">
            (1290 Reviews)
          </p>
        </div>
        <button className="flex items-center text-[7px] sm:text-[12px] md:text-[18px] 2xl:text-[1vw] max:text-[24px] text-[#292929] font-semibold">
          <MdOutlineBookmark color="#292929" />
          Bookmark Deal
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
