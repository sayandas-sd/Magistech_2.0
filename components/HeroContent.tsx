"use client";

import React from "react";
import { motion } from "framer-motion";
import arrow from "../public/arrow-down.svg";

import {
  fadeIn,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";

import Link from "next/link";
import Timer from "./Timer";


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
          className="flex flex-col gap-6 text-7xl  font-bold text-white max-w-[700px] w-auto h-auto"
        >
          <div className="flex justify-center" style={{ fontFamily: "'DM Serif Text', serif" }}>
          
            <h1 className="text-transparent date-image font-extrabold md:mr-32 md:mt-0 mt-20 text-center md:text-7xl text-5xl lg:text-7xl bg-clip-text ">
            MAGISTECH{" "}2.0{" "}
            </h1>
          </div>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xl md:text-3xl text-center flex md:justify-start justify-center mt-14 text-blue-700 max-w-[600px] font-extrabold"
          style={{ fontFamily: "'DM Serif Text', serif" }}
        >
          Presents by IT department
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="text-xl text-center flex md:justify-start justify-center mt-14 text-white max-w-[600px] font-extrabold"
        > 
                24-25 SEPTEMBER,2024
        </motion.a>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex md:justify-start justify-center gap-6 mt-4  font-bold text-white max-w-[600px] w-auto h-auto"
        >
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScyMcEFcT7tbpK6K9vMdo7ZD65B_CpX5wlSH8sVj8AQBkID8w/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link">
              <div className="container mt-14 glow-on-hover text-center flex flex-col justify-center">
                    Register Events
              </div>
            </Link>
        </motion.div>
        <div className="flex flex-col mt-32 items-center justify-center text-center text-white text-2xl">
        
        </div>
      </div>
    </motion.div>
  );
};

