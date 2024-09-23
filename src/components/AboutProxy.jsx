'use client';
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { aboutimg } from "../../public/assets";
import { layout } from "../styles/styles";
import Image from "next/image";
import {
  ArrowLeft,
  BarChart3,
  Edit3,
  Globe,
  Layout,
  LayoutDashboard,
  Megaphone,
  Menu,
  Newspaper,
  Settings,
  FileCode,
  Github,
  Users2Icon,
  Section
} from "lucide-react";


const AboutProxy = () => {
  return (
   <section>
    <div className="relative py-[7vh] mt-24 md:mt-12 md:mt-[10em]  lg:mt-12 xlg:mt-12 xl:mb-24">
    <div className="w-full lg:mt-24 lg:mt-34 xl:justify-center
         xl:max-w-[95vw] lg:px-12 lg:ppt-24 pb-44 lg:pb-12 xl:pb-44 relative h-[80vh]">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-24">
         {/* about left */}
         <motion.div variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="flex py-2 items-center w-full md:mb-12 ss:mb-8 
            mb-8 md:hidden">
                <h1 className="text-custom-gradient px-8 text-center font-bold md:text-[55px]
                ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5">
                    Who are we?
                </h1>
                <motion.div variants={fadeIn('down', 'tween', 0.2, 0.5)}
                className="flex-1 relative items-center justify-center">
                    <div className='bg-main w-full h-[2px]' />
                </motion.div>
            </motion.div>
         <div className=" lg:mr-34 relative mb-10 lg:mb-0">
           <img src="./assets/img/others/7.png" alt="" className="max-w-full" />
           <div className="lg:absolute top-0 left-[10px] bottom-[70px] w-150px md:w-300px">
             <div className="relative">
               <img src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/others/7.png" alt="" className="w-full" />
               <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                 <a
                   className="glightbox2 w-44 h-44 lg:w-20 lg:h-20 text-center lg:text-lg text-secondary-color shadow-box-shadow-2 rounded-full bg-white flex items-center justify-center animate-pulse1"
                   href="https://www.youtube.com/embed/tlThdr3O5Qo"
                   data-glightbox="type: video;"
                 >
                   <i className="icon-play" />
                 </a>
               </div>
             </div>
           </div>
         </div>
         {/* about right */}
         <div className="px-8"> 
           <div className="mb-5  -mt-[0em] lg:mt-[1em] lg:mt-24">
           <motion.div variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="hidden md:flex items-center w-full md:mb-12 ss:mb-8 
            mb-8">
                <h1 className="mt-4 text-custom-gradient font-bold md:text-[55px]
                ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5">
                    Who are we?
                </h1>
                <motion.div variants={fadeIn('down', 'tween', 0.2, 0.5)}
                className="flex-1 relative items-center justify-center">
                    <div className='bg-main w-full h-[2px]' />
                </motion.div>
            </motion.div>
            
             {/* <p className="my-4 text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color bg-opacity-10 capitalize mb-15 py-1 px-5 rounded-full inline-block font-semibold">
               <span className="leading-1.3">about us</span>
             </p> */}
             <h2 className="text-2xl text-left sm:text-3xl md:text-xl lg:text-3xl xl:text-44px text-heading-color font-bold mb-15px">
                <span className="leading-1.3">
              The <span className="text-custom-gradient px-2">Next </span>Leading Real Estate Company
              </span>
             </h2>
             <p className="text-sm lg:text-base max-w-500px">
               <span className="text-left leading-1.8 lg:leading-1.8">
               At PROXY, we are revolutionizing the real estate landscape by blending cutting-edge technology, efficient algorithms, and blockchain solutions. Our is for agents,  owners & clients in.... the rental maram of over 39,000 prof.. than 70 countries.
               </span>
             </p>
           </div>
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2 pt-4 gap-x-2">
             <li className="text-sm lg:text-base flex items-center gap-x-2">
             <Globe width={18} className="flaticon-mountain text-xl horver:text-[var(--secondary-color)] bg-color-6 w-45px h-45px flex items-center justify-center mr-25px rounded-100%" />
               <span className="leading-1.8">Global Reach</span>
             </li>
             <li className="text-sm lg:text-base flex items-center gap-x-2">
             <Users2Icon width={18} className="flaticon-mountain text-xl horver:text-[var(--secondary-color)] bg-color-6 w-45px h-45px flex items-center justify-center mr-25px rounded-100%" />

               <span className="leading-1.8">Mutiparties Interactions</span>
             </li>
             <li className="text-sm lg:text-base flex items-center gap-x-2">
             <Newspaper width={18} className="flaticon-heart text-xl text-secondary-color bg-color-6 w-45px h-45px flex items-center justify-center mr-25px rounded-100%" />

               <span className="leading-1.8">Blockchain Inclusion</span>
             </li>
             <li className="text-sm lg:text-base flex items-center gap-x-2">
             <Globe width={18} className="flaticon-heart text-xl text-secondary-color bg-color-6 w-45px h-45px flex items-center justify-center mr-25px rounded-100%" />
               <span className="leading-1.8  text-left">Decentralize properties via tech</span>
             </li>
           </ul>
           <div className="mt-12 bg-highlight bg-opacity-5 mt-30 mb-10">
             <p className="text-sm lg:text-base p-5 border-l-4 border-secondary-color">
               <span className="leading-1.8">
                 "Enimad minim veniam quis nostrud exercitation <br />
                 llamco laboris. Lorem ipsum dolor sit amet"
               </span>
             </p>
           </div>
           <div>
             <h5 className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
               <span className="inline-block absolute top-0 right-0 w-full h-full bg-custom-gradient group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
               <a
                 href="/services"
                 className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px"
               >
                 OUR SERVICES
               </a>
             </h5>
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