import { Skills } from "@/types";
import { memo } from "react";

const Skill = () => {
  return (
    <section id="skill">
      <div className="bg-gradient-to-b from-[#D7D7D7] via-white to-[#D7D7D7] text-center py-36 px-6">
        <div className="inline-block border-4 px-10 py-4 mb-[79px]">
          <h1 className="text-[30px] font-bold tracking-widest">SKILLS</h1>
        </div>

        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-bold text-[30px] tracking-wider pb-[65px] text-center">
            USING NOW:
          </h2>

          <div className="block md:hidden overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 px-4 min-w-max">
              {Skills.map((data, inx) => (
                <div
                  key={inx}
                  className="flex flex-col justify-center items-center min-w-[70px]" 
                >
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-12 h-12 object-contain"
                  />
                  <h4 className="pt-2 text-sm">{data.name}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-6 gap-8 px-4">
            {Skills.map((data, inx) => (
              <div
                key={inx}
                className="flex flex-col justify-center items-center"
              >
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
                <h4 className="pt-4 text-lg">{data.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Skill);
