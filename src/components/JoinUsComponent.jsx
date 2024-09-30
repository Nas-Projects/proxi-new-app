"use client" 

import Link from 'next/link'
// import clsx from 'clsx'
import { useEffect, useRef, useState } from "react";
// import { urlFor } from "@/sanity/lib/image.js";

// import Image from 'next/image';
import {useInView} from 'framer-motion';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import BlurImage from './blur-image';


export default function JoinUsComponent({joinUsData }) {

  const sectionIntroRef = useRef(null); // Define the missing sectionIntroRef
  // const section2ImageRef = useRef(null);
  // const Section2TextCompRef = useRef(null);
  // const section3ImageRef = useRef(null);
  // const section3TextCompRef = useRef(null);

  const [sectionIntro, setSectionIntro] = useState(null);
  const [section1, setSection1] = useState(null);
  const [loading, setLoading] = useState(true);  
  const sectionRef = useRef(null);
   const isInView = useInView(sectionRef);
  // Load the joinUsData
  useEffect(() => {
    if (joinUsData) {
      console.log("joinUsData.data", joinUsData);
      // Set intro paragraph as sectionIntro
      setSectionIntro(joinUsData.introParagraph);
      console.log("joinUsData.introParagraph", joinUsData.introParagraph);
      // Set first section as section1
      if (joinUsData.sections) {
        setSection1(joinUsData.sections[0]);
        console.log("joinUsData.sections", joinUsData.sections[0]);
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [joinUsData]);

  // // Intersection Observer for the section animation
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         const target = entry.target;
  //         if (entry.isIntersecting) {
  //           target.classList.add('slide-up');
  //         } else {
  //           target.classList.remove('slide-up');
  //         }
  //       });
  //     },
  //     { threshold: 0.1 } // Adjust threshold for when the element becomes visible
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   if (sectionIntroRef.current) {
  //     observer.observe(sectionIntroRef.current); // Add observer for sectionIntroRef
  //   }

  //   return () => {
  //     if (sectionRef.current) observer.unobserve(sectionRef.current);
  //     if (sectionIntroRef.current) observer.unobserve(sectionIntroRef.current);
  //   };
  // }, []);

  // // Animation for Section 2 Image
  // useEffect(() => {
  //   const Section2mage = document.getElementById('Section2mage');

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           Section2mage.classList.add('bg-pan-right');
  //         } else {
  //           Section2mage.classList.remove('bg-pan-right');
  //         }
  //       });
  //     },
  //     { threshold: 0.0 } // Adjust the threshold as needed
  //   );

  //   if (section2ImageRef.current) {
  //     observer.observe(section2ImageRef.current);
  //   }

  //   return () => {
  //     if (section2ImageRef.current) {
  //       observer.unobserve(section2ImageRef.current);
  //     }
  //   };
  // }, []);

  // // Animation for Section 2 Text
  // useEffect(() => {
  //   const Section2TextComp = document.getElementById('Section2TextComp');

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           Section2TextComp.classList.add('slide-in-right');
  //         } else {
  //           Section2TextComp.classList.remove('slide-in-right');
  //         }
  //       });
  //     },
  //     { threshold: 0.1 } // Adjust the threshold as needed
  //   );

  //   if (Section2TextCompRef.current) {
  //     observer.observe(Section2TextCompRef.current);
  //   }

  //   return () => {
  //     if (Section2TextCompRef.current) {
  //       observer.unobserve(Section2TextCompRef.current);
  //     }
  //   };
  // }, []);

  // // Animation for Section 3 Image
  // useEffect(() => {
  //   const isDesktopOrTablet = () => window.innerWidth >= 768;

  //   if (!isDesktopOrTablet()) {
  //     // Skip animation on mobile devices
  //     return;
  //   }

  //   const section3Image = document.getElementById('section3Image');

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           section3Image.classList.add('bg-pan-right');
  //         } else {
  //           section3Image.classList.remove('bg-pan-right');
  //         }
  //       });
  //     },
  //     { threshold: 0.1 } // Adjust the threshold as needed
  //   );

  //   if (section3ImageRef.current) {
  //     observer.observe(section3ImageRef.current);
  //   }

  //   return () => {
  //     if (section3ImageRef.current) {
  //       observer.unobserve(section3ImageRef.current);
  //     }
  //   };
  // }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!sectionIntro) {
    return <div>No data found.</div>;
  }


  return (
    <div className="!relative h-full bg-black">
        <section  className=" !relative min-h-[84vh] xl:min-h-screen">
    
         <div className="relative top-0 inset-x-0">
           <div  className="relative" >
       
               <div>
                   <div data-testid="colorUnderlay" className="LWbAav Kv1aVt"></div>
                      <div
               
                       style={{
                        
                         willChange: "transform",
                         transform: "translate3d(0px, 0.2px, 0px)",
                       }}
                     >
                       <wow-image 
                         className="HlRz5e dLPlxY mNGsUM bgImage h-[800px] lg:h-[1007px]"
                         data-image-info={`{ "containerId":"comp-kkuwu6gj"  }`}
                         data-bg-effect-name="BgParallax"
                         data-has-ssr-src=""
                       >
                         <BlurImage className="h-[800px] lg:h-[1007px]"
                          src={'/blockchain2.jpeg'}
                           alt=""
                           style={{ width: "1963px",  objectFit: "cover", objectPosition: "50% 0%" }}
                           width="3980"
                           height="600"
                           fetchpriority="high"
                         />
                       </wow-image>
                     </div> 
                   </div>
                   <div id="" className="absolute px-6 top-[10%] lg:left-[10%] lg:top-[20%] !z-10"  >
                     <div 
                     ref={sectionRef}    
                      style={{
                          transition: "all 1.5s ease-in-out",
                          opacity: !isInView ? 1 : 0,
                          transform: isInView ?  "translateY(0)" : "translateY(100)",
                        }}> 
                   
                    <div className="section-1-text-wrapp px-0" >
                         <div className="block xl:inline-flex space-y-4"> 
                          <h1 className="font_0 text-white" 
                              style={{ lineHeight: "normal", fontSize: "76px" }}>
                           <span style={{ letterSpacing: "0.02em" }} className="wixui-rich-text__text">
                             <span className="mt-8 pr-4 mmin-[1400px]:hidden color_11 wixui-rich-text__text">
                              JOIN {!isInView}
                             </span>
                           </span>
                         </h1>
                         <h1 style={{
                            transition: "all 0.5s ease-in-out",
                            opacity: !isInView ? 1 : 0}}
                            className="text-custom-gradient text-left 
                              !font-bold text-center text-[36px] xl:text-[86px] max-[1700px]::text-[96px]">
                              PROXY REALESTATE <br class="wixui-rich-text__text "/>
                        </h1>
                       <div ref={sectionIntroRef} className="text-center 
                            wixui-rich-text lg:mb-8 h-full">
                        <div ref={sectionIntroRef} className="wixui-rich-text lg:mb-8">
                         {/* <h1 className="font_0 wixui-rich-text__text min-[1200px]:max-w-[80vw]" style={{ lineHeight: "normal", fontSize: "76px" }}>
                           <span style={{ letterSpacing: "0.02em" }} className="wixui-rich-text__text">
                             <span className="color_11 wixui-rich-text__text">
                            {sectionIntro.title}
                             </span>
                           </span>
                         </h1> */}
                         </div>
                       </div>
                     </div>
                      
                     
                       </div>
                       <div className=" wixui-rich-text lg:px-24 xl:px-44 backdrop-blur mt-12 text-left lg:text-right">
                         <p  id="SlideInUp"
                          ref={sectionRef}
                          className="font_7 wixui-rich-text__text"
                          style={{ lineHeight: "1.4em", fontSize: "24px" }}
                         >
                           <span>
                             <span className=" text-lg md:text-xl lg:text-2xl text-white px-4">
                             {sectionIntro}
                             </span>
                           </span>

                           <div className=" lg:!float-right lg:!mr-[-20%] lg:mb-[20vh]hover:!text-white bg-wtransparent hover:bg-black 
                                  hover:!text-white dark:hover:!text-white mx-6 sm:mx-0 w-[14em] 
                                !mt-6 border border-1 border-white rounded-md lg:ml-[.2%] 
                                text-center flex">
                                <Link href="/contact"
                                  className="uDW_Qe wixui-button PlZyDq text-white bg-custom-gradient  py-4 px-[10%]" >
                                  <span className="l7_2fn wixui-button__label hover:text-white dark:hover:!text-white">Sign up</span>
                              </Link>
                            </div>  
                         </p>
                       </div>
                     </div>
                   </div>
                   <div id="SlideInFromLeft"
                      ref={sectionRef}
                      data-mesh-id="comp-kkuwu6gjinlineContent" 
                      data-testid="inline-content" 
                      className="mwF7X1 absolute top-[2%] left-[10%] max-w-[80vw]">
                     <div>
                    <div className="section-1-text-wrapp px-0 lg:px-[7%] min-[1400px]:px-[8%]" >
                      {/* <h1 href="/" target="_self" className="text-custom-gradient text-left mt-24 
                         !font-bold text-center text-[36px] xl:text-[96px]">
                         PROXY REALESTATE <br class="wixui-rich-text__text "/>
                        </h1> */}
                       <div className="HcOXKn c9GqVL QxJLC3  
                            text-center comp-kkuwwx9z
                            wixui-rich-text lg:mb-8">
                         <h1 className="font_0 text-white" 
                              style={{ lineHeight: "normal", fontSize: "76px" }}>
                           <span style={{ letterSpacing: "0.02em" }} className="wixui-rich-text__text">
                             <span className="mt-4 color_11 wixui-rich-text__text">
                              Join Us 
                             </span>
                           </span>
                         </h1>
                       </div>
                       <div className="mt-4wixui-rich-text px-6" >
                         <p id="SlideInUp" ref={sectionRef}  >
                           <span  className="text-lg md:text-xl lg:text-2xl text-white">
                             <span>
                             {sectionIntro}
                             </span> 
                            <div className="lg:!float-right lg:!mr-[-12%] lg:mb-[20vh]  flex hover:bg-[var(--light-theme-disabled-color)]
                                  hover:!text-white bg-wtransparent hover:bg-black 
                                  hover:!text-white dark:hover:!text-white mx-6 sm:mx-0 w-[14em] 
                                !mt-6 border border-1 border-white rounded-md lg:ml-[.2%] 
                                text-center flex">
                                <Link href="/contact"
                                  className="uDW_Qe wixui-button PlZyDq text-white bg-custom-gradient  py-4 px-[20%]" >
                                  <span className="l7_2fn wixui-button__label hover:text-white dark:hover:!text-white">Sign up</span>
                              </Link>
                              </div>  
                           </span>  
                             
                         </p> 
                
                       </div>
                       </div>
                     </div>
                   </div>
           
             
          
             {/* </section> */}
           </div>
         </div>
         <div className="relative my-1"></div>
    </section>

         <div id="Absout-SECTION-2" 
                className='max-[600px]:mt-[8vh] sm:!mt-[10vh] 
                xl:!mt-[0vh] relative bg-custom-gradient z-20 '>  
                                
                <div className="relative  w-wull col-span-3 pb-12  xl:pt-12 xl:pb-24">
                  <div 
                    className="MW5IWV">  
                      <div className="pl-4  pt-14  wixui-rich-text">
                     <p class="font_4 wixui-rich-text__text !text-white pb-6 px-4" 
                      style={{
                        transition: "all 0.5s ease-in-out",
                        opacity: !isInView ? 1 : 0,
                        transform: !isInView ?  "translateY(0)" : "translateX(1000)",
                      }}
                     >
                        <h2 class="text-white text-left lg:text-right lg:px-[3em]">
                        <span className='text-white mt-2 lg:mt-6 py-4 '>
                            {section1.sectionTitle.toUpperCase()}
                        </span>
                        </h2>
                      </p>
                      </div>
      
                 
                      <div className=" wixui-rich-text px-[6%] lg:py-6">
                        <p id="Section2TextComp" ref={sectionRef}   
                        className="font_7 wixui-rich-text__text !text-white" 
                           style={{ lineHeight: "1.4em", fontSize: "24px" }}>
                          <span className=" text-lg text-left lg:text-right md:text-xl lg:text-2xl text-white">  
                                {section1.sectionContent}
                          </span> <div  style={{ lineHeight: "1.4em", fontSize: "24px" }}
                       className="lg:!float-right lg:!mr-[-12%] lg:mb-[20vh] hover:!text-white bg-wtransparent hover:bg-black 
                          hover:!text-white dark:hover:!text-white mx-6 sm:mx-0 w-[14em] 
                        !mt-6 border border-1 border-white rounded-md lg:ml-[.2%] 
                    text-center flex">
                    <Link href="/contact"
                      className="uDW_Qe wixui-button PlZyDq text-white bg-custom-gradient  py-4 px-[10%]" >
                      <span className="l7_2fn wixui-button__label hover:text-white dark:hover:!text-white">Join US</span>
                  </Link>
                  </div>  
        
                        </p> 
                
                      </div>
                
        </div>
      </div>
    </div>

      {/* ----------------- EXPANDABLES ----------------- */}
      <section id="Section3" 
                ref={sectionRef}
                className="flex px-6 mx-auto justify-center items-center 
                  max-w-5xl relative bg-black !relative 
                  pb-44 pt-[1em] xl:py-[1rem] py-6 xl:pb-44">
            <div className="center lg:pt-4 lg:pb-24  "> 
            <h1 className="text-left lg:text-center text-white pb-4 py-12 ">
              More FAQs
            </h1>
            <div className="expandable mt-6 lg:mt-12 sm:grid grid-cols-1 
                !min-h-[500px] opacity-1 z-20 mx-auto 
                gap-x-12 gap-y-4 lg:grid-cols-2 gap-x-0" >      
                <AccordionDemo data={joinUsData}  />
          </div>
        </div>
    </section>
    </div>
  );
}

// export const ExpandableSection = ({ title, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="expandable-section z-50">
//       <div
//         className={clsx(
//           isOpen && "shadow-xl",
//           "expandable-header !bg-white rounded-lg shadow-md px-4 justify-center py-3 inline-flex gap-x-4 w-full"
//         )}
//         onClick={() => setIsOpen(!isOpen)}
//         style={{ cursor: "pointer", padding: "10px", background: "#f0f0f0" }}
//       >
//         <h3 className="!text-xl lg:text-2xl xl:text-3xl font-bold">{title}</h3>
//         <span>{isOpen ? "-" : "+"}</span>
//       </div>
//       {isOpen && <div className="expandable-content pt-4 px-6 text-white">{children}</div>}
//     </div>
//   );
// };




export function AccordionDemo({data}) {
  return (
   <> 
   {data?.sections[0]?.tiles?.map((tile, index) => {
       return  (  <Accordion key={index} type="single" collapsible className=" group w-full text-white ">
                    <AccordionItem value="item-1"  key={index}>
                      <AccordionTrigger className="text-white text-left text-2xl group-hover:text-pink-400">
                        {tile.tileTitle}
                        </AccordionTrigger>
                        <AccordionContent className='text-xl text-slate-200 group-hover:text-pink-100/90'>
                        {tile.tileContent}
                        </AccordionContent>
                      </AccordionItem>
                     </Accordion>
        )})}</>
  )
}
