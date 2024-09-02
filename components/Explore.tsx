"use client";

import bgmi from "../public/BGMI.jpeg";
import web from "../public/webwar.jpeg";
import frame from "../public/reels.jpeg";
import chess from "../public/chess.jpeg";
import standup from "../public/standup.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "@/styles";
import { fadeIn, slideInFromLeft, staggerContainer } from "@/utils/motion";
import { TitleText, TypingText } from "./Custom";

const events = [
  { src: bgmi.src, alt: "BGMI", link: "/about", title: "BGMI" },
  { src: web.src, alt: "WEB DEV WAR", link: "/about", title: "WEB WAR" },
  { src: chess.src, alt: "CHESS", link: "/about", title: "CHECKMATE" },
  { src: frame.src, alt: "FRAME FESTIVAL", link: "/about", title: "REELS" },
];

export default function Explore() {
  return (
    <div className="container mx-auto mt-4 p-4">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={<div className="mb-8 text-5xl font-extrabold italic">Explore Events<br className="md:block hidden" /></div>}
          textStyles="text-center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-4 cursor-pointer">
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
              className="flex flex-col items-center justify-center rounded-full"
            >
              <img
                src={event.src}
                alt={event.alt}
                className="h-36 md:h-64 object-cover border rounded-full"
              />
              <Link href={event.link} className="text-white text-xl font-extrabold tracking-wide italic mt-6">
                {event.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
