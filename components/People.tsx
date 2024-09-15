
import Image from "next/image";

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
                    <Image src={'/pijus.jpeg'} alt="bgmi" width={160} height={10} className="border md:h-48 md:w-48 rounded-full mx-auto"/>
                    <div className="text-lg text-white flex justify-center mt-5 font-bold md:text-2xl">Pijush Ghosh</div>
                </div>
            </div>
        </div>
        <div className="underline underline-offset-8 text-xl md:text-3xl italic md:font-semibold tracking-wide text-slate-800 flex justify-center items-center p-8 mt-20">
                <div className="md:text-5xl text-3xl mt-2 italic font-extrabold text-white">
                    CO-CONVENOR
                </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 mt-4 cursor-pointer justify-center items-center">
            <div className="flex flex-col items-center justify-center rounded-full">
                <div className="cursor-pointer">
                    <Image src={'/jeshmita.jpeg'} alt="bgmi" width={160} height={10} className="border md:h-48 md:w-48 rounded-full mx-auto"/>
                    <div className="text-lg text-white flex justify-center mt-5 font-bold md:text-2xl">Jeshmita</div>
                    <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Chatterjee</div>
                </div>
            </div>
        </div>
        
        {/* COORDINATOR */}

        <div className="underline underline-offset-8 text-xl md:text-2xl md:font-semibold tracking-wide mb-10 italic text-slate-800 flex justify-center items-center p-8 mt-20">
                <div className="md:text-5xl text-3xl mt-4 italic font-extrabold text-white">
                    COORDINATOR
                </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-4 cursor-pointer flex justify-center items-center ">
            
                    <div className="flex flex-col items-center justify-center h-30 rounded-full">
                        <div className="cursor-pointer">
                        <Image src={'/kushal_karmakar.jpeg'} alt="bgmi" width={200} height={30} className="border md:h-48 md:w-48 rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Kushal </div>
                            <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Karmakar </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-30 rounded-full">
                        <div className="cursor-pointer">
                        <Image src={'/tanusshree.jpeg'} alt="bgmi" width={200} height={30} className="border rounded-full"/>
                        <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Tanushree</div>
                        <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Khan</div>
                        </div>
                    </div>
                        
                    <div className="flex flex-col items-center justify-center h-30 rounded-full">
                        <div className="cursor-pointer">
                            <Image src={'/debosmita.jpeg'} alt="bgmi" width={200} height={30} className="border md:h-52 rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Debasmita Das</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-30 rounded-full">
                        <div className="cursor-pointer">
                            <Image src={'/arnab_saha.jpeg'} alt="bgmi" width={200} height={30} className="border md:h-52 rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Arpan Saha</div>
                        </div>
                    </div>
        </div>            


        <div className="underline underline-offset-8 text-xl md:text-3xl italic md:font-semibold tracking-wide text-slate-800 flex justify-center items-center p-8 mt-20">
                <div className="md:text-5xl text-3xl mt-2 italic font-extrabold text-white">
                    MARKETING
                </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-4 cursor-pointer justify-center items-center">
            <div className="flex flex-col items-center justify-center rounded-full">
                <div className="cursor-pointer">
                    <Image src={'/sanjib.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-48 md:w-48 rounded-full mx-auto"/>
                    <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Sanjib Ghosh</div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-full">
                <div className="cursor-pointer">
                <Image src={'/sahisnu.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-48 md:w-48 rounded-full mx-auto"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Sahishnu Das </div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Pattanayak</div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-full">
                <div className="cursor-pointer">
                <Image src={'/khusi.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Khushi Yadav </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-full">
            <div className="cursor-pointer ">
                            <Image src={'/anish.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Anish Khan </div>
                        </div>
            </div>
        </div>
        <div className="underline underline-offset-8 text-xl md:text-3xl italic md:font-semibold tracking-wide text-slate-800 flex justify-center items-center p-8 mt-20">
                <div className="md:text-5xl text-3xl mt-2 italic font-extrabold text-white">
                    TREASURER
                </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-10 mt-4 cursor-pointer justify-center items-center">
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:ml-64">
                        <div className="cursor-pointer ">
                            <Image src={'/sunny_shah.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Sunny Sah</div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-full md:mr-64">
                <div className="cursor-pointer">
                <Image src={'/mousumi.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full mx-auto"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Mousumi</div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Ghosh</div>
                    
                </div>
            </div>
        </div>
    

        <div className="underline underline-offset-8 text-xl md:text-3xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center mb-10 p-8 mt-20">
                <div className="md:text-5xl text-3xl mt-4 mb-5 italic font-extrabold text-white">
                    HEAD
                </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-4 cursor-pointer">
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={'/sayan.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Sayan Das </div>
                        
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-3xl ">
                        <div className="cursor-pointer ">
                            <Image src={'/raj.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Raj Chowdhury</div>
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <Image src={'/sehnaz.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Sehnaz Parvin</div>
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <Image src={'/neelavra.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Neelavra </div>
                            <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Chakraborty </div>
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <Image src={'/avirup.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Avirup Ghoshal </div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <Image src={'/dipan.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Dipan Dutta</div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <Image src={'/devmalya.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Devmalya Ray </div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <Image src={'/monika_jha.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Monika Jha </div>
                            
                        </div>
            </div>
            
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <Image src={'/tamojit.jpeg'} alt="bgmi" width={200} height={30} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-12 font-bold md:text-2xl">Tamojit Sagari</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <Image src={'/priya.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-12 font-bold md:text-2xl">Priya Anand</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <Image src={'/ujjal_bhattacharya.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Ujjal </div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Bhattacharya</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <Image src={'/shrayshee.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Shrayasee Gain</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <Image src={'/arunava1.jpeg'} alt="bgmi" width={200} height={40} className="border  md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Arunava</div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Mondal</div>
                               
                            </div>
            </div>
        </div>

        {/*event co-head*/}

        <div className="underline underline-offset-8text-xl md:text-3xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center mb-10 p-8 mt-20">
                <div className="md:text-5xl text-3xl mt-4 italic font-extrabold text-white">
                    CO-HEAD
                </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-4 cursor-pointer">
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <Image src={'/ujan.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Ujan Ghosh</div>
                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <Image src={'/argha_santra.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Argha Santra </div>
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <Image src={'/anandi.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Anandi Das </div>
                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <Image src={'/arnab.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Arnab Saha</div>
                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <Image src={'/supriya.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Supriya Mishra</div>
                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <Image src={'/swapnadeep.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Swapnadeep</div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Saha</div>
                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <Image src={'/ananya.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Ananya Biswas</div>
                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <Image src={'/kushal_barai.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Kusal Barai</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <Image src={'/suchetana.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Suchetana </div>
                            <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Chakraborty </div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <Image src={'/hemant.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Hemant Singh</div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Rajput</div>
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <Image src={'/aiyush.jpeg'} alt="bgmi" width={200} height={40} className="border  md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Aiyush Ganguly</div>
                               
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <Image src={'/koyel.jpeg'} alt="bgmi" width={200} height={40} className="border  md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Koyel Patowari</div>
                               
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <Image src={'/deeba_ali_naz.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Deeba Ali</div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Naz</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <Image src={'/rahul_sau.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Rahul Sau</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <Image src={'/ayushi.jpeg'} alt="bgmi" width={200} height={40} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Ayushi Tiwari</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <Image src={'/rejaull.jpeg'} alt="bgmi" width={200} height={20} className="border  rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Rejaul Haque</div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Laskar</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <Image src={'/sanayad.jpeg'} alt="bgmi" width={200} height={20} className="border md:h-52 md:w-52 rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Sanaya Bharti</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <Image src={'/shovanc.jpeg'} alt="bgmi" width={200} height={40} className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Shovan Chaudhuri</div>
                        
                            </div>
            </div>
            
        </div>
    </div>

}