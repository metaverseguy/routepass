import { LinkedInSVG } from '../../SVGs/LinkedIn';
import { InstagramSVG } from '../../SVGs/Instagram';
import { XSVG } from '../../SVGs/X';
import { FacebookSVG } from '../../SVGs/Facebook';

export const Footer = () => {
  return (
    <div className="bg-[#2b2b2b] py-[40px] px-[70px] flex flex-col gap-[50px]">
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
  );
};
