import { FilterAccordion } from '../../FilterAccordion';
import SwitchButton from '../../Buttons/SwitchButton';
import MultiRangeSlider from '../../Multirangeslider';
import PropTypes from 'prop-types';
import { CheckBoxWithNumber } from '../../componentsForSearch/CheckBoxWithNumber';
import { NormalCheckBox } from '../../componentsForSearch/NormalCheckBox';
import { StarsCheckBox } from '../../componentsForSearch/StarsCheckBox';
import { GuestRating } from '../../componentsForSearch/GuestRating';

export const HotelFilterSearchBar = ({ visible }) => {
  return (
    <div
      className={`bg-white  ${visible === 'mobile' ? 'rounded-none' : 'rounded-[15px] shadow'} flex flex-col gap-y-[27px] px-5 py-6 w-full`}>
      <div className="px-5 py-4 bg-[#f5f5f5] flex justify-between rounded-[10px]">
        <p className="text-[14px] 2xl:text-[1vw] max:text-[24px] font-semibold">Track Prices</p>
        <SwitchButton />
      </div>
      <FilterAccordion title="Book with peace of mind">
        <div className="py-5 gap-[15px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
          <CheckBoxWithNumber content="Free cancellation" num="849" />
          <CheckBoxWithNumber content="Pay on arrival" num="480" />
          <CheckBoxWithNumber content="Price Deals" num="480" />
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
          <StarsCheckBox content="5-Stars Hotel" stars={[1, 1, 1, 1, 1]} />
          <StarsCheckBox content="4-Stars Hotel" stars={[0, 1, 1, 1, 1]} />
          <StarsCheckBox content="3-Stars Hotel" stars={[0, 0, 1, 1, 1]} />
          <StarsCheckBox content="2-Stars Hotel" stars={[0, 0, 0, 1, 1]} />
          <StarsCheckBox content="1-Stars Hotel" stars={[0, 0, 0, 0, 1]} />
        </div>
      </FilterAccordion>
      <FilterAccordion title="Guest Rating">
        <div className="py-[20px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
          <GuestRating rating={10} review={1290} num={849} />
          <GuestRating rating={9.5} review={1290} num={849} />
          <GuestRating rating={5.4} review={1290} num={849} />
          <GuestRating rating={3.2} review={1290} num={849} />
          <p className="text-sm text-[#1e1e1e]">Show 10 more</p>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Accommodation Type">
        <div className="py-[20px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
          <CheckBoxWithNumber content="Hotel" num="849" />
          <CheckBoxWithNumber content="Apartment" num="849" />
          <CheckBoxWithNumber content="Guest House" num="849" />
          <CheckBoxWithNumber content="Residence" num="849" />
          <CheckBoxWithNumber content="Hostel" num="849" />
        </div>
      </FilterAccordion>
      <FilterAccordion title="Meal Plan">
        <div className="py-[20px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
          <CheckBoxWithNumber content="Breakfast Included" num="849" />
          <CheckBoxWithNumber content="Meals not Included" num="849" />
        </div>
      </FilterAccordion>
      <FilterAccordion title="Facilities">
        <div className="py-[20px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
          <NormalCheckBox content="Free Wifi" />
          <NormalCheckBox content="Breakfast" />
          <NormalCheckBox content="Water Heater" />
          <NormalCheckBox content="Sea Views" />
          <NormalCheckBox content="Balcony" />
          <NormalCheckBox content="Mini Kitchen" />
          <p className="text-sm text-[#1e1e1e]">Show 23 more</p>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Hotel chain">
        <div className="py-[20px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
          <CheckBoxWithNumber content="Hilton" num="849" />
          <CheckBoxWithNumber content="Accor Hotels" num="480" />
          <CheckBoxWithNumber content="Marriott International" num="480" />
          <CheckBoxWithNumber content="Best Western" num="480" />
          <CheckBoxWithNumber content="Leonardo" num="480" />
          <p className="text-sm text-[#1e1e1e]">Show 23 more</p>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Neighbourhoods">
        <div className="py-[20px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
          <CheckBoxWithNumber content="City Of Westminster" num="849" />
          <CheckBoxWithNumber content="Bloomsbury" num="849" />
          <CheckBoxWithNumber content="Kensington" num="849" />
          <CheckBoxWithNumber content="Marylebone" num="849" />
          <CheckBoxWithNumber content="Earls Court" num="849" />
          <p className="text-sm text-[#1e1e1e]">Show 23 more</p>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Booking Sites">
        <div className="py-[20px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
          <NormalCheckBox content="Booking.com" />
          <NormalCheckBox content="Hotels.com" />
          <NormalCheckBox content="Expedia" />
          <NormalCheckBox content="Agoda" />
          <NormalCheckBox content="Trivago" />
          <NormalCheckBox content="Hotwire" />
          <p className="text-sm text-[#1e1e1e]">Show 3 more</p>
        </div>
      </FilterAccordion>
    </div>
  );
};

HotelFilterSearchBar.propTypes = {
  visible: PropTypes.bool.isRequired,
};
