import PropTypes from 'prop-types';

export const Subscribe = ({ imgURL }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-[1440px] rounded-[20px] mx-[20px] sm:mx-[60px] my-[100px] overflow-hidden border border-[#ededed] bg-white flex flex-col lg:flex-row justify-center items-stretch text-[#292929]">
        <img src={imgURL} alt="Not find the image" className="object-cover" />
        <div className="p-[20px] pb-[40px] sm:p-[60px] flex-1">
          <p className="text-center lg:text-left text-[28px] sm:text-[36px] font-semibold mb-[10px]">
            Secure this exceptional deal today
          </p>
          <p className="text-center lg:text-left text-[14px] sm:text-[20px] mb-[40px] font-medium">
            Access comprehensive price comparisons from top vendors, ensuring you get the best
            possible deals on flights and hotels, tailored to your specific needs.
          </p>
          <div className="mb-[20px] flex flex-col lg:flex-row gap-3">
            <input
              type="email"
              placeholder="Email Address"
              className="text-[18px] lg:text-[20px] text-center lg:text-left px-[55px] py-[25px] border border-[#dadada] rounded-[10px] w-full"
            />
            <button className="text-[16px] lg:text-[18px] text-center lg:text-left py-[15px] px-[55px] lg:py-[25px] bg-[#333333] text-white rounded-[10px]">
              Subscribe
            </button>
          </div>
          <p className="text-center lg:text-left text-[18px] font-medium">
            Get latest news & offers every weeks, you can always unsubscribe anytime. Read our{' '}
            <b>Privacy Policy</b>
          </p>
        </div>
      </div>
    </div>
  );
};

Subscribe.propTypes = {
  imgURL: PropTypes.string.isRequired,
};

export default Subscribe;
