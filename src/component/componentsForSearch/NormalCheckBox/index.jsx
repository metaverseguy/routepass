import propTypes from 'prop-types';

export const NormalCheckBox = ({ content }) => {
  return (
    <label className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <input type="checkbox" name="direct" className="accent-black" />
        <p className="text-sm 2xl:text-[0.8vw] max:text-[20px] text-[#292929]">{content}</p>
      </div>
    </label>
  );
};

NormalCheckBox.propTypes = {
  content: propTypes.string.isRequired,
};
