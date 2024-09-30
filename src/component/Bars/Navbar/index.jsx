import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import NotificationBanner from '../../NotificationBanner';
import { TfiAlignJustify } from 'react-icons/tfi';
import { RiGlobalFill } from 'react-icons/ri';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { FaHotel, FaPlane } from 'react-icons/fa6';
import { IoChevronDownOutline } from 'react-icons/io5';

const Navbar = ({ title }) => {
  const [activeTab, setActiveTab] = useState(title);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // To control dropdown open/close

  const handleSelect = (option) => {
    setIsOpen(false);
    if (option === 'flight') {
      setActiveTab('flights');
      navigate('/');
    } else if (option === 'hotel') {
      setActiveTab('hotels');
      navigate('/hotel');
    }
  };
  return (
    <div className="relative z-50 bg-[#1E1E1E] flex flex-col justify-center items-center">
      <NotificationBanner />
      <nav className="text-white flex items-center justify-between p-4 w-full max-w-[1440px]">
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
        <div className="hidden md:flex">
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === 'flights' ? 'bg-gray-800 text-white' : 'text-gray-400'
            }`}
            onClick={() => {
              setActiveTab('flights');
              navigate('/');
            }}>
            <span className="flex items-center gap-2">
              <div className={`${title === 'flights' ? 'block' : 'hidden'}`}>
                <BiSolidPlaneAlt />
              </div>
              <p className="text-[12px] sm:text-sm 2xl:text-[0.8vw] max:text-[20px] max:text-[20px]">
                Flights
              </p>
            </span>
          </button>
          <button
            className={`px-4 py-2 text-[12px] sm:text-sm rounded-full ${
              activeTab === 'hotels' ? 'bg-gray-800 text-white' : 'text-gray-400'
            }`}
            onClick={() => {
              setActiveTab('hotels');
              navigate('/hotel');
            }}>
            <span className="flex items-center gap-2">
              <div className={`${title === 'hotels' ? 'block' : 'hidden'}`}>
                <FaHotel />
              </div>
              <p className="text-[12px] sm:text-sm 2xl:text-[0.8vw] max:text-[20px] max:text-[20px]">
                Hotels
              </p>
            </span>
          </button>
        </div>

        <div className="flex gap-6 text-sm items-center">
          <div className="relative inline-block text-left md:hidden">
            <div className="flex">
              <button
                type="button"
                className="inline-flex gap-1 justify-between items-center w-full px-4 py-2 bg-[#2B2B2B] text-sm font-medium text-white rounded-[50px]"
                onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
              >
                {activeTab === 'flights' ? (
                  <>
                    <FaPlane className="mr-2" /> Flight
                  </>
                ) : (
                  <>
                    <FaHotel className="mr-2" /> Hotel
                  </>
                )}
                <IoChevronDownOutline />
              </button>
            </div>

            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-gray-800 text-white">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu">
                  <button
                    onClick={() => handleSelect('flight')}
                    className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-100 w-full"
                    role="menuitem">
                    <FaPlane className="mr-2" /> Flight
                  </button>
                  <button
                    onClick={() => handleSelect('hotel')}
                    className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-100 w-full"
                    role="menuitem">
                    <FaHotel className="mr-2" /> Hotel
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="relative hidden md:block">
            <button className="flex items-center">
              <RiGlobalFill color="white" />
              <select
                name="lang"
                id="lang"
                className="bg-eerieblack focus:outline-none text-sm 2xl:text-[0.8vw] max:text-[20px]">
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="german">German</option>
              </select>
            </button>
          </div>
          <div className="hover:text-gray-400 hidden md:block 2xl:text-[0.8vw] max:text-[20px]">
            Bookmark
          </div>
          <div className="items-center sm:block hidden">
            <img src="assets/img/avatar.png" alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
          <button className="text-gray-400 hover:text-white">
            <TfiAlignJustify />
          </button>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
