import Footer from "./Footer";
import bgmi from "../public/BGMI.jpeg";
import code from "../public/code.jpeg";
import photo from "../public/photography.jpeg";
import web from "../public/webwar.jpeg";
import quiz from "../public/techquiz.jpeg";
import ball from "../public/8ballpool.jpeg";
import poster from "../public/Poster.jpeg";
import standup from "../public/standup.jpeg";
import chess from "../public/chess.jpeg"
import football from "../public/football.jpeg";
import reels from "../public/reels.jpeg";
import drone from "../public/drone.jpeg";
import elocution from "../public/elocution.jpeg";
import Link from "next/link";


export default function Events() {
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
                        </Link>
                    </div>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={code.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={web.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={photo.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={poster.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={ball.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={quiz.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={standup.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={chess.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={football.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={reels.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={drone.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={elocution.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={bgmi.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={bgmi.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={bgmi.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={bgmi.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                    <a href="/" className="h-64 rounded-3xl flex justify-center items-center ">
                        <img src={bgmi.src} alt="bgmi" className="border rounded-full"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

