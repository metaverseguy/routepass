import React, { useState } from 'react';
import NotificationBanner from '../NotificationBanner';
import { TfiAlignJustify } from 'react-icons/tfi';
import { GoTriangleDown } from 'react-icons/go';
import { RiGlobalFill } from 'react-icons/ri';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { IoChevronDownOutline } from 'react-icons/io5';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('flights');
  return (
    <>
      <NotificationBanner />
      <nav className="bg-[#1E1E1E] text-white flex items-center justify-between p-4 w-full">
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
          <a href="/" className="text-[26px] font-bold">
            RoutePass
          </a>
        </div>
        <div className="flex">
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === 'flights' ? 'bg-gray-800 text-white' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('flights')}>
            <span className="flex items-center gap-2">
              <BiSolidPlaneAlt />
              Flights
              <IoChevronDownOutline className="block mobile:hidden" />
            </span>
          </button>
          <button
            className={`px-4 py-2 hidden mobile:block rounded-full ${
              activeTab === 'hotels' ? 'bg-gray-800 text-white' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('hotels')}>
            Hotels
          </button>
        </div>
        <div className="flex gap-6 text-sm items-center">
          <div className="relative hidden tablet:block">
            <button className="flex items-center">
              <RiGlobalFill color="white" />
              <span>English</span>
              <GoTriangleDown />
            </button>
          </div>
          <div className="hover:text-gray-400 hidden tablet:block">Bookmark</div>
          <div className="items-center mobile:block hidden">
            <img src="path/to/profile-pic.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
          <button className="text-gray-400 hover:text-white">
            <TfiAlignJustify />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
