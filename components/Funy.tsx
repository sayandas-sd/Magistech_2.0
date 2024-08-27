"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export default function FunnySmile() {
    const container = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

    useEffect(() => {
        const video = videoRef.current;

        // Define a function to handle scroll updates
        const handleScroll = (progress: number) => {
            if (video) {
                if (progress > 0.1) { 
                    video.volume = Math.min(progress * 2, 1); 
                    if (video.paused) {
                        video.play();
                    }
                } else {
                    if (!video.paused) {
                        video.pause();
                    }
                    video.volume = 0; 
                }
            }
        };

        // Subscribe to scrollYProgress changes
        const unsubscribe = scrollYProgress.onChange(handleScroll);

        
        return () => {
            unsubscribe();
        };
    }, [scrollYProgress]);

    return (
        <div ref={container} className="relative h-[200vh]">
            <div className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
                <motion.video
                    ref={videoRef}
                    src="/funny.mp4"
                    style={{ scale }}
                    className="
                        rounded-2xl
                        relative
                        w-[15vh] h-[15vh]
                        md:h-[50vh]
                        lg:w-[25vw] lg:h-[25vh]
                        object-cover"
                    autoPlay
                    loop
                    muted={false} // Ensure sound is enabled
                />
            </div>
        </div>
    );
}
