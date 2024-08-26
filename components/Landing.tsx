import React from "react";
import HeroContent from "./HeroContent";


export default function Landing(){
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </div>
  );
};