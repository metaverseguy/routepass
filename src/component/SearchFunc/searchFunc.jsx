import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { IoIosSearch } from 'react-icons/io';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

export default function searchFunc() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('economy');
  const [filterItem, setFilterItem] = useState('recommended');
  const [selectedTravelType, setSelectedTravelType] = useState({ name: 'Return', code: 'rt' });
  const [selectedTravelPurpose, setSelectedTravelPurpose] = useState({
    name: 'Economy',
    code: 'en',
  });

  const travelType = [
    { name: 'Return', code: 'rt' },
    { name: 'One Way', code: 'ow' },
    { name: 'Multi-City', code: 'mc' },
  ];
  const travelPurpose = [
    { name: 'Economy', code: 'en' },
    { name: 'Business', code: 'bn' },
    { name: 'First Class', code: 'fc' },
  ];

  return (
    <div className="flex justify-center items-center bg-[#2B2B2B]">
      <div className="max-w-[1440px] w-full px-5 py-6 lg:px-14 lg-py-10 shadow-lg flex justify-center">
        <div className="flex flex-col gap-y-5 sm:gap-y-10 w-full">
          <div className="flex justify-center p-6 bg-[#1E1E1E] rounded-[9px]">
            <div className="flex flex-wrap items-center justify-center text-white rounded-lg w-4/5 gap-[5px]">
              <span className="font-semibold text-[10px] sm:text-[12px] 2xl:text-[0.8vw] max:text-[20px] flex items-center gap-[5px] text-nowrap">
                <IoIosSearch />
                Bali, (Denpasar) (DPS) - London Gatwick (LGW)
              </span>
              <span className="font-semibold text-[10px] sm:text-[12px] 2xl:text-[0.8vw] max:text-[20px]">
                •
              </span>
              <span className="font-semibold text-[10px] sm:text-[12px] 2xl:text-[0.8vw] max:text-[20px]">
                Mon, 05 Jun - Wed, 07 Jun
              </span>
              <span className="font-semibold text-[10px] sm:text-[12px] 2xl:text-[0.8vw] max:text-[20px]">
                •
              </span>
              <span className="font-semibold text-[10px] sm:text-[12px] 2xl:text-[0.8vw] max:text-[20px]">
                1 Children, 1 Adult
              </span>
              <span className="font-semibold text-[10px] sm:text-[12px] 2xl:text-[0.8vw] max:text-[20px]">
                •
              </span>
              <span className="font-semibold text-[10px] sm:text-[12px] 2xl:text-[0.8vw] max:text-[20px]">
                Business
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <div className="hidden sm:block">
              <div className="flex justify-between mb-5">
                <div className="gap-2 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="return"
                      name="trip"
                      value="return"
                      defaultChecked
                      className="accent-black"
                      onClick={() => setSelectedTravelType({ name: 'Return', code: 'rt' })}
                    />
                    <label
                      htmlFor="return"
                      className={`text-nowrap 2xl:text-[0.8vw] max:text-[20px] ${selectedTravelType.name === 'Return' ? 'text-white' : 'text-[#ffffff50]'}`}>
                      Return
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="one-way"
                      name="trip"
                      value="one-way"
                      className="accent-black"
                      onClick={() => setSelectedTravelType({ name: 'One Way', code: 'ow' })}
                    />
                    <label
                      htmlFor="one-way"
                      className={`text-nowrap 2xl:text-[0.8vw] max:text-[20px] ${selectedTravelType.name === 'One Way' ? 'text-white' : 'text-[#ffffff50]'}`}>
                      One Way
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="multi-city"
                      name="trip"
                      value="multi-city"
                      className="accent-black"
                      onClick={() => setSelectedTravelType({ name: 'Multi-City', code: 'mc' })}
                    />
                    <label
                      htmlFor="multi-city"
                      className={`text-nowrap 2xl:text-[0.8vw] max:text-[20px] ${selectedTravelType.name === 'Multi-City' ? 'text-white' : 'text-[#ffffff50]'}`}>
                      Multi-City
                    </label>
                  </div>
                </div>

                <div className="flex justify-center bg-[#F5F5F5] rounded-[500px]">
                  <button
                    className={`px-[30px] py-[3px] text-sm md:text-base rounded-[500px] transition-colors duration-300 2xl:text-[0.9vw] max:text-[22px] ${
                      activeTab === 'economy'
                        ? 'bg-[#1E1E1E] text-white'
                        : 'bg-[#F5F5F5] text-[#1E1E1E]'
                    }`}
                    onClick={() => setActiveTab('economy')}>
                    Economy
                  </button>
                  <button
                    className={`px-[30px] py-[3px] text-sm md:text-base rounded-[500px] transition-colors duration-300 2xl:text-[0.9vw] max:text-[22px] ${
                      activeTab === 'bussiness'
                        ? 'bg-[#1E1E1E] text-white'
                        : 'bg-[#F5F5F5] text-[#1E1E1E]'
                    }`}
                    onClick={() => setActiveTab('bussiness')}>
                    Bussiness
                  </button>
                  <button
                    className={`px-[30px] py-[3px] text-sm md:text-base rounded-[500px] text-nowrap transition-colors duration-300 2xl:text-[0.9vw] max:text-[22px] ${
                      activeTab === 'firstclass'
                        ? 'bg-[#1E1E1E] text-white'
                        : 'bg-[#F5F5F5] text-[#1E1E1E]'
                    }`}
                    onClick={() => setActiveTab('firstclass')}>
                    First Class
                  </button>
                </div>
              </div>
            </div>

            <div className="block sm:hidden w-full">
              <div className="flex justify-center items-stretch gap-[10px]">
                <Dropdown
                  variant="filled"
                  value={selectedTravelType}
                  onChange={(e) => setSelectedTravelType(e.value)}
                  options={travelType}
                  optionLabel="name"
                  className="w-full bg-[#f5f5f5] focus:shadow-none shadow-none text-left text-[#292929] text-sm"
                />
                <Dropdown
                  variant="filled"
                  value={selectedTravelPurpose}
                  onChange={(e) => setSelectedTravelPurpose(e.value)}
                  options={travelPurpose}
                  optionLabel="name"
                  className="w-full bg-[#f5f5f5] focus:shadow-none shadow-none text-left text-[#292929] text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row mb-5 gap-[10px]">
              <div className="flex gap-[10px] lg:flex-row flex-col w-full items-stretch justify-center content-stretch">
                <div className="flex flex-col sm:flex-row gap-[10px] basis-2/5">
                  <div className=" border-black p-5 bg-gray-100 rounded-[7px] text-left w-full basis-1/2">
                    <p className="text-xs 2xl:text-[0.9vw] max:text-[22px] text-left text-[#29292950]">
                      From
                    </p>
                    <input
                      type="text"
                      placeholder="From"
                      className="text-xs 2xl:text-[0.9vw] max:text-[22px] bg-gray-100 text-[#292929] w-full focus:outline-none"
                      defaultValue="Bali, (Denpasar) (DPS)"
                    />
                  </div>
                  <div className=" border-black p-5 bg-gray-100 rounded-[7px] w-full basis-1/2">
                    <p className="text-xs 2xl:text-[0.9vw] max:text-[22px] text-left text-[#29292950]">
                      To
                    </p>
                    <div className="flex relative">
                      <input
                        type="text"
                        placeholder="From"
                        className="text-xs 2xl:text-[0.9vw] max:text-[22px] bg-gray-100 text-[#292929] w-full focus:outline-none"
                        defaultValue="London Gatwick (LGW)"
                      />
                      <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center absolute lg:-top-[10px] lg:-left-[40px] md:-top-[10px] md:-left-[40px] -ml-4 md:ml-0 -top-[54px] left-[50%]">
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
                <div className="flex gap-[10px] flex-col sm:flex-row w-full basis-3/5">
                  <div className="flex gap-[10px] basis-2/3 w-full">
                    <div className=" border-black p-5 bg-gray-100 rounded-[7px] basis-1/2 text-left w-full">
                      <p className="text-xs 2xl:text-[0.9vw] max:text-[22px] text-left text-[#29292950]">
                        Depart
                      </p>
                      <input
                        type="text"
                        placeholder="From"
                        className="text-xs 2xl:text-[0.9vw] max:text-[22px] bg-gray-100 text-[#292929] w-full focus:outline-none"
                        defaultValue="05/06/2024"
                      />
                    </div>
                    <div className=" border-black p-5 bg-gray-100 rounded-[7px] basis-1/2 text-left w-full">
                      <p className="text-xs 2xl:text-[0.9vw] max:text-[22px] text-left text-[#29292950]">
                        Return
                      </p>
                      <input
                        type="text"
                        placeholder="From"
                        className="text-xs 2xl:text-[0.9vw] max:text-[22px] bg-gray-100 text-[#292929] w-full focus:outline-none"
                        defaultValue="07/06/2024"
                      />
                    </div>
                  </div>
                  <div className=" border-black p-5 bg-gray-100 rounded-[7px] text-left basis-1/3 w-full">
                    <p className="text-xs 2xl:text-[0.9vw] max:text-[22px] text-left text-[#29292950]">
                      Travellers
                    </p>
                    <input
                      type="text"
                      placeholder="From"
                      className="text-xs 2xl:text-[0.9vw] max:text-[22px] bg-gray-100 text-[#292929] w-full focus:outline-none"
                      defaultValue="1Children, 1Adult"
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate('/flgihtsearch')}
                className="flex-1 text-white 2xl:text-[0.9vw] max:text-[22px] md:py-5 py-4 px-5 bg-[#1E1E1E] rounded-[7px] flex justify-center items-center">
                <BiSearch color="white" /> Search
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-[15px]">
              <div className="flex flex-wrap gap-[15px]">
                <p className="text-[#9f9f9f] text-sm">Popular Filters:</p>
                <button
                  className={`text-sm rounded ${
                    filterItem === 'recommended' ? 'text-[#ffffff] underline' : 'text-[#ffffff50]'
                  }`}
                  onClick={() => setFilterItem('recommended')}>
                  Recommended
                </button>
                <button
                  className={`text-sm rounded ${
                    filterItem === 'affordable' ? 'text-[#ffffff] underline' : 'text-[#ffffff50]'
                  }`}
                  onClick={() => setFilterItem('affordable')}>
                  Most Affordable
                </button>
                <button
                  className={`text-sm rounded ${
                    filterItem === 'bestreview' ? 'text-[#ffffff] underline' : 'text-[#ffffff50]'
                  }`}
                  onClick={() => setFilterItem('bestreview')}>
                  Best Review
                </button>
                <button
                  className={`text-sm rounded ${
                    filterItem === 'nonstopflight' ? 'text-[#ffffff] underline' : 'text-[#ffffff50]'
                  }`}
                  onClick={() => setFilterItem('nonstopflight')}>
                  Non-Stop Flights
                </button>

                <button
                  className={`text-sm rounded ${
                    filterItem === 'shortestduration'
                      ? 'text-[#ffffff] underline'
                      : 'text-[#ffffff50]'
                  }`}
                  onClick={() => setFilterItem('shortestduration')}>
                  Shortest Duration
                </button>
                <button
                  className={`text-sm rounded ${
                    filterItem === 'flexibledate' ? 'text-[#ffffff] underline' : 'text-[#ffffff50]'
                  }`}
                  onClick={() => setFilterItem('flexibledate')}>
                  Flexible Dates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
