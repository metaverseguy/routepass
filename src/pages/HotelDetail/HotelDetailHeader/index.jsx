import { useState } from 'react';
import { FaBookmark } from 'react-icons/fa6';
import { IoMdStar } from 'react-icons/io';

export const HotelDetailHeader = () => {
  const [detailOption, setDetailOption] = useState('overview');

  return (
    <div className="py-[50px] px-[60px] bg-[#363636]">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <p className="font-semibold text-[46px] text-white">Hotel 123</p>
          <div className="flex flex-col gap-1">
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
          <p className="text-[18px] font-semibold text-white">Bookmark Hotel</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-white flex gap-1 text-[20px] font-semibold">
          <p>27857 Danial Gardens, Bruenbury, MA 22535</p>
          <p>•</p>
          <p>Australia</p>
        </div>
        <div className="flex items-center">
          <p className="text-[40px] text-white">$250</p>
          <p className="text-sm text-[#ffffff50]">/ Night</p>
        </div>
      </div>
      <div className="flex gap-5">
        <button
          className={`${detailOption === 'overview' ? 'text-white' : 'text-[#ffffff50]'} text-base`}
          onClick={() => setDetailOption('overview')}>
          Overview
        </button>
        <button
          className={`${detailOption === 'facilities' ? 'text-white' : 'text-[#ffffff50]'} text-base`}
          onClick={() => setDetailOption('facilities')}>
          Facilities
        </button>
        <button
          className={`${detailOption === 'review' ? 'text-white' : 'text-[#ffffff50]'} text-base`}
          onClick={() => setDetailOption('review')}>
          Reviews
        </button>
        <button
          className={`${detailOption === 'room' ? 'text-white' : 'text-[#ffffff50]'} text-base`}
          onClick={() => setDetailOption('room')}>
          Room Available
        </button>
        <button
          className={`${detailOption === 'explore' ? 'text-white' : 'text-[#ffffff50]'} text-base`}
          onClick={() => setDetailOption('explore')}>
          Explore Areas
        </button>
      </div>
    </div>
  );
};
