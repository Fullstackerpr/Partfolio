import { memo } from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#D7D7D7] via-white to-[#D7D7D7] px-4">
        <div className="text-center max-w-md md:max-w-xl w-full">
          <div className="inline-block border-4 px-6 py-3 md:px-10 md:py-4 mb-6 md:mb-8">
            <h1 className="text-2xl md:text-[30px] font-bold tracking-widest">
              CONTACT
            </h1>
          </div>

          <p className="text-xs md:text-sm text-gray-700 mb-6 pt-6 md:pt-[59px]">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est.
          </p>

          <div className="flex justify-center mb-12 md:mb-[123px]">
            <div className="w-10 md:w-16 border-t mr-1 md:mr-2" />
            <div className="w-3 h-1 border-b-2 transform rotate-45 mr-1 md:mr-2" />
            <div className="w-3 h-1 border-b-2 transform rotate-45 mr-1 md:mr-2" />
            <div className="w-3 h-1 border-b-2 transform -rotate-45" />
            <div className="w-3 h-1 border-b-2 transform -rotate-45" />
            <div className="w-10 md:w-16 border-t ml-1 md:ml-2" />
          </div>

          <form className="space-y-4 md:space-y-6">
            <div className="border-b-4">
              <input
                type="text"
                name="name"
                placeholder="ENTER YOUR NAME*"
                className="w-full py-2 md:py-3 px-1 focus:outline-none bg-transparent text-sm md:text-base"
                required
              />
            </div>
            <div className="border-b-4">
              <input
                type="email"
                name="email"
                placeholder="ENTER YOUR EMAIL*"
                className="w-full py-2 md:py-3 px-1 focus:outline-none bg-transparent text-sm md:text-base"
                required
              />
            </div>
            <div className="border-b-4">
              <input
                type="tel"
                name="phone"
                placeholder="PHONE NUMBER"
                className="w-full py-2 md:py-3 px-1 focus:outline-none bg-transparent text-sm md:text-base"
              />
            </div>
            <div className="border-b-4">
              <textarea
                name="message"
                placeholder="YOUR MESSAGE*"
                className="w-full py-2 md:py-3 px-1 focus:outline-none bg-transparent h-24 md:h-28 resize-none text-sm md:text-base"
                required
              />
            </div>

            <div className="flex items-center justify-center mt-6 md:mt-8">
              <div className="border-1 h-4 md:h-6 mr-2 md:mr-4" />
              <button
                type="submit"
                className="tracking-widest font-semibold text-xs md:text-sm cursor-pointer"
              >
                SUBMIT
              </button>
              <div className="border-1 h-4 md:h-6 ml-2 md:ml-4" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
