import { memo } from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-screen overflow-hidden bg-[#D7D7D7]">
        <div
          className="px-[273px] flex flex-col justify-center font-bold bg-[#D7D7D7]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 94% 100%, 0% 100%)",
          }}
        >
          <h4 className="text-[40px]">Hi, I am</h4>
          <h1 className="text-[80px] leading-[90px] w-[300px] mb-6">
            Bahodir Nabijanov
          </h1>
          <p className="text-[#909090] text-[25px] mb-6">
            Full-Stack Developer
          </p>

          <div className="flex gap-4">
            <img
              src="/mail.svg"
              alt="mail"
              className="w-8 h-8 cursor-pointer"
            />
            <a
              href="https://github.com/Fullstackerpr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/git.svg"
                alt="github"
                className="w-8 h-8 cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com/in/bahodir-nabijanov-816804350/" target="_blank" rel="noopener noreferrer">
              <img
                src="/in.svg"
                alt="linkedin"
                className="w-8 h-8 cursor-pointer"
              />
            </a>
          </div>
        </div>

        <div
          className="flex justify-center items-center w-full h-full bg-black"
          style={{
            clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <img
            src="/myimg.jpg"
            alt="hero"
            className="w-[500px] h-[600px] object-contain"
          />
        </div>
      </div>

      <div className="flex gap-[100px] bg-[#1D1D1D] text-white px-[102px]">
        <div className="w-full py-[54px]">
          <h2 className="font-bold text-[30px] mb-[60px]">IT BERRIES</h2>
          <p className="mb-[26px] text-[15px]">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est. Morbi commodo, eros in
            dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
            tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
            Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
            varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
            tempor, accumsan nec eros.{" "}
          </p>
          <button className="font-semibold text-[15px]">READ MORE</button>
        </div>

        <div className="full">
          <img src="/itb.png" alt="" className="h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
