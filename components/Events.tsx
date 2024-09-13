import Footer from "./Footer";
import bgmi from "../public/BGMI.jpeg";
import code from "../public/code.jpeg";
import photo from "../public/photography.jpeg";
import web from "../public/webwar.jpeg";
import quiz from "../public/techquiz.jpeg";
import ball from "../public/ballpool.jpeg";
import poster from "../public/Poster.jpeg";
import standup from "../public/standup.jpeg";
import chess from "../public/chess.jpeg"
import football from "../public/football.jpeg";
import reels from "../public/reels.jpeg";
import drone from "../public/drone.jpeg";
import elocution from "../public/elocution.jpeg";
import teasure from "../public/teasurehunt.jpeg";
import brain from "../public/brain.jpeg";
import Link from "next/link";
import investigate from "../public/investigate.jpeg";
import school from "../public/school.jpeg";
import ff from "../public/freefire.jpeg";
import Image from "next/image";

export default async function Events() {

    
    return (
        <div className="cursor-pointer">
            <div className="text-xl md:text-3xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center p-8 mt-7">
                <div className="text-7xl mt-20 italic font-extrabold text-white">
                    EVENTS
                </div>
            </div>
        
            <div className="container mx-auto mt-20 p-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-4 cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-64 rounded-3xl">
                            <div className="cursor-pointer ">
                                <Image src={'/bgmi.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">BGMI</div>
                               
                            </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 rounded-3xl">

                            <div className="cursor-pointer ">
                                <Image src={'/freefire.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">FREE FIRE</div>
                               
                            </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 rounded-3xl">
                            <div className="cursor-pointer ">
                                <Image src={'/webwar.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">WEB WAR</div>
                               
                            </div>
                           
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 rounded-3xl">
                        
                            <div className="cursor-pointer ">
                                <Image src={'/techquiz.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">TECH TRIVIA</div>
                               
                            </div>
                    </div>
                    <div className="flex flex-col items-center justify-center  md:mt-0 mt-6 h-64 rounded-3xl">
                            <div className="cursor-pointer ">
                                <Image src={'/code.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">CODE ARENA</div>
                               
                            </div>
                           
                    </div>
                    <div className="flex flex-col items-center justify-center mt-6 h-64 rounded-3xl">
                        
                            <div className="cursor-pointer ">
                                <Image src={'/chess.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">CHECKMATE</div>
                               
                            </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-6 rounded-3xl">
                        
                        <div className="cursor-pointer ">
                                <Image src={'/ballpool.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">STROKE </div>
                                <div className="text-lg text-white flex justify-center  font-bold md:text-2xl">SHOWDOWN</div>
                               
                            </div>
                        
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-6 rounded-3xl">
                        
                        <div className="cursor-pointer ">
                                <Image src={'/photography.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">PHOTO THRILL </div>
                                     
                            </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-6 rounded-3xl">
                        
                            <div className="cursor-pointer ">
                                <Image src={'/football.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">DIGITAL DARBY </div>
                                     
                            </div>
                        
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-6 rounded-3xl">
                        
                    <div className="cursor-pointer ">
                                <Image src={'/standup.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">LAUGHTER </div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">LIVE </div>
                                     
                            </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-6 rounded-3xl">
                        
                    <div className="cursor-pointer ">
                                <Image src={'/reels.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">FRAME </div>
                            <div className="text-lg text-white flex justify-center  font-bold md:text-2xl">FESTIVAL</div>
                                     
                            </div>
                            
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-6 rounded-3xl">
                        
                    <div className="cursor-pointer ">
                                <Image src={'/elocution.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">VERBAL VIBES </div>
                                     
                            </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-6 rounded-3xl">
                        <div className="cursor-pointer ">
                                <Image src={'/drone.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">ARTISTIC</div>
                                <div className="text-lg text-white flex justify-center  font-bold md:text-2xl">SHOWDOWN</div>
                                     
                            </div>
                        
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-6 rounded-3xl">
                        
                         <div className="cursor-pointer ">
                                <Image src={'/Poster.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                
                            <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">SCIENCE</div>
                            <div className="text-lg text-white flex justify-center  font-bold md:text-2xl">SPLASH</div>
                                     
                            </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-6 rounded-3xl">
                        
                        <div className="cursor-pointer ">
                                <Image src={'/teasurehunt.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                
                            <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">ADVENTURE</div>
                            <div className="text-lg text-white flex justify-center  font-bold md:text-2xl">SEEKERS</div>
                                     
                        </div>
                        
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-6 rounded-3xl">
                        
                    <div className="cursor-pointer ">
                                <Image src={'/investigate.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">INVESTIGATE</div>
                            <div className="text-lg text-white flex justify-center  font-bold md:text-2xl">SHOWCASE</div>
                    </div>
                                     
                        </div>
                           
                    <div className="flex flex-col items-center justify-center h-64 mt-6 rounded-3xl">
                        
                    <div className="cursor-pointer ">
                                <Image src={'/brain.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">BRAIN BOWL</div>
                            <div className="text-lg text-white flex justify-center  font-bold md:text-2xl"></div>
                    </div>

                       
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-6 rounded-3xl">
                        
                    <div className="cursor-pointer ">
                                <Image src={'/school.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">DESIGN </div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl"> DISPLAY</div>
                            <div className="text-lg text-white flex justify-center  font-bold md:text-2xl"></div>
                    </div>

                    </div>
                </div>
                
            </div>
        </div>
    );
}

