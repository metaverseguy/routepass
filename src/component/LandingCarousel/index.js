import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const LandingCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    variableWidth: true
  };

  return (
    <div className="mt-20">
      <Slider {...settings}>
        <div className="ml-20">
          <div
            style={{ width: 600 }}
            className="bg-black h-[347px] flex items-center justify-center text-white m-10">
            1
          </div>
        </div>
        <div>
          <div
            style={{ width: 600 }}
            className="bg-black h-[347px] flex items-center justify-center text-white m-10">
            1
          </div>
        </div>
        <div>
          <div
            style={{ width: 600 }}
            className="bg-black h-[347px] flex items-center justify-center text-white m-10">
            1
          </div>
        </div>
      </Slider>
    </div>
  );
};
