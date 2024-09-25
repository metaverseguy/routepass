import { FilterAccordion } from '../../FilterAccordion';
import SwitchButton from '../../Buttons/SwitchButton';
import { useState } from 'react';
import MultiRangeSlider from '../../Multirangeslider';
import { StopCheckBox } from '../../componentsForSearch/StopCheckBox';
import { NormalCheckBox } from '../../componentsForSearch/NormalCheckBox';
import PropTypes from 'prop-types';

export const FilterSearchBar = ({ visible }) => {
  const [timesValue, setTimesValue] = useState('take-off');

  return (
    <div
      className={`bg-white  ${visible === 'mobile' ? 'rounded-none' : 'rounded-[15px] shadow'} flex flex-col gap-y-[27px] px-5 py-6 w-full`}>
      <div className="px-5 py-4 bg-[#f5f5f5] flex justify-between rounded-[10px]">
        <p className="text-[14px] 2xl:text-[1vw] font-semibold">Track Prices</p>
        <SwitchButton />
      </div>
      <FilterAccordion title="Stops">
        <div className="py-5 gap-[15px] border-b border-[#29292950] flex flex-col gap-y-2">
          <StopCheckBox stop="Direct" price="$280" />
          <StopCheckBox stop="1 stop" price="$620" />
          <StopCheckBox stop="2+stops" price="$1280" />
        </div>
      </FilterAccordion>
      <FilterAccordion title="Times">
        <div className="py-5 border-b border-[#29292950] flex flex-col gap-y-5">
          <div className="bg-[#f5f5f5] rounded-[10px] p-[10px] gap-x-[10px] flex">
            <button
              className={`w-full  rounded-[8px] 2xl:text-[0.9vw] py-[10px] font-semibold ${timesValue === 'take-off' ? 'bg-[#1e1e1e] text-white' : 'bg-[#ffffff] text-[#29292950]'}`}
              onClick={() => setTimesValue('take-off')}>
              Take-off
            </button>
            <button
              className={`w-full rounded-[8px] py-[10px] 2xl:text-[0.9vw] font-semibold ${timesValue === 'take-off' ? 'bg-[#ffffff] text-[#29292950]' : 'bg-[#1e1e1e] text-white'}`}
              onClick={() => setTimesValue('landing')}>
              Landing
            </button>
          </div>
          <div className="flex flex-col gap-y-[15px]">
            <div className="flex flex-col gap-y-2">
              <p className="text-sm 2xl:text-[0.9vw] text-[#292929]">Take-off from (DPS)</p>
              <p className="text-xs 2xl:text-[0.8vw] text-[#29292950]">Mon 02:00 - Mon 10:00</p>
            </div>
            <div>
              <MultiRangeSlider min={0} max={1000} />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-sm 2xl:text-[0.9vw] text-[#292929]">Take-off from (DPS)</p>
              <p className="text-xs 2xl:text-[0.8vw] text-[#29292950]">Wed 02:00 - Wed 20:00</p>
            </div>
            <div>
              <MultiRangeSlider min={0} max={1000} />
            </div>
          </div>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Duration">
        <div className="py-5 border-b border-[#29292950] flex flex-col gap-y-[15px]">
          <div className="flex flex-col gap-y-2">
            <p className="text-sm 2xl:text-[0.9vw] text-[#292929]">Flight Leg</p>
            <p className="text-xs 2xl:text-[0.8vw] text-[#29292950]">Mon 02:00 - Mon 10:00</p>
          </div>
          <div>
            <MultiRangeSlider min={0} max={1000} />
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm 2xl:text-[0.9vw] text-[#292929]">Take-off from (DPS)</p>
            <p className="text-xs 2xl:text-[0.8vw] text-[#29292950]">Wed 02:00 - Wed 20:00</p>
          </div>
          <div>
            <MultiRangeSlider min={0} max={1000} />
          </div>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Price">
        <div className="py-5 flex flex-col gap-y-[15px] border-b border-[#29292950]">
          <p className="text-sm 2xl:text-[0.9vw] text-[#292929]">$200 - $1800</p>
          <div>
            <MultiRangeSlider min={0} max={1000} />
          </div>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Airlines">
        <div className="flex pt-[10px]">
          <button className="text-sm 2xl:text-[0.9vw] text-[#1e1e1e]">Select All</button>
          <div className="border-r boder-[#292929] mx-[10px]" />
          <button className="text-sm 2xl:text-[0.9vw] text-[#1e1e1e50]">Clear All</button>
        </div>
        <div className="py-[20px] border-b border-[#29292950] flex flex-col gap-y-2">
          <StopCheckBox stop="Garuda Indonesia" price="$280" />
          <StopCheckBox stop="Multiple Airlines" price="$620" />
          <StopCheckBox stop="Emirates" price="$280" />
          <StopCheckBox stop="Batik Air" price="$620" />
          <StopCheckBox stop="Singapore Airlines" price="$1280" />
          <StopCheckBox stop="Malaysia Airlines" price="$1280" />
        </div>
      </FilterAccordion>
      <FilterAccordion title="Flight Quality">
        <div className="py-[20px] border-b border-[#29292950] flex flex-col gap-y-2">
          <NormalCheckBox content="Show Wi-Fi Flights Only" />
          <NormalCheckBox content="Show Hacker Fares" />
          <NormalCheckBox content="Show Red-Eyes" />
        </div>
      </FilterAccordion>
      <FilterAccordion title="Airports">
        <div className="py-[20px] border-b border-[#29292950] flex flex-col gap-y-2">
          <StopCheckBox stop="Show Wi-Fi Flights Only" price="$1280" />

          <p className="text-base 2xl:text-[0.9vw] font-semibold py-[15px]">Bali</p>

          <StopCheckBox stop="(DPS): I Gusti Ngurah Rai" price="$280" />
          <StopCheckBox stop="Example" price="$280" />

          <p className="text-base 2xl:text-[0.9vw] font-semibold py-[15px]">London</p>

          <StopCheckBox stop="(LGW): London Gatwick Airpo.." price="$280" />
        </div>
      </FilterAccordion>
      <FilterAccordion title="Flight Quality">
        <div className="pb-[20px] border-b border-[#29292950] flex flex-col gap-y-2">
          <p className="text-base 2xl:text-[0.9vw] font-semibold py-[15px]">Indonesia</p>

          <NormalCheckBox content="Denpasar (DPS)" />
          <NormalCheckBox content="Makassar (UPG)" />
          <NormalCheckBox content="Jakarta (JKT)" />

          <p className="text-base font-semibold py-[15px]">England, UK</p>

          <NormalCheckBox content="London (LGW)" />
          <NormalCheckBox content="Example" />
        </div>
      </FilterAccordion>
      <FilterAccordion title="Booking Sites">
        <div className="py-[20px] flex flex-col gap-y-2">
          <NormalCheckBox content="Airlines Only" />
          <NormalCheckBox content="Batik Air" />
          <NormalCheckBox content="Booking.com" />
          <NormalCheckBox content="Expedia" />
          <NormalCheckBox content="FlightNetwork" />
          <NormalCheckBox content="Garuda Indonesia" />
        </div>
        <p className="text-sm 2xl:text-[0.9vw] text-[#1e1e1e]">Show 3 more</p>
      </FilterAccordion>
    </div>
  );
};

FilterSearchBar.propTypes = {
  visible: PropTypes.bool.isRequired,
};
