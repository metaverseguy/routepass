import PropTypes from 'prop-types';
import { BiX } from 'react-icons/bi';

export const SearchResult = ({ from, to, depart, travllers, classType, onClearHandle }) => {
  return (
    <div className="flex flex-col 2xl:flex-row mb-5 gap-[5px]">
      <div className="flex gap-[5px] 2xl:flex-row flex-col w-full items-stretch justify-center content-stretch">
        <div className="flex flex-col md:flex-row gap-[5px] basis-2/5">
          <div className=" border-black p-5 bg-gray-100 rounded-[7px] text-left w-full basis-1/2">
            <p className="text-xs text-left text-[#29292950]">From</p>
            <input
              type="text"
              placeholder="From"
              className="text-xs bg-gray-100 text-[#292929] w-full"
              defaultValue={from}
            />
          </div>
          <div className=" border-black p-5 bg-gray-100 rounded-[7px] w-full basis-1/2">
            <p className="text-xs text-left text-[#29292950]">To</p>
            <div className="flex relative">
              <input
                type="text"
                placeholder="From"
                className="text-xs bg-gray-100 text-[#292929] w-full"
                defaultValue={to}
              />
              <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center absolute lg:-top-[10px] lg:-left-[40px] md:-top-[10px] md:-left-[40px] -ml-4 md:ml-0 -top-[54px] left-[50%]">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.91752 2.08132C9.81583 1.97603 9.75957 1.83502 9.76084 1.68865C9.76211 1.54228 9.82082 1.40226 9.92432 1.29876C10.0278 1.19526 10.1678 1.13655 10.3142 1.13528C10.4606 1.134 10.6016 1.19027 10.7069 1.29196L13.4981 4.08318C13.6027 4.18786 13.6615 4.32983 13.6615 4.47785C13.6615 4.62588 13.6027 4.76785 13.4981 4.87253L10.7069 7.66375C10.6016 7.76544 10.4606 7.8217 10.3142 7.82043C10.1678 7.81916 10.0278 7.76045 9.92432 7.65695C9.82082 7.55345 9.76211 7.41343 9.76084 7.26706C9.75957 7.12069 9.81583 6.97968 9.91752 6.87439L11.7558 5.0361H4.17152C4.02347 5.0361 3.88148 4.97728 3.77679 4.87259C3.6721 4.7679 3.61328 4.62591 3.61328 4.47785C3.61328 4.3298 3.6721 4.18781 3.77679 4.08312C3.88148 3.97843 4.02347 3.91961 4.17152 3.91961H11.7558L9.91752 2.08132ZM7.35742 8.78023C7.45911 8.67495 7.51538 8.53394 7.5141 8.38757C7.51283 8.2412 7.45412 8.10118 7.35062 7.99768C7.24712 7.89418 7.1071 7.83547 6.96073 7.83419C6.81436 7.83292 6.67335 7.88919 6.56806 7.99088L3.77685 10.7821C3.67219 10.8868 3.6134 11.0287 3.6134 11.1768C3.6134 11.3248 3.67219 11.4668 3.77685 11.5715L6.56806 14.3627C6.67335 14.4644 6.81436 14.5206 6.96073 14.5194C7.1071 14.5181 7.24712 14.4594 7.35062 14.3559C7.45412 14.2524 7.51283 14.1123 7.5141 13.966C7.51538 13.8196 7.45911 13.6786 7.35742 13.5733L5.51912 11.735H13.1034C13.2515 11.735 13.3935 11.6762 13.4982 11.5715C13.6028 11.4668 13.6617 11.3248 13.6617 11.1768C13.6617 11.0287 13.6028 10.8867 13.4982 10.782C13.3935 10.6773 13.2515 10.6185 13.1034 10.6185H5.51912L7.35742 8.78023Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[5px] flex-col md:flex-row w-full basis-3/5">
          <div className=" border-black p-5 bg-gray-100 rounded-[7px] basis-1/3 text-left w-full">
            <p className="text-xs text-left text-[#29292950]">Depart</p>
            <input
              type="text"
              placeholder="From"
              className="text-xs bg-gray-100 text-[#292929] w-full"
              defaultValue={depart}
            />
          </div>
          <div className=" border-black p-5 bg-gray-100 rounded-[7px] text-left basis-1/3 w-full">
            <p className="text-xs text-left text-[#29292950]">Travellers</p>
            <input
              type="text"
              placeholder="From"
              className="text-xs bg-gray-100 text-[#292929] w-full"
              defaultValue={travllers}
            />
          </div>
          <div className=" border-black p-5 bg-gray-100 rounded-[7px] basis-1/3 text-left w-full">
            <p className="text-xs text-left text-[#29292950]">Class</p>
            <input
              type="text"
              placeholder="From"
              className="text-xs bg-gray-100 text-[#292929] w-full"
              defaultValue={classType}
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => onClearHandle()}
        className="flex-1 text-white md:py-5 py-4 px-5 bg-[#f10000] rounded-[7px] flex justify-center items-center">
        <BiX color="white" /> Clear
      </button>
    </div>
  );
};

SearchResult.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  depart: PropTypes.string.isRequired,
  travllers: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
  onClearHandle: PropTypes.any.isRequired,
};
