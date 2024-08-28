import con from "../public/people/convenor/pijus.jpeg";

import co1 from "../public/people/co/sanjib.jpeg";
import co2 from "../public/people/co/mousumi.jpeg";
import co3 from "../public/people/co/debosmita_das copy.jpeg";
import co4 from "../public/people/co/arnab_saha.jpeg";

import media from "../public/people/media/arpan.jpeg";

import head1 from "../public/people/head/sayan.jpeg";
import head2 from "../public/people/head/anish.jpeg";
import head3 from "../public/people/head/raj.jpeg";
import head4 from "../public/people/head/sehnaz.jpeg";
import head5 from "../public/people/head/neelavra.jpeg";
import head6 from "../public/people/head/avirup.jpeg";
import head7 from "../public/people/head/jeshmita.jpeg";
import head8 from "../public/people/head/tanusshree.jpeg";
import head9 from "../public/people/head/dipan.jpeg";
import head10 from "../public/people/head/devmalya.jpeg";
import head11 from "../public/people/head/khusi.jpeg";
import head12 from "../public/people/head/sunny_shah copy.jpeg";
import head13 from "../public/people/head/monika_jha.jpeg";
import head14 from "../public/people/head/kushal_karmakar.jpeg";
import head15 from "../public/people/head/alu.jpeg";
import head16 from "../public/people/head/priya.jpeg";
import head17 from "../public/people/head/ujjal_bhattacharya.jpeg";
import head18 from "../public/people/head/shrayasee_gain.jpeg";

import ch1 from "../public/people/cohead/ujan.jpeg";
import ch2 from "../public/people/cohead/sahisnu.jpeg";
import ch3 from "../public/people/cohead/argha_santra.jpeg";
import ch4 from "../public/people/cohead/arnab.jpeg";
import ch5 from "../public/people/cohead/anandi.jpeg";
import ch6 from "../public/people/cohead/supriya.jpeg";
import ch7 from "../public/people/cohead/sayani.jpeg";

import ch9 from "../public/people/cohead/kushal_barai.jpeg";
import ch10 from "../public/people/cohead/hemant.jpeg";
import ch11 from "../public/people/cohead/deepshika_roy.jpeg";
import ch12 from "../public/people/cohead/deeba_ali_naz.jpeg";
import ch13 from "../public/people/cohead/shrayasee_gain.jpeg";

import ch15 from "../public/people/cohead/Shovan chaudhuri.jpeg";
import ch16 from "../public/people/cohead/Rishav Kumar.jpeg";
import ch17 from "../public/people/cohead/Rahul_sau.jpeg";




export default function People() {
    return <div className="container mx-auto mt-2 p-4">
            <div className=" text-orange-400 text-2xl flex justify-center items-center">Scroll for Suprise....</div>
        {/* CONVENOR */}
        <div className="underline underline-offset-8 text-xl md:text-3xl italic md:font-semibold tracking-wide text-slate-800 flex justify-center items-center p-8 mt-7">
                <div className="md:text-5xl text-3xl mt-2 italic font-extrabold text-white">
                    CONVENOR
                </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 mt-4 cursor-pointer justify-center items-center">
            <div className="flex flex-col items-center justify-center rounded-full">
                <div className="cursor-pointer">
                    <img src={con.src} alt="bgmi" className="border h-40 md:h-52 rounded-full mx-auto"/>
                    <div className="text-lg text-white flex justify-center mt-5 font-bold md:text-2xl">Pijush Ghosh</div>
                    
                </div>
            </div>
        </div>

        {/* COORDINATOR */}

        <div className="underline underline-offset-8 text-xl md:text-2xl md:font-semibold tracking-wide mb-10 italic text-slate-800 flex justify-center items-center p-8 mt-7">
                <div className="md:text-5xl text-3xl mt-4 italic font-extrabold text-white">
                    COORDINATOR
                </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-4 cursor-pointer flex justify-center items-center ">
                    <div className="flex flex-col items-center justify-center h-30 rounded-full">
                        <div className="cursor-pointer">
                            <img src={co1.src} alt="bgmi" className="border h-40 md:h-52 rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-5 font-bold md:text-2xl">Sanjib Ghosh</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-30 rounded-full">
                        <div className="cursor-pointer">
                            <img src={co2.src} alt="bgmi" className="border h-40 md:h-52 rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-5 font-bold md:text-2xl">Mousumi Ghosh</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-30 rounded-full">
                        <div className="cursor-pointer">
                            <img src={co3.src} alt="bgmi" className="border h-40 md:h-52 rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-5 font-bold md:text-2xl">Debosmita Das</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-30 rounded-full">
                        <div className="cursor-pointer">
                            <img src={co4.src} alt="bgmi" className="border h-40 md:h-52 rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-5 font-bold md:text-2xl">Arpan Saha</div>
                        </div>
                    </div>
        </div>            

        {/* MEDIA */}

        <div className="underline underline-offset-8 text-4xl md:text-5xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center mb-10 p-8 mt-7">
                <div className="md:text-5xl text-3xl mt-4 italic font-extrabold text-white">
                    MEDIA
                </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 mt-4 cursor-pointer justify-center items-center">
            <div className="flex flex-col items-center justify-center rounded-full">
                <div className="cursor-pointer">
                    <img src={media.src} alt="bgmi" className="border h-40 md:h-52 rounded-full mx-auto"/>
                    <div className="text-lg text-white flex justify-center mt-5 font-bold md:text-2xl">Arpan</div>
                    <div className="text-white text-lg font-bold md:text-2xl flex justify-center">Bhattacharya</div>
                </div>
            </div>
        </div>


        {/*event head*/}

        <div className="underline underline-offset-8 text-xl md:text-3xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center mb-10 p-8 mt-7">
                <div className="md:text-5xl text-3xl mt-4 mb-5 italic font-extrabold text-white">
                    HEAD
                </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-4 cursor-pointer">
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head1.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Sayan Das </div>
                        
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head2.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Anish Khan </div>
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-3xl ">
                        <div className="cursor-pointer ">
                            <img src={head3.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Raj Chowdhury</div>
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head4.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-8 font-bold md:text-2xl">Sehnaz Parvin</div>
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head5.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Neelavra </div>
                            <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Chakraborty </div>
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head6.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Avitup Ghoshal </div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head7.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Jeshmita</div>
                            <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Chatterjee</div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head8.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Tanushree Kha</div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head9.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Dipan Dutta</div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head10.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Devmalya Ray </div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head11.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Khusi Yadav </div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head12.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Sunny Shah</div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head13.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Monika Jha </div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head14.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-12 font-bold md:text-2xl">Kushal Karmakar </div>
                            
                        </div>
            </div>
            
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <img src={head15.src} alt="bgmi" className="border h-40 w-64 md:h-56 md:w-64 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-16 font-bold md:text-2xl">Tamojit Sagari</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <img src={head16.src} alt="bgmi" className="border h-40 w-64 md:h-56 md:w-64 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-16 font-bold md:text-2xl">Priya Anand</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <img src={head17.src} alt="bgmi" className="border h-40 w-64 md:h-56 md:w-64 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Ujjal </div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Bhattacharya</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <img src={head18.src} alt="bgmi" className="border h-40 w-64 md:h-56 md:w-64 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-16 font-bold md:text-2xl">Shrayasee Gain</div>
                        
                            </div>
            </div>
        </div>

        {/*event co-head*/}

        <div className="underline underline-offset-8text-xl md:text-3xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center mb-10 p-8 mt-7">
                <div className="md:text-5xl text-3xl mt-4 italic font-extrabold text-white">
                    CO-HEAD
                </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-4 cursor-pointer">
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch1.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Ujan Ghosh</div>
                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch2.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Sahisnu Das </div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Pattanayak</div>

                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch3.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Argha Santra </div>
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch4.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Arnab Saha</div>
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch5.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Anandi Das </div>
                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch6.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Supriya Mishra</div>
                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch7.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Sayani Pal</div>
                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch9.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Kushal Barai</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch10.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-9 font-bold md:text-2xl">Hemant Singh</div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Rajput</div>
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch11.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Deepshika Roy</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <img src={ch12.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-12 font-bold md:text-2xl">Deeba Ali</div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Naz</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <img src={ch15.src} alt="bgmi" className="border h-40 w-64 md:h-56 md:w-64 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Shovan </div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Chaudhuri</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <img src={ch16.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Rishav Kumar</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <img src={ch17.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Rahul Sau</div>
                        
                            </div>
            </div>
            
        </div>
    </div>

}