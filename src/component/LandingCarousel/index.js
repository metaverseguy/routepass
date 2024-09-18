import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const LandingCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <div className="flex">
      <Slider {...settings}>
        <div>
          <div className="relative bg-black h-[200px] sm:h-[347px] w-[350px] sm:w-[600px] flex items-center justify-center text-white m-10 overflow-hidden rounded-[20px]">
            <img
              src="assets/img/discount coupons.png"
              alt="No find the image"
              className=" absolute right-0 bottom-0"
            />
            <p className="absolute w-[245px] sm:w-[426px] leading-[32px] sm:leading-[52px] sm:text-[48px] text-[28px] font-bold text-white top-[13px] sm:top-[23px] left-[17px] sm:left-[30px]">
              FIRST TRANSACTION PROMO
            </p>
            <div className="absolute bottom-[17px] sm:bottom-[28px] left-[16px] sm:left-[30px]">
              <button className="bg-[#2a2a2a] text-[9px] sm:text-[16px] text-white px-[22px] sm:px-[40px] py-[10px] sm:py-[18px] mb-[11px] sm:mb-5 rounded-[4px]">
                Get Discount 30%
              </button>
              <p className="text-[6px] sm:text-[12px]">
                Get this before 24 Aug 2024 Terms & Condition applied
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative bg-black h-[200px] sm:h-[347px] w-[350px] sm:w-[600px] flex items-center justify-center text-white m-10 overflow-hidden rounded-[20px]">
            <img
              src="assets/img/carousel/image.png"
              alt="No find the image"
              className="object-cover w-full"
            />
            <p className="absolute w-[245px] sm:w-[426px] leading-[32px] sm:leading-[52px] sm:text-[48px] text-[28px] font-bold text-white top-[13px] sm:top-[23px] left-[17px] sm:left-[30px]">
              FIRST TRANSACTION PROMO
            </p>
            <div className="absolute bottom-[17px] sm:bottom-[28px] left-[16px] sm:left-[30px]">
              <button className="bg-[#2a2a2a] text-[9px] sm:text-[16px] text-white px-[22px] sm:px-[40px] py-[10px] sm:py-[18px] mb-[11px] sm:mb-5 rounded-[4px]">
                Get Discount 30%
              </button>
              <p className="text-[6px] sm:text-[12px]">
                Get this before 24 Aug 2024 Terms & Condition applied
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative bg-black h-[200px] sm:h-[347px] w-[350px] sm:w-[600px] flex items-center justify-center text-white m-10 overflow-hidden rounded-[20px]">
            <img
              src="assets/img/carousel/image (1).jpg"
              alt="No find the image"
              className="object-cover h-full w-full"
            />
            <p className="absolute w-[245px] sm:w-[426px] leading-[32px] sm:leading-[52px] sm:text-[48px] text-[28px] font-bold text-white top-[13px] sm:top-[23px] left-[17px] sm:left-[30px]">
              FIRST TRANSACTION PROMO
            </p>
            <div className="absolute bottom-[17px] sm:bottom-[28px] left-[16px] sm:left-[30px]">
              <button className="bg-[#2a2a2a] text-[9px] sm:text-[16px] text-white px-[22px] sm:px-[40px] py-[10px] sm:py-[18px] mb-[11px] sm:mb-5 rounded-[4px]">
                Get Discount 30%
              </button>
              <p className="text-[6px] sm:text-[12px]">
                Get this before 24 Aug 2024 Terms & Condition applied
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
