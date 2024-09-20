import { FilterAccordion } from '../../FilterAccordion';
import RangeSlider from '../RangeSlider';
export const FilterSearchBar = () => {
  return (
    <div className="w-1/3 h-full bg-white shadow rounded-[15px] gap-y-[27px] px-5 py-6">
      <FilterAccordion>
        <RangeSlider />
      </FilterAccordion>
    </div>
  );
};
