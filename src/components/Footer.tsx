import { memo } from "react";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] text-white text-center py-[69px]">
      <p className="pb-[43px]">BACK TO TOP</p>
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
