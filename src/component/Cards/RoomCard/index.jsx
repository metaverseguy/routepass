import { IoPeopleSharp } from 'react-icons/io5';

export const RoomCard = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-y-3">
        <p className="text-sm font-semibold c-chromaphobicblackhalf">Premier Smoking Room Only</p>
        <p className="text-[20px] c-chromaphobicblack">Without Breakfast</p>
        <p className="text-sm text-[#57ab8e] font-semibold">
          Free Cancellation before 7 Aug 2024, 13:59
        </p>
        <p className="text-sm font-semibold c-chromaphobicblackhalf">
          1 Double Bed Or 2 Single Bed
        </p>
      </div>
      <div className="flex gap-1 items-center">
        <IoPeopleSharp />
        <p className="text-[20px] c-chromaphobicblackhalf">2 Guests</p>
      </div>
      <div className="flex items-center">
        <p className="text-[20px] font-semibold text-[#333333]">$250</p>
        <p className="text-[14px] c-chromaphobicblackhalf">/Night</p>
      </div>
      <div>
        <button className="text-[12] text-white font-semibold bg-eerieblack rounded-[6px] px-[22px] py-[7px]">
          Choose
        </button>
      </div>
    </div>
  );
};
