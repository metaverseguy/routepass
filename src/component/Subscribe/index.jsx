export const Subscribe = () => {
  return (
    <div>
      <div className="rounded-[20px] mx-[20px] sm:mx-[60px] my-[100px] overflow-hidden border border-[#ededed] bg-white flex flex-col lg:flex-row justify-center items-stretch text-[#292929]">
        <img
          src="assets/img/sub_background.png"
          alt="Not find the image"
          className="object-cover w-full lg:w-1/3"
        />
        <div className="p-[20px] pb-[40px] sm:p-[60px]">
          <p className="text-center lg:text-left text-[28px] sm:text-[36px] font-semibold mb-[10px]">
            Secure this exceptional deal today
          </p>
          <p className="text-center lg:text-left text-[14px] sm:text-[18px] mb-[40px]">
            Access comprehensive price comparisons from top vendors, ensuring you get the best
            possible deals on flights and hotels, tailored to your specific needs.
          </p>
          <div className="mb-[20px] flex flex-col lg:flex-row gap-3">
            <input
              type="email"
              placeholder="Email Address"
              className="text-[16px] lg:text-[18px] text-center lg:text-left px-[55px] py-[25px] border border-[#dadada] rounded-[10px] w-full"
            />
            <button className="text-[16px] lg:text-[18px] text-center lg:text-left py-[15px] px-[55px] lg:py-[25px] bg-[#333333] text-white rounded-[10px]">
              Subscribe
            </button>
          </div>
          <p className="text-center lg:text-left text-[14px]">
            Get latest news & offers every weeks, you can always unsubscribe anytime. Read our{' '}
            <b>Privacy Policy</b>
          </p>
        </div>
      </div>
    </div>
  );
};
