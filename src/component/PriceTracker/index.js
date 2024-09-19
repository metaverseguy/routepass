import React, { useState } from 'react';
import Slider from 'react-slider'; // Make sure to install this package

const PriceTracker = () => {
  const [activeTab, setActiveTab] = useState('takeoff');
  return (
    <div className=" bg-white flex items-center justify-center rounded-lg shadow-md flex-col">
      <div className="p-6 w-full">
        <div className="flex items-center justify-between bg-[#F5F5F5] p-3 rounded-xl">
          <span className="text-lg font-semibold">Track Prices</span>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="border-b border-gray-300 my-4 p-4">
          <span className="text-lg font-semibold">Stops</span>
          <div className="mt-2">
            <label className="flex items-center">
              <input type="checkbox" name="direct" className="mr-2" />
              <span>Direct</span>
              <span className="ml-auto">from $280</span>
            </label>
            <label className="flex items-center mt-2">
              <input type="checkbox" name="oneStop" className="mr-2" />
              <span>1 stop</span>
              <span className="ml-auto">from $620</span>
            </label>
            <label className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" />
              <span>2+ stops</span>
              <span className="ml-auto">from $1280</span>
            </label>
          </div>
        </div>
      </div>
      <div className="p-4 w-full">
        <h2 className="text-lg font-bold">Times</h2>
        <div className="flex mb-4 p-2 bg-[#F5F5F5] justify-center">
          <button
            className={`w-1/2 px-4 py-2 rounded-l ${activeTab === 'takeoff' ? 'bg-black text-white' : 'bg-white'}`}
            onClick={() => setActiveTab('takeoff')}>
            Take-off
          </button>
          <button
            className={`w-1/2 px-4 py-2 rounded-r ${activeTab === 'landing' ? 'bg-black text-white' : 'bg-white'}`}
            onClick={() => setActiveTab('landing')}>
            Landing
          </button>
        </div>

        <div className="mb-4 flex flex-col">
          <div className="flex flex-col">
            <span>Take-off from (DPS)</span>
            <span>Mon 02:00 - Mon 10:00</span>
          </div>
          <Slider value={2} min={5} max={80} step={1} marks className="my-2" />
        </div>

        <div>
          <div className="flex flex-col">
            <span>Take-off from (LGW)</span>
            <span>Wed 02:00 - Wed 20:00</span>
          </div>
          <Slider value={0} min={0} max={24} step={1} marks className="my-2" />
        </div>
      </div>
    </div>
  );
};

export default PriceTracker;
