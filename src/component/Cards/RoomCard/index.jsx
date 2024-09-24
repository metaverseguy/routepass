import { IoPeopleSharp } from 'react-icons/io5';

export const RoomCard = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-y-5 justify-between w-full items-center">
      <div className="flex justify-between items-center w-full basis-4/5">
        <div className="flex flex-col gap-y-3 basis-1/2">
          <p className="text-[8px] sm:text-xs lg:text-sm font-semibold c-chromaphobicblackhalf">
            Premier Smoking Room Only
          </p>
          <p className="text-[11px] sm:text-[14px] lg:text-[20px] c-chromaphobicblack">
            Without Breakfast
          </p>
          <p className="text-[8px] sm:text-[10px] lg:text-sm text-[#57ab8e] font-semibold">
            Free Cancellation before 7 Aug 2024, 13:59
          </p>
          <p className="text-[8px] sm:text-[10px] lg:text-sm font-semibold c-chromaphobicblackhalf">
            1 Double Bed Or 2 Single Bed
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-end sm:justify-between basis-1/2">
          <div className="flex gap-1 items-center">
            <IoPeopleSharp />
            <p className="text-xs sm:text-sm lg:text-[20px] c-chromaphobicblackhalf">2 Guests</p>
          </div>
          <div className="flex items-center">
            <p className="text-sm lg:text-[20px] font-semibold text-[#333333]">$250</p>
            <p className="text-[10px] lg:text-[14px] c-chromaphobicblackhalf">/Night</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-auto basis-1/5 flex justify-center items-center">
        <button className="w-full sm:w-auto text-[8px] lg:text-[12] text-white font-semibold bg-eerieblack rounded-[3px] sm:rounded-[6px] px-5 lg:px-[22px] sm:py-[6px] lg:py-[7px]">
          Choose
        </button>
      </div>
    </div>
  );
};
