import React, { useState } from 'react';

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('Economy');

  return (
    <div className="relative bg-cover bg-center w-4/5 top-[112px]">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-black text-center">
        <h1 className="text-5xl font-bold mb-2 text-white">Get exclusive flight offers</h1>
        <h2 className="text-2xl mb-8 text-white">wherever your journey takes you</h2>

        <div className="bg-white rounded-lg p-6 shadow-lg w-full">
          <div className="flex justify-between">
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

            <div className="flex justify-center">
              <div className="flex">
                <button
                  className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                    activeTab === 'Economy' ? 'bg-gray-200 text-black' : 'bg-white text-gray-600'
                  }`}
                  onClick={() => setActiveTab('Economy')}>
                  Economy
                </button>
                <button
                  className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                    activeTab === 'Business' ? 'bg-black text-white' : 'bg-white text-gray-600'
                  }`}
                  onClick={() => setActiveTab('Business')}>
                  Business
                </button>
                <button
                  className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                    activeTab === 'First Class'
                      ? 'bg-gray-200 text-black'
                      : 'bg-white text-gray-600'
                  }`}
                  onClick={() => setActiveTab('First Class')}>
                  First Class
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="From"
              className="border rounded-lg p-2"
              defaultValue="Bali, (Denpasar) (DPS)"
            />
            <input
              type="text"
              placeholder="To"
              className="border rounded-lg p-2"
              defaultValue="London Gatwick (LGW)"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="date" className="border rounded-lg p-2" />
            <input type="date" className="border rounded-lg p-2" />
          </div>

          <div className="flex justify-between mt-4">
            <span>Popular Filters:</span>
            <div className="flex space-x-2">
              <button className="text-sm bg-gray-200 rounded px-2">Recommended</button>
              <button className="text-sm bg-gray-200 rounded px-2">Most Affordable</button>
              <button className="text-sm bg-gray-200 rounded px-2">Best Review</button>
              <button className="text-sm bg-gray-200 rounded px-2">Non-Stop Flights</button>
              <button className="text-sm bg-gray-200 rounded px-2">Shortest Duration</button>
              <button className="text-sm bg-gray-200 rounded px-2">Flexible Dates</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
