export const Support = () => {
  return (
    <div className="flex flex-col items-stretch h-full lg:flex-row justify-center gap-6 px-10 md:px-[62px]">
      <div className="flex flex-col flex-1 items-stretch sm:flex-row gap-6">
        <div className="flex-1 justify-center flex flex-col items-center border bg-white border-[#ededed] px-[26px] py-[36px] text-[#292929] rounded-[15px]">
          <img src="assets/img/earth_model.png" alt="No find the image" className="w-20 h-20" />
          <div className="flex flex-col justify-center items-center">
            <p className="text-[20px] 2xl:text-[1.1vw] font-bold texe-center">Explore EveryWhere</p>
            <p className="text-center 2xl:text-[0.8vw]">
              Travel to any corner of the world with ease. Our platform offers access to a vast
              range of destinations
            </p>
          </div>
        </div>
        <div className="flex-1 justify-center flex flex-col items-center border bg-white border-[#ededed] px-[26px] py-[36px] text-[#292929] rounded-[15px]">
          <img src="assets/img/airplane.png" alt="No find the image" className="w-20 h-20" />
          <div className="flex flex-col justify-center items-center">
            <p className="text-[20px] 2xl:text-[1.1vw] font-bold texe-center">Flight Timetables</p>
            <p className="text-center 2xl:text-[0.8vw]">
              Access real-time flight schedules to stay on top of your travel plans and ensure a
              smooth, timely journey
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 items-stretch sm:flex-row gap-6">
        <div className="flex-1 justify-center flex flex-col items-center border bg-white border-[#ededed] px-[26px] py-[36px] text-[#292929] rounded-[15px]">
          <img src="assets/img/wallet.png" alt="No find the image" className="w-20 h-20" />
          <div className="flex flex-col justify-center items-center">
            <p className="text-[20px] 2xl:text-[1.1vw] font-bold texe-center">Affordable Prices</p>
            <p className="text-center 2xl:text-[0.8vw]">
              We provide the best deals so you can make the most of your journey without
              overspending
            </p>
          </div>
        </div>
        <div className="flex-1 justify-center flex flex-col items-center border bg-white border-[#ededed] px-[26px] py-[36px] text-[#292929] rounded-[15px]">
          <img src="assets/img/watch.png" alt="No find the image" className="w-20 h-20" />
          <div className="flex flex-col justify-center items-center">
            <p className="text-[20px] 2xl:text-[1.1vw] font-bold texe-center">Traveller Helps</p>
            <p className="text-center 2xl:text-[0.8vw]">
              Get practical insight & tips to make your travels easier, whether you are a seasoned
              traveler or new to the skies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
