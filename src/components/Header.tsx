import { memo } from "react";

const Header = () => {
  return (
    <header className="flex bg-[#D7D7D7]">
      <div
        className="w-full bg-[#D7D7D7] py-[25px] pl-42"
        style={{
          clipPath: "polygon(0 0, 100% 0, 94% 100%, 0% 100%)",
        }}
      >
        <img src="/logoo.svg" alt="logo" width={57} />
      </div>

      <div
        className="flex items-center justify-center w-full font-semibold"
        style={{
          backgroundColor: "black",
          clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <ul className="flex items-center gap-10 text-white">
          <li className="cursor-pointer">About me</li>
          <li className="cursor-pointer">Skills</li>
          <li className="cursor-pointer">Portfolio</li>
          <li>
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold">
              CONTACT ME
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
