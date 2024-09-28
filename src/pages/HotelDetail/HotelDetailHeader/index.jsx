import { useState } from 'react';
import { FaBookmark } from 'react-icons/fa6';
import { IoMdStar } from 'react-icons/io';

export const HotelDetailHeader = () => {
  const [detailOption, setDetailOption] = useState({ name: 'Overview', code: 'ov' });

  return (
    <div className="px-[20px] py-[25px] md:py-[50px] md:px-[60px] flex flex-col gap-y-5 bg-[#363636]">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <p className="font-semibold text-[26px] md:text-[46px] text-white">Hotel 123</p>
          <div className="hidden md:block gap-1">
            <div className="flex">
              <IoMdStar color="#ff9900" />
              <IoMdStar color="#ff9900" />
              <IoMdStar color="#ff9900" />
              <IoMdStar color="#ff9900" />
              <IoMdStar color="#ff9900" />
            </div>
            <p className="text-[10px] text-white">5-Stars Hotel</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <FaBookmark color="white" />
          <p className="hidden md:block text-[18px] font-semibold text-white">Bookmark Hotel</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-white flex gap-1 text-[12px] md:text-[20px] font-semibold">
          <p>27857 Danial Gardens, Bruenbury, MA 22535</p>
          <p>•</p>
          <p>Australia</p>
        </div>
        <div className="hidden md:flex items-center">
          <p className="text-[40px] text-white">$250</p>
          <p className="text-sm text-[#ffffff50]">/ Night</p>
        </div>
      </div>
      <div className="hidden md:flex gap-5">
        <button
          className={`${detailOption === 'ov' ? 'text-white' : 'text-[#ffffff50]'} text-base`}
          onClick={() => setDetailOption({ name: 'Overview', code: 'ov' })}>
          Overview
        </button>
        <button
          className={`${detailOption.code === 'fc' ? 'text-white' : 'text-[#ffffff50]'} text-base`}
          onClick={() => setDetailOption({ name: 'Facilities', code: 'fc' })}>
          Facilities
        </button>
        <button
          className={`${detailOption.code === 'rv' ? 'text-white' : 'text-[#ffffff50]'} text-base`}
          onClick={() => setDetailOption({ name: 'Reviews', code: 'rv' })}>
          Reviews
        </button>
        <button
          className={`${detailOption.code === 'ra' ? 'text-white' : 'text-[#ffffff50]'} text-base`}
          onClick={() => setDetailOption({ name: 'Room Available', code: 'ra' })}>
          Room Available
        </button>
        <button
          className={`${detailOption.code === 'ea' ? 'text-white' : 'text-[#ffffff50]'} text-base`}
          onClick={() => setDetailOption({ name: 'Explore Areas', code: 'ea' })}>
          Explore Areas
        </button>
      </div>
      <div className="flex md:hidden justify-between">
        <select
          name="lang"
          id="lang"
          className="bg-[#1e1e1e] text-white rounded-[7px] px-[15px] focus:outline-none text-sm 2xl:text-[0.8vw]">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="german">German</option>
        </select>
        <div className="flex items-center">
          <p className="text-[34px] md:text-[40px] text-white">$250</p>
          <p className="text-sm text-[#ffffff50]">/ Night</p>
        </div>
      </div>
    </div>
  );
};
