import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { IoIosSearch } from 'react-icons/io';

export default function searchFunc() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('economy');
  const [filterItem, setFilterItem] = useState('recommended');
  return (
    <div className="bg-[#2B2B2B] p-6 shadow-lg flex justify-center">
      <div className="w-[90%] flex flex-col">
        <div className="flex justify-center p-6 bg-[#1E1E1E]">
          <div className="flex items-center justify-center text-white rounded-lg w-4/5 whitespace-nowrap gap-1">
            <IoIosSearch />
            <span>Bali, (Denpasar) (DPS) - London Gatwick (LGW)</span>
            <span className="mx-1">•</span>
            <span>Mon, 05 Jun - Wed, 07 Jun</span>
            <span className="mx-1">•</span>
            <span>1 Children, 1 Adult</span>
            <span className="mx-1">•</span>
            <span>Business</span>
          </div>
        </div>
        <div className="flex justify-between m-5">
          <div className="gap-4 flex">
            <div>
              <input type="radio" id="return" name="trip" value="return" defaultChecked />
              <label htmlFor="return" className="ml-2 text-[#FFFFFF80]">
                Return
              </label>
            </div>
            <div>
              <input type="radio" id="one-way" name="trip" value="one-way" />
              <label htmlFor="one-way" className="ml-2 text-[#FFFFFF80]">
                One Way
              </label>
            </div>
            <div>
              <input type="radio" id="multi-city" name="trip" value="multi-city" />
              <label htmlFor="multi-city" className="ml-2 text-[#FFFFFF80]">
                Multi-City
              </label>
            </div>
          </div>

          <div className="flex justify-center bg-[#F5F5F5] rounded-[500px]">
            <button
              className={`px-[30px] py-[3px] rounded-[500px] transition-colors duration-300 ${
                activeTab === 'economy' ? 'bg-[#1E1E1E] text-white' : 'bg-[#F5F5F5] text-[#1E1E1E]'
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
          <div className="border-black p-5 bg-gray-100 rounded-[7px] w-full">
            <p className="text-xs text-left text-[#29292950]">From</p>
            <input
              type="text"
              placeholder="From"
              className="text-xs bg-gray-100 text-[#292929] w-full"
              defaultValue="Bali, (Denpasar) (DPS)"
            />
          </div>
          <div className="border-black p-5 bg-gray-100 rounded-[7px] w-full">
            <p className="text-xs text-left text-[#29292950]">To</p>
            <div>
              <input
                type="text"
                placeholder="To"
                className="text-xs bg-gray-100 text-[#292929] w-full"
                defaultValue="London Gatwick (LGW)"
              />
              <div className="absolute items-center justify-center -ml-10 -my-8">
                <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.91752 2.08132C9.81583 1.97603 9.75957 1.83502 9.76084 1.68865C9.76211 1.54228 9.82082 1.40226 9.92432 1.29876C10.0278 1.19526 10.1678 1.13655 10.3142 1.13528C10.4606 1.134 10.6016 1.19027 10.7069 1.29196L13.4981 4.08318C13.6027 4.18786 13.6615 4.32983 13.6615 4.47785C13.6615 4.62588 13.6027 4.76785 13.4981 4.87253L10.7069 7.66375C10.6016 7.76544 10.4606 7.8217 10.3142 7.82043C10.1678 7.81916 10.0278 7.76045 9.92432 7.65695C9.82082 7.55345 9.76211 7.41343 9.76084 7.26706C9.75957 7.12069 9.81583 6.97968 9.91752 6.87439L11.7558 5.0361H4.17152C4.02347 5.0361 3.88148 4.97728 3.77679 4.87259C3.6721 4.7679 3.61328 4.62591 3.61328 4.47785C3.61328 4.3298 3.6721 4.18781 3.77679 4.08312C3.88148 3.97843 4.02347 3.91961 4.17152 3.91961H11.7558L9.91752 2.08132ZM7.35742 8.78023C7.45911 8.67495 7.51538 8.53394 7.5141 8.38757C7.51283 8.2412 7.45412 8.10118 7.35062 7.99768C7.24712 7.89418 7.1071 7.83547 6.96073 7.83419C6.81436 7.83292 6.67335 7.88919 6.56806 7.99088L3.77685 10.7821C3.67219 10.8868 3.6134 11.0287 3.6134 11.1768C3.6134 11.3248 3.67219 11.4668 3.77685 11.5715L6.56806 14.3627C6.67335 14.4644 6.81436 14.5206 6.96073 14.5194C7.1071 14.5181 7.24712 14.4594 7.35062 14.3559C7.45412 14.2524 7.51283 14.1123 7.5141 13.966C7.51538 13.8196 7.45911 13.6786 7.35742 13.5733L5.51912 11.735H13.1034C13.2515 11.735 13.3935 11.6762 13.4982 11.5715C13.6028 11.4668 13.6617 11.3248 13.6617 11.1768C13.6617 11.0287 13.6028 10.8867 13.4982 10.782C13.3935 10.6773 13.2515 10.6185 13.1034 10.6185H5.51912L7.35742 8.78023Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="border-black p-5 bg-gray-100 rounded-[7px] w-full">
            <p className="text-xs text-left text-[#29292950]">Depart</p>
            <input
              type="text"
              placeholder="Depart Date"
              className="text-xs bg-gray-100 text-[#292929] w-full"
              defaultValue="05/06/2024"
            />
          </div>
          <div className="border-black p-5 bg-gray-100 rounded-[7px] w-full">
            <p className="text-xs text-left text-[#29292950]">Return</p>
            <input
              type="text"
              placeholder="Return Date"
              className="text-xs bg-gray-100 text-[#292929] w-full"
              defaultValue="07/06/2024"
            />
          </div>
          <div className="border-black p-5 bg-gray-100 rounded-[7px] w-full">
            <p className="text-xs text-left text-[#29292950]">Travellers</p>
            <input
              type="text"
              placeholder="Travellers"
              className="text-xs bg-gray-100 text-[#292929] w-full"
              defaultValue="1 Children, 1 Adult"
            />
          </div>
          <button
            onClick={() => navigate('/search')}
            className="text-white p-5 bg-[#1E1E1E] rounded-[7px] flex justify-center items-center">
            <BiSearch color="white" /> Search
          </button>
        </div>

        <div className="flex gap-[20px] text-sm">
          <p className="text-[#9f9f9f] text-xs">Popular Filters:</p>
          <div className="flex gap-[15px]">
            <button
              className={`text-xs rounded ${
                filterItem === 'recommended' ? 'text-[#ffffff] underline' : 'text-[#FFFFFF80]'
              }`}
              onClick={() => setFilterItem('recommended')}>
              Recommended
            </button>
            <button
              className={`text-xs rounded ${
                filterItem === 'affordable' ? 'text-[#2B2B2B] underline' : 'text-[#FFFFFF80]'
              }`}
              onClick={() => setFilterItem('affordable')}>
              Most Affordable
            </button>
            <button
              className={`text-xs rounded ${
                filterItem === 'bestreview' ? 'text-[#2B2B2B] underline' : 'text-[#FFFFFF80]'
              }`}
              onClick={() => setFilterItem('bestreview')}>
              Best Review
            </button>
            <button
              className={`text-xs rounded ${
                filterItem === 'nonstopflight' ? 'text-[#2B2B2B] underline' : 'text-[#FFFFFF80]'
              }`}
              onClick={() => setFilterItem('nonstopflight')}>
              Non-Stop Flights
            </button>
            <button
              className={`text-xs rounded ${
                filterItem === 'shortestduration' ? 'text-[#2B2B2B] underline' : 'text-[#FFFFFF80]'
              }`}
              onClick={() => setFilterItem('shortestduration')}>
              Shortest Duration
            </button>
            <button
              className={`text-xs rounded ${
                filterItem === 'flexibledate' ? 'text-[#2B2B2B] underline' : 'text-[#FFFFFF80]'
              }`}
              onClick={() => setFilterItem('flexibledate')}>
              Flexible Dates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
