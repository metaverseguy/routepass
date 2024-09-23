import { RoomCard } from '../../../component/Cards/RoomCard';

export const HotelDetailAvailableRoom = () => {
  return (
    <div className="py-10 px-[60px] flex flex-col gap-y-[60px] justify-center items-center bg-[#f8f8f8]">
      <div className="flex flex-col justify-center max-w-[829px]">
        <p className="text-[44px] text-center font-semibold c-chromaphobicblack">Available Room</p>
        <p className="text-[18px] c-chromaphobicblackhalf text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum congue tellus a
          semper. Mauris leo lorem, fringilla vel congue malesuada, placerat vel lacus.
        </p>
      </div>
      <div className="flex flex-col gap-y-5 bg-white px-10 py-10 rounded-[15px] shadow w-full">
        <p className="text-[32px] font-semibold c-chromaphobicblack text-center">Premier Room</p>
        <img src="assets/img/livingroom/room_1.png" alt="No find the iamge" />
        <div className="flex justify-between">
          <img src="assets/img/livingroom/room_2.png" alt="No find the image" />
          <img src="assets/img/livingroom/room_3.png" alt="No find the image" />
          <img src="assets/img/livingroom/room_4.png" alt="No find the image" />
          <img src="assets/img/livingroom/room_5.png" alt="No find the image" />
          <img src="assets/img/livingroom/room_6.png" alt="No find the image" />
          <img src="assets/img/livingroom/room_7.png" alt="No find the image" />
        </div>
        <div className="flex flex-col">
          <RoomCard />
          <div className="border-b border-[#eaeaea] my-5 h-0"></div>
          <RoomCard />
          <div className="border-b border-[#eaeaea] my-5 h-0"></div>
          <RoomCard />
        </div>
      </div>
      <div className="flex flex-col gap-y-5 bg-white px-10 py-10 rounded-[15px] shadow w-full">
        <p className="text-[32px] font-semibold c-chromaphobicblack text-center">Suite Room</p>
        <img src="assets/img/suiteroom/suiteroom_1.png" alt="No find the iamge" />
        <div className="flex justify-between">
          <img src="assets/img/suiteroom/suiteroom_2.png" alt="No find the image" />
          <img src="assets/img/suiteroom/suiteroom_3.png" alt="No find the image" />
          <img src="assets/img/suiteroom/suiteroom_4.png" alt="No find the image" />
          <img src="assets/img/suiteroom/suiteroom_5.png" alt="No find the image" />
          <img src="assets/img/suiteroom/suiteroom_6.png" alt="No find the image" />
          <img src="assets/img/suiteroom/suiteroom_7.png" alt="No find the image" />
        </div>
        <div className="flex flex-col">
          <RoomCard />
          <div className="border-b border-[#eaeaea] my-5 h-0"></div>
          <RoomCard />
          <div className="border-b border-[#eaeaea] my-5 h-0"></div>
          <RoomCard />
        </div>
      </div>
    </div>
  );
};
