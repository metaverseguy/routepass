import { GoogleMap } from '../../../component/GoogleMap';
import { APIProvider } from '@vis.gl/react-google-maps';

export const HotelMap = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1440px] w-full py-10 px-[22px] md:px-[60px] flex flex-col gap-y-[60px] justify-center items-center bg-[#f8f8f8]">
        <div className="flex flex-col justify-center max-w-[829px]">
          <p className="text-[28px] md:text-[44px] text-center font-semibold c-chromaphobicblack">
            Map Area
          </p>
          <p className="text-[14px] md:text-[18px] c-chromaphobicblackhalf text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum congue tellus a
            semper. Mauris leo lorem, fringilla vel congue malesuada, placerat vel lacus.
          </p>
        </div>
        <div className="w-full">
          <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap />
          </APIProvider>
        </div>
        <button className="py-4 px-7 bg-[#333333] text-white rounded-[10px]">
          See On Google Maps
        </button>
      </div>
    </div>
  );
};
