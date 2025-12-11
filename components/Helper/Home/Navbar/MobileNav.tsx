// components/MobileNav.tsx
"use client";

import React, { useEffect } from "react";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { HiXMark } from "react-icons/hi2";
import { FaCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  // Lock scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = showNav ? "hidden" : "auto";
  }, [showNav]);

  return (
    <AnimatePresence>
      {showNav && (
        <div className="fixed inset-0 z-[100050]">

          {/* ---------------- Overlay ---------------- */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeNav}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          />

          {/* ---------------- Side Drawer ---------------- */}
          <motion.div
            className="fixed right-0 top-0 h-full bg-cyan-800 text-white rounded-l-2xl shadow-xl flex flex-col justify-center px-10"
            style={{ width: "80%", maxWidth: "520px" }}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: [0.25, 0.85, 0.25, 1] }}
          >
            {/* Close Button */}
            <motion.button
              onClick={closeNav}
              className="absolute top-5 right-5 text-white text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.25 }}
            >
              <HiXMark />
            </motion.button>

            {/* ---------------- Mobile Logo (matches Nav.tsx hover) ---------------- */}
            <div className="flex items-center space-x-3 group transition-all duration-300 absolute top-10 left-6">
              <div
                className={`rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden
                  w-17 h-17 bg-white
                  group-hover:bg-[linear-gradient(90deg,#007BFF,#00E5FF,#5A00A8)]
                  group-hover:shadow-[0_0_14px_3px_rgba(0,229,255,0.9)]`}
                aria-hidden
              >
                <FaCode className="transition-all duration-300 w-10 h-10 text-black group-hover:text-white" />
              </div>

              <h1
                className={`font-bold transition-all duration-300 text-4xl text-white
                  group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[linear-gradient(90deg,#007BFF,#00E5FF,#5A00A8)]`}
              >
                Intishar
              </h1>
            </div>

            {/* Nav Links */}
            <motion.div
              className="flex flex-col gap-12 mt-10"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, x: 30 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { staggerChildren: 0.12 },
                },
              }}
            >
              {NavLinks.map((link) => (
                <motion.div
                  key={link.id}
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={link.url}
                    onClick={closeNav}
                    className="text-xl ml-8 px-4 py-2 border-b-2 border-white/70 font-semibold hover:bg-cyan-300 hover:text-black transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
