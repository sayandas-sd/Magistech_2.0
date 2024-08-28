"use client";

import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Book from "@/components/Register";
import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";

export default function EventPage() {
  
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    
  }, [scrollYProgress]);

  return (
    <main className="h-full w-full">
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-pink-600 z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex flex-col h-[850px] gap-20">
        <Events />
        <Book />
        <Footer />
      </div>
    </main>
  );
}
