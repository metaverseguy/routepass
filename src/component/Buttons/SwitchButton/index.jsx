import React, { useState } from 'react';

const SwitchButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center !w-[62px]">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <span
          className={`slider mx-4 flex h-[15px] w-[30px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
          }`}>
          <span
            className={`dot h-[13px] w-[13px] rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-[12px]' : '-translate-x-[3px]'
            }`}></span>
        </span>
      </label>
    </>
  );
};

export default SwitchButton;
