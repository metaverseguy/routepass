import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { IoIosSearch } from 'react-icons/io';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

export default function HotelSearchOption() {
  const navigate = useNavigate();
  const [filterItem, setFilterItem] = useState('recommended');
  const [selectedTravelType, setSelectedTravelType] = useState({ name: 'Hotel', code: 'ht' });

  const travelType = [
    { name: 'Hotel', code: 'ht' },
    { name: 'Villa', code: 'vl' },
    { name: 'Resort', code: 'rs' },
    { name: 'Residence', code: 'rd' },
  ];

  return (
    <div className="flex items-center w-full bg-[#2B2B2B] justify-center">
      <div className="max-w-[1440px] w-full px-5 py-6 lg:px-14 lg-py-10 shadow-lg flex justify-center">
        <div className="w-full flex flex-col gap-y-5 sm:gap-y-10">
          <div className="flex justify-center p-6 bg-[#1E1E1E] rounded-[9px]">
            <div className="flex flex-wrap items-center justify-center text-white rounded-lg w-4/5 gap-[5px]">
              <span className="font-semibold text-[10px] sm:text-[12px] flex items-center gap-[5px] text-nowrap">
                <IoIosSearch />
                Bali, Denpasar
              </span>
              <span className="font-semibold text-[10px] sm:text-[12px]">•</span>
              <span className="font-semibold text-[10px] sm:text-[12px]">
                Mon, 05 Jun - Wed, 07 Jun
              </span>
              <span className="font-semibold text-[10px] sm:text-[12px]">•</span>
              <span className="font-semibold text-[10px] sm:text-[12px]">2 Persons , 2 Rooms</span>
              <span className="font-semibold text-[10px] sm:text-[12px]">•</span>
              <span className="font-semibold text-[10px] sm:text-[12px]">Hotel</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <div className="hidden md:block">
              <div className="flex justify-between mb-5">
                <div className="gap-3 flex justify-between items-center">
                  <div
                    className="flex items-center gap-2"
                    onClick={() => setSelectedTravelType({ name: 'Hotel', code: 'ht' })}>
                    <input
                      type="radio"
                      id="Hotel"
                      name="trip"
                      value="Hotel"
                      defaultChecked
                      className="accent-black"
                    />
                    <label
                      htmlFor="Hotel"
                      className={`text-nowrap 2xl:text-[0.8vw] max:text-[20px] ${selectedTravelType.name === 'Hotel' ? 'text-white' : 'text-[#ffffff50]'}`}>
                      Hotel
                    </label>
                  </div>
                  <div
                    className="flex items-center gap-2"
                    onClick={() => setSelectedTravelType({ name: 'Villa', code: 'vl' })}>
                    <input
                      type="radio"
                      id="Villa"
                      name="trip"
                      value="Villa"
                      className="accent-black"
                    />
                    <label
                      htmlFor="Villa"
                      className={`text-nowrap 2xl:text-[0.8vw] max:text-[20px] ${selectedTravelType.name === 'Villa' ? 'text-white' : 'text-[#ffffff50]'}`}>
                      Villa
                    </label>
                  </div>
                  <div
                    className="flex items-center gap-2"
                    onClick={() => setSelectedTravelType({ name: 'Resort', code: 'rs' })}>
                    <input
                      type="radio"
                      id="Resort"
                      name="trip"
                      value="Resort"
                      className="accent-black"
                    />
                    <label
                      htmlFor="Resort"
                      className={`text-nowrap 2xl:text-[0.8vw] max:text-[20px] ${selectedTravelType.name === 'Resort' ? 'text-white' : 'text-[#ffffff50]'}`}>
                      Resort
                    </label>
                  </div>
                  <div
                    className="flex items-center gap-2"
                    onClick={() => setSelectedTravelType({ name: 'Residence', code: 'rd' })}>
                    <input
                      type="radio"
                      id="Residence"
                      name="trip"
                      value="Residence"
                      className="accent-black"
                    />
                    <label
                      htmlFor="Residence"
                      className={`text-nowrap 2xl:text-[0.8vw] max:text-[20px] ${selectedTravelType.name === 'Residence' ? 'text-white' : 'text-[#ffffff50]'}`}>
                      Residence
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="block md:hidden w-full">
              <div className="flex justify-center items-stretch gap-[10px]">
                <Dropdown
                  variant="filled"
                  value={selectedTravelType}
                  onChange={(e) => setSelectedTravelType(e.value)}
                  options={travelType}
                  optionLabel="name"
                  className="w-full bg-[#f5f5f5] focus:shadow-none shadow-none text-left text-[#292929] text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row mb-5 gap-[10px]">
              <div className="flex gap-[10px] lg:flex-row flex-col w-full items-stretch justify-center content-stretch">
                <div className="flex flex-col md:flex-row gap-[10px] basis-2/5">
                  <div className=" border-black p-5 bg-gray-100 rounded-[7px] text-left w-full flex flex-col gap-y-2">
                    <p className="text-xs 2xl:text-[0.9vw] max:text-[22px] text-left text-[#29292950]">
                      Where to?
                    </p>
                    <input
                      type="text"
                      placeholder="From"
                      className="text-xs 2xl:text-[0.9vw] max:text-[22px] bg-gray-100 text-[#292929] w-full focus:outline-none"
                      defaultValue="Select your destination or Name"
                    />
                  </div>
                  <div className="border-black p-5 bg-gray-100 rounded-[7px] text-left w-full hidden md:flex lg:hidden flex-col gap-y-2">
                    <p className="text-xs 2xl:text-[0.9vw] max:text-[22px] text-left text-[#29292950] text-nowrap">
                      Guests & Rooms
                    </p>
                    <input
                      type="text"
                      placeholder="From"
                      className="text-xs 2xl:text-[0.9vw] max:text-[22px] bg-gray-100 text-[#292929] w-full focus:outline-none"
                      defaultValue="2 Persons, 2 Rooms"
                    />
                  </div>
                </div>
                <div className="flex gap-[10px] flex-col md:flex-row w-full basis-3/5">
                  <div className="flex gap-[10px] w-full lg:w-2/3">
                    <div className=" border-black p-5 bg-gray-100 rounded-[7px] basis-1/2 text-left w-full flex flex-col gap-y-2">
                      <p className="text-xs 2xl:text-[0.9vw] max:text-[22px] text-left text-[#29292950]">
                        Check In
                      </p>
                      <input
                        type="text"
                        placeholder="From"
                        className="text-xs 2xl:text-[0.9vw] max:text-[22px] bg-gray-100 text-[#292929] w-full focus:outline-none"
                        defaultValue="04/06/2024"
                      />
                    </div>
                    <div className=" border-black p-5 bg-gray-100 rounded-[7px] basis-1/2 text-left w-full  flex flex-col gap-y-2">
                      <p className="text-xs 2xl:text-[0.9vw] max:text-[22px] text-left text-[#29292950]">
                        Check Out
                      </p>
                      <input
                        type="text"
                        placeholder="From"
                        className="text-xs 2xl:text-[0.9vw] max:text-[22px] bg-gray-100 text-[#292929] w-full focus:outline-none"
                        defaultValue="05/06/2024"
                      />
                    </div>
                  </div>
                  <div className=" border-black p-5 bg-gray-100 rounded-[7px] text-left w-full md:w-1/3 flex md:hidden lg:flex flex-col gap-y-2">
                    <p className="text-xs 2xl:text-[0.9vw] max:text-[22px] text-left text-[#29292950] text-nowrap">
                      Guests & Rooms
                    </p>
                    <input
                      type="text"
                      placeholder="From"
                      className="text-xs 2xl:text-[0.9vw] max:text-[22px] bg-gray-100 text-[#292929] w-full focus:outline-none"
                      defaultValue="2 Persons, 2 Rooms"
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate('/hotelsearch')}
                className="flex-1 2xl:text-[0.9vw] max:text-[22px] text-white md:py-5 py-4 px-5 bg-[#1E1E1E] rounded-[7px] flex justify-center items-center">
                <BiSearch color="white" /> Search
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-[15px]">
              <div className="flex flex-wrap gap-[15px]">
                <p className="text-[#9f9f9f] text-xs 2xl:text-[0.7vw] max:text-[18px]">
                  Popular Filters:
                </p>
                <button
                  className={`text-xs 2xl:text-[0.7vw] max:text-[18px] rounded ${
                    filterItem === 'recommended' ? 'text-[#ffffff] underline' : 'text-[#ffffff50]'
                  }`}
                  onClick={() => setFilterItem('recommended')}>
                  Recommended
                </button>
                <button
                  className={`text-xs 2xl:text-[0.7vw] max:text-[18px] rounded ${
                    filterItem === 'airport' ? 'text-[#ffffff] underline' : 'text-[#ffffff50]'
                  }`}
                  onClick={() => setFilterItem('airport')}>
                  Closest to the Airport
                </button>
                <button
                  className={`text-xs 2xl:text-[0.7vw] max:text-[18px] rounded ${
                    filterItem === 'bestreview' ? 'text-[#ffffff] underline' : 'text-[#ffffff50]'
                  }`}
                  onClick={() => setFilterItem('bestreview')}>
                  Best Review
                </button>
                <button
                  className={`text-xs 2xl:text-[0.7vw] max:text-[18px] rounded ${
                    filterItem === 'swimming' ? 'text-[#ffffff] underline' : 'text-[#ffffff50]'
                  }`}
                  onClick={() => setFilterItem('swimming')}>
                  Swimming Pool Available
                </button>

                <button
                  className={`text-xs 2xl:text-[0.7vw] max:text-[18px] rounded ${
                    filterItem === 'fivestar' ? 'text-[#ffffff] underline' : 'text-[#ffffff50]'
                  }`}
                  onClick={() => setFilterItem('fivestar')}>
                  Five Star Only Hotels
                </button>
                <button
                  className={`text-xs 2xl:text-[0.7vw] max:text-[18px] rounded ${
                    filterItem === 'threestars' ? 'text-[#ffffff] underline' : 'text-[#ffffff50]'
                  }`}
                  onClick={() => setFilterItem('threestars')}>
                  Three Stars
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
