"use client";

import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Register() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-10 z-[20]"
    >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-3 font-bold text-white max-w-[600px] w-auto h-auto"
        > 
        <div>
            <Link href={"/event"}
            className="text-center ">
                <div className="container mt-1 glow-on-hover text-center flex flex-col justify-center ">
                        More Events   
                </div>
            </Link>
          </div>
        </motion.div>
    </motion.div>
  );
}
