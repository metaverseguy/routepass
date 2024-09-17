import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('economy');
  const [filterItem, setFilterItem] = useState('recommended');

  return (
    <div className="relative bg-cover bg-center w-4/5 top-[112px]">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-black text-center">
        <h1 className="text-5xl font-bold mb-2 text-white">Get exclusive flight offers</h1>
        <h2 className="text-2xl mb-8 text-white">wherever your journey takes you</h2>

        <div className="bg-white rounded-lg p-6 shadow-lg w-auto">
          <div className="flex justify-between mb-5">
            <div className="gap-4 flex">
              <div>
                <input type="radio" id="return" name="trip" value="return" defaultChecked />
                <label htmlFor="return" className="ml-2">
                  Return
                </label>
              </div>
              <div>
                <input type="radio" id="one-way" name="trip" value="one-way" />
                <label htmlFor="one-way" className="ml-2">
                  One Way
                </label>
              </div>
              <div>
                <input type="radio" id="multi-city" name="trip" value="multi-city" />
                <label htmlFor="multi-city" className="ml-2">
                  Multi-City
                </label>
              </div>
            </div>

            <div className="flex justify-center bg-[#F5F5F5] rounded-[500px]">
              <button
                className={`px-[30px] py-[3px] rounded-[500px] transition-colors duration-300 ${
                  activeTab === 'economy'
                    ? 'bg-[#1E1E1E] text-white'
                    : 'bg-[#F5F5F5] text-[#1E1E1E]'
                }`}
                onClick={() => setActiveTab('economy')}>
                Economy
              </button>
              <button
                className={`px-[30px] py-[3px] rounded-[500px] transition-colors duration-300 ${
                  activeTab === 'bussiness'
                    ? 'bg-[#1E1E1E] text-white'
                    : 'bg-[#F5F5F5] text-[#1E1E1E]'
                }`}
                onClick={() => setActiveTab('bussiness')}>
                Bussiness
              </button>
              <button
                className={`px-[30px] py-[3px] rounded-[500px] transition-colors duration-300 ${
                  activeTab === 'firstclass'
                    ? 'bg-[#1E1E1E] text-white'
                    : 'bg-[#F5F5F5] text-[#1E1E1E]'
                }`}
                onClick={() => setActiveTab('firstclass')}>
                First Class
              </button>
            </div>
          </div>

          <div className="flex gap-[5px] mb-5">
            <div className=" border-black p-5 bg-gray-100 rounded-[7px]">
              <p className="text-xs text-left text-[#29292950]">From</p>
              <input
                type="text"
                placeholder="From"
                className="text-xs bg-gray-100 text-[#292929]"
                defaultValue="Bali, (Denpasar) (DPS)"
              />
            </div>
            <div className=" border-black p-5 bg-gray-100 rounded-[7px]">
              <p className="text-xs text-left text-[#29292950]">To</p>
              <input
                type="text"
                placeholder="From"
                className="text-xs bg-gray-100 text-[#292929]"
                defaultValue="London Gatwick (LGW)"
              />
            </div>
            <div className=" border-black p-5 bg-gray-100 rounded-[7px]">
              <p className="text-xs text-left text-[#29292950]">Depart</p>
              <input
                type="text"
                placeholder="From"
                className="text-xs bg-gray-100 text-[#292929]"
                defaultValue="05/06/2024"
              />
            </div>
            <div className=" border-black p-5 bg-gray-100 rounded-[7px]">
              <p className="text-xs text-left text-[#29292950]">Return</p>
              <input
                type="text"
                placeholder="From"
                className="text-xs bg-gray-100 text-[#292929]"
                defaultValue="07/06/2024"
              />
            </div>
            <div className=" border-black p-5 bg-gray-100 rounded-[7px]">
              <p className="text-xs text-left text-[#29292950]">Travellers</p>
              <input
                type="text"
                placeholder="From"
                className="text-xs bg-gray-100 text-[#292929]"
                defaultValue="1Children, 1Adult"
              />
            </div>
            <button className="text-white p-5 bg-[#1E1E1E] rounded-[7px] flex justify-center items-center">
              <BiSearch color="white" /> Search
            </button>
          </div>

          <div className="flex gap-[15px]">
            <p className="text-[#9f9f9f] text-xs">Popular Filters:</p>
            <div className="flex gap-[15px]">
              <button
                className={`text-xs rounded ${
                  filterItem === 'recommended' ? 'text-[#2B2B2B] underline' : 'text-[#9f9f9f]'
                }`}
                onClick={() => setFilterItem('recommended')}>
                Recommended
              </button>
              <button
                className={`text-xs rounded ${
                  filterItem === 'affordable' ? 'text-[#2B2B2B] underline' : 'text-[#9f9f9f]'
                }`}
                onClick={() => setFilterItem('affordable')}>
                Most Affordable
              </button>
              <button
                className={`text-xs rounded ${
                  filterItem === 'bestreview' ? 'text-[#2B2B2B] underline' : 'text-[#9f9f9f]'
                }`}
                onClick={() => setFilterItem('bestreview')}>
                Best Review
              </button>
              <button
                className={`text-xs rounded ${
                  filterItem === 'nonstopflight' ? 'text-[#2B2B2B] underline' : 'text-[#9f9f9f]'
                }`}
                onClick={() => setFilterItem('nonstopflight')}>
                Non-Stop Flights
              </button>
              <button
                className={`text-xs rounded ${
                  filterItem === 'shortestduration' ? 'text-[#2B2B2B] underline' : 'text-[#9f9f9f]'
                }`}
                onClick={() => setFilterItem('shortestduration')}>
                Shortest Duration
              </button>
              <button
                className={`text-xs rounded ${
                  filterItem === 'flexibledate' ? 'text-[#2B2B2B] underline' : 'text-[#9f9f9f]'
                }`}
                onClick={() => setFilterItem('flexibledate')}>
                Flexible Dates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
