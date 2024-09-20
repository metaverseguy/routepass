import { IoStarSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';

export const PriceCard = ({ city, rating, reviews, price, totalPrice }) => {
  return (
    <div className="flex justify-between items-stretch bg-white shadow rounded-[6px] sm:rounded-[10px] px-[30px] sm:px-10 py-[20px] sm:py-[25px]">
      <div className="flex flex-col gap-y-[7px] sm:gap-y-[10px]">
        <p className="text-[15px] sm:text-[20px]">{city}</p>
        <div className="flex items-center gap-x-2 text-[9px] sm:text-xs">
          <IoStarSharp color="#ff9900" />
          <div className="flex gap-x-1">
            <p className="c-chromaphobicblack">{rating}</p>
            <p className="c-chromaphobicblackhalf">{reviews}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[7px] sm:gap-y-[10px]">
        <p className="c-chromaphobicblack text-[15px] sm:text-[20px]">{price}</p>
        <p className="c-chromaphobicblackhalf text-[9px] sm:text-xs">{totalPrice}</p>
      </div>
      <div className="h-auto flex items-center">
        <button className="c-eerieblack text-[11px] px-4 py-[10px] rounded-[7px] border border-[#1e1e1e]">
          Choose
        </button>
      </div>
    </div>
  );
};

PriceCard.propTypes = {
  city: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
