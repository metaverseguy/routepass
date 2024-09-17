export const Subscribe = () => {
  return (
    <div className="rounded-[20px] mx-[60px] my-[100px] overflow-hidden border border-[#ededed] bg-white flex justify-center items-center text-[#292929]">
      <img
        src="assets/img/beach.jpg"
        alt="Not find the image"
        className="w-[500px] h-[360px] object-cover"
      />
      <div className="px-[60px]">
        <p className="text-left text-[36px] font-bold mb-[10px]">
          Secure this exceptional deal today
        </p>
        <p className="text-left text-[18px] mb-[40px]">
          Access comprehensive price comparisons from top vendors, ensuring you get the best
          possible deals on flights and hotels, tailored to your specific needs.
        </p>
        <div className="mb-[20px] flex gap-3">
          <input
            type="email"
            placeholder="Email Address"
            className="text-[18px] px-[55px] py-[25px] border border-[#dadada] rounded-[10px] w-full"
          />
          <button className="text-[18px] px-[55px] py-[25px] bg-[#333333] text-white rounded-[10px]">
            Subscribe
          </button>
        </div>
        <p className="text-left text-[14px]">
          Get latest news & offers every weeks, you can always unsubscribe anytime. Read our{' '}
          <b>Privacy Policy</b>
        </p>
      </div>
    </div>
  );
};
