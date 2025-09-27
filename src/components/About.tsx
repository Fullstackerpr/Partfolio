import { memo } from "react";

const About = () => {
  return (
    <div className="bg-[#D7D7D7] text-center py-36 px-4">
      <div className="inline-block border-4 border-black px-10 py-4 mb-8">
        <h1 className="text-[30px] font-bold tracking-widest">ABOUT ME</h1>
      </div>

      <p className="max-w-2xl mx-auto text-sm mb-10">
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
        viverra facilisis ut ac est.
      </p>

      <div className="flex justify-center items-center gap-6 mb-6">
        <span className="w-8 h-px bg-black"></span>
        <button className="uppercase font-medium">Explore</button>
        <span className="w-8 h-px bg-black"></span>
      </div>

      <div className="mt-[108px] flex flex-col items-center gap-20">
        <div className="flex flex-row gap-40">
          <div className="text-left max-w-xs">
            <h4 className="font-bold tracking-widest mb-2">DESIGN</h4>
            <p className="text-xs">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>

          <div className="text-left max-w-xs">
            <h4 className="font-bold tracking-widest mb-2">DEVELOPMENT</h4>
            <p className="text-xs">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
        </div>

        <div className="text-left max-w-xs">
          <h4 className="font-bold tracking-widest mb-2">MAINTENANCE</h4>
          <p className="text-xs">
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
