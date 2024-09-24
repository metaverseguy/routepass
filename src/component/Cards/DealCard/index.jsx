import PropTypes from 'prop-types';
import { EmirateSVG } from '../../SVGs/Emirate';

export const DealCard = ({ city, country, price, startDate, endDate, airInfo, imgURL }) => {
  return (
    <>
      <img src={imgURL} alt="Berlin" className="w-full object-cover" />
      <button className="bg-white absolute top-[16px] right-[28px] rounded-full w-8 h-8 text-[28px] flex items-center justify-center">
        <p className="p-0 m-[0] top-[-8px] absolute">+</p>
      </button>
      <div className="px-5 py-7 flex flex-col gap-y-4 bg-white">
        <div className="flex justify-between">
          <div className="order-first">
            <p className="text-left text-lg font-bold">{city}</p>
            <p className="text-left text-sm">{country}</p>
          </div>
          <div className="order-last self-center">
            <p className="text-lg font-bold">{price}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-full bg-[#d72027] flex justify-center items-center">
            <EmirateSVG />
          </div>
          <div className="px-[10px] flex-grow">
            <p className="text-xs text-left">{startDate}</p>
            <p className="text-[10px] text-[#979797] text-left">{airInfo}</p>
          </div>
          <p className="text-right text-[10px] font-bold">Direct</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-full bg-[#d72027] flex justify-center items-center">
            <EmirateSVG />
          </div>
          <div className="px-[10px] flex-grow">
            <p className="text-xs text-left">{endDate}</p>
            <p className="text-[10px] text-[#979797] text-left">{airInfo}</p>
          </div>
          <p className="text-right text-[10px] font-bold">Direct</p>
        </div>
      </div>
    </>
  );
};

DealCard.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  airInfo: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
};
