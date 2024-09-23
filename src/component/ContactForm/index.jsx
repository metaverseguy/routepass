import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa6';
import { BsEnvelopeFill } from 'react-icons/bs';
import { TbMapPinFilled } from 'react-icons/tb';

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="p-20 flex justify-center flex-col">
        <h2 className="text-2xl font-bold text-center mb-4">Lets Get in Touch</h2>
        <h3 className="text-xl font-semibold text-center mb-6">We Are Always Happy To Help</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-gray-100">
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <h4 className="text-lg font-bold">Contact Information</h4>
            <p>Say something to start a live chat!</p>
            <div className="mt-20">
              <p className="mt-2 flex gap-2 items-center">
                <FaPhoneVolume /> +1234 3456 789
              </p>
              <p className="flex gap-2 items-center">
                <BsEnvelopeFill /> info@routepass.com
              </p>
              <p className="flex gap-2 items-center">
                <TbMapPinFilled /> 34 St Dunstans Street, Waterlooville, United Kingdom
              </p>
            </div>
          </div>

          <form className="flex flex-col">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 p-2 rounded mb-4"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-2 rounded mb-4"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 p-2 rounded mb-4"
              required
            />
            <select className="border border-gray-300 p-2 rounded mb-4" required>
              <option value="">Select Subject?</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
            <textarea
              placeholder="Write your message"
              className="border border-gray-300 p-2 rounded mb-4"
              rows="4"
              required
            />
            <button className="bg-black text-white p-2 rounded hover:bg-gray-800 transition duration-200">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
