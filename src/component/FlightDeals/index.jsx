import { DealCard } from '../Cards/DealCard';

export const FlightDeals = () => {
  return (
    <div className="flex flex-col items-center justify-center p-14 px-5 sm:px-14 md:px-16 text-[#292929] w-full">
      <div className="text-center max-w-[675px]">
        <p className="text-[28px] sm:text-[44px] 2xl:text-[2.5vw] font-semibold">
          Best Flight Deals
        </p>
        <p className="text-[16px] sm:text-[18px] 2xl:text-[1vw]">
          Get unbeatable prices on flights to your favorite destinations. Our curated deals ensure
          you save money while enjoying top-tier travel experiences
        </p>
      </div>
      <div className="flex flex-col gap-8 py-[60px] w-full">
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex-1 relative rounded-2xl overflow-hidden border basis-1/4">
              <DealCard
                city="Florence"
                country="Italy"
                price="$250"
                startDate="Wed, 23 Sep"
                endDate="Wed, 30 Sep"
                airInfo="LTN - TIA with Emirates Air UK"
                imgURL="assets/img/florence.png"
              />
            </div>
            <div className="flex-1 relative rounded-2xl overflow-hidden border basis-1/4">
              <DealCard
                city="Bali"
                country="Indonesia"
                price="$250"
                startDate="Wed, 23 Sep"
                endDate="Wed, 30 Sep"
                airInfo="LTN - TIA with Emirates Air UK"
                imgURL="assets/img/bali.png"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex-1 relative rounded-2xl overflow-hidden border basis-1/4">
              <DealCard
                city="Tokyo"
                country="Japan"
                price="$250"
                startDate="Wed, 23 Sep"
                endDate="Wed, 30 Sep"
                airInfo="LTN - TIA with Emirates Air UK"
                imgURL="assets/img/tokyo.png"
              />
            </div>
            <div className="flex-1 relative rounded-2xl overflow-hidden border basis-1/4">
              <DealCard
                city="Rio De Janeiro"
                country="Brazil"
                price="$250"
                startDate="Wed, 23 Sep"
                endDate="Wed, 30 Sep"
                airInfo="LTN - TIA with Emirates Air UK"
                imgURL="assets/img/riodejaneiro.png"
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex gap-4">
            <div className="relative rounded-2xl overflow-hidden border basis-1/4">
              <DealCard
                city="Paris"
                country="France"
                price="$250"
                startDate="Wed, 23 Sep"
                endDate="Wed, 30 Sep"
                airInfo="LTN - TIA with Emirates Air UK"
                imgURL="assets/img/paris.png"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden border basis-1/4">
              <DealCard
                city="Berlin"
                country="Germany"
                price="$250"
                startDate="Wed, 23 Sep"
                endDate="Wed, 30 Sep"
                airInfo="LTN - TIA with Emirates Air UK"
                imgURL="assets/img/berlin.png"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden border basis-1/4">
              <DealCard
                city="Vancouver"
                country="Canada"
                price="$250"
                startDate="Wed, 23 Sep"
                endDate="Wed, 30 Sep"
                airInfo="LTN - TIA with Emirates Air UK"
                imgURL="assets/img/vancouver.png"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden border basis-1/4">
              <DealCard
                city="London"
                country="England, UK"
                price="$250"
                startDate="Wed, 23 Sep"
                endDate="Wed, 30 Sep"
                airInfo="LTN - TIA with Emirates Air UK"
                imgURL="assets/img/london.png"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="px-7 py-4 bg-[#333333] rounded-[10px] text-white">See More</button>
    </div>
  );
};
