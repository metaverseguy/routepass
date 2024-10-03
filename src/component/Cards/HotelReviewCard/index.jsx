import { MdOutlineStar } from 'react-icons/md';

export const HotelReviewCard = () => {
  return (
    <div className="bg-white rounded-[10px] md:rounded-[20px] shadow w-full px-[20px] py-[12px] lg:px-10 lg:py-6 flex flex-col gap-y-[30px]">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <img
            src="assets/img/travller.png"
            alt="No find the Image"
            className="w-[26px] h-[26px] lg:w-[45px] lg:h-[45px]"
          />
          <div className="flex flex-col">
            <p className="text-[10px] md:text-[16px]">Amanda Hart</p>
            <div className="flex gap-1 items-center">
              <MdOutlineStar color={'#ff9900'} />
              <p className="text-[8px] md:text-sm c-chromaphobicblack">9.0</p>
              <p className="text-[8px] md:text-sm c-chromaphobicblackhalf">Excellent</p>
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="rounded-full bg-[#1e1e1e] w-[10px] h-[10px] lg:w-[14px] lg:h-[14px]"></div>
          <div className="rounded-full bg-[#1e1e1e] w-[10px] h-[10px] lg:w-[14px] lg:h-[14px]"></div>
          <div className="rounded-full bg-[#1e1e1e] w-[10px] h-[10px] lg:w-[14px] lg:h-[14px]"></div>
          <div className="rounded-full bg-[#1e1e1e] w-[10px] h-[10px] lg:w-[14px] lg:h-[14px]"></div>
          <div className="rounded-full bg-[#1e1e1e] w-[10px] h-[10px] lg:w-[14px] lg:h-[14px]"></div>
          <div className="rounded-full bg-[#1e1e1e] w-[10px] h-[10px] lg:w-[14px] lg:h-[14px]"></div>
          <div className="rounded-full bg-[#1e1e1e] w-[10px] h-[10px] lg:w-[14px] lg:h-[14px]"></div>
          <div className="rounded-full bg-[#1e1e1e] w-[10px] h-[10px] lg:w-[14px] lg:h-[14px]"></div>
          <div className="rounded-full bg-[#1e1e1e] w-[10px] h-[10px] lg:w-[14px] lg:h-[14px]"></div>
          <div className="rounded-full bg-[#dcdcdc] w-[10px] h-[10px] lg:w-[14px] lg:h-[14px]"></div>
        </div>
      </div>
      <div>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] c-chromaphobicblack font-semibold">
          &quot;Elevating Every Occasion&quot;
        </p>
        <p className="text-[12px] md:text-sm lg:text-base c-chromaphobicblackhalfs">
          This platform made planning my vacation a breeze! I found the best deals on flights and
          hotels, all in one place. Highly recommend!
        </p>
      </div>
    </div>
  );
};
