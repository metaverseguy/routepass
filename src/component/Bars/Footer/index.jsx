import { LinkedInSVG } from '../../SVGs/LinkedIn';
import { InstagramSVG } from '../../SVGs/Instagram';
import { XSVG } from '../../SVGs/X';
import { FacebookSVG } from '../../SVGs/Facebook';
import { FilterAccordion } from '../../FilterAccordion';

export const Footer = () => {
  return (
    <div className="bg-[#1e1e1e] flex justify-center items-center">
      <div className="max-w-[1440px] w-full py-[40px] px-[70px] flex flex-col gap-[50px]">
        <div className="flex justify-center items-center gap-7">
          <a href="">
            <LinkedInSVG />
          </a>
          <a href="">
            <InstagramSVG />
          </a>
          <a href="">
            <XSVG />
          </a>
          <a href="">
            <FacebookSVG />
          </a>
        </div>
        <div className="grid place-content-between text-white text-sm grid-cols-1 lg:grid-cols-4 gap-y-10">
          <div className="flex lg:block flex-col gap-y-4">
            <button className="lg:hidden flex items-center justify-center gap-x-2 text-sm font-semibold bg-[#535353] text-white p-2 rounded-[8px] w-full lg:w-auto">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.10579 4.44719C1.8588 3.95321 2.05903 3.35254 2.55301 3.10555C3.04698 2.85856 3.64766 3.05878 3.89465 3.55276L4.92453 5.61252C5.87133 5.2179 6.91022 5 8 5C9.08992 5 10.1289 5.21796 11.0758 5.61267L12.1058 3.55276C12.3528 3.05878 12.9535 2.85856 13.4474 3.10555C13.9414 3.35254 14.1416 3.95321 13.8946 4.44719L12.8135 6.60955C14.7489 8.06969 16 10.3887 16 13H0C0 10.3886 1.25122 8.06944 3.18685 6.60931L2.10579 4.44719ZM4.5 11C5.05228 11 5.5 10.5523 5.5 10C5.5 9.44772 5.05228 9 4.5 9C3.94772 9 3.5 9.44772 3.5 10C3.5 10.5523 3.94772 11 4.5 11ZM12.5 10C12.5 10.5523 12.0523 11 11.5 11C10.9477 11 10.5 10.5523 10.5 10C10.5 9.44772 10.9477 9 11.5 9C12.0523 9 12.5 9.44772 12.5 10Z"
                  fill="white"></path>
              </svg>
              Get our app
            </button>
            <button className="text-sm font-semibold bg-[#535353] text-white p-2 rounded-[8px] w-full lg:w-auto">
              Canada · English (US) · C$ CAD
            </button>
          </div>
          <div className="flex flex-col gap-y-2 font-semibold">
            <p>Help</p>
            <p>Privacy Setting</p>
            <p>Log in</p>
          </div>
          <div className="flex flex-col gap-y-2 font-semibold">
            <p>Cookie policy</p>
            <p>Privacy policy</p>
            <p>Terms of service</p>
            <p>Company Details</p>
            <p>Do Not Sell or Share My Personal Information</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <FilterAccordion title="Explore" props="!bg-[#2b2b2b] text-white !text-sm">
              <div className="ml-5 py-5 gap-[15px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
                <p>Domestic flights</p>
                <p>Cities +</p>
                <p>Last-minute deals</p>
                <p>Aireports</p>
                <p>Countries</p>
                <p>Alrlines</p>
                <p>Flights</p>
                <p>Hotels Deal in Popular Cities</p>
                <p>Car rental</p>
                <p>App</p>
                <p>Sitemap</p>
              </div>
            </FilterAccordion>
            <FilterAccordion title="Company" props="!bg-[#2b2b2b] text-white !text-sm">
              <div className="ml-5 py-5 gap-[15px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
                <p>About us</p>
                <p>Why Routepass?</p>
                <p>Media</p>
                <p>Our people</p>
                <p>Accessibility</p>
                <p>Sustainability</p>
                <p>Jobs</p>
                <p>Travel features & news</p>
                <p>Security</p>
              </div>
            </FilterAccordion>
            <FilterAccordion title="Partners" props="!bg-[#2b2b2b] text-white !text-sm">
              <div className="ml-5 py-5 gap-[15px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
                <p>Work with us</p>
                <p>Advertise with us</p>
                <p>Travel Insight</p>
                <p>Affiliates</p>
                <p>Travel APIs</p>
              </div>
            </FilterAccordion>
            <FilterAccordion title="Trips" props="!bg-[#2b2b2b] text-white !text-sm">
              <div className="ml-5 py-5 gap-[15px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
                <p>Flights +</p>
                <p>Hotels Deals in Popular Cities +</p>
                <p>Car rental +</p>
              </div>
            </FilterAccordion>
            <FilterAccordion title="International Sites" props="!bg-[#2b2b2b] text-white !text-sm">
              <div className="ml-5 py-5 gap-[15px] border-b border-[#29292950] flex flex-col gap-y-[15px]">
                <p>(AU) Australia-Cheap flights</p>
                <p>(BR) Brasil - passagens aéreas</p>
                <p>(CA) Canada - flights</p>
                <p>(CN) 中国 - 机票</p>
                <p>(IN) India - Flight tickets</p>
                <p>(MX) México - vuelos</p>
                <p>(NL) Vliegtickets</p>
                <p>(NO) Billige flybilletter</p>
                <p>(PL) Polska – tanie loty</p>
                <p>(RU) Россия - авиабилеты</p>
                <p>(ES) España - vuelos</p>
                <p>(SE) Sverige - flyg</p>
                <p>(CH) Schweiz - Flüge</p>
                <p>(TR) Türkiye - uçak biletleri</p>
                <p>(AE) United Arab Emirates - flights</p>
                <p>(GB) Cheap flights</p>
                <p>(US) USA - flights</p>
              </div>
            </FilterAccordion>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-between gap-[40px]">
          <div className="flex flex-col justify-center sm:flex-row gap-[40px] lg:gap-[30px]">
            <p className="text-white text-sm underline text-center">Terms & conditions</p>
            <p className="text-white text-sm underline text-center">Privacy policy</p>
          </div>
          <p className="text-white text-sm hidden lg:block">
            Copyright © 2024 RoutePass , All rights reserved
          </p>
          <div className="flex flex-col sm:flex-row gap-[40px] lg:gap-[30px] self-auto sm:self-end">
            <p className="text-white text-sm underline text-center">Contact</p>
            <p className="text-white text-sm underline text-center">Informations</p>
          </div>
        </div>
        <p className="text-white text-center text-sm block lg:hidden">
          Copyright © 2024 RoutePass , All rights reserved
        </p>
      </div>
    </div>
  );
};
