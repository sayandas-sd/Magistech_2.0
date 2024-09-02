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
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={bgmi.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-4 font-bold md:text-2xl">BGMI</div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={code.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-4 font-bold md:text-2xl">CODE ARENA</div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={quiz.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-4 font-bold md:text-2xl">TECH TRIVIA </div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={web.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-4 font-bold md:text-2xl">WEB WAR</div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={chess.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-10 font-bold md:text-2xl">CHECKMATE</div>
                            
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-2 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={ball.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-4 font-bold md:text-2xl">STROKE </div>
                            <div className="text-lg text-white flex justify-center  font-bold md:text-2xl">SHOWDOWN</div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-2 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={photo.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-10 font-bold md:text-2xl">PHOTO THRILL </div>
               
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-2 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={football.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-10 font-bold md:text-2xl">DIGITAL DERBY </div>
                        
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-2 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={standup.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-10 font-bold md:text-2xl">LAUGHTER LIVE </div>
                        
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-2 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={reels.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-4 font-bold md:text-2xl">FRAME </div>
                            <div className="text-lg text-white flex justify-center  font-bold md:text-2xl">FESTIVAL</div>
                        
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-2 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={elocution.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-10 font-bold md:text-2xl">VERBAL VIBES</div>
                        
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-2 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={drone.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-4 font-bold md:text-2xl">ARTISTIC</div>
                            <div className="text-lg text-white flex justify-center  font-bold md:text-2xl">SHOWDOWN</div>
                        
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-2 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={poster.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-4 font-bold md:text-2xl">SCIENCE</div>
                            <div className="text-lg text-white flex justify-center  font-bold md:text-2xl">SPLASH</div>
                        
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-2 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={teasure.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-4 font-bold md:text-2xl">ADVENTURE</div>
                            <div className="text-lg text-white flex justify-center  font-bold md:text-2xl">SEEKERS</div>
                        
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-2 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={investigate.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-4 font-bold md:text-2xl">INVESTIGATE</div>
                            <div className="text-lg text-white flex justify-center  font-bold md:text-2xl">SHOWCASE</div>
                        
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-2 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={brain.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-10 font-bold md:text-2xl">BRAIN BOWL</div>
                            <div className="text-lg text-white flex justify-center  font-bold md:text-2xl"></div>
                        
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 mt-2 rounded-3xl">
                        
                        <Link href="/"  className="cursor-pointer">
                            <img src={school.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-10 font-bold md:text-2xl">DESIGN DISPLAY</div>
                        
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

