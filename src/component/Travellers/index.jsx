import Slider from 'react-slick';
import { Traveller } from './Travellers';

export const Travllers = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    variableWidth: true
  };

  return (
    <div className="text-[#292929] flex flex-col justify-center text-center gap-6">
      <div className="flex flex-col justify-center items-center gap-3 max-w-[675px] m-auto">
        <p className="text-[28px] sm:text-[44px] font-semibold">Let’s Hear From Our Travellers</p>
        <p className="text-[14px] sm:text-[18px] text-center">
          Discover How Our Platform Has Made Travel Easier and More Affordable for Thousands of
          Satisfied Customers
        </p>
      </div>
      <div className="flex gap-6 overflow-hidden">
        <Slider {...settings}>
          <Traveller />
          <Traveller />
          <Traveller />
          <Traveller />
          <Traveller />
          <Traveller />
          <Traveller />
        </Slider>
      </div>
      <div className="flex gap-6 overflow-hidden">
        <Slider {...settings}>
          <Traveller />
          <Traveller />
          <Traveller />
          <Traveller />
          <Traveller />
          <Traveller />
          <Traveller />
        </Slider>
      </div>
    </div>
  );
};
