"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import ParticleHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden flex-col">

      {/* Full-screen particles background */}
      <div className="absolute inset-0 z-0">
        <ParticleHero />
      </div>

      {/* Mask layer to hide particles inside the circle */}
      <div className="absolute z-10 w-[210px] h-[210px] rounded-full bg-[#0c0c48aa] pointer-events-none"></div>

      {/* Content wrapper (on top of particles) */}
      <div className="relative z-20 flex flex-col items-center -mt-12">

        {/* Circle Wrapper */}
        <div className="
          w-[210px]
          h-[210px]
          rounded-full
          overflow-hidden
          border-3
          border-[#83c9ff]
          p-6
          bg-[#180048e8]
          flex
          items-center
          justify-center
          shadow-[0_0_40px_5px_rgba(0,255,255,0.35)]
          z-9999
        "
        data-aos ="fade-up"
        >
          <Image
            src="/images/s1.jpg"
            alt="Heroimage1"
            width={260}
            height={260}
            className="object-contain p-1"
          />
        </div>

        {/* Heading */}
        <h1 data-aos="zoom-in" className="text-3xl text-amber-50 sm:text-4xl md:text-5xl lg:text-6xl mt-6 lg:mt-10 text-center font-extrabold font-roboto-mono tracking-wider z-30">
          Creating web products, <br />
          brands <span className="text-cyan-200">and experiences.</span>
        </h1>

        {/* Subheading with Typewriter */}
        <h2 className="mt-6 text-white text-sm px-2 text-center font-roboto-mono sm:text-2xl font-medium flex items-center z-30">
          Hi! I&apos;m Intishar - A Passionate
          <span className="text-yellow-300 font-bold pl-2">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer.",
                  "Frontend Developer.",
                  "Backend Developer.",
                  "Tech Enthusiast."
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50
              }}
            />
          </span>
        </h2>

        {/* Button */}
        <a
          href="/cv.pdf"
          download
          className="
            px-5 py-3 mt-12 text-base font-medium rounded-full
            bg-[linear-gradient(90deg,#007BFF,#00E5FF,#5A00A8)]
            hover:bg-[linear-gradient(90deg,#5A00A8,#00E5FF,#007BFF)]
            hover:text-black transition-all duration-200 text-white
            shadow-[0_0_8px_1px_rgba(0,229,255,0.6)]
            hover:shadow-[0_0_15px_3px_rgba(0,229,255,0.9)]
            flex items-center gap-3 z-30
          "
        >
          <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
          <span className="font-bold">See My Work</span>
        </a>

      </div>
    </div>
  );
};

export default Hero;
