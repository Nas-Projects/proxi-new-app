"use client" 

import Link from 'next/link'
import clsx from 'clsx'
import { useEffect, useRef, useState } from "react";
import { urlFor } from "@/sanity/lib/image.js";
import BlurImage from './blur-image';



export default function JoinUsComponent({joinUsData }) {
  const sectionRef = useRef(null);
  const section2ImageRef = useRef(null);
  const Section2TextCompRef = useRef(null);
  const section3ImageRef = useRef(null);
  const section3TextCompRef = useRef(null);

  const [sectionIntro, setSectionIntro] = useState(null);
  const [section1, setSection1] = useState(null);
  // const [remainingSections, setRemainingSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (joinUsData) {
      console.log("joinUsData.data",joinUsData);
      // Set intro paragraph as sectionIntro
      setSectionIntro(joinUsData.introParagraph);
      // console.log("joinUsData.data",joinUsData);
      console.log("joinUsData.introParagraph", joinUsData.introParagraph);
      // Set first section as section1
      if (joinUsData.sections) {
        setSection1(joinUsData.sections[0]);
        console.log("joinUsData.sections", joinUsData.sections[0]);
        // Set remaining sections as section2, section3, etc.
        // setRemainingSections(joinUsData.sections.slice(1)); // Use slice to avoid issues with indexing
        // console.log("joinUsData.expandabke", section1.tiles);
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [joinUsData]); // Ensure joinUsData is in the dependency array





  // ------ANIMATION



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

if (loading) {
  return <div>Loading...</div>;
}

if (!sectionIntro ) {
  return <div>No data found.</div>;
}


  return (
    <div className="!relative h-full">
        <section  id="comp-lt8qptm3"
      className="comp-lt8qptm3 wixui-section bg-gray-400 !relative min-h-[84vh] xl:min-h-screen">
         <div id="bgLayers_comp-lt8qptm3"
           className="MW5IWV"
         >
           <div data-testid="colorUnderlay" className="LWbAav Kv1aVt !top-20"></div>
           <div id="bgMedia_comp-lt8qptm3" data-motion-part="BG_MEDIA" className="VgO9Yg"></div>
         </div>
         <div className="absolute top-0" data-testid="inline-content">
           <div
             className="comp-lt8 ineContent-gridContainer"
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
                   <div id="SlideInFromLeft"
                      ref={sectionRef}
                      data-mesh-id="comp-kkuwu6gjinlineContent" 
                      data-testid="inline-content" 
                      className="mwF7X1 absolute top-[33%] left-[10%]">
                     <div
                     
                     > 
                    <div className="section-1-text-wrapp px-0 lg:px-[7%] min-[1400px]:px-[8%]" >
                      <h1 href="/" target="_self" className="text-custom-gradient text-left mt-24 
                         !font-bold text-center text-[36px] xl:text-[96px]">
                         PROXY REALESTATE <br class="wixui-rich-text__text "/>
                        </h1>
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
                         </div>
                     <a href="/" target="_self" class="wixui-rich-text__text hover:text-white  text-black  !font-bold text-center text-[36px] xl:text-[96px]">— ODFIT —<br class="wixui-rich-text__text "/></a>
                       {/* <div className="HcOXKn c9GqVL QxJLC3 comp-kkuwwx9z wixui-rich-text lg:mb-8">
                         <h1 className="font_0 wixui-rich-text__text min-[1200px]:max-w-[40vw]" style={{ lineHeight: "normal", fontSize: "76px" }}>
                           <span style={{ letterSpacing: "0.02em" }} className="wixui-rich-text__text">
                             <span className="color_11 wixui-rich-text__text">
                            {section1.title}
                             </span>
                           </span>
                         </h1>
                       </div> */}
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
                             {sectionIntro}
                             </span>
                           </span>
                         </p>
                       </div>
                     </div>
                   </div>
                   {/* <div id="SlideInFromLeft"
                      ref={sectionRef}
                      data-mesh-id="comp-kkuwu6gjinlineContent" 
                      data-testid="inline-content" 
                      className="mwF7X1 absolute top-[2%] left-[10%] max-w-[80vw]">
                     <div>
                    <div className="section-1-text-wrapp px-0 lg:px-[7%] min-[1400px]:px-[8%]" >
                      <h1 href="/" target="_self" className="text-custom-gradient text-left mt-24 
                         !font-bold text-center text-[36px] xl:text-[96px]">
                         PROXY REALESTATE <br class="wixui-rich-text__text "/>
                        </h1>
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
                       <div className="mt-4 HcOXKn c9GqVL QxJLC3 comp-kkuxe0vg wixui-rich-text " >
                         <p id="SlideInUp" ref={sectionRef}  >
                           <span  className="text-lg md:text-xl lg:text-2xl  text-white">
                             <span>
                             {sectionIntro}
                             </span>
                           </span>
                         </p> 
                     <div className="flex hover:bg-[var(--light-theme-disabled-color)]
                        hover:!text-white bg-wtransparent hover:bg-black 
                        hover:!text-white dark:hover:!text-white mx-6 sm:mx-0 w-[14em] 
                       !mt-6 border border-1 border-white rounded-md lg:ml-[.2%] 
                       text-center flex">
                      <Link href="/contact"
                        className="uDW_Qe wixui-button PlZyDq text-white bg-custom-gradient  py-4 px-[20%]" >
                        <span className="l7_2fn wixui-button__label hover:text-white dark:hover:!text-white">Sign up</span>
                    </Link>
                     </div>  
                       </div>
                       </div>
                     </div>
                   </div> */}
                 </div>
               </div>
          
             {/* </section> */}
           </div>
         </div>
         <div className="relative my-1"></div>
       {/* -------END OF SECTYION INTRO  */}
      {/* <div data-mesh-id="comp-lt8qptm3inlineContent !bg-black" data-testid="inline-content" className="">
        <div
          data-mesh-id="comp-lt8qptm3inlineContent-gridContainer"
          data-testid="mesh-container-content"
        >
         CONTENT 
        </div>
      </div> */}
    </section>

    <div id="Absout-SECTION-2"  
          className="!relative h-full bg-black
           !min-h-[20vh] comp-lt8qptm4 wixui-section 
           sm:top-[55vh] lg:!top-[0vh] sm:h-full" >
    
      <div id="About-section2" 
            data-mesh-id="comp-lt8qptm4inlineContent" 
            data-testid="inline-content"
            className="relative py-12 w-full"> 
          <div className="w-full left-0 -mt-[0%] "
                data-mesh-id="comp-lt8qptm4inlineContent-gridContainer"
                data-testid="mesh-container-content" >
               <div id="bgLayers_comp-kkux3tg4"
                    data-hook="bgLayers"
                    data-motion-part="BG_LAYER"
                    className="if7Vw2 opacity-[0.5]"> 
                   <div data-testid="colorUnderlay" className="tcElKx i1tH8h"></div>
                  <div id="bgMedia_comp-kkux3tg4" data-motion-part="BG_MEDIA" className="wG8dni"></div>
              </div>
              <div data-testid="columns" 
                   className="bg-black sm:bg-[#040405c4] w-screen sm:w-full 
                              relative sm:grid grid-cols-7 !min-h-[700px] sm:px-[6%] sm:h-full py-12 xl:py-24 opacity-1 z-20">
                     <div id="comp-kkux63q1" className="flex sm:block comp-kkux63q1 YzqVVZ wixui-column-strip__column col-span-3 z-20">
                    <div className="w-full z-20">
                  
                <div className="MazNVa comp-kkux7dxt wixui-image z-20  px-[6%] sm:py-12  pb-12"
                    style={{ "--filter-effect-svg-url": "url(#kennedy-comp-kkux7dxt)" }}
                    data-motion-enter="done">
                     <div ref={section2ImageRef}  
                        id="Section2mage" 
                        className="j7pOnl h-full w-full ">
                          <div  className="HlRz5e BI8PVQ  flex !h-full !w-full">
                         {section1.sectionImage && section1.sectionImage.asset && (
                          <BlurImage
                          className='flex !h-full !w-screen object-cover'
                              src={urlFor(section1.sectionImage).url()}
                              alt="section1 Image"
                              style={{ width: "1362px", height: "1303px" }}
                              width="1362"
                              height="1303"
                              fetchpriority="high"
                            />
                          )}
                          </div>
                        </div>
                      </div>
                    
                  </div>
                </div>
                <div id="comp-kkux3thl" className="relative -mt-[3em] lg:mt-12 comp-kkux3thl YzqVVZ wixui-column-strip__column  w-wull col-span-3 pb-12  xl:pt-12 xl:pb-24">
                  <div  id="bgLayers_comp-kkux3thl"
                    className="MW5IWV">  
                      <div id="comp-kkr5qq5f" class="pl-4 lg:-mt-24 HcOXKn SxM0TO QxJLC3 comp-kkr5qq5f wixui-rich-text">
                     <p class="font_4 wixui-rich-text__text !text-white pb-6 px-4" style={{"font-size":"18px"}}>
                        <a href="#comp-lt8qptm3" target="_self" class="wixui-rich-text__text hover:text-white text-sky-600 ">
                        <span className='text-custom-gradient mt-2 lg:mt-6 py-4 '>
                            {section1.sectionTitle.toUpperCase()}
                        </span>
                        </a>
                      </p>
                      </div>
                  <div data-testid="colorUnderlay" className="LWbAav Kv1aVt"></div>
                    <div id="bgMedia_comp-kkux3thl" className="VgO9Yg"></div>
                   </div>
                  <div  className="relative !z-30 -mt-4 lg:-mt-16" >
                    <div className='!z-30'>
                      <div className="HcOXKn SxM0TO QxJLC3 comp-kkux5ddo wixui-rich-text px-[6%] sm:py-12">
                        <p id="Section2TextComp" ref={Section2TextCompRef}   
                        className="font_7 wixui-rich-text__text !text-white" 
                           style={{ lineHeight: "1.4em", fontSize: "24px" }}>
                          <span className="color_14 wixui-rich-text__text 
                                text-lg md:text-xl lg:text-2xl text-white">  
                                {section1.sectionContent}
                          </span>
                        </p>
                      </div>
                    <div  className="hover:bg-[var(--light-theme-disabled-color)] hover:!text-white bg-wtransparent hover:bg-black hover:!text-white dark:hover:!text-white mx-6 sm:mx-0 w-[14em] !flex content-center justify-center !mt-6 border border-1 border-white rounded-md lg:ml-[6.2%] text-center flex">
                        <Link href="/contact"
                            target="_self"
                            className="uDW_Qe wixui-button PlZyDq text-white bg-custom-gradient  py-4 px-[20%]" >
                          <span className="l7_2fn wixui-button__label hover:text-white dark:hover:!text-white">Reach out</span>
                        </Link>
                      </div>       
                    </div>
                  </div>
                </div>
           </div>
        
        </div>
      </div>
    </div>

       {/* ----------------- EXPANDABLES ----------------- */}
       <section id="Section3" className="bg-black !relative pb-44 pt-[1em] xl:py-[1rem]">
        <h2 className="text-white pb-4">More FAQs</h2>
        <div
          className="expandable sm:grid grid-cols-4 !min-h-[500px] opacity-1 z-20 mx-auto gap-x-12
                        gap-y-4 lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-x-0"
        >
          {/* Mapping over the tiles */}
          {joinUsData?.sections[0]?.tiles?.map((tile, index) => {
            return (
              <div className="relative my-4 sm:mt-[0rem]" key={index}>
                <div
                  id="section3TextComp"
                  ref={section3TextCompRef}
                  className="relative sm:col-span-3 my-4 sm:py-6 px-[6%] mt-2 dark:bg-[black]"
                >
                  <ExpandableSection key={tile._key || index} title={tile.tileTitle}>
                    <div>
                      <p className="text-xl">{tile.tileContent}</p>
                    </div>
                    {tile.icon && tile.icon.asset && (
                     <BlurImage
                     src={tile.icon?.asset?.url ? tile.icon.asset.url : urlFor(tile.icon.asset).url()}
                     alt={tile.tileTitle}
                     style={{ width: "100%", objectFit: "cover" }}
                     height={200}
                     width={200}
                   />
                    )}
                  </ExpandableSection>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export const ExpandableSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="expandable-section z-50">
      <div
        className={clsx(
          isOpen && "shadow-xl",
          "expandable-header !bg-white rounded-lg shadow-md px-4 justify-center py-3 inline-flex gap-x-4 w-full"
        )}
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer", padding: "10px", background: "#f0f0f0" }}
      >
        <h3 className="!text-xl lg:text-2xl xl:text-3xl font-bold">{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="expandable-content pt-4 px-6 text-white">{children}</div>}
    </div>
  );
};