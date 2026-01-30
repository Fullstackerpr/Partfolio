"use client";

import { memo } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-[#0a0a0a] text-white">
      {/* Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[140px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 blur-[140px]" />

      <div className="relative flex h-full">
        {/* LEFT */}
        <div
          className="flex flex-col justify-center px-10 md:px-32 font-bold w-full md:w-1/2"
          style={{
            clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)",
          }}
        >
          <h4 className="text-2xl md:text-4xl text-gray-400 mb-2">
            Hi, I am
          </h4>

          <h1 className="text-5xl md:text-7xl leading-tight mb-6">
            Bahodir <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Nabijanov
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 mb-8">
            Full-Stack Developer
          </p>

          {/* Socials */}
          <div className="flex gap-4">
            <Social
              href="mailto:bahodirnabijanov782@gmail.com"
              icon={<Mail size={18} />}
            />
            <Social
              href="https://github.com/Fullstackerpr"
              icon={<Github size={18} />}
            />
            <Social
              href="https://www.linkedin.com/in/bahodir-nabijanov-816804350/"
              icon={<Linkedin size={18} />}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="hidden md:flex items-center justify-center w-1/2 bg-black"
          style={{
            clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <img
            src="/myimg.jpg"
            alt="hero"
            className="w-[420px] h-[560px] object-cover rounded-2xl border border-white/10"
          />
        </div>
      </div>
    </section>
  );
};

const Social = ({ href, icon }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 
    flex items-center justify-center text-gray-400
    hover:text-white hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20
    transition-all duration-300"
  >
    {icon}
  </a>
);

export default memo(Hero);
