import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import NotificationBanner from '../../NotificationBanner';
import { TfiAlignJustify } from 'react-icons/tfi';
import { GoTriangleDown } from 'react-icons/go';
import { RiGlobalFill } from 'react-icons/ri';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { IoChevronDownOutline } from 'react-icons/io5';

const Navbar = ({ title }) => {
  const [activeTab, setActiveTab] = useState(title);
  const navigate = useNavigate();

  return (
    <>
      <NotificationBanner />
      <nav className="relative bg-[#1E1E1E] text-white flex items-center justify-between p-4 w-full z-20">
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
          <a href="/" className="text-[18px] md:text-[26px] font-bold">
            RoutePass
          </a>
        </div>
        <div className="flex">
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === 'flights' ? 'bg-gray-800 text-white' : 'text-gray-400'
            }`}
            onClick={() => {
              setActiveTab('flights');
              navigate('/');
            }}>
            <span className="flex items-center gap-2">
              <BiSolidPlaneAlt />
              <p className="text-[12px] sm:text-sm">Flights</p>
              <IoChevronDownOutline className="block mobile:hidden" />
            </span>
          </button>
          <button
            className={`px-4 py-2 hidden text-[12px] sm:text-sm sm:block rounded-full ${
              activeTab === 'hotels' ? 'bg-gray-800 text-white' : 'text-gray-400'
            }`}
            onClick={() => {
              setActiveTab('hotels');
              navigate('/hotel');
            }}>
            Hotels
          </button>
        </div>
        <div className="flex gap-6 text-sm items-center">
          <div className="relative hidden md:block">
            <button className="flex items-center">
              <RiGlobalFill color="white" />
              <span>English</span>
              <GoTriangleDown />
            </button>
          </div>
          <div className="hover:text-gray-400 hidden md:block">Bookmark</div>
          <div className="items-center sm:block hidden">
            <img src="assets/img/avatar.png" alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
          <button className="text-gray-400 hover:text-white">
            <TfiAlignJustify />
          </button>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
