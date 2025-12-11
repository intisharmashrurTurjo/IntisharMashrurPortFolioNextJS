"use client";

import React from "react";
import {
  SiGit,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "JavaScript", icon: <SiJavascript />, percentage: 89 },
  { name: "React.JS", icon: <SiReact />, percentage: 92 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 94 },
  { name: "Laravel", icon: <SiLaravel />, percentage: 91 },
  { name: "MySQL", icon: <SiMysql />, percentage: 85 },
  { name: "Git", icon: <SiGit />, percentage: 96 },
];

const Skills = () => {
  return (
    <div className="text-white pt-16 pb-16">
      <h1 className="relative z-9999 text-center tracking-wider text-4xl md:text-5xl xl:text-5xl font-roboto-mono font-extrabold text-white">
        My <span className="text-cyan-200 tracking-wider">Skills</span>
      </h1>

      {/* background blur */}
      <div className="relative top-60 opacity-80">
        <div className="absolute -top-65 -right-0 w-72 h-72 bg-pink-950 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-30 -right-0 w-72 h-72 bg-purple-950 rounded-full filter blur-3xl"></div>
      </div>

      {/* Skills Cards */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-16">
        {skills.map((skill) => {
          const { ref, inView } = useInView({
            triggerOnce: false, // <— animate every time
            threshold: 0.3,
          });

          return (
            <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
              <div
                ref={ref}
                data-aos="flip-left" data-aos-delay="50" className="relative z-[9999] bg-[#14134145] text-center w-40 h-48 rounded-3xl 
                flex flex-col items-center justify-center transition hover:scale-105
                shadow-[0_0_6px_1px_rgba(59,130,246,0.5)]"
              >
                <div className="text-5xl p-6 mx-8 mb-4 text-gray-300">
                  {skill.icon}
                </div>

                {/* Re-animate CountUp every scroll */}
                <p className="text-2xl font-semibold">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={skill.percentage}
                      duration={2}
                      redraw={true} // important for re-trigger
                    />
                  ) : (
                    "0"
                  )}
                  %
                </p>

                <p className="text-purple-400 mt-1 font-roboto-mono tracking-wider">{skill.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
