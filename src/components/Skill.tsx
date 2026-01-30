import { Skills } from "@/types";
import { memo } from "react";

const Skill = () => {

  return (
    <section id="skill" className="relative bg-[#050505] py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-blue-500 font-bold tracking-[0.3em] text-sm uppercase mb-4">
            Mening arsenalim
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            TEXNOLOGIYALAR
          </h1>
          <div className="h-1.5 w-20 bg-blue-600 mt-6 rounded-full" />
        </div>

        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-gray-400 font-medium text-xl mb-12 flex items-center justify-center gap-4">
              <span className="h-[1px] w-12 bg-gray-800"></span>
              HOZIRDA FOYDALANAYOTGANLARIM
              <span className="h-[1px] w-12 bg-gray-800"></span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-10">
              {Skills.map((data, inx) => (
                <div
                  key={inx}
                  className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-500 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 rounded-2xl blur-xl transition-all duration-500" />
                  
                  <div className="relative transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ease-out">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  <h4 className="relative mt-6 text-gray-400 font-semibold tracking-wide group-hover:text-white transition-colors duration-300">
                    {data.name}
                  </h4>

                  <div className="absolute bottom-4 w-0 h-0.5 bg-blue-500 group-hover:w-12 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-20 text-center text-gray-500 text-sm italic max-w-2xl mx-auto">
          * Doimiy ravishda yangi texnologiyalarni o'rganish va mavjudlarini chuqurlashtirish ustida ishlayman. 
          Hozirda Fullstack ekotizimida yuqori samaradorlikka e'tibor qaratganman.
        </p>
      </div>
    </section>
  );
};

export default memo(Skill);