import React, { useState } from 'react';
import NotificationBanner from '../NotificationBanner';
import { TfiAlignJustify } from 'react-icons/tfi';
import { GoTriangleDown } from 'react-icons/go';
import { RiGlobalFill } from 'react-icons/ri';
import { BiSolidPlaneAlt } from 'react-icons/bi';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('flights');
  return (
    <>
      <NotificationBanner />
      <nav className="bg-[#1E1E1E] text-white flex items-center justify-between p-4">
        <div className="flex items-center gap-1">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23 7.76568H15.2071V0.0268555H7.73882C7.73882 4.30215 4.27529 7.76568 0 7.76568V15.2339H7.73882V22.9727H15.2071C15.2071 18.6974 18.7247 15.2339 23 15.2339V7.76568Z"
              fill="white"
            />
          </svg>
          <span className="text-[26px] font-bold">RoutePass</span>
        </div>
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === 'flights' ? 'bg-gray-800 text-white' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('flights')}>
            <span className="flex items-center">
              <BiSolidPlaneAlt />
              Flights
            </span>
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === 'hotels' ? 'bg-gray-800 text-white' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('hotels')}>
            Hotels
          </button>
        </div>
        <div className="flex gap-6 text-sm items-center">
          <div className="relative">
            <button className="flex items-center">
              <RiGlobalFill color="white" />
              <span>English</span>
              <GoTriangleDown />
            </button>
          </div>
          <a href="/" className="hover:text-gray-400">
            Bookmark
          </a>
          <button className="flex items-center">
            <img src="path/to/profile-pic.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <TfiAlignJustify />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
