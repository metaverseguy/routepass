import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { BiX } from 'react-icons/bi';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

const HotelSearchBar = () => {
  const navigate = useNavigate();
  const [filterItem, setFilterItem] = useState('recommended');
  const [selectedTravelType, setSelectedTravelType] = useState({ name: 'Hotel', code: 'ht' });

  const travelType = [
    { name: 'Hotel', code: 'ht' },
    { name: 'Villa', code: 'vl' },
    { name: 'Resort', code: 'rs' },
    { name: 'Residence', code: 'rd' },
  ];

  const searchResultArray = [
    // {
    //   from: 'Bali, (Denpasar) (DPS)',
    //   to: 'London Gatwick (LGW)',
    //   depart: '05/06/2024',
    //   travllers: '1 Children , 1 Adult',
    //   classType: 'Economy'
    // },
    // {
    //   from: 'Bali, (Denpasar) (DPS)',
    //   to: 'London Gatwick (LGW)',
    //   depart: '05/06/2024',
    //   travllers: '1 Children , 1 Adult',
    //   classType: 'Economy'
    // },
    // {
    //   from: 'Bali, (Denpasar) (DPS)',
    //   to: 'London Gatwick (LGW)',
    //   depart: '05/06/2024',
    //   travllers: '1 Children , 1 Adult',
    //   classType: 'Economy'
    // }
  ];

  return (
    <div className="-mt-[600px] md:-mt-[500px] flex flex-col items-center justify-center text-black text-center gap-20 w-full lg:px-12 lg:pt-28 px-5 pt-20 z-0">
      <p className="text-[36px] lg:text-[56px] text-center max-w-[880px] font-bold text-white">
        Get exclusive flight offers wherever your journey takes you
      </p>

      <div className="bg-white rounded-lg shadow-lg flex flex-col p-8 w-full gap-y-[10px]">
        <div className="hidden md:block">
          <div className="flex justify-between mb-5">
            <div className="gap-4 flex justify-center items-center">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="Hotel"
                  name="trip"
                  value="Hotel"
                  defaultChecked
                  className="accent-black"
                  onClick={() => setSelectedTravelType({ name: 'Hotel', code: 'ht' })}
                />
                <label
                  htmlFor="Hotel"
                  className={`text-nowrap text-base 2xl:text-[0.8vw] max:text-[20px] ${selectedTravelType.name === 'Hotel' ? 'c-chromaphobicblack' : 'c-chromaphobicblackhalf'}`}>
                  Hotel
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="Villa"
                  name="trip"
                  value="Villa"
                  className="accent-black"
                  onClick={() => setSelectedTravelType({ name: 'Villa', code: 'vl' })}
                />
                <label
                  htmlFor="Villa"
                  className={`text-nowrap text-base 2xl:text-[0.8vw] max:text-[20px] ${selectedTravelType.name === 'Villa' ? 'c-chromaphobicblack' : 'c-chromaphobicblackhalf'}`}>
                  Villa
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="Resort"
                  name="trip"
                  value="Resort"
                  className="accent-black"
                  onClick={() => setSelectedTravelType({ name: 'Resort', code: 'rs' })}
                />
                <label
                  htmlFor="Resort"
                  className={`text-nowrap text-base 2xl:text-[0.8vw] max:text-[20px] ${selectedTravelType.name === 'Resort' ? 'c-chromaphobicblack' : 'c-chromaphobicblackhalf'}`}>
                  Resort
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="Residence"
                  name="trip"
                  value="Residence"
                  className="accent-black"
                  onClick={() => setSelectedTravelType({ name: 'Residence', code: 'rd' })}
                />
                <label
                  htmlFor="Residence"
                  className={`text-nowrap text-base 2xl:text-[0.8vw] max:text-[20px] ${selectedTravelType.name === 'Residence' ? 'c-chromaphobicblack' : 'c-chromaphobicblackhalf'}`}>
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

        <div className="flex flex-col lg:flex-row mb-5 gap-[10px] w-full">
          <div className="flex gap-[10px] lg:flex-row flex-col w-full items-stretch justify-center">
            <div className="flex flex-col md:flex-row gap-[10px] basis-2/5">
              <div className=" border-black p-5 bg-gray-100 rounded-[7px] text-left w-full md:flex flex-col">
                <p className="text-base 2xl:text-[0.9vw] max:text-[22px] text-left text-[#29292950]">
                  Where to?
                </p>
                <input
                  type="text"
                  placeholder="From"
                  className="text-base 2xl:text-[0.9vw] max:text-[22px] bg-gray-100 text-[#292929] w-full focus:outline-none"
                  defaultValue="Select your destination or Name"
                />
              </div>
              <div className="hidden border-black p-5 bg-gray-100 rounded-[7px] text-left w-full md:flex lg:hidden flex-col">
                <p className="text-base 2xl:text-[0.9vw] max:text-[22px] text-left text-[#29292950] text-nowrap">
                  Guests & Rooms
                </p>
                <input
                  type="text"
                  placeholder="From"
                  className="text-base 2xl:text-[0.9vw] max:text-[22px] bg-gray-100 text-[#292929] w-full focus:outline-none"
                  defaultValue="2 Persons, 2 Rooms"
                />
              </div>
            </div>
            <div className="flex gap-[10px] flex-col lg:flex-row w-full basis-3/5">
              <div className="flex gap-[10px] w-full">
                <div className=" border-black p-5 bg-gray-100 rounded-[7px] basis-1/2 text-left w-full flex flex-col">
                  <p className="text-base 2xl:text-[0.9vw] max:text-[22px] text-left text-[#29292950]">
                    Check In
                  </p>
                  <input
                    type="text"
                    placeholder="From"
                    className="text-base 2xl:text-[0.9vw] max:text-[22px] bg-gray-100 text-[#292929] w-full focus:outline-none"
                    defaultValue="04/06/2024"
                  />
                </div>
                <div className=" border-black p-5 bg-gray-100 rounded-[7px] basis-1/2 text-left w-full flex flex-col">
                  <p className="text-base 2xl:text-[0.9vw] max:text-[22px] text-left text-[#29292950]">
                    Check Out
                  </p>
                  <input
                    type="text"
                    placeholder="From"
                    className="text-base 2xl:text-[0.9vw] max:text-[22px] bg-gray-100 text-[#292929] w-full focus:outline-none"
                    defaultValue="05/06/2024"
                  />
                </div>
              </div>
              <div className="border-black p-5 bg-gray-100 rounded-[7px] text-left basis-1/3 w-full flex md:hidden lg:flex flex-col">
                <p className="text-base 2xl:text-[0.9vw] max:text-[22px] text-left text-[#29292950] text-nowrap">
                  Guests & Rooms
                </p>
                <input
                  type="text"
                  placeholder="From"
                  className="text-base 2xl:text-[0.9vw] max:text-[22px] bg-gray-100 text-[#292929] w-full focus:outline-none"
                  defaultValue="2 Persons, 2 Rooms"
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate('/hotelsearch')}
            className="flex-1 text-base 2xl:text-[0.9vw] max:text-[22px] text-white md:py-5 py-4 px-5 bg-[#1E1E1E] rounded-[7px] flex justify-center items-center">
            <BiSearch color="white" /> Search
          </button>
        </div>

        {searchResultArray.length !== 0 ? (
          <div className="flex flex-col md:flex-row md:justify-between gap-[10px]">
            <div className="flex flex-col sm:flex-row gap-[10px]">
              <button
                onClick={() => navigate('/hotelsearch')}
                className="flex-1 md:flex-none text-white py-[14px] px-[24px] bg-[#1E1E1E] rounded-[7px] flex justify-center items-center">
                <BiPlus color="white" /> Add Another Field
              </button>
              <button
                onClick={() => navigate('/hotelsearch')}
                className="flex-1 md:flex-none text-white py-[14px] px-[24px] bg-[#c7c7c7] rounded-[7px] flex justify-center items-center">
                <BiX color="white" /> Clear All
              </button>
            </div>
            <button
              onClick={() => navigate('/hotelsearch')}
              className="flex-1 md:flex-none text-white py-[14px] px-[24px] bg-[#1E1E1E] rounded-[7px] flex justify-center items-center">
              <BiSearch color="white" /> Search
            </button>
          </div>
        ) : null}

        <div className="flex flex-col md:flex-row gap-[15px] w-full">
          <div className="flex flex-wrap gap-[15px]">
            <p className="text-[#9f9f9f] text-sm 2xl:text-[0.7vw] max:text-[18px]">
              Popular Filters:
            </p>
            <button
              className={`text-sm 2xl:text-[0.7vw] max:text-[18px] rounded ${
                filterItem === 'recommended' ? 'text-[#000000] underline' : 'text-[#9f9f9f]'
              }`}
              onClick={() => setFilterItem('recommended')}>
              Recommended
            </button>
            <button
              className={`text-sm 2xl:text-[0.7vw] max:text-[18px] rounded ${
                filterItem === 'airport' ? 'text-[#000000] underline' : 'text-[#9f9f9f]'
              }`}
              onClick={() => setFilterItem('airport')}>
              Closest to the Airport
            </button>
            <button
              className={`text-sm 2xl:text-[0.7vw] max:text-[18px] rounded ${
                filterItem === 'bestreview' ? 'text-[#000000] underline' : 'text-[#9f9f9f]'
              }`}
              onClick={() => setFilterItem('bestreview')}>
              Best Review
            </button>
            <button
              className={`text-sm 2xl:text-[0.7vw] max:text-[18px] rounded ${
                filterItem === 'swimming' ? 'text-[#000000] underline' : 'text-[#9f9f9f]'
              }`}
              onClick={() => setFilterItem('swimming')}>
              Swimming Pool Available
            </button>

            <button
              className={`text-sm 2xl:text-[0.7vw] max:text-[18px] rounded ${
                filterItem === 'fivestar' ? 'text-[#000000] underline' : 'text-[#9f9f9f]'
              }`}
              onClick={() => setFilterItem('fivestar')}>
              Five Star Only Hotels
            </button>
            <button
              className={`text-sm 2xl:text-[0.7vw] max:text-[18px] rounded ${
                filterItem === 'threestars' ? 'text-[#000000] underline' : 'text-[#9f9f9f]'
              }`}
              onClick={() => setFilterItem('threestars')}>
              Three Stars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchBar;
