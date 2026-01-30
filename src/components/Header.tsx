"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="py-4 px-32 flex items-center justify-between">
          <img src="/myLogoo.png" alt="Logo" className="w-10 bg-amber-100" />

          <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skill">Skills</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>

            <a href="#contact">
              <button
                className="px-6 py-2 rounded-xl font-bold text-sm tracking-widest
                bg-gradient-to-r from-blue-500 to-purple-500 text-white
                hover:opacity-90 transition"
              >
                CONTACT
              </button>
            </a>

            <select className="bg-white/10 border border-white/10 text-white px-2 py-1 rounded-lg outline-none cursor-pointer">
              <option className="text-black" value="ru">
                🇷🇺 RU
              </option>
              <option className="text-black" value="en">
                🇺🇸 EN
              </option>
              <option className="text-black" value="uz">
                🇺🇿 UZ
              </option>
            </select>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10">
          <div className="flex flex-col items-center gap-6 py-10 text-gray-300">
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>
              About
            </MobileLink>
            <MobileLink href="#skill" onClick={() => setIsOpen(false)}>
              Skills
            </MobileLink>
            <MobileLink href="#portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </MobileLink>

            <a href="#contact" onClick={() => setIsOpen(false)}>
              <button
                className="px-8 py-3 rounded-xl font-bold tracking-widest
                bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              >
                CONTACT
              </button>
            </a>

            <select className="bg-white/10 border border-white/10 text-white px-3 py-2 rounded-lg outline-none cursor-pointer">
              <option className="text-black" value="ru">
                🇷🇺 RU
              </option>
              <option className="text-black" value="en">
                🇺🇸 EN
              </option>
              <option className="text-black" value="uz">
                🇺🇿 UZ
              </option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: any) => (
  <a
    href={href}
    className="relative hover:text-white transition after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
    after:bg-gradient-to-r after:from-blue-400 after:to-purple-500
    hover:after:w-full after:transition-all"
  >
    {children}
  </a>
);

const MobileLink = ({ href, children, onClick }: any) => (
  <a
    href={href}
    onClick={onClick}
    className="text-lg hover:text-white transition"
  >
    {children}
  </a>
);

export default Header;
