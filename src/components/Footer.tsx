"use client";

import { memo } from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  const smoothSc = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <div className="absolute left-1/4 top-0 w-72 h-72 bg-blue-600/10 blur-[120px]" />
      <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-purple-600/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 py-5 text-center">
        <div
          onClick={smoothSc}
          className="mb-14 inline-flex flex-col items-center gap-2 cursor-pointer group"
        >
          <div className="flex flex-col items-center">
            <span className="block w-2 h-2 border-t-2 border-l-2 rotate-45 border-white/70 group-hover:border-blue-400 transition" />
            <span className="block w-2 h-2 border-t-2 border-l-2 rotate-45 border-white/70 group-hover:border-blue-400 transition" />
          </div>
          <p className="text-xs tracking-[0.3em] text-gray-400 group-hover:text-blue-400 transition">
            BACK TO TOP
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-4">
          <Social
            href="https:t.me/fullstackerpr"
            icon={<FaTelegram size={22} />}
          />
          <Social
            href="https://www.linkedin.com/in/bahodir-nabijanov-816804350/"
            icon={<Linkedin size={22} />}
          />
          <Social
            href="https://instagram.com/nabijanov_uz"
            icon={<Instagram size={22} />}
          />
          <Social
            href="mailto:bahodirnabijanov782@gmail.com"
            icon={<Mail size={22} />}
          />
        </div>

        <p className="text-xs text-gray-500 tracking-widest uppercase">
          © 2025 Bahodir Nabijanov — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

const Social = ({ href, icon }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 
    flex items-center justify-center text-gray-400
    hover:text-white hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20
    transition-all duration-300"
  >
    {icon}
  </a>
);

export default memo(Footer);
