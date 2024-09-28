import React from 'react';

const NotificationBanner = () => {
  // const dynamicFontSize = `2xl:text-[${Math.round(window.innerWidth * (100 / 1440))}px]`;
  return (
    <div className="bg-[#2B2B2B] text-white text-center py-3 w-full">
      <p className={`text-xs 2xl:text-[0.7vw] font-medium`}>
        Get 25% Discount on Garuda Flights Every Month
      </p>
    </div>
  );
};

export default NotificationBanner;
