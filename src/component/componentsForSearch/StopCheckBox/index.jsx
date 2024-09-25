import PropTypes from 'prop-types';

export const StopCheckBox = ({ stop, price }) => {
  return (
    <label className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <input type="checkbox" name="direct" className="accent-black" />
        <p className="text-sm 2xl:text-[0.8vw] text-[#292929]">{stop}</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-xs 2xl:text-[0.7vw] text-[#29292950]">from</p>
        <p className="text-sm 2xl:text-[0.8vw] text-[#292929]">{price}</p>
      </div>
    </label>
  );
};

StopCheckBox.propTypes = {
  stop: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
