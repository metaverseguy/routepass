import { FiZoomIn } from 'react-icons/fi';
import { FiZoomOut } from 'react-icons/fi';
import { BiFullscreen } from 'react-icons/bi';
import { EllipsButton } from '../../Buttons/EllipsButton';

export const HotelDetailOverview = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1440px] w-full px-[20px] py-10 md:px-[60px] flex flex-col gap-y-[60px] justify-center items-center bg-[#f8f8f8]">
        <div className="flex flex-col justify-center max-w-[829px]">
          <p className="text-[28px] md:text-[44px] text-center font-semibold c-chromaphobicblack">
            Overview
          </p>
          <p className="text-[14px] md:text-[18px] c-chromaphobicblackhalf text-center">
            Situated 1.3 km from Kisuski Beach, Eilat Charming Studio-Balcony offers air-conditioned
            accommodation with a balcony and free WiFi. There is a private entrance at the apartment
            for the convenience of those who stay. The apartment has family rooms.
          </p>
        </div>
        <div className="flex flex-col gap-y-5 w-full">
          <div className="relative">
            <img className="w-full" src="assets/img/hoteldetails/1.png" alt="No find the image" />
            <div className=" absolute top-[20px] lg:top-[38px] right-1/2 translate-x-1/2 flex gap-[10px]">
              <button className="px-[12px] py-[4px] lg:px-[23px] lg:py-[7px] bg-[#232323] rounded-[28px]">
                <FiZoomIn color="white" />
              </button>
              <button className="px-[12px] py-[4px] lg:px-[23px] lg:py-[7px] bg-[#232323] rounded-[28px]">
                <FiZoomOut color="white" />
              </button>
              <button className="px-[12px] py-[4px] lg:px-[23px] lg:py-[7px] bg-[#232323] rounded-[28px]">
                <BiFullscreen color="white" />
              </button>
            </div>
            <div className="absolute bottom-[20px] lg:bottom-[32px] right-1/2 translate-x-1/2 flex gap-2">
              <EllipsButton active={true} />
              <EllipsButton active={false} />
              <EllipsButton active={false} />
              <EllipsButton active={false} />
              <EllipsButton active={false} />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full">
            <div className="w-full">
              <img src="assets/img/hoteldetails/2.png" alt="No find the image" className="w-full" />
            </div>
            <div className="w-full">
              <img src="assets/img/hoteldetails/3.png" alt="No find the image" className="w-full" />
            </div>
            <div className="w-full">
              <img src="assets/img/hoteldetails/4.png" alt="No find the image" className="w-full" />
            </div>
            <div className="w-full">
              <img src="assets/img/hoteldetails/5.png" alt="No find the image" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
