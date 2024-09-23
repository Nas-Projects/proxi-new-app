"use client" 

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useEffect, useRef, useState } from "react";
import { urlFor } from "@/sanity/lib/image.js";

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default  function AboutPage({aboutPagedata}) {
  console.log("ABOUTTT_COMPONENTDATA", aboutPagedata)
  const [pageData, setPageData] = useState(null);
  // const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);
  const section2ImageRef = useRef(null);
  const Section2TextCompRef = useRef(null); 
  
const section3ImageRef = useRef(null);
const section3TextCompRef = useRef(null); 


let section1 
let section2 
let section3

  useEffect(() => {
    console.log("About PageComponent_1", pageData);
    if (aboutPagedata.length >= 0) {
      section1 = aboutPagedata.sections[0];
      section2 = aboutPagedata.sections[1];
      section3 = aboutPagedata.sections[2];
      setPageData(section1, section2, section3)
      //  setLoading(false)
      console.log("About PageComponent dataound SetPageData", pageData);
    }
  }, [aboutPagedata]);
      

  // if (loading) {
  //   return <div>Loading. PAGE Component..</div>;
  // }


useEffect(() => {
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              const bgMedia = entry.target;
              if (entry.isIntersecting) {
                  bgMedia.classList.add('slide-up');
              } else {
                  bgMedia.classList.remove('slide-up');
              }
          });
      },
      { threshold: 0.0 }  // Adjust the threshold as needed
  );

  if (sectionRef.current) {
      observer.observe(sectionRef.current);
  }

  return () => {
      if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
      }
  };
}, []);


// TEXT_comp-kkux3thlinlineContent
useEffect(() => {
  const Section2mage = document.getElementById('Section2mage');

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                Section2mage.classList.add('bg-pan-right');
              } else {
                Section2mage.classList.remove('bg-pan-right');
              }
          });
      },
      { threshold: 0.0 }  // Adjust the threshold as needed
  );

  if (section2ImageRef.current) {
      observer.observe(section2ImageRef.current);
  }

  return () => {
      if (section2ImageRef.current) {
          observer.unobserve(section2ImageRef.current);
      }
  };
}, []);

useEffect(() => {
  const Section2TextComp = document.getElementById('Section2TextComp');
  // const Section2TextComp = document.getElementById('#aboutSection3Paragraph');
  const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
              Section2TextComp.classList.add('slide-in-right');
            } else {
              Section2TextComp.classList.remove('slide-in-right');
            }
              
          });
      },
      { threshold: 0.1 }  // Adjust the threshold as needed
  );

   if (Section2TextCompRef.current) {
          observer.observe(Section2TextCompRef.current);
      }

      return () => {
           if (Section2TextCompRef.current) {
              observer.unobserve(Section2TextCompRef.current);
            }
          };
}, []);



useEffect(() => 
    
  {const isDesktopOrTablet = () => {
  // Check if the device width is greater than a mobile breakpoint (e.g., 768px)
  return window.innerWidth >= 768;
};
  if (!isDesktopOrTablet()) {
    // Do not apply the animation on mobile devices
    return;
  }

  const section3Image = document.getElementById('section3Image');
  // const Section2TextComp = document.getElementById('#aboutSection3Paragraph');
  const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
              section3Image.classList.add('bg-pan-right')
            } else {
              section3Image.classList.remove('bg-pan-right');
            }
              
          });
      },
      { threshold: 0.1 }  // Adjust the threshold as needed
  );

   if (section3ImageRef.current) {
          observer.observe(section3ImageRef.current);
      }

      return () => {
          if (section3ImageRef.current) {
              observer.unobserve(section3ImageRef.current);
          }
       };
}, []);

// useEffect(() => {
//   const section3Image = document.getElementById('section3Image');
//   // const Section2TextComp = document.getElementById('#aboutSection3Paragraph');
//   const observer = new IntersectionObserver(
//     (entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               section3Image.classList.add('bg-pan-right')
//             } else {
//               section3Image.classList.remove('bg-pan-right');
//             }
              
//           });
//       },
//       { threshold: 0.1 }  // Adjust the threshold as needed
//   );

//    if (section3ImageRef.current) {
//           observer.observe(section3ImageRef.current);
//       }

//       return () => {
//           if (section3ImageRef.current) {
//               observer.unobserve(section3ImageRef.current);
//           }
//        };
// }, []);

// useEffect(() => {
//   const section3TextComp = document.getElementById('section3TextComp');
//   const observer = new IntersectionObserver(
//     (entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               section3TextComp.classList.add('slide-in-right');
//             } else {
//               section3TextComp.classList.remove('slide-in-right');
//             }
              
//           });
//       },
//       { threshold: 0.0 }  // Adjust the threshold as needed
//   );

//    if (section3TextCompRef.current) {
//           observer.observe(section3TextCompRef.current);
//       }

//       return () => {
//           if (section3TextCompRef.current) {
//               observer.unobserve(section3TextCompRef.current);
//           }
//           };
// }, []);


  return (
    <div className="relative h-full">
    <section   id="comp-lt8qptm3"
      tabIndex="-1" 
      className="comp-lt8qptm3 wixui-section bg-gray-400 !relative "
      data-block-level-container="ClassicSection"
    >

       
         <div
           id="bgLayers_comp-lt8qptm3"
           data-hook="bgLayers"
           data-motion-part="BG_LAYER"
           className="MW5IWV"
         >
           <div data-testid="colorUnderlay" className="LWbAav Kv1aVt !top-20"></div>
           <div id="bgMedia_comp-lt8qptm3" data-motion-part="BG_MEDIA" className="VgO9Yg"></div>
         </div>
         <div data-mesh-id="comp-lt8qptm3inlineContent" data-testid="inline-content" className="">
           <div
             data-mesh-id="comp-lt8qptm3inlineContent-gridContainer"
             data-testid="mesh-container-content"
           >
               <div
                 id="bgLayers_comp-kkuwu6dm"
                 data-hook="bgLayers"
                 data-motion-part="BG_LAYER"
                 className="if7Vw2"
               >
                 <div data-testid="colorUnderlay" className="tcElKx i1tH8h"></div>
                 <div id="bgMedia_comp-kkuwu6dm" data-motion-part="BG_MEDIA" className="wG8dni"></div>
               </div>
               <div data-testid="columns" className="V5AUxf">
                 <div id="comp-kkuwu6gj" className="comp-kkuwu6gj YzqVVZ wixui-column-strip__column">
                   <div>
                     <div data-testid="colorUnderlay" className="LWbAav Kv1aVt"></div>
                     <wix-bg-media
                      //  id="bgMedia_comp-kkuwu6gj"
                       className="SUz0WK"
                      //  data-container-id="comp-kkuwu6gj"
                      //  data-container-size="0, 0"
                      //  data-page-id="xo6fy"
                      //  data-bg-effect-name="BgParallax"
                      //  data-motion-part="BG_MEDIA"
                       style={{
                         width: "1363px",
                         height: "1007px",
                         left: "0px",
                         top: "0px",
                         willChange: "transform",
                         transform: "translate3d(0px, 0.2px, 0px)",
                       }}
                     >
                       <wow-image
                      
                         className="HlRz5e dLPlxY mNGsUM bgImage"
                         data-image-info={`{ "containerId":"comp-kkuwu6gj"  }`}
                         data-bg-effect-name="BgParallax"
                         data-has-ssr-src=""
                       >
                         <img
                           src={urlFor(section1.image.asset._ref).url()}
                           alt=""
                           style={{ width: "1963px", height: "1007px", objectFit: "cover", objectPosition: "50% 0%" }}
                           width="3980"
                           height="600"
                           fetchpriority="high"
                         />
                       </wow-image>
                     </wix-bg-media>
                   </div>
                   <div id="SlideInFromLeft"
                      ref={sectionRef}
                      data-mesh-id="comp-kkuwu6gjinlineContent" 
                      data-testid="inline-content" 
                      className="mwF7X1 absolute top-[33%] left-[10%]">
                     <div
                     
                     > <a href="/" target="_self" class="wixui-rich-text__text hover:text-white  text-black  !font-bold text-center text-[36px] xl:text-[96px]">— PROXY —<br class="wixui-rich-text__text "/></a>
                       <div className="HcOXKn c9GqVL QxJLC3 comp-kkuwwx9z wixui-rich-text lg:mb-8">
                         <h1 className="font_0 wixui-rich-text__text min-[1200px]:max-w-[40vw]" style={{ lineHeight: "normal", fontSize: "76px" }}>
                           <span style={{ letterSpacing: "0.02em" }} className="wixui-rich-text__text">
                             <span className="color_11 wixui-rich-text__text">
                            {section1.title}
                             </span>
                           </span>
                         </h1>
                       </div>
                       <div className="HcOXKn c9GqVL QxJLC3 comp-kkuxe0vg wixui-rich-text xl:max-w-lg min-[1300px]:max-w-[40vw]"
                        
                       >
                         <p    
                         id="SlideInUp"
                          ref={sectionRef}
                          className="font_7 wixui-rich-text__text min-[1200px]:max-w-[40vw]"
                          style={{ lineHeight: "1.4em", fontSize: "24px" }}
                         >
                           <span style={{ letterSpacing: "normal" }} className="wixui-rich-text__text">
                             <span className="color_11 wixui-rich-text__text">
                             {section1.description}
                             </span>
                           </span>
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             {/* </section> */}
           </div>
         </div>
       
      <div data-mesh-id="comp-lt8qptm3inlineContent" data-testid="inline-content" className="">
        <div
          data-mesh-id="comp-lt8qptm3inlineContent-gridContainer"
          data-testid="mesh-container-content"
        >
          {/* Add your content here */}
        </div>
      </div>
    </section>

    <div  id="Absout-SECTION-2"  className="relative !min-h-[20vh]  comp-lt8qptm4 wixui-section sm:top-[55vh] lg:!top-[20vh] sm:h-full"
    
    >
    
      <div 
        id="About-section2" 
        data-mesh-id="comp-lt8qptm4inlineContent" 
        data-testid="inline-content"
        className="relative py-12 w-full"
        > 
        <div className="w-full left-0 -mt-[0%] "
          data-mesh-id="comp-lt8qptm4inlineContent-gridContainer"
          data-testid="mesh-container-content"
        >
        
              <div
                id="bgLayers_comp-kkux3tg4"
                data-hook="bgLayers"
                data-motion-part="BG_LAYER"
                className="if7Vw2 opacity-[0.5]"
              > 
             
                <div data-testid="colorUnderlay" className="tcElKx i1tH8h"></div>
                <div id="bgMedia_comp-kkux3tg4" data-motion-part="BG_MEDIA" className="wG8dni"></div>
               
              </div>
              <div data-testid="columns" className="bg-[#3f4044ba] sm:bg-[#040405c4] w-screen sm:w-full absolute sm:grid grid-cols-7 !min-h-[700px] sm:px-[6%] sm:h-full py-12 xl:py-24 opacity-1 z-20 
              top-[-389px] sm:top-[-200px] xl:top-[-40px]">
                <div id="comp-kkux63q1" className="flex sm:block comp-kkux63q1 YzqVVZ wixui-column-strip__column col-span-3 z-20"
                 
                >
                
                  <div
                    // data-mesh-id="comp-kkux63q1inlineContent"
                    // data-testid="inline-content"
                    className="w-full z-20 "
                  >
                  
                       <div
                        className="MazNVa comp-kkux7dxt wixui-image z-20  px-[6%] sm:py-12  pb-12"
                        style={{ "--filter-effect-svg-url": "url(#kennedy-comp-kkux7dxt)" }}
                        data-motion-enter="done"
                      >
                      
                        <div ref={section2ImageRef}  
                        id="Section2mage" 
                        className="j7pOnl h-full w-full ">
                          <div   className="HlRz5e BI8PVQ  flex !h-full !w-full"
                          
                        
                          >
                            <img className='flex !h-full !w-screen object-cover'
                               src={urlFor(section2.image.asset._ref).url()}
                              alt=""
                              style={{ width: "1362px", height: "1303px" }}
                              width="1362"
                              height="1303"
                              fetchpriority="high"
                            />
                          </div>
                        </div>
                      </div>
                    
                  </div>
                </div>
                <div id="comp-kkux3thl" className="relative -mt-[3em] lg:mt-12 comp-kkux3thl YzqVVZ wixui-column-strip__column  w-wull col-span-3 pb-12  xl:pt-12 xl:pb-24">
                  <div
                    id="bgLayers_comp-kkux3thl"
                    data-hook="bgLayers"
                    data-motion-part="BG_LAYER"
                    className="MW5IWV"
                  >   <div id="comp-kkr5qq5f" class="pl-4 HcOXKn SxM0TO QxJLC3 comp-kkr5qq5f wixui-rich-text" data-testid="richTextElement">
                    <p class="font_4 wixui-rich-text__text !text-white pb-6 px-4" style={{"font-size":"18px"}}>
                      <a href="#comp-lt8qptm3" target="_self" class="wixui-rich-text__text hover:text-white text-sky-600 ">
                        OMARI HILLS —<br class="wixui-rich-text__text "/>
                      <span className='text-slate-300'>{section2.title.toUpperCase()}</span>
                      </a>
                    </p>
                      </div>
                    <div data-testid="colorUnderlay" className="LWbAav Kv1aVt"></div>
                    <div id="bgMedia_comp-kkux3thl" data-motion-part="BG_MEDIA" className="VgO9Yg"></div>
                  </div>
                  
                  <div data-mesh-id="comp-kkux3thlinlineContent"
                    data-testid="inline-content"
                    className="relative !z-30"
                  >
                    <div className='!z-30'>
                 
                      <div 
                        // id="comp-kkux5ddo"
                        className="HcOXKn SxM0TO QxJLC3 comp-kkux5ddo wixui-rich-text px-[6%] sm:py-12 "
                        data-testid="richTextElement"
                        data-motion-enter="done"
                      >
                        
                        <p id="Section2TextComp" ref={Section2TextCompRef}   className="font_7 wixui-rich-text__text !text-white" style={{ lineHeight: "1.4em", fontSize: "24px" }}>
                          <span className="color_14 wixui-rich-text__text !text-white">
                            
                          {section2.description}
                          </span>
                        </p>
                      </div>
                    <div  className="hover:bg-[var(--light-theme-disabled-color)] hover:!text-white bg-wtransparent hover:bg-black hover:!text-white dark:hover:!text-white mx-6 sm:mx-0 w-[14em] !flex content-center justify-center !mt-6 border border-1 border-white rounded-md lg:ml-[6.2%] text-center flex">
                        <Link
                        
                          href="/tracks"
                          target="_self"
                          className="uDW_Qe wixui-button PlZyDq text-white  py-4 px-[14%]"
                        
                        >
                          <span className="l7_2fn wixui-button__label hover:text-white dark:hover:!text-white">View All Tracks</span>
                        </Link>
                      </div>       
                    </div>
                  </div>
                </div>
           </div>
        
        </div>
      </div>
    </div>

    <section className='!relative h-[0em] py-44 mt-24 '/>

    <section className='!relative pb-24 mt-[5em] xl:py-[5rem] ' id="Section3">
    <div  className="relative my=24 sm:mt-[4rem] sm:grid grid-cols-7
     !min-h-[500px] py-12 opacity-1 z-20 mx-auto gap-x-12  gap-y-24 lg:grid lg:grid-cols-7 gap-x-0">
      <div id="section3TextComp"  ref={section3TextCompRef} className="relative sm:col-span-3 my-12 sm:py-14 px-[6%] mt-8  dark:bg-[black]" >
         <div >
                  <div id="comp-kkr5qq5f" class="HcOXKn SxM0TO QxJLC3 comp-kkr5qq5f wixui-rich-text" data-testid="richTextElement">
                    <p class="font_4 wixui-rich-text__text !text-white" style={{"font-size":"18px"}}>
                      <a href="#comp-lt8qptm3" target="_self" class="wixui-rich-text__text hover:text-white  text-sky-600 text-center">— PROXY —<br class="wixui-rich-text__text "/>
                  <span className='text-slate-300'>{section3.title}</span></a></p></div>
                <p className="font_7 wixui-rich-text__text pt-4 sm:py-12 max-w-xl text-left" style={{ lineHeight: "1.4em", fontSize: "24px" }}>
                  <span className="color_14 wixui-rich-text__text !text-slate-300">
                  {section3.description}
                  </span>
                  </p>

            </div>  
        </div>  
            <div className="bg-black sm:col-span-4 px-[6%] sm:px-0"  id="section3Image" ref={section3ImageRef}>
                <Image className='!h-full !w-full  object-cover'
                     src={urlFor(section3.image.asset._ref).url()}
                          alt=""
                          style={{ width: "662px", height: "603px" }}
                          width="362"
                          height="303"
                           srcSet="/reiki/track-5.jpeg"
                          fetchpriority="high"
                        />
                </div>        
        </div>
      </section>
  </div>
  )
}
