"use client";

import React from "react";
import { motion } from "framer-motion";
import image1 from "../public/calender.png";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";

import Link from "next/link";


export default function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-56 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

        <motion.div
          variants={slideInFromTop}
          className="flex flex-col gap-6 text-7xl mt-4 font-bold text-white max-w-[700px] w-auto h-auto"
        >
          <div className="text-box" style={{ fontFamily: "'DM Serif Text', serif" }}>
          {/*bg-gradient-to-r from-violet-700 to-cyan-400 */}
            <h1 className="text-transparent font-extrabold md:mr-32 md:mt-0 mt-6 text-center md:text-7xl text-4xl lg:text-7xl bg-clip-text bg-gradient-to-r from-violet-700 to-cyan-400">
            MAGISTECH-2.0{" "}
            </h1>
          </div>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xl text-center flex md:justify-start justify-center mt-14 text-white max-w-[600px] font-bold"
          style={{ fontFamily: "'DM Serif Text', serif" }}
        >
          Presents by IT department
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex items-center justify-center"
        >
        <div className="font-medium text-fuchsia-500 mt-3 flex items-center">
            <img src={image1.src} alt="calender" loading="lazy" width="30" height="30" className="mr-0"/>
            <div className="flex-shrink-0">
                <span>24-25 SEPTEMBER, </span>
                <span className="font-bold">2024</span>
            </div>
        </div>
        
        </motion.a>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-4 md:ml-0 ml-9  font-bold text-white max-w-[600px] w-auto h-auto"
        >
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScyMcEFcT7tbpK6K9vMdo7ZD65B_CpX5wlSH8sVj8AQBkID8w/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link">
          <div className="container mt-10 glow-on-hover text-center flex flex-col justify-center">
                Register Events
          </div>
            </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

