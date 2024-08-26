"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Parallax() {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"], 
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 3]); 
    
    return (
        <div ref={container} className="relative h-[200vh]"> 
            <div className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
                <motion.video
                    src="/vdo.mp4" 
                    style={{ scale }} 
                    className="
                    rounded-2xl
                        relative 
                        w-[20vh] h-[20vh] 
                        md:h-[50vh] 
                        lg:w-[25vw] lg:h-[25vh]
                        object-cover
                    "
                    autoPlay 
                    loop 
                    muted 
                />
            </div>
        </div>
    );
}
