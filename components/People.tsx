import co1 from "../public/people/co/sanjib_ghosh.jpeg";
import co2 from "../public/people/co/mousumi_ghosh.jpeg";
import co3 from "../public/people/co/debosmita_das.jpeg";
import co4 from "../public/people/co/arpan_saha.jpeg";

import media from "../public/people/media/arpan.jpeg";

import head1 from "../public/people/head/sayan.jpeg";
import head2 from "../public/people/head/anish_khan.jpeg";
import head3 from "../public/people/head/raj_chowdhury.jpeg";
import head4 from "../public/people/head/sehnaz_parvin.jpeg";
import head5 from "../public/people/head/neelavra_chakraborty.jpeg";
import head6 from "../public/people/head/avirup_ghosal.jpeg";
import head7 from "../public/people/head/jeshmita_chatterjee.jpeg";
import head8 from "../public/people/head/taniushree_khan.jpeg";
import head9 from "../public/people/head/dipan_dutta.jpeg";
import head10 from "../public/people/head/devmalya_ray.jpeg";
import head11 from "../public/people/head/khusi_yadav.jpeg";
import head12 from "../public/people/head/sunny_shah.jpeg";
import head13 from "../public/people/head/priya_anand.jpeg";

import ch1 from "../public/people/Cohead/ujan_ghosh.jpeg";
import ch2 from "../public/people/Cohead/sahis.jpeg";
import ch3 from "../public/people/Cohead/argha_santra.jpeg";
import ch4 from "../public/people/Cohead/arnab.jpeg";
import ch5 from "../public/people/Cohead/anandi.jpeg";
import ch6 from "../public/people/Cohead/supriya_mishra.jpeg";
import ch7 from "../public/people/Cohead/sayani_pal.jpeg";
import ch8 from "../public/people/Cohead/shovon_chaudhuri.jpeg";
import ch9 from "../public/people/Cohead/kusal_barai.jpeg";
import ch10 from "../public/people/Cohead/hemant_singh.jpeg";
import ch11 from "../public/people/Cohead/deepshikha_roy.jpeg";
import ch12 from "../public/people/Cohead/deeba_ali_naz.jpeg";


export default function People() {
    return <div className="container mx-auto mt-2 p-4">

        //CONVENOR
        <div className="text-xl md:text-3xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center p-8 mt-7">
                <div className="text-5xl mt-2 italic font-extrabold text-white">
                    CONVENOR
                </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-4 cursor-pointer">
                    <div className="text-white flex justify-center items-center">
                        
                    </div>
        </div>

        //co-ordinator

        <div className="text-xl md:text-3xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center p-8 mt-7">
                <div className="text-4xl md:text-5xl mt-4 italic font-extrabold text-white">
                    CO-ORDINATOR
                </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-4 cursor-pointer flex justify-center items-center">
                    <div className="flex flex-col items-center justify-center h-30 rounded-full">
                        <div className="cursor-pointer">
                            <img src={co1.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-12 font-bold md:text-2xl">Sanjib Ghosh</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-30 rounded-full">
                        <div className="cursor-pointer">
                            <img src={co2.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-5 font-bold md:text-2xl">Mousumi Ghosh</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-30 rounded-3xl">
                        <div className="cursor-pointer">
                            <img src={co3.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-9 font-bold md:text-2xl">Debosmita Das</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-30 rounded-full">
                        <div className="cursor-pointer">
                            <img src={co4.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-8 font-bold md:text-2xl">Arpan Saha</div>
                        </div>
                    </div>
        </div>            

        //media

        <div className="text-4xl md:text-5xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center p-8 mt-7">
                <div className="text-5xl mt-4 italic font-extrabold text-white">
                    MEDIA
                </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-4 cursor-pointer ">
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={media.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-8 font-bold md:text-2xl">Arpan </div>
                            <div className="text-white text-lg font-bold md:text-2xl flex justify-center">Bhattacharya</div>
                        </div>
            </div>
        </div>

        //event head

        <div className="text-xl md:text-3xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center p-8 mt-7">
                <div className="text-5xl mt-4 italic font-extrabold text-white">
                    HEAD
                </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-4 cursor-pointer">
            <div className="flex flex-col items-center justify-center h-30 rounded-3xl ">
                        <div className="cursor-pointer ">
                            <img src={head1.src} alt="bgmi" className="border rounded-3xl"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Sayan Das </div>
                        
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-3xl ">
                        <div className="cursor-pointer ">
                            <img src={head2.src} alt="bgmi" className="border rounded-3xl"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Anish Khan </div>
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-3xl ">
                        <div className="cursor-pointer ">
                            <img src={head3.src} alt="bgmi" className="border rounded-3xl"/>
                            <div className="text-lg text-white flex justify-center mt-8 font-bold md:text-2xl">Raj Chowdhury</div>
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-3xl ">
                        <div className="cursor-pointer ">
                            <img src={head4.src} alt="bgmi" className="border rounded-3xl"/>
                            <div className="text-lg text-white flex justify-center mt-8 font-bold md:text-2xl">Sehnaz Parvin</div>
                        </div>
            </div>

        </div>

        //event co-head

        <div className="text-xl md:text-3xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center p-8 mt-7">
                <div className="text-5xl mt-4 italic font-extrabold text-white">
                    CO-HEAD
                </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-4 cursor-pointer">
                    <div className="text-white flex justify-center items-center">
                        
                    </div>
        </div>
    </div>

}