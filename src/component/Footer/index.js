import { LinkedInSVG } from '../SVGs/LinkedIn';
import { InstagramSVG } from '../SVGs/Instagram';
import { XSVG } from '../SVGs/X';
import { FacebookSVG } from '../SVGs/Facebook';

export const Footer = () => {
  return (
    <div className="bg-[#2b2b2b] py-[40px] px-[70px]">
      <div className="flex justify-center items-center gap-7 mb-[50px]">
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
      <div className="flex justify-between">
        <div className="flex gap-[30px]">
          <p className="text-white text-sm underline">Terms & conditions</p>
          <p className="text-white text-sm underline">Privacy policy</p>
        </div>
        <p className="text-white text-sm">Copyright © 2024 RoutePass , All rights reserved</p>
        <div className="flex gap-[30px] self-end">
          <p className="text-white text-sm underline">Contact</p>
          <p className="text-white text-sm underline">Informations</p>
        </div>
      </div>
    </div>
  );
};
