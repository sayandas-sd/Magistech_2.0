"use client";

import About from "@/components/About";

import Footer from "@/components/Footer";
import FunnySmile from "@/components/Funy";
import { motion, useScroll } from "framer-motion";

import People from "@/components/People";

export default function event() {
    const { scrollYProgress } = useScroll();
    return <div>
        <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-pink-600 z-50"
        style={{ scaleX: scrollYProgress }}
      />
        <About />
        <People />
        <FunnySmile />
        <Footer />
        
    </div>
}