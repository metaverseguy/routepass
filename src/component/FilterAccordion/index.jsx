import React, { useState } from 'react';
import { TECollapse } from 'tw-elements-react';
import PropTypes from 'prop-types';

export const FilterAccordion = ({ children, title }) => {
  const [activeElement, setActiveElement] = useState('');

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement('');
    } else {
      setActiveElement(value);
    }
  };
  return (
    <>
      <div className="">
        <h2 className="mb-0" id="headingOne">
          <button
            className={`${
              activeElement === 'element1' && `text-primary`
            } group relative flex w-full items-center rounded-none bg-white text-left text-base text-[#292929] font-semibold transition`}
            type="button"
            onClick={() => handleClick('element1')}
            aria-expanded="true"
            aria-controls="collapseOne">
            {title}
            <span
              className={`${
                activeElement === 'element1'
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === 'element1'}
          className="!mt-0 !rounded-b-none !shadow-none">
          {children}
        </TECollapse>
      </div>
    </>
  );
};

FilterAccordion.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
};
