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
            className="button-49">
              <div className="text-xl flex justify-center text-center flex-col p-3">   
                   Buy T-Shirt
              </div>
            </a>
        </motion.div>
    </motion.div>
  );
}
