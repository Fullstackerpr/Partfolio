import { Learning, Skills } from "@/types";
import { memo } from "react";

const Skill = () => {
  return (
    <div className="bg-[#D7D7D7] text-center py-36 px-4">
      <div className="inline-block border-4 border-black px-10 py-4 mb-[79px]">
        <h1 className="text-[30px] font-bold tracking-widest">SKILLS</h1>
      </div>

      <div className="px-[530px]">
        <h2 className="font-bold text-[30px] tracking-wider pb-[65px]">
          USING NOW:
        </h2>
        <div className="grid grid-cols-4">
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

      <div className="px-[530px]">
        <h2 className="font-bold text-[30px] tracking-wider pb-[65px]">
          LEARNING::
        </h2>
        <div className="grid grid-cols-4">
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
  );
};

export default memo(Skill);
