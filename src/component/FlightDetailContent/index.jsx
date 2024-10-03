// import { useState } from 'react';
import FlightPriceCard from '../Cards/FlightPriceCard';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { PriceCard } from '../Cards/PriceCard';

export const FlightDetailContent = () => {
  // const [ticketPrice, setTicketPrice] = useState({ name: '$200', code: 'en' });
  const priceCards = [
    {
      city: 'Expedia',
      rating: '8,5',
      reviews: '(1290 Reviews)',
      price: '$520',
      totalPrice: 'Total $1040',
    },
    {
      city: 'Kayak',
      rating: '8,5',
      reviews: '(1290 Reviews)',
      price: '$520',
      totalPrice: 'Total $1040',
    },
    {
      city: 'Skyscanner',
      rating: '4.3',
      reviews: '(1290 Reviews)',
      price: '$520',
      totalPrice: 'Total $1040',
    },
    {
      city: 'Google Flights',
      rating: '2.5',
      reviews: '(1290 Reviews)',
      price: '$520',
      totalPrice: 'Total $1040',
    },
    {
      city: 'Momondo',
      rating: '8,5',
      reviews: '(1290 Reviews)',
      price: '$520',
      totalPrice: 'Total $1040',
    },
    {
      city: 'Orbitz',
      rating: '8,5',
      reviews: '(1290 Reviews)',
      price: '$520',
      totalPrice: 'Total $1040',
    },
    {
      city: 'CheapOair',
      rating: '8,5',
      reviews: '(1290 Reviews)',
      price: '$520',
      totalPrice: 'Total $1040',
    },
    {
      city: 'Travelocity',
      rating: '8,5',
      reviews: '(1290 Reviews)',
      price: '$520',
      totalPrice: 'Total $1040',
    },
    {
      city: 'Garuda Indonesia',
      rating: '8,5',
      reviews: '(1290 Reviews)',
      price: '$520',
      totalPrice: 'Total $1040',
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1440px] flex flex-col md:flex-row  md:gap-x-5 px-5 sm:px-[60px] py-[62px] sm:py-10 bg-whitesmoke">
        <div className="w-full md:w-3/5 flex flex-col gap-y-[15px] sm:gap-y-5 md:gap-y-10">
          <p className="text-[18px] sm:text-[24px] font-semibold c-chromaphobicblack">
            Flight Details
          </p>
          <div className="flex flex-col gap-y-[13px] sm:gap-y-[17px] md:gap-y-5">
            <FlightPriceCard />
            <FlightPriceCard />
            <FlightPriceCard />
          </div>
        </div>
        <div className="w-full flex flex-col md:w-2/5 gap-y-[15px] sm:gap-y-5 md:gap-y-10">
          <p className="text-[18px] sm:text-[24px] font-semibold c-chromaphobicblack">
            Book Your Tickets
          </p>
          <div className="flex flex-col gap-y-[10px] sm:gap-y-5">
            <div className="flex justify-between rounded-[7px] sm:rounded-[10px] bg-white shadow px-4 sm:px-5 py-[10px] sm:py-3">
              <p className="text-[10px] sm:text-sm c-chromaphobicblackhalf">
                9 Platforms Available
              </p>
              <div className="text-[10px] sm:text-sm flex items-center">
                <p className="c-chromaphobicblackhalf">Price (Low to High)</p>
                <MdKeyboardArrowDown color={'#29292950'} />
              </div>
            </div>
            <div className="flex flex-col gap-y-[7px] sm:gap-y-[10px]">
              {priceCards.map((item, index) => (
                <PriceCard
                  key={index}
                  city={item.city}
                  rating={item.rating}
                  reviews={item.reviews}
                  price={item.price}
                  totalPrice={item.totalPrice}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
