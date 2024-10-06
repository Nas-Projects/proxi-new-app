'use client';
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
// import { aboutimg } from "../../public/assets";
// import { layout } from "../styles/styles";
// import Image from "next/image";
import {
  // ArrowLeft,
  // BarChart3,
  // Edit3,
  Globe,
  // Layout,
  // LayoutDashboard,
  // Megaphone,
  // Menu,
  Newspaper,
  // Settings,
  // FileCode,
  // Github,
  Users2Icon,
  // Section
} from "lucide-react";
import Link from "next/link";


const AboutProxy = () => {
  return (
   <section className="xl:max-w-[96vw] min-[1500px]:px-[5vw] lg:mb-14">
    <div className="relative py-[2vh] lg:mt-[3em]] md:mt-12 md:mt-[4em] md:py-0 lg:mt-12 xlg:mt-12 xl:mb-24">
    <div className="w-full lg:mt-24 lg:mt-34 xl:justify-center
         xl:max-w-[99vw] lg:px-6 lg:pt-8 pb-44 lg:pb-12 xl:pb-4 relative min-h-[40vh]">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-12 xl:gap-x-10">
         {/* about left */} 
          <div className="md:hidden py-2 items-center w-full-mb-12  pl-4 mt-[-1em]">
           <motion.div variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="items-center w-full -mb-8">
                 <div class="section-header  opacity-1">
                <h1 class="!text-left text-center py-4 md:pt-8 md:pb-4 lg:pt-4 
                lg:pb-[-4em] max-[1700px]:text-[63px] text-custom-gradient">Who Are We?</h1>
                <div data-w-id="c61ae90e-5b42-2ae8-3af4-27a1254fdfcd"
                        className="title-wrap pb-12 max-w-xl lg:max-w-[34vw]"
                        style={{
                          opacity: 1,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d"
                        }}
                      >
                    
                        {/* <div className="space-08" /> */}
                      </div>
                   </div>
                  <div class="space-08"></div>
                <motion.div variants={fadeIn('down', 'tween', 0.2, 0.5)}
                className="flex-1 relative items-center justify-center">
                    {/* <div className='bg-main w-full h-[2px]' /> */}
                </motion.div>
            </motion.div>
            </div>
         <div className=" lg:mr-34 relative mb-10 lg:mb-0">
           {/* <img src="./assets/img/others/7.png" alt="" className="max-w-full" /> */}
           <div className="lg:absolute top-0 left-[10px] bottom-[70px] w-150px md:w-300px">
             <div className="relative">
               <img src="/blockchain_mov_ec1ff6532a.gif" alt="" className="w-full" />
               <div className="hidden lg:flex">
               <p className="text-sm lg:text-base max-w-500px">
               <span className="text-left leading-1.8 lg:leading-1.8 pt-6">
               We understand that traditional real estate practices often fall short,
                which is why we&quot;re re-imagining the entire process. Our focus is on delivering innovative solutions, 
               generous commission splits, and unparalleled transparency to elevate the experience 
               for everyone involved. Curious about how we can help? Give us a call!

              </span>
           </p>
         </div>
               {/* <div className="absolute left-0 top-24 w-full h-full flex items-center justify-center">
                 <a
                   className="glightbox2 w-44 h-44 lg:w-20 lg:h-20 text-center lg:text-lg text-secondary-color shadow-box-shadow-2 rounded-full bg-white flex items-center justify-center animate-pulse1"
                   href="https://www.youtube.com/embed/tlThdr3O5Qo"
                   data-glightbox="type: video;"
                 >
                   <i className="icon-play" />
                 </a>
               </div> */}
             </div>
           </div>
         </div>
         {/* about right */}
         <div className="px-8"> 
           <div className="mb-5 -mt-[0em] lg:mt-[1em] lg:mt-24">
           <div className="flex py-2 items-center w-full-mb-12  pl-4 mt-[-4em]">
           <motion.div variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="hidden md:flex items-center w-full -mb-8">
                 <div class="section-header text-mainText opacity-1">
                <h1 class="!text-left text-center py-4 md:pt-8 md:pb-4 lg:pt-4 
                lg:pb-[-4em] max-[1700px]:text-[63px] text-custom-gradient">Who Are We?</h1>
                <div data-w-id="c61ae90e-5b42-2ae8-3af4-27a1254fdfcd"
                        className="title-wrap pb-12 max-w-xl lg:max-w-[34vw]"
                        style={{
                          opacity: 1,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d"
                        }}
                      >
                    
                        {/* <div className="space-08" /> */}
                      </div>
                   </div>
                  <div class="space-08"></div>
                <motion.div variants={fadeIn('down', 'tween', 0.2, 0.5)}
                className="flex-1 relative items-center justify-center">
                    {/* <div className='bg-main w-full h-[2px]' /> */}
                </motion.div>
            </motion.div>
            </div>

         
            
             {/* <p className="my-4 text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color bg-opacity-10 capitalize mb-15 py-1 px-5 rounded-full inline-block font-semibold">
               <span className="leading-1.3">about us</span>
             </p> */}
             {/* <h2 className="text-2xl text-left sm:text-3xl md:text-xl lg:text-3xl xl:text-44px text-heading-color font-bold mb-15px">
                <span className="leading-1.3">
              The <span className="text-custom-gradient px-2">Next </span>Leading Real Estate Company
              </span>
             </h2> */}
             <p className="text-sm lg:text-base max-w-500px pt-14 lg:pt-2">
               <span className="text-left leading-1.8 lg:leading-1.8 ">
                    At Proxy, you come first! Our dedication to exceptional
                    customer service is at the heart of everything we do. We see our clients and agents as valued 
                    partners on your real estate journey. Think of us as your guide—we&quot;re here to listen closely to your needs and help 
                    you achieve your goals by providing the highest level of information, 
                    esources, and diligence throughout your transaction..
               </span>
             </p>
           </div>
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2 pt-4 gap-x-2 mb-6">
             <li className="text-sm lg:text-base flex items-center gap-x-2">
             <Globe width={18} className="flaticon-mountain text-xl horver:text-[var(--secondary-color)] bg-color-6 w-45px h-45px flex items-center justify-center mr-25px rounded-100%" />
               <span className="leading-1.8">Global Reach</span>
             </li>
             <li className="text-sm lg:text-base flex items-center gap-x-2">
             <Users2Icon width={18} className="flaticon-mountain text-xl horver:text-[var(--secondary-color)] bg-color-6 w-45px h-45px flex items-center justify-center mr-25px rounded-100%" />

               <span className="leading-1.8">Mutiparties Interactions</span>
             </li>
             <li className="text-sm lg:text-base flex items-center gap-x-2">
             <Newspaper width={18} className="flaticon-heart text-xl  bg-color-6 w-45px h-45px flex items-center justify-center mr-25px rounded-100%" />

               <span className="leading-1.8">Blockchain Inclusion</span>
             </li>
             <li className="text-sm lg:text-base flex items-center gap-x-2">
             <Globe width={18} className="flaticon-heart text-xl  bg-color-6 w-45px h-45px flex items-center justify-center mr-25px rounded-100%" />
               <span className="leading-1.8  text-left">Decentralize properties via tech</span>
             </li>
           </ul>
           {/* <div className="mt-12 bg-highlight bg-opacity-5  mb-10">
             <p className="text-sm lg:text-base p-5 border-l-4 border-secondary-color">
               <span className="leading-1.8">
                 Enimad minim veniam quis nostrud exercitation <br />
                 llamco laboris. Lorem ipsum dolor sit amet
               </span>
             </p>
           </div> */}
           <div className="flex">
            <div className="grid grid-cols-2 gap-x-4">
            <h5 className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
               <span className="inline-block absolute top-0 right-0 w-full h-full bg-custom-gradient group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
               <a
                 href="/about"
                 className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px"
               >
                Read More
               </a>
             </h5>
             
              <h5 className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
               <span className="inline-block absolute top-0 right-0 w-full h-full bg-black group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
               <Link href="/about#section2" 
                 className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px"
               >
                 Our Paradigm
                </Link>
             </h5>
            
            </div>
            
           </div>
         </div>
       </div>
     </div>
   
   
   {/* ------- */}

   
       </div> 
       </section>

  )
};

export default SectionWrapper(AboutProxy, 'AboutProxy');