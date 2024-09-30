import propTypes from 'prop-types';
import { IoStarSharp } from 'react-icons/io5';

export const GuestRating = ({ rating, review, num }) => {
  return (
    <label className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <input type="checkbox" name="direct" className="accent-black" />
        <p className="text-sm text-[#292929] flex gap-1 items-center">
          <IoStarSharp color="#ff9900" />
          <div className="flex gap-1">
            <p
              className={`${rating >= 9 ? 'text-[#292929]' : rating >= 5 ? 'text-[#ff7a00]' : 'text-[#ff2e00]'} 2xl:text-[0.8vw] max:text-[20px]`}>
              {rating}
            </p>
            <div className="flex text-xs 2xl:text-[0.8vw] max:text-[20px]">
              <p>(</p>
              <p>{review}</p>
            </div>
            <p className="text-xs 2xl:text-[0.8vw] max:text-[20px]">Reviews)</p>
          </div>
        </p>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-xs 2xl:text-[0.7vw] max:text-[18px] text-[#29292950]">{num}</p>
      </div>
    </label>
  );
};

GuestRating.propTypes = {
  rating: propTypes.number.isRequired,
  review: propTypes.number.isRequired,
  num: propTypes.number.isRequired,
};
