"use client";

import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";

export default function Book() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-10 z-[20]"
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-6 mt-10 font-bold text-white max-w-[600px] w-auto h-auto"
      >
        <div className="container mt-1">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScyMcEFcT7tbpK6K9vMdo7ZD65B_CpX5wlSH8sVj8AQBkID8w/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-on-hover text-center flex flex-col justify-center"
          >
            Register Now
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
