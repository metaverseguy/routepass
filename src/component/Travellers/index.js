import Slider from 'react-slick';
import { Traveller } from './Travellers';

export const Travllers = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  };

  return (
    <div className="text-[#292929] flex flex-col gap-16">
      <div className="flex flex-col gap-3">
        <p className="text-[44px]">Let’s Hear From Our Travellers</p>
        <p className="text-[18px]">
          Discover How Our Platform Has Made Travel Easier and More Affordable for Thousands of
          Satisfied Customers
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="slider-container">
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
        <div className="slider-container">
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
    </div>
  );
};
