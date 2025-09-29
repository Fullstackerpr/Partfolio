import { Learning, Skills } from "@/types";
import { memo } from "react";

const Skill = () => {
  return (
    <section id="skill">
      <div className="bg-gradient-to-b from-[#D7D7D7] via-white to-[#D7D7D7] text-center py-36 px-12">
        <div className="inline-block border-4 px-10 py-4 mb-[79px]">
          <h1 className="text-[30px] font-bold tracking-widest">SKILLS</h1>
        </div>

        <div className="max-w-[1200px] mx-auto px-14">
          <h2 className="font-bold text-[30px] tracking-wider pb-[65px] text-center">
            USING NOW:
          </h2>
          <div className="grid grid-cols-4 gap-8">
            {Skills?.map((data, inx) => (
              <div
                key={inx}
                className="flex flex-col justify-center items-center"
              >
                <img src={data.img} alt="" width={84} />
                <h4 className="pt-[17px] font-normal text-[24px] pb-[65px]">
                  {data.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-14">
          <h2 className="font-bold text-[30px] tracking-wider pb-[65px] text-center">
            LEARNING:
          </h2>
          <div className="grid grid-cols-4 gap-8">
            {Learning?.map((data, inx) => (
              <div
                key={inx}
                className="flex flex-col justify-center items-center"
              >
                <img src={data.img} alt="" width={84} />
                <h4 className="pt-[17px] font-normal text-[24px] pb-[65px]">
                  {data.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Skill);
