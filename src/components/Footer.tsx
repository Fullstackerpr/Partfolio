"use client";

import { memo } from "react";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const smoothSc = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#1A1A1A] text-white text-center py-6 md:py-[49px]">
      <div
        onClick={smoothSc}
        className="mb-6 md:mb-[43px] flex flex-col items-center justify-center cursor-pointer"
      >
        <div className="flex flex-col items-center mb-1 md:mb-2">
          <span className="block w-2 h-2 border-t-2 border-l-2 rotate-45 border-white" />
          <span className="block w-2 h-2 border-t-2 border-l-2 rotate-45 border-white" />
        </div>
        <p className="text-xs md:text-sm tracking-wide">BACK TO TOP</p>
      </div>

      <div className="flex justify-center gap-4 md:gap-[28px] mb-6 md:mb-[43px]">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <Facebook className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/bahodir-nabijanov-816804350/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a
          href="https://instagram.com/nabijanov_uz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <Instagram className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a
          href="mailto:bahodirnabijanov782@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <Mail className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>

      <div>
        <p className="text-xs md:text-sm">
          ©2025 Bahodir Nabijanov. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default memo(Footer);
