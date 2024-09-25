//Flight Hotel Page
import HotelCard from '../Cards/HotelCard';
import BestFlightDeal from '../Cards/BestFlightDeal';

export const FlightHotel = () => {
  const hotels = [
    {
      id: 1,
      location: 'Bandung',
      name: 'The Hotel 3121',
      distance: '2.41 from the city centre',
      price: '$250/Night',
      rating: 9.1,
      reviews: '7123 reviews',
      image: 'assets/img/hotels/bandung.png',
    },
    {
      id: 2,
      location: 'Jakarta',
      name: 'The Hotel 3121',
      distance: '2.41 from the city centre',
      price: '$250/Night',
      rating: 9.1,
      reviews: '7123 reviews',
      image: 'assets/img/hotels/jakarta.png',
    },
    {
      id: 3,
      location: 'Kuala Lumpur',
      name: 'The Hotel 3121',
      distance: '2.41 from the city centre',
      price: '$250/Night',
      rating: 9.1,
      reviews: '7123 reviews',
      image: 'assets/img/hotels/kuala lumpur.png',
    },
    {
      id: 3,
      location: 'Hawaii',
      name: 'The Hotel 3121',
      distance: '2.41 from the city centre',
      price: '$250/Night',
      rating: 9.1,
      reviews: '7123 reviews',
      image: 'assets/img/hotels/hawaii.png',
    },
    {
      id: 3,
      location: 'Kuala Lumpur',
      name: 'The Hotel 3121',
      distance: '2.41 from the city centre',
      price: '$250/Night',
      rating: 9.1,
      reviews: '7123 reviews',
      image: 'assets/img/hotels/hotel-2.png',
    },
    {
      id: 3,
      location: 'Lombok',
      name: 'The Hotel 3121',
      distance: '2.41 from the city centre',
      price: '$250/Night',
      rating: 9.1,
      reviews: '7123 reviews',
      image: 'assets/img/hotels/hotel-1.png',
    },
    {
      id: 3,
      location: 'London',
      name: 'The Hotel 3121',
      distance: '2.41 from the city centre',
      price: '$250/Night',
      rating: 9.1,
      reviews: '7123 reviews',
      image: 'assets/img/hotels/hotel-3.png',
    },
    {
      id: 3,
      location: 'New York',
      name: 'The Hotel 3121',
      distance: '2.41 from the city centre',
      price: '$250/Night',
      rating: 9.1,
      reviews: '7123 reviews',
      image: 'assets/img/hotels/new york.png',
    },
  ];

  const mostHotels = [
    {
      id: 1,
      location: 'Florence',
      country: 'Italy',
      price: '$250/Night',
      image: 'assets/img/hotels/jakarta.png',
    },
    {
      id: 1,
      location: 'Bali',
      country: 'Indonesia',
      price: '$250/Night',
      image: 'assets/img/hotels/bali.png',
    },
    {
      id: 1,
      location: 'Tokyo',
      country: 'Japan',
      price: '$250/Night',
      image: 'assets/img/hotels/tokyo.png',
    },
    {
      id: 1,
      location: 'Rio de Janeiro',
      country: 'Brazil',
      price: '$250/Night',
      image: 'assets/img/hotels/rio.png',
    },
    {
      id: 1,
      location: 'Paris',
      country: 'France',
      price: '$250/Night',
      image: 'assets/img/hotels/paris.png',
    },
    {
      id: 1,
      location: 'Berlin',
      country: 'Germany',
      price: '$250/Night',
      image: 'assets/img/hotels/berlin.png',
    },
    {
      id: 1,
      location: 'Vancouver',
      country: 'Canada',
      price: '$250/Night',
      image: 'assets/img/hotels/vancouver.png',
    },
    {
      id: 1,
      location: 'London',
      country: 'England, UK',
      price: '$250/Night',
      image: 'assets/img/hotels/london.png',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-14 px-5 sm:px-14 md:px-16 text-[#292929]">
      <div className="text-center max-w-[675px]">
        <p className="text-[28px] sm:text-[44px] 2xl:text-[2.5vw]">Best Flight Deals</p>
        <p className="text-[14px] sm:text-[18x] 2xl:text-[1vw]">
          Get unbeatable prices on flights to your favorite destinations. Our curated deals ensure
          you save money while enjoying top-tier travel experiences
        </p>
      </div>
      <div className="flex flex-col gap-8 py-[60px] w-full">
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex-1 relative rounded-2xl overflow-hidden border basis-1/4">
              <HotelCard hotel={hotels[0]} />
            </div>
            <div className="flex-1 relative rounded-2xl overflow-hidden border basis-1/4">
              <HotelCard hotel={hotels[1]} />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex-1 relative rounded-2xl overflow-hidden border basis-1/4">
              <HotelCard hotel={hotels[2]} />
            </div>
            <div className="flex-1 relative rounded-2xl overflow-hidden border basis-1/4">
              <HotelCard hotel={hotels[3]} />
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-full">
          <div className="flex gap-4">
            <div className="relative rounded-2xl overflow-hidden border basis-1/4">
              <HotelCard hotel={hotels[4]} />
            </div>
            <div className="relative rounded-2xl overflow-hidden border basis-1/4">
              <HotelCard hotel={hotels[5]} />
            </div>
            <div className="relative rounded-2xl overflow-hidden border basis-1/4">
              <HotelCard hotel={hotels[6]} />
            </div>
            <div className="relative rounded-2xl overflow-hidden border basis-1/4">
              <HotelCard hotel={hotels[7]} />
            </div>
          </div>
        </div>
      </div>
      <button className="px-7 py-4 bg-[#333333] rounded-[10px] text-white">See More</button>
      <div className="text-center max-w-[675px]">
        <p className="text-[28px] sm:text-[44px] 2xl:text-[2.5vw]">Most Popular Cities</p>
        <p className="text-[14px] sm:text-[18x] 2xl:text-[1vw]">
          Get unbeatable prices on flights to your favorite destinations. Our curated deals ensure
          you save money while enjoying top-tier travel experiences
        </p>
      </div>
      <div className="flex flex-col gap-8 py-[60px] w-full">
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex-1 relative rounded-2xl overflow-hidden border basis-1/4">
              <BestFlightDeal hotel={mostHotels[0]} />
            </div>
            <div className="flex-1 relative rounded-2xl overflow-hidden border basis-1/4">
              <BestFlightDeal hotel={mostHotels[1]} />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex-1 relative rounded-2xl overflow-hidden border basis-1/4">
              <BestFlightDeal hotel={mostHotels[2]} />
            </div>
            <div className="flex-1 relative rounded-2xl overflow-hidden border basis-1/4">
              <BestFlightDeal hotel={mostHotels[3]} />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex gap-4">
            <div className="relative rounded-2xl overflow-hidden border basis-1/4">
              <BestFlightDeal hotel={mostHotels[4]} />
            </div>
            <div className="relative rounded-2xl overflow-hidden border basis-1/4">
              <BestFlightDeal hotel={mostHotels[5]} />
            </div>
            <div className="relative rounded-2xl overflow-hidden border basis-1/4">
              <BestFlightDeal hotel={mostHotels[6]} />
            </div>
            <div className="relative rounded-2xl overflow-hidden border basis-1/4">
              <BestFlightDeal hotel={mostHotels[7]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
