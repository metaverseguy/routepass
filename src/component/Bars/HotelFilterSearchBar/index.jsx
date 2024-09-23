import { FilterAccordion } from '../../FilterAccordion';
import SwitchButton from '../../Buttons/SwitchButton';
import MultiRangeSlider from '../../Multirangeslider';
import PropTypes from 'prop-types';
import { IoStarSharp } from 'react-icons/io5';

export const HotelFilterSearchBar = ({ visible }) => {
  return (
    <div
      className={`bg-white  ${visible === 'mobile' ? 'rounded-none' : 'rounded-[15px] shadow'} flex flex-col gap-y-[27px] px-5 py-6 w-full`}>
      <div className="px-5 py-4 bg-[#f5f5f5] flex justify-between rounded-[10px]">
        <p className="text-[14px] font-semibold">Track Prices</p>
        <SwitchButton />
      </div>
      <FilterAccordion title="Book with peace of mind">
        <div className="py-5 gap-[15px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Free cancellation</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Pay on arrival</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">480</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Price Deals</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">480</p>
            </div>
          </label>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Price">
        <div className="py-5 flex flex-col gap-y-[15px] border-b border-[#29292950]">
          <p className="text-sm text-[#292929]">$200 - $1800</p>
          <div>
            <MultiRangeSlider min={0} max={1000} />
          </div>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Hotel Stars">
        <div className="py-[20px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">5-Stars Hotel</p>
            </div>
            <div className="flex items-center gap-1">
              <IoStarSharp color="#ff9900" />
              <IoStarSharp color="#ff9900" />
              <IoStarSharp color="#ff9900" />
              <IoStarSharp color="#ff9900" />
              <IoStarSharp color="#ff9900" />
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">4-Stars Hotel</p>
            </div>
            <div className="flex items-center gap-1">
              <IoStarSharp color="#e2e2e2" />
              <IoStarSharp color="#ff9900" />
              <IoStarSharp color="#ff9900" />
              <IoStarSharp color="#ff9900" />
              <IoStarSharp color="#ff9900" />
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">3-Stars Hotel</p>
            </div>
            <div className="flex items-center gap-1">
              <IoStarSharp color="#e2e2e2" />
              <IoStarSharp color="#e2e2e2" />
              <IoStarSharp color="#ff9900" />
              <IoStarSharp color="#ff9900" />
              <IoStarSharp color="#ff9900" />
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">2-Stars Hotel</p>
            </div>
            <div className="flex items-center gap-1">
              <IoStarSharp color="#e2e2e2" />
              <IoStarSharp color="#e2e2e2" />
              <IoStarSharp color="#e2e2e2" />
              <IoStarSharp color="#ff9900" />
              <IoStarSharp color="#ff9900" />
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">1-Stars Hotel</p>
            </div>
            <div className="flex items-center gap-1">
              <IoStarSharp color="#e2e2e2" />
              <IoStarSharp color="#e2e2e2" />
              <IoStarSharp color="#e2e2e2" />
              <IoStarSharp color="#e2e2e2" />
              <IoStarSharp color="#ff9900" />
            </div>
          </label>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Guest Rating">
        <div className="py-[20px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929] flex gap-1 items-center">
                <IoStarSharp color="#ff9900" />
                <p>10 (1290 Reviews)</p>
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929] flex gap-1 items-center">
                <IoStarSharp color="#ff9900" />
                <p>9,5 (1290 Reviews)</p>
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929] flex gap-1 items-center">
                <IoStarSharp color="#ff9900" />
                <p>5,4 (1290 Reviews)</p>
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929] flex gap-1 items-center">
                <IoStarSharp color="#ff9900" />
                <p>3,2 (1290 Reviews)</p>
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <p className="text-sm text-[#1e1e1e]">Show 10 more</p>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Accommodation Type">
        <div className="py-[20px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Hotel</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Apartment</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Guest House</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Residence</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Hostel</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Meal Plan">
        <div className="pb-[20px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Breakfast Included</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Meals not Included</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Facilities">
        <div className="py-[20px] flex flex-col gap-y-[15px]">
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Free Wifi</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Breakfast</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Water Heater</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Sea Views</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Balcony</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Mini Kitchen</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
        </div>
        <p className="text-sm text-[#1e1e1e]">Show 23 more</p>
      </FilterAccordion>
      <FilterAccordion title="Neighbourhoods">
        <div className="py-[20px] flex flex-col gap-y-[15px]">
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">City Of Westminster</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Bloomsbury</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Kensington</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Marylebone</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Earls Court</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">849</p>
            </div>
          </label>
        </div>
        <p className="text-sm text-[#1e1e1e]">Show 23 more</p>
      </FilterAccordion>
      <FilterAccordion title="Booking Sites">
        <div className="py-[20px] flex flex-col gap-y-[15px]">
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Booking.com</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Hotels.com</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Expedia</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Agoda</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Trivago</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Hotwire</p>
            </div>
          </label>
        </div>
        <p className="text-sm text-[#1e1e1e]">Show 3 more</p>
      </FilterAccordion>
    </div>
  );
};

HotelFilterSearchBar.propTypes = {
  visible: PropTypes.bool.isRequired,
};
