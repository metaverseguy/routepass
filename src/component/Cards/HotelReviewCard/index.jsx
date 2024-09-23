import { MdOutlineStar } from 'react-icons/md';

export const HotelReviewCard = () => {
  return (
    <div className="bg-white rounded-[20px] shadow w-full px-10 py-6 flex flex-col gap-y-[30px]">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-4">
          <img src="assets/img/travller.png" alt="No find the Image" />
          <div className="flex flex-col">
            <p>Amanda Hart</p>
            <div className="flex gap-1 items-center">
              <MdOutlineStar color={'#ff9900'} />
              <p className="text-sm c-chromaphobicblack">9.0</p>
              <p className="text-sm c-chromaphobicblackhalf">Excellent</p>
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="rounded-full bg-[#1e1e1e] w-3 h-3"></div>
          <div className="rounded-full bg-[#1e1e1e] w-3 h-3"></div>
          <div className="rounded-full bg-[#1e1e1e] w-3 h-3"></div>
          <div className="rounded-full bg-[#1e1e1e] w-3 h-3"></div>
          <div className="rounded-full bg-[#1e1e1e] w-3 h-3"></div>
          <div className="rounded-full bg-[#1e1e1e] w-3 h-3"></div>
          <div className="rounded-full bg-[#1e1e1e] w-3 h-3"></div>
          <div className="rounded-full bg-[#1e1e1e] w-3 h-3"></div>
          <div className="rounded-full bg-[#1e1e1e] w-3 h-3"></div>
          <div className="rounded-full bg-[#ffffff] w-3 h-3"></div>
        </div>
      </div>
      <div>
        <p className="text-[20px] c-chromaphobicblack font-semibold">
          &quot;Elevating Every Occasion&quot;
        </p>
        <p className="text-base c-chromaphobicblackhalfs">
          This platform made planning my vacation a breeze! I found the best deals on flights and
          hotels, all in one place. Highly recommend!
        </p>
      </div>
    </div>
  );
};
