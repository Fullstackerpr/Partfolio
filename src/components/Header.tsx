// import { memo } from "react";

// const Header = () => {
//   return (
//     <header className="flex bg-[#D7D7D7]">
//       <div
//         className="w-full bg-[#D7D7D7] py-[25px] pl-42"
//         style={{
//           clipPath: "polygon(0 0, 100% 0, 94% 100%, 0% 100%)",
//         }}
//       >
//         <img src="/logoo.svg" alt="logo" width={57} />
//       </div>

//       <div
//         className="flex items-center justify-center w-full font-semibold"
//         style={{
//           backgroundColor: "black",
//           clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0% 100%)",
//         }}
//       >
//         <ul className="flex items-center gap-10 text-white">
//           <li>
//             <a href="#about" className="cursor-pointer hover:underline">
//               About me
//             </a>
//           </li>
//           <li>
//             <a href="#skill" className="cursor-pointer hover:underline">
//               Skills
//             </a>
//           </li>
//           <li>
//             <a href="#portfolio" className="cursor-pointer hover:underline">
//               Portfolio
//             </a>
//           </li>
//           <li>
//             <a href="#contact">
//               <button className="bg-white text-black px-6 py-2 rounded-full font-bold">
//                 CONTACT ME
//               </button>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default memo(Header);

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-[273px] py-6 flex items-center justify-between">
      <div className="text-white text-2xl font-bold">
        <img src="/logoo.svg" alt="Logo" className="w-[40px]" />
      </div>

      <nav>
        <ul className="flex items-center gap-10 text-white">
          <li>
            <a href="#about" className="cursor-pointer hover:underline underline-offset-6">
              About me
            </a>
          </li>
          <li>
            <a href="#skill" className="cursor-pointer hover:underline underline-offset-6">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="cursor-pointer hover:underline underline-offset-6">
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
