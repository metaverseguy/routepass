import PropTypes from 'prop-types';

export const Guide = ({ imgURL }) => {
  return (
    <div className="flex justify-center items-center relative px-5 sm:px-[60px] pt-[50px] w-full">
      <img src={imgURL} alt="No find the image" className="w-full h-[460px] rounded-[20px]" />
      <div className="absolute max-w-[757px] flex flex-col justify-center items-center mx-[33px] sm:mx-[90px]">
        <p className="flex-1 text-[28px] sm:text-[52px] 2xl:text-[2.2vw] text-white text-center font-semibold">
          Find the Best Deals Every Time From Everywhere
        </p>
        <p className="text-[14px] sm:text-[18px] 2xl:text-[0.9vw] text-white text-center">
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

Guide.propTypes = {
  imgURL: PropTypes.string.isRequired,
};
