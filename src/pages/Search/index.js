import React from 'react';
import Navbar from '../../component/Navbar';
import SearchFunc from './searchFunc';
import FlightCard from './FlightCard';
import PriceTracker from './PriceTracker';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { TbAlignCenter } from 'react-icons/tb';
import HotelCard from './HotelCard';
import { Footer } from '../../component/Footer';

export const Search = () => {
  const hotels = [
    {
      id: 1,
      location: 'Kuala Lumpur',
      name: 'The Hotel 3121',
      distance: '2.41 from the city centre',
      price: '$250/Night',
      rating: 9.1,
      reviews: '7123 reviews',
      image: '../../Assets/Img/painting-3995999_1920.jpg' // Replace with actual image paths
    },
    {
      id: 2,
      location: 'Kuala Lumpur',
      name: 'The Hotel 3121',
      distance: '2.41 from the city centre',
      price: '$250/Night',
      rating: 9.1,
      reviews: '7123 reviews',
      image: '../../Assets/Img/painting-3995999_1920.jpg'
    },
    {
      id: 3,
      location: 'Kuala Lumpur',
      name: 'The Hotel 3121',
      distance: '2.41 from the city centre',
      price: '$250/Night',
      rating: 9.1,
      reviews: '7123 reviews',
      image: '../../Assets/Img/painting-3995999_1920.jpg'
    }
  ];
  return (
    <div>
      <Navbar />
      <SearchFunc />
      <div className="grid justify-center mt-8 grid-cols-4">
        <div className="col-span-1 ml-10 p-5">
          <PriceTracker />
        </div>
        <div className="col-span-3 mr-10 p-5 flex gap-5 flex-col">
          <div className="bg-white p-4 rounded-md shadow-md flex justify-between items-center">
            <span className="text-gray-600 text-lg">1820 Flights Found</span>
            <div className="flex items-center">
              <div className="text-gray-500 text-sm mr-1">
                <AiOutlineExclamationCircle />
              </div>
              <span className="text-gray-500 text-sm">Additional Bag Fees May Apply</span>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <div className="flex flex-col">
              <span className="font-bold">Cheapest</span>
              <span className="text-gray-500">$200 - 1h 06m</span>
            </div>
            <div className="border-l border-gray-300 h-8 mx-4"></div>
            <div className="flex flex-col">
              <span className="font-bold">Best</span>
              <span className="text-gray-500">$200 - 1h 06m</span>
            </div>
            <div className="border-l border-gray-300 h-8 mx-4"></div>
            <div className="flex flex-col">
              <span className="font-bold">Quickest</span>
              <span className="text-gray-500">$200 - 1h 06m</span>
            </div>
            <div className="border-l border-gray-300 h-8 mx-4"></div>
            <div className="flex item-center justify-center">
              <TbAlignCenter />
              <span className="text-gray-500">Other Sort</span>
            </div>
          </div>
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <button className="bg-[#1E1E1E] text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
            Load More
          </button>
          <div className="p-6 bg-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Stays Near Bali</h1>
                <p className="text-gray-600">Mon, 05 Jun - Wed, 07 Jun</p>
              </div>
              <div>
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
                  Find Hotels
                </button>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
