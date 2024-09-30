import propTypes from 'prop-types';
import { IoStarSharp } from 'react-icons/io5';

export const StarsCheckBox = ({ content, stars }) => {
  return (
    <label className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <input type="checkbox" name="direct" className="accent-black" />
        <p className="text-sm 2xl:text-[0.8vw] max:text-[20px] text-[#292929]">{content}</p>
      </div>
      <div className="flex items-center gap-1">
        {stars.map((value, index) =>
          value === 1 ? (
            <IoStarSharp key={index} color="#ff9900" />
          ) : (
            <IoStarSharp key={index} color="#e2e2e2" />
          )
        )}
      </div>
    </label>
  );
};

StarsCheckBox.propTypes = {
  content: propTypes.string.isRequired,
  stars: propTypes.array.isRequired,
};
