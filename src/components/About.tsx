import { memo } from "react";

const About = () => {
  return (
    <div className="bg-[#D7D7D7] text-center py-36 px-4">
      <div className="inline-block border-4 px-10 py-4 mb-8">
        <h1 className="text-[30px] font-bold tracking-widest">ABOUT ME</h1>
      </div>

      <p className="max-w-2xl mx-auto text-sm mb-10">
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
        viverra facilisis ut ac est.
      </p>

      <div className="flex justify-center items-center gap-6 mb-[85px]">
        <div className="flex items-center mt-8">
          <div className="border-1 h-6 mr-4" />
          <button
            type="submit"
            className="tracking-widest font-semibold text-sm"
          >
            EXPLORE
          </button>
          <div className="border-1 h-6 ml-4" />
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <div className="w-16 border-t mr-2" />
        <div className="w-4 h-1 border-b-2 transform rotate-45 mr-2" />
        <div className="w-4 h-1 border-b-2 transform rotate-45 mr-2" />
        <div className="w-4 h-1 border-b-2 transform -rotate-45" />
        <div className="w-4 h-1 border-b-2 transform -rotate-45" />
        <div className="w-16 border-t ml-2" />
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
