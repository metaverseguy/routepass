export const Guide = () => {
  return (
    <div className="flex justify-center relative mt-16">
      <img
        src="assets/img/beach.jpg"
        alt="No find the image"
        className="w-[1324px] h-[460px] rounded-[20px]"
      />
      <div className="absolute flex flex-col justify-center items-center py-[98px] px-[284px]">
        <p className="text-[52px] w-2/3 text-white text-center">
          Find the Best Deals Every Time From Everywhere
        </p>
        <p className="text-[18px] w-2/3 text-white">
          Access comprehensive price comparisons from top vendors, ensuring you get the best
          possible deals on flights and hotels, tailored to your specific needs
        </p>
        <button className="rounded-[10px] bg-white text-[18px] text-[#292929] py-4 px-[28px] mt-8">
          Read the Guide
        </button>
      </div>
    </div>
  );
};
