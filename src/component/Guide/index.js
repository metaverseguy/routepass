export const Guide = () => {
  return (
    <div className="flex justify-center items-center relative px-5 sm:px-[60px] pt-[50px]">
      <img
        src="assets/img/sub_background.png"
        alt="No find the image"
        className="w-[1324px] h-[460px] rounded-[20px]"
      />
      <div className="absolute max-w-[757px] flex flex-col justify-center items-center mx-[33px] sm:mx-[90px]">
        <p className="flex-1 text-[28px] sm:text-[52px] text-white text-center font-semibold">
          Find the Best Deals Every Time From Everywhere
        </p>
        <p className="text-[14px] sm:text-[18px] text-white">
          Access comprehensive price comparisons from top vendors, ensuring you get the best
          possible deals on flights and hotels, tailored to your specific needs
        </p>
        <button className="rounded-[10px] bg-white text-[14px] sm:text-[18px] text-[#292929] sm:py-4 sm:px-[28px] py-4 px-7 mt-8 font-semibold">
          Read the Guide
        </button>
      </div>
    </div>
  );
};
