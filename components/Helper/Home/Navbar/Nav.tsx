// components/Nav.tsx
"use client";

import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    // Attach on client only
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-[10000] transition-all duration-500 ease-out ${
        sticky
          ? "fixed top-0 left-0 right-0 bg-slate-900/60 backdrop-blur-3xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] border-black-950/90"
          : "relative bg-transparent"
      }`}
      style={{ height: "12vh" }}
    >
      <div className="w-[90%] max-w-[1400px] mx-auto h-full flex items-center justify-between">
        {/* Left: Logo + Name */}
        <div className="flex items-center space-x-3 group transition-all duration-200">
          <div
            className={`rounded-full flex items-center justify-center transition-all duration-200 overflow-hidden
              ${sticky ? "w-12 h-12" : "w-12 h-12"} bg-white
              group-hover:bg-[linear-gradient(90deg,#007BFF,#00E5FF,#5A00A8)]
              group-hover:shadow-[0_0_14px_3px_rgba(0,229,255,0.9)]`}
            aria-hidden
          >
            <FaCode
              className={`transition-all duration-200 ${
                sticky ? "w-8 h-8" : "w-8 h-8"
              } text-black group-hover:text-white`}
            />
          </div>

          <h1
            className={`font-bold tracking-wider transition-all duration-200 ${
              sticky ? "text-xl md:text-2xl" : "text-xl md:text-2xl"
            } text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[linear-gradient(90deg,#007BFF,#00E5FF,#5A00A8)]`}
          >
            Intishar
          </h1>
        </div>

        {/* Center: Links (desktop) */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-white tracking-widest
 text-sm font-medium hover:text-cyan-300 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Download + Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Use plain anchor for file download to avoid Link constraints */}
          <a
            href="/cv.pdf"
            download
            className="px-5 py-2 text-sm font-medium rounded-lg
                       bg-[linear-gradient(90deg,#007BFF,#00E5FF,#5A00A8)]
                       hover:bg-[linear-gradient(90deg,#5A00A8,#00E5FF,#007BFF)]
                       hover:text-black transition-all duration-200 text-white
                       shadow-[0_0_8px_1px_rgba(0,229,255,0.6)]
                       hover:shadow-[0_0_15px_3px_rgba(0,229,255,0.9)]
                       flex items-center gap-2"
          >
            <BiDownload />
            <span>Download CV</span>
          </a>

          <button
            onClick={openNav}
            className="lg:hidden text-white p-2 rounded-md transition-all duration-200 hover:bg-white/10"
            aria-label="Open menu"
            type="button"
          >
            <HiBars3BottomRight className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Optional: subtle slide-in helper element to avoid content jump when header becomes fixed */}
      {/* If your layout shifts when header becomes fixed, uncomment the block below and place it directly under <header> in your layout */}
      {/* {sticky && <div className="h-[12vh]"></div>} */}
    </header>
  );
};

export default Nav;
