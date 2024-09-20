import React, { useState, useEffect } from 'react';

const RangeSlider = () => {
  const min = 100;
  const max = 10000;
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(7000);
  const [minThumb, setMinThumb] = useState(0);
  const [maxThumb, setMaxThumb] = useState(0);

  useEffect(() => {
    const minThumbPercentage = ((minPrice - min) / (max - min)) * 100;
    const maxThumbPercentage = 100 - ((maxPrice - min) / (max - min)) * 100;
    setMinThumb(minThumbPercentage);
    setMaxThumb(maxThumbPercentage);
  }, [minPrice, maxPrice]);

  const handleMouseDown = (e, type) => {
    e.preventDefault();
    console.log('type', type);
    const onMouseMove = (e) => {
      const bounds = e.target.getBoundingClientRect();
      const ratio = (e.clientX - bounds.left) / bounds.width;

      if (type === 'min') {
        const newMin = Math.round(ratio * (max - min) + min);
        if (newMin < maxPrice - 500 && newMin >= min) {
          setMinPrice(newMin);
        }
      } else if (type === 'max') {
        const newMax = Math.round(ratio * (max - min) + min);
        if (newMax > minPrice + 500 && newMax <= max) {
          setMaxPrice(newMax);
        }
      }
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative max-w-xl w-full">
        <div>
          <input
            type="range"
            min={min}
            max={max}
            value={minPrice}
            className="absolute pointer-events-auto appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
            onMouseDown={(e) => handleMouseDown(e, 'min')}
          />

          <input
            type="range"
            min={min}
            max={max}
            value={maxPrice}
            className="absolute pointer-events-auto appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
            onMouseDown={(e) => handleMouseDown(e, 'max')}
          />

          <div className="relative z-10 h-2">
            <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-[#F5F5F5]"></div>
            <div
              className="absolute z-20 top-0 bottom-0 rounded-md bg-[#1E1E1E]"
              style={{ right: `${maxThumb}%`, left: `${minThumb}%` }}></div>
            <div
              className="absolute z-30 w-3 h-3 p-2 top-0 left-0 bg-[#1E1E1E] rounded-full -mt-1 -ml-5"
              style={{ left: `${minThumb}%` }}></div>
            <div
              className="absolute z-20 w-6 h-6 p-2 top-0 left-0 bg-white rounded-full -mt-2 -ml-6"
              style={{ left: `${minThumb}%` }}></div>
            <div
              className="absolute z-10 w-8 h-8 p-2 top-0 left-0 bg-[#1E1E1E] rounded-full -mt-3 -ml-7"
              style={{ left: `${minThumb}%` }}></div>
            <div
              className="absolute z-30 w-3 h-3 p-2 top-0 right-0 bg-[#1E1E1E] rounded-full -mt-1 -mr-5"
              style={{ right: `${maxThumb}%` }}></div>
            <div
              className="absolute z-20 w-6 h-6 p-2 top-0 right-0 bg-white rounded-full -mt-2 -mr-6"
              style={{ right: `${maxThumb}%` }}></div>
            <div
              className="absolute z-10 w-8 h-8 p-2 top-0 right-0 bg-black rounded-full -mt-3 -mr-7"
              style={{ right: `${maxThumb}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
