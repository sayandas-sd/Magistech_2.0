"use client";

import { fadeIn, slideInFromLeft, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

import arrow from "../public/arrow-down.svg";

import styles from "../styles/index";

export default function About() {
    return <section className={`${styles.paddings} relative z-10`}>
        <div className="gradient-02 z-0 mt-32">
            <motion.div
             variants={staggerContainer(0.2, 0.1)} 
             initial="hidden"
             animate="show"
             className={`${styles.innerWidth} italic font-bold mx-auto ${styles.flexCenter} flex-col`}
            >
                <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-[8px] font-normal sm:text-[32px] text-[20px] mb-10 font-bold text-white text-center text-secondary-white"
                >
                 
                <span className="font-extrabold text-white italic flex justify-center mb-10 text-5xl">About</span> 
                    {' '}
                    <span className="font-extrabold text-white">
                Magistech 2.0   
            </span>{' '}
            is tech fest, organized by the Information Technology
            Department of Guru Nanak Institute of Technology, Kolkata. {' '}
            <br />
            showcase your technical and creative skills, and participate in competitions.

                </motion.p>
                
                <motion.img
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                    src={arrow.src}
                    alt="arrow down"
                    className="w-[18px] h-[28px] object-contain  mt-[28px]"
                />
            </motion.div>
               
        </div>
        
    </section>
}