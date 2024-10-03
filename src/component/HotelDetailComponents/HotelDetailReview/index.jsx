import { HotelReviewCard } from '../../Cards/HotelReviewCard';

export const HotelDetailReview = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1440px] w-full py-10 px-5 md:px-[60px] flex flex-col gap-y-[60px] justify-center items-center bg-[#f8f8f8]">
        <div className="flex flex-col justify-center max-w-[829px]">
          <p className="text-[28px] md:text-[44px] text-center font-semibold c-chromaphobicblack">
            Reviews
          </p>
          <p className="text-[14px] md:text-[18px] c-chromaphobicblackhalf text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum congue tellus a
            semper. Mauris leo lorem, fringilla vel congue malesuada, placerat vel lacus.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
          <div className="flex flex-col gap-y-10 rounded-[12px] bg-white w-full  px-5 py-[30px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <div className="bg-[#333333] rounded-[4px] px-[9px] py-[4px]">
                  <p className="text-[16px] md:text-[30px] font-semibold text-white">9.1</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[14px] md:text-[26px] c-chromaphobicblack">Excellent </p>
                  <p className="text-[8px] md:text-[16px] text-[#292929]">7123 reviews</p>
                </div>
              </div>
              <div className="flex gap-[6px]">
                <div className="rounded-full bg-[#1e1e1e] w-[13px] h-[13px] lg:w-[19px] lg:h-[19px]"></div>
                <div className="rounded-full bg-[#1e1e1e] w-[13px] h-[13px] lg:w-[19px] lg:h-[19px]"></div>
                <div className="rounded-full bg-[#1e1e1e] w-[13px] h-[13px] lg:w-[19px] lg:h-[19px]"></div>
                <div className="rounded-full bg-[#1e1e1e] w-[13px] h-[13px] lg:w-[19px] lg:h-[19px]"></div>
                <div className="rounded-full bg-[#1e1e1e] w-[13px] h-[13px] lg:w-[19px] lg:h-[19px]"></div>
                <div className="rounded-full bg-[#1e1e1e] w-[13px] h-[13px] lg:w-[19px] lg:h-[19px]"></div>
                <div className="rounded-full bg-[#1e1e1e] w-[13px] h-[13px] lg:w-[19px] lg:h-[19px]"></div>
                <div className="rounded-full bg-[#1e1e1e] w-[13px] h-[13px] lg:w-[19px] lg:h-[19px]"></div>
                <div className="rounded-full bg-[#1e1e1e] w-[13px] h-[13px] lg:w-[19px] lg:h-[19px]"></div>
                <div className="rounded-full bg-[#dcdcdc] w-[13px] h-[13px] lg:w-[19px] lg:h-[19px]"></div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col gap-y-5 w-full">
                <div className="flex justify-between">
                  <p className="text-base c-chromaphobicblack">Bad</p>
                  <p className="text-sm c-chromaphobicblackhalf">197</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base c-chromaphobicblack">Bad</p>
                  <p className="text-sm c-chromaphobicblackhalf">197</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base c-chromaphobicblack">Bad</p>
                  <p className="text-sm c-chromaphobicblackhalf">197</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base c-chromaphobicblack">Bad</p>
                  <p className="text-sm c-chromaphobicblackhalf">197</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base c-chromaphobicblack">Bad</p>
                  <p className="text-sm c-chromaphobicblackhalf">197</p>
                </div>
              </div>
              <div className="border-r border-[#29292950] mx-20"></div>
              <div className="flex flex-col gap-y-5 w-full">
                <div className="flex justify-between">
                  <p className="text-base c-chromaphobicblack">Bad</p>
                  <p className="text-sm c-chromaphobicblackhalf">197</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base c-chromaphobicblack">Bad</p>
                  <p className="text-sm c-chromaphobicblackhalf">197</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base c-chromaphobicblack">Bad</p>
                  <p className="text-sm c-chromaphobicblackhalf">197</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base c-chromaphobicblack">Bad</p>
                  <p className="text-sm c-chromaphobicblackhalf">197</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base c-chromaphobicblack">Bad</p>
                  <p className="text-sm c-chromaphobicblackhalf">197</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-10 rounded-[12px] bg-white w-full  px-5 py-[30px]">
            <div className="flex flex-col w-full gap-y-5">
              <p className="text-base c-chromaphobicblackhalf">Cleanlines</p>
              <div className="w-full bg-[#f0f0f0] rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#1e1e1e] h-2.5 rounded-full w-[90%]"></div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-5">
              <p className="text-base c-chromaphobicblackhalf">Cleanlines</p>
              <div className="w-full bg-[#f0f0f0] rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#1e1e1e] h-2.5 rounded-full w-[90%]"></div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-5">
              <p className="text-base c-chromaphobicblackhalf">Cleanlines</p>
              <div className="w-full bg-[#f0f0f0] rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#1e1e1e] h-2.5 rounded-full w-[75%]"></div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-5">
              <p className="text-base c-chromaphobicblackhalf">Cleanlines</p>
              <div className="w-full bg-[#f0f0f0] rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#1e1e1e] h-2.5 rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[10px] md:gap-4">
          <HotelReviewCard />
          <HotelReviewCard />
          <HotelReviewCard />
          <HotelReviewCard />
          <div className="hidden lg:block">
            <HotelReviewCard />
          </div>
          <div className="hidden lg:block">
            <HotelReviewCard />
          </div>
        </div>
        <button className="py-4 px-7 bg-[#333333] text-white rounded-[10px]">See More</button>
      </div>
    </div>
  );
};
