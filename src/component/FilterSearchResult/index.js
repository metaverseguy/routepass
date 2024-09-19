import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { TbAlignCenter } from 'react-icons/tb';
import HotelCard from '../Cards/HotelCard';
import FlightCard from '../Cards/FlightCard';

export const FilterSearchResult = () => {
  const hotels = [
    {
      id: 1,
      location: 'Kuala Lumpur',
      name: 'The Hotel 3121',
      distance: '2.41 from the city centre',
      price: '$250/Night',
      rating: 9.1,
      reviews: '7123 reviews',
      image: 'assets/img/hotels/hotel-2.png' // Replace with actual image paths
    },
    {
      id: 2,
      location: 'Kuala Lumpur',
      name: 'The Hotel 3121',
      distance: '2.41 from the city centre',
      price: '$250/Night',
      rating: 9.1,
      reviews: '7123 reviews',
      image: 'assets/img/hotels/hotel-1.png'
    },
    {
      id: 3,
      location: 'Kuala Lumpur',
      name: 'The Hotel 3121',
      distance: '2.41 from the city centre',
      price: '$250/Night',
      rating: 9.1,
      reviews: '7123 reviews',
      image: 'assets/img/hotels/hotel-3.png'
    }
  ];
  return (
    <div className="flex flex-col w-full gap-y-10">
      <div className="flex flex-col gap-y-5">
        <div className="flex px-5 py-3 bg-white shadow justify-between rounded-[10px]">
          <span className="text-[#29292950] text-sm">1820 Flights Found</span>
          <div className="flex items-center">
            <AiOutlineExclamationCircle color="#1e1e1e" />
            <span className="text-[#1e1e1e] text-sm">Additional Bag Fees May Apply</span>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white px-5 py-[17px] rounded-lg shadow">
          <div className="flex flex-col">
            <p className="font-semibold text-[20px] text-[#292929]">Cheapest</p>
            <div className="flex">
              <p className="text-[#292929] font-semibold text-[18px]">$200</p>
              <p className="text-[#29292950] font-semibold text-[18px]"> - 1h 06m</p>
            </div>
          </div>
          <div className="border-[2.5px] border-[#29292950] h-8 mx-4"></div>
          <div className="flex flex-col">
            <p className="font-semibold text-[20px] text-[#292929]">Best</p>
            <div className="flex">
              <p className="text-[#292929] font-semibold text-[18px]">$200</p>
              <p className="text-[#29292950] font-semibold text-[18px]"> - 1h 06m</p>
            </div>
          </div>
          <div className="border-[2.5px] border-[#29292950] h-8 mx-4"></div>
          <div className="flex flex-col">
            <p className="font-semibold text-[20px] text-[#292929]">Quickest</p>
            <div className="flex">
              <p className="text-[#292929] font-semibold text-[18px]">$200</p>
              <p className="text-[#29292950] font-semibold text-[18px]"> - 1h 06m</p>
            </div>
          </div>
          <div className="border-[2.5px] border-[#29292950] h-8 mx-4"></div>
          <div className="flex items-center justify-center">
            <TbAlignCenter color="#29292950" />
            <span className="text-[#29292950] text-[16px]">Other Sort</span>
          </div>
        </div>
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <button className="bg-[#1E1E1E] text-white py-4 rounded-[10px] text-[20px] font-semibold">
          Load More
        </button>
      </div>
      <div className="">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-[#292929] font-semibold text-[32px]">Stays Near Bali</h1>
            <p className="text-[#29292950] font-semibold text-[18px]">Mon, 05 Jun - Wed, 07 Jun</p>
          </div>
          <button className="px-6 py-3 bg-[#1e1e1e] text-[16px] text-white rounded-[10px]">
            Find Hotels
          </button>
        </div>
        <div className="flex gap-x-4 py-5">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};
