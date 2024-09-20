import { FilterAccordion } from '../../FilterAccordion';
import SwitchButton from '../../Buttons/SwitchButton';
import { useState } from 'react';
import MultiRangeSlider from '../../Multirangeslider';
import PropTypes from 'prop-types';

export const FilterSearchBar = ({ visible }) => {
  const [timesValue, setTimesValue] = useState('take-off');

  return (
    <div
      className={`bg-white  ${visible === 'mobile' ? 'rounded-none' : 'rounded-[15px] shadow'} flex flex-col gap-y-[27px] px-5 py-6 w-full`}>
      <div className="px-5 py-4 bg-[#f5f5f5] flex justify-between rounded-[10px]">
        <p className="text-[14px] font-semibold">Track Prices</p>
        <SwitchButton />
      </div>
      <FilterAccordion title="Stops">
        <div className="py-5 gap-[15px] border-b border-[#29292950]">
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Direct</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">from</p>
              <p className="text-sm text-[#292929]">$280</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">1 stop</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">from</p>
              <p className="text-sm text-[#292929]">$620</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">2+stops</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">from</p>
              <p className="text-sm text-[#292929]">$1280</p>
            </div>
          </label>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Times">
        <div className="py-5 border-b border-[#29292950] flex flex-col gap-y-5">
          <div className="bg-[#f5f5f5] rounded-[10px] p-[10px] gap-x-[10px] flex">
            <button
              className={`w-full  rounded-[8px]  py-[10px] font-semibold ${timesValue === 'take-off' ? 'bg-[#1e1e1e] text-white' : 'bg-[#ffffff] text-[#29292950]'}`}
              onClick={() => setTimesValue('take-off')}>
              Take-off
            </button>
            <button
              className={`w-full rounded-[8px] py-[10px] font-semibold ${timesValue === 'take-off' ? 'bg-[#ffffff] text-[#29292950]' : 'bg-[#1e1e1e] text-white'}`}
              onClick={() => setTimesValue('landing')}>
              Landing
            </button>
          </div>
          <div className="flex flex-col gap-y-[15px]">
            <div>
              <p className="text-sm text-[#292929]">Take-off from (DPS)</p>
              <p className="text-xs text-[#29292950]">Mon 02:00 - Mon 10:00</p>
            </div>
            <div>
              <MultiRangeSlider min={0} max={1000} />
            </div>
            <div className="">
              <p className="text-sm text-[#292929]">Take-off from (DPS)</p>
              <p className="text-xs text-[#29292950]">Wed 02:00 - Wed 20:00</p>
            </div>
            <div>
              <MultiRangeSlider min={0} max={1000} />
            </div>
          </div>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Duration">
        <div className="py-5 border-b border-[#29292950] flex flex-col gap-y-[15px]">
          <div>
            <p className="text-sm text-[#292929]">Flight Leg</p>
            <p className="text-xs text-[#29292950]">Mon 02:00 - Mon 10:00</p>
          </div>
          <div>
            <MultiRangeSlider min={0} max={1000} />
          </div>
          <div>
            <p className="text-sm text-[#292929]">Take-off from (DPS)</p>
            <p className="text-xs text-[#29292950]">Wed 02:00 - Wed 20:00</p>
          </div>
          <div>
            <MultiRangeSlider min={0} max={1000} />
          </div>
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
      <FilterAccordion title="Airlines">
        <div className="flex pt-[10px]">
          <button className="text-sm text-[#1e1e1e]">Select All</button>
          <div className="border-r boder-[#292929] mx-[10px]" />
          <button className="text-sm text-[#1e1e1e50]">Clear All</button>
        </div>
        <div className="py-[20px] border-b border-[#29292950]">
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Garuda Indonesia</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">from</p>
              <p className="text-sm text-[#292929]">$280</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Multiple Airlines</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">from</p>
              <p className="text-sm text-[#292929]">$620</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Emirates</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">from</p>
              <p className="text-sm text-[#292929]">$280</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Batik Air</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">from</p>
              <p className="text-sm text-[#292929]">$620</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Singapore Airlines</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">from</p>
              <p className="text-sm text-[#292929]">$1280</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Malaysia Airlines</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">from</p>
              <p className="text-sm text-[#292929]">$1280</p>
            </div>
          </label>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Flight Quality">
        <div className="py-[20px] border-b border-[#29292950]">
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Show Wi-Fi Flights Only</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Show Hacker Fares</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Show Red-Eyes</p>
            </div>
          </label>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Airports">
        <div className="py-[20px] border-b border-[#29292950]">
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Show Wi-Fi Flights Only</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">from</p>
              <p className="text-sm text-[#292929]">$1280</p>
            </div>
          </label>

          <p className="text-base font-semibold py-[15px]">Bali</p>

          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">(DPS): I Gusti Ngurah Rai</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">from</p>
              <p className="text-sm text-[#292929]">$280</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Example</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">from</p>
              <p className="text-sm text-[#292929]">$280</p>
            </div>
          </label>

          <p className="text-base font-semibold py-[15px]">London</p>

          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">(LGW): London Gatwick Airpo..</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-[#29292950]">from</p>
              <p className="text-sm text-[#292929]">$280</p>
            </div>
          </label>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Flight Quality">
        <div className="pb-[20px] border-b border-[#29292950]">
          <p className="text-base font-semibold py-[15px]">Indonesia</p>

          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Denpasar (DPS)</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Makassar (UPG)</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Jakarta (JKT)</p>
            </div>
          </label>

          <p className="text-base font-semibold py-[15px]">England, UK</p>

          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">London (LGW)</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Example</p>
            </div>
          </label>
        </div>
      </FilterAccordion>
      <FilterAccordion title="Booking Sites">
        <div className="py-[20px]">
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Airlines Only</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Batik Air</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Booking.com</p>
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
              <p className="text-sm text-[#292929]">FlightNetwork</p>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="direct" className="accent-black" />
              <p className="text-sm text-[#292929]">Garuda Indonesia</p>
            </div>
          </label>
        </div>
        <p className="text-sm text-[#1e1e1e]">Show 3 more</p>
      </FilterAccordion>
    </div>
  );
};

FilterSearchBar.propTypes = {
  visible: PropTypes.bool.isRequired,
};
