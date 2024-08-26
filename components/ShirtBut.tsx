"use client";

import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ShirtBuy() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-10 z-[20]"
    >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-0 font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <a href="https://forms.gle/jm162N1R2mRRE6NS7"
            className="text-center rounded-2xl button-49 md:justify-center md:items-center mt-7 p-1 border- border-black bg-gradient-to-r from-teal-400 to-violet-500 hover:from-blue-500 hover:to-violet-700">
              <div className="container mt-1">   
                   Buy T-Shirt
              </div>
            </a>
        </motion.div>
    </motion.div>
  );
}
