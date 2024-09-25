import propTypes from 'prop-types';

export const CheckBoxWithNumber = ({ content, num }) => {
  return (
    <label className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <input type="checkbox" name="direct" className="accent-black" />
        <p className="text-sm 2xl:text-[0.8vw] text-[#292929]">{content}</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-xs 2xl:text-[0.7vw] text-[#29292950]">{num}</p>
      </div>
    </label>
  );
};

CheckBoxWithNumber.propTypes = {
  content: propTypes.string.isRequired,
  num: propTypes.string.isRequired,
};
