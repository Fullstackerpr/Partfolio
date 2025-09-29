'use client';


import { memo } from "react";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const smoothSc = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#1A1A1A] text-white text-center py-[49px]">
      <div onClick={smoothSc} className="mb-[43px] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mb-2 cursor-pointer">
          <span className="block w-2 h-2 border-t-2 border-l-2 rotate-45 border-white" />
          <span className="block w-2 h-2 border-t-2 border-l-2 rotate-45 border-white" />
        </div>
        <p className="">BACK TO TOP</p>
      </div>

      <div className="flex justify-center gap-[28px] mb-[43px]">
        <Facebook />
        <Linkedin />
        <Instagram />
        <Mail />
      </div>
      <div>
        <p>@2025 Bahodir Nabijanov All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default memo(Footer);
