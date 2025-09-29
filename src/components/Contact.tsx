import { memo } from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#D7D7D7] via-white to-[#D7D7D7] px-4">
        <div className="text-center max-w-xl w-full">
          <div className="inline-block border-4 px-10 py-4 mb-8">
            <h1 className="text-[30px] font-bold tracking-[0.3em]">CONTACT</h1>
          </div>

          <p className="text-sm text-gray-700 mb-6 pt-[59px]">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est.
          </p>

          <div className="flex justify-center mb-[123px]">
            <div className="w-16 border-t mr-2" />
            <div className="w-4 h-1 border-b-2 transform rotate-45 mr-2" />
            <div className="w-4 h-1 border-b-2 transform rotate-45 mr-2" />
            <div className="w-4 h-1 border-b-2 transform -rotate-45" />
            <div className="w-4 h-1 border-b-2 transform -rotate-45" />
            <div className="w-16 border-t ml-2" />
          </div>

          <form className="space-y-6">
            <div className="border-b-4">
              <input
                type="text"
                name="name"
                placeholder="ENTER YOUR NAME*"
                className="w-full py-2 px-1 focus:outline-none bg-transparent"
                required
              />
            </div>
            <div className="border-b-4">
              <input
                type="email"
                name="email"
                placeholder="ENTER YOUR EMAIL*"
                className="w-full py-2 px-1 focus:outline-none bg-transparent"
                required
              />
            </div>
            <div className="border-b-4">
              <input
                type="tel"
                name="phone"
                placeholder="PHONE NUMBER"
                className="w-full py-2 px-1 focus:outline-none bg-transparent"
              />
            </div>
            <div className="border-b-4">
              <textarea
                name="message"
                placeholder="YOUR MESSAGE*"
                className="w-full py-2 px-1 focus:outline-none bg-transparent h-28 resize-none"
                required
              />
            </div>

            <div className="flex items-center justify-center mt-8">
              <div className="border-1 h-6 mr-4" />
              <button
                type="submit"
                className="tracking-widest font-semibold text-sm cursor-pointer"
              >
                SUBMIT
              </button>
              <div className="border-1 h-6 ml-4" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
