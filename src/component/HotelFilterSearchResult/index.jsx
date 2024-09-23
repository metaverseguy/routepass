import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { TbAlignCenter } from 'react-icons/tb';
import { DealCard } from '../Cards/DealCard';
import HotelSearchCard from '../Cards/HotelSearchCard';
import { GiSettingsKnobs } from 'react-icons/gi';
import { Dropdown } from 'primereact/dropdown';
import { HotelFilterSearchBar } from '../Bars/HotelFilterSearchBar';
import { useState } from 'react';
import { BiX } from 'react-icons/bi';

export const HotelFilterSearchResult = () => {
  const [flightTypeValue, setFlightTypeValue] = useState({
    name: 'Cheapest',
    code: 'cp',
    price: '$200',
    time: '- 1h 06m',
  });
  const [visibleFilterSetting, setVisibleFilterSetting] = useState('desktop');

  const flightType = [
    { name: 'Cheapest', code: 'cp', price: '$200', time: '- 1h 06m' },
    { name: 'Best', code: 'bt', price: '$200', time: '- 1h 06m' },
    { name: 'Quickest', code: 'qk', price: '$200', time: '- 1h 06m' },
  ];

  return (
    <div className={`px-5 md:px-[60px] py-10 md:py-10 flex lg:gap-[20px] w-full`}>
      <div className="w-1/3 hidden xl:block">
        <HotelFilterSearchBar visible={'desktop'} />
      </div>
      {visibleFilterSetting === 'mobile' && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          // onClick={() => setVisibleFilterSetting('desktop')}
        />
      )}
      <div className={`${visibleFilterSetting === 'mobile' ? 'block' : 'hidden'}`}>
        <div
          className={`h-auto ${visibleFilterSetting === 'mobile' ? 'w-full absolute block top-0 left-1/2 sm:left-auto transform -translate-x-1/2 sm:translate-x-0 sm:right-0 z-50 sm:w-1/2 max-w-[324px]' : visibleFilterSetting === 'desktop' ? '' : 'hidden'}`}>
          <div className="bg-white w-full  px-6">
            <div className=" py-5 border-b flex justify-between">
              <p
                className="flex items-center bg-white gap-1"
                onClick={() => setVisibleFilterSetting('mobile')}>
                <div className="transform rotate-90">
                  <GiSettingsKnobs />
                </div>
                <p className="font-semibold text-[#292929] text-[12px] sm:text-[16px]">
                  Filters & Settings
                </p>
              </p>
              <button onClick={() => setVisibleFilterSetting('desktop')}>
                <BiX size={25} />
              </button>
            </div>
          </div>
          <HotelFilterSearchBar visible={visibleFilterSetting} />
        </div>
      </div>
      <div className="flex flex-col w-full gap-y-10">
        <div className="flex flex-col gap-y-5">
          <div className="block lg:hidden">
            <div className="flex gap-[10px]">
              <button
                className="flex w-full items-center bg-white gap-1 px-5 py-4 rounded-[7px] sm:rounded-[10px] shadow"
                onClick={() => setVisibleFilterSetting('mobile')}>
                <div className="transform rotate-90">
                  <GiSettingsKnobs />
                </div>
                <p className="font-semibold text-[#292929] text-[12px] sm:text-[16px] ">
                  Filters & Settings
                </p>
              </button>
              <div className="w-full bg-white shadow rounded-[7px] sm:rounded-[10px] flex justify-between items-center pr-3">
                <Dropdown
                  variant="filled"
                  value={flightTypeValue}
                  onChange={(e) => setFlightTypeValue(e.value)}
                  options={flightType}
                  optionLabel="name"
                  className="h-full items-center bg-[#ffffff] text-left focus:shadow-none shadow-none"
                />
                <div className="flex gap-2">
                  <p className=" text-sm text-[#292929] font-semibold">{flightTypeValue.price}</p>
                  <p className=" text-sm text-[#29292950] font-semibold text-nowrap">
                    {flightTypeValue.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex px-5 py-3 bg-white shadow justify-between rounded-[5px] sm:rounded-[10px]">
            <span className="text-[#29292950] text-[8px] sm:text-sm">1820 Flights Found</span>
            <div className="flex items-center">
              <AiOutlineExclamationCircle color="#1e1e1e" />
              <span className="text-[#1e1e1e] text-[8px] sm:text-sm">
                Additional Bag Fees May Apply
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center justify-between bg-white px-5 py-[17px] rounded-lg shadow">
              <div className="flex flex-col">
                <p className="font-semibold text-[20px] text-[#292929]">Cheapest</p>
                <div className="flex">
                  <p className="text-[#292929] font-semibold text-[18px]">$250</p>
                  <p className="text-[#29292950] font-semibold text-[18px]">/Night</p>
                </div>
              </div>
              <div className="border-[2.5px] border-[#29292950] h-8 mx-4"></div>
              <div className="flex flex-col">
                <p className="font-semibold text-[20px] text-[#292929]">Best</p>
                <div className="flex">
                  <p className="text-[#292929] font-semibold text-[18px]">$250</p>
                  <p className="text-[#29292950] font-semibold text-[18px]">/Night</p>
                </div>
              </div>
              <div className="border-[2.5px] border-[#29292950] h-8 mx-4"></div>
              <div className="flex flex-col">
                <p className="font-semibold text-[20px] text-[#292929]">Recommendations</p>
                <div className="flex">
                  <p className="text-[#292929] font-semibold text-[18px]">$250</p>
                  <p className="text-[#29292950] font-semibold text-[18px]">/Night</p>
                </div>
              </div>
              <div className="border-[2.5px] border-[#29292950] h-8 mx-4"></div>
              <div className="flex items-center justify-center">
                <TbAlignCenter color="#29292950" />
                <span className="text-[#29292950] text-[16px]">Other Sort</span>
              </div>
            </div>
          </div>
          <HotelSearchCard />
          <HotelSearchCard />
          <HotelSearchCard />
          <button className="bg-[#1E1E1E] text-white py-[10px] sm:py-[11px] md:py-4 rounded-[10px] text-[8px] sm:text-sm md:text-[20px] font-semibold">
            Load More
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center sm:justify-between items-center">
            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-[#292929] font-semibold text-[28px] sm::text-[32px]">
                Flight To Bali
              </h1>
              <p className="text-[#29292950] font-semibold text-[18px]">
                Mon, 05 Jun - Wed, 07 Jun
              </p>
            </div>
            <div className="hidden sm:block">
              <button className="px-6 py-3 bg-[#1e1e1e] text-[16px] text-white rounded-[10px]">
                Find Flights
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1 relative rounded-2xl overflow-hidden border basis-1/3">
                <DealCard
                  city="Florence"
                  country="Italy"
                  price="$250"
                  startDate="Wed, 23 Sep"
                  endDate="Wed, 30 Sep"
                  airInfo="LTN - TIA with Emirates Air UK"
                  imgURL="assets/img/florence.png"
                />
              </div>
              <div className="flex-1 relative rounded-2xl overflow-hidden border basis-1/3">
                <DealCard
                  city="Bali"
                  country="Indonesia"
                  price="$250"
                  startDate="Wed, 23 Sep"
                  endDate="Wed, 30 Sep"
                  airInfo="LTN - TIA with Emirates Air UK"
                  imgURL="assets/img/bali.png"
                />
              </div>
              <div className="flex-1 relative rounded-2xl overflow-hidden border basis-1/3">
                <DealCard
                  city="Bali"
                  country="Indonesia"
                  price="$250"
                  startDate="Wed, 23 Sep"
                  endDate="Wed, 30 Sep"
                  airInfo="LTN - TIA with Emirates Air UK"
                  imgURL="assets/img/bali.png"
                />
              </div>
            </div>
          </div>
          <div className="block sm:hidden">
            <div className="flex justify-center">
              <button className="px-6 py-3 bg-[#1e1e1e] text-[16px] text-white rounded-[10px]">
                Find Hotels
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
