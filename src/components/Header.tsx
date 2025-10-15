"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 md:px-[273px] py-6 flex items-center justify-between">
      <div className="text-white text-2xl font-bold">
        <img src="/logoo.svg" alt="Logo" className="w-[40px]" />
      </div>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-10 text-white">
          <li>
            <a
              href="#about"
              className="cursor-pointer hover:underline underline-offset-6"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#skill"
              className="cursor-pointer hover:underline underline-offset-6"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="cursor-pointer hover:underline underline-offset-6"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact">
              <button className="bg-white text-black px-6 py-2 rounded-full font-bold cursor-pointer">
                CONTACT ME
              </button>
            </a>
          </li>
          <li>
            <select
              name=""
              id=""
              className="bg-white text-black px-2 py-1 rounded cursor-pointer outline-0"
            >
              <option value="ru">🇷🇺 RU</option>
              <option value="en">🇺🇸 EN</option>
              <option value="uz">🇺🇿 UZ</option>
            </select>
          </li>
        </ul>
      </nav>

      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 md:hidden">
          <a
            href="#about"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            About me
          </a>
          <a
            href="#skill"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#portfolio"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold cursor-pointer">
              CONTACT ME
            </button>
          </a>
          <select
            name=""
            id=""
            className="bg-white text-black px-2 py-1 rounded cursor-pointer outline-0"
          >
            <option value="ru">🇷🇺 RU</option>
            <option value="en">🇺🇸 EN</option>
            <option value="uz">🇺🇿 UZ</option>
          </select>
        </div>
      )}
    </header>
  );
};

export default Header;
