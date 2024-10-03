import { MdOutlineBookmark } from 'react-icons/md';

export const DetailHeader = () => {
  return (
    <div className="flex items-center justify-center  bg-[#363636]">
      <div className="max-w-[1440px] w-full flex items-center justify-between px-5 sm:px-[60px] py-[25px] sm:py-[50px] c-gray21">
        <div>
          <p className="text-[28px] md:text-[46px] font-semibold text-white">Bali, Denpasar</p>
          <div className="flex">
            <p className="text-sm md:text-[20px] font-semibold text-white text-nowrap">Return</p>
            <p className="text-sm md:text-[20px] font-semibold px-[10px] text-white text-nowrap">
              •
            </p>
            <p className="text-sm md:text-[20px] font-semibold text-white text-nowrap">
              1 Chidren , 1 Adult
            </p>
            <p className="text-sm md:text-[20px] font-semibold px-[10px] text-white text-nowrap">
              •
            </p>
            <p className="text-sm md:text-[20px] font-semibold text-white text-nowrap">
              Business Class
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <MdOutlineBookmark color="#ffffff" />
          <p className="hidden sm:block items-center text-[18px] text-[#ffffff] font-semibold text-nowrap">
            Bookmark Deal
          </p>
        </div>
      </div>
    </div>
  );
};
