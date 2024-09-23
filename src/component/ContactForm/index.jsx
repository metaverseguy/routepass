import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa6';
import { BsEnvelopeFill } from 'react-icons/bs';
import { TbMapPinFilled } from 'react-icons/tb';

const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center my-[80px] sm:my-[100px] mx-[20px] sm:mx-[60px] lg:mx-[130px]">
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-[14px] sm:text-[18px] text-center">Lets Get in Touch</h2>
          <h3 className="text-[28px] sm:text-[44px] font-semibold text-center">
            We Are Always Happy To Help
          </h3>
        </div>

        <div className="bg-white rounded-[20px] p-5  sm:p-10 flex flex-col lg:flex-row gap-10 w-full justify-stretch content-stretch">
          <div className="relative bg-eerieblack text-white p-10 rounded-lg w-full lg:w-[40%] overflow-hidden">
            <div className="flex flex-col gap-y-[10px] mb-[120px] sm:mb-[160px]">
              <h4 className="text-[22px] sm:text-[28px] font-semibold">Contact Information</h4>
              <p className="text-[13px] sm:text-base">Say something to start a live chat!</p>
            </div>

            <div className="flex flex-col gap-y-5 mb:[60x] sm:mb-[150px]">
              <p className="flex gap-2 items-center text-[13px] sm:text-base">
                <FaPhoneVolume /> +1234 3456 789
              </p>
              <p className="flex gap-2 items-center text-[13px] sm:text-base">
                <BsEnvelopeFill /> info@routepass.com
              </p>
              <p className="flex gap-2 items-center text-[13px] sm:text-base">
                <TbMapPinFilled /> 34 St Dunstans Street, Waterlooville, United Kingdom
              </p>
            </div>

            <div className="absolute left-[240px] bottom-0 rounded-full w-[138px] h-[138px] bg-[#979da0]"></div>
            <div className="absolute left-[260px] -bottom-[150px] rounded-full w-[269px] h-[269px] bg-[#ffffff99]"></div>
          </div>

          <form className="flex flex-col flex-1 justify-between">
            <div className="flex flex-col gap-y-10">
              <div className="flex flex-col sm:flex-row gap-9">
                <div className="flex-1">
                  <p className="c-chromaphobicblack text-[11px] sm:text-xs font-semibold py-1">
                    First Name
                  </p>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full py-[7px] border-b outline-none focus:border-black text-[11px] sm:text-xs"
                    required
                  />
                </div>
                <div className="flex-1">
                  <p className="c-chromaphobicblack text-[11px] sm:text-xs font-semibold py-1">
                    First Name
                  </p>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full py-[7px] border-b outline-none focus:border-black text-[11px] sm:text-xs"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-9">
                <div className="flex-1">
                  <p className="c-chromaphobicblack text-[11px] sm:text-xs font-semibold py-1">
                    First Name
                  </p>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full py-[7px] border-b outline-none focus:border-black text-[11px] sm:text-xs"
                    required
                  />
                </div>
                <div className="flex-1">
                  <p className="c-chromaphobicblack text-[11px] sm:text-xs font-semibold py-1">
                    First Name
                  </p>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full py-[7px] border-b outline-none focus:border-black text-[11px] sm:text-xs"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-[15px]">
                <p className="font-semibold text-[11px] sm:text-sm">Select Subject?</p>
                <div className="flex flex-wrap justify-between gap-3">
                  <div className="flex items-center gap-[10px] text-[9px] sm:text-[12px]">
                    <input type="radio" name="general" id="general" className="accent-black" />
                    <p>General Inquiry</p>
                  </div>
                  <div className="flex items-center gap-x-[10px] text-[9px] sm:text-[12px]">
                    <input type="radio" name="general" id="general" className="accent-black" />
                    <p>General Inquiry</p>
                  </div>
                  <div className="flex items-center gap-x-[10px] text-[9px] sm:text-[12px]">
                    <input type="radio" name="general" id="general" className="accent-black" />
                    <p>General Inquiry</p>
                  </div>
                  <div className="flex items-center gap-x-[10px] text-[9px] sm:text-[12px]">
                    <input type="radio" name="general" id="general" className="accent-black" />
                    <p>General Inquiry</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="c-chromaphobicblack font-semibold text-[11px] sm:text-xs">
                  Your Message
                </p>
                <input
                  type="text"
                  placeholder="Write your message"
                  className="w-full py-[7px] border-b outline-none focus:border-black text-[11px] sm:text-xs"
                  required
                />
              </div>
            </div>
            <button className="bg-eerieblack text-white text-base sm:text-[20px] font-semibold py-[13px] sm:py-4 rounded-[8px] sm:rounded-[10px]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
