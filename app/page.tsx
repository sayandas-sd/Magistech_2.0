"use client";

import About from "@/components/About";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Explore from "@/components/Explore";
import Register from "@/components/Particiapate";
import LastText from "@/components/LastText";
import Timer from "@/components/Timer";
import Paralax from "@/components/Paralax";
import WhatsNew from "@/components/Merchandise";
import ShirtBuy from "@/components/ShirtBut";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="h-full w-full">
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-pink-600 z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="flex flex-col h-[850px] gap-20">
        <Landing />
        <div className="flex flex-col mt-7 items-center justify-center text-white">
          <Timer launchDate="2024-09-24T17:00:00"/>
        </div>
        <Paralax />
        <About />
        <Explore />
        <Register />
        <div className="text-4xl md:text-5xl text-white mt-20 flex justify-center font-extrabold italic">
          MERCHANDISE
        </div>
        <WhatsNew />
        <ShirtBuy />
        <LastText />
        <div className="font-bold text-white italic flex justify-center mb-10 text-lg md:text-3xl md:text-3xl">
          TAKE PART! You're just a CLICK away!
        </div>
        <Register />
        <Footer />
      </div>
    </main>
  );
}
