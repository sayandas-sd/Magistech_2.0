"use client";

import image1 from "../public/BGMI.jpeg";
import Image from 'next/image';
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Paralax() {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"], 
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 4]); 
    
    return (
        <div ref={container} className="relative h-[200vh]"> 
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <motion.div style={{ scale }} className="relative w-[25vw] h-[25vh]">
                    <Image 
                        src={image1} 
                        alt="Description of the image" 
                        fill 
                        style={{ objectFit: 'cover' }} 
                    />
                </motion.div>
            </div>
        </div>
    );
}
